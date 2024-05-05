"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7209],{64850:function(e,t,n){n.d(t,{m:function(){return o}});var i=n(42893);const o=e=>(0,i.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M13 4.99092C13 4.09592 14.094 3.66096 14.709 4.31196L20.637 10.582C21.121 11.094 21.121 11.894 20.637 12.406L14.709 18.676C14.094 19.326 13 18.891 13 17.997V14.4919C5.437 14.4919 4.93602 16.962 4.96802 19.529C4.97402 20.019 4.32501 20.1811 4.08301 19.7561C3.46701 18.6751 3 17.1999 3 15.4909C3 8.99592 10 8.49702 13 8.49702V4.99092Z",fill:"#9B9B9B"})})},13352:function(e,t,n){const i=n(87253).default.button.withConfig({displayName:"FilterOption",componentId:"sc-f01a2a07-0"})`
  height: 100%;
  color: ${({theme:e,active:t})=>e.neutral1};
  background-color: ${({theme:e,active:t})=>e.surface1};
  margin: 0;
  padding: 6px 6px 6px 14px;
  border-radius: 12px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 535;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  border: 1px solid ${({theme:e})=>e.surface3};
  outline: ${({theme:e,active:t,highlight:n})=>t&&n?`1px solid ${e.accent1}`:"none"};

  :hover {
    cursor: pointer;
    background-color: ${({theme:e,active:t})=>t?e.accent2:e.surface2};
    opacity: ${({theme:e,active:t})=>t?e.opacity.hover:1};
  }
  :focus {
    background-color: ${({theme:e,active:t})=>t?e.surface2:e.surface3};
  }
`;t.Z=i},1670:function(e,t,n){n.d(t,{W9:function(){return y},ZP:function(){return _},rD:function(){return j}});var i=n(42893),o=n(12204),r=n(11569),a=n(17487),s=n(55338),d=n(30719),c=n(13712),l=n(96315),h=n(83931),p=n(29304),u=n(56564),m=n(13120),x=n(87253),f=n(35458),g=n(86403),C=n(13352);const j={[a.XH.HOUR]:"1H",[a.XH.DAY]:"1D",[a.XH.WEEK]:"1W",[a.XH.MONTH]:"1M",[a.XH.YEAR]:"1Y"},y=[a.XH.HOUR,a.XH.DAY,a.XH.WEEK,a.XH.MONTH,a.XH.YEAR],w=x.default.div.withConfig({displayName:"TimeSelector__InternalMenuItem",componentId:"sc-5b10af64-0"})`
  flex: 1;
  padding: 8px;
  color: ${({theme:e})=>e.neutral1};
  border-radius: 8px;

  :hover {
    cursor: pointer;
    text-decoration: none;
  }
`,k=(0,x.default)(w).withConfig({displayName:"TimeSelector__InternalLinkMenuItem",componentId:"sc-5b10af64-1"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 8px;
  justify-content: space-between;
  text-decoration: none;
  cursor: pointer;

  :hover {
    background-color: ${({theme:e})=>e.surface3};
    text-decoration: none;
  }
`,v=x.default.span.withConfig({displayName:"TimeSelector__MenuTimeFlyout",componentId:"sc-5b10af64-2"})`
  min-width: ${({isInfoExplorePageEnabled:e})=>e?"150px":"240px"};
  max-height: 300px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
  border-radius: 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 48px;
  z-index: 100;
  left: 0px;

  ${({isInfoExplorePageEnabled:e})=>!e&&x.css`
      @media only screen and (max-width: ${f.T1}) {
        left: unset;
        right: 0px;
      }
    `}
`,b=x.default.div.withConfig({displayName:"TimeSelector__StyledMenu",componentId:"sc-5b10af64-3"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;

  ${({isInfoExplorePageEnabled:e})=>!e&&x.css`
      @media only screen and (max-width: ${f.QD}) {
        width: 72px;
      }
    `}
`,T=x.default.div.withConfig({displayName:"TimeSelector__StyledMenuContent",componentId:"sc-5b10af64-4"})`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  border: none;
  width: 100%;
  vertical-align: middle;
  ${({isInfoExplorePageEnabled:e})=>e&&"white-space: nowrap;"}
`,I=x.default.span.withConfig({displayName:"TimeSelector__Chevron",componentId:"sc-5b10af64-5"})`
  padding-top: 1px;
  color: ${({open:e,theme:t})=>e?t.neutral1:t.neutral2};
`;function _(){const e=(0,x.useTheme)(),t=(0,c.useRef)(null),n=(0,u.Wt)(m.Lk.TIME_SELECTOR),a=(0,u.xk)(m.Lk.TIME_SELECTOR);(0,s.t)(t,n?a:void 0);const[f,w]=(0,d.KO)(g.X3),_=(0,r.C)();return(0,i.jsxs)(b,{ref:t,isInfoExplorePageEnabled:_,children:[(0,i.jsx)(C.Z,{onClick:a,"aria-label":"timeSelector",active:n,"data-testid":"time-selector",children:(0,i.jsxs)(T,{isInfoExplorePageEnabled:_,children:[_?(0,i.jsxs)(i.Fragment,{children:[j[f]," ",(0,i.jsx)(o.cC,{id:"94M5XH"})]}):j[f],(0,i.jsx)(I,{open:n,children:n?(0,i.jsx)(l.Z,{width:20,height:15,viewBox:"0 0 24 20"}):(0,i.jsx)(h.Z,{width:20,height:15,viewBox:"0 0 24 20"})})]})}),n&&(0,i.jsx)(v,{isInfoExplorePageEnabled:_,children:y.map((t=>(0,i.jsxs)(k,{"data-testid":j[t],onClick:()=>{w(t),a()},children:[_?(0,i.jsxs)("div",{children:[j[t]," ",(0,i.jsx)(o.cC,{id:"94M5XH"})]}):(0,i.jsx)("div",{children:j[t]}),t===f&&(0,i.jsx)(p.Z,{color:e.accent1,size:16})]},j[t])))})]})}},37209:function(e,t,n){n.r(t),n.d(t,{default:function(){return un},pageTimePeriodAtom:function(){return pn}});var i=n(42893),o=n(12204),r=n(19903),a=n(80815),s=n(66196),d=n(90315),c=n(81223),l=n(87253),h=n(39839),p=n(83777);const u=l.default.div.withConfig({displayName:"AddressSection__ContractAddressSection",componentId:"sc-65f6d5a3-0"})`
  display: flex;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral2};
  font-size: 0.9em;
  gap: 4px;
  padding: 4px 0px;
`,m=l.default.button.withConfig({displayName:"AddressSection__ContractAddress",componentId:"sc-65f6d5a3-1"})`
  display: flex;
  color: ${({theme:e})=>e.neutral1};
  gap: 10px;
  align-items: center;
  background: transparent;
  border: none;
  min-height: 38px;
  padding: 0px;
`;function x({address:e}){return(0,i.jsxs)(u,{children:[(0,i.jsx)(h.Tv.SubHeaderSmall,{children:(0,i.jsx)(o.cC,{id:"TPQ9LW"})}),(0,i.jsx)(m,{children:(0,i.jsx)(h.Qv,{address:e,truncatedAddress:(0,p.Xn)(e,2,3)})})]})}var f=n(68040),g=n(48141),C=n(45492),j=n(95202),y=n(79847),w=n(13712),k=n(57482);const v=l.default.div.withConfig({displayName:"BalanceSummary__BalancesCard",componentId:"sc-ff891b4f-0"})`
  border-radius: 16px;
  color: ${({theme:e})=>e.neutral1};
  display: none;
  height: fit-content;
  padding: 16px;
  width: 100%;

  // 768 hardcoded to match NFT-redesign navbar breakpoints
  // src/nft/css/sprinkles.css.ts
  // change to match theme breakpoints when this navbar is updated
  @media screen and (min-width: 768px) {
    display: flex;
  }
`,b=l.default.div.withConfig({displayName:"BalanceSummary__BalanceSection",componentId:"sc-ff891b4f-1"})`
  height: fit-content;
  width: 100%;
`,T=l.default.div.withConfig({displayName:"BalanceSummary__BalanceRow",componentId:"sc-ff891b4f-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`,I=l.default.div.withConfig({displayName:"BalanceSummary__BalanceItem",componentId:"sc-ff891b4f-3"})`
  display: flex;
  align-items: center;
`,_=l.default.div.withConfig({displayName:"BalanceSummary__BalanceContainer",componentId:"sc-ff891b4f-4"})`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  flex: 1;
`,N=l.default.div.withConfig({displayName:"BalanceSummary__BalanceAmountsContainer",componentId:"sc-ff891b4f-5"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,S=l.default.div.withConfig({displayName:"BalanceSummary__StyledNetworkLabel",componentId:"sc-ff891b4f-6"})`
  color: ${({color:e})=>e};
  font-size: 12px;
  line-height: 16px;
`;function $({token:e}){const{account:t,chainId:n}=(0,a.useWeb3React)(),r=(0,l.useTheme)(),{label:s,color:c}=(0,f.bt)((0,g.oG)(n)??C.H.MAINNET),p=(0,y.ZP)(t,e),{formatCurrencyAmount:u}=(0,k.Gb)(),m=u({amount:p,type:k.sw.TokenNonTx}),x=u({amount:(0,j.sq)(p),type:k.sw.FiatTokenStats}),$=(0,w.useMemo)((()=>[e]),[e]);return t&&p?(0,i.jsx)(v,{children:(0,i.jsxs)(b,{children:[(0,i.jsx)(h.Tv.SubHeaderSmall,{color:r.neutral1,children:(0,i.jsx)(o.cC,{id:"n3wXA/",values:{label:s}})}),(0,i.jsxs)(T,{children:[(0,i.jsx)(d.V,{currencies:$,chainId:e.chainId,size:"2rem"}),(0,i.jsxs)(_,{children:[(0,i.jsxs)(N,{children:[(0,i.jsx)(I,{children:(0,i.jsxs)(h.Tv.SubHeader,{children:[m," ",e.symbol]})}),(0,i.jsx)(I,{children:(0,i.jsx)(h.Tv.BodyPrimary,{children:x})})]}),(0,i.jsx)(S,{color:c,children:s})]})]})]})}):null}var P=n(63148),A=n(4271),E=n(35225),H=n(17487),L=n(67621),B=n(56584),M=n(54236),R=n(45921),O=n(64521),D=n(47244),Z=n(14045),F=n(11275),z=n(55831),W=n.n(z),X=n(68830);const V={duration:W()("0.8s"),easing:F.p4T};function U({data:e,getX:t,getY:n,marginTop:o,curve:r,color:a,strokeWidth:s}){const d=(0,w.useRef)(null),[c,h]=(0,w.useState)(0),[p,u]=(0,w.useState)(!1),[m,x]=(0,w.useState)(!1),f=(0,X.useSpring)({frame:p?0:1,config:V,onRest:()=>{u(!1),x(!0)}});(0,w.useEffect)((()=>{if(d.current){const e=d.current.getTotalLength();e!==c&&h(e),e>0&&!p&&!m&&u(!0)}}));const g=(0,l.useTheme)(),C=a??g.accent1;return(0,i.jsx)(D.Z,{top:o,children:(0,i.jsx)(Z.Z,{curve:r,x:t,y:n,children:({path:t})=>{const n=t(e)||"";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(X.animated.path,{d:n,ref:d,strokeWidth:s,strokeOpacity:m?1:0,fill:"none",stroke:C}),p&&0!==c&&(0,i.jsx)(X.animated.path,{d:n,strokeWidth:s,fill:"none",stroke:C,strokeDashoffset:f.frame.to((e=>e*c)),strokeDasharray:c})]})}})})}var Q=w.memo(U);const K={duration:3e3,easing:F.cCj};function Y({data:e,getX:t,getY:n,marginTop:o,curve:r,color:a,strokeWidth:s,dashed:d}){const c=(0,w.useRef)(null),[h,p]=(0,w.useState)(0),[u,m]=(0,w.useState)(!1),[x,f]=(0,w.useState)(!1),g=(0,X.useSpring)({frame:u?0:1,config:K,onRest:()=>{m(!1),f(!0)}});(0,w.useEffect)((()=>{if(c.current){const e=c.current.getTotalLength();e!==h&&p(e),e>0&&!u&&!x&&m(!0)}}));const C=(0,l.useTheme)(),j=a??C.accent1;return(0,i.jsx)(D.Z,{top:o,children:(0,i.jsx)(Z.Z,{curve:r,x:t,y:n,children:({path:t})=>{const n=t(e)||"";return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(X.animated.path,{d:n,ref:c,strokeWidth:s,strokeOpacity:x?1:g.frame.to((e=>1-e)),fill:"none",stroke:j,strokeDasharray:d?"4,4":void 0})})}})})}var G,J=w.memo(Y),q=n(91443);!function(e){e[e.NO_DATA_AVAILABLE=0]="NO_DATA_AVAILABLE",e[e.NO_RECENT_VOLUME=1]="NO_RECENT_VOLUME",e[e.INVALID_CHART=2]="INVALID_CHART"}(G||(G={}));const ee={hour:"numeric",minute:"numeric",hour12:!0},te={month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0};var ne;!function(e){e.TICK="tick",e.CROSSHAIR="crosshair"}(ne||(ne={}));const ie={[H.XH.HOUR]:{[ne.TICK]:ee,[ne.CROSSHAIR]:te},[H.XH.DAY]:{[ne.TICK]:ee,[ne.CROSSHAIR]:te},[H.XH.WEEK]:{[ne.TICK]:{weekday:"long"},[ne.CROSSHAIR]:te},[H.XH.MONTH]:{[ne.TICK]:{month:"long",day:"numeric"},[ne.CROSSHAIR]:te},[H.XH.YEAR]:{[ne.TICK]:{month:"long"},[ne.CROSSHAIR]:{month:"short",year:"numeric",day:"numeric"}}};function oe(e,t,n){const i=ie[e][n],o=new Intl.DateTimeFormat(t,i);return e=>{const t=1e3*e.valueOf();return o.format(t)}}var re=n(65647),ae=n(44455),se=n(7178),de=n(47371),ce=n(86682);const le={top:100,bottom:48,crosshair:72},he=l.default.div.withConfig({displayName:"PriceChart__ChartHeaderWrapper",componentId:"sc-dab2ea9a-0"})`
  position: absolute;
  ${de.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
  ${({theme:e,stale:t})=>t&&`color: ${e.neutral2}`};
`,pe=l.default.div.withConfig({displayName:"PriceChart__PriceContainer",componentId:"sc-dab2ea9a-1"})`
  display: flex;
  gap: 6px;
  font-size: 24px;
  line-height: 44px;
`,ue=l.default.div.withConfig({displayName:"PriceChart__DeltaContainer",componentId:"sc-dab2ea9a-2"})`
  height: 16px;
  display: flex;
  align-items: center;
  margin-top: 4px;
  color: ${({theme:e})=>e.neutral2};
`;function me({startingPrice:e,endingPrice:t,noColor:n}){const o=(0,ce.YD)(e.value,t.value),{formatDelta:r}=(0,k.Gb)();return(0,i.jsxs)(ue,{children:[r(o),(0,i.jsx)(ce.Kx,{delta:o,noColor:n})]})}function xe({crosshairPrice:e,chart:t}){const{formatFiatPrice:n}=(0,k.Gb)(),{startingPrice:r,endingPrice:a,lastValidPrice:s}=t,d=s!==a,c=e??(d?s:a),l=d&&!e;return(0,i.jsxs)(he,{"data-cy":"chart-header",stale:l,children:[(0,i.jsxs)(pe,{children:[(0,i.jsx)(h.Tv.HeadlineLarge,{color:"inherit",children:n({price:c.value})}),l&&(0,i.jsx)(re.ud,{text:(0,i.jsx)(o.cC,{id:"y9L4V6"}),children:(0,i.jsx)(se.Z,{size:16,"data-testid":"chart-stale-icon"})})]}),(0,i.jsx)(me,{startingPrice:r,endingPrice:c,noColor:d})]})}function fe({chart:e,timePeriod:t}){const n=(0,ae.eQ)(),{prices:o,blanks:r,timeScale:a,priceScale:s,dimensions:d}=e,{ticks:c,tickTimestampFormatter:h,crosshairTimestampFormatter:p}=(0,w.useMemo)((()=>{const i=Math.floor(d.width/100);return{ticks:(0,q.fj)(e.startingPrice.timestamp,e.endingPrice.timestamp,t,i),tickTimestampFormatter:oe(t,n,ne.TICK),crosshairTimestampFormatter:oe(t,n,ne.CROSSHAIR)}}),[d.width,e.startingPrice.timestamp,e.endingPrice.timestamp,t,n]),u=(0,l.useTheme)(),[m,x]=(0,w.useState)(),f=(0,w.useCallback)((()=>x(void 0)),[x]),g=(0,w.useCallback)((e=>{const{x:t}=(0,M.Z)(e)||{x:0},n=(0,q.HM)(t,o,a);if(n){const e=a(n.timestamp),t=s(n.value);x({x:e,y:t,price:n})}}),[s,a,o]);(0,w.useEffect)((()=>f()),[f,t]);const C=.85*d.width,j=!!m&&m.x>C,y=t===H.XH.HOUR?1:.9,k=(0,w.useCallback)((e=>a(e.timestamp)),[a]),v=(0,w.useCallback)((e=>s(e.value)),[s]),b=(0,w.useMemo)((()=>F.YY7.tension(y)),[y]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(xe,{chart:e,crosshairPrice:m?.price}),(0,i.jsxs)("svg",{"data-cy":"price-chart",width:d.width,height:d.height,style:{minWidth:"100%"},children:[(0,i.jsx)(Q,{data:o,getX:k,getY:v,marginTop:d.marginTop,curve:b,strokeWidth:2}),r.map(((e,t)=>(0,i.jsx)(J,{data:e,getX:k,getY:v,marginTop:d.marginTop,curve:b,strokeWidth:2,color:u.neutral3,dashed:!0},t))),void 0!==m?(0,i.jsxs)("g",{children:[(0,i.jsx)(B.Z,{top:d.height-1,scale:a,stroke:u.surface3,hideTicks:!0,tickValues:c,tickFormat:h,tickLabelProps:()=>({fill:u.neutral2,fontSize:12,textAnchor:"middle",transform:"translate(0 -29)"})}),(0,i.jsx)("text",{x:m.x+(j?-4:4),y:le.crosshair+10,textAnchor:j?"end":"start",fontSize:12,fill:u.neutral2,children:p(m.price.timestamp)}),(0,i.jsx)(O.Z,{from:{x:m.x,y:le.crosshair},to:{x:m.x,y:d.height},stroke:u.surface3,strokeWidth:1,pointerEvents:"none",strokeDasharray:"4,4"}),(0,i.jsx)(R.Z,{left:m.x,top:m.y+d.marginTop,size:50,fill:u.accent1,stroke:u.surface3,strokeWidth:.5})]}):(0,i.jsx)(B.Z,{hideAxisLine:!0,scale:a,stroke:u.surface3,top:d.height-1,hideTicks:!0}),!d.width&&(0,i.jsx)("line",{x1:0,y1:d.height-1,x2:"100%",y2:d.height-1,fill:"transparent",shapeRendering:"crispEdges",stroke:u.surface3,strokeWidth:1}),(0,i.jsx)("rect",{x:0,y:0,width:d.width,height:d.height,fill:"transparent",onTouchStart:g,onTouchMove:g,onMouseMove:g,onMouseLeave:f})]})]})}const ge={[G.NO_DATA_AVAILABLE]:(0,i.jsx)(o.cC,{id:"g0qrI3"}),[G.NO_RECENT_VOLUME]:(0,i.jsx)(o.cC,{id:"7OwMjb"}),[G.INVALID_CHART]:(0,i.jsx)(o.cC,{id:"0WBcSC"})};function Ce({chart:e}){const t=(0,l.useTheme)(),n=e.dimensions.height/2+45;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(he,{"data-cy":"chart-header",children:[(0,i.jsx)(h.Tv.HeadlineLarge,{fontSize:24,color:"neutral3",children:"Price unavailable"}),(0,i.jsx)(h.Tv.BodySmall,{color:"neutral3",children:ge[e.error]})]}),(0,i.jsx)("svg",{"data-cy":"missing-chart",width:e.dimensions.width,height:e.dimensions.height,style:{minWidth:"100%"},children:(0,i.jsx)("path",{d:`M 0 ${n} Q 104 ${n-70}, 208 ${n} T 416 ${n}\n          M 416 ${n} Q 520 ${n-70}, 624 ${n} T 832 ${n}`,stroke:t.surface3,fill:"transparent",strokeWidth:"2"})})]})}function je({width:e,height:t,prices:n,timePeriod:o}){const r=(0,w.useMemo)((()=>function({dimensions:e,prices:t}){if(!t)return{error:G.NO_DATA_AVAILABLE,dimensions:e};const n=e.height-e.marginTop-e.marginBottom;if(n<0)return{error:G.INVALID_CHART,dimensions:e};const{prices:i,blanks:o,lastValidPrice:r}=(0,q.Bz)(t);if(i.length<2||!r)return{error:G.NO_RECENT_VOLUME,dimensions:e};const a=t[0],s=t[t.length-1],{min:d,max:c}=(0,q.VC)(t);return{prices:i,startingPrice:a,endingPrice:s,lastValidPrice:r,blanks:o,timeScale:(0,F.BYU)().domain([a.timestamp,s.timestamp]).range([0,e.width]),priceScale:(0,F.BYU)().domain([d,c]).range([n,0]),dimensions:e,error:void 0}}({dimensions:{width:e,height:t,marginBottom:le.bottom,marginTop:le.top},prices:n})),[e,t,n]);return void 0!==r.error?(0,i.jsx)(Ce,{chart:r}):(0,i.jsx)(fe,{chart:r,timePeriod:o})}var ye=n(35458),we=n(1670);const ke=l.default.div.withConfig({displayName:"TimeSelector__TimeOptionsWrapper",componentId:"sc-305d298a-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,ve=l.default.div.withConfig({displayName:"TimeSelector__TimeOptionsContainer",componentId:"sc-305d298a-1"})`
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
  gap: 4px;
  border-radius: 16px;
  height: 40px;
  padding: 4px;
  width: fit-content;

  @media only screen and (max-width: ${ye.Uw}) {
    width: 100%;
    justify-content: space-between;
    border: none;
  }
`,be=l.default.button.withConfig({displayName:"TimeSelector__TimeButton",componentId:"sc-305d298a-2"})`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.surface3:"transparent"};
  font-weight: 535;
  font-size: 16px;
  padding: 6px 12px;
  border-radius: 12px;
  line-height: 20px;
  border: none;
  cursor: pointer;
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  :hover {
    ${({active:e,theme:t})=>!e&&`opacity: ${t.opacity.hover};`}
  }
`;function Te({currentTimePeriod:e,onTimeChange:t}){const[n,o]=(0,w.useState)(e);return(0,i.jsx)(ke,{children:(0,i.jsx)(ve,{children:we.W9.map((e=>(0,i.jsx)(be,{active:n===e,onClick:()=>{(0,w.startTransition)((()=>t(e))),o(e)},children:we.rD[e]},we.rD[e])))})})}function Ie({tokenPriceQuery:e,onChangeTimePeriod:t}){return e?(0,i.jsx)(w.Suspense,{fallback:(0,i.jsx)(E.sT,{}),children:(0,i.jsx)(E.BO,{children:(0,i.jsx)(_e,{tokenPriceQuery:e,onChangeTimePeriod:t})})}):(0,i.jsx)(E.sT,{})}function _e({tokenPriceQuery:e,onChangeTimePeriod:t}){const n=(o=e,(0,w.useMemo)((()=>{const e=o.token?.market,t=e?.priceHistory?.filter(H.yL),n=e?.price?.value;if(Array.isArray(t)&&void 0!==n){const e=Date.now()/1e3;return[...t,{timestamp:e,value:n}]}return t}),[o]));var o;const r=(0,L.Dv)(pn);return(0,i.jsxs)(E.BO,{"data-testid":"chart-container",children:[(0,i.jsx)(A.Z,{children:({width:e})=>(0,i.jsx)(je,{prices:n,width:e,height:392,timePeriod:r})}),(0,i.jsx)(Te,{currentTimePeriod:r,onTimeChange:e=>{(0,w.startTransition)((()=>t(e)))}})]})}var Ne=n(58025);const Se=l.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__Wrapper",componentId:"sc-619f2185-0"})`
  align-content: center;
  align-items: center;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-bottom: none;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 20px 20px 0px 0px;
  bottom: 52px;
  color: ${({theme:e})=>e.neutral2};
  display: flex;
  flex-direction: row;
  font-weight: 535;
  font-size: 14px;
  height: fit-content;
  justify-content: space-between;
  left: 0;
  line-height: 20px;
  padding: 12px 16px;
  position: fixed;
  width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    bottom: 0px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    display: none;
  }
`,$e=l.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__BalanceValue",componentId:"sc-619f2185-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 20px;
  line-height: 28px;
  display: flex;
  gap: 8px;
`,Pe=l.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__Balance",componentId:"sc-619f2185-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`,Ae=l.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__BalanceInfo",componentId:"sc-619f2185-3"})`
  display: flex;
  flex: 10 1 auto;
  flex-direction: column;
  justify-content: flex-start;
`,Ee=l.default.span.withConfig({displayName:"MobileBalanceSummaryFooter__FiatValue",componentId:"sc-619f2185-4"})`
  font-size: 12px;
  line-height: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    line-height: 24px;
  }
`,He=(0,l.default)(h.m_).withConfig({displayName:"MobileBalanceSummaryFooter__SwapButton",componentId:"sc-619f2185-5"})`
  background-color: ${({theme:e})=>e.accent1};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  display: flex;
  flex: 1 1 auto;
  padding: 12px 16px;
  font-size: 1em;
  font-weight: 535;
  height: 44px;
  justify-content: center;
  margin: auto;
  max-width: 100vw;
`;function Le({token:e}){const{account:t}=(0,a.useWeb3React)(),n=(0,y.ZP)(t,e),{formatCurrencyAmount:r}=(0,k.Gb)(),s=r({amount:n,type:k.sw.TokenNonTx}),d=r({amount:(0,j.sq)(n),type:k.sw.FiatTokenStats}),c=H.yC[e.chainId].toLowerCase();return(0,i.jsxs)(Se,{children:[Boolean(t&&n)&&(0,i.jsxs)(Ae,{children:[(0,i.jsx)(o.cC,{id:"xn9ewN",values:{0:e.symbol}}),(0,i.jsxs)(Pe,{children:[(0,i.jsxs)($e,{children:[s," ",e.symbol]}),(0,i.jsx)(Ee,{children:d})]})]}),(0,i.jsx)(He,{to:`/swap?chainName=${c}&outputCurrency=${e.isNative?Ne.dt:e.address}`,children:(0,i.jsx)(o.cC,{id:"vH2C/2"})})]})}var Be=n(64850),Me=n(28156),Re=n(55338),Oe=n(13678),De=n(77300),Ze=n(56564),Fe=n(13120),ze=n(62878),We=n(18030),Xe=n(437);const Ve=560,Ue=480,Qe=l.default.div.withConfig({displayName:"ShareButton__ShareButtonDisplay",componentId:"sc-32f6e930-0"})`
  display: flex;
  position: relative;
`,Ke=(0,l.default)(Be.m).withConfig({displayName:"ShareButton__Share",componentId:"sc-32f6e930-1"})`
  height: 24px;
  width: 24px;
  ${h.iV}
  ${({open:e,theme:t})=>e&&`opacity: ${t.opacity.click} !important`};
`,Ye=l.default.div.withConfig({displayName:"ShareButton__ShareActions",componentId:"sc-32f6e930-2"})`
  position: absolute;
  z-index: ${Xe.k.dropdown};
  width: 240px;
  top: 36px;
  right: 0px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 8px;
  background-color: ${({theme:e})=>e.surface1};
  border: 0.5px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border-radius: 12px;
`,Ge=l.default.div.withConfig({displayName:"ShareButton__ShareAction",componentId:"sc-32f6e930-3"})`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 485;
  gap: 12px;
  height: 40px;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  :hover {
    background-color: ${({theme:e})=>(0,We.j)(10,e.darkMode?ze.O9.gray200:ze.O9.gray300)};
  }
`;function Je({currency:e}){const t=(0,l.useTheme)(),n=(0,w.useRef)(null),r=(0,Ze.Wt)(Fe.Lk.SHARE),a=(0,Ze.xk)(Fe.Lk.SHARE);(0,Re.t)(n,r?a:void 0);const s=(window.screen.width-Ve)/2,d=(window.screen.height-Ue)/2,c=e.isNative?Ne.dt:e.wrapped.address;(0,Me.Z)(r);const p=(0,w.useRef)(null);return(0,i.jsxs)(Qe,{ref:n,children:[(0,i.jsx)(Ke,{onClick:a,"aria-label":"ShareOptions",open:r}),r&&(0,i.jsxs)(Ye,{children:[(0,i.jsx)(Ge,{onClick:()=>p.current?.forceCopy(),children:(0,i.jsx)(h.WD,{InitialIcon:Oe.Z,color:t.neutral1,iconPosition:"left",gap:12,toCopy:window.location.href,ref:p,children:(0,i.jsx)(o.cC,{id:"ENCIQz"})})}),(0,i.jsxs)(Ge,{onClick:()=>{a(),window.open(`https://twitter.com/intent/tweet?text=Check%20out%20${e.name}%20(${e.symbol})%20https://app.uniswap.org/%23/tokens/${(0,H.Ld)(e.chainId).toLowerCase()}/${c}%20via%20@uniswap`,"newwindow",`left=${s}, top=${d}, width=${Ve}, height=${Ue}`)},children:[(0,i.jsx)(De.Z,{color:t.neutral1,size:20,strokeWidth:1.5}),(0,i.jsx)(o.cC,{id:"uvt91Z"})]})]})]})}var qe=n(94556),et=n(94220),tt=n(77669),nt=n(34578),it=n(84071),ot=n(47096);const rt=l.default.div.withConfig({displayName:"TokenSafetyMessage__Label",componentId:"sc-e122e2d8-0"})`
  width: 100%;
  padding: 12px 20px 16px;
  background-color: ${({backgroundColor:e})=>e};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({color:e})=>e};
`,at=l.default.div.withConfig({displayName:"TokenSafetyMessage__TitleRow",componentId:"sc-e122e2d8-1"})`
  align-items: center;
  font-weight: 535;
  display: inline-flex;
`,st=(0,l.default)(ot.xv).withConfig({displayName:"TokenSafetyMessage__Title",componentId:"sc-e122e2d8-2"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin-left: 7px;
`,dt=l.default.div.withConfig({displayName:"TokenSafetyMessage__DetailsRow",componentId:"sc-e122e2d8-3"})`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,ct=(0,l.default)(h.dL).withConfig({displayName:"TokenSafetyMessage__StyledLink",componentId:"sc-e122e2d8-4"})`
  color: ${({theme:e})=>e.accent1};

  font-weight: 535;
`;function lt({warning:e,tokenAddress:t}){const n=(0,tt.g)(e.level),r=(0,tt.A)(e.level),{heading:a,description:s}=(0,et.N6)(e);return(0,i.jsxs)(rt,{"data-cy":"token-safety-message",color:r,backgroundColor:n,children:[(0,et._x)(e)&&(0,i.jsxs)(at,{children:[e.canProceed?(0,i.jsx)(nt.Z,{size:"16px"}):(0,i.jsx)(it.Z,{size:"16px"}),(0,i.jsx)(st,{marginLeft:"7px",children:e.message})]}),(0,i.jsxs)(dt,{children:[a,Boolean(a)&&" ",s,Boolean(s)&&" ",t&&(0,i.jsx)(ct,{href:et.W3,children:(0,i.jsx)(o.cC,{id:"zwWKhA"})})]})]})}var ht=n(8356),pt=n(11569),ut=n(73633);const mt=e=>{const{chainId:t}=(0,a.useWeb3React)(),n=(0,H.Ld)(t),i=(0,w.useRef)(n);(0,w.useEffect)((()=>{i.current!==n&&e(n),i.current=n}),[n])};var xt,ft=n(97337),gt=n(27206),Ct=n(41162),jt=n(46591),yt=n(80657),wt=n(92883),kt=n(80608),vt=n(60198),bt=n(50786),Tt=n(39768),It=n(41440),_t=n(63498),Nt=n(97901);function St(){return St=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},St.apply(this,arguments)}function $t(e,t){let{title:n,titleId:i,...o}=e;return w.createElement("svg",St({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:t,"aria-labelledby":i},o),n?w.createElement("title",{id:i},n):null,xt||(xt=w.createElement("path",{d:"M14.75 12C14.75 13.517 13.517 14.75 12 14.75C10.483 14.75 9.25004 13.517 9.25004 12C9.25004 11.651 9.32196 11.32 9.44096 11.012C9.63496 11.166 9.86903 11.272 10.136 11.272C10.763 11.272 11.272 10.763 11.272 10.136C11.272 9.86899 11.166 9.63492 11.012 9.44092C11.32 9.32192 11.651 9.25 12 9.25C13.517 9.25 14.75 10.483 14.75 12ZM20.5921 13.4771C19.3651 15.5311 16.609 19 12 19C7.39104 19 4.635 15.5311 3.408 13.4771C2.864 12.5671 2.864 11.4329 3.408 10.5229C4.635 8.46895 7.39104 5 12 5C16.609 5 19.3651 8.46895 20.5921 10.5229C21.1361 11.4329 21.1361 12.5671 20.5921 13.4771ZM16.25 12C16.25 9.657 14.344 7.75 12 7.75C9.65604 7.75 7.75004 9.657 7.75004 12C7.75004 14.343 9.65604 16.25 12 16.25C14.344 16.25 16.25 14.343 16.25 12Z",fill:"currentColor"})))}const Pt=w.forwardRef($t);n.p;const At=l.default.div.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsContainer",componentId:"sc-f163e625-0"})`
  padding-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Et=l.default.span.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsText",componentId:"sc-f163e625-1"})`
  margin-top: 28px;
  margin-bottom: 20px;

  text-align: center;

  color: ${({theme:e})=>e.neutral2};
  font-size: 20px;
  font-weight: 535;
  line-height: 28px;
`,Ht=(0,l.default)(vt.DF).withConfig({displayName:"InvalidTokenDetails__TokenExploreButton",componentId:"sc-f163e625-2"})`
  width: fit-content;
  padding: 12px 16px;
  border-radius: 12px;

  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  font-weight: 535;
`;function Lt({pageChainId:e,isInvalidAddress:t}){const{chainId:n}=(0,a.useWeb3React)(),r=(0,yt.s0)(),s=function(){const e=(0,_t.T)(),{connector:t}=(0,a.useWeb3React)(),n=(0,Nt.o)(),[i,o]=(0,It.lr)();return(0,w.useCallback)((async r=>{if(!t)return;const a=(0,bt.B5)(t);try{await n(t,r),(0,g.EC)(r)&&(i.set("chain",g.Iy[r]),o(i))}catch(s){(0,Tt.JE)(a,s)||-32002===s.code||(console.error("Failed to switch networks",s),e((0,Fe.i8)({content:{failedSwitchNetwork:r,type:Fe.kQ.FailedSwitchNetwork},key:"failed-network-switch"})))}}),[t,e,i,o,n])}(),d=!t&&e===n,c=n?(0,f.bt)(n)?.label:void 0;return(0,i.jsxs)(At,{children:[(0,i.jsx)(Pt,{}),t||d?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Et,{children:(0,i.jsx)(o.cC,{id:"5pThdE"})}),(0,i.jsx)(Ht,{onClick:()=>r("/tokens"),children:(0,i.jsx)(h.Tv.SubHeader,{children:(0,i.jsx)(o.cC,{id:"1ru2CS"})})})]}):(0,i.jsxs)(i.Fragment,{children:[c&&(0,i.jsx)(Et,{children:(0,i.jsx)(o.cC,{id:"xNuZYG",values:{connectedChainLabel:c}})}),(0,i.jsx)(Ht,{onClick:()=>s(e),children:(0,i.jsx)(h.Tv.SubHeader,{children:(0,i.jsx)(o.cC,{id:"1+P9RR",values:{0:(0,f.bt)(e).label}})})})]})]})}var Bt=n(60476),Mt=n(14307);const Rt=e=>(0,i.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,i.jsx)("path",{d:"M5.12245 9.5625C5.23495 11.8725 6.01495 14.2275 7.37245 16.32C4.19245 15.615 1.76996 12.8925 1.52246 9.5625H5.12245ZM7.37245 1.67999C4.19245 2.38499 1.76996 5.1075 1.52246 8.4375H5.12245C5.23495 6.1275 6.01495 3.77249 7.37245 1.67999ZM9.14997 1.5H8.84995L8.62496 1.82249C7.19996 3.84749 6.36745 6.1725 6.24745 8.4375H11.7525C11.6325 6.1725 10.8 3.84749 9.37496 1.82249L9.14997 1.5ZM6.24745 9.5625C6.36745 11.8275 7.19996 14.1525 8.62496 16.1775L8.84995 16.5H9.14997L9.37496 16.1775C10.8 14.1525 11.6325 11.8275 11.7525 9.5625H6.24745ZM12.8775 9.5625C12.765 11.8725 11.985 14.2275 10.6275 16.32C13.8075 15.615 16.23 12.8925 16.4775 9.5625H12.8775ZM16.4775 8.4375C16.23 5.1075 13.8075 2.38499 10.6275 1.67999C11.985 3.77249 12.765 6.1275 12.8775 8.4375H16.4775Z",fill:e.fill??"#607BEE"})}),Ot=e=>(0,i.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,i.jsx)("path",{d:"M12.8761 3H14.9451L10.4251 8.16609L15.7425 15.196H11.579L8.31797 10.9324L4.58662 15.196H2.51644L7.35104 9.67026L2.25 3H6.51922L9.46689 6.89708L12.8761 3ZM12.15 13.9576H13.2964L5.89628 4.17332H4.66605L12.15 13.9576Z",fill:e.fill??"#607BEE"})});var Dt=n(2304),Zt=n(63811),Ft=n(15067),zt=n(79954),Wt=n(38641),Xt=n(28251),Vt=n(26),Ut=n(1990),Qt=n(34120),Kt=n(41054);const Yt=(0,l.default)(Bt.ZP).withConfig({displayName:"TokenDescription__TokenInfoSection",componentId:"sc-bf5789dd-0"})`
  gap: 16px;
  width: 100%;

  @media (max-width: ${Ut.j$.lg-1}px) and (min-width: ${Ut.j$.sm}px) {
    max-width: 45%;
  }
`,Gt=(0,l.default)(Dt.ZP).withConfig({displayName:"TokenDescription__TokenNameRow",componentId:"sc-bf5789dd-1"})`
  gap: 8px;
  width: 100%;
`,Jt=(0,l.default)(Gt).withConfig({displayName:"TokenDescription__TokenButtonRow",componentId:"sc-bf5789dd-2"})`
  flex-wrap: wrap;
`,qt=(0,l.default)(Dt.ZP).withConfig({displayName:"TokenDescription__TokenInfoButton",componentId:"sc-bf5789dd-3"})`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  color: ${({tokenColor:e})=>e};
  background-color: ${({tokenColor:e})=>(0,We.j)(12,e)};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  ${h.iV}
`,en=(0,l.default)(h.Tv.BodyPrimary).withConfig({displayName:"TokenDescription__TokenDescriptionContainer",componentId:"sc-bf5789dd-4"})`
  ${h.cw}
  max-width: 100%;
  // max-height: fit-content;
  line-height: 24px;
  white-space: pre-wrap;
`,tn=l.default.span.withConfig({displayName:"TokenDescription__DescriptionVisibilityWrapper",componentId:"sc-bf5789dd-5"})`
  display: ${({$visible:e})=>e?"inline":"none"};
`,nn=75;function on({tokenAddress:e,chainId:t=C.H.MAINNET,isNative:n=!1,characterCount:r=nn}){const a=(0,l.useTheme)().neutral1,s=(0,H.Ld)(t),{data:d}=(0,zt.wT)({variables:{address:n?(0,Kt.P)(s):e,chain:s},errorPolicy:"all"}),c=d?.token?.project,u=c?.description,m=(0,Qt.E)(t,e,n?Qt.r.NATIVE:Qt.r.TOKEN),[,x]=(0,Wt.Z)(),f=(0,w.useCallback)((()=>{x(e)}),[e,x]),[g,j]=(0,w.useReducer)((e=>!e),!0),y=(0,Ft.Nt)(u??"",r),v=!!u&&u.length>r,b=v&&g,{inputTax:T,outputTax:I}=(0,Xt.j)(e,e),{formatPercent:_}=(0,k.Gb)(),{sellFeeString:N,buyFeeString:S}={sellFeeString:_(T),buyFeeString:_(I)},$=Boolean(parseFloat(N))||Boolean(parseFloat(I.toFixed(2))),P=N===S;return(0,i.jsxs)(Yt,{children:[(0,i.jsx)(h.Tv.HeadlineSmall,{children:(0,i.jsx)(o.cC,{id:"CE+M2e"})}),(0,i.jsxs)(Jt,{children:[!n&&(0,i.jsxs)(qt,{tokenColor:a,onClick:f,children:[(0,i.jsx)(Vt.Z,{width:"18px",height:"18px",color:a}),(0,p.Xn)(e)]}),(0,i.jsx)(h.dL,{href:m,children:(0,i.jsxs)(qt,{tokenColor:a,children:[(0,i.jsx)(Mt.P,{width:"18px",height:"18px",fill:a}),t===C.H.MAINNET?(0,i.jsx)(o.cC,{id:"nS3bjC"}):(0,i.jsx)(o.cC,{id:"vtJ2yO"})]})}),!!c?.homepageUrl&&(0,i.jsx)(h.dL,{href:c.homepageUrl,children:(0,i.jsxs)(qt,{tokenColor:a,children:[(0,i.jsx)(Rt,{width:"18px",height:"18px",fill:a}),(0,i.jsx)(o.cC,{id:"On0aF2"})]})}),!!c?.twitterName&&(0,i.jsx)(h.dL,{href:`https://x.com/${c.twitterName}`,children:(0,i.jsxs)(qt,{tokenColor:a,children:[(0,i.jsx)(Ot,{width:"18px",height:"18px",fill:a}),(0,i.jsx)(o.cC,{id:"0F2sI+"})]})})]}),(0,i.jsxs)(en,{children:[!u&&(0,i.jsx)(Ft.aZ,{children:(0,i.jsx)(o.cC,{id:"kXI9SA"})}),u&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(tn,{"data-testid":"token-description-full",$visible:!b,children:u}),(0,i.jsx)(tn,{"data-testid":"token-description-truncated",$visible:b,children:y})]}),v&&(0,i.jsx)(Ft.ou,{onClick:j,"data-testid":"token-description-show-more-button",children:g?(0,i.jsx)(o.cC,{id:"fMPkxb"}):(0,i.jsx)(o.cC,{id:"vLyv1R"})})]}),$&&(0,i.jsx)(re.ud,{placement:"left",size:re.Oz.Small,text:(0,i.jsx)(h.Tv.Caption,{color:"neutral2",children:(0,i.jsx)(Zt.gE,{})}),children:(0,i.jsx)(Bt.ZP,{gap:"sm",children:P?(0,i.jsxs)(h.Tv.BodyPrimary,{children:[d?.token?.symbol,"\xa0",(0,i.jsx)(o.cC,{id:"oSCKSR"}),"\xa0",N]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(h.Tv.BodyPrimary,{children:[d?.token?.symbol,"\xa0",(0,i.jsx)(o.cC,{id:"JzWZvv"}),"\xa0",S]})," ",(0,i.jsxs)(h.Tv.BodyPrimary,{children:[d?.token?.symbol,"\xa0",(0,i.jsx)(o.cC,{id:"sHAUpq"}),"\xa0",N]})," "]})})})]})}const rn=l.default.span.withConfig({displayName:"TokenDetails__TokenSymbol",componentId:"sc-86f013e9-0"})`
  text-transform: uppercase;
  color: ${({theme:e})=>e.neutral2};
  margin-left: 8px;
`,an=l.default.div.withConfig({displayName:"TokenDetails__TokenActions",componentId:"sc-86f013e9-1"})`
  display: flex;
  gap: 16px;
  color: ${({theme:e})=>e.neutral2};
`,sn=l.default.div.withConfig({displayName:"TokenDetails__TokenTitle",componentId:"sc-86f013e9-2"})`
  display: flex;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
    display: inline;
  }
`;function dn(e,t,n){const{chainId:i}=(0,a.useWeb3React)(),o=(0,w.useMemo)((()=>{if(e)return e===Ne.dt?(0,Ne.gX)(t):n?(0,H.Pc)(n):void 0}),[t,e,n]),r=Boolean(o)||t!==i,s=function(e,t){const n=(0,ft.zA)(t||!e?void 0:e);return t||!e||n&&n?.symbol===ft.eu?void 0:n}(e,r);return(0,w.useMemo)((()=>({token:o??s,didFetchFromChain:!o})),[s,o])}function cn({urlAddress:e,inputTokenAddress:t,chain:n,tokenQuery:l,tokenPriceQuery:u,onChangeTimePeriod:m}){if(!e)throw new Error("Invalid token details route: tokenAddress param is undefined");const f=(0,w.useMemo)((()=>e===Ne.dt?e:(0,p.UJ)(e)||void 0),[e]),{chainId:g}=(0,a.useWeb3React)(),C=(0,H.Tz)(n),j=l.token,y=(0,w.useMemo)((()=>j?.project?.tokens.reduce(((e,t)=>(t&&(e[t.chain]=t.address),e)),{})??{}),[j]),{token:k,didFetchFromChain:v}=dn(f,C,j),b=f?(0,et.y8)(f):null,T=!1===b?.canProceed,I=(0,yt.s0)(),_=(0,pt.C)(),N=(0,ut.e)(),[S,A]=(0,w.useTransition)(),L=(0,w.useCallback)((e=>{if(!f)return;const t=y[e];t?A((()=>I((0,H.dG)({address:t,chain:e,isInfoExplorePageEnabled:_})))):(v||k?.isNative)&&A((()=>I((0,H.dG)({address:f,chain:e,isInfoExplorePageEnabled:_}))))}),[f,y,v,k?.isNative,I,_]);mt(L);const B=(0,w.useCallback)((e=>{if((0,kt.K)(e[wt.gN.INPUT]?.currencyId,f)||(0,kt.K)(e[wt.gN.OUTPUT]?.currencyId,f))return;const t=e[wt.gN.OUTPUT]?.currencyId??e[wt.gN.INPUT]?.currencyId;A((()=>I((0,H.dG)({address:"ETH"===t?null:t,chain:n,inputAddress:e[wt.gN.INPUT]&&e[wt.gN.INPUT]?.currencyId!==t?e[wt.gN.INPUT]?.currencyId:null,isInfoExplorePageEnabled:_}))))}),[f,n,_,I]),[M,R]=(0,w.useState)(),[O,D]=(0,w.useState)(!1),Z=(0,w.useCallback)((e=>{M?.resolve(e),R(void 0)}),[M,R]);if(void 0===k||!f)return(0,i.jsx)(Lt,{pageChainId:C,isInvalidAddress:!f});const F=k&&(k.symbol??(0,i.jsx)(o.cC,{id:"F2FJu3"}));return(0,i.jsx)(s.fM,{page:r.yJ.TOKEN_DETAILS_PAGE,properties:{tokenAddress:f,tokenName:k?.name},shouldLogImpression:!0,children:(0,i.jsxs)(E.Gy,{children:[k&&!S?(0,i.jsxs)(E.WQ,{children:[N?(0,i.jsxs)(P.Q,{isInfoTDPEnabled:!0,children:[(0,i.jsxs)(P.y,{to:`${_?"/explore":""}/tokens/${n.toLowerCase()}`,children:[(0,i.jsx)(o.cC,{id:"8tjQCz"})," ",(0,i.jsx)(Ct.Z,{size:14})," ",(0,i.jsx)(o.cC,{id:"6RDwJM"})," ",(0,i.jsx)(Ct.Z,{size:14})]})," ",F," ",!k.isNative&&(0,i.jsxs)(i.Fragment,{children:["(",(0,i.jsx)(h.Qv,{address:f,showTruncatedOnly:!0,truncatedAddress:(0,p.Xn)(f)}),")"]})]}):(0,i.jsx)(P.Q,{children:(0,i.jsxs)(P.y,{to:`${_?"/explore":""}/tokens/${n.toLowerCase()}`,children:[(0,i.jsx)(jt.Z,{"data-testid":"token-details-return-button",size:14})," Tokens"]})}),(0,i.jsxs)(E.Pn,{"data-testid":"token-info-container",children:[(0,i.jsxs)(E.yn,{children:[(0,i.jsx)(d.V,{currencies:[k],chainId:k.chainId,size:"32px"}),(0,i.jsxs)(sn,{children:[k.name??(0,i.jsx)(o.cC,{id:"zKpHYG"}),(0,i.jsx)(rn,{children:F})]})]}),(0,i.jsx)(an,{children:(0,i.jsx)(Je,{currency:k})})]}),(0,i.jsx)(Ie,{tokenPriceQuery:u,onChangeTimePeriod:m}),(0,i.jsx)(qe.ZP,{chainId:C,address:f,tokenQueryData:j}),(0,i.jsx)(E.Hr,{}),(0,i.jsx)(c.ez,{address:f,chainId:C,description:j?.project?.description,homepageUrl:j?.project?.homepageUrl,twitterName:j?.project?.twitterName}),!k.isNative&&(0,i.jsx)(x,{address:f})]}):(0,i.jsx)(E.ZP,{}),(0,i.jsxs)(E.QN,{isInfoTDPEnabled:N,onClick:()=>T&&D(!0),children:[(0,i.jsx)("div",{style:{pointerEvents:T?"none":"auto"},children:(0,i.jsx)(gt.HY,{chainId:C,initialInputCurrencyId:t,initialOutputCurrencyId:f===Ne.dt?"ETH":f,onCurrencyChange:B,disableTokenInputs:C!==g})}),b&&(0,i.jsx)(lt,{tokenAddress:f,warning:b}),!N&&k&&(0,i.jsx)($,{token:k}),N&&(0,i.jsx)(on,{tokenAddress:f,chainId:C,isNative:k?.isNative,characterCount:200})]}),!N&&k&&(0,i.jsx)(Le,{token:k}),(0,i.jsx)(ht.Z,{isOpen:O||!!M,tokenAddress:f,onContinue:()=>Z(!0),onBlocked:()=>{D(!1)},onCancel:()=>Z(!1),showCancel:!0})]})})}var ln=n(42713),hn=n(30719);const pn=(0,L.O4)("tokenDetailsTimePeriod",H.XH.DAY);function un(){const{tokenAddress:e,chainName:t}=(0,yt.UO)(),n=(0,H.Qj)(t),o=e===Ne.dt,[r,a]=(0,hn.KO)(pn),[s,d]=(0,w.useMemo)((()=>[o?(0,Kt.P)(n):e??"",(0,H.uw)(r)]),[n,o,r,e]),c=(0,ln.Z)(),l=(0,w.useMemo)((()=>"string"===typeof c.inputCurrency?c.inputCurrency:void 0),[c]),{data:h}=(0,zt.rS)({variables:{address:s,chain:n},errorPolicy:"all"}),{data:p}=(0,zt.m)({variables:{address:s,chain:n,duration:d},errorPolicy:"all"}),[u,m]=(0,w.useState)(p);return(0,w.useEffect)((()=>{p&&m(p)}),[m,p]),h?(0,i.jsx)(cn,{urlAddress:e,chain:n,tokenQuery:h,tokenPriceQuery:u,onChangeTimePeriod:a,inputTokenAddress:l}):(0,i.jsx)(E.lJ,{})}},80608:function(e,t,n){function i(e,t){return!(!e||!t)&&(e===t||e.toLowerCase()===t.toLowerCase())}n.d(t,{K:function(){return i}})}}]);
//# sourceMappingURL=7209.18647c2f.chunk.js.map