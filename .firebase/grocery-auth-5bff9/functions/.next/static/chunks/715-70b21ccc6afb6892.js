"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[715],{1853:function(t,e,s){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=s(2265),n="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},u=i.useState,o=i.useEffect,a=i.useLayoutEffect,l=i.useDebugValue;function r(t){var e=t.getSnapshot;t=t.value;try{var s=e();return!n(t,s)}catch(t){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var s=e(),i=u({inst:{value:s,getSnapshot:e}}),n=i[0].inst,c=i[1];return a(function(){n.value=s,n.getSnapshot=e,r(n)&&c({inst:n})},[t,s,e]),o(function(){return r(n)&&c({inst:n}),t(function(){r(n)&&c({inst:n})})},[t]),l(s),s};e.useSyncExternalStore=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:c},6272:function(t,e,s){t.exports=s(1853)},127:function(t,e,s){s.d(e,{z:function(){return QueryObserver}});var i=s(6504),n=s(7156),u=s(8202),o=s(9492),a=s(3238);let QueryObserver=class QueryObserver extends o.l{constructor(t,e){super(),this.client=t,this.options=e,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(e)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),shouldFetchOnMount(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return shouldFetchOn(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return shouldFetchOn(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,e){let s=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),(0,i.VS)(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();let u=this.hasListeners();u&&shouldFetchOptionally(this.currentQuery,n,this.options,s)&&this.executeFetch(),this.updateResult(e),u&&(this.currentQuery!==n||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();let o=this.computeRefetchInterval();u&&(this.currentQuery!==n||this.options.enabled!==s.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)}getOptimisticResult(t){let e=this.client.getQueryCache().build(this.client,t),s=this.createResult(e,t);return t.keepPreviousData||(void 0!==t.placeholderData?!s.isPlaceholderData:(0,i.VS)(this.getCurrentResult(),s))||(this.currentResult=s,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),s}getCurrentResult(){return this.currentResult}trackResult(t){let e={};return Object.keys(t).forEach(s=>{Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),t[s])})}),e}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...e}={}){return this.fetch({...e,meta:{refetchPage:t}})}fetchOptimistic(t){let e=this.client.defaultQueryOptions(t),s=this.client.getQueryCache().build(this.client,e);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,e))}fetch(t){var e;return this.executeFetch({...t,cancelRefetch:null==(e=t.cancelRefetch)||e}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let e=this.currentQuery.fetch(this.options,t);return null!=t&&t.throwOnError||(e=e.catch(i.ZT)),e}updateStaleTimeout(){if(this.clearStaleTimeout(),i.sk||this.currentResult.isStale||!(0,i.PN)(this.options.staleTime))return;let t=(0,i.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t+1)}computeRefetchInterval(){var t;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(t=this.options.refetchInterval)&&t}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!i.sk&&!1!==this.options.enabled&&(0,i.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||u.j.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,e){let s;let n=this.currentQuery,u=this.options,o=this.currentResult,l=this.currentResultState,c=this.currentResultOptions,h=t!==n,d=h?t.state:this.currentQueryInitialState,f=h?this.currentResult:this.previousQueryResult,{state:p}=t,{dataUpdatedAt:y,error:v,errorUpdatedAt:b,fetchStatus:R,status:g}=p,m=!1,O=!1;if(e._optimisticResults){let s=this.hasListeners(),i=!s&&shouldFetchOnMount(t,e),o=s&&shouldFetchOptionally(t,n,e,u);(i||o)&&(R=(0,a.Kw)(t.options.networkMode)?"fetching":"paused",y||(g="loading")),"isRestoring"===e._optimisticResults&&(R="idle")}if(e.keepPreviousData&&!p.dataUpdatedAt&&null!=f&&f.isSuccess&&"error"!==g)s=f.data,y=f.dataUpdatedAt,g=f.status,m=!0;else if(e.select&&void 0!==p.data){if(o&&p.data===(null==l?void 0:l.data)&&e.select===this.selectFn)s=this.selectResult;else try{this.selectFn=e.select,s=e.select(p.data),s=(0,i.oE)(null==o?void 0:o.data,s,e),this.selectResult=s,this.selectError=null}catch(t){this.selectError=t}}else s=p.data;if(void 0!==e.placeholderData&&void 0===s&&"loading"===g){let t;if(null!=o&&o.isPlaceholderData&&e.placeholderData===(null==c?void 0:c.placeholderData))t=o.data;else if(t="function"==typeof e.placeholderData?e.placeholderData():e.placeholderData,e.select&&void 0!==t)try{t=e.select(t),this.selectError=null}catch(t){this.selectError=t}void 0!==t&&(g="success",s=(0,i.oE)(null==o?void 0:o.data,t,e),O=!0)}this.selectError&&(v=this.selectError,s=this.selectResult,b=Date.now(),g="error");let Q="fetching"===R,S="loading"===g,E="error"===g,C={status:g,fetchStatus:R,isLoading:S,isSuccess:"success"===g,isError:E,isInitialLoading:S&&Q,data:s,dataUpdatedAt:y,error:v,errorUpdatedAt:b,failureCount:p.fetchFailureCount,failureReason:p.fetchFailureReason,errorUpdateCount:p.errorUpdateCount,isFetched:p.dataUpdateCount>0||p.errorUpdateCount>0,isFetchedAfterMount:p.dataUpdateCount>d.dataUpdateCount||p.errorUpdateCount>d.errorUpdateCount,isFetching:Q,isRefetching:Q&&!S,isLoadingError:E&&0===p.dataUpdatedAt,isPaused:"paused"===R,isPlaceholderData:O,isPreviousData:m,isRefetchError:E&&0!==p.dataUpdatedAt,isStale:isStale(t,e),refetch:this.refetch,remove:this.remove};return C}updateResult(t){let e=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,(0,i.VS)(s,e))return;this.currentResult=s;let n={cache:!0};(null==t?void 0:t.listeners)!==!1&&(()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,s="function"==typeof t?t():t;if("all"===s||!s&&!this.trackedProps.size)return!0;let i=new Set(null!=s?s:this.trackedProps);return this.options.useErrorBoundary&&i.add("error"),Object.keys(this.currentResult).some(t=>{let s=this.currentResult[t]!==e[t];return s&&i.has(t)})})()&&(n.listeners=!0),this.notify({...n,...t})}updateQuery(){let t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;let e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){let e={};"success"===t.type?e.onSuccess=!t.manual:"error"!==t.type||(0,a.DV)(t.error)||(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()}notify(t){n.V.batch(()=>{var e,s,i,n,u,o,a,l;t.onSuccess?(null==(e=(s=this.options).onSuccess)||e.call(s,this.currentResult.data),null==(i=(n=this.options).onSettled)||i.call(n,this.currentResult.data,null)):t.onError&&(null==(u=(o=this.options).onError)||u.call(o,this.currentResult.error),null==(a=(l=this.options).onSettled)||a.call(l,void 0,this.currentResult.error)),t.listeners&&this.listeners.forEach(({listener:t})=>{t(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}};function shouldFetchOnMount(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)||t.state.dataUpdatedAt>0&&shouldFetchOn(t,e,e.refetchOnMount)}function shouldFetchOn(t,e,s){if(!1!==e.enabled){let i="function"==typeof s?s(t):s;return"always"===i||!1!==i&&isStale(t,e)}return!1}function shouldFetchOptionally(t,e,s,i){return!1!==s.enabled&&(t!==e||!1===i.enabled)&&(!s.suspense||"error"!==t.state.status)&&isStale(t,s)}function isStale(t,e){return t.isStaleByTime(e.staleTime)}},7019:function(t,e,s){s.r(e),s.d(e,{Hydrate:function(){return Hydrate},useHydrate:function(){return useHydrate}});var i=s(2265),n=s(165);function useHydrate(t,e={}){let s=(0,n.useQueryClient)({context:e.context}),u=i.useRef(e);u.current=e,i.useMemo(()=>{t&&function(t,e,s){if("object"!=typeof e||null===e)return;let i=t.getMutationCache(),n=t.getQueryCache(),u=e.mutations||[],o=e.queries||[];u.forEach(e=>{var n;i.build(t,{...null==s?void 0:null==(n=s.defaultOptions)?void 0:n.mutations,mutationKey:e.mutationKey},e.state)}),o.forEach(({queryKey:e,state:i,queryHash:u})=>{var o;let a=n.get(u);if(a){if(a.state.dataUpdatedAt<i.dataUpdatedAt){let{fetchStatus:t,...e}=i;a.setState(e)}return}n.build(t,{...null==s?void 0:null==(o=s.defaultOptions)?void 0:o.queries,queryKey:e,queryHash:u},{...i,fetchStatus:"idle"})})}(s,t,u.current)},[s,t])}let Hydrate=({children:t,options:e,state:s})=>(useHydrate(s,e),t)},9676:function(t,e,s){s.r(e),s.d(e,{QueryErrorResetBoundary:function(){return QueryErrorResetBoundary},useQueryErrorResetBoundary:function(){return useQueryErrorResetBoundary}});var i=s(2265);function createValue(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}let n=i.createContext(createValue()),useQueryErrorResetBoundary=()=>i.useContext(n),QueryErrorResetBoundary=({children:t})=>{let[e]=i.useState(()=>createValue());return i.createElement(n.Provider,{value:e},"function"==typeof t?t(e):t)}},7843:function(t,e,s){s.d(e,{JN:function(){return useClearResetErrorBoundary},KJ:function(){return getHasError},pf:function(){return ensurePreventErrorBoundaryRetry}});var i=s(2265),n=s(7798);let ensurePreventErrorBoundaryRetry=(t,e)=>{(t.suspense||t.useErrorBoundary)&&!e.isReset()&&(t.retryOnMount=!1)},useClearResetErrorBoundary=t=>{i.useEffect(()=>{t.clearReset()},[t])},getHasError=({result:t,errorResetBoundary:e,useErrorBoundary:s,query:i})=>t.isError&&!e.isReset()&&!t.isFetching&&(0,n.L)(s,[t.error,i])},1963:function(t,e,s){s.r(e),s.d(e,{IsRestoringProvider:function(){return u},useIsRestoring:function(){return useIsRestoring}});var i=s(2265);let n=i.createContext(!1),useIsRestoring=()=>i.useContext(n),u=n.Provider},505:function(t,e,s){s.r(e),s.d(e,{unstable_batchedUpdates:function(){return n}});var i=s(4887);let n=i.unstable_batchedUpdates},8962:function(t,e,s){s.d(e,{Fb:function(){return ensureStaleTime},SB:function(){return shouldSuspend},Z$:function(){return willFetch},j8:function(){return fetchOptimistic}});let ensureStaleTime=t=>{t.suspense&&"number"!=typeof t.staleTime&&(t.staleTime=1e3)},willFetch=(t,e)=>t.isLoading&&t.isFetching&&!e,shouldSuspend=(t,e,s)=>(null==t?void 0:t.suspense)&&willFetch(e,s),fetchOptimistic=(t,e,s)=>e.fetchOptimistic(t).then(({data:e})=>{null==t.onSuccess||t.onSuccess(e),null==t.onSettled||t.onSettled(e,null)}).catch(e=>{s.clearReset(),null==t.onError||t.onError(e),null==t.onSettled||t.onSettled(void 0,e)})},4742:function(t,e,s){s.d(e,{r:function(){return useBaseQuery}});var i=s(2265),n=s(7156),u=s(5321),o=s(9676),a=s(165),l=s(1963),c=s(7843),h=s(8962);function useBaseQuery(t,e){let s=(0,a.useQueryClient)({context:t.context}),d=(0,l.useIsRestoring)(),f=(0,o.useQueryErrorResetBoundary)(),p=s.defaultQueryOptions(t);p._optimisticResults=d?"isRestoring":"optimistic",p.onError&&(p.onError=n.V.batchCalls(p.onError)),p.onSuccess&&(p.onSuccess=n.V.batchCalls(p.onSuccess)),p.onSettled&&(p.onSettled=n.V.batchCalls(p.onSettled)),(0,h.Fb)(p),(0,c.pf)(p,f),(0,c.JN)(f);let[y]=i.useState(()=>new e(s,p)),v=y.getOptimisticResult(p);if((0,u.$)(i.useCallback(t=>{let e=d?()=>void 0:y.subscribe(n.V.batchCalls(t));return y.updateResult(),e},[y,d]),()=>y.getCurrentResult(),()=>y.getCurrentResult()),i.useEffect(()=>{y.setOptions(p,{listeners:!1})},[p,y]),(0,h.SB)(p,v,d))throw(0,h.j8)(p,y,f);if((0,c.KJ)({result:v,errorResetBoundary:f,useErrorBoundary:p.useErrorBoundary,query:y.getCurrentQuery()}))throw v.error;return p.notifyOnChangeProps?v:y.trackResult(v)}},5164:function(t,e,s){s.r(e),s.d(e,{useInfiniteQuery:function(){return useInfiniteQuery}});var i=s(6504),n=s(127),u=s(7262);let InfiniteQueryObserver=class InfiniteQueryObserver extends n.z{constructor(t,e){super(t,e)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(t,e){super.setOptions({...t,behavior:(0,u.Gm)()},e)}getOptimisticResult(t){return t.behavior=(0,u.Gm)(),super.getOptimisticResult(t)}fetchNextPage({pageParam:t,...e}={}){return this.fetch({...e,meta:{fetchMore:{direction:"forward",pageParam:t}}})}fetchPreviousPage({pageParam:t,...e}={}){return this.fetch({...e,meta:{fetchMore:{direction:"backward",pageParam:t}}})}createResult(t,e){var s,i,n,o,a,l;let{state:c}=t,h=super.createResult(t,e),{isFetching:d,isRefetching:f}=h,p=d&&(null==(s=c.fetchMeta)?void 0:null==(i=s.fetchMore)?void 0:i.direction)==="forward",y=d&&(null==(n=c.fetchMeta)?void 0:null==(o=n.fetchMore)?void 0:o.direction)==="backward";return{...h,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,u.Qy)(e,null==(a=c.data)?void 0:a.pages),hasPreviousPage:(0,u.ZF)(e,null==(l=c.data)?void 0:l.pages),isFetchingNextPage:p,isFetchingPreviousPage:y,isRefetching:f&&!p&&!y}}};var o=s(4742);function useInfiniteQuery(t,e,s){let n=(0,i._v)(t,e,s);return(0,o.r)(n,InfiniteQueryObserver)}},1431:function(t,e,s){s.r(e),s.d(e,{useIsFetching:function(){return useIsFetching}});var i=s(2265),n=s(6504),u=s(7156),o=s(5321),a=s(165);function useIsFetching(t,e,s){let[l,c={}]=(0,n.I6)(t,e,s),h=(0,a.useQueryClient)({context:c.context}),d=h.getQueryCache();return(0,o.$)(i.useCallback(t=>d.subscribe(u.V.batchCalls(t)),[d]),()=>h.isFetching(l),()=>h.isFetching(l))}},4770:function(t,e,s){s.r(e),s.d(e,{useIsMutating:function(){return useIsMutating}});var i=s(2265),n=s(6504),u=s(7156),o=s(5321),a=s(165);function useIsMutating(t,e,s){let[l,c={}]=(0,n.cb)(t,e,s),h=(0,a.useQueryClient)({context:c.context}),d=h.getMutationCache();return(0,o.$)(i.useCallback(t=>d.subscribe(u.V.batchCalls(t)),[d]),()=>h.isMutating(l),()=>h.isMutating(l))}},4001:function(t,e,s){s.r(e),s.d(e,{useMutation:function(){return useMutation}});var i=s(2265),n=s(6504),u=s(172),o=s(7156),a=s(9492);let MutationObserver=class MutationObserver extends a.l{constructor(t,e){super(),this.client=t,this.setOptions(e),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var e;let s=this.options;this.options=this.client.defaultMutationOptions(t),(0,n.VS)(s,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(e=this.currentMutation)||e.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.currentMutation)||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();let e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==t?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let t=this.currentMutation?this.currentMutation.state:(0,u.R)(),e={...t,isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset};this.currentResult=e}notify(t){o.V.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var e,s,i,n,u,o,a,l;t.onSuccess?(null==(e=(s=this.mutateOptions).onSuccess)||e.call(s,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(i=(n=this.mutateOptions).onSettled)||i.call(n,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):t.onError&&(null==(u=(o=this.mutateOptions).onError)||u.call(o,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(a=(l=this.mutateOptions).onSettled)||a.call(l,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}t.listeners&&this.listeners.forEach(({listener:t})=>{t(this.currentResult)})})}};var l=s(5321),c=s(165),h=s(7798);function useMutation(t,e,s){let u=(0,n.lV)(t,e,s),a=(0,c.useQueryClient)({context:u.context}),[d]=i.useState(()=>new MutationObserver(a,u));i.useEffect(()=>{d.setOptions(u)},[d,u]);let f=(0,l.$)(i.useCallback(t=>d.subscribe(o.V.batchCalls(t)),[d]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),p=i.useCallback((t,e)=>{d.mutate(t,e).catch(noop)},[d]);if(f.error&&(0,h.L)(d.options.useErrorBoundary,[f.error]))throw f.error;return{...f,mutate:p,mutateAsync:f.mutate}}function noop(){}},157:function(t,e,s){s.r(e),s.d(e,{useQueries:function(){return useQueries}});var i=s(2265),n=s(6504),u=s(7156),o=s(127),a=s(9492);let QueriesObserver=class QueriesObserver extends a.l{constructor(t,e){super(),this.client=t,this.queries=[],this.result=[],this.observers=[],this.observersMap={},e&&this.setQueries(e)}onSubscribe(){1===this.listeners.size&&this.observers.forEach(t=>{t.subscribe(e=>{this.onUpdate(t,e)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,this.observers.forEach(t=>{t.destroy()})}setQueries(t,e){this.queries=t,u.V.batch(()=>{let t=this.observers,s=this.findMatchingObservers(this.queries);s.forEach(t=>t.observer.setOptions(t.defaultedQueryOptions,e));let i=s.map(t=>t.observer),u=Object.fromEntries(i.map(t=>[t.options.queryHash,t])),o=i.map(t=>t.getCurrentResult()),a=i.some((e,s)=>e!==t[s]);(t.length!==i.length||a)&&(this.observers=i,this.observersMap=u,this.result=o,this.hasListeners()&&((0,n.e5)(t,i).forEach(t=>{t.destroy()}),(0,n.e5)(i,t).forEach(t=>{t.subscribe(e=>{this.onUpdate(t,e)})}),this.notify()))})}getCurrentResult(){return this.result}getQueries(){return this.observers.map(t=>t.getCurrentQuery())}getObservers(){return this.observers}getOptimisticResult(t){return this.findMatchingObservers(t).map(t=>t.observer.getOptimisticResult(t.defaultedQueryOptions))}findMatchingObservers(t){let e=this.observers,s=new Map(e.map(t=>[t.options.queryHash,t])),i=t.map(t=>this.client.defaultQueryOptions(t)),n=i.flatMap(t=>{let e=s.get(t.queryHash);return null!=e?[{defaultedQueryOptions:t,observer:e}]:[]}),u=new Set(n.map(t=>t.defaultedQueryOptions.queryHash)),a=i.filter(t=>!u.has(t.queryHash)),l=new Set(n.map(t=>t.observer)),c=e.filter(t=>!l.has(t)),getObserver=t=>{let e=this.client.defaultQueryOptions(t),s=this.observersMap[e.queryHash];return null!=s?s:new o.z(this.client,e)},h=a.map((t,e)=>{if(t.keepPreviousData){let s=c[e];if(void 0!==s)return{defaultedQueryOptions:t,observer:s}}return{defaultedQueryOptions:t,observer:getObserver(t)}});return n.concat(h).sort((t,e)=>i.indexOf(t.defaultedQueryOptions)-i.indexOf(e.defaultedQueryOptions))}onUpdate(t,e){let s=this.observers.indexOf(t);-1!==s&&(this.result=(0,n.Rc)(this.result,s,e),this.notify())}notify(){u.V.batch(()=>{this.listeners.forEach(({listener:t})=>{t(this.result)})})}};var l=s(5321),c=s(165),h=s(1963),d=s(9676),f=s(7843),p=s(8962);function useQueries({queries:t,context:e}){let s=(0,c.useQueryClient)({context:e}),n=(0,h.useIsRestoring)(),o=(0,d.useQueryErrorResetBoundary)(),a=i.useMemo(()=>t.map(t=>{let e=s.defaultQueryOptions(t);return e._optimisticResults=n?"isRestoring":"optimistic",e}),[t,s,n]);a.forEach(t=>{(0,p.Fb)(t),(0,f.pf)(t,o)}),(0,f.JN)(o);let[y]=i.useState(()=>new QueriesObserver(s,a)),v=y.getOptimisticResult(a);(0,l.$)(i.useCallback(t=>n?()=>void 0:y.subscribe(u.V.batchCalls(t)),[y,n]),()=>y.getCurrentResult(),()=>y.getCurrentResult()),i.useEffect(()=>{y.setQueries(a,{listeners:!1})},[a,y]);let b=v.some((t,e)=>(0,p.SB)(a[e],t,n)),R=b?v.flatMap((t,e)=>{let s=a[e],i=y.getObservers()[e];if(s&&i){if((0,p.SB)(s,t,n))return(0,p.j8)(s,i,o);(0,p.Z$)(t,n)&&(0,p.j8)(s,i,o)}return[]}):[];if(R.length>0)throw Promise.all(R);let g=y.getQueries(),m=v.find((t,e)=>{var s,i;return(0,f.KJ)({result:t,errorResetBoundary:o,useErrorBoundary:null!=(s=null==(i=a[e])?void 0:i.useErrorBoundary)&&s,query:g[e]})});if(null!=m&&m.error)throw m.error;return v}},8285:function(t,e,s){s.r(e),s.d(e,{useQuery:function(){return useQuery}});var i=s(6504),n=s(127),u=s(4742);function useQuery(t,e,s){let o=(0,i._v)(t,e,s);return(0,u.r)(o,n.z)}},5321:function(t,e,s){s.d(e,{$:function(){return n}});var i=s(6272);let n=i.useSyncExternalStore},7798:function(t,e,s){s.d(e,{L:function(){return shouldThrowError}});function shouldThrowError(t,e){return"function"==typeof t?t(...e):!!t}}}]);