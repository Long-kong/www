"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5797],{63548:function(e,n,t){t.d(n,{Z:function(){return Y}});var i=t(42893),r=t(12204),o=t(19903),s=t(80815),a=t(66196),c=t(13119),d=t(92483),l=t(48141),u=t(40508),p=t(13712),h=t(87253),m=t(39839),g=t(47371),x=t(57482),f=t(44326),y=t(42881),C=t(60198),b=t(45533),I=t(56823),v=t(48972),j=t(2304),N=t(20437),T=t(925);const E=h.default.div.withConfig({displayName:"CurrencyInputPanel__InputPanel",componentId:"sc-3db49bc3-0"})`
  ${g.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,w=h.default.div.withConfig({displayName:"CurrencyInputPanel__Container",componentId:"sc-3db49bc3-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:t})=>!t&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,R=(0,h.default)(C.Ux).withConfig({displayName:"CurrencyInputPanel__CurrencySelect",componentId:"sc-3db49bc3-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:n})=>e?n.surface1:n.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:n})=>e?n.surface2:(0,u._j)(.05,n.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,_=h.default.div.withConfig({displayName:"CurrencyInputPanel__InputRow",componentId:"sc-3db49bc3-3"})`
  ${g.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,U=h.default.div.withConfig({displayName:"CurrencyInputPanel__LabelRow",componentId:"sc-3db49bc3-4"})`
  ${g.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,u._j)(.2,e.neutral2)};
  }
`,A=(0,h.default)(U).withConfig({displayName:"CurrencyInputPanel__FiatRow",componentId:"sc-3db49bc3-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,k=h.default.span.withConfig({displayName:"CurrencyInputPanel__Aligner",componentId:"sc-3db49bc3-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,P=(0,h.default)(f.r).withConfig({displayName:"CurrencyInputPanel__StyledDropDown",componentId:"sc-3db49bc3-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,S=h.default.span.withConfig({displayName:"CurrencyInputPanel__StyledTokenName",componentId:"sc-3db49bc3-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
`,O=h.default.button.withConfig({displayName:"CurrencyInputPanel__StyledBalanceMax",componentId:"sc-3db49bc3-9"})`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,D=(0,h.default)(v.I).withConfig({displayName:"CurrencyInputPanel__StyledNumericalInput",componentId:"sc-3db49bc3-10"})`
  ${c._Q};
  text-align: left;
`,L=(0,h.default)(d.Z).withConfig({displayName:"CurrencyInputPanel__StyledPrefetchBalancesWrapper",componentId:"sc-3db49bc3-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function Y({value:e,onUserInput:n,onMax:t,showMaxButton:d,onCurrencySelect:u,currency:g,otherCurrency:f,id:C,showCommonBases:v,showCurrencyAmount:U,disableNonToken:Y,renderBalance:$,fiatValue:q,hideBalance:B=!1,pair:z=null,hideInput:W=!1,locked:M=!1,loading:Q=!1,...Z}){const[V,H]=(0,p.useState)(!1),{account:F,chainId:G}=(0,s.useWeb3React)(),K=(0,y._h)(F??void 0,g??void 0),J=(0,h.useTheme)(),{formatCurrencyAmount:X}=(0,x.Gb)(),ee=(0,p.useCallback)((()=>{H(!1)}),[H]),ne=(0,l.EC)(G);return(0,i.jsxs)(E,{id:C,hideInput:W,...Z,children:[!M&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(w,{hideInput:W,disabled:!ne,children:[(0,i.jsxs)(_,{style:W?{padding:"0",borderRadius:"8px"}:{},selected:!u,children:[!W&&(0,i.jsx)(D,{className:"token-amount-input",value:e,onUserInput:n,disabled:!ne,$loading:Q}),(0,i.jsx)(L,{shouldFetchOnAccountUpdate:V,$fullWidth:W,children:(0,i.jsx)(R,{disabled:!ne,visible:void 0!==g,selected:!!g,hideInput:W,className:"open-currency-select-button",onClick:()=>{u&&H(!0)},pointerEvents:u?void 0:"none",children:(0,i.jsxs)(k,{children:[(0,i.jsxs)(j.DA,{children:[z?(0,i.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,i.jsx)(b.Z,{currency0:z.token0,currency1:z.token1,size:24,margin:!0})}):g&&(0,i.jsx)(I.Z,{style:{marginRight:"0.5rem"},currency:g,size:"24px"}),z?(0,i.jsxs)(S,{className:"pair-name-container",children:[z?.token0.symbol,":",z?.token1.symbol]}):(0,i.jsx)(S,{className:"token-symbol-container",active:Boolean(g&&g.symbol),children:(g&&g.symbol&&g.symbol.length>20?g.symbol.slice(0,4)+"..."+g.symbol.slice(g.symbol.length-5,g.symbol.length):g?.symbol)||(0,i.jsx)(r.cC,{id:"T0Y2+3"})})]}),u&&(0,i.jsx)(P,{selected:!!g})]})})})]}),Boolean(!W&&!B&&g)&&(0,i.jsx)(A,{children:(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(c.EG,{$loading:Q,children:q&&(0,i.jsx)(T.x,{fiatValue:q})}),F&&(0,i.jsxs)(j.DA,{style:{height:"17px"},children:[(0,i.jsx)(m.Tv.DeprecatedBody,{onClick:t,color:J.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!B&&g&&K)&&($?.(K)||(0,i.jsx)(r.cC,{id:"VuFd5C",values:{0:X({amount:K,type:x.sw.TokenNonTx})}}))}),Boolean(d&&K)&&(0,i.jsx)(a.M8,{events:[o.TM.onClick],name:o.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:o.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,i.jsx)(O,{onClick:t,children:(0,i.jsx)(r.cC,{id:"4HtGBb"})})})]})]})})]})}),u&&(0,i.jsx)(N.Z,{isOpen:V,onDismiss:ee,onCurrencySelect:u,selectedCurrency:g,otherSelectedCurrency:f,showCommonBases:v,showCurrencyAmount:U,disableNonToken:Y})]})}},4987:function(e,n,t){t.d(n,{q:function(){return v},w:function(){return N}});var i=t(42893),r=t(12204),o=t(80815),s=t(24364),a=t(46591),c=t(41440),d=t(80657),l=t(47096),u=t(63498),p=t(40740),h=t(4292),m=t(87253),g=t(39839),x=t(47371),f=t(2304);const y=m.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-1642bf23-0"})`
  ${x.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,C=(0,m.default)(c.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-1642bf23-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,b=(0,m.default)(g.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-1642bf23-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,I=(0,m.default)(a.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-1642bf23-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function v({origin:e}){return(0,i.jsx)(y,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(c.rU,{to:e,children:(0,i.jsx)(I,{})}),(0,i.jsx)(b,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const j=(0,m.default)(g.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-1642bf23-4"})`
  flex: 1;
  margin: auto;
`;function N({adding:e,creating:n,autoSlippage:t,positionID:a,children:c}){const{chainId:g}=(0,o.useWeb3React)(),x=(0,m.useTheme)(),b=(0,u.T)();(0,d.TH)().pathname.includes("add/v2")||a&&a.toString();return(0,i.jsx)(y,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(C,{to:"/swap",onClick:()=>{e&&(b((0,p.dA)()),b((0,h.dA)()))},flex:c?"1":void 0,children:(0,i.jsx)(I,{stroke:x.neutral2})}),(0,i.jsx)(j,{textAlign:c?"start":"center",children:n?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),c&&(0,i.jsx)(l.xu,{style:{marginRight:".5rem"},children:c}),(0,i.jsx)(s.Z,{autoSlippage:t,chainId:g,hideRoutingSettings:!0})]})})}},22827:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(42893),r=t(13712);const o=t(87253).default.input.withConfig({displayName:"Slider__StyledRangeInput",componentId:"sc-2b24fd52-0"})`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: ${({theme:e})=>e.accent1};
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    border: none;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.accent1}, ${({theme:e})=>e.accent1});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.surface4}, ${({theme:e})=>e.surface2});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({theme:e})=>e.surface4};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${({theme:e})=>e.surface4};
  }
  &::-ms-fill-upper {
    background: ${({theme:e})=>e.surface2};
  }
`;function s({value:e,onChange:n,min:t=0,step:s=1,max:a=100,size:c=28,...d}){const l=(0,r.useCallback)((e=>{n(parseInt(e.target.value))}),[n]);return(0,i.jsx)(o,{size:c,...d,type:"range",value:e,style:{padding:"15px 0"},onChange:l,"aria-labelledby":"input slider",step:s,min:t,max:a})}},48244:function(e,n,t){t.d(n,{U:function(){return i},q:function(){return f}});var i,r=t(75255),o=t(19903),s=t(80815),a=t(66196),c=t(36665),d=t(5976),l=t(15337),u=t(13712),p=t(54479);function h(e,n,t){const{chainId:h}=(0,s.useWeb3React)(),m=e?.currency?.isToken?e.currency:void 0,g=function(e,n,t){const{account:r}=(0,s.useWeb3React)(),o=e?.currency?.isToken?e.currency:void 0,{tokenAllowance:a}=(0,d.Fx)(o,r??void 0,n),c=t(o,n);return(0,u.useMemo)((()=>e&&n?e.currency.isNative?i.APPROVED:a?a.lessThan(e)?c?i.PENDING:i.NOT_APPROVED:i.APPROVED:i.UNKNOWN:i.UNKNOWN),[e,c,n,a])}(e,n,t),x=(0,c.Ib)(m?.address),f=(0,u.useCallback)((async()=>{function t(e){console.warn(`${m?.symbol||"Token"} approval failed:`,e)}if(g!==i.NOT_APPROVED)return t("approve was called unnecessarily");if(!h)return t("no chainId");if(!m)return t("no token");if(!x)return t("tokenContract is null");if(!e)return t("missing amount to approve");if(!n)return t("no spender");let s=!1;const c=await x.estimateGas.approve(n,r.Bz).catch((()=>(s=!0,x.estimateGas.approve(n,e.quotient.toString()))));return x.approve(n,s?e.quotient.toString():r.Bz,{gasLimit:(0,p.y)(c)}).then((t=>{const i={chain_id:h,token_symbol:m?.symbol,token_address:(0,l.DT)(m)};return(0,a._P)(o.Je.APPROVE_TOKEN_TXN_SUBMITTED,i),{response:t,tokenAddress:m.address,spenderAddress:n,amount:e}})).catch((e=>{throw t(e),e}))}),[g,m,x,e,n,h]);return[g,f]}!function(e){e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED"}(i||(i={}));var m=t(97905),g=t(843);function x(e){const n=(0,m.h7)();return(0,u.useCallback)((()=>e().then((e=>{if(e){const{response:t,tokenAddress:i,spenderAddress:r,amount:o}=e;n(t,{type:g.i.APPROVAL,tokenAddress:i,spender:r,amount:o.quotient.toString()})}}))),[n,e])}function f(e,n){const[t,i]=h(e,n,m.wB);return[t,x(i)]}},80558:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(13712);function r(e,n,t=100){const[r,o]=(0,i.useState)((()=>e)),s=(0,i.useRef)(),a=(0,i.useCallback)((e=>{o(e),s.current&&clearTimeout(s.current),s.current=setTimeout((()=>{n(e),s.current=void 0}),t)}),[t,n]);return(0,i.useEffect)((()=>{s.current&&(clearTimeout(s.current),s.current=void 0),o(e)}),[e]),[r,a]}},68434:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(80815),r=t(61646),o=t(13712),s=t(36665);function a(){const{account:e}=(0,i.useWeb3React)(),n=(0,s.c5)(),t=(0,o.useMemo)((()=>[e??void 0]),[e]),a=(0,r.Wk)(n,"isArgentWallet",t,r.DB);return Boolean(a?.result?.[0])}},34603:function(e,n,t){t.d(n,{p:function(){return j}});var i,r=t(39112),o=t(80815),s=t(45492),a=t(44998),c=t.n(a),d=t(61646),l=t(13712),u=t(58025),p=t(36665),h=t(68434);!function(e){e[e.AMOUNT=1]="AMOUNT",e[e.ALLOWED=2]="ALLOWED"}(i||(i={}));const m=1200,g={[s.H.MAINNET]:{[u.Hz.address]:{type:i.AMOUNT,name:"USD Coin",version:"2"},[u.h1.address]:{type:i.ALLOWED,name:"Dai Stablecoin",version:"1"},[u.yg[s.H.MAINNET].address]:{type:i.AMOUNT,name:"Uniswap"}},[s.H.GOERLI]:{[u.yg[s.H.GOERLI].address]:{type:i.AMOUNT,name:"Uniswap"}},[s.H.SEPOLIA]:{[u.yg[s.H.SEPOLIA].address]:{type:i.AMOUNT,name:"Uniswap"}}};var x;!function(e){e[e.NOT_APPLICABLE=0]="NOT_APPLICABLE",e[e.LOADING=1]="LOADING",e[e.NOT_SIGNED=2]="NOT_SIGNED",e[e.SIGNED=3]="SIGNED"}(x||(x={}));const f=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],y=[{name:"name",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],C=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],b=[{name:"holder",type:"address"},{name:"spender",type:"address"},{name:"nonce",type:"uint256"},{name:"expiry",type:"uint256"},{name:"allowed",type:"bool"}];var I=t(57282);const v={version:"1",name:"Uniswap V2",type:i.AMOUNT};function j(e,n){return function(e,n,t,s){const{account:a,chainId:u,provider:I}=(0,o.useWeb3React)(),v=e?.currency?.isToken?e.currency.address:void 0,j=(0,p.N9)(v),N=(0,h.Z)(),T=(0,l.useMemo)((()=>[a??void 0]),[a]),E=(0,d.Wk)(j,"nonces",T),w=s??(u&&v?g[u]?.[v]:void 0),[R,_]=(0,l.useState)(null);return(0,l.useMemo)((()=>{if(N||!e||!j||!a||!u||!t||!I||!E.valid||!v||!n||!w)return{state:x.NOT_APPLICABLE,signatureData:null,gatherPermitSignature:null};const o=E.result?.[0]?.toNumber();if(E.loading||"number"!==typeof o)return{state:x.LOADING,signatureData:null,gatherPermitSignature:null};const s=R&&R.owner===a&&R.deadline>=t.toNumber()&&R.tokenAddress===v&&R.nonce===o&&R.spender===n&&("allowed"in R||c().greaterThanOrEqual(c().BigInt(R.amount),e.quotient));return{state:s?x.SIGNED:x.NOT_SIGNED,signatureData:s?R:null,gatherPermitSignature:async function(){const s=w.type===i.ALLOWED,c=t.toNumber()+m,d=e.quotient.toString(),l=s?{holder:a,spender:n,allowed:s,nonce:o,expiry:c}:{owner:a,spender:n,value:d,nonce:o,deadline:c},p=w.version?{name:w.name,version:w.version,verifyingContract:v,chainId:u}:{name:w.name,verifyingContract:v,chainId:u},h=JSON.stringify({types:{EIP712Domain:w.version?f:y,Permit:s?b:C},domain:p,primaryType:"Permit",message:l});return I.send("eth_signTypedData_v4",[a,h]).then(r.splitSignature).then((e=>{_({v:e.v,r:e.r,s:e.s,deadline:c,...s?{allowed:s}:{amount:d},nonce:o,chainId:u,owner:a,spender:n,tokenAddress:v,permitType:w.type})}))}}}),[e,j,a,u,N,t,I,E.loading,E.valid,E.result,v,n,w,R])}(e,n,(0,I.Z)(),v)}},72714:function(e,n,t){t.d(n,{Z:function(){return a},e:function(){return s}});var i=t(42893),r=t(87253),o=t(437);const s=r.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
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
  z-index: ${o.k.default};
`;function a(e){return(0,i.jsx)(s,{...e})}},67708:function(e,n,t){t.r(n),t.d(n,{default:function(){return ie}});var i=t(42893),r=t(86003),o=t(12204),s=t(15387),a=t(80815),c=t(5920),d=t(22875),l=t(48141),u=t(6053),p=t(34603),h=t(96234),m=t(13712),g=t(49287),x=t(20837),f=t(80657),y=t(47096),C=t(87253),b=t(39839),I=t(60198),v=t(42246),j=t(60476),N=t(63548),T=t(45533),E=t(56823),w=t(4987),R=t(16403),_=t(2304),U=t(22827),A=t(20095),k=t(36727),P=t(58025),S=t(15627),O=t(48244),D=t(36665),L=t(80558),Y=t(57282),$=t(53931),q=t(44998),B=t.n(q),z=t(4572),W=t(63498),M=t(75712),Q=t(97761),Z=t(42881);function V(){return(0,W.C)((e=>e.burn))}var H=t(97905),F=t(843),G=t(64614),K=t(54479),J=t(39515),X=t(21103),ee=t(72714),ne=t(55494);const te=new s.Percent(5,100);function ie(){const{chainId:e}=(0,a.useWeb3React)(),{currencyIdA:n,currencyIdB:t}=(0,f.UO)(),[r,o]=[(0,S.U8)(n)??void 0,(0,S.U8)(t)??void 0];return(0,l.EC)(e)&&r!==o?(0,i.jsx)(re,{}):(0,i.jsx)(h.PositionPageUnsupportedContent,{})}function re(){const e=(0,f.s0)(),{currencyIdA:n,currencyIdB:t}=(0,f.UO)(),[l,h]=[(0,S.U8)(n)??void 0,(0,S.U8)(t)??void 0],{account:q,chainId:ie,provider:re}=(0,a.useWeb3React)(),[oe,se]=(0,m.useMemo)((()=>[l?.wrapped,h?.wrapped]),[l,h]),ae=(0,C.useTheme)(),ce=(0,c.LK)(),{independentField:de,typedValue:le}=V(),{pair:ue,parsedAmounts:pe,error:he}=function(e,n){const{account:t}=(0,a.useWeb3React)(),{independentField:r,typedValue:c}=V(),[,d]=(0,Q.Oo)(e,n),l=(0,Z.Z)(t??void 0,[d?.liquidityToken]),u=l?.[d?.liquidityToken?.address??""],[p,h]=[e?.wrapped,n?.wrapped],m={[$.g.CURRENCY_A]:p,[$.g.CURRENCY_B]:h,[$.g.LIQUIDITY]:d?.liquidityToken},g=(0,M.A)(d?.liquidityToken),x=d&&g&&u&&p&&B().greaterThanOrEqual(g.quotient,u.quotient)?s.CurrencyAmount.fromRawAmount(p,d.getLiquidityValue(p,g,u,!1).quotient):void 0,f=d&&g&&u&&h&&B().greaterThanOrEqual(g.quotient,u.quotient)?s.CurrencyAmount.fromRawAmount(h,d.getLiquidityValue(h,g,u,!1).quotient):void 0,y={[$.g.CURRENCY_A]:x,[$.g.CURRENCY_B]:f};let C=new s.Percent("0","100");if(r===$.g.LIQUIDITY_PERCENT)C=new s.Percent(c,"100");else if(r===$.g.LIQUIDITY){if(d?.liquidityToken){const e=(0,z.Z)(c,d.liquidityToken);e&&u&&!e.greaterThan(u)&&(C=new s.Percent(e.quotient,u.quotient))}}else if(m[r]){const e=(0,z.Z)(c,m[r]),n=y[r];e&&n&&!e.greaterThan(n)&&(C=new s.Percent(e.quotient,n.quotient))}const b={[$.g.LIQUIDITY_PERCENT]:C,[$.g.LIQUIDITY]:u&&C&&C.greaterThan("0")?s.CurrencyAmount.fromRawAmount(u.currency,C.multiply(u.quotient).quotient):void 0,[$.g.CURRENCY_A]:p&&C&&C.greaterThan("0")&&x?s.CurrencyAmount.fromRawAmount(p,C.multiply(x.quotient).quotient):void 0,[$.g.CURRENCY_B]:h&&C&&C.greaterThan("0")&&f?s.CurrencyAmount.fromRawAmount(h,C.multiply(f.quotient).quotient):void 0};let I;return t||(I=(0,i.jsx)(o.cC,{id:"VHOVEJ"})),b[$.g.LIQUIDITY]&&b[$.g.CURRENCY_A]&&b[$.g.CURRENCY_B]||(I=I??(0,i.jsx)(o.cC,{id:"iPMIoT"})),{pair:d,parsedAmounts:b,error:I}}(l??void 0,h??void 0),{onUserInput:me}=function(){const e=(0,W.T)();return{onUserInput:(0,m.useCallback)(((n,t)=>{e((0,$.L)({field:n,typedValue:t}))}),[e])}}(),ge=!he,[xe,fe]=(0,m.useState)(!1),[ye,Ce]=(0,m.useState)(!1),[be,Ie]=(0,m.useState)(!1),[ve,je]=(0,m.useState)(""),Ne=(0,Y.Z)(),Te=(0,G.eq)(te),Ee={[$.g.LIQUIDITY_PERCENT]:pe[$.g.LIQUIDITY_PERCENT].equalTo("0")?"0":pe[$.g.LIQUIDITY_PERCENT].lessThan(new s.Percent("1","100"))?"<1":pe[$.g.LIQUIDITY_PERCENT].toFixed(0),[$.g.LIQUIDITY]:de===$.g.LIQUIDITY?le:pe[$.g.LIQUIDITY]?.toSignificant(6)??"",[$.g.CURRENCY_A]:de===$.g.CURRENCY_A?le:pe[$.g.CURRENCY_A]?.toSignificant(6)??"",[$.g.CURRENCY_B]:de===$.g.CURRENCY_B?le:pe[$.g.CURRENCY_B]?.toSignificant(6)??""},we=pe[$.g.LIQUIDITY_PERCENT]?.equalTo(new s.Percent("1")),Re=(0,D.t0)(ue?.liquidityToken?.address),_e=(0,D.XF)(),{gatherPermitSignature:Ue,signatureData:Ae}=(0,p.p)(pe[$.g.LIQUIDITY],_e?.address),[ke,Pe]=(0,O.q)(pe[$.g.LIQUIDITY],_e?.address);const Se=(0,m.useCallback)(((e,n)=>me(e,n)),[me]),Oe=(0,m.useCallback)((e=>Se($.g.LIQUIDITY,e)),[Se]),De=(0,m.useCallback)((e=>Se($.g.CURRENCY_A,e)),[Se]),Le=(0,m.useCallback)((e=>Se($.g.CURRENCY_B,e)),[Se]),Ye=(0,H.h7)(),$e=(0,u.G)();async function qe(){if(!ie||!re||!q||!Ne||!_e||!$e)throw new Error("missing dependencies");const{[$.g.CURRENCY_A]:e,[$.g.CURRENCY_B]:n}=pe;if(!e||!n)throw new Error("missing currency amounts");const t={[$.g.CURRENCY_A]:(0,J.u)(e,Te)[0],[$.g.CURRENCY_B]:(0,J.u)(n,Te)[0]};if(!l||!h)throw new Error("missing tokens");const i=pe[$.g.LIQUIDITY];if(!i)throw new Error("missing liquidity amount");const o=h.isNative,s=l.isNative||o;if(!oe||!se)throw new Error("could not wrap");let a,c;if(ke===O.U.APPROVED)s?(a=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],c=[o?oe.address:se.address,i.quotient.toString(),t[o?$.g.CURRENCY_A:$.g.CURRENCY_B].toString(),t[o?$.g.CURRENCY_B:$.g.CURRENCY_A].toString(),q,Ne.toHexString()]):(a=["removeLiquidity"],c=[oe.address,se.address,i.quotient.toString(),t[$.g.CURRENCY_A].toString(),t[$.g.CURRENCY_B].toString(),q,Ne.toHexString()]);else{if(null===Ae)throw new Error("Attempting to confirm without approval or a signature. Please contact support.");s?(a=["removeLiquidityETHWithPermit"],c=[o?oe.address:se.address,i.quotient.toString(),t[o?$.g.CURRENCY_A:$.g.CURRENCY_B].toString(),t[o?$.g.CURRENCY_B:$.g.CURRENCY_A].toString(),q,Ae.deadline,!1,Ae.v,Ae.r,Ae.s]):(a=["removeLiquidityWithPermit"],c=[oe.address,se.address,i.quotient.toString(),t[$.g.CURRENCY_A].toString(),t[$.g.CURRENCY_B].toString(),q,Ae.deadline,!1,Ae.v,Ae.r,Ae.s])}const d=await Promise.all(a.map((e=>_e.estimateGas[e](...c).then((e=>(0,K.y)(e))).catch((n=>{console.error("estimateGas failed",e,c,n)}))))),u=d.findIndex((e=>r.O$.isBigNumber(e)));if(-1===u)console.error("This transaction would fail. Please contact support.");else{const e=a[u],n=d[u];Ie(!0),await _e[e](...c,{gasLimit:n}).then((e=>{Ie(!1),Ye(e,{type:F.i.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,X.H)(l),quoteCurrencyId:(0,X.H)(h),expectedAmountBaseRaw:pe[$.g.CURRENCY_A]?.quotient.toString()??"0",expectedAmountQuoteRaw:pe[$.g.CURRENCY_B]?.quotient.toString()??"0"}),je(e.hash)})).catch((e=>{Ie(!1),console.error(e)}))}}function Be(){return(0,i.jsxs)(j.Tz,{gap:"md",style:{marginTop:"20px"},children:[(0,i.jsxs)(_.m0,{align:"flex-end",children:[(0,i.jsx)(y.xv,{fontSize:24,fontWeight:535,children:pe[$.g.CURRENCY_A]?.toSignificant(6)}),(0,i.jsxs)(_.DA,{gap:"4px",children:[(0,i.jsx)(E.Z,{currency:l,size:"24px"}),(0,i.jsx)(y.xv,{fontSize:24,fontWeight:535,style:{marginLeft:"10px"},children:l?.symbol})]})]}),(0,i.jsx)(_.DA,{children:(0,i.jsx)(g.Z,{size:"16",color:ae.neutral2})}),(0,i.jsxs)(_.m0,{align:"flex-end",children:[(0,i.jsx)(y.xv,{fontSize:24,fontWeight:535,children:pe[$.g.CURRENCY_B]?.toSignificant(6)}),(0,i.jsxs)(_.DA,{gap:"4px",children:[(0,i.jsx)(E.Z,{currency:h,size:"24px"}),(0,i.jsx)(y.xv,{fontSize:24,fontWeight:535,style:{marginLeft:"10px"},children:h?.symbol})]})]}),(0,i.jsx)(b.Tv.DeprecatedItalic,{fontSize:12,color:ae.neutral2,textAlign:"left",padding:"12px 0 0 0",children:(0,i.jsx)(o.cC,{id:"4nBvG6",values:{0:Te.toSignificant(4)}})})]})}function ze(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(_.m0,{children:[(0,i.jsx)(y.xv,{color:ae.neutral2,fontWeight:535,fontSize:16,children:(0,i.jsx)(o.cC,{id:"pKfYXn",values:{0:l?.symbol,1:h?.symbol}})}),(0,i.jsxs)(_.DA,{children:[(0,i.jsx)(T.Z,{currency0:l,currency1:h,margin:!0}),(0,i.jsx)(y.xv,{fontWeight:535,fontSize:16,children:pe[$.g.LIQUIDITY]?.toSignificant(6)})]})]}),ue&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(_.m0,{children:[(0,i.jsx)(y.xv,{color:ae.neutral2,fontWeight:535,fontSize:16,children:(0,i.jsx)(o.cC,{id:"a7u1N9"})}),(0,i.jsxs)(y.xv,{fontWeight:535,fontSize:16,color:ae.neutral1,children:["1 ",l?.symbol," = ",oe?ue.priceOf(oe).toSignificant(6):"-"," ",h?.symbol]})]}),(0,i.jsxs)(_.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsxs)(y.xv,{fontWeight:535,fontSize:16,color:ae.neutral1,children:["1 ",h?.symbol," = ",se?ue.priceOf(se).toSignificant(6):"-"," ",l?.symbol]})]})]}),(0,i.jsx)(I.DF,{disabled:!(ke===O.U.APPROVED||null!==Ae),onClick:qe,children:(0,i.jsx)(y.xv,{fontWeight:535,fontSize:20,children:(0,i.jsx)(o.cC,{id:"7VpPHA"})})})]})}const We=(0,i.jsx)(o.cC,{id:"OqNe1s",values:{0:pe[$.g.CURRENCY_A]?.toSignificant(6),1:l?.symbol,2:pe[$.g.CURRENCY_B]?.toSignificant(6),3:h?.symbol}}),Me=(0,m.useCallback)((e=>{Se($.g.LIQUIDITY_PERCENT,e.toString())}),[Se]),Qe=l?.isNative||h?.isNative,Ze=Boolean(ie&&P.Fl[ie]&&(l&&P.Fl[ie]?.equals(l)||h&&P.Fl[ie]?.equals(h))),Ve=(0,m.useCallback)((i=>{t&&(0,X.H)(i)===t?e(`/remove/v2/${(0,X.H)(i)}/${n}`):e(`/remove/v2/${(0,X.H)(i)}/${t}`)}),[n,t,e]),He=(0,m.useCallback)((i=>{n&&(0,X.H)(i)===n?e(`/remove/v2/${t}/${(0,X.H)(i)}`):e(`/remove/v2/${n}/${(0,X.H)(i)}`)}),[n,t,e]),Fe=(0,m.useCallback)((()=>{fe(!1),ve&&Se($.g.LIQUIDITY_PERCENT,"0"),je("")}),[Se,ve]),[Ge,Ke]=(0,L.Z)(Number.parseInt(pe[$.g.LIQUIDITY_PERCENT].toFixed(0)),Me);return $e?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(ee.Z,{children:[(0,i.jsx)(w.w,{creating:!1,adding:!1,autoSlippage:te}),(0,i.jsxs)(ne.im,{children:[(0,i.jsx)(k.Z,{isOpen:xe,onDismiss:Fe,attemptingTxn:be,hash:ve||"",reviewContent:()=>(0,i.jsx)(k.p,{title:(0,i.jsx)(o.cC,{id:"AeZIvT"}),onDismiss:Fe,topContent:Be,bottomContent:ze}),pendingText:We}),(0,i.jsxs)(j.Tz,{gap:"md",children:[(0,i.jsx)(v.Pj,{children:(0,i.jsx)(j.Tz,{gap:"10px",children:(0,i.jsx)(b.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,i.jsx)(o.cC,{id:"Vp58p0",components:{0:(0,i.jsx)("b",{})}})})})}),(0,i.jsx)(v.hl,{children:(0,i.jsxs)(j.Tz,{gap:"20px",children:[(0,i.jsxs)(_.m0,{children:[(0,i.jsx)(y.xv,{fontWeight:535,children:(0,i.jsx)(o.cC,{id:"nC4M5t"})}),(0,i.jsx)(ne.DC,{fontWeight:535,onClick:()=>{Ce(!ye)},children:ye?(0,i.jsx)(o.cC,{id:"AQK14J"}):(0,i.jsx)(o.cC,{id:"tUVwfQ"})})]}),(0,i.jsx)(_.ZP,{style:{alignItems:"flex-end"},children:(0,i.jsxs)(y.xv,{fontSize:72,fontWeight:535,children:[Ee[$.g.LIQUIDITY_PERCENT],"%"]})}),!ye&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(U.Z,{value:Ge,onChange:Ke}),(0,i.jsxs)(_.m0,{children:[(0,i.jsx)(ne.ER,{onClick:()=>Se($.g.LIQUIDITY_PERCENT,"25"),width:"20%",children:"25%"}),(0,i.jsx)(ne.ER,{onClick:()=>Se($.g.LIQUIDITY_PERCENT,"50"),width:"20%",children:"50%"}),(0,i.jsx)(ne.ER,{onClick:()=>Se($.g.LIQUIDITY_PERCENT,"75"),width:"20%",children:"75%"}),(0,i.jsx)(ne.ER,{onClick:()=>Se($.g.LIQUIDITY_PERCENT,"100"),width:"20%",children:"Max"})]})]})]})}),!ye&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.lg,{children:(0,i.jsx)(x.Z,{size:"16",color:ae.neutral2})}),(0,i.jsx)(v.hl,{children:(0,i.jsxs)(j.Tz,{gap:"10px",children:[(0,i.jsxs)(_.m0,{children:[(0,i.jsx)(y.xv,{fontSize:24,fontWeight:535,children:Ee[$.g.CURRENCY_A]||"-"}),(0,i.jsxs)(_.DA,{children:[(0,i.jsx)(E.Z,{currency:l,style:{marginRight:"12px"}}),(0,i.jsx)(y.xv,{fontSize:24,fontWeight:535,id:"remove-liquidity-tokena-symbol",children:l?.symbol})]})]}),(0,i.jsxs)(_.m0,{children:[(0,i.jsx)(y.xv,{fontSize:24,fontWeight:535,children:Ee[$.g.CURRENCY_B]||"-"}),(0,i.jsxs)(_.DA,{children:[(0,i.jsx)(E.Z,{currency:h,style:{marginRight:"12px"}}),(0,i.jsx)(y.xv,{fontSize:24,fontWeight:535,id:"remove-liquidity-tokenb-symbol",children:h?.symbol})]})]}),ie&&(Ze||Qe)?(0,i.jsx)(_.m0,{style:{justifyContent:"flex-end"},children:Qe?(0,i.jsx)(b.m_,{to:`/remove/v2/${l?.isNative&&ie&&P.Fl[ie]?P.Fl[ie]?.address:n}/${h?.isNative&&ie&&P.Fl[ie]?P.Fl[ie]?.address:t}`,children:"Receive WETH"}):Ze?(0,i.jsx)(b.m_,{to:`/remove/v2/${l&&P.Fl[ie]?.equals(l)?"ETH":n}/${h&&P.Fl[ie]?.equals(h)?"ETH":t}`,children:"Receive ETH"}):null}):null]})})]}),ye&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N.Z,{value:Ee[$.g.LIQUIDITY],onUserInput:Oe,onMax:()=>{Se($.g.LIQUIDITY_PERCENT,"100")},showMaxButton:!we,currency:ue?.liquidityToken,pair:ue,id:"liquidity-amount"}),(0,i.jsx)(j.lg,{children:(0,i.jsx)(x.Z,{size:"16",color:ae.neutral2})}),(0,i.jsx)(N.Z,{hideBalance:!0,value:Ee[$.g.CURRENCY_A],onUserInput:De,onMax:()=>Se($.g.LIQUIDITY_PERCENT,"100"),showMaxButton:!we,currency:l,label:"Output",onCurrencySelect:Ve,id:"remove-liquidity-tokena"}),(0,i.jsx)(j.lg,{children:(0,i.jsx)(g.Z,{size:"16",color:ae.neutral2})}),(0,i.jsx)(N.Z,{hideBalance:!0,value:Ee[$.g.CURRENCY_B],onUserInput:Le,onMax:()=>Se($.g.LIQUIDITY_PERCENT,"100"),showMaxButton:!we,currency:h,label:"Output",onCurrencySelect:He,id:"remove-liquidity-tokenb"})]}),ue&&(0,i.jsxs)("div",{style:{padding:"10px 20px"},children:[(0,i.jsxs)(_.m0,{children:[(0,i.jsx)(o.cC,{id:"rcNnsQ"}),(0,i.jsxs)("div",{children:["1 ",l?.symbol," = ",oe?ue.priceOf(oe).toSignificant(6):"-"," ",h?.symbol]})]}),(0,i.jsxs)(_.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsxs)("div",{children:["1 ",h?.symbol," = ",se?ue.priceOf(se).toSignificant(6):"-"," ",l?.symbol]})]})]}),(0,i.jsx)("div",{style:{position:"relative"},children:q?(0,i.jsxs)(_.m0,{children:[(0,i.jsx)(I.gn,{onClick:async function(){if(!Re||!ue||!re||!Ne)throw new Error("missing dependencies");if(!pe[$.g.LIQUIDITY])throw new Error("missing liquidity amount");await Pe()},confirmed:ke===O.U.APPROVED||null!==Ae,disabled:ke!==O.U.NOT_APPROVED||null!==Ae,mr:"0.5rem",fontWeight:535,fontSize:16,children:ke===O.U.PENDING?(0,i.jsx)(A.bb,{children:(0,i.jsx)(o.cC,{id:"j2Uisd"})}):ke===O.U.APPROVED||null!==Ae?(0,i.jsx)(o.cC,{id:"7kb4LU"}):(0,i.jsx)(o.cC,{id:"Z7ZXbT"})}),(0,i.jsx)(I.Kd,{onClick:()=>{fe(!0)},disabled:!ge||null===Ae&&ke!==O.U.APPROVED,error:!ge&&!!pe[$.g.CURRENCY_A]&&!!pe[$.g.CURRENCY_B],children:(0,i.jsx)(y.xv,{fontSize:16,fontWeight:535,children:he||(0,i.jsx)(o.cC,{id:"t/YqKh"})})})]}):(0,i.jsx)(I.Sy,{onClick:ce,children:(0,i.jsx)(o.cC,{id:"VHOVEJ"})})})]})]})]}),ue?(0,i.jsx)(j.Tz,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:(0,i.jsx)(R.WP,{showUnwrapped:Ze,pair:ue})}):null]}):(0,i.jsx)(d.A,{})}},39515:function(e,n,t){t.d(n,{u:function(){return r}});const i=new(t(15387).Fraction)(1,1);function r(e,n){if(n.lessThan(0)||n.greaterThan(i))throw new Error("Unexpected slippage");return[e.multiply(i.subtract(n)).quotient,e.multiply(i.add(n)).quotient]}},96315:function(e,n,t){var i=t(13712),r=t(41432),o=t.n(r);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},s.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,c=void 0===o?24:o,d=a(e,["color","size"]);return i.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("polyline",{points:"18 15 12 9 6 15"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="ChevronUp",n.Z=c},49287:function(e,n,t){var i=t(13712),r=t(41432),o=t.n(r);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},s.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,c=void 0===o?24:o,d=a(e,["color","size"]);return i.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="Plus",n.Z=c}}]);
//# sourceMappingURL=5797.dc2e8e73.chunk.js.map