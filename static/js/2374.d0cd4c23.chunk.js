"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2374],{4987:function(e,n,t){t.d(n,{q:function(){return C},w:function(){return k}});var i=t(42893),r=t(12204),a=t(80815),c=t(24364),o=t(46591),s=t(41440),d=t(80657),l=t(47096),u=t(63498),p=t(40740),x=t(4292),h=t(87253),m=t(39839),f=t(47371),g=t(2304);const y=h.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-1642bf23-0"})`
  ${f.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,b=(0,h.default)(s.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-1642bf23-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,j=(0,h.default)(m.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-1642bf23-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,v=(0,h.default)(o.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-1642bf23-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function C({origin:e}){return(0,i.jsx)(y,{children:(0,i.jsxs)(g.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(s.rU,{to:e,children:(0,i.jsx)(v,{})}),(0,i.jsx)(j,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const w=(0,h.default)(m.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-1642bf23-4"})`
  flex: 1;
  margin: auto;
`;function k({adding:e,creating:n,autoSlippage:t,positionID:o,children:s}){const{chainId:m}=(0,a.useWeb3React)(),f=(0,h.useTheme)(),j=(0,u.T)();(0,d.TH)().pathname.includes("add/v2")||o&&o.toString();return(0,i.jsx)(y,{children:(0,i.jsxs)(g.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(b,{to:"/swap",onClick:()=>{e&&(j((0,p.dA)()),j((0,x.dA)()))},flex:s?"1":void 0,children:(0,i.jsx)(v,{stroke:f.neutral2})}),(0,i.jsx)(w,{textAlign:s?"start":"center",children:n?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),s&&(0,i.jsx)(l.xu,{style:{marginRight:".5rem"},children:s}),(0,i.jsx)(c.Z,{autoSlippage:t,chainId:m,hideRoutingSettings:!0})]})})}},22827:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(42893),r=t(13712);const a=t(87253).default.input.withConfig({displayName:"Slider__StyledRangeInput",componentId:"sc-2b24fd52-0"})`
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
`;function c({value:e,onChange:n,min:t=0,step:c=1,max:o=100,size:s=28,...d}){const l=(0,r.useCallback)((e=>{n(parseInt(e.target.value))}),[n]);return(0,i.jsx)(a,{size:s,...d,type:"range",value:e,style:{padding:"15px 0"},onChange:l,"aria-labelledby":"input slider",step:c,min:t,max:o})}},19969:function(e,n,t){t.d(n,{SS:function(){return x},sq:function(){return d},MN:function(){return l},RF:function(){return u},uO:function(){return p},I8:function(){return s}});var i=t(87253),r=t.p+"static/media/big_unicorn.595c49962d708abbaaec.png",a=t.p+"static/media/noise.3c7efafc83614205bd1a.png",c=t.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png",o=t(60476);const s=(0,i.default)(o.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,d=i.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
  background: url(${r});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,l=i.default.span.withConfig({displayName:"styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${c});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,u=i.default.span.withConfig({displayName:"styled__CardNoise",componentId:"sc-6a13bc9-3"})`
  background: url(${a});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,p=(0,i.default)(o.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,x=i.default.div.withConfig({displayName:"styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},80558:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(13712);function r(e,n,t=100){const[r,a]=(0,i.useState)((()=>e)),c=(0,i.useRef)(),o=(0,i.useCallback)((e=>{a(e),c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{n(e),c.current=void 0}),t)}),[t,n]);return(0,i.useEffect)((()=>{c.current&&(clearTimeout(c.current),c.current=void 0),a(e)}),[e]),[r,o]}},72714:function(e,n,t){t.d(n,{Z:function(){return o},e:function(){return c}});var i=t(42893),r=t(87253),a=t(437);const c=r.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
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
  z-index: ${a.k.default};
`;function o(e){return(0,i.jsx)(c,{...e})}},62247:function(e,n,t){t.r(n),t.d(n,{default:function(){return ie}});var i=t(42893),r=t(86003),a=t(12204),c=t(19903),o=t(15387),s=t(35206),d=t(80815),l=t(66196),u=t(56588),p=t(60198),x=t(42246),h=t(60476),m=t(45533),f=t(19969),g=t(25575),y=t(56823),b=t(4987),j=t(2304),v=t(22827),C=t(36772),w=t(48141),k=t(36665),S=t(80558),z=t(57282),T=t(59991),I=t(46217),_=t(96234),$=t(13712),L=t(80657),A=t(47096),q=t(15627),W=t(46109),N=t(46443),R=t(63498),D=t(49111),Z=t(19918);function V(){return(0,R.C)((e=>e.burnV3))}var M=t(97905),O=t(64614),P=t(87253),F=t(39839),B=t(75808),E=t(57482),U=t(36727),G=t(58025),H=t(843),J=t(54479),Q=t(21103),Y=t(72714),K=t(55494);const X=P.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-53ad7253-0"})`
  position: relative;
  padding: 20px;
  min-width: 460px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
    min-width: 340px;
  `};
`,ee=(0,P.default)(K.ER).withConfig({displayName:"styled__SmallMaxButton",componentId:"sc-53ad7253-1"})`
  font-size: 12px;
`,ne=(0,P.default)(A.xv).withConfig({displayName:"styled__ResponsiveHeaderText",componentId:"sc-53ad7253-2"})`
  font-size: 40px;
  font-weight: 535;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
     font-size: 24px
  `};
`,te=new o.Percent(5,100);function ie(){const{chainId:e}=(0,d.useWeb3React)(),{tokenId:n}=(0,L.UO)(),t=(0,L.TH)(),a=(0,$.useMemo)((()=>{try{return r.O$.from(n)}catch{return null}}),[n]),{position:c,loading:o}=(0,T.n)(a??void 0);return null===a||a.eq(0)?(0,i.jsx)(L.Fg,{to:{...t,pathname:"/pools"},replace:!0}):(0,w.EC)(e)&&(o||c)?(0,i.jsx)(re,{tokenId:a}):(0,i.jsx)(_.PositionPageUnsupportedContent,{})}function re({tokenId:e}){const{position:n}=(0,T.n)(e),t=(0,P.useTheme)(),{account:r,chainId:w,provider:_}=(0,d.useWeb3React)(),L=(0,l.oO)(),{formatCurrencyAmount:K}=(0,E.Gb)(),[ie,re]=(0,$.useState)(!1),ae=(0,I.Z)(w).wrapped.symbol,{percent:ce}=V(),{position:oe,liquidityPercentage:se,liquidityValue0:de,liquidityValue1:le,feeValue0:ue,feeValue1:pe,outOfRange:xe,error:he}=function(e,n=!1){const{account:t}=(0,d.useWeb3React)(),{percent:r}=V(),c=(0,q.dQ)(e?.token0),l=(0,q.dQ)(e?.token1),[,u]=(0,W.AI)(c??void 0,l??void 0,e?.fee),p=(0,$.useMemo)((()=>u&&e?.liquidity&&"number"===typeof e?.tickLower&&"number"===typeof e?.tickUpper?new s.Position({pool:u,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper}):void 0),[u,e]),x=new o.Percent(r,100),h=p?x.multiply(p.amount0.quotient).quotient:void 0,m=p?x.multiply(p.amount1.quotient).quotient:void 0,f=c&&h?o.CurrencyAmount.fromRawAmount(n?c:(0,D.B)(c),h):void 0,g=l&&m?o.CurrencyAmount.fromRawAmount(n?l:(0,D.B)(l),m):void 0,[y,b]=(0,N.t)(u??void 0,e?.tokenId,n),j=!(!u||!e)&&(u.tickCurrent<e.tickLower||u.tickCurrent>e.tickUpper);let v;return t||(v=(0,i.jsx)(a.cC,{id:"VHOVEJ"})),0===r&&(v=v??(0,i.jsx)(a.cC,{id:"Sta9CR"})),{position:p,liquidityPercentage:x,liquidityValue0:f,liquidityValue1:g,feeValue0:y,feeValue1:b,outOfRange:j,error:v}}(n,ie),{onPercentSelect:me}=function(){const e=(0,R.T)();return{onPercentSelect:(0,$.useCallback)((n=>{e((0,Z.o)({percent:n}))}),[e])}}(),fe=n?.liquidity?.eq(0),[ge,ye]=(0,S.Z)(ce,me),be=(0,z.Z)(),je=(0,O.eq)(te),[ve,Ce]=(0,$.useState)(!1),[we,ke]=(0,$.useState)(!1),[Se,ze]=(0,$.useState)(),Te=(0,M.h7)(),Ie=(0,k.GL)(),_e=(0,$.useCallback)((async()=>{if(ke(!0),!Ie||!de||!le||!be||!r||!w||!oe||!se||!_)return;const{calldata:n,value:t}=s.NonfungiblePositionManager.removeCallParameters(oe,{tokenId:e.toString(),liquidityPercentage:se,slippageTolerance:je,deadline:be.toString(),collectOptions:{expectedCurrencyOwed0:ue??o.CurrencyAmount.fromRawAmount(de.currency,0),expectedCurrencyOwed1:pe??o.CurrencyAmount.fromRawAmount(le.currency,0),recipient:r}}),i={to:Ie.address,data:n,value:t},a=await _.getSigner().getChainId();if(w!==a)throw new B.CJ;_.getSigner().estimateGas(i).then((e=>{const n={...i,gasLimit:(0,J.y)(e)};return _.getSigner().sendTransaction(n).then((e=>{(0,l._P)(c.vp.REMOVE_LIQUIDITY_SUBMITTED,{source:c.GM.V3,label:[de.currency.symbol,le.currency.symbol].join("/"),...L}),ze(e.hash),ke(!1),Te(e,{type:H.i.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,Q.H)(de.currency),quoteCurrencyId:(0,Q.H)(le.currency),expectedAmountBaseRaw:de.quotient.toString(),expectedAmountQuoteRaw:le.quotient.toString()})}))})).catch((e=>{ke(!1),console.error(e)}))}),[Ie,de,le,be,r,w,oe,se,_,e,je,ue,pe,L,Te]),$e=(0,$.useCallback)((()=>{Ce(!1),Se&&ye(0),ke(!1),ze("")}),[ye,Se]),Le=(0,i.jsx)(a.cC,{id:"F8SmOj",values:{0:de?.toSignificant(6),1:de?.currency?.symbol,2:le?.toSignificant(6),3:le?.currency?.symbol}});function Ae(){return(0,i.jsxs)(h.Tz,{gap:"sm",style:{padding:"16px"},children:[(0,i.jsxs)(j.m0,{align:"flex-end",children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(a.cC,{id:"I4bzgz",values:{0:de?.currency?.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:de&&K({amount:de})}),(0,i.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:de?.currency})]})]}),(0,i.jsxs)(j.m0,{align:"flex-end",children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(a.cC,{id:"I4bzgz",values:{0:le?.currency?.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:le&&K({amount:le})}),(0,i.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:le?.currency})]})]}),ue?.greaterThan(0)||pe?.greaterThan(0)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(F.Tv.DeprecatedItalic,{fontSize:12,color:t.neutral2,textAlign:"left",padding:"8px 0 0 0",children:(0,i.jsx)(a.cC,{id:"QwTcLK"})}),(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(a.cC,{id:"Vn8uJL",values:{0:ue?.currency?.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ue&&K({amount:ue})}),(0,i.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:ue?.currency})]})]}),(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(a.cC,{id:"Vn8uJL",values:{0:pe?.currency?.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:pe&&K({amount:pe})}),(0,i.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:pe?.currency})]})]})]}):null,(0,i.jsx)(p.DF,{mt:"16px",onClick:_e,children:(0,i.jsx)(a.cC,{id:"t/YqKh"})})]})}const qe=Boolean(de?.currency&&le?.currency&&(de.currency.isNative||le.currency.isNative||G.Fl[de.currency.chainId]?.equals(de.currency.wrapped)||G.Fl[le.currency.chainId]?.equals(le.currency.wrapped)));return(0,i.jsxs)(h.Tz,{children:[(0,i.jsx)(U.Z,{isOpen:ve,onDismiss:$e,attemptingTxn:we,hash:Se??"",reviewContent:()=>(0,i.jsx)(U.p,{title:(0,i.jsx)(a.cC,{id:"cJtosk"}),onDismiss:$e,topContent:Ae}),pendingText:Le}),(0,i.jsxs)(Y.Z,{$maxWidth:"unset",children:[(0,i.jsx)(b.w,{creating:!1,adding:!1,positionID:e.toString(),autoSlippage:te}),(0,i.jsx)(X,{children:n?(0,i.jsxs)(h.Tz,{gap:"lg",children:[(0,i.jsxs)(j.m0,{children:[(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(m.Z,{currency0:de?.currency,currency1:le?.currency,size:20,margin:!0}),(0,i.jsx)(F.Tv.DeprecatedLabel,{ml:"10px",fontSize:"20px",id:"remove-liquidity-tokens",children:`${de?.currency?.symbol}/${le?.currency?.symbol}`})]}),(0,i.jsx)(u.Z,{removed:fe,inRange:!xe})]}),(0,i.jsx)(x.hl,{children:(0,i.jsxs)(h.Tz,{gap:"md",children:[(0,i.jsx)(F.Tv.DeprecatedMain,{fontWeight:485,children:(0,i.jsx)(a.cC,{id:"hehnjM"})}),(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(ne,{children:(0,i.jsx)(a.cC,{id:"AGSFTV",values:{percentForSlider:ge}})}),(0,i.jsxs)(j.BA,{gap:"4px",justify:"flex-end",children:[(0,i.jsx)(ee,{onClick:()=>me(25),width:"20%",children:(0,i.jsx)(a.cC,{id:"Xeb0wM"})}),(0,i.jsx)(ee,{onClick:()=>me(50),width:"20%",children:(0,i.jsx)(a.cC,{id:"wW+u6Y"})}),(0,i.jsx)(ee,{onClick:()=>me(75),width:"20%",children:(0,i.jsx)(a.cC,{id:"N+aNR1"})}),(0,i.jsx)(ee,{onClick:()=>me(100),width:"20%",children:(0,i.jsx)(a.cC,{id:"CK1KXz"})})]})]}),(0,i.jsx)(v.Z,{value:ge,onChange:ye})]})}),(0,i.jsx)(x.hl,{children:(0,i.jsxs)(h.Tz,{gap:"md",children:[(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,id:"remove-pooled-tokena-symbol",children:(0,i.jsx)(a.cC,{id:"I4bzgz",values:{0:de?.currency?.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:de&&K({amount:de})}),(0,i.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:de?.currency})]})]}),(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,id:"remove-pooled-tokenb-symbol",children:(0,i.jsx)(a.cC,{id:"I4bzgz",values:{0:le?.currency?.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:le&&K({amount:le})}),(0,i.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:le?.currency})]})]}),ue?.greaterThan(0)||pe?.greaterThan(0)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.SS,{}),(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(a.cC,{id:"Vn8uJL",values:{0:ue?.currency?.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ue&&K({amount:ue})}),(0,i.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:ue?.currency})]})]}),(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(a.cC,{id:"Vn8uJL",values:{0:pe?.currency?.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:pe&&K({amount:pe})}),(0,i.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:pe?.currency})]})]})]}):null]})}),qe&&(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(F.Tv.DeprecatedMain,{children:(0,i.jsx)(a.cC,{id:"oCijuv",values:{nativeWrappedSymbol:ae}})}),(0,i.jsx)(C.Z,{id:"receive-as-weth",isActive:ie,toggle:()=>re((e=>!e))})]}),(0,i.jsx)("div",{style:{display:"flex"},children:(0,i.jsx)(h.Tz,{gap:"md",style:{flex:"1"},children:(0,i.jsx)(p.gn,{confirmed:!1,disabled:fe||0===ce||!de,onClick:()=>Ce(!0),children:fe?(0,i.jsx)(a.cC,{id:"D87pha"}):he??(0,i.jsx)(a.cC,{id:"t/YqKh"})})})})]}):(0,i.jsx)(g.ZP,{})})]})]})}}}]);
//# sourceMappingURL=2374.d0cd4c23.chunk.js.map