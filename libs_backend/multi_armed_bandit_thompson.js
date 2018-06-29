(function(){
  var ref$, gexport, gexport_module, as_array, bandits, get_seconds_spent_for_each_session_per_intervention, list_enabled_interventions_for_goal, get_goals, gaussian, ThompsonMAB, train_multi_armed_bandit_for_goal, intervention_utils, intervention_manager, goal_progress, __get__, __set__, out$ = typeof exports != 'undefined' && exports || this;
  ref$ = require('libs_common/gexport'), gexport = ref$.gexport, gexport_module = ref$.gexport_module;
  as_array = require('libs_common/collection_utils').as_array;
  bandits = require('percipio').bandits;
  ref$ = require('libs_backend/intervention_utils'), get_seconds_spent_for_each_session_per_intervention = ref$.get_seconds_spent_for_each_session_per_intervention, list_enabled_interventions_for_goal = ref$.list_enabled_interventions_for_goal;
  get_goals = require('libs_backend/goal_utils').get_goals;
  gaussian = require('gaussian');
  /**
   * This algorithm recommends interventions using the Generalized Thompson Sampling Algorithm.
   * This Thompson Sampling Algorithm draws inspiration from:
   * Daniel J. Russo, Benjamin Van Roy, Abbas Kazerouni, Ian
   * Osband and Zheng Wen (2018), “A Tutorial on Thompson Sampling”, Foundations and
   * Trends in Machine Learning: Vol. 11, No. 1, pp 1–96. DOI: 10.1561/2200000070.
   * This ThompsonSampling is designed solely for sampling a multi-armbed-bandit problem with TIME observations.
   * Currently, we will train the algorithm with all previous sessions on each instance of the extension
   * TODO: Investigate whether this will cause a performance bottleneck and rewrite the algorithm to 
   * maintain the posterior and only train with one new instance each time.
   */
  out$.ThompsonMAB = ThompsonMAB = (function(){
    /**
     * Instantiates Thompson Multi Armed Bandit with Prior Distribution Parameters.
     * Note, our observations are time, so we can assume that our observations are log-Gaussian distributed.
     * For each arm (intervention), we will have parameters.
     * We will choose our prior parameters to be $$\mu_e=-1/2$$ and $$\sigma_e^2=1$$ so $$E[\theta_e]=1$$
     * We will also assume that our sigma_tilde (Gaussian Noise) is 1. TODO: Investigate this assumption.
     * @param arms_list: a list of intervention names.
     */
    ThompsonMAB.displayName = 'ThompsonMAB';
    var prototype = ThompsonMAB.prototype, constructor = ThompsonMAB;
    function ThompsonMAB(arms_list){
      var mu, sigma, i$, len$, intervention_name;
      this.arms_list = arms_list;
      this.sigma_tilde = 1;
      mu = -1 / 2;
      sigma = 1;
      this.posterior_params = {};
      for (i$ = 0, len$ = arms_list.length; i$ < len$; ++i$) {
        intervention_name = arms_list[i$];
        this.posterior_params[intervention_name] = [mu, sigma];
      }
      this.norm_distribution = gaussian(0, 1);
    }
    /**
     * Learns this new observation and updates the posterior.
     * @param arm: name of intervention.
     * @param observation: time spent with that intervention.
     */
    ThompsonMAB.prototype.learn = function(arm, observation){
      var intervention_name, old_std, old_mean, old_precision, noise_precision, new_precision, new_mean, new_std;
      if (observation <= 0) {
        observation = 1;
      }
      intervention_name = arm;
      old_std = this.posterior_params[intervention_name][1];
      old_mean = this.posterior_params[intervention_name][0];
      old_precision = 1.0 / Math.pow(old_std, 2);
      noise_precision = 1.0 / Math.pow(this.sigma_tilde, 2);
      new_precision = old_precision + noise_precision;
      new_mean = (noise_precision * (Math.log(observation) + 0.5 / noise_precision) + old_precision * old_mean) / new_precision;
      new_std = Math.sqrt(1.0 / new_precision).sampling;
      return this.posterior_params[intervention_name] = [new_mean, new_std];
    };
    /**
     * Based on our posterior parameters, predict which intervention to choose to minimize time spent.
     * @return: the name of the intervention we recommend.
     */
    ThompsonMAB.prototype.predict = function(){
      var best_intervention, i$, ref$, len$, intervention_name, params, omean, std, Z, reward;
      best_intervention = {};
      console.log(this.posterior_params);
      for (i$ = 0, len$ = (ref$ = this.arms_list).length; i$ < len$; ++i$) {
        intervention_name = ref$[i$];
        params = this.posterior_params[intervention_name];
        omean = params[0];
        std = params[1];
        Z = this.norm_distribution.ppf(Math.random());
        reward = -Math.exp(omean + std * Z);
        console.log(intervention_name + " w/ reward " + reward);
        if (best_intervention.intervention_name == null || best_intervention.reward < reward) {
          best_intervention.intervention_name = intervention_name;
          best_intervention.reward = reward;
        }
      }
      return best_intervention.intervention_name;
    };
    return ThompsonMAB;
  }());
  /**
   * Trains predictor for choosing which intervention to use given a goal using Thompson Sampling.
   * Each sample is the session length using an intervention.
   * @return A predictor for which intervention to choose.
   */
  out$.train_multi_armed_bandit_for_goal = train_multi_armed_bandit_for_goal = async function(goal_name, intervention_names){
    var bandit, goals, intervention_times, intervention_name, i$, ref$, len$, time;
    bandit = new ThompsonMAB(intervention_names);
    if (intervention_names == null) {
      intervention_names = (await intervention_utils.list_enabled_interventions_for_goal(goal_name));
    }
    goals = (await get_goals());
    intervention_times = (await intervention_utils.get_seconds_spent_for_each_session_per_intervention(goals[goal_name].domain));
    for (intervention_name in intervention_times) {
      for (i$ = 0, len$ = (ref$ = intervention_times[intervention_name]).length; i$ < len$; ++i$) {
        time = ref$[i$];
        bandit.learn(intervention_name, time);
      }
    }
    return bandit;
  };
  intervention_utils = require('libs_backend/intervention_utils');
  intervention_manager = require('libs_backend/intervention_manager');
  goal_progress = require('libs_backend/goal_progress');
  out$.__get__ = __get__ = function(name){
    return eval(name);
  };
  out$.__set__ = __set__ = function(name, val){
    return eval(name + ' = val');
  };
  gexport_module('multi_armed_bandit_thompson', function(it){
    return eval(it);
  });
}).call(this);
