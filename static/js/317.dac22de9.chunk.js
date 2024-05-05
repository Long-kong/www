"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[317],{56588:function(e,t,n){n.d(t,{Z:function(){return m}});var i=n(42893),o=n(12204),r=n(84071),s=n(34578),a=n(87253),c=n(65647);const l=a.default.div.withConfig({displayName:"RangeBadge__BadgeWrapper",componentId:"sc-5538a536-0"})`
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
`,d=a.default.div.withConfig({displayName:"RangeBadge__BadgeText",componentId:"sc-5538a536-1"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 14px;
  margin-right: 8px;
`,u=a.default.span.withConfig({displayName:"RangeBadge__ActiveDot",componentId:"sc-5538a536-2"})`
  background-color: ${({theme:e})=>e.success};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`,p=a.default.div.withConfig({displayName:"RangeBadge__LabelText",componentId:"sc-5538a536-3"})`
  align-items: center;
  color: ${({color:e})=>e};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;function m({removed:e,inRange:t}){const n=(0,a.useTheme)();return(0,i.jsx)(l,{children:e?(0,i.jsx)(c.ud,{text:(0,i.jsx)(o.cC,{id:"MZPP7t"}),children:(0,i.jsxs)(p,{color:n.neutral2,children:[(0,i.jsx)(d,{children:(0,i.jsx)(o.cC,{id:"D87pha"})}),(0,i.jsx)(r.Z,{width:12,height:12})]})}):t?(0,i.jsx)(c.ud,{text:(0,i.jsx)(o.cC,{id:"aIvv/z"}),children:(0,i.jsxs)(p,{color:n.success,children:[(0,i.jsx)(d,{children:(0,i.jsx)(o.cC,{id:"vOyUlD"})}),(0,i.jsx)(u,{})]})}):(0,i.jsx)(c.ud,{text:(0,i.jsx)(o.cC,{id:"IwiTcw"}),children:(0,i.jsxs)(p,{color:n.deprecated_accentWarning,children:[(0,i.jsx)(d,{children:(0,i.jsx)(o.cC,{id:"i3Z+/Z"})}),(0,i.jsx)(s.Z,{width:12,height:12})]})})})}},94160:function(e,t,n){var i=n(42893),o=n(65647),r=n(13712);const s=n(87253).default.span.withConfig({displayName:"HoverInlineText__TextWrapper",componentId:"sc-707bc6e1-0"})`
  margin-left: ${({margin:e})=>e&&"4px"};
  font-size: ${({fontSize:e})=>e??"inherit"};

  @media screen and (max-width: 600px) {
    font-size: ${({adjustSize:e})=>e&&"12px"};
  }
`;t.Z=({text:e,maxCharacters:t=20,margin:n=!1,adjustSize:a=!1,fontSize:c,textColor:l,link:d,...u})=>{const[p,m]=(0,r.useState)(!1);return e?e.length>t?(0,i.jsx)(o.ZP,{text:e,show:p,children:(0,i.jsx)(s,{onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),margin:n,adjustSize:a,textColor:l,link:d,fontSize:c,...u,children:" "+e.slice(0,t-1)+"..."})}):(0,i.jsx)(s,{margin:n,adjustSize:a,link:d,fontSize:c,textColor:l,...u,children:e}):(0,i.jsx)("span",{})}},22230:function(e,t,n){n.d(t,{N:function(){return M},Z:function(){return A}});var i=n(42893),o=n(12204),r=n(15387),s=n(35206),a=n(56588),c=n(45533),l=n(94160),d=n(25575),u=n(2304),p=n(15627),m=n(58127),f=n(46109),y=n(13712),h=n(41440),x=n(4292),g=n(87253),w=n(1990),b=n(39839),I=n(57482),T=n(49111),k=n(58025);const v=(0,g.default)(h.rU).withConfig({displayName:"PositionListItem__LinkRow",componentId:"sc-c6f6cae0-0"})`
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral1};
  padding: 16px;
  text-decoration: none;
  font-weight: 535;

  & > div:not(:first-child) {
    text-align: center;
  }
  :hover {
    background-color: ${({theme:e})=>e.deprecated_hoverDefault};
  }

  @media screen and (min-width: ${w.e.deprecated_upToSmall}px) {
    /* flex-direction: row; */
  }

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-direction: column;
    row-gap: 8px;
  `};
`,_=g.default.div.withConfig({displayName:"PositionListItem__DataLineItem",componentId:"sc-c6f6cae0-1"})`
  font-size: 14px;
`,j=(0,g.default)(_).withConfig({displayName:"PositionListItem__RangeLineItem",componentId:"sc-c6f6cae0-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  width: 100%;
`,C=g.default.span.withConfig({displayName:"PositionListItem__DoubleArrow",componentId:"sc-c6f6cae0-3"})`
  font-size: 12px;
  margin: 0 2px;
  color: ${({theme:e})=>e.neutral1};
`,L=(0,g.default)(b.Tv.BodySmall).withConfig({displayName:"PositionListItem__RangeText",componentId:"sc-c6f6cae0-4"})`
  font-size: 14px !important;
  word-break: break-word;
  padding: 0.25rem 0.25rem;
  border-radius: 8px;
`,S=(0,g.default)(b.Tv.UtilityBadge).withConfig({displayName:"PositionListItem__FeeTierText",componentId:"sc-c6f6cae0-5"})`
  font-size: 16px !important;
  margin-left: 8px !important;
  color: ${({theme:e})=>e.neutral3};
`,P=(0,g.default)(b.Tv.BodySmall).withConfig({displayName:"PositionListItem__ExtentsText",componentId:"sc-c6f6cae0-6"})`
  color: ${({theme:e})=>e.neutral2};
  display: inline-block;
  line-height: 16px;
  margin-right: 4px !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`,N=g.default.div.withConfig({displayName:"PositionListItem__PrimaryPositionIdData",componentId:"sc-c6f6cae0-7"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 8px;
  }
`;function M(e){if(!e)return{};const t=e.amount0.currency,n=e.amount1.currency;if([k.h1,k.Hz,k.AA].some((e=>e.equals(t))))return{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n};return[...Object.values(k.Fl),k.ML].some((e=>e&&e.equals(n)))||e.token0PriceUpper.lessThan(1)?{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n}:{priceLower:e.token0PriceLower,priceUpper:e.token0PriceUpper,quote:n,base:t}}function A({token0:e,token1:t,tokenId:n,fee:h,liquidity:g,tickLower:w,tickUpper:k}){const{formatDelta:_,formatTickPrice:A}=(0,I.Gb)(),O=(0,p.dQ)(e),X=(0,p.dQ)(t),E=O?(0,T.B)(O):void 0,q=X?(0,T.B)(X):void 0,[,z]=(0,f.AI)(E??void 0,q??void 0,h),$=(0,y.useMemo)((()=>{if(z)return new s.Position({pool:z,liquidity:g.toString(),tickLower:w,tickUpper:k})}),[g,z,w,k]),R=(0,m.Z)(h,w,k),{priceLower:D,priceUpper:G,quote:U,base:B}=M($),Z=U&&(0,T.B)(U),W=B&&(0,T.B)(B),V=!!z&&(z.tickCurrent<w||z.tickCurrent>=k),Y="/pools/"+n,F=g?.eq(0);return(0,i.jsxs)(v,{to:Y,children:[(0,i.jsxs)(u.m0,{children:[(0,i.jsxs)(N,{children:[(0,i.jsx)(c.Z,{currency0:W,currency1:Z,size:18,margin:!0}),(0,i.jsxs)(b.Tv.SubHeader,{children:["\xa0",Z?.symbol,"\xa0/\xa0",W?.symbol]}),(0,i.jsx)(S,{children:(0,i.jsx)(o.cC,{id:"J/hVSQ",values:{0:_(parseFloat(new r.Percent(h,1e6).toSignificant()))}})})]}),(0,i.jsx)(a.Z,{removed:F,inRange:!V})]}),D&&G?(0,i.jsxs)(j,{children:[(0,i.jsxs)(L,{children:[(0,i.jsx)(P,{children:(0,i.jsx)(o.cC,{id:"0uYsLP"})}),(0,i.jsx)(o.cC,{id:"YAzUzD",values:{0:A({price:D,atLimit:R,direction:x.Mb.LOWER})},components:{0:(0,i.jsx)("span",{}),1:(0,i.jsx)(l.Z,{text:Z?.symbol}),2:(0,i.jsx)(l.Z,{text:W?.symbol??""})}})]})," ",(0,i.jsxs)(b.Pw,{children:[(0,i.jsx)(C,{children:"\u2194"})," "]}),(0,i.jsxs)(b.Z,{children:[(0,i.jsx)(C,{children:"\u2194"})," "]}),(0,i.jsxs)(L,{children:[(0,i.jsx)(P,{children:(0,i.jsx)(o.cC,{id:"BniuBY"})}),(0,i.jsx)(o.cC,{id:"YAzUzD",values:{0:A({price:G,atLimit:R,direction:x.Mb.UPPER})},components:{0:(0,i.jsx)("span",{}),1:(0,i.jsx)(l.Z,{text:Z?.symbol}),2:(0,i.jsx)(l.Z,{maxCharacters:10,text:W?.symbol})}})]})]}):(0,i.jsx)(d.ZP,{})]})}},58127:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(35206),o=n(13712),r=n(4292);function s(e,t,n){return(0,o.useMemo)((()=>({[r.Mb.LOWER]:e&&t?t===(0,i.nearestUsableTick)(i.TickMath.MIN_TICK,i.TICK_SPACINGS[e]):void 0,[r.Mb.UPPER]:e&&n?n===(0,i.nearestUsableTick)(i.TickMath.MAX_TICK,i.TICK_SPACINGS[e]):void 0})),[e,t,n])}},46109:function(e,t,n){n.d(t,{AI:function(){return x},Oh:function(){return h},tK:function(){return y}});var i=n(45433),o=n(15387),r=n(40409),s=n(35206),a=n(80815),c=n(44998),l=n.n(c),d=n(61646),u=n(13712);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const m=new i.vU(r.Mt);let f=class{static getPoolAddress(e,t,n,i){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:o}=t,{address:r}=n,a=`${e}:${o}:${r}:${i.toString()}`,c=this.addresses.find((e=>e.key===a));if(c)return c.address;const l={key:a,address:(0,s.computePoolAddress)({factoryAddress:e,tokenA:t,tokenB:n,fee:i})};return this.addresses.unshift(l),l.address}static getPool(e,t,n,i,o,r){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const a=this.pools.find((s=>s.token0===e&&s.token1===t&&s.fee===n&&l().EQ(s.sqrtRatioX96,i)&&l().EQ(s.liquidity,o)&&s.tickCurrent===r));if(a)return a;const c=new s.Pool(e,t,n,i,o,r);return this.pools.unshift(c),c}};var y;function h(e){const{chainId:t}=(0,a.useWeb3React)(),n=(0,u.useMemo)((()=>t?e.map((([e,t,n])=>{if(e&&t&&n){const i=e.wrapped,o=t.wrapped;if(i.equals(o))return;return i.sortsBefore(o)?[i,o,n]:[o,i,n]}})):new Array(e.length)),[t,e]),i=(0,u.useMemo)((()=>{const e=t&&o.V3_CORE_FACTORY_ADDRESSES[t];return e?n.map((t=>t&&f.getPoolAddress(e,...t))):new Array(n.length)}),[t,n]),r=(0,d._Y)(i,m,"slot0"),s=(0,d._Y)(i,m,"liquidity");return(0,u.useMemo)((()=>e.map(((e,t)=>{const i=n[t];if(!i)return[y.INVALID,null];const[o,a,c]=i;if(!r[t])return[y.INVALID,null];const{result:l,loading:d,valid:u}=r[t];if(!s[t])return[y.INVALID,null];const{result:p,loading:m,valid:h}=s[t];if(!i||!u||!h)return[y.INVALID,null];if(d||m)return[y.LOADING,null];if(!l||!p)return[y.NOT_EXISTS,null];if(!l.sqrtPriceX96||l.sqrtPriceX96.eq(0))return[y.NOT_EXISTS,null];try{const e=f.getPool(o,a,c,l.sqrtPriceX96,p[0],l.tick);return[y.EXISTS,e]}catch(x){return console.error("Error when constructing the pool",x),[y.NOT_EXISTS,null]}}))),[s,e,r,n])}function x(e,t,n){return h((0,u.useMemo)((()=>[[e,t,n]]),[e,t,n]))[0]}p(f,"MAX_ENTRIES",128),p(f,"pools",[]),p(f,"addresses",[]),function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(y||(y={}))},59991:function(e,t,n){n.d(t,{W:function(){return l},n:function(){return c}});var i=n(86003),o=n(61646),r=n(13712),s=n(36665);function a(e){const t=(0,s.GL)(),n=(0,r.useMemo)((()=>e?e.map((e=>[i.O$.from(e)])):[]),[e]),a=(0,o.es)(t,"positions",n),c=(0,r.useMemo)((()=>a.some((({loading:e})=>e))),[a]),l=(0,r.useMemo)((()=>a.some((({error:e})=>e))),[a]),d=(0,r.useMemo)((()=>{if(!c&&!l&&e)return a.map(((t,n)=>{const i=e[n],o=t.result;return{tokenId:i,fee:o.fee,feeGrowthInside0LastX128:o.feeGrowthInside0LastX128,feeGrowthInside1LastX128:o.feeGrowthInside1LastX128,liquidity:o.liquidity,nonce:o.nonce,operator:o.operator,tickLower:o.tickLower,tickUpper:o.tickUpper,token0:o.token0,token1:o.token1,tokensOwed0:o.tokensOwed0,tokensOwed1:o.tokensOwed1}}))}),[c,l,a,e]);return{loading:c,positions:d?.map(((e,t)=>({...e,tokenId:n[t][0]})))}}function c(e){const t=a(e?[e]:void 0);return{loading:t.loading,position:t.positions?.[0]}}function l(e){const t=(0,s.GL)(),{loading:n,result:c}=(0,o.Wk)(t,"balanceOf",[e??void 0]),l=c?.[0]?.toNumber(),d=(0,r.useMemo)((()=>{if(l&&e){const t=[];for(let n=0;n<l;n++)t.push([e,n]);return t}return[]}),[e,l]),u=(0,o.es)(t,"tokenOfOwnerByIndex",d),p=(0,r.useMemo)((()=>u.some((({loading:e})=>e))),[u]),m=(0,r.useMemo)((()=>e?u.map((({result:e})=>e)).filter((e=>!!e)).map((e=>i.O$.from(e[0]))):[]),[e,u]),{positions:f,loading:y}=a(m);return{loading:p||n||y,positions:f}}},55494:function(e,t,n){n.d(t,{DC:function(){return a},ER:function(){return c},bb:function(){return l},im:function(){return s},pr:function(){return d}});var i=n(13119),o=n(47096),r=n(87253);const s=r.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,a=(0,r.default)(o.xv).withConfig({displayName:"styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,c=r.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
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
`,l=r.default.span.withConfig({displayName:"styled__Dots",componentId:"sc-bfb6c8b8-3"})`
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
`,d=(0,r.default)(i.pr).withConfig({displayName:"styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
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
`},49111:function(e,t,n){n.d(t,{B:function(){return r}});var i=n(48141),o=n(58025);function r(e){if(e.isNative)return e;const t=(0,i.oG)(e.chainId);return t&&o.Fl[t]?.equals(e)?(0,o.gX)(e.chainId):e}},40409:function(e){e.exports=JSON.parse('{"Mt":[{"inputs":[],"name":"feeGrowthGlobal0X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeGrowthGlobal1X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidity","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"observations","outputs":[{"internalType":"uint32","name":"blockTimestamp","type":"uint32"},{"internalType":"int56","name":"tickCumulative","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityCumulativeX128","type":"uint160"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"positions","outputs":[{"internalType":"uint128","name":"_liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"},{"internalType":"uint128","name":"tokensOwed0","type":"uint128"},{"internalType":"uint128","name":"tokensOwed1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"protocolFees","outputs":[{"internalType":"uint128","name":"token0","type":"uint128"},{"internalType":"uint128","name":"token1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"slot0","outputs":[{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"observationIndex","type":"uint16"},{"internalType":"uint16","name":"observationCardinality","type":"uint16"},{"internalType":"uint16","name":"observationCardinalityNext","type":"uint16"},{"internalType":"uint8","name":"feeProtocol","type":"uint8"},{"internalType":"bool","name":"unlocked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int16","name":"wordPosition","type":"int16"}],"name":"tickBitmap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tick","type":"int24"}],"name":"ticks","outputs":[{"internalType":"uint128","name":"liquidityGross","type":"uint128"},{"internalType":"int128","name":"liquidityNet","type":"int128"},{"internalType":"uint256","name":"feeGrowthOutside0X128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthOutside1X128","type":"uint256"},{"internalType":"int56","name":"tickCumulativeOutside","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityOutsideX128","type":"uint160"},{"internalType":"uint32","name":"secondsOutside","type":"uint32"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"}]}')}}]);
//# sourceMappingURL=317.dac22de9.chunk.js.map