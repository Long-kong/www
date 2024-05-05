"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9102],{91443:function(e,n,t){t.d(n,{Bz:function(){return r},HM:function(){return d},VC:function(){return o},fj:function(){return c}});var i=t(11275),a=t(17487);function o(e){if(!e.length)return{min:0,max:0};let n=e[0].value,t=e[0].value;for(const i of e)i.value<n&&(n=i.value),i.value>t&&(t=i.value);return{min:n,max:t}}function r(e){const n=[],t=[];let i;if(e.forEach(((a,o)=>{if(0!==a.value){if(0===n.length&&0!==o){const n={timestamp:e[0].timestamp,value:a.value};t.push([n,a])}i=a,n.push(a)}})),i){if(i!==e[e.length-1]){const n={timestamp:e[e.length-1].timestamp,value:i.value};t.push([i,n])}}return{prices:n,blanks:t,lastValidPrice:i}}function d(e,n,t){const a=t.invert(e),o=(0,(0,i.YFb)((e=>e.timestamp)).left)(n,a,1),r=n[o-1],d=n[o];if(!d)return r;return Math.abs(a.valueOf()-r.timestamp.valueOf())<Math.abs(d.timestamp.valueOf()-a.valueOf())?r:d}const s=i.Z_i.every(5),l={[a.XH.HOUR]:s?{interval:s,step:2}:{interval:i.Z_i,step:10},[a.XH.DAY]:{interval:i.WQD,step:4},[a.XH.WEEK]:{interval:i.rr1,step:1},[a.XH.MONTH]:{interval:i.rr1,step:7},[a.XH.YEAR]:{interval:i.F0B,step:2}};function c(e,n,t,i){if(0===i||n<=e)return[];const a=(n-e)/24,o=new Date(1e3*(e+a)),r=new Date(1e3*(n-a)),{interval:d,step:s}=l[t],c=d.range(o,r,s).map((e=>e.valueOf()/1e3));if(c.length<=i)return c;const p=[],h=Math.floor(c.length/i);for(let l=1;l<c.length;l+=h)p.push(c[l]);return p}},39102:function(e,n,t){t.d(n,{h8:function(){return pe},VJ:function(){return ue},pS:function(){return xe},PI:function(){return fe},_j:function(){return le}});var i=t(42893),a=t(12204),o=t(19903),r=t(4271),d=t(66196),s=t(11275),l=t(13712),c=t(87253),p=t(47244),h=t(14045);function m({data:e,getX:n,getY:t,marginTop:a,curve:o,color:r,strokeWidth:d,width:s,height:l,children:m}){const u=(0,c.useTheme)();return(0,i.jsxs)("svg",{width:s,height:l,children:[(0,i.jsx)(p.Z,{top:a,children:(0,i.jsx)(h.Z,{curve:o,stroke:r??u.accent1,strokeWidth:d,data:e,x:n,y:t})}),m]})}var u=l.memo(m),f=t(91443);const x=c.default.div.withConfig({displayName:"SparklineChart__LoadingContainer",componentId:"sc-c1c8d779-0"})`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;function g({width:e,height:n,tokenData:t,pricePercentChange:a,sparklineMap:o}){const r=(0,c.useTheme)(),d=t?.address?o[t.address]:null;if(!d||d.length<=1)return(0,i.jsx)(x,{children:(0,i.jsx)(le,{})});const l=d[0],p=d[d.length-1],h=(0,s.BYU)().domain([l.timestamp,p.timestamp]).range([0,110]),{min:m,max:g}=(0,f.VC)(d),w=(0,s.BYU)().domain([m,g]).range([30,0]);return(0,i.jsx)(u,{data:d,getX:e=>h(e.timestamp),getY:e=>w(e.value),curve:s.YY7.tension(.9),marginTop:5,color:a&&a<0?r.critical:r.success,strokeWidth:1.5,width:e,height:n})}var w=(0,l.memo)(g),k=t(83246),C=t(37636);const _=e=>(0,i.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12.75 16.5C12.75 16.914 12.414 17.25 12 17.25C11.586 17.25 11.25 16.914 11.25 16.5V11.929C11.25 11.515 11.586 11.179 12 11.179C12.414 11.179 12.75 11.515 12.75 11.929V16.5ZM12.02 9.5C11.468 9.5 11.0149 9.052 11.0149 8.5C11.0149 7.948 11.458 7.5 12.01 7.5H12.02C12.573 7.5 13.02 7.948 13.02 8.5C13.02 9.052 12.572 9.5 12.02 9.5Z",fill:"#9B9B9B"})});var y=t(90315),b=t(45492),j=t(17487);function v(e){const n=(e.token?.chain?(0,j.Tz)(e.token?.chain):b.H.MAINNET)??b.H.MAINNET,t=e.token?(0,j.Pc)(e.token):void 0;return(0,i.jsx)(y.V,{currencies:(0,l.useMemo)((()=>[t]),[t]),chainId:n,...e})}var T=t(65647),I=t(11569),N=t(67621),$=t(41440),L=t(80657),R=t(1990),E=t(39839),P=t(57482),U=t(35458),O=t(80343),D=t(86403),V=t(86682);const X=c.default.div.withConfig({displayName:"TokenRow__Cell",componentId:"sc-101b7d07-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
`,A=c.default.div.withConfig({displayName:"TokenRow__StyledTokenRow",componentId:"sc-101b7d07-1"})`
  background-color: transparent;
  display: grid;
  font-size: 16px;
  grid-template-columns: 1fr 7fr 4fr 4fr 4fr 4fr 5fr;
  line-height: 24px;
  max-width: ${U.y5};
  min-width: 390px;
  ${({first:e,last:n})=>c.css`
    height: ${e||n?"72px":"64px"};
    padding-top: ${e?"8px":"0px"};
    padding-bottom: ${n?"8px":"0px"};
  `}
  padding-left: 12px;
  padding-right: 12px;
  transition: ${({theme:{transition:{duration:e,timing:n}}})=>c.css`background-color ${e.medium} ${n.ease}`};
  width: 100%;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};

  &:hover {
    ${({$loading:e,theme:n})=>!e&&c.css`
        background-color: ${n.deprecated_hoverDefault};
      `}
    ${({last:e})=>e&&c.css`
        border-radius: 0px 0px 8px 8px;
      `}
  }

  @media only screen and (max-width: ${U.y5}) {
    grid-template-columns: 1fr 6.5fr 4.5fr 4.5fr 4.5fr 4.5fr 1.7fr;
  }

  @media only screen and (max-width: ${U.$l}) {
    grid-template-columns: 1fr 7.5fr 4.5fr 4.5fr 4.5fr 1.7fr;
  }

  @media only screen and (max-width: ${U.Uw}) {
    grid-template-columns: 1fr 10fr 5fr 5fr 1.2fr;
  }

  @media only screen and (max-width: ${U.T1}) {
    grid-template-columns: 2fr 3fr;
    min-width: unset;
    border-bottom: 0.5px solid ${({theme:e})=>e.surface2};

    :last-of-type {
      border-bottom: none;
    }
  }
`,M=c.default.div.withConfig({displayName:"TokenRow__ClickableContent",componentId:"sc-101b7d07-2"})`
  display: flex;
  ${({gap:e})=>e&&`gap: ${e}px`};
  text-decoration: none;
  color: ${({theme:e})=>e.neutral1};
  align-items: center;
  cursor: pointer;
`,H=(0,c.default)(M).withConfig({displayName:"TokenRow__ClickableName",componentId:"sc-101b7d07-3"})`
  gap: 12px;
  max-width: 100%;
`,Y=(0,c.default)(A).withConfig({displayName:"TokenRow__StyledHeaderRow",componentId:"sc-101b7d07-4"})`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.surface3};
  border-radius: 8px 8px 0px 0px;
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  height: 48px;
  line-height: 16px;
  padding: 0px 12px;
  width: 100%;
  justify-content: center;

  &:hover {
    background-color: transparent;
  }

  @media only screen and (max-width: ${U.T1}) {
    justify-content: space-between;
  }
`,B=(0,c.default)(X).withConfig({displayName:"TokenRow__ListNumberCell",componentId:"sc-101b7d07-5"})`
  color: ${({theme:e})=>e.neutral2};
  min-width: 32px;
  font-size: 14px;

  @media only screen and (max-width: ${U.T1}) {
    display: none;
  }
`,S=(0,c.default)(X).withConfig({displayName:"TokenRow__DataCell",componentId:"sc-101b7d07-6"})`
  justify-content: flex-end;
  min-width: 80px;
  user-select: ${({sortable:e})=>e?"none":"unset"};
  transition: ${({theme:{transition:{duration:e,timing:n}}})=>c.css`background-color ${e.medium} ${n.ease}`};
`,z=(0,c.default)(S).withConfig({displayName:"TokenRow__TvlCell",componentId:"sc-101b7d07-7"})`
  padding-right: 8px;
  @media only screen and (max-width: ${U.Uw}) {
    display: none;
  }
`,F=(0,c.default)(X).withConfig({displayName:"TokenRow__NameCell",componentId:"sc-101b7d07-8"})`
  justify-content: flex-start;
  padding: 0px 8px;
  min-width: 240px;
  gap: 8px;

  @media only screen and (max-width: ${R.j$.xs}px) {
    min-width: 200px;
  }
`,K=(0,c.default)(S).withConfig({displayName:"TokenRow__PriceCell",componentId:"sc-101b7d07-9"})`
  padding-right: 8px;
`,W=(0,c.default)(S).withConfig({displayName:"TokenRow__PercentChangeCell",componentId:"sc-101b7d07-10"})`
  padding-right: 8px;
  @media only screen and (max-width: ${U.T1}) {
    display: none;
  }
`,Z=(0,c.default)(X).withConfig({displayName:"TokenRow__PercentChangeInfoCell",componentId:"sc-101b7d07-11"})`
  display: none;

  @media only screen and (max-width: ${U.T1}) {
    display: flex;
    gap: 3px;
    justify-content: flex-end;
    color: ${({theme:e})=>e.neutral2};
    font-size: 12px;
    line-height: 16px;
  }
`,G=(0,c.default)(X).withConfig({displayName:"TokenRow__PriceInfoCell",componentId:"sc-101b7d07-12"})`
  justify-content: flex-end;
  flex: 1;

  @media only screen and (max-width: ${U.T1}) {
    flex-direction: column;
    align-items: flex-end;
  }
`,J=c.default.span.withConfig({displayName:"TokenRow__HeaderCellWrapper",componentId:"sc-101b7d07-13"})`
  align-items: center;
  cursor: ${({onClick:e})=>e?"pointer":"unset"};
  display: flex;
  gap: 4px;
  justify-content: flex-end;
  width: 100%;

  &:hover {
    ${E.iV}
  }
`,Q=(0,c.default)(X).withConfig({displayName:"TokenRow__SparkLineCell",componentId:"sc-101b7d07-14"})`
  padding: 0px 24px;
  min-width: 120px;

  @media only screen and (max-width: ${U.y5}) {
    display: none;
  }
`,q=(0,c.default)(X).withConfig({displayName:"TokenRow__SparkLine",componentId:"sc-101b7d07-15"})`
  width: 124px;
  height: 42px;
`,ee=(0,c.default)($.rU).withConfig({displayName:"TokenRow__StyledLink",componentId:"sc-101b7d07-16"})`
  text-decoration: none;
`,ne=(0,c.default)(X).withConfig({displayName:"TokenRow__TokenInfoCell",componentId:"sc-101b7d07-17"})`
  gap: 8px;
  line-height: 24px;
  font-size: 16px;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media only screen and (max-width: ${U.T1}) {
    justify-content: flex-start;
    flex-direction: column;
    gap: 0px;
    width: max-content;
    font-weight: 535;
  }
`,te=c.default.div.withConfig({displayName:"TokenRow__TokenName",componentId:"sc-101b7d07-18"})`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,ie=(0,c.default)(X).withConfig({displayName:"TokenRow__TokenSymbol",componentId:"sc-101b7d07-19"})`
  color: ${({theme:e})=>e.neutral2};
  text-transform: uppercase;

  @media only screen and (max-width: ${U.T1}) {
    font-size: 12px;
    height: 16px;
    justify-content: flex-start;
    width: 100%;
  }
`,ae=(0,c.default)(S).withConfig({displayName:"TokenRow__VolumeCell",componentId:"sc-101b7d07-20"})`
  padding-right: 8px;
  @media only screen and (max-width: ${U.$l}) {
    display: none;
  }
`,oe=(0,c.default)(O.X).withConfig({displayName:"TokenRow__SmallLoadingBubble",componentId:"sc-101b7d07-21"})`
  width: 25%;
`,re=(0,c.default)(O.X).withConfig({displayName:"TokenRow__MediumLoadingBubble",componentId:"sc-101b7d07-22"})`
  width: 65%;
`,de=(0,c.default)(O.X).withConfig({displayName:"TokenRow__LongLoadingBubble",componentId:"sc-101b7d07-23"})`
  width: 90%;
`,se=(0,c.default)(O.X).withConfig({displayName:"TokenRow__IconLoadingBubble",componentId:"sc-101b7d07-24"})`
  border-radius: 50%;
  width: 24px;
`,le=(0,c.default)(de).withConfig({displayName:"TokenRow__SparkLineLoadingBubble",componentId:"sc-101b7d07-25"})`
  height: 4px;
`,ce=c.default.div.withConfig({displayName:"TokenRow__InfoIconContainer",componentId:"sc-101b7d07-26"})`
  width: 16px;
  margin-left: 2px;
  display: flex;
  align-items: center;
  cursor: help;
`,pe={[D.PU.PRICE]:void 0,[D.PU.PERCENT_CHANGE]:void 0,[D.PU.TOTAL_VALUE_LOCKED]:(0,i.jsx)(a.cC,{id:"b2kIOW"}),[D.PU.FULLY_DILUTED_VALUATION]:(0,i.jsx)(a.cC,{id:"XnQwo3"}),[D.PU.VOLUME]:(0,i.jsx)(a.cC,{id:"UOqQih"})};function he({category:e}){const n=(0,c.useTheme)(),t=(0,N.Dv)(D.$E),a=(0,D.OX)(e),o=(0,N.Dv)(D.AY),r=pe[e];return(0,i.jsxs)(J,{onClick:a,children:[o===e&&(0,i.jsx)(i.Fragment,{children:t?(0,i.jsx)(C.V,{width:16,height:16,color:n.neutral2}):(0,i.jsx)(k.c,{width:16,height:16,color:n.neutral2})}),e,r&&(0,i.jsx)(T.ud,{text:r,placement:"right",children:(0,i.jsx)(ce,{children:(0,i.jsx)(_,{width:"16px",height:"16px"})})})]})}function me({header:e,listNumber:n,tokenInfo:t,price:a,percentChange:o,tvl:r,volume:d,sparkLine:s,...l}){const c=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(B,{header:e,children:n}),(0,i.jsx)(F,{"data-testid":"name-cell",children:t}),(0,i.jsx)(K,{"data-testid":"price-cell",sortable:e,children:a}),(0,i.jsx)(W,{"data-testid":"percent-change-cell",sortable:e,children:o}),(0,i.jsx)(z,{"data-testid":"tvl-cell",sortable:e,children:r}),(0,i.jsx)(ae,{"data-testid":"volume-cell",sortable:e,children:d}),(0,i.jsx)(Q,{children:s})]});return e?(0,i.jsx)(Y,{"data-testid":"header-row",children:c}):(0,i.jsx)(A,{...l,children:c})}function ue(){return(0,i.jsx)(me,{header:!0,listNumber:"#",tokenInfo:(0,i.jsx)(a.cC,{id:"SKZhW9"}),price:(0,i.jsx)(he,{category:D.PU.PRICE}),percentChange:(0,i.jsx)(he,{category:D.PU.PERCENT_CHANGE}),tvl:(0,i.jsx)(he,{category:D.PU.TOTAL_VALUE_LOCKED}),volume:(0,i.jsx)(he,{category:D.PU.VOLUME}),sparkLine:null})}function fe(e){return(0,i.jsx)(me,{header:!1,listNumber:(0,i.jsx)(oe,{}),$loading:!0,tokenInfo:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(se,{}),(0,i.jsx)(re,{})]}),price:(0,i.jsx)(re,{}),percentChange:(0,i.jsx)(O.X,{}),tvl:(0,i.jsx)(O.X,{}),volume:(0,i.jsx)(O.X,{}),sparkLine:(0,i.jsx)(le,{}),...e})}const xe=(0,l.forwardRef)(((e,n)=>{const{formatFiatPrice:t,formatNumber:a,formatDelta:s}=(0,P.Gb)(),{tokenListIndex:l,tokenListLength:c,token:p,sortRank:h}=e,m=(0,N.Dv)(D.fO),u=(0,j.Qj)((0,L.UO)().chainName?.toUpperCase()),f=(0,j.Tz)(u),x=(0,N.Dv)(D.X3),g=p.market?.pricePercentChange?.value,k=s(g),C={chain_id:f,token_address:p.address,token_symbol:p.symbol,token_list_index:l,token_list_rank:h,token_list_length:c,time_frame:x,search_token_address_input:m},_=0===p.market?.price?.value?"-":t({price:p.market?.price?.value}),y=(0,I.C)();return(0,i.jsx)("div",{ref:n,"data-testid":`token-table-row-${p.address}`,children:(0,i.jsx)(ee,{to:(0,j.dG)({...p,isInfoExplorePageEnabled:y}),onClick:()=>(0,d._P)(o.Je.EXPLORE_TOKEN_ROW_CLICKED,C),children:(0,i.jsx)(me,{header:!1,listNumber:h,tokenInfo:(0,i.jsxs)(H,{children:[(0,i.jsx)(v,{token:p,size:"32px"}),(0,i.jsxs)(ne,{children:[(0,i.jsx)(te,{"data-cy":"token-name",children:p.name}),(0,i.jsx)(ie,{children:p.symbol})]})]}),price:(0,i.jsx)(M,{children:(0,i.jsxs)(G,{children:[_,(0,i.jsxs)(Z,{children:[(0,i.jsx)(V.Kx,{delta:g,size:14}),(0,i.jsx)(V.Jp,{delta:g,children:k})]})]})}),percentChange:(0,i.jsxs)(M,{gap:3,children:[(0,i.jsx)(V.Kx,{delta:g}),(0,i.jsx)(V.Jp,{delta:g,children:k})]}),tvl:(0,i.jsx)(M,{children:a({input:p.market?.totalValueLocked?.value,type:P.sw.FiatTokenStats})}),volume:(0,i.jsx)(M,{children:a({input:p.market?.volume?.value,type:P.sw.FiatTokenStats})}),sparkLine:(0,i.jsx)(q,{children:(0,i.jsx)(r.Z,{children:({width:n,height:t})=>e.sparklineMap&&(0,i.jsx)(w,{width:n,height:t,tokenData:p,pricePercentChange:p.market?.pricePercentChange?.value,sparklineMap:e.sparklineMap})})}),first:0===l,last:l===c-1})})})}));xe.displayName="LoadedRow"},86403:function(e,n,t){t.d(n,{$E:function(){return p},AY:function(){return c},OX:function(){return h},PU:function(){return i},X3:function(){return l},fO:function(){return s}});var i,a=t(17487),o=t(30719),r=t(67621),d=t(13712);!function(e){e.FULLY_DILUTED_VALUATION="FDV",e.PRICE="Price",e.PERCENT_CHANGE="Change",e.TOTAL_VALUE_LOCKED="TVL",e.VOLUME="Volume"}(i||(i={}));const s=(0,r.rw)(""),l=(0,o.cn)(a.XH.DAY),c=(0,o.cn)(i.VOLUME),p=(0,o.cn)(!1);function h(e){const[n,t]=(0,o.KO)(c),[i,a]=(0,o.KO)(p);return(0,d.useCallback)((()=>{n===e?a(!i):(t(e),a(!1))}),[n,t,a,i,e])}}}]);
//# sourceMappingURL=9102.9d9655d2.chunk.js.map