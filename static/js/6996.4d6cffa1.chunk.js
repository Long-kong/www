"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6996],{13352:function(e,n,t){const a=t(87253).default.button.withConfig({displayName:"FilterOption",componentId:"sc-f01a2a07-0"})`
  height: 100%;
  color: ${({theme:e,active:n})=>e.neutral1};
  background-color: ${({theme:e,active:n})=>e.surface1};
  margin: 0;
  padding: 6px 6px 6px 14px;
  border-radius: 12px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 535;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  border: 1px solid ${({theme:e})=>e.surface3};
  outline: ${({theme:e,active:n,highlight:t})=>n&&t?`1px solid ${e.accent1}`:"none"};

  :hover {
    cursor: pointer;
    background-color: ${({theme:e,active:n})=>n?e.accent2:e.surface2};
    opacity: ${({theme:e,active:n})=>n?e.opacity.hover:1};
  }
  :focus {
    background-color: ${({theme:e,active:n})=>n?e.surface2:e.surface3};
  }
`;n.Z=a},1670:function(e,n,t){t.d(n,{W9:function(){return E},ZP:function(){return I},rD:function(){return k}});var a=t(42893),o=t(12204),i=t(11569),r=t(17487),s=t(55338),d=t(30719),l=t(13712),c=t(96315),p=t(83931),x=t(29304),u=t(56564),m=t(13120),f=t(87253),h=t(35458),g=t(86403),b=t(13352);const k={[r.XH.HOUR]:"1H",[r.XH.DAY]:"1D",[r.XH.WEEK]:"1W",[r.XH.MONTH]:"1M",[r.XH.YEAR]:"1Y"},E=[r.XH.HOUR,r.XH.DAY,r.XH.WEEK,r.XH.MONTH,r.XH.YEAR],w=f.default.div.withConfig({displayName:"TimeSelector__InternalMenuItem",componentId:"sc-5b10af64-0"})`
  flex: 1;
  padding: 8px;
  color: ${({theme:e})=>e.neutral1};
  border-radius: 8px;

  :hover {
    cursor: pointer;
    text-decoration: none;
  }
`,$=(0,f.default)(w).withConfig({displayName:"TimeSelector__InternalLinkMenuItem",componentId:"sc-5b10af64-1"})`
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
`,y=f.default.span.withConfig({displayName:"TimeSelector__MenuTimeFlyout",componentId:"sc-5b10af64-2"})`
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

  ${({isInfoExplorePageEnabled:e})=>!e&&f.css`
      @media only screen and (max-width: ${h.T1}) {
        left: unset;
        right: 0px;
      }
    `}
`,j=f.default.div.withConfig({displayName:"TimeSelector__StyledMenu",componentId:"sc-5b10af64-3"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;

  ${({isInfoExplorePageEnabled:e})=>!e&&f.css`
      @media only screen and (max-width: ${h.QD}) {
        width: 72px;
      }
    `}
`,v=f.default.div.withConfig({displayName:"TimeSelector__StyledMenuContent",componentId:"sc-5b10af64-4"})`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  border: none;
  width: 100%;
  vertical-align: middle;
  ${({isInfoExplorePageEnabled:e})=>e&&"white-space: nowrap;"}
`,C=f.default.span.withConfig({displayName:"TimeSelector__Chevron",componentId:"sc-5b10af64-5"})`
  padding-top: 1px;
  color: ${({open:e,theme:n})=>e?n.neutral1:n.neutral2};
`;function I(){const e=(0,f.useTheme)(),n=(0,l.useRef)(null),t=(0,u.Wt)(m.Lk.TIME_SELECTOR),r=(0,u.xk)(m.Lk.TIME_SELECTOR);(0,s.t)(n,t?r:void 0);const[h,w]=(0,d.KO)(g.X3),I=(0,i.C)();return(0,a.jsxs)(j,{ref:n,isInfoExplorePageEnabled:I,children:[(0,a.jsx)(b.Z,{onClick:r,"aria-label":"timeSelector",active:t,"data-testid":"time-selector",children:(0,a.jsxs)(v,{isInfoExplorePageEnabled:I,children:[I?(0,a.jsxs)(a.Fragment,{children:[k[h]," ",(0,a.jsx)(o.cC,{id:"94M5XH"})]}):k[h],(0,a.jsx)(C,{open:t,children:t?(0,a.jsx)(c.Z,{width:20,height:15,viewBox:"0 0 24 20"}):(0,a.jsx)(p.Z,{width:20,height:15,viewBox:"0 0 24 20"})})]})}),t&&(0,a.jsx)(y,{isInfoExplorePageEnabled:I,children:E.map((n=>(0,a.jsxs)($,{"data-testid":k[n],onClick:()=>{w(n),r()},children:[I?(0,a.jsxs)("div",{children:[k[n]," ",(0,a.jsx)(o.cC,{id:"94M5XH"})]}):(0,a.jsx)("div",{children:k[n]}),n===h&&(0,a.jsx)(x.Z,{color:e.accent1,size:16})]},k[n])))})]})}},2380:function(e,n,t){t.r(n),t.d(n,{ExploreTab:function(){return fe},default:function(){return ge}});var a=t(42893),o=t(12204),i=t(19903),r=t(66196),s=t(2304),d=t(35458),l=t(86403),c=t(80485),p=t(42528),x=t(68040),u=t(11569),m=t(17487),f=t(55338),h=t(19468),g=t(13712),b=t(96315),k=t(83931),E=t(29304),w=t(80657),$=t(56564),y=t(13120),j=t(87253),v=t(39839),C=t(13352);const I=j.default.div.withConfig({displayName:"NetworkFilter__InternalMenuItem",componentId:"sc-b21b6cfa-0"})`
  flex: 1;
  padding: 12px 8px;
  color: ${({theme:e})=>e.neutral1};

  :hover {
    cursor: pointer;
    text-decoration: none;
  }
`,_=(0,j.default)(I).withConfig({displayName:"NetworkFilter__InternalLinkMenuItem",componentId:"sc-b21b6cfa-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;

  :hover {
    background-color: ${({theme:e})=>e.surface3};
    text-decoration: none;
  }

  ${({disabled:e})=>e&&j.css`
      opacity: 60%;
      pointer-events: none;
    `}
`,T=j.default.span.withConfig({displayName:"NetworkFilter__MenuTimeFlyout",componentId:"sc-b21b6cfa-2"})`
  min-width: ${({isInfoExplorePageEnabled:e})=>e?"150px":"240px"};
  max-height: 350px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
  border-radius: 12px 0px 0px 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 48px;
  z-index: 100;

  scrollbar-width: thin;
  scrollbar-color: ${({theme:e})=>`${e.surface3} transparent`};

  // safari and chrome scrollbar styling
  ::-webkit-scrollbar {
    background: transparent;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.surface3};
    border-radius: 8px;
  }

  ${({isInfoExplorePageEnabled:e})=>e?j.css`
          right: 0px;
          @media screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
            left: 0px;
          }
        `:j.css`
          left: 0px;
        `}
`,N=j.default.div.withConfig({displayName:"NetworkFilter__StyledMenu",componentId:"sc-b21b6cfa-3"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,P=j.default.div.withConfig({displayName:"NetworkFilter__StyledMenuContent",componentId:"sc-b21b6cfa-4"})`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  border: none;
  font-weight: 535;
  vertical-align: middle;
`,L=j.default.span.withConfig({displayName:"NetworkFilter__Chevron",componentId:"sc-b21b6cfa-5"})`
  padding-top: 1px;
  color: ${({open:e,theme:n})=>e?n.neutral1:n.neutral2};
`,S=j.default.div.withConfig({displayName:"NetworkFilter__NetworkLabel",componentId:"sc-b21b6cfa-6"})`
  ${v.cw}
  display: flex;
  gap: 8px;
  align-items: center;
`,O=j.default.div.withConfig({displayName:"NetworkFilter__CheckContainer",componentId:"sc-b21b6cfa-7"})`
  display: flex;
  flex-direction: flex-end;
`,M=(0,j.default)(C.Z).withConfig({displayName:"NetworkFilter__NetworkFilterOption",componentId:"sc-b21b6cfa-8"})`
  ${({isInfoExplorePageEnabled:e})=>!e&&"min-width: 156px;"}
`,F=(0,j.default)(c.Z).withConfig({displayName:"NetworkFilter__Tag",componentId:"sc-b21b6cfa-9"})`
  background-color: ${({theme:e})=>e.surface2};
  color: ${({theme:e})=>e.neutral2};
  font-size: 10px;
  opacity: 1;
  padding: 4px 6px;
`;function R(){const e=(0,j.useTheme)(),n=(0,g.useRef)(null),t=(0,$.Wt)(y.Lk.NETWORK_FILTER),o=(0,$.xk)(y.Lk.NETWORK_FILTER);(0,f.t)(n,t?o:void 0);const i=(0,w.s0)(),{tab:r}=(0,h.useExploreParams)(),s=(0,u.C)(),d=(0,m.Qj)((0,w.UO)().chainName),l=(0,m.Tz)(d),c=(0,x.bt)(l);return(0,a.jsxs)(N,{ref:n,children:[(0,a.jsx)(M,{isInfoExplorePageEnabled:s,onClick:o,"aria-label":"networkFilter",active:t,"data-testid":"tokens-network-filter-selected",children:(0,a.jsxs)(P,{children:[(0,a.jsxs)(S,{children:[(0,a.jsx)(p.Ej,{chainId:l,size:20})," ",!s&&c.label]}),(0,a.jsx)(L,{open:t,children:t?(0,a.jsx)(b.Z,{width:20,height:15,viewBox:"0 0 24 20"}):(0,a.jsx)(k.Z,{width:20,height:15,viewBox:"0 0 24 20"})})]})}),t&&(0,a.jsxs)(T,{isInfoExplorePageEnabled:s,children:[m.b5.map((n=>{const t=(0,m.Tz)(n),l=(0,x.bt)(t);return(0,a.jsxs)(_,{"data-testid":`tokens-network-filter-option-${n.toLowerCase()}`,onClick:()=>{i(s?`/explore/${r}/${n.toLowerCase()}`:`/tokens/${n.toLowerCase()}`),o()},children:[(0,a.jsxs)(S,{children:[(0,a.jsx)(p.Ej,{chainId:t,size:20})," ",l.label]}),n===d&&(0,a.jsx)(O,{children:(0,a.jsx)(E.Z,{size:16,color:e.accent1})})]},n)})),m.Qr.map((e=>{const n=(0,x.bt)(e);return(0,a.jsxs)(_,{"data-testid":`tokens-network-filter-option-${e}-chain`,disabled:!0,children:[(0,a.jsxs)(S,{children:[(0,a.jsx)(p.Ej,{chainId:e,size:20})," ",n.label]}),(0,a.jsx)(F,{children:"Coming soon"})]},e)}))]})]})}var A=t(65252);var H=t.p+"static/media/x.381ead042e56a19cb5bcac9d00c29e05.svg",z=t(14526),U=t(67621);const D="20px",X=j.default.div.withConfig({displayName:"SearchBar__SearchBarContainer",componentId:"sc-11945314-0"})`
  display: flex;
  flex: 1;
  ${({isInfoExplorePageEnabled:e})=>e&&"justify-content: flex-end;"}
`,Z=j.default.input.withConfig({displayName:"SearchBar__SearchInput",componentId:"sc-11945314-1"})`
  background: no-repeat scroll 7px 7px;
  background-image: url(${A.Z});
  background-size: 20px 20px;
  background-position: 12px center;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  height: 100%;
  width: ${({isInfoExplorePageEnabled:e,isOpen:n})=>e?n?"200px":"0":"min(200px, 100%)"};
  font-size: 16px;
  font-weight: 485;
  padding-left: 40px;
  color: ${({theme:e})=>e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  ${e=>e&&"text-overflow: ellipsis;"}

  :hover {
    background-color: ${({theme:e})=>e.surface1};
  }

  :focus {
    outline: none;
    background-color: ${({theme:e})=>e.surface1};
    border-color: ${({theme:e})=>e.accent1};
    color: ${({theme:e})=>e.neutral1};
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    height: ${D};
    width: ${D};
    background-image: url(${H});
    margin-right: 10px;
    background-size: ${D} ${D};
    cursor: pointer;
  }

  @media only screen and (max-width: ${d.Uw}) {
    width: ${({isInfoExplorePageEnabled:e,isOpen:n})=>e?n?"min(100%, 200px)":"0":"100%"};
  }
`;function B({tab:e}){const n=(0,U.Dv)(l.fO),[t,s]=(0,g.useState)(n),d=(0,U.yW)(l.fO),c=(0,z.Z)(t,300),p=(0,u.C)(),[x,m]=(0,g.useState)(!1);(0,g.useEffect)((()=>{s(n)}),[n]),(0,g.useEffect)((()=>{d(c)}),[c,d]);const f=()=>m(!0),h=()=>{""===t&&m(!1)};return(0,a.jsx)(X,{isInfoExplorePageEnabled:p,children:(0,a.jsx)(o.cC,{id:"J/hVSQ",values:{0:p?"tokens"===e?"Search tokens":"Search pools":"Filter tokens"},render:({translation:e})=>(0,a.jsx)(r.M8,{events:[i.TM.onFocus],name:i.Je.EXPLORE_SEARCH_SELECTED,element:i.xo.EXPLORE_SEARCH_INPUT,children:(0,a.jsx)(Z,{isInfoExplorePageEnabled:p,"data-cy":"explore-tokens-search-input",type:"search",placeholder:`${e}`,id:"searchBar",autoComplete:"off",value:t,onChange:({target:{value:e}})=>s(e),isOpen:x,onFocus:p?f:void 0,onBlur:p?h:void 0})})})})}var V=t(1670),W=t(1152),K=t(79954);W.ZP`
  query TopTokens100($duration: HistoryDuration!, $chain: Chain!) {
    topTokens(pageSize: 100, page: 1, chain: $chain, orderBy: VOLUME) {
      id
      name
      chain
      address
      symbol
      standard
      market(currency: USD) {
        id
        totalValueLocked {
          id
          value
          currency
        }
        price {
          id
          value
          currency
        }
        pricePercentChange(duration: $duration) {
          id
          currency
          value
        }
        volume(duration: $duration) {
          id
          value
          currency
        }
      }
      project {
        id
        logoUrl
      }
    }
  }
`,W.ZP`
  query TopTokensSparkline($duration: HistoryDuration!, $chain: Chain!) {
    topTokens(pageSize: 100, page: 1, chain: $chain, orderBy: VOLUME) {
      id
      address
      chain
      market(currency: USD) {
        id
        priceHistory(duration: $duration) {
          id
          timestamp
          value
        }
      }
    }
  }
`;const J=20;function Q(e){const n=(0,m.Tz)(e),t=(0,m.uw)((0,U.Dv)(l.X3)),{data:a}=(0,m.eE)((0,K.FL)({variables:{duration:t,chain:e}}),m.u8.Slow),o=(0,g.useMemo)((()=>{const e=n&&a?.topTokens?.map((e=>(0,m.vR)(n,e))),t={};return e?.forEach((e=>e?.address&&(t[e.address]=e?.market?.priceHistory?.filter(m.yL)))),t}),[n,a?.topTokens]),{data:i,loading:r}=(0,m.eE)((0,K.le)({variables:{duration:t,chain:e}}),m.u8.Fast),s=function(e){const n=(0,U.Dv)(l.AY),t=(0,U.Dv)(l.$E);return(0,g.useMemo)((()=>{if(!e)return;let a=Array.from(e);switch(n){case l.PU.PRICE:a=a.sort(((e,n)=>(n?.market?.price?.value??0)-(e?.market?.price?.value??0)));break;case l.PU.PERCENT_CHANGE:a=a.sort(((e,n)=>(n?.market?.pricePercentChange?.value??0)-(e?.market?.pricePercentChange?.value??0)));break;case l.PU.TOTAL_VALUE_LOCKED:a=a.sort(((e,n)=>(n?.market?.totalValueLocked?.value??0)-(e?.market?.totalValueLocked?.value??0)));break;case l.PU.VOLUME:a=a.sort(((e,n)=>(n?.market?.volume?.value??0)-(e?.market?.volume?.value??0)))}return t?a.reverse():a}),[e,n,t])}((0,g.useMemo)((()=>n&&i?.topTokens?.map((e=>(0,m.vR)(n,e)))),[n,i])),d=(0,g.useMemo)((()=>s?.reduce(((e,n,t)=>n.address?{...e,[n.address]:t+1}:e),{})??{}),[s]),c=function(e){const n=(0,U.Dv)(l.fO),t=(0,g.useMemo)((()=>n.toLowerCase()),[n]);return(0,g.useMemo)((()=>{if(!e)return;let n=e;return t&&(n=n?.filter((e=>{const n=e?.address?.toLowerCase().includes(t),a=e?.name?.toLowerCase().includes(t),o=e?.symbol?.toLowerCase().includes(t);return a||o||n}))),n}),[e,t])}(s);return(0,g.useMemo)((()=>({tokens:c,tokenSortRank:d,loadingTokens:r,sparklines:o})),[c,d,r,o])}var Y=t(34578),G=t(39102);const q=j.default.div.withConfig({displayName:"TokenTable__GridContainer",componentId:"sc-6fd6567b-0"})`
  display: flex;
  flex-direction: column;
  max-width: ${d.y5};
  background-color: ${({theme:e})=>e.surface1};

  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({theme:e})=>e.surface3};
`,ee=j.default.div.withConfig({displayName:"TokenTable__TokenDataContainer",componentId:"sc-6fd6567b-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`,ne=j.default.div.withConfig({displayName:"TokenTable__NoTokenDisplay",componentId:"sc-6fd6567b-2"})`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  color: ${({theme:e})=>e.neutral2};
  font-size: 16px;
  font-weight: 535;
  align-items: center;
  padding: 0px 28px;
  gap: 8px;
`;function te({message:e}){return(0,a.jsxs)(q,{children:[(0,a.jsx)(G.VJ,{}),(0,a.jsx)(ne,{children:e})]})}const ae=({rowCount:e})=>(0,a.jsx)(a.Fragment,{children:Array(e).fill(null).map(((n,t)=>(0,a.jsx)(G.PI,{first:0===t,last:t===e-1},t)))});function oe({rowCount:e=J}){return(0,a.jsxs)(q,{children:[(0,a.jsx)(G.VJ,{}),(0,a.jsx)(ee,{children:(0,a.jsx)(ae,{rowCount:e})})]})}function ie(){const e=(0,m.Qj)((0,w.UO)().chainName),{tokens:n,tokenSortRank:t,loadingTokens:i,sparklines:r}=Q(e);return i&&!n?(0,a.jsx)(oe,{rowCount:J}):n?0===n?.length?(0,a.jsx)(te,{message:(0,a.jsx)(o.cC,{id:"k4nIkP"})}):(0,a.jsxs)(q,{children:[(0,a.jsx)(G.VJ,{}),(0,a.jsx)(ee,{children:n.map(((e,o)=>e?.address&&(0,a.jsx)(G.pS,{tokenListIndex:o,tokenListLength:n.length,token:e,sparklineMap:r,sortRank:t[e.address]},e.address)))})]}):(0,a.jsx)(te,{message:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Y.Z,{size:16}),(0,a.jsx)(o.cC,{id:"lR4CZT"})]})})}var re=t(65647);const se=j.default.div.withConfig({displayName:"Explore__ExploreContainer",componentId:"sc-a582a304-0"})`
  width: 100%;
  min-width: 320px;
  padding: 68px 12px 0px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding-top: 48px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,de=j.default.div.withConfig({displayName:"Explore__TitleContainer",componentId:"sc-a582a304-1"})`
  margin-bottom: 32px;
  max-width: ${d.y5};
  margin-left: auto;
  margin-right: auto;
  display: flex;
`,le=j.default.div.withConfig({displayName:"Explore__NavWrapper",componentId:"sc-a582a304-2"})`
  display: flex;
  max-width: ${d.y5};
  margin: 0 auto;
  margin-bottom: ${({isInfoExplorePageEnabled:e})=>e?"16px":"20px"};
  color: ${({theme:e})=>e.neutral3};
  flex-direction: row;

  @media only screen and (max-width: ${d.Uw}) {
    flex-direction: column;
    gap: 8px;
  }

  ${({isInfoExplorePageEnabled:e})=>e&&j.css`
      @media screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
        flex-direction: column;
        gap: 16px;
      }
    `};
`,ce=(0,j.default)(s.BA).withConfig({displayName:"Explore__TabBar",componentId:"sc-a582a304-3"})`
  gap: 24px;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
    gap: 16px;
  }
`,pe=(0,j.default)(v.Tv.HeadlineMedium).withConfig({displayName:"Explore__TabItem",componentId:"sc-a582a304-4"})`
  align-items: center;
  color: ${({theme:e,active:n})=>n?e.neutral1:e.neutral2};
  cursor: pointer;
  transition: ${({theme:e})=>`${e.transition.duration.medium} ${e.transition.timing.ease} color`};
`,xe=j.default.div.withConfig({displayName:"Explore__FiltersContainer",componentId:"sc-a582a304-5"})`
  display: flex;
  gap: 8px;
  height: 40px;

  @media only screen and (max-width: ${d.Uw}) {
    ${({isInfoExplorePageEnabled:e})=>!e&&"order: 2;"}
  }

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
    ${({isInfoExplorePageEnabled:e})=>e&&"justify-content: space-between;"}
  }
`,ue=(0,j.default)(xe).withConfig({displayName:"Explore__DropdownFilterContainer",componentId:"sc-a582a304-6"})`
  ${({isInfoExplorePageEnabled:e})=>e?j.css`
          @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
            justify-content: flex-start;
          }
        `:j.css`
          @media only screen and (max-width: ${d.Uw}) {
            justify-content: flex-start;
          }
        `};
`,me=(0,j.default)(xe).withConfig({displayName:"Explore__SearchContainer",componentId:"sc-a582a304-7"})`
  ${({isInfoExplorePageEnabled:e})=>!e&&"margin-left: 8px;"}
  width: 100%;

  @media only screen and (max-width: ${d.Uw}) {
    ${({isInfoExplorePageEnabled:e})=>!e&&"order: 1; margin: 0px;"}
  }

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
    ${({isInfoExplorePageEnabled:e})=>e&&"justify-content: flex-end;"}
  }
`;var fe;!function(e){e.Tokens="tokens",e.Pools="pools",e.Transactions="transactions"}(fe||(fe={}));const he=[{title:(0,a.jsx)(o.cC,{id:"6RDwJM"}),key:fe.Tokens,component:ie,loggingElementName:i.xo.EXPLORE_TOKENS_TAB},{title:(0,a.jsx)(o.cC,{id:"lQfOr9"}),key:fe.Pools,component:ie,loggingElementName:i.xo.EXPLORE_POOLS_TAB},{title:(0,a.jsx)(o.cC,{id:"4wyw8H"}),key:fe.Transactions,component:ie,loggingElementName:i.xo.EXPLORE_TRANSACTIONS_TAB}];var ge=({initialTab:e})=>{const n=(0,U.oC)(l.fO),t=(0,w.TH)(),s=(0,w.s0)(),d=(0,g.useMemo)((()=>{const n=e&&he.findIndex((n=>n.key===e));return n&&-1!==n?n:0}),[e]),[c,p]=(0,g.useState)(d),x=(0,u.C)(),{tab:m}=(0,h.useExploreParams)();(0,g.useEffect)((()=>{const e=he.findIndex((e=>e.key===m));-1!==e&&p(e)}),[m]),(0,g.useEffect)((()=>{n()}),[t,n]);const{component:f,key:b}=he[c];return(0,a.jsx)(r.fM,{page:x?i.yJ.EXPLORE_PAGE:i.yJ.TOKENS_PAGE,shouldLogImpression:!0,children:(0,a.jsxs)(se,{children:[!x&&(0,a.jsx)(de,{children:(0,a.jsx)(re.ud,{text:(0,a.jsx)(o.cC,{id:"LkgPBQ"}),placement:"bottom",children:(0,a.jsx)(v.Tv.LargeHeader,{children:(0,a.jsx)(o.cC,{id:"Vzmu+R"})})})}),(0,a.jsxs)(le,{isInfoExplorePageEnabled:x,children:[x&&(0,a.jsx)(ce,{"data-testid":"explore-navbar",children:he.map((({title:e,loggingElementName:n,key:t},o)=>(0,a.jsx)(r.M8,{events:[i.TM.onClick],name:i.Gz.NAVBAR_CLICKED,element:n,children:(0,a.jsx)(pe,{onClick:()=>{p(o),s(`/explore/${t}`)},active:c===o,children:e},t)},o)))}),x?(0,a.jsxs)(xe,{isInfoExplorePageEnabled:!0,children:[(0,a.jsxs)(ue,{isInfoExplorePageEnabled:!0,children:[(0,a.jsx)(R,{}),b===fe.Tokens&&(0,a.jsx)(V.ZP,{})]}),(0,a.jsx)(me,{isInfoExplorePageEnabled:!0,children:b!==fe.Transactions&&(0,a.jsx)(B,{tab:b})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(xe,{isInfoExplorePageEnabled:!1,children:[(0,a.jsx)(R,{}),(0,a.jsx)(V.ZP,{})]}),(0,a.jsx)(me,{isInfoExplorePageEnabled:!1,children:(0,a.jsx)(B,{})})]})]}),x?(0,a.jsx)(f,{}):(0,a.jsx)(ie,{})]})})}},19468:function(e,n,t){t.r(n),t.d(n,{default:function(){return s},useExploreParams:function(){return r}});var a=t(42893),o=t(80657),i=t(2380);function r(){const{tab:e,chainName:n,tokenAddress:t}=(0,o.UO)(),a=Object.values(i.ExploreTab);return e&&!n&&a.includes(e)?{tab:e,chainName:void 0,tokenAddress:t}:e&&!n?{tab:i.ExploreTab.Tokens,chainName:e,tokenAddress:t}:e||n?{tab:e,chainName:n,tokenAddress:t}:{tab:i.ExploreTab.Tokens,chainName:void 0,tokenAddress:void 0}}function s(){const{tab:e,chainName:n,tokenAddress:t}=r();return e&&n&&t?(0,a.jsx)(o.Fg,{to:`/explore/${e}/${n}/${t}`,replace:!0}):n&&t?(0,a.jsx)(o.Fg,{to:`/explore/tokens/${n}/${t}`,replace:!0}):e&&n?(0,a.jsx)(o.Fg,{to:`/explore/${e}/${n}`,replace:!0}):n?(0,a.jsx)(o.Fg,{to:`/explore/tokens/${n}`,replace:!0}):(0,a.jsx)(i.default,{initialTab:e})}}}]);
//# sourceMappingURL=6996.4d6cffa1.chunk.js.map