"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3093],{4987:function(e,n,t){t.d(n,{q:function(){return w},w:function(){return C}});var i=t(42893),r=t(12204),o=t(80815),s=t(24364),c=t(46591),a=t(41440),d=t(80657),l=t(47096),u=t(63498),p=t(40740),x=t(4292),f=t(87253),h=t(39839),g=t(47371),m=t(2304);const j=f.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-1642bf23-0"})`
  ${g.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,b=(0,f.default)(a.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-1642bf23-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,v=(0,f.default)(h.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-1642bf23-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,y=(0,f.default)(c.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-1642bf23-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function w({origin:e}){return(0,i.jsx)(j,{children:(0,i.jsxs)(m.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(a.rU,{to:e,children:(0,i.jsx)(y,{})}),(0,i.jsx)(v,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const T=(0,f.default)(h.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-1642bf23-4"})`
  flex: 1;
  margin: auto;
`;function C({adding:e,creating:n,autoSlippage:t,positionID:c,children:a}){const{chainId:h}=(0,o.useWeb3React)(),g=(0,f.useTheme)(),v=(0,u.T)();(0,d.TH)().pathname.includes("add/v2")||c&&c.toString();return(0,i.jsx)(j,{children:(0,i.jsxs)(m.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(b,{to:"/swap",onClick:()=>{e&&(v((0,p.dA)()),v((0,x.dA)()))},flex:a?"1":void 0,children:(0,i.jsx)(y,{stroke:g.neutral2})}),(0,i.jsx)(T,{textAlign:a?"start":"center",children:n?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),a&&(0,i.jsx)(l.xu,{style:{marginRight:".5rem"},children:a}),(0,i.jsx)(s.Z,{autoSlippage:t,chainId:h,hideRoutingSettings:!0})]})})}},72714:function(e,n,t){t.d(n,{Z:function(){return c},e:function(){return s}});var i=t(42893),r=t(87253),o=t(437);const s=r.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
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
`;function c(e){return(0,i.jsx)(s,{...e})}},55494:function(e,n,t){t.d(n,{DC:function(){return c},ER:function(){return a},bb:function(){return d},im:function(){return s},pr:function(){return l}});var i=t(13119),r=t(47096),o=t(87253);const s=o.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,c=(0,o.default)(r.xv).withConfig({displayName:"styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,a=o.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,d=o.default.span.withConfig({displayName:"styled__Dots",componentId:"sc-bfb6c8b8-3"})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,l=(0,o.default)(i.pr).withConfig({displayName:"styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`},90958:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var i,r=t(42893),o=t(12204),s=t(19903),c=t(80815),a=t(66196),d=t(22875),l=t(6053),u=t(44998),p=t.n(u),x=t(13712),f=t(49287),h=t(80657),g=t(47096),m=t(39839),j=t(60198),b=t(42246),v=t(60476),y=t(56823),w=t(4987),T=t(16403),C=t(2304),O=t(20437),_=t(85729),I=t(58025),k=t(97761),N=t(42881),S=t(64614),E=t(21103),$=t(72714),L=t(55494);function z(){const e=new URLSearchParams((0,h.TH)().search),{account:n,chainId:t}=(0,c.useWeb3React)(),[u,z]=(0,x.useState)(!1),[A,W]=(0,x.useState)(i.TOKEN1),[B,P]=(0,x.useState)((()=>t?(0,I.gX)(t):null)),[K,G]=(0,x.useState)(null),[R,Z]=(0,k.Oo)(B??void 0,K??void 0),q=(0,S.uB)();(0,x.useEffect)((()=>{Z&&q(Z)}),[Z,q]);const D=R===k._G.NOT_EXISTS||Boolean(R===k._G.EXISTS&&Z&&p().equal(Z.reserve0.quotient,p().BigInt(0))&&p().equal(Z.reserve1.quotient,p().BigInt(0))),H=(0,N.mM)(n??void 0,Z?.liquidityToken),F=Boolean(H&&p().greaterThan(H.quotient,p().BigInt(0))),M=(0,x.useCallback)((e=>{A===i.TOKEN0?P(e):G(e)}),[A]),X=(0,x.useCallback)((()=>{z(!1)}),[z]),U=(0,r.jsx)(b.hl,{padding:"45px 10px",children:(0,r.jsx)(g.xv,{textAlign:"center",children:n?(0,r.jsx)(o.cC,{id:"pKO91W"}):(0,r.jsx)(o.cC,{id:"4YB3Bt"})})});return(0,l.G)()?(0,r.jsx)(a.fM,{page:s.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)($.Z,{children:[(0,r.jsx)(w.q,{origin:e.get("origin")??"/pools/v2"}),(0,r.jsxs)(v.Tz,{style:{padding:"1rem"},gap:"md",children:[(0,r.jsx)(b.Pj,{children:(0,r.jsx)(v.Tz,{gap:"10px",children:(0,r.jsx)(m.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,r.jsx)(o.cC,{id:"qtO+b3",components:{0:(0,r.jsx)("b",{})}})})})}),(0,r.jsx)(j.KA,{onClick:()=>{z(!0),W(i.TOKEN0)},children:B?(0,r.jsxs)(C.ZP,{children:[(0,r.jsx)(y.Z,{currency:B}),(0,r.jsx)(g.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:B.symbol})]}):(0,r.jsx)(g.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(o.cC,{id:"T0Y2+3"})})}),(0,r.jsx)(v.lg,{children:(0,r.jsx)(f.Z,{size:"16",color:"#888D9B"})}),(0,r.jsx)(j.KA,{onClick:()=>{z(!0),W(i.TOKEN1)},children:K?(0,r.jsxs)(C.ZP,{children:[(0,r.jsx)(y.Z,{currency:K}),(0,r.jsx)(g.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:K.symbol})]}):(0,r.jsx)(g.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(o.cC,{id:"T0Y2+3"})})}),F&&(0,r.jsxs)(v.lg,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[(0,r.jsx)(g.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(o.cC,{id:"lYF0uv"})}),(0,r.jsx)(m.m_,{to:"pools/v2",children:(0,r.jsx)(g.xv,{textAlign:"center",children:(0,r.jsx)(o.cC,{id:"/4YRTg"})})})]}),B&&K?R===k._G.EXISTS?F&&Z?(0,r.jsx)(T.WP,{pair:Z,border:"1px solid #CED0D9"}):(0,r.jsx)(b.hl,{padding:"45px 10px",children:(0,r.jsxs)(v.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(g.xv,{textAlign:"center",children:(0,r.jsx)(o.cC,{id:"Lu0Uod"})}),(0,r.jsx)(m.m_,{to:`/add/${(0,E.H)(B)}/${(0,E.H)(K)}`,children:(0,r.jsx)(g.xv,{textAlign:"center",children:(0,r.jsx)(o.cC,{id:"xJEVlK"})})})]})}):D?(0,r.jsx)(b.hl,{padding:"45px 10px",children:(0,r.jsxs)(v.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(g.xv,{textAlign:"center",children:(0,r.jsx)(o.cC,{id:"+8rnEI"})}),(0,r.jsx)(m.m_,{to:`/add/${(0,E.H)(B)}/${(0,E.H)(K)}`,children:(0,r.jsx)(o.cC,{id:"I1gztT"})})]})}):R===k._G.INVALID?(0,r.jsx)(b.hl,{padding:"45px 10px",children:(0,r.jsx)(v.Tz,{gap:"sm",justify:"center",children:(0,r.jsx)(g.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(o.cC,{id:"ovVGFw"})})})}):R===k._G.LOADING?(0,r.jsx)(b.hl,{padding:"45px 10px",children:(0,r.jsx)(v.Tz,{gap:"sm",justify:"center",children:(0,r.jsxs)(g.xv,{textAlign:"center",children:[(0,r.jsx)(o.cC,{id:"yQE2r9"}),(0,r.jsx)(L.bb,{})]})})}):null:U]}),(0,r.jsx)(O.Z,{isOpen:u,onCurrencySelect:M,onDismiss:X,showCommonBases:!0,selectedCurrency:(A===i.TOKEN0?K:B)??void 0})]}),(0,r.jsx)(_.c,{})]})}):(0,r.jsx)(d.A,{})}!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(i||(i={}))},49111:function(e,n,t){t.d(n,{B:function(){return o}});var i=t(48141),r=t(58025);function o(e){if(e.isNative)return e;const n=(0,i.oG)(e.chainId);return n&&r.Fl[n]?.equals(e)?(0,r.gX)(e.chainId):e}},96315:function(e,n,t){var i=t(13712),r=t(41432),o=t.n(r);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},s.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,a=void 0===o?24:o,d=c(e,["color","size"]);return i.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("polyline",{points:"18 15 12 9 6 15"}))}));a.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},a.displayName="ChevronUp",n.Z=a},49287:function(e,n,t){var i=t(13712),r=t(41432),o=t.n(r);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},s.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,a=void 0===o?24:o,d=c(e,["color","size"]);return i.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));a.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},a.displayName="Plus",n.Z=a}}]);
//# sourceMappingURL=3093.3a30bb0d.chunk.js.map