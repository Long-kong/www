"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2499],{6053:function(e,t,n){n.d(t,{G:function(){return r}});var i=n(80815),o=n(48141);function r(){const{chainId:e}=(0,i.useWeb3React)();return e&&o.Ep.includes(e)}},32499:function(e,t,n){n.r(t),n.d(t,{default:function(){return $e}});var i,o,r,s=n(42893),a=n(12204),d=n(19903),l=n(80815),c=n(66196),p=n(5920),u=n(60198),x=n(60476),f=n(13712),m=n(41440),h=n(87253),g=n(39839);function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},j.apply(this,arguments)}function y(e,t){let{title:n,titleId:s,...a}=e;return f.createElement("svg",j({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},a),n?f.createElement("title",{id:s},n):null,i||(i=f.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=f.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),r||(r=f.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const w=f.forwardRef(y);n.p;var v,b=n(55338),C=n(56564),_=n(13120);!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(v||(v={}));const k=(0,h.default)(w).withConfig({displayName:"Menu__StyledMenuIcon",componentId:"sc-ac391358-0"})`
  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,T=h.default.div.withConfig({displayName:"Menu__StyledMenu",componentId:"sc-ac391358-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,O=h.default.span.withConfig({displayName:"Menu__MenuFlyout",componentId:"sc-ac391358-2"})`
  min-width: 196px;
  max-height: 350px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border: 1px solid ${({theme:e})=>e.surface1};
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 3rem;
  z-index: 100;

  ${({flyoutAlignment:e=v.RIGHT})=>e===v.RIGHT?h.css`
          right: 0rem;
        `:h.css`
          left: 0rem;
        `};
`,I=(0,h.default)(g.dL).withConfig({displayName:"Menu__MenuItem",componentId:"sc-ac391358-3"})`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
`,L=(0,h.default)(m.rU).withConfig({displayName:"Menu__InternalMenuItem",componentId:"sc-ac391358-4"})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({theme:e})=>e.neutral2};
  width: max-content;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`,P=(0,h.default)(I).withConfig({displayName:"Menu__ExternalMenuItem",componentId:"sc-ac391358-5"})`
  width: max-content;
  text-decoration: none;
`;var N=n(22230),E=n(1990);const $=h.default.div.withConfig({displayName:"PositionList__DesktopHeader",componentId:"sc-dcaf7249-0"})`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${E.e.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,z=h.default.div.withConfig({displayName:"PositionList__MobileHeader",componentId:"sc-dcaf7249-1"})`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${E.e.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${E.e.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,M=h.default.div.withConfig({displayName:"PositionList__ToggleWrap",componentId:"sc-dcaf7249-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
`,W=h.default.button.withConfig({displayName:"PositionList__ToggleLabel",componentId:"sc-dcaf7249-3"})`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;function A({positions:e,setUserHideClosedPositions:t,userHideClosedPositions:n}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)($,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(a.cC,{id:"LcLwJZ"}),e&&" ("+e.length+")"]}),(0,s.jsx)(W,{id:"desktop-hide-closed-positions",onClick:()=>{t(!n)},children:n?(0,s.jsx)(a.cC,{id:"GOctE4"}):(0,s.jsx)(a.cC,{id:"l+HNUa"})})]}),(0,s.jsxs)(z,{children:[(0,s.jsx)(a.cC,{id:"LcLwJZ"}),(0,s.jsx)(M,{children:(0,s.jsx)(W,{onClick:()=>{t(!n)},children:n?(0,s.jsx)(a.cC,{id:"GOctE4"}):(0,s.jsx)(a.cC,{id:"l+HNUa"})})})]}),e.map((e=>(0,s.jsx)(N.Z,{...e},e.tokenId.toString())))]})}var R=n(2304),S=n(85729),H=n(48141);function Z(e){if(!e)return!1;return new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(e)}var B=n(15627),U=n(45433),F=n(11744),G=n(61646);const D=new U.vU(F);function J(e){const{chainId:t}=(0,l.useWeb3React)(),n=(0,B.uR)(t),i=(0,f.useMemo)((()=>function(e){return Array.from(new Set(e.reduce(((e,t)=>e.concat(t.token0,t.token1)),[])))}(e).filter((e=>!n[e]))),[e,n]),o=(r=i,s="symbol",(0,G._Y)(r,D,s,void 0,G.DB));var r,s;const a=(0,f.useMemo)((()=>{const e={};for(let t=0;t<i.length;t++){const n=o[t].result;if(!n)continue;e[i[t]]=n}return e}),[i,o]);return(0,f.useMemo)((()=>e.filter((e=>{let t=0;const i=n[e.token0],o=n[e.token1];if(i&&t++,o&&t++,2===t)return!0;let r=0;return Z(i?.symbol??a[e.token0])&&r++,Z(o?.symbol??a[e.token1])&&r++,1===t&&r<2||0===r}))),[a,e,n])}var Y=n(6053),q=n(59991),Q=n(34578),V=n(49855),K=n(47212),X=n(41432),ee=n.n(X);function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},te.apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ie=(0,f.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,s=ne(e,["color","size"]);return f.createElement("svg",te({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),f.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),f.createElement("polyline",{points:"2 17 12 22 22 17"}),f.createElement("polyline",{points:"2 12 12 17 22 12"}))}));ie.propTypes={color:ee().string,size:ee().oneOfType([ee().string,ee().number])},ie.displayName="Layers";var oe=ie;function re(){return re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},re.apply(this,arguments)}function se(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ae=(0,f.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,s=se(e,["color","size"]);return f.createElement("svg",re({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),f.createElement("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),f.createElement("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}))}));ae.propTypes={color:ee().string,size:ee().oneOfType([ee().string,ee().number])},ae.displayName="BookOpen";var de=ae,le=n(83931),ce=n(64614),pe=n(68040);const ue=h.default.section.withConfig({displayName:"CTACards__CTASection",componentId:"sc-d54cea6f-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`,xe=(0,h.default)(g.dL).withConfig({displayName:"CTACards__CTA",componentId:"sc-d54cea6f-1"})`
  padding: 16px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.surface3};

  * {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};

    text-decoration: none;
    * {
      text-decoration: none !important;
    }
  }
`,fe=(0,h.default)(g.Tv.DeprecatedLabel).withConfig({displayName:"CTACards__HeaderText",componentId:"sc-d54cea6f-2"})`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`,me=(0,h.default)(x.Tz).withConfig({displayName:"CTACards__ResponsiveColumn",componentId:"sc-d54cea6f-3"})`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`;function he(){const{chainId:e}=(0,l.useWeb3React)(),{infoLink:t}=(0,pe.o7)(e);return(0,s.jsxs)(ue,{children:[(0,s.jsx)(xe,{href:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",children:(0,s.jsxs)(me,{children:[(0,s.jsxs)(fe,{children:[(0,s.jsx)(a.cC,{id:"4xl+7r"})," \u2197"]}),(0,s.jsx)(g.Tv.DeprecatedBody,{style:{alignItems:"center",display:"flex",fontWeight:485},children:(0,s.jsx)(a.cC,{id:"xTN8Uu"})})]})}),(0,s.jsx)(xe,{"data-testid":"cta-infolink",href:t+"pools",children:(0,s.jsxs)(me,{children:[(0,s.jsxs)(fe,{style:{alignSelf:"flex-start"},children:[(0,s.jsx)(a.cC,{id:"T6amNF"})," \u2197"]}),(0,s.jsx)(g.Tv.DeprecatedBody,{style:{alignSelf:"flex-start",fontWeight:485},children:(0,s.jsx)(a.cC,{id:"sX+nNt"})})]})})]})}var ge=n(55494);const je=(0,h.default)(x.Tz).withConfig({displayName:"Pool__PageWrapper",componentId:"sc-dc74a7b0-0"})`
  padding: 24px 8px 0px;
  max-width: 870px;
  width: 100%;

  @media (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 800px;
    padding-top: 48px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    max-width: 500px;
    // padding-top: 20px;
  }
`,ye=(0,h.default)(R.m0).withConfig({displayName:"Pool__TitleRow",componentId:"sc-dc74a7b0-1"})`
  color: ${({theme:e})=>e.neutral2};
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }
`,we=(0,h.default)(R.DA).withConfig({displayName:"Pool__ButtonRow",componentId:"sc-dc74a7b0-2"})`
  & > *:not(:last-child) {
    margin-left: 8px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`,ve=(0,h.default)((({flyoutAlignment:e=v.RIGHT,ToggleUI:t,menuItems:n,...i})=>{const o=(0,f.useRef)(),r=(0,C.Wt)(_.Lk.POOL_OVERVIEW_OPTIONS),a=(0,C.xk)(_.Lk.POOL_OVERVIEW_OPTIONS);(0,b.t)(o,r?a:void 0);const d=t||k;return(0,s.jsxs)(T,{ref:o,...i,children:[(0,s.jsx)(d,{onClick:a}),r&&(0,s.jsx)(O,{flyoutAlignment:e,children:n.map((({content:e,link:t,external:n},i)=>n?(0,s.jsx)(P,{href:t,children:e},i):(0,s.jsx)(L,{to:t,children:e},i)))})]})})).withConfig({displayName:"Pool__PoolMenu",componentId:"sc-dc74a7b0-3"})`
  margin-left: 0;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }

  a {
    width: 100%;
  }
`,be=h.default.div.withConfig({displayName:"Pool__PoolMenuItem",componentId:"sc-dc74a7b0-4"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 535;
`,Ce=(0,h.default)(u.Ux).withConfig({displayName:"Pool__MoreOptionsButton",componentId:"sc-dc74a7b0-5"})`
  border-radius: 12px;
  flex: 1 1 auto;
  padding: 6px 8px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,_e=(0,h.default)(g.Tv.BodyPrimary).withConfig({displayName:"Pool__MoreOptionsText",componentId:"sc-dc74a7b0-6"})`
  align-items: center;
  display: flex;
`,ke=h.default.div.withConfig({displayName:"Pool__ErrorContainer",componentId:"sc-dc74a7b0-7"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`,Te=h.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,Oe=(0,h.default)(Q.Z).withConfig({displayName:"Pool__NetworkIcon",componentId:"sc-dc74a7b0-8"})`
  ${Te}
`,Ie=(0,h.default)(V.Z).withConfig({displayName:"Pool__InboxIcon",componentId:"sc-dc74a7b0-9"})`
  ${Te}
`,Le=(0,h.default)(u.DF).withConfig({displayName:"Pool__ResponsiveButtonPrimary",componentId:"sc-dc74a7b0-10"})`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  width: fit-content;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,Pe=h.default.main.withConfig({displayName:"Pool__MainContentWrapper",componentId:"sc-dc74a7b0-11"})`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function Ne(){return(0,s.jsxs)(ge.pr,{children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})}function Ee(){const e=(0,h.useTheme)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(je,{children:(0,s.jsx)(x.Tz,{gap:"lg",justify:"center",children:(0,s.jsxs)(x.Tz,{gap:"lg",style:{width:"100%"},children:[(0,s.jsx)(ye,{padding:"0",children:(0,s.jsx)(g.Tv.LargeHeader,{children:(0,s.jsx)(a.cC,{id:"lQfOr9"})})}),(0,s.jsx)(Pe,{children:(0,s.jsx)(ke,{children:(0,s.jsxs)(g.Tv.BodyPrimary,{color:e.neutral3,textAlign:"center",children:[(0,s.jsx)(Oe,{strokeWidth:1.2}),(0,s.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,s.jsx)(a.cC,{id:"nFZR3H"})})]})})})]})})}),(0,s.jsx)(S.c,{})]})}function $e(){const{account:e,chainId:t}=(0,l.useWeb3React)(),n=(0,Y.G)(),i=(0,p.LK)(),o=(0,h.useTheme)(),[r,j]=(0,ce.QP)(),{positions:y,loading:w}=(0,q.W)(e),[b,C]=y?.reduce(((e,t)=>(e[t.liquidity?.isZero()?1:0].push(t),e)),[[],[]])??[[],[]],_=J((0,f.useMemo)((()=>[...b,...r?[]:C]),[C,b,r]));if(!(0,H.EC)(t))return(0,s.jsx)(Ee,{});const k=Boolean(!e),T=[{content:(0,s.jsxs)(be,{children:[(0,s.jsx)(a.cC,{id:"y5rS9U"}),(0,s.jsx)(K.Z,{size:16})]}),link:"/migrate/v2",external:!1},{content:(0,s.jsxs)(be,{children:[(0,s.jsx)(a.cC,{id:"F+Ocff"}),(0,s.jsx)(oe,{size:16})]}),link:"/pools/v2",external:!1},{content:(0,s.jsxs)(be,{children:[(0,s.jsx)(a.cC,{id:"rjZpLn"}),(0,s.jsx)(de,{size:16})]}),link:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",external:!0}];return(0,s.jsxs)(c.fM,{page:d.yJ.POOL_PAGE,shouldLogImpression:!0,children:[(0,s.jsx)(je,{children:(0,s.jsx)(x.Tz,{gap:"lg",justify:"center",children:(0,s.jsxs)(x.Tz,{gap:"lg",style:{width:"100%"},children:[(0,s.jsxs)(ye,{padding:"0",children:[(0,s.jsx)(g.Tv.LargeHeader,{children:(0,s.jsx)(a.cC,{id:"lQfOr9"})}),(0,s.jsxs)(we,{children:[n&&(0,s.jsx)(ve,{menuItems:T,flyoutAlignment:v.LEFT,ToggleUI:e=>(0,s.jsx)(Ce,{...e,children:(0,s.jsxs)(_e,{children:[(0,s.jsx)(a.cC,{id:"2FYpfJ"}),(0,s.jsx)(le.Z,{size:15})]})})}),(0,s.jsxs)(Le,{"data-cy":"join-pool-button",id:"join-pool-button",as:m.rU,to:"/add/ETH",children:["+ ",(0,s.jsx)(a.cC,{id:"1k0YWs"})]})]})]}),(0,s.jsx)(Pe,{children:w?(0,s.jsx)(Ne,{}):_&&C&&_.length>0?(0,s.jsx)(A,{positions:_,setUserHideClosedPositions:j,userHideClosedPositions:r}):(0,s.jsxs)(ke,{children:[(0,s.jsxs)(g.Tv.BodyPrimary,{color:o.neutral3,textAlign:"center",children:[(0,s.jsx)(Ie,{strokeWidth:1,style:{marginTop:"2em"}}),(0,s.jsx)("div",{children:(0,s.jsx)(a.cC,{id:"YgSnQ0"})})]}),!k&&C.length>0&&(0,s.jsx)(u.oD,{style:{marginTop:".5rem"},onClick:()=>j(!r),children:(0,s.jsx)(a.cC,{id:"GOctE4"})}),k&&(0,s.jsx)(c.M8,{events:[d.TM.onClick],name:d.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:d.xo.CONNECT_WALLET_BUTTON,children:(0,s.jsx)(u.DF,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:i,children:(0,s.jsx)(a.cC,{id:"GdzYJ9"})})})]})}),(0,s.jsx)(g.Pw,{children:(0,s.jsx)(he,{})})]})})}),(0,s.jsx)(S.c,{})]})}},49855:function(e,t,n){var i=n(13712),o=n(41432),r=n.n(o);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=(0,i.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,d=void 0===r?24:r,l=a(e,["color","size"]);return i.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),i.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))}));d.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},d.displayName="Inbox",t.Z=d}}]);
//# sourceMappingURL=2499.42d6474e.chunk.js.map