"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6745],{26900:function(e,t,n){n.d(t,{Z:function(){return D}});var o=n(42893),i=n(12204),r=n(19903),a=n(35206),s=n(80815),u=n(66196),c=n(60198),d=n(42246),l=n(60476),p=n(2304),m=n(92796),f=n(55831),g=n.n(f),b=n(13712),C=n(68187),h=n(1152),R=n(59129);const T=h.ZP`
  query FeeTierDistribution($token0: String!, $token1: String!) {
    _meta {
      block {
        number
      }
    }
    asToken0: pools(
      orderBy: totalValueLockedToken0
      orderDirection: desc
      where: { token0: $token0, token1: $token1 }
    ) {
      feeTier
      totalValueLockedToken0
      totalValueLockedToken1
    }
    asToken1: pools(
      orderBy: totalValueLockedToken0
      orderDirection: desc
      where: { token0: $token1, token1: $token0 }
    ) {
      feeTier
      totalValueLockedToken0
      totalValueLockedToken1
    }
  }
`;var A=n(46109);const I=20;function N(e,t){const{isLoading:n,error:o,distributions:i}=function(e,t){const n=(0,m.ZP)(),{isLoading:o,error:i,data:r}=function(e,t,n){const{data:o,loading:i,error:r}=(0,C.a)(T,{variables:{token0:e?.toLowerCase(),token1:t?.toLowerCase()},pollInterval:n,client:R.l8});return(0,b.useMemo)((()=>({error:r,isLoading:i,data:o})),[o,r,i])}(e?.address,t?.address,g()("30s")),{asToken0:s,asToken1:u,_meta:c}=r??{};return(0,b.useMemo)((()=>{if(!n||!c||!s||!u)return{isLoading:o,error:i};if(n-(c?.block?.number??0)>I)return console.log(`Graph stale (latest block: ${n})`),{isLoading:o,error:i};const e=s.concat(u).reduce(((e,t)=>(e[t.feeTier][0]=(e[t.feeTier][0]??0)+Number(t.totalValueLockedToken0),e[t.feeTier][1]=(e[t.feeTier][1]??0)+Number(t.totalValueLockedToken1),e)),{[a.FeeAmount.LOWEST]:[void 0,void 0],[a.FeeAmount.LOW]:[void 0,void 0],[a.FeeAmount.MEDIUM]:[void 0,void 0],[a.FeeAmount.HIGH]:[void 0,void 0]}),[t,r]=Object.values(e).reduce(((e,t)=>(e[0]+=t[0]??0,e[1]+=t[1]??0,e)),[0,0]),d=(e,t,n,o)=>void 0===e&&void 0===n?void 0:((e??0)+(n??0))/(t+o)||0,l={[a.FeeAmount.LOWEST]:d(e[a.FeeAmount.LOWEST][0],t,e[a.FeeAmount.LOWEST][1],r),[a.FeeAmount.LOW]:d(e[a.FeeAmount.LOW][0],t,e[a.FeeAmount.LOW][1],r),[a.FeeAmount.MEDIUM]:d(e[a.FeeAmount.MEDIUM][0],t,e[a.FeeAmount.MEDIUM][1],r),[a.FeeAmount.HIGH]:d(e[a.FeeAmount.HIGH][0],t,e[a.FeeAmount.HIGH][1],r)};return{isLoading:o,error:i,distributions:l}}),[c,s,u,o,i,n])}(e?.wrapped,t?.wrapped),[r]=(0,A.AI)(e,t,a.FeeAmount.LOWEST),[s]=(0,A.AI)(e,t,a.FeeAmount.LOW),[u]=(0,A.AI)(e,t,a.FeeAmount.MEDIUM),[c]=(0,A.AI)(e,t,a.FeeAmount.HIGH);return(0,b.useMemo)((()=>{if(n||o||!i)return{isLoading:n,isError:!!o,distributions:i};const e=Object.keys(i).map((e=>Number(e))).filter((e=>0!==i[e]&&void 0!==i[e])).reduce(((e,t)=>(i[e]??0)>(i[t]??0)?e:t),-1),t=n||o||!i||r===A.tK.LOADING||s===A.tK.LOADING||u===A.tK.LOADING||c===A.tK.LOADING?void 0:{[a.FeeAmount.LOWEST]:r===A.tK.EXISTS?100*(i[a.FeeAmount.LOWEST]??0):void 0,[a.FeeAmount.LOW]:s===A.tK.EXISTS?100*(i[a.FeeAmount.LOW]??0):void 0,[a.FeeAmount.MEDIUM]:u===A.tK.EXISTS?100*(i[a.FeeAmount.MEDIUM]??0):void 0,[a.FeeAmount.HIGH]:c===A.tK.EXISTS?100*(i[a.FeeAmount.HIGH]??0):void 0};return{isLoading:n,isError:!!o,distributions:t,largestUsageFeeTier:-1===e?void 0:e}}),[n,o,i,r,s,u,c])}var x=n(44922),E=n(28233),k=n(47096),y=n(87253),v=n(39839),_=n(57482),O=n(80485);function S({feeAmount:e,distributions:t,poolState:n}){return(0,o.jsx)(O.Z,{children:(0,o.jsx)(v.Tv.DeprecatedLabel,{fontSize:10,children:t&&n!==A.tK.NOT_EXISTS&&n!==A.tK.INVALID?void 0!==t[e]?(0,o.jsx)(i.cC,{id:"P1NNMy",values:{0:t[e]?.toFixed(0)}}):(0,o.jsx)(i.cC,{id:"plhHQt"}):(0,o.jsx)(i.cC,{id:"cKHbrZ"})})})}var P=n(45492);const L={[a.FeeAmount.LOWEST]:{label:"0.01",description:(0,o.jsx)(i.cC,{id:"6AHHoU"}),supportedChains:[P.H.ARBITRUM_ONE,P.H.BNB,P.H.CELO,P.H.CELO_ALFAJORES,P.H.MAINNET,P.H.OPTIMISM,P.H.POLYGON,P.H.POLYGON_MUMBAI,P.H.AVALANCHE,P.H.BASE]},[a.FeeAmount.LOW]:{label:"0.05",description:(0,o.jsx)(i.cC,{id:"ig/lul"}),supportedChains:P.$},[a.FeeAmount.MEDIUM]:{label:"0.3",description:(0,o.jsx)(i.cC,{id:"DlUgFZ"}),supportedChains:P.$},[a.FeeAmount.HIGH]:{label:"1",description:(0,o.jsx)(i.cC,{id:"fiGxJ/"}),supportedChains:P.$}},M=(0,y.default)(v.Tv.DeprecatedLabel).withConfig({displayName:"FeeOption__ResponsiveText",componentId:"sc-fea24ac3-0"})`
  line-height: 16px;
  font-size: 14px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 12px;
    line-height: 12px;
  `};
`;function U({feeAmount:e,active:t,poolState:n,distributions:r,onClick:a}){const{formatDelta:s}=(0,_.Gb)();return(0,o.jsx)(c.ro,{active:t,onClick:a,children:(0,o.jsxs)(l.Tz,{gap:"sm",justify:"flex-start",children:[(0,o.jsxs)(l.Tz,{justify:"flex-start",gap:"6px",children:[(0,o.jsx)(M,{children:(0,o.jsx)(i.cC,{id:"J/hVSQ",values:{0:s(parseFloat(L[e].label))}})}),(0,o.jsx)(v.Tv.DeprecatedMain,{fontWeight:485,fontSize:"12px",textAlign:"left",children:L[e].description})]}),r&&(0,o.jsx)(S,{distributions:r,feeAmount:e,poolState:n})]})})}const w=(0,y.default)(d.ZP).withConfig({displayName:"FeeSelector__FocusedOutlineCard",componentId:"sc-eec9571-0"})`
  border: 1px solid ${({theme:e})=>e.surface3};
  animation: ${({pulsing:e,theme:t})=>{return e&&(n=t.accent1,y.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${n};
  }

  70% {
    box-shadow: 0 0 0 2px ${n};
  }

  100% {
    box-shadow: 0 0 0 0 ${n};
  }
`);var n}} 0.6s linear;
  align-self: center;
`,j=y.default.div.withConfig({displayName:"FeeSelector__Select",componentId:"sc-eec9571-1"})`
  align-items: flex-start;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
`;function D({disabled:e=!1,feeAmount:t,handleFeePoolSelect:n,currencyA:d,currencyB:m}){const{chainId:f}=(0,s.useWeb3React)(),g=(0,u.oO)(),{formatDelta:C}=(0,_.Gb)(),{isLoading:h,isError:R,largestUsageFeeTier:T,distributions:I}=N(d,m),y=(0,A.Oh)([[d,m,a.FeeAmount.LOWEST],[d,m,a.FeeAmount.LOW],[d,m,a.FeeAmount.MEDIUM],[d,m,a.FeeAmount.HIGH]]),O=(0,b.useMemo)((()=>y.reduce(((e,[t,n])=>e={...e,[n?.fee]:t}),{[a.FeeAmount.LOWEST]:A.tK.NOT_EXISTS,[a.FeeAmount.LOW]:A.tK.NOT_EXISTS,[a.FeeAmount.MEDIUM]:A.tK.NOT_EXISTS,[a.FeeAmount.HIGH]:A.tK.NOT_EXISTS})),[y]),[P,M]=(0,b.useState)(!1),[D,F]=(0,b.useState)(!1),W=(0,x.Z)(t),B=(0,b.useRef)(!1),$=(0,b.useCallback)((e=>{(0,u._P)(r.vp.SELECT_LIQUIDITY_POOL_FEE_TIER,{action:r.jI.MANUAL,...g}),n(e)}),[n,g]);return(0,b.useEffect)((()=>{t||h||R||(T?(M(!1),B.current=!0,(0,u._P)(r.vp.SELECT_LIQUIDITY_POOL_FEE_TIER,{action:r.jI.RECOMMENDED,...g}),n(T)):M(!0))}),[t,h,R,T,n,g]),(0,b.useEffect)((()=>{M(R)}),[R]),(0,b.useEffect)((()=>{t&&W!==t&&F(!0)}),[W,t]),(0,o.jsx)(l.Tz,{gap:"16px",children:(0,o.jsxs)(E.DD,{gap:"md",disabled:e,children:[(0,o.jsx)(w,{pulsing:D,onAnimationEnd:()=>F(!1),children:(0,o.jsxs)(p.m0,{children:[(0,o.jsx)(l.Tz,{id:"add-liquidity-selected-fee",children:t?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v.Tv.DeprecatedLabel,{className:"selected-fee-label",children:(0,o.jsx)(i.cC,{id:"GczB8z",values:{0:C(parseFloat(L[t].label))}})}),(0,o.jsx)(k.xu,{style:{width:"fit-content",marginTop:"8px"},className:"selected-fee-percentage",children:I&&(0,o.jsx)(S,{distributions:I,feeAmount:t,poolState:O[t]})})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v.Tv.DeprecatedLabel,{children:(0,o.jsx)(i.cC,{id:"EU3wU4"})}),(0,o.jsx)(v.Tv.DeprecatedMain,{fontWeight:485,fontSize:"12px",textAlign:"left",children:(0,o.jsx)(i.cC,{id:"8ZKEXr"})})]})}),(0,o.jsx)(c.Ux,{onClick:()=>M(!P),width:"auto",padding:"4px",$borderRadius:"6px",children:P?(0,o.jsx)(i.cC,{id:"vLyv1R"}):(0,o.jsx)(i.cC,{id:"ePK91l"})})]})}),f&&P&&(0,o.jsx)(j,{children:[a.FeeAmount.LOWEST,a.FeeAmount.LOW,a.FeeAmount.MEDIUM,a.FeeAmount.HIGH].map(((e,n)=>{const{supportedChains:i}=L[e];return i.includes(f)?(0,o.jsx)(U,{feeAmount:e,active:t===e,onClick:()=>$(e),distributions:I,poolState:O[e]},n):null}))})]})})}},22614:function(e,t,n){n.d(t,{Z:function(){return _}});var o=n(42893),i=n(12204),r=n(60198),a=n(42246),s=n(60476),u=n(13712),c=n(49287),d=n(41432),l=n.n(d);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=(0,u.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,r=void 0===i?24:i,a=m(e,["color","size"]);return u.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),u.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));f.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},f.displayName="Minus";var g=f,b=n(87253),C=n(39839),h=n(48972);const R=b.default.div.withConfig({displayName:"InputStepCounter__InputRow",componentId:"sc-45cb4a1c-0"})`
  display: flex;
`,T=(0,b.default)(r.Ux).withConfig({displayName:"InputStepCounter__SmallButton",componentId:"sc-45cb4a1c-1"})`
  border-radius: 8px;
  padding: 4px;
`,A=(0,b.default)(a.nq).withConfig({displayName:"InputStepCounter__FocusedOutlineCard",componentId:"sc-45cb4a1c-2"})`
  border-color: ${({active:e,theme:t})=>e&&t.deprecated_stateOverlayPressed};
  padding: 12px;
  animation: ${({pulsing:e,theme:t})=>{return e&&(n=t.accent1,b.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${n};
  }

  70% {
    box-shadow: 0 0 0 2px ${n};
  }

  100% {
    box-shadow: 0 0 0 0 ${n};
  }
`);var n}} 0.8s linear;
`,I=(0,b.default)(h.I).withConfig({displayName:"InputStepCounter__StyledInput",componentId:"sc-45cb4a1c-3"})`
  background-color: transparent;
  font-weight: 535;
  text-align: left;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 16px;
  `};
`,N=(0,b.default)(s.Tz).withConfig({displayName:"InputStepCounter__InputColumn",componentId:"sc-45cb4a1c-4"})`
  width: 100%;
`,x=(0,b.default)(C.Tv.DeprecatedSmall).withConfig({displayName:"InputStepCounter__InputTitle",componentId:"sc-45cb4a1c-5"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 12px;
  font-weight: 535;
`,E=(0,b.default)(C.Tv.DeprecatedWhite).withConfig({displayName:"InputStepCounter__ButtonLabel",componentId:"sc-45cb4a1c-6"})`
  color: ${({theme:e,disabled:t})=>t?e.neutral2:e.neutral1} !important;
  display: flex;
`;var k=({value:e,decrement:t,increment:n,decrementDisabled:r=!1,incrementDisabled:a=!1,width:d,locked:l,onUserInput:p,title:m,tokenA:f,tokenB:b})=>{const[C,h]=(0,u.useState)(!1),[k,y]=(0,u.useState)(""),[v,_]=(0,u.useState)(!1),[O,S]=(0,u.useState)(!1),P=(0,u.useCallback)((()=>{_(!1),h(!1),p(k)}),[k,p]),L=(0,u.useCallback)((()=>{_(!1),p(t())}),[t,p]),M=(0,u.useCallback)((()=>{_(!1),p(n())}),[n,p]);return(0,u.useEffect)((()=>{k===e||v||setTimeout((()=>{y(e),S(!0),setTimeout((function(){S(!1)}),1800)}),0)}),[k,v,e]),(0,o.jsx)(A,{pulsing:O,active:C,onFocus:()=>{_(!0),h(!0)},onBlur:P,width:d,children:(0,o.jsxs)(R,{children:[(0,o.jsxs)(N,{justify:"flex-start",children:[(0,o.jsx)(x,{fontSize:12,textAlign:"center",children:m}),(0,o.jsx)(I,{className:"rate-input-0",value:k,fontSize:"20px",disabled:l,onUserInput:e=>{y(e)}}),(0,o.jsx)(x,{fontSize:12,textAlign:"left",children:(0,o.jsx)(i.cC,{id:"1/LP4K",values:{tokenB:b,tokenA:f}})})]}),(0,o.jsxs)(s.Tz,{gap:"8px",children:[!l&&(0,o.jsx)(T,{"data-testid":"increment-price-range",onClick:M,disabled:a,children:(0,o.jsx)(E,{disabled:a,fontSize:"12px",children:(0,o.jsx)(c.Z,{size:18})})}),!l&&(0,o.jsx)(T,{"data-testid":"decrement-price-range",onClick:L,disabled:r,children:(0,o.jsx)(E,{disabled:r,fontSize:"12px",children:(0,o.jsx)(g,{size:18})})})]})]})})},y=n(2304),v=n(4292);function _({priceLower:e,priceUpper:t,onLeftRangeInput:n,onRightRangeInput:r,getDecrementLower:a,getIncrementLower:s,getDecrementUpper:u,getIncrementUpper:c,currencyA:d,currencyB:l,feeAmount:p,ticksAtLimit:m}){const f=(d??void 0)?.wrapped,g=(l??void 0)?.wrapped,b=f&&g&&f.sortsBefore(g),C=b?e:t?.invert(),h=b?t:e?.invert();return(0,o.jsxs)(y.BA,{gap:"md",children:[(0,o.jsx)(k,{value:m[b?v.Mb.LOWER:v.Mb.UPPER]?"0":C?.toSignificant(8)??"",onUserInput:n,decrement:b?a:c,increment:b?s:u,decrementDisabled:void 0===C||m[b?v.Mb.LOWER:v.Mb.UPPER],incrementDisabled:void 0===C||m[b?v.Mb.LOWER:v.Mb.UPPER],feeAmount:p,label:C?`${l?.symbol}`:"-",title:(0,o.jsx)(i.cC,{id:"uEoBVI"}),tokenA:d?.symbol,tokenB:l?.symbol}),(0,o.jsx)(k,{value:m[b?v.Mb.UPPER:v.Mb.LOWER]?"\u221e":h?.toSignificant(8)??"",onUserInput:r,decrement:b?u:s,increment:b?c:a,incrementDisabled:void 0===h||m[b?v.Mb.UPPER:v.Mb.LOWER],decrementDisabled:void 0===h||m[b?v.Mb.UPPER:v.Mb.LOWER],feeAmount:p,label:h?`${l?.symbol}`:"-",tokenA:d?.symbol,tokenB:l?.symbol,title:(0,o.jsx)(i.cC,{id:"kAC8rT"})})]})}},48244:function(e,t,n){n.d(t,{U:function(){return o},q:function(){return C}});var o,i=n(75255),r=n(19903),a=n(80815),s=n(66196),u=n(36665),c=n(5976),d=n(15337),l=n(13712),p=n(54479);function m(e,t,n){const{chainId:m}=(0,a.useWeb3React)(),f=e?.currency?.isToken?e.currency:void 0,g=function(e,t,n){const{account:i}=(0,a.useWeb3React)(),r=e?.currency?.isToken?e.currency:void 0,{tokenAllowance:s}=(0,c.Fx)(r,i??void 0,t),u=n(r,t);return(0,l.useMemo)((()=>e&&t?e.currency.isNative?o.APPROVED:s?s.lessThan(e)?u?o.PENDING:o.NOT_APPROVED:o.APPROVED:o.UNKNOWN:o.UNKNOWN),[e,u,t,s])}(e,t,n),b=(0,u.Ib)(f?.address),C=(0,l.useCallback)((async()=>{function n(e){console.warn(`${f?.symbol||"Token"} approval failed:`,e)}if(g!==o.NOT_APPROVED)return n("approve was called unnecessarily");if(!m)return n("no chainId");if(!f)return n("no token");if(!b)return n("tokenContract is null");if(!e)return n("missing amount to approve");if(!t)return n("no spender");let a=!1;const u=await b.estimateGas.approve(t,i.Bz).catch((()=>(a=!0,b.estimateGas.approve(t,e.quotient.toString()))));return b.approve(t,a?e.quotient.toString():i.Bz,{gasLimit:(0,p.y)(u)}).then((n=>{const o={chain_id:m,token_symbol:f?.symbol,token_address:(0,d.DT)(f)};return(0,s._P)(r.Je.APPROVE_TOKEN_TXN_SUBMITTED,o),{response:n,tokenAddress:f.address,spenderAddress:t,amount:e}})).catch((e=>{throw n(e),e}))}),[g,f,b,e,t,m]);return[g,C]}!function(e){e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED"}(o||(o={}));var f=n(97905),g=n(843);function b(e){const t=(0,f.h7)();return(0,l.useCallback)((()=>e().then((e=>{if(e){const{response:n,tokenAddress:o,spenderAddress:i,amount:r}=e;t(n,{type:g.i.APPROVAL,tokenAddress:o,spender:i,amount:r.quotient.toString()})}}))),[t,e])}function C(e,t){const[n,o]=m(e,t,f.wB);return[n,b(o)]}},68434:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(80815),i=n(61646),r=n(13712),a=n(36665);function s(){const{account:e}=(0,o.useWeb3React)(),t=(0,a.c5)(),n=(0,r.useMemo)((()=>[e??void 0]),[e]),s=(0,i.Wk)(t,"isArgentWallet",n,i.DB);return Boolean(s?.result?.[0])}},28233:function(e,t,n){n.d(t,{DD:function(){return u},Fy:function(){return c},SF:function(){return l},Sx:function(){return d},im:function(){return a},zH:function(){return s}});var o=n(60476),i=n(48972),r=n(87253);const a=r.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-740507e2-0"})`
  position: relative;
  padding: 26px 16px;
`,s=r.default.div.withConfig({displayName:"styled__ScrollablePage",componentId:"sc-740507e2-1"})`
  padding: 20px 8px 0px;
  position: relative;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin: 0 auto;
  `};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,u=(0,r.default)(o.Tz).withConfig({displayName:"styled__DynamicSection",componentId:"sc-740507e2-2"})`
  opacity: ${({disabled:e})=>e?"0.2":"1"};
  pointer-events: ${({disabled:e})=>e?"none":"initial"};
`,c=(0,r.default)(i.I).withConfig({displayName:"styled__StyledInput",componentId:"sc-740507e2-3"})`
  background-color: ${({theme:e})=>e.surface1};
  text-align: left;
  font-size: 18px;
  width: 100%;
`,d=r.default.div.withConfig({displayName:"styled__ResponsiveTwoColumns",componentId:"sc-740507e2-4"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;

  border-top: 1px solid ${({theme:e})=>e.surface3};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin-top: 0;
  `};
`,l=r.default.div.withConfig({displayName:"styled__MediumOnly",componentId:"sc-740507e2-5"})`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    display: none;
  `};
`},72714:function(e,t,n){n.d(t,{Z:function(){return s},e:function(){return a}});var o=n(42893),i=n(87253),r=n(437);const a=i.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${r.k.default};
`;function s(e){return(0,o.jsx)(a,{...e})}},33699:function(e,t,n){n.d(t,{a6:function(){return N},m2:function(){return I},EG:function(){return A},KS:function(){return T}});var o=n(42893),i=n(12204),r=n(15387),a=n(35206),s=n(80815),u=n(46109),c=n(44998),d=n.n(c),l=n(4572),p=n(13712),m=n(41440),f=n(63498);function g(e,t,n){if(e&&t&&"number"===typeof n)return(0,a.tickToPrice)(e,t,n)}var b=n(91101),C=n(42881),h=n(4292);function R(e,t,n,o){if(!e||!t||!n||!o)return;const i=function(e,t,n){if(!e||!t||!n)return;if(!n.match(/^\d*\.?\d+$/))return;const[o,i]=n.split("."),a=i?.length??0,s=d().BigInt((o??"")+(i??""));return new r.Price(e,t,d().multiply(d().BigInt(10**a),d().BigInt(10**e.decimals)),d().multiply(s,d().BigInt(10**t.decimals)))}(e,t,o);if(!i)return;let s;const u=(0,a.encodeSqrtRatioX96)(i.numerator,i.denominator);return s=d().greaterThanOrEqual(u,a.TickMath.MAX_SQRT_RATIO)?a.TickMath.MAX_TICK:d().lessThanOrEqual(u,a.TickMath.MIN_SQRT_RATIO)?a.TickMath.MIN_TICK:(0,a.priceToClosestTick)(i),(0,a.nearestUsableTick)(s,a.TICK_SPACINGS[n])}function T(){return(0,f.C)((e=>e.mintV3))}function A(e){const t=(0,f.T)(),n=(0,p.useCallback)((n=>{t((0,h.LC)({field:h.gN.CURRENCY_A,typedValue:n,noLiquidity:!0===e}))}),[t,e]),o=(0,p.useCallback)((n=>{t((0,h.LC)({field:h.gN.CURRENCY_B,typedValue:n,noLiquidity:!0===e}))}),[t,e]),[i,r]=(0,m.lr)();return{onFieldAInput:n,onFieldBInput:o,onLeftRangeInput:(0,p.useCallback)((e=>{t((0,h.yw)({typedValue:e}));const n=i.get("minPrice");(!n||n&&n!==e)&&(i.set("minPrice",e),r(i))}),[t,i,r]),onRightRangeInput:(0,p.useCallback)((e=>{t((0,h.ay)({typedValue:e}));const n=i.get("maxPrice");(!n||n&&n!==e)&&(i.set("maxPrice",e),r(i))}),[t,i,r]),onStartPriceInput:(0,p.useCallback)((e=>{t((0,h.A8)({typedValue:e}))}),[t])}}function I(e,t,n,c,m){const{account:f}=(0,s.useWeb3React)(),{independentField:A,typedValue:I,leftRangeTypedValue:N,rightRangeTypedValue:x,startPriceTypedValue:E}=T(),k=A===h.gN.CURRENCY_A?h.gN.CURRENCY_B:h.gN.CURRENCY_A,y=(0,p.useMemo)((()=>({[h.gN.CURRENCY_A]:e,[h.gN.CURRENCY_B]:t})),[e,t]),[v,_,O]=(0,p.useMemo)((()=>[e?.wrapped,t?.wrapped,c?.wrapped]),[e,t,c]),[S,P]=(0,p.useMemo)((()=>v&&_?v.sortsBefore(_)?[v,_]:[_,v]:[void 0,void 0]),[v,_]),L=(0,C.K5)(f??void 0,(0,p.useMemo)((()=>[y[h.gN.CURRENCY_A],y[h.gN.CURRENCY_B]]),[y])),M={[h.gN.CURRENCY_A]:L[0],[h.gN.CURRENCY_B]:L[1]},[U,w]=(0,u.AI)(y[h.gN.CURRENCY_A],y[h.gN.CURRENCY_B],n),j=U===u.tK.NOT_EXISTS,D=Boolean(O&&S&&!O.equals(S)),F=(0,p.useMemo)((()=>{if(!j)return w&&S?w.priceOf(S):void 0;{const e=(0,l.Z)(E,D?S:P);if(e&&S&&P){const t=(0,l.Z)("1",D?P:S),n=t&&e?new r.Price(t.currency,e.currency,t.quotient,e.quotient):void 0;return(D?n?.invert():n)??void 0}}}),[j,E,D,P,S,w]),W=(0,p.useMemo)((()=>{const e=F?(0,a.encodeSqrtRatioX96)(F.numerator,F.denominator):void 0;return F&&e&&!(d().greaterThanOrEqual(e,a.TickMath.MIN_SQRT_RATIO)&&d().lessThan(e,a.TickMath.MAX_SQRT_RATIO))}),[F]),B=(0,p.useMemo)((()=>{if(v&&_&&n&&F&&!W){const e=(0,a.priceToClosestTick)(F),t=a.TickMath.getSqrtRatioAtTick(e);return new a.Pool(v,_,n,t,d().BigInt(0),e,[])}}),[n,W,F,v,_]),$=w??B,K=(0,p.useMemo)((()=>({[h.Mb.LOWER]:n?(0,a.nearestUsableTick)(a.TickMath.MIN_TICK,a.TICK_SPACINGS[n]):void 0,[h.Mb.UPPER]:n?(0,a.nearestUsableTick)(a.TickMath.MAX_TICK,a.TICK_SPACINGS[n]):void 0})),[n]),G=(0,p.useMemo)((()=>({[h.Mb.LOWER]:"number"===typeof m?.tickLower?m.tickLower:D&&"boolean"===typeof x||!D&&"boolean"===typeof N?K[h.Mb.LOWER]:D?R(P,S,n,x.toString()):R(S,P,n,N.toString()),[h.Mb.UPPER]:"number"===typeof m?.tickUpper?m.tickUpper:!D&&"boolean"===typeof x||D&&"boolean"===typeof N?K[h.Mb.UPPER]:D?R(P,S,n,N.toString()):R(S,P,n,x.toString())})),[m,n,D,N,x,S,P,K]),{[h.Mb.LOWER]:H,[h.Mb.UPPER]:V}=G||{},z=(0,p.useMemo)((()=>({[h.Mb.LOWER]:n&&H===K.LOWER,[h.Mb.UPPER]:n&&V===K.UPPER})),[K,H,V,n]),Y=Boolean("number"===typeof H&&"number"===typeof V&&H>=V),q=(0,p.useMemo)((()=>({[h.Mb.LOWER]:g(S,P,K.LOWER),[h.Mb.UPPER]:g(S,P,K.UPPER)})),[S,P,K.LOWER,K.UPPER]),X=(0,p.useMemo)((()=>({[h.Mb.LOWER]:g(S,P,G[h.Mb.LOWER]),[h.Mb.UPPER]:g(S,P,G[h.Mb.UPPER])})),[S,P,G]),{[h.Mb.LOWER]:Z,[h.Mb.UPPER]:Q}=X,J=Boolean(!Y&&F&&Z&&Q&&(F.lessThan(Z)||F.greaterThan(Q))),ee=(0,l.Z)(I,y[A]),te=(0,p.useMemo)((()=>{const n=ee?.wrapped,o=k===h.gN.CURRENCY_B?t:e;if(ee&&n&&"number"===typeof H&&"number"===typeof V&&$){if(J||Y)return;const e=n.currency.equals($.token0)?a.Position.fromAmount0({pool:$,tickLower:H,tickUpper:V,amount0:ee.quotient,useFullPrecision:!0}):a.Position.fromAmount1({pool:$,tickLower:H,tickUpper:V,amount1:ee.quotient}),t=n.currency.equals($.token0)?e.amount1:e.amount0;return o&&r.CurrencyAmount.fromRawAmount(o,t.quotient)}}),[ee,J,k,t,e,H,V,$,Y]),ne=(0,p.useMemo)((()=>({[h.gN.CURRENCY_A]:A===h.gN.CURRENCY_A?ee:te,[h.gN.CURRENCY_B]:A===h.gN.CURRENCY_A?te:ee})),[te,ee,A]),oe=Boolean("number"===typeof V&&$&&$.tickCurrent>=V),ie=Boolean("number"===typeof H&&$&&$.tickCurrent<=H),re=Y||Boolean(oe&&$&&v&&$.token0.equals(v)||ie&&$&&v&&$.token1.equals(v)),ae=Y||Boolean(oe&&$&&_&&$.token0.equals(_)||ie&&$&&_&&$.token1.equals(_)),se=(0,p.useMemo)((()=>{if(!$||!v||!_||"number"!==typeof H||"number"!==typeof V||Y)return;const e=oe?b.iV:ne?.[v.equals($.token0)?h.gN.CURRENCY_A:h.gN.CURRENCY_B]?.quotient,t=ie?b.iV:ne?.[v.equals($.token0)?h.gN.CURRENCY_B:h.gN.CURRENCY_A]?.quotient;return void 0!==e&&void 0!==t?a.Position.fromAmounts({pool:$,tickLower:H,tickUpper:V,amount0:e,amount1:t,useFullPrecision:!0}):void 0}),[ne,$,v,_,oe,ie,Y,H,V]);let ue;f||(ue=(0,o.jsx)(i.cC,{id:"VHOVEJ"})),U===u.tK.INVALID&&(ue=ue??(0,o.jsx)(i.cC,{id:"R7D79P"})),W&&(ue=ue??(0,o.jsx)(i.cC,{id:"HXBqgG"})),(ne[h.gN.CURRENCY_A]||re)&&(ne[h.gN.CURRENCY_B]||ae)||(ue=ue??(0,o.jsx)(i.cC,{id:"iPMIoT"}));const{[h.gN.CURRENCY_A]:ce,[h.gN.CURRENCY_B]:de}=ne;ce&&M?.[h.gN.CURRENCY_A]?.lessThan(ce)&&(ue=(0,o.jsx)(i.cC,{id:"m6RmA/",values:{0:y[h.gN.CURRENCY_A]?.symbol}})),de&&M?.[h.gN.CURRENCY_B]?.lessThan(de)&&(ue=(0,o.jsx)(i.cC,{id:"m6RmA/",values:{0:y[h.gN.CURRENCY_B]?.symbol}}));const le=U===u.tK.INVALID;return{dependentField:k,currencies:y,pool:w,poolState:U,currencyBalances:M,parsedAmounts:ne,ticks:G,price:F,pricesAtTicks:X,pricesAtLimit:q,position:se,noLiquidity:j,errorMessage:ue,invalidPool:le,invalidRange:Y,outOfRange:J,depositADisabled:re,depositBDisabled:ae,invertPrice:D,ticksAtLimit:z}}function N(e,t,n,o,i,s){const u=(0,f.T)(),c=(0,p.useMemo)((()=>e?.wrapped),[e]),d=(0,p.useMemo)((()=>t?.wrapped),[t]);return{getDecrementLower:(0,p.useCallback)((()=>{if(c&&d&&"number"===typeof o&&n){return(0,a.tickToPrice)(c,d,o-a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof o&&c&&d&&n&&s){return(0,a.tickToPrice)(c,d,s.tickCurrent-a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[c,d,o,n,s]),getIncrementLower:(0,p.useCallback)((()=>{if(c&&d&&"number"===typeof o&&n){return(0,a.tickToPrice)(c,d,o+a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof o&&c&&d&&n&&s){return(0,a.tickToPrice)(c,d,s.tickCurrent+a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[c,d,o,n,s]),getDecrementUpper:(0,p.useCallback)((()=>{if(c&&d&&"number"===typeof i&&n){return(0,a.tickToPrice)(c,d,i-a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof i&&c&&d&&n&&s){return(0,a.tickToPrice)(c,d,s.tickCurrent-a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[c,d,i,n,s]),getIncrementUpper:(0,p.useCallback)((()=>{if(c&&d&&"number"===typeof i&&n){return(0,a.tickToPrice)(c,d,i+a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof i&&c&&d&&n&&s){return(0,a.tickToPrice)(c,d,s.tickCurrent+a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[c,d,i,n,s]),getSetFullRange:(0,p.useCallback)((()=>{u((0,h._h)())}),[u])}}},49287:function(e,t,n){var o=n(13712),i=n(41432),r=n.n(i);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=(0,o.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,u=void 0===r?24:r,c=s(e,["color","size"]);return o.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),o.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));u.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},u.displayName="Plus",t.Z=u},91774:function(e,t,n){n.d(t,{z:function(){return o}});var o=n(74290).i.concat}}]);
//# sourceMappingURL=6745.42d44c18.chunk.js.map