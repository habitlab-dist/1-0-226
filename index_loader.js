(function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(r,'a',r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='',t(t.s=871)})({22:function(e,t,r){var n,o,a,i,d,s,l,c,u,f,g,p,y,b,h,m,_,v,I,S,E,x,j,N='undefined'!=typeof t&&t||this;n=r(57),o=r(3),a=o.gexport,i=o.gexport_module,null==('undefined'!=typeof chrome&&null!==chrome?null==(o=chrome.runtime)?void 0:o.getManifest:void 0)?(s='test',l=!1):(d=chrome.runtime.getManifest(),s=d.version.split('.').join('-'),l=null!=d.update_url||'true'===localStorage.getItem('devmode_use_cache')),c=null,u=function(){return null==c&&(l?c=n.createInstance({name:'localget'}):c={setItem:async function(){},getItem:async function(){}}),c},f=null,g=function(){return null==f&&(f=n.createInstance({name:'remoteget'})),f},p=null,y=function(){return null==p&&(p=n.createInstance({name:'systemjsget'})),p},N.clear_cache_localget=b=async function(){var e;return e=u(),await e.clear()},N.clear_cache_remoteget=h=async function(){var e;return e=g(),await e.clear()},N.clear_cache_systemjs=m=async function(){var e;return e=y(),await e.clear()},N.localget=_=async function(e){var t,r,n;return(t=u(),r=await t.getItem(e),null!=r)?r:(n=await fetch(e),r=await n.text(),null!=r&&(await t.setItem(e,r)),r)},N.localget_json=v=async function(e){var t;return t=await _(e),null==t?null:JSON.parse(t)},N.localget_base64=I=async function(e){var t;return t=await _(e),null==t?null:'data:text/plain;base64,'+btoa(unescape(encodeURIComponent(t)))},N.remoteget=S=async function(e){var t,r,n;return(t=g(),r=await t.getItem(e),null!=r)?r:(n=await fetch(e),r=await n.text(),null!=r&&(await t.setItem(e,r)),r)},N.remoteget_json=E=async function(e){var t;return t=await S(e),null==t?null:JSON.parse(t)},N.remoteget_base64=x=async function(e){var t;return t=await S(e),null==t?null:'data:text/plain;base64,'+btoa(unescape(encodeURIComponent(t)))},N.systemjsget=j=async function(e){var t,r,n,o=this;return l?(t=y(),e=e.replace(chrome.extension.getURL('/'),''),r=await t.getItem(e),null!=r)?r:(n=await fetch('https://habitlab-dist.github.io/'+s+'/'+e),r=await n.text(),null!=r&&(await t.setItem(e,r)),r):(e=e.replace(chrome.extension.getURL('/'),''),await fetch(chrome.extension.getURL('/'+e)).then(function(e){return e.text()}))},i('cacheget_utils',function(e){return eval(e)})},29:function(e){var t=function(){return this}();try{t=t||Function('return this')()||(1,eval)('this')}catch(r){'object'==typeof window&&(t=window)}e.exports=t},3:function(e,t){var r,n,o='undefined'!=typeof t&&t||this;o.gexport=r=function(e){var t,r;if(null==window.global_exports)return void console.log('calling gexport but global_exports is not defined');for(t in e)r=e[t],window.global_exports[t]=r},o.gexport_module=n=function(e,t){if(null!=window.global_exports)return window.global_exports['eval_'+e]=t,null==window.global_exports.gexport_eval_funcs&&(window.global_exports.gexport_eval_funcs={}),window.global_exports.gexport_eval_funcs[e]=t}},57:function(e,t,r){(function(t){var n,n;(function(t){e.exports=t()})(function(){return function a(d,e,t){function r(i,o){if(!e[i]){if(!d[i]){if(!o&&'function'==typeof n&&n)return n(i,!0);if(s)return s(i,!0);var c=new Error('Cannot find module \''+i+'\'');throw c.code='MODULE_NOT_FOUND',c}var f=e[i]={exports:{}};d[i][0].call(f.exports,function(t){var e=d[i][1][t];return r(e?e:t)},f,f.exports,a,d,e,t)}return e[i].exports}for(var s='function'==typeof n&&n,i=0;i<t.length;i++)r(t[i]);return r}({1:[function(e,t,r){'use strict';function n(){}function o(e){if('function'!=typeof e)throw new TypeError('resolver must be a function');this.state=p,this.queue=[],this.outcome=void 0,e!==n&&s(this,e)}function a(e,t,r){this.promise=e,'function'==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),'function'==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function i(t,e,r){c(function(){var n;try{n=e(r)}catch(r){return u.reject(t,r)}n===t?u.reject(t,new TypeError('Cannot resolve promise with itself')):u.resolve(t,n)})}function d(e){var t=e&&e.then;if(e&&'object'==typeof e&&'function'==typeof t)return function(){t.apply(e,arguments)}}function s(e,t){function r(t){o||(o=!0,u.reject(e,t))}function n(t){o||(o=!0,u.resolve(e,t))}var o=!1,a=l(function(){t(n,r)});'error'===a.status&&r(a.value)}function l(e,t){var r={};try{r.value=e(t),r.status='success'}catch(t){r.status='error',r.value=t}return r}var c=e(2),u={},f=['REJECTED'],g=['FULFILLED'],p=['PENDING'];t.exports=r=o,o.prototype['catch']=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if('function'!=typeof e&&this.state===g||'function'!=typeof t&&this.state===f)return this;var r=new this.constructor(n);if(this.state!==p){var o=this.state===g?e:t;i(r,o,this.outcome)}else this.queue.push(new a(r,e,t));return r},a.prototype.callFulfilled=function(e){u.resolve(this.promise,e)},a.prototype.otherCallFulfilled=function(e){i(this.promise,this.onFulfilled,e)},a.prototype.callRejected=function(e){u.reject(this.promise,e)},a.prototype.otherCallRejected=function(e){i(this.promise,this.onRejected,e)},u.resolve=function(e,t){var r=l(d,t);if('error'===r.status)return u.reject(e,r.value);var n=r.value;if(n)s(e,n);else{e.state=g,e.outcome=t;for(var o=-1,a=e.queue.length;++o<a;)e.queue[o].callFulfilled(t)}return e},u.reject=function(e,t){e.state=f,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},r.resolve=function(e){return e instanceof this?e:u.resolve(new this(n),e)},r.reject=function(e){var t=new this(n);return u.reject(t,e)},r.all=function(e){function t(e,t){r.resolve(e).then(function(e){d[t]=e,++s!==o||a||(a=!0,u.resolve(c,d))},function(e){a||(a=!0,u.reject(c,e))})}var r=this;if('[object Array]'!==Object.prototype.toString.call(e))return this.reject(new TypeError('must be an array'));var o=e.length,a=!1;if(!o)return this.resolve([]);for(var d=Array(o),s=0,l=-1,c=new this(n);++l<o;)t(e[l],l);return c},r.race=function(e){function t(e){r.resolve(e).then(function(e){a||(a=!0,u.resolve(i,e))},function(e){a||(a=!0,u.reject(i,e))})}var r=this;if('[object Array]'!==Object.prototype.toString.call(e))return this.reject(new TypeError('must be an array'));var o=e.length,a=!1;if(!o)return this.resolve([]);for(var d=-1,i=new this(n);++d<o;)t(e[d]);return i}},{2:2}],2:[function(e,r){(function(e){'use strict';function t(){l=!0;for(var e,t,r=c.length;r;){for(t=c,c=[],e=-1;++e<r;)t[e]();r=c.length}l=!1}var n,o=e.MutationObserver||e.WebKitMutationObserver;if(o){var a=0,i=new o(t),d=e.document.createTextNode('');i.observe(d,{characterData:!0}),n=function(){d.data=a=++a%2}}else if(!e.setImmediate&&'undefined'!=typeof e.MessageChannel){var s=new e.MessageChannel;s.port1.onmessage=t,n=function(){s.port2.postMessage(0)}}else n='document'in e&&'onreadystatechange'in e.document.createElement('script')?function(){var r=e.document.createElement('script');r.onreadystatechange=function(){t(),r.onreadystatechange=null,r.parentNode.removeChild(r),r=null},e.document.documentElement.appendChild(r)}:function(){setTimeout(t,0)};var l,c=[];r.exports=function(e){1!==c.push(e)||l||n()}}).call(this,'undefined'==typeof t?'undefined'==typeof self?'undefined'==typeof window?{}:window:self:t)},{}],3:[function(e){(function(t){'use strict';'function'!=typeof t.Promise&&(t.Promise=e(1))}).call(this,'undefined'==typeof t?'undefined'==typeof self?'undefined'==typeof window?{}:window:self:t)},{1:1}],4:[function(e,t){'use strict';function r(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}function n(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(a){if('TypeError'!==a.name)throw a;for(var r='undefined'==typeof BlobBuilder?'undefined'==typeof MSBlobBuilder?'undefined'==typeof MozBlobBuilder?WebKitBlobBuilder:MozBlobBuilder:MSBlobBuilder:BlobBuilder,n=new r,o=0;o<e.length;o+=1)n.append(e[o]);return n.getBlob(t.type)}}function o(e,t){t&&e.then(function(e){t(null,e)},function(e){t(e)})}function a(e,t,r){'function'==typeof t&&e.then(t),'function'==typeof r&&e['catch'](r)}function i(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),o=0;o<t;o++)n[o]=e.charCodeAt(o);return r}function d(e){return new R(function(t){var r=n(['']);e.objectStore(O).put(r,'key'),e.onabort=function(r){r.preventDefault(),r.stopPropagation(),t(!1)},e.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),r=navigator.userAgent.match(/Edge\//);t(r||!e||43<=parseInt(e[1],10))}})['catch'](function(){return!1})}function s(e){return'boolean'==typeof N?R.resolve(N):d(e).then(function(e){return N=e,N})}function l(e){var t=k[e.name],r={};r.promise=new R(function(e){r.resolve=e}),t.deferredOperations.push(r),t.dbReady=t.dbReady?t.dbReady.then(function(){return r.promise}):r.promise}function c(e){var t=k[e.name],r=t.deferredOperations.pop();r&&r.resolve()}function u(t,e){return new R(function(r,n){if(t.db)if(e)l(t),t.db.close();else return r(t.db);var o=[t.name];e&&o.push(t.version);var a=j.open.apply(j,o);e&&(a.onupgradeneeded=function(r){var e=a.result;try{e.createObjectStore(t.storeName),1>=r.oldVersion&&e.createObjectStore(O)}catch(e){if('ConstraintError'===e.name)console.warn('The database "'+t.name+'" has been upgraded from version '+r.oldVersion+' to version '+r.newVersion+', but the storage "'+t.storeName+'" already exists.');else throw e}}),a.onerror=function(){n(a.error)},a.onsuccess=function(){r(a.result),c(t)}})}function f(e){return u(e,!1)}function g(e){return u(e,!0)}function p(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,o=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+'" can\'t be downgraded from version '+e.db.version+' to version '+e.version+'.'),e.version=e.db.version),o||r){if(r){var a=e.db.version+1;a>e.version&&(e.version=a)}return!0}return!1}function y(t){return new R(function(r,e){var n=new FileReader;n.onerror=e,n.onloadend=function(n){var e=btoa(n.target.result||'');r({__local_forage_encoded_blob:!0,data:e,type:t.type})},n.readAsBinaryString(t)})}function b(e){var t=i(atob(e.data));return n([t],{type:e.type})}function h(e){return e&&e.__local_forage_encoded_blob}function m(e){var t=this,r=t._initReady().then(function(){var e=k[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady});return a(r,e,e),r}function _(e){var t,r,n,o,a,i=0.75*e.length,d=e.length,s=0;'='===e[e.length-1]&&(i--,'='===e[e.length-2]&&i--);var l=new ArrayBuffer(i),c=new Uint8Array(l);for(t=0;t<d;t+=4)r=L.indexOf(e[t]),n=L.indexOf(e[t+1]),o=L.indexOf(e[t+2]),a=L.indexOf(e[t+3]),c[s++]=r<<2|n>>4,c[s++]=(15&n)<<4|o>>2,c[s++]=(3&o)<<6|63&a;return l}function v(e){var t,r=new Uint8Array(e),n='';for(t=0;t<r.length;t+=3)n+=L[r[t]>>2],n+=L[(3&r[t])<<4|r[t+1]>>4],n+=L[(15&r[t+1])<<2|r[t+2]>>6],n+=L[63&r[t+2]];return 2==r.length%3?n=n.substring(0,n.length-1)+'=':1==r.length%3&&(n=n.substring(0,n.length-2)+'=='),n}function I(e,t){e[t]=function(){var r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function S(){for(var e,t=1;t<arguments.length;t++)if(e=arguments[t],e)for(var r in e)e.hasOwnProperty(r)&&(arguments[0][r]=oe(e[r])?e[r].slice():e[r]);return arguments[0]}function E(e){for(var t in $)if($.hasOwnProperty(t)&&$[t]===e)return!0;return!1}var x='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e},j=function(){try{if('undefined'!=typeof indexedDB)return indexedDB;if('undefined'!=typeof webkitIndexedDB)return webkitIndexedDB;if('undefined'!=typeof mozIndexedDB)return mozIndexedDB;if('undefined'!=typeof OIndexedDB)return OIndexedDB;if('undefined'!=typeof msIndexedDB)return msIndexedDB}catch(t){}}();'undefined'==typeof Promise&&'undefined'!=typeof e&&e(3);var N,k,R=Promise,O='local-forage-detect-blob-support',A=Object.prototype.toString,D={_driver:'asyncStorage',_initStorage:function(e){function t(){return R.resolve()}var r=this,n={db:null};if(e)for(var o in e)n[o]=e[o];k||(k={});var a=k[n.name];a||(a={forages:[],db:null,dbReady:null,deferredOperations:[]},k[n.name]=a),a.forages.push(r),r._initReady||(r._initReady=r.ready,r.ready=m);for(var i,d=[],s=0;s<a.forages.length;s++)i=a.forages[s],i!==r&&d.push(i._initReady()['catch'](t));var l=a.forages.slice(0);return R.all(d).then(function(){return n.db=a.db,f(n)}).then(function(e){return n.db=e,p(n,r._defaultConfig.version)?g(n):e}).then(function(e){n.db=a.db=e,r._dbInfo=n;for(var t,o=0;o<l.length;o++)t=l[o],t!==r&&(t._dbInfo.db=n.db,t._dbInfo.version=n.version)})},iterate:function(e,t){var r=this,n=new R(function(t,n){r.ready().then(function(){var o=r._dbInfo,a=o.db.transaction(o.storeName,'readonly').objectStore(o.storeName),i=a.openCursor(),d=1;i.onsuccess=function(){var r=i.result;if(r){var n=r.value;h(n)&&(n=b(n));var o=e(n,r.key,d++);void 0===o?r['continue']():t(o)}else t()},i.onerror=function(){n(i.error)}})['catch'](n)});return o(n,t),n},getItem:function(e,t){var r=this;'string'!=typeof e&&(console.warn(e+' used as a key, but it is not a string.'),e+='');var n=new R(function(t,n){r.ready().then(function(){var o=r._dbInfo,a=o.db.transaction(o.storeName,'readonly').objectStore(o.storeName),i=a.get(e);i.onsuccess=function(){var e=i.result;void 0===e&&(e=null),h(e)&&(e=b(e)),t(e)},i.onerror=function(){n(i.error)}})['catch'](n)});return o(n,t),n},setItem:function(e,t,r){var n=this;'string'!=typeof e&&(console.warn(e+' used as a key, but it is not a string.'),e+='');var a=new R(function(r,o){var a;n.ready().then(function(){return a=n._dbInfo,'[object Blob]'===A.call(t)?s(a.db).then(function(e){return e?t:y(t)}):t}).then(function(t){var n=a.db.transaction(a.storeName,'readwrite'),i=n.objectStore(a.storeName);null===t&&(t=void 0),n.oncomplete=function(){void 0===t&&(t=null),r(t)},n.onabort=n.onerror=function(){var e=d.error?d.error:d.transaction.error;o(e)};var d=i.put(t,e)})['catch'](o)});return o(a,r),a},removeItem:function(e,t){var r=this;'string'!=typeof e&&(console.warn(e+' used as a key, but it is not a string.'),e+='');var n=new R(function(t,n){r.ready().then(function(){var o=r._dbInfo,a=o.db.transaction(o.storeName,'readwrite'),i=a.objectStore(o.storeName),d=i['delete'](e);a.oncomplete=function(){t()},a.onerror=function(){n(d.error)},a.onabort=function(){var e=d.error?d.error:d.transaction.error;n(e)}})['catch'](n)});return o(n,t),n},clear:function(e){var t=this,r=new R(function(e,r){t.ready().then(function(){var n=t._dbInfo,o=n.db.transaction(n.storeName,'readwrite'),a=o.objectStore(n.storeName),i=a.clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=i.error?i.error:i.transaction.error;r(e)}})['catch'](r)});return o(r,e),r},length:function(e){var t=this,r=new R(function(e,r){t.ready().then(function(){var n=t._dbInfo,o=n.db.transaction(n.storeName,'readonly').objectStore(n.storeName),a=o.count();a.onsuccess=function(){e(a.result)},a.onerror=function(){r(a.error)}})['catch'](r)});return o(r,e),r},key:function(e,t){var r=this,n=new R(function(t,n){return 0>e?void t(null):void r.ready().then(function(){var o=r._dbInfo,a=o.db.transaction(o.storeName,'readonly').objectStore(o.storeName),i=!1,d=a.openCursor();d.onsuccess=function(){var r=d.result;return r?void(0===e?t(r.key):i?t(r.key):(i=!0,r.advance(e))):void t(null)},d.onerror=function(){n(d.error)}})['catch'](n)});return o(n,t),n},keys:function(e){var t=this,r=new R(function(e,r){t.ready().then(function(){var n=t._dbInfo,o=n.db.transaction(n.storeName,'readonly').objectStore(n.storeName),a=o.openCursor(),i=[];a.onsuccess=function(){var t=a.result;return t?void(i.push(t.key),t['continue']()):void e(i)},a.onerror=function(){r(a.error)}})['catch'](r)});return o(r,e),r}},L='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',C=/^~~local_forage_type~([^~]+)~/,w='__lfsc__:',T=w.length,M='arbf',B='blob',F='si08',z='ui08',P='uic8',U='si16',q='si32',W='ur16',Q='ui32',G='fl32',X='fl64',V=T+M.length,H=Object.prototype.toString,J={serialize:function(t,r){var e='';if(t&&(e=H.call(t)),t&&('[object ArrayBuffer]'===e||t.buffer&&'[object ArrayBuffer]'===H.call(t.buffer))){var n,o=w;t instanceof ArrayBuffer?(n=t,o+=M):(n=t.buffer,'[object Int8Array]'===e?o+=F:'[object Uint8Array]'===e?o+=z:'[object Uint8ClampedArray]'===e?o+=P:'[object Int16Array]'===e?o+=U:'[object Uint16Array]'===e?o+=W:'[object Int32Array]'===e?o+=q:'[object Uint32Array]'===e?o+=Q:'[object Float32Array]'===e?o+=G:'[object Float64Array]'===e?o+=X:r(new Error('Failed to get type for BinaryArray'))),r(o+v(n))}else if('[object Blob]'===e){var a=new FileReader;a.onload=function(){var e='~~local_forage_type~'+t.type+'~'+v(this.result);r(w+B+e)},a.readAsArrayBuffer(t)}else try{r(JSON.stringify(t))}catch(n){console.error('Couldn\'t convert value into a JSON string: ',t),r(null,n)}},deserialize:function(e){if(e.substring(0,T)!==w)return JSON.parse(e);var t,r=e.substring(V),o=e.substring(T,V);if(o===B&&C.test(r)){var a=r.match(C);t=a[1],r=r.substring(a[0].length)}var i=_(r);switch(o){case M:return i;case B:return n([i],{type:t});case F:return new Int8Array(i);case z:return new Uint8Array(i);case P:return new Uint8ClampedArray(i);case U:return new Int16Array(i);case W:return new Uint16Array(i);case q:return new Int32Array(i);case Q:return new Uint32Array(i);case G:return new Float32Array(i);case X:return new Float64Array(i);default:throw new Error('Unkown type: '+o);}},stringToBuffer:_,bufferToString:v},Y={_driver:'webSQLStorage',_initStorage:function(e){var t=this,r={db:null};if(e)for(var n in e)r[n]='string'==typeof e[n]?e[n]:e[n].toString();var o=new R(function(e,n){try{r.db=openDatabase(r.name,r.version+'',r.description,r.size)}catch(t){return n(t)}r.db.transaction(function(o){o.executeSql('CREATE TABLE IF NOT EXISTS '+r.storeName+' (id INTEGER PRIMARY KEY, key unique, value)',[],function(){t._dbInfo=r,e()},function(e,t){n(t)})})});return r.serializer=J,o},iterate:function(e,t){var r=this,n=new R(function(n,o){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(r){r.executeSql('SELECT * FROM '+a.storeName,[],function(r,t){for(var o=t.rows,d=o.length,s=0;s<d;s++){var i=o.item(s),l=i.value;if(l&&(l=a.serializer.deserialize(l)),l=e(l,i.key,s+1),void 0!==l)return void n(l)}n()},function(e,t){o(t)})})})['catch'](o)});return o(n,t),n},getItem:function(e,t){var r=this;'string'!=typeof e&&(console.warn(e+' used as a key, but it is not a string.'),e+='');var n=new R(function(n,o){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(r){r.executeSql('SELECT * FROM '+a.storeName+' WHERE key = ? LIMIT 1',[e],function(e,t){var r=t.rows.length?t.rows.item(0).value:null;r&&(r=a.serializer.deserialize(r)),n(r)},function(e,t){o(t)})})})['catch'](o)});return o(n,t),n},setItem:function(e,t,r){var n=this;'string'!=typeof e&&(console.warn(e+' used as a key, but it is not a string.'),e+='');var a=new R(function(r,o){n.ready().then(function(){void 0===t&&(t=null);var a=t,i=n._dbInfo;i.serializer.serialize(t,function(n,t){t?o(t):i.db.transaction(function(d){d.executeSql('INSERT OR REPLACE INTO '+i.storeName+' (key, value) VALUES (?, ?)',[e,n],function(){r(a)},function(e,t){o(t)})},function(e){e.code===e.QUOTA_ERR&&o(e)})})})['catch'](o)});return o(a,r),a},removeItem:function(e,t){var r=this;'string'!=typeof e&&(console.warn(e+' used as a key, but it is not a string.'),e+='');var n=new R(function(t,n){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(r){r.executeSql('DELETE FROM '+o.storeName+' WHERE key = ?',[e],function(){t()},function(e,t){n(t)})})})['catch'](n)});return o(n,t),n},clear:function(e){var t=this,r=new R(function(e,r){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(o){o.executeSql('DELETE FROM '+n.storeName,[],function(){e()},function(e,t){r(t)})})})['catch'](r)});return o(r,e),r},length:function(e){var t=this,r=new R(function(e,r){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(o){o.executeSql('SELECT COUNT(key) as c FROM '+n.storeName,[],function(r,t){var n=t.rows.item(0).c;e(n)},function(e,t){r(t)})})})['catch'](r)});return o(r,e),r},key:function(e,t){var r=this,n=new R(function(n,o){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(r){r.executeSql('SELECT key FROM '+a.storeName+' WHERE id = ? LIMIT 1',[e+1],function(e,t){var r=t.rows.length?t.rows.item(0).key:null;n(r)},function(e,t){o(t)})})})['catch'](o)});return o(n,t),n},keys:function(e){var t=this,r=new R(function(e,r){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(o){o.executeSql('SELECT key FROM '+n.storeName,[],function(r,t){for(var n=[],o=0;o<t.rows.length;o++)n.push(t.rows.item(o).key);e(n)},function(e,t){r(t)})})})['catch'](r)});return o(r,e),r}},K={_driver:'localStorageWrapper',_initStorage:function(e){var t=this,r={};if(e)for(var n in e)r[n]=e[n];return r.keyPrefix=r.name+'/',r.storeName!==t._defaultConfig.storeName&&(r.keyPrefix+=r.storeName+'/'),t._dbInfo=r,r.serializer=J,R.resolve()},iterate:function(e,t){var r=this,n=r.ready().then(function(){for(var t,n=r._dbInfo,o=n.keyPrefix,a=o.length,d=localStorage.length,s=1,l=0;l<d;l++)if(t=localStorage.key(l),0===t.indexOf(o)){var i=localStorage.getItem(t);if(i&&(i=n.serializer.deserialize(i)),i=e(i,t.substring(a),s++),void 0!==i)return i}});return o(n,t),n},getItem:function(e,t){var r=this;'string'!=typeof e&&(console.warn(e+' used as a key, but it is not a string.'),e+='');var n=r.ready().then(function(){var t=r._dbInfo,n=localStorage.getItem(t.keyPrefix+e);return n&&(n=t.serializer.deserialize(n)),n});return o(n,t),n},setItem:function(e,t,r){var n=this;'string'!=typeof e&&(console.warn(e+' used as a key, but it is not a string.'),e+='');var a=n.ready().then(function(){void 0===t&&(t=null);var r=t;return new R(function(o,a){var i=n._dbInfo;i.serializer.serialize(t,function(t,n){if(n)a(n);else try{localStorage.setItem(i.keyPrefix+e,t),o(r)}catch(t){('QuotaExceededError'===t.name||'NS_ERROR_DOM_QUOTA_REACHED'===t.name)&&a(t),a(t)}})})});return o(a,r),a},removeItem:function(e,t){var r=this;'string'!=typeof e&&(console.warn(e+' used as a key, but it is not a string.'),e+='');var n=r.ready().then(function(){var t=r._dbInfo;localStorage.removeItem(t.keyPrefix+e)});return o(n,t),n},clear:function(e){var t=this,r=t.ready().then(function(){for(var e,r=t._dbInfo.keyPrefix,n=localStorage.length-1;0<=n;n--)e=localStorage.key(n),0===e.indexOf(r)&&localStorage.removeItem(e)});return o(r,e),r},length:function(e){var t=this,r=t.keys().then(function(e){return e.length});return o(r,e),r},key:function(e,t){var r=this,n=r.ready().then(function(){var t,n=r._dbInfo;try{t=localStorage.key(e)}catch(e){t=null}return t&&(t=t.substring(n.keyPrefix.length)),t});return o(n,t),n},keys:function(e){var t=this,r=t.ready().then(function(){for(var e=t._dbInfo,r=localStorage.length,n=[],o=0;o<r;o++)0===localStorage.key(o).indexOf(e.keyPrefix)&&n.push(localStorage.key(o).substring(e.keyPrefix.length));return n});return o(r,e),r}},Z={},$={INDEXEDDB:'asyncStorage',LOCALSTORAGE:'localStorageWrapper',WEBSQL:'webSQLStorage'},ee=[$.INDEXEDDB,$.WEBSQL,$.LOCALSTORAGE],te=['clear','getItem','iterate','key','keys','length','removeItem','setItem'],re={description:'',driver:ee.slice(),name:'localforage',size:4980736,storeName:'keyvaluepairs',version:1},ne={};ne[$.INDEXEDDB]=function(){try{return!!j&&('undefined'!=typeof openDatabase&&'undefined'!=typeof navigator&&navigator.userAgent&&/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)?!1:j&&'function'==typeof j.open&&'undefined'!=typeof IDBKeyRange)}catch(t){return!1}}(),ne[$.WEBSQL]=function(){return'function'==typeof openDatabase}(),ne[$.LOCALSTORAGE]=function(){try{return'undefined'!=typeof localStorage&&'setItem'in localStorage&&localStorage.setItem}catch(t){return!1}}();var oe=Array.isArray||function(e){return'[object Array]'===Object.prototype.toString.call(e)},ae=function(){function e(t){r(this,e),this.INDEXEDDB=$.INDEXEDDB,this.LOCALSTORAGE=$.LOCALSTORAGE,this.WEBSQL=$.WEBSQL,this._defaultConfig=S({},re),this._config=S({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver)}return e.prototype.config=function(e){if('object'===('undefined'==typeof e?'undefined':x(e))){if(this._ready)return new Error('Can\'t call config() after localforage has been used.');for(var t in e)'storeName'==t&&(e[t]=e[t].replace(/\W/g,'_')),this._config[t]=e[t];return'driver'in e&&e.driver&&this.setDriver(this._config.driver),!0}return'string'==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,t,r){var n=new R(function(t,r){try{var n=e._driver,o=new Error('Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver'),a=new Error('Custom driver name already in use: '+e._driver);if(!e._driver)return void r(o);if(E(e._driver))return void r(a);for(var d,s=te.concat('_initStorage'),l=0;l<s.length;l++)if(d=s[l],!d||!e[d]||'function'!=typeof e[d])return void r(o);var i=R.resolve(!0);'_support'in e&&(e._support&&'function'==typeof e._support?i=e._support():i=R.resolve(!!e._support)),i.then(function(r){ne[n]=r,Z[n]=e,t()},r)}catch(t){r(t)}});return a(n,t,r),n},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,t,r){var n=this,o=R.resolve().then(function(){if(E(e))switch(e){case n.INDEXEDDB:return D;case n.LOCALSTORAGE:return K;case n.WEBSQL:return Y;}else{if(Z[e])return Z[e];throw new Error('Driver not found.')}});return a(o,t,r),o},e.prototype.getSerializer=function(e){var t=R.resolve(J);return a(t,e),t},e.prototype.ready=function(e){var t=this,r=t._driverSet.then(function(){return null===t._ready&&(t._ready=t._initDriver()),t._ready});return a(r,e,e),r},e.prototype.setDriver=function(e,t,r){function n(){i._config.driver=i.driver()}function o(e){return function(){function t(){for(;r<e.length;){var o=e[r];return r++,i._dbInfo=null,i._ready=null,i.getDriver(o).then(function(e){return i._extend(e),n(),i._ready=i._initStorage(i._config),i._ready})['catch'](t)}n();var a=new Error('No available storage method found.');return i._driverSet=R.reject(a),i._driverSet}var r=0;return t()}}var i=this;oe(e)||(e=[e]);var d=this._getSupportedDrivers(e),s=null===this._driverSet?R.resolve():this._driverSet['catch'](function(){return R.resolve()});return this._driverSet=s.then(function(){var e=d[0];return i._dbInfo=null,i._ready=null,i.getDriver(e).then(function(e){i._driver=e._driver,n(),i._wrapLibraryMethodsWithReady(),i._initDriver=o(d)})})['catch'](function(){n();var e=new Error('No available storage method found.');return i._driverSet=R.reject(e),i._driverSet}),a(this._driverSet,t,r),this._driverSet},e.prototype.supports=function(e){return!!ne[e]},e.prototype._extend=function(e){S(this,e)},e.prototype._getSupportedDrivers=function(e){for(var t,r=[],n=0,o=e.length;n<o;n++)t=e[n],this.supports(t)&&r.push(t);return r},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0;e<te.length;e++)I(this,te[e])},e.prototype.createInstance=function(t){return new e(t)},e}(),ie=new ae;t.exports=ie},{3:3}]},{},[4])(4)})}).call(t,r(29))},633:function(e,t,r){(function(){var{systemjsget:e}=r(22),t=setTimeout(function(){if(null!=t){var e=document.createElement('img');e.setAttribute('src',chrome.extension.getURL('/icons/spinner.svg')),e.setAttribute('id','loadingspinner'),e.style.width='100vw',e.style.height='100vh',document.body.style.overflow='hidden',document.body.appendChild(e)}},500);e('index.js').then(function(e){clearTimeout(t),t=null;var r=document.getElementById('loadingspinner');null!=r&&(r.remove(),document.body.style.overflow=''),eval(e)})})()},871:function(e,t,r){e.exports=r(633)}});