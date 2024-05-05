"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7790],{17790:function(e,t,n){n.d(t,{ZI:function(){return Nt},zD:function(){return Tt},ZP:function(){return bt}});var s=n(42893),r=n(12204),a=n(19903),i=n(66196),o=n(62069),c=n(69867),d=n(30476),l=n(80815),u=n(5920),p=n(60476),g=n(25575),m=n(56823),x=n(2304),h=n(20437),I=n(80343),f=n(65647),N=n(48141),T=n(45492),A=n(28702),_=n(1152),C=n(79954);_.ZP`
  query NftUniversalRouterAddress($chain: Chain = ETHEREUM) {
    nftRoute(chain: $chain, senderAddress: "", nftTrades: []) {
      toAddress
    }
  }
`;var E=n(15627),b=n(79741),w=n(95202),v=n(97901),j=n(79847),y=n(4572),O=n(98841),k=n(50026),P=n(15387),R=n(29239),S=n(36330),L=n(13712),B=n(69574),z=n(58336);var F=n(1004),D=n(12113),U=n(68044),H=n(57174);function G(e,t,n){const{hasPriceAdjustment:s,updatedAssets:r}=(0,U.$)(e,t),a=s&&n,{unchanged:i,priceChanged:o,unavailable:c}=(0,H.K)(r),d=r.length>0,l=o.length>0,u=c.length>0,p=l||u,g=function(e,t,n){return[...e.map((e=>({asset:e,status:F.ZJ.UNAVAILABLE}))),...t.map((e=>({asset:e,status:F.ZJ.REVIEWING_PRICE_CHANGE}))),...n.map((e=>({asset:e,status:F.ZJ.REVIEWED})))]}(c,o,i),m=function(e,t,n,s){return e?t?n?F.s.IN_REVIEW:F.s.CONFIRM_REVIEW:s?F.s.CONFIRM_QUOTE:F.s.CONFIRMING_IN_WALLET:F.s.ADDING_TO_BAG}(d,p,l,a);return{newBagItems:g,nextBagStatus:m}}function M(e){return{action:F.lQ.Buy,marketplace:e.marketplace.toLowerCase(),amountIn:e.price.value,assetIn:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},amountOut:e.amount.toString(),assetOut:{id:e.id,decimals:18,address:e.contractAddress,priceInfo:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},tokenType:e.tokenType,tokenId:e.tokenId,amount:e.amount.toString(),marketplace:e.marketplace.toLowerCase(),orderSource:"api"}}}function W(e,t){const n=e.route?e.route.map(M):[];return{route:n,routeResponse:{route:n,valueToSend:t?void 0:e.sendAmount.value,data:e.calldata,to:e.toAddress}}}var $=n(22495),V=n(45239);var Z=n(9170),q=n(66528);const Y=(0,n(98102).F)()((0,Z.mW)((e=>({inputCurrency:void 0,tokenTradeInput:void 0,setInputCurrency:t=>e((()=>({inputCurrency:t}))),clearInputCurrency:()=>e((()=>({inputCurrency:void 0}))),setTokenTradeInput:t=>e((()=>({tokenTradeInput:t})))})),{name:"useTokenInput"}),q.X);function K(){const{account:e}=(0,l.useWeb3React)(),{itemsInBag:t,setBagStatus:n,didOpenUnavailableAssets:s,setDidOpenUnavailableAssets:r,isLocked:a,setLocked:i,setItemsInBag:o}=(0,O.c)((({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:r,setLocked:a,setItemsInBag:i})=>({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:r,setLocked:a,setItemsInBag:i}))),c=Y((e=>e.tokenTradeInput)),d=(0,L.useMemo)((()=>(0,D.G7)(t)),[t]),[u]=(0,C.yo)(),p=function(){const{provider:e}=(0,l.useWeb3React)(),t=(0,$.p)((e=>e.sendTransaction)),n=(0,V.J)((e=>e.setTransactionResponse)),{setLocked:s,setBagExpanded:r,reset:a}=(0,O.c)((({setLocked:e,setBagExpanded:t,reset:n})=>({setLocked:e,setBagExpanded:t,reset:n})));return(0,L.useCallback)((async(i,o,c=!1)=>{if(!e)return;const d=await t(e.getSigner(),o,i,c);d&&(s(!1),n(d),r({bagExpanded:!1}),a())}),[e,a,t,r,s,n])}(),g=(0,L.useCallback)((()=>{s&&r(!1),!a&&i(!0),n(F.s.FETCHING_ROUTE)}),[a,s,i,n,r]);return(0,L.useCallback)((async()=>{g(),u({variables:{senderAddress:e||"",nftTrades:(0,D.hI)(d),tokenTrades:c||void 0},onCompleted:e=>{if(!e.nftRoute||!e.nftRoute.route)return n(F.s.ADDING_TO_BAG),void i(!1);const t=function(e){return e.filter((e=>e.status!==F.ZJ.UNAVAILABLE)).map((e=>e.asset))}(d),s=!!c,{route:r,routeResponse:a}=W(e.nftRoute,s),{newBagItems:l,nextBagStatus:u}=G(t,r,s);if(o(l),n(u),u===F.s.CONFIRMING_IN_WALLET)return p(a,t,s),void i(!0);i(!1)}})}),[e,u,d,p,g,i,n,o,c])}var X=n(73293);function J(e){return{...(n={inputAmount:e.inputAmount,outputAmount:e.outputAmount},{inputAmount:{amount:n.inputAmount.quotient.toString(),token:{address:n.inputAmount.currency.isToken?n.inputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.inputAmount.currency.chainId,decimals:n.inputAmount.currency.decimals,isNative:n.inputAmount.currency.isNative}},outputAmount:{amount:n.outputAmount.quotient.toString(),token:{address:n.outputAmount.currency.isToken?n.outputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.outputAmount.currency.chainId,decimals:n.outputAmount.currency.decimals,isNative:n.outputAmount.currency.isNative}}}),pools:(t=e.route.pools,t.map((e=>function(e){const t="fee"in e;return{pair:t?void 0:{tokenAmountA:{amount:e.reserve0.quotient.toString(),token:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative}},tokenAmountB:{amount:e.reserve1.quotient.toString(),token:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}},pool:t?{fee:e.fee,liquidity:e.liquidity.toString(),sqrtRatioX96:e.sqrtRatioX96.toString(),tickCurrent:e.tickCurrent.toString(),tokenA:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative},tokenB:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}:void 0}}(e))))};var t,n}function Q(e,t,n){const s=Y((e=>e.setTokenTradeInput)),r=(0,z.pG)(e)&&e.routes,a=!!e&&!!e.inputAmount&&e.inputAmount.currency.isToken,i=!!n&&!!t;(0,L.useEffect)((()=>{if(!r||!a||!i)return void s(void 0);const o=parseInt(n.multiply(100).toSignificant(2)),{mixedTokenTradeRouteInputs:c,v2TokenTradeRouteInputs:d,v3TokenTradeRouteInputs:l}=function(e){const t=[],n=[],s=[],r=e.swaps;for(const a of r)a.route.protocol===X.Protocol.MIXED?t.push(J(a)):a.route.protocol===X.Protocol.V2?n.push(J(a)):s.push(J(a));return{mixedTokenTradeRouteInputs:t.length>0?t:void 0,v2TokenTradeRouteInputs:n.length>0?n:void 0,v3TokenTradeRouteInputs:s.length>0?s:void 0}}(e),u={mixedRoutes:c,tradeType:C.NS.ExactOutput,v2Routes:d,v3Routes:l},p="permitSignature"in t&&t.permitSignature?{details:{amount:t.permitSignature.details.amount.toString(),expiration:t.permitSignature.details.expiration.toString(),nonce:t.permitSignature.details.nonce.toString(),token:t.permitSignature.details.token},sigDeadline:t.permitSignature.sigDeadline.toString(),signature:t.permitSignature.signature,spender:t.permitSignature.spender}:void 0;s({permit:p,routes:u,slippageToleranceBasisPoints:o,tokenAmount:{amount:e.inputAmount.quotient.toString(),token:{address:e.inputAmount.currency.address,chainId:e.inputAmount.currency.chainId,decimals:e.inputAmount.currency.decimals,isNative:e.inputAmount.currency.isNative}}})}),[t,n,i,a,r,s,e])}var ee=n(87253),te=n(57482),ne=n(74969);var se,re=n(8586),ae=n(34578),ie=n(83931),oe=n(39839);function ce(e,t,n,a,i){const o={handleClick:()=>{},buttonText:(0,s.jsx)(r.cC,{id:"nwtY4N"}),disabled:!0,warningText:void 0,warningTextColor:t.deprecated_accentWarning,helperText:void 0,helperTextColor:t.neutral2,buttonColor:t.accent1,buttonTextColor:t.deprecated_accentTextLightPrimary};return{[se.WALLET_NOT_CONNECTED]:{...o,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(r.cC,{id:"VHOVEJ"})},[se.NOT_SUPPORTED_CHAIN]:{...o,handleClick:n??(()=>{}),buttonText:(0,s.jsx)(r.cC,{id:"ffOtfc"}),disabled:!1,warningText:(0,s.jsx)(r.cC,{id:"IwI0rY"})},[se.INSUFFICIENT_BALANCE]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"4fL/V7"}),warningText:(0,s.jsx)(r.cC,{id:"cPcTW+"})},[se.ERROR]:{...o,warningText:(0,s.jsx)(r.cC,{id:"fWsBTs"})},[se.IN_WALLET_CONFIRMATION]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"CpEYLQ"})},[se.PROCESSING_TRANSACTION]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"SqYgw0"})},[se.FETCHING_TOKEN_ROUTE]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"hQHwxA"})},[se.INVALID_TOKEN_ROUTE]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"4fL/V7"})},[se.NO_TOKEN_ROUTE_FOUND]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"dLAScn"}),buttonColor:t.surface3,buttonTextColor:t.neutral1,helperText:(0,s.jsx)(r.cC,{id:"1u70J/"})},[se.LOADING_ALLOWANCE]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"TuN3Z4"})},[se.IN_WALLET_ALLOWANCE_APPROVAL]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"4k/lBP"})},[se.PROCESSING_APPROVAL]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"gHko4n"})},[se.REQUIRE_APPROVAL]:{...o,disabled:!1,handleClick:n??(()=>{}),helperText:(0,s.jsx)(r.cC,{id:"kpa6xe"}),buttonText:(0,s.jsx)(r.cC,{id:"Z7ZXbT"})},[se.CONFIRM_UPDATED_PRICE]:{...o,handleClick:n??(()=>{}),disabled:!1,warningTextColor:t.accent1,warningText:(0,s.jsx)(r.cC,{id:"Ejd0wH"}),buttonText:(0,s.jsx)(r.cC,{id:"4fL/V7"})},[se.PRICE_IMPACT_HIGH]:{...o,handleClick:n??(()=>{}),disabled:!1,buttonColor:i?i.priceImpactSeverity.color:o.buttonColor,helperText:(0,s.jsx)(r.cC,{id:"NF0esC"}),helperTextColor:i?i.priceImpactSeverity.color:o.helperTextColor,buttonText:(0,s.jsx)(r.cC,{id:"2AEplS"})},[se.PAY]:{...o,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(r.cC,{id:"4fL/V7"}),helperText:a?(0,s.jsx)(r.cC,{id:"3BWxOM"}):void 0}}[e]}!function(e){e[e.WALLET_NOT_CONNECTED=0]="WALLET_NOT_CONNECTED",e[e.NOT_SUPPORTED_CHAIN=1]="NOT_SUPPORTED_CHAIN",e[e.INSUFFICIENT_BALANCE=2]="INSUFFICIENT_BALANCE",e[e.ERROR=3]="ERROR",e[e.IN_WALLET_CONFIRMATION=4]="IN_WALLET_CONFIRMATION",e[e.PROCESSING_TRANSACTION=5]="PROCESSING_TRANSACTION",e[e.FETCHING_TOKEN_ROUTE=6]="FETCHING_TOKEN_ROUTE",e[e.INVALID_TOKEN_ROUTE=7]="INVALID_TOKEN_ROUTE",e[e.NO_TOKEN_ROUTE_FOUND=8]="NO_TOKEN_ROUTE_FOUND",e[e.LOADING_ALLOWANCE=9]="LOADING_ALLOWANCE",e[e.IN_WALLET_ALLOWANCE_APPROVAL=10]="IN_WALLET_ALLOWANCE_APPROVAL",e[e.PROCESSING_APPROVAL=11]="PROCESSING_APPROVAL",e[e.REQUIRE_APPROVAL=12]="REQUIRE_APPROVAL",e[e.CONFIRM_UPDATED_PRICE=13]="CONFIRM_UPDATED_PRICE",e[e.PRICE_IMPACT_HIGH=14]="PRICE_IMPACT_HIGH",e[e.PAY=15]="PAY"}(se||(se={}));const de=ee.default.div.withConfig({displayName:"BagFooter__FooterContainer",componentId:"sc-2b31ace1-0"})`
  padding: 0px 12px;
`,le=ee.default.div.withConfig({displayName:"BagFooter__Footer",componentId:"sc-2b31ace1-1"})`
  border-top: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  display: flex;
  flex-direction: column;
  margin: 0px 16px 8px;
  padding: 12px 0px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`,ue=(0,ee.default)(p.ZP).withConfig({displayName:"BagFooter__FooterHeader",componentId:"sc-2b31ace1-2"})`
  padding-top: 8px;
  padding-bottom: 16px;
`,pe=(0,ee.default)(x.ZP).withConfig({displayName:"BagFooter__CurrencyRow",componentId:"sc-2b31ace1-3"})`
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`,ge=(0,ee.default)(p.ZP).withConfig({displayName:"BagFooter__TotalColumn",componentId:"sc-2b31ace1-4"})`
  text-align: end;
  overflow: hidden;
`,me=(0,ee.default)(ae.Z).withConfig({displayName:"BagFooter__WarningIcon",componentId:"sc-2b31ace1-5"})`
  width: 14px;
  margin-right: 4px;
  color: inherit;
`,xe=(0,ee.default)(oe.Tv.BodyPrimary).withConfig({displayName:"BagFooter__WarningText",componentId:"sc-2b31ace1-6"})`
  align-items: center;
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  margin-bottom: 10px !important;
  text-align: center;
`,he=(0,ee.default)(oe.Tv.BodySmall).withConfig({displayName:"BagFooter__HelperText",componentId:"sc-2b31ace1-7"})`
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px !important;
`,Ie=(0,ee.default)(x.ZP).withConfig({displayName:"BagFooter__CurrencyInput",componentId:"sc-2b31ace1-8"})`
  gap: 8px;
  cursor: pointer;
`,fe=ee.default.button.withConfig({displayName:"BagFooter__ActionButton",componentId:"sc-2b31ace1-9"})`
  display: flex;
  background: ${({$backgroundColor:e})=>e};
  color: ${({$color:e})=>e};
  font-weight: 535;
  line-height: 24px;
  font-size: 16px;
  gap: 16px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 12px 0px;
  cursor: pointer;
  align-items: center;

  &:disabled {
    opacity: 0.6;
    cursor: auto;
  }
`,Ne=(0,ee.default)(I.X).withConfig({displayName:"BagFooter__FiatLoadingBubble",componentId:"sc-2b31ace1-10"})`
  border-radius: 4px;
  width: 4rem;
  height: 20px;
  align-self: end;
`,Te=(0,ee.default)(x.ZP).withConfig({displayName:"BagFooter__PriceImpactContainer",componentId:"sc-2b31ace1-11"})`
  align-items: center;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`,Ae=(0,ee.default)(x.ZP).withConfig({displayName:"BagFooter__PriceImpactRow",componentId:"sc-2b31ace1-12"})`
  align-items: center;
  gap: 8px;
`,_e=(0,ee.default)(oe.Tv.BodyPrimary).withConfig({displayName:"BagFooter__ValueText",componentId:"sc-2b31ace1-13"})`
  line-height: 20px;
  font-weight: 535;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`,Ce=({color:e,children:t})=>t?(0,s.jsxs)(xe,{"data-testid":"nft-buy-button-warning",fontSize:"14px",lineHeight:"20px",$color:e,children:[(0,s.jsx)(me,{}),t]}):null,Ee=({children:e,color:t})=>e?(0,s.jsx)(he,{lineHeight:"16px",$color:t,children:e}):null,be=({usingPayWithAnyToken:e,totalEthPrice:t,activeCurrency:n,tradeState:a,trade:i})=>{const{formatEther:o,formatNumberOrString:c}=(0,te.Gb)();return e?a!==B.qx.LOADING||i?(0,s.jsx)(_e,{color:a===B.qx.LOADING?"neutral3":"neutral1",children:c({input:i?.inputAmount.toExact(),type:te.sw.NFTToken})}):(0,s.jsx)(oe.Tv.BodyPrimary,{color:"neutral3",lineHeight:"20px",fontWeight:"535",children:(0,s.jsx)(r.cC,{id:"hwuHLB"})}):(0,s.jsxs)(oe.Tv.BodyPrimary,{lineHeight:"20px",fontWeight:"535",children:[o({input:t.toString(),type:te.sw.NFTToken}),"\xa0",n?.symbol??"ETH"]})},we=({usdcValue:e,priceImpact:t,tradeState:n,usingPayWithAnyToken:a})=>{const{formatNumberOrString:i}=(0,te.Gb)();return e?(0,s.jsxs)(Te,{children:[t&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(f.ud,{text:d.ag._({id:"KaCkzz"}),children:(0,s.jsxs)(Ae,{children:[(0,s.jsx)(ae.Z,{color:t.priceImpactSeverity.color,size:"16px"}),(0,s.jsxs)(oe.Tv.BodySmall,{style:{color:t.priceImpactSeverity.color},lineHeight:"20px",children:["(",(0,s.jsx)(r.cC,{id:"J/hVSQ",values:{0:t.displayPercentage()}}),")"]})]})})}),(0,s.jsx)(oe.Tv.BodySmall,{color:"neutral3",lineHeight:"20px",children:`${i({input:e?.toExact(),type:te.sw.FiatNFTToken})}`})]}):!a||n!==B.qx.INVALID&&n!==B.qx.NO_ROUTE_FOUND?(0,s.jsx)(Ne,{}):null},ve=[F.s.FETCHING_ROUTE,F.s.CONFIRMING_IN_WALLET,F.s.FETCHING_FINAL_ROUTE,F.s.PROCESSING_TRANSACTION],je=({setModalIsOpen:e,eventProperties:t})=>{const n=(0,u.LK)(),o=(0,ee.useTheme)(),{account:d,chainId:x,connector:I}=(0,l.useWeb3React)(),f=Boolean(d&&x),_=(0,k.P)(),{inputCurrency:D}=Y((({inputCurrency:e})=>({inputCurrency:e}))),U=Y((e=>e.setInputCurrency)),H=(0,E.U8)("ETH"),G=(0,j.mM)(d??void 0,D&&D.isToken?D:void 0),{isLocked:M,bagStatus:W,setBagExpanded:V,setBagStatus:Z}=(0,O.c)((({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s})=>({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s}))),[q,X]=(0,L.useState)(!1),J=ve.includes(W),ae=D??H,me=!!D&&x===T.H.MAINNET,{universalRouterAddress:xe,universalRouterAddressIsLoading:he}=function(){const{data:e,loading:t}=(0,C.Z6)({fetchPolicy:"no-cache"});return{universalRouterAddress:e?.nftRoute?.toAddress,universalRouterAddressIsLoading:t}}();!function(e){const t=(0,$.p)((e=>e.state)),n=(0,$.p)((e=>e.setState)),s=(0,L.useRef)(t),{setBagStatus:r,setLocked:a}=(0,O.c)((({setBagExpanded:e,setBagStatus:t,setLocked:n})=>({setBagExpanded:e,setBagStatus:t,setLocked:n})));(0,L.useEffect)((()=>{$.p.subscribe((e=>s.current=e.state))}),[]),(0,L.useEffect)((()=>{s.current===F.c$.Confirming&&r(F.s.PROCESSING_TRANSACTION),s.current!==F.c$.Denied&&s.current!==F.c$.Invalid||(s.current===F.c$.Invalid?r(F.s.WARNING):r(F.s.CONFIRM_REVIEW),n(F.c$.New),a(!1),e(!1))}),[a,r,e,n,s.current])}(e);const Ne=K(),Te=(0,L.useMemo)((()=>(0,y.Z)((0,c.formatEther)(_.toString()),H??void 0)),[H,_]),{state:Ae,trade:_e,maximumAmountIn:je,allowedSlippage:ye}=function(e,t){const{state:n,trade:s}=(0,S.C)(P.TradeType.EXACT_OUTPUT,t,e??void 0,B.R5.API),r=(0,R.Z)((0,z.pG)(s)?s:void 0),a=(0,L.useMemo)((()=>{const e=s?.maximumAmountIn(r);return e?.currency.isToken?e:void 0}),[r,s]);return(0,L.useMemo)((()=>({state:n,trade:s,maximumAmountIn:a,allowedSlippage:r})),[r,a,n,s])}(me?D:void 0,Te),Oe=(0,b.Z)(je,function(e,t){if(e)return e===T.H.MAINNET?t??(0,A.UNIVERSAL_ROUTER_ADDRESS)(e):(0,N.EC)(e)?(0,A.UNIVERSAL_ROUTER_ADDRESS)(e):void 0}(x,xe),B.d7.Classic),ke=Oe.state===b.K.LOADING||he;Q(_e,Oe,ye);const Pe=function(e){const t=(0,ee.useTheme)(),{formatPercent:n}=(0,te.Gb)();return(0,L.useMemo)((()=>{const s=e?(0,ne.QW)(e):void 0,r=s?(0,ne.BK)(s):void 0,a="error"===r?t.critical:"warning"===r?t.deprecated_accentWarning:void 0;return s&&r&&a?{priceImpactSeverity:{type:r,color:a},displayPercentage:()=>n(s)}:void 0}),[n,t.critical,t.deprecated_accentWarning,e])}(_e),Re=(0,w.sq)(_e?.inputAmount),Se=(0,w.sq)(Te),Le=me?Re:Se,{balance:Be}=(0,re.t)(),ze=(0,L.useMemo)((()=>{if(f&&x===T.H.MAINNET){if(D){const e=_e?.inputAmount;if(!G||!e)return;return!G.lessThan(e)}return(0,c.parseEther)(Be).gte(_)}}),[f,x,D,Be,_,_e?.inputAmount,G]);(0,L.useEffect)((()=>{Z(F.s.ADDING_TO_BAG)}),[D,Z]);const Fe=(0,v.o)(),{buttonText:De,buttonTextColor:Ue,disabled:He,warningText:Ge,warningTextColor:Me,helperText:We,helperTextColor:$e,handleClick:Ve,buttonColor:Ze}=(0,L.useMemo)((()=>{if(f&&x!==T.H.MAINNET){const e=()=>Fe(I,T.H.MAINNET);return ce(se.NOT_SUPPORTED_CHAIN,o,e)}if(!1===ze)return ce(se.INSUFFICIENT_BALANCE,o);if(W===F.s.WARNING)return ce(se.ERROR,o);if(!f){const e=()=>{n(),V({bagExpanded:!1})};return ce(se.WALLET_NOT_CONNECTED,o,e)}if(W===F.s.FETCHING_FINAL_ROUTE||W===F.s.CONFIRMING_IN_WALLET)return ce(se.IN_WALLET_CONFIRMATION,o);if(W===F.s.PROCESSING_TRANSACTION)return ce(se.PROCESSING_TRANSACTION,o);if(me&&Ae!==B.qx.VALID)return Ae===B.qx.INVALID?ce(se.INVALID_TOKEN_ROUTE,o):Ae===B.qx.NO_ROUTE_FOUND?ce(se.NO_TOKEN_ROUTE_FOUND,o):ce(se.FETCHING_TOKEN_ROUTE,o);const e=Oe.state===b.K.REQUIRED,t=()=>e&&Oe.approveAndPermit();return ke?ce(se.LOADING_ALLOWANCE,o,t):e?Oe.isApprovalPending?ce(se.IN_WALLET_ALLOWANCE_APPROVAL,o,t):Oe.isApprovalLoading?ce(se.PROCESSING_APPROVAL,o,t):ce(se.REQUIRE_APPROVAL,o,t):W===F.s.CONFIRM_QUOTE?ce(se.CONFIRM_UPDATED_PRICE,o,Ne):Pe&&"error"===Pe.priceImpactSeverity.type?ce(se.PRICE_IMPACT_HIGH,o,Ne,me,Pe):ce(se.PAY,o,Ne,me)}),[f,x,ze,W,me,Ae,ke,Oe,Pe,o,Ne,Fe,I,n,V]),qe={usd_value:Le?.toExact(),using_erc20:!!D,...t};return(0,s.jsxs)(de,{children:[(0,s.jsxs)(le,{children:[(0,s.jsxs)(ue,{gap:"xs",children:[(0,s.jsxs)(pe,{children:[(0,s.jsx)(p.ZP,{gap:"xs",children:(0,N.EC)(x)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(oe.Tv.SubHeaderSmall,{children:(0,s.jsx)(r.cC,{id:"JQjhrO"})}),(0,s.jsxs)(Ie,{onClick:()=>{M||(X(!0),(0,i._P)(a.Yz.NFT_BUY_TOKEN_SELECTOR_CLICKED))},children:[(0,s.jsx)(m.Z,{currency:ae,size:"24px"}),(0,s.jsx)(oe.Tv.HeadlineSmall,{fontWeight:535,lineHeight:"24px",children:ae?.symbol}),(0,s.jsx)(ie.Z,{size:20,color:o.neutral2})]})]})}),(0,s.jsxs)(ge,{gap:"xs",children:[(0,s.jsx)(oe.Tv.SubHeaderSmall,{children:(0,s.jsx)(r.cC,{id:"72c5Qo"})}),(0,s.jsx)(be,{usingPayWithAnyToken:me,totalEthPrice:_,activeCurrency:ae,tradeState:Ae,trade:_e})]})]}),(0,s.jsx)(we,{usdcValue:Le,priceImpact:Pe,tradeState:Ae,usingPayWithAnyToken:me})]}),(0,s.jsxs)(i.M8,{events:[a.TM.onClick],name:a.Yz.NFT_BUY_BAG_PAY,element:a.xo.NFT_BUY_BAG_PAY_BUTTON,properties:{...qe},shouldLogImpression:f&&!He,children:[(0,s.jsx)(Ce,{color:Me,children:Ge}),(0,s.jsx)(Ee,{color:$e,children:We}),(0,s.jsxs)(fe,{"data-testid":"nft-buy-button",onClick:Ve,disabled:He||J,$backgroundColor:Ze,$color:Ue,children:[J&&(0,s.jsx)(g.ZP,{size:"20px",stroke:"white"}),De]})]})]}),(0,s.jsx)(h.Z,{isOpen:q,onDismiss:()=>X(!1),onCurrencySelect:e=>{U(e.isNative?void 0:e),e.isToken&&(0,i._P)(a.Yz.NFT_BUY_TOKEN_SELECTED,{token_address:e.address,token_symbol:e.symbol})},selectedCurrency:ae??void 0,onlyShowCurrenciesWithBalance:!0})]})};var ye=n(85038),Oe=n(55867),ke=n(2994),Pe=n(54212),Re=n(5658),Se=n(437),Le=(n(84137),n(86003)),Be=n(56878),ze=n(60198);const Fe=ee.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,De=ee.default.circle.withConfig({displayName:"TimedLoader__Circle",componentId:"sc-40ed38f8-0"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${Fe} linear;
  animation: ${Fe} linear;
  animation-duration: 160s;
  stroke: ${({theme:e})=>e.accent1};
`,Ue=()=>(0,s.jsx)(ye.n,{display:"flex",position:"absolute",children:(0,s.jsx)("svg",{height:"18px",width:"18px",children:(0,s.jsx)(De,{strokeWidth:"1.5",strokeLinecap:"round",style:{transform:"rotate(90deg)",transformOrigin:"50% 50%"},fill:"transparent",r:"8px",cx:"9px",cy:"9px"})})});var He=n(83164),Ge=n(26030),Me=n(15655),We=n(70453),$e=n(41440),Ve=(n(46912),"_1kuawcb rgw6ezbg rgw6ezda rgw6ez8d0 rgw6ez45s rgw6ez45m"),Ze="_1kuawc1 rgw6ez2ds rgw6ez2ja rgw6ez2og rgw6ez27y rgw6ez4ba rgw6ez3tg rgw6ez80w rgw6ez1ds rgw6ez82g",qe="rgw6ez14a rgw6ez1ba rgw6ez49m rgw6ez828",Ye="rgw6ezd4 rgw6ezba rgw6eze4 rgw6ez8d0 rgw6ez45m rgw6ez45s rgw6ez4bg",Ke="_1kuawc7",Xe="rgw6ez3xs";const Je=(0,ee.default)(ze.UH).withConfig({displayName:"BagRow__RemoveButton",componentId:"sc-2ecf14d3-0"})`
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  margin-left: 16px;
  padding: 12px 14px;
`,Qe=(0,ee.default)(ze.UH).withConfig({displayName:"BagRow__ReviewButton",componentId:"sc-2ecf14d3-1"})`
  border-radius: 12px;
  flex: 1 1 auto;
  font-size: 14px;
  padding: 8px;
  width: 50%;
`,et=ee.default.div.withConfig({displayName:"BagRow__RemoveAssetOverlay",componentId:"sc-2ecf14d3-2"})`
  position: absolute;
  display: block;
  right: -11px;
  top: -11px;
  z-index: 1;
  transition: 250ms;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`,tt=({onClick:e})=>(0,s.jsx)(et,{onClick:e,children:(0,s.jsx)(Ge.Xv,{})}),nt=()=>(0,s.jsx)(ye.n,{position:"relative",background:"loadingBackground",className:qe,children:(0,s.jsxs)(ye.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"book",children:["Image",(0,s.jsx)("br",{}),"not",(0,s.jsx)("br",{}),"available"]})}),st=({asset:e,usdPrice:t,removeAsset:n,showRemove:r,grayscale:a,isMobile:i})=>{const{formatEther:o,formatNumberOrString:d}=(0,te.Gb)(),[l,u]=(0,L.useState)(!1),[p,g]=(0,L.useState)(!e.smallImageUrl),[m,x]=(0,L.useState)(!1),h=(0,L.useCallback)((()=>x(!0)),[]),I=(0,L.useCallback)((()=>x(!1)),[]),f=Boolean(r&&m&&!i),N=e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,T=o({input:N,type:te.sw.NFTToken}),A=d({input:t?parseFloat((0,c.formatEther)(N))*t:t,type:te.sw.FiatNFTToken}),_=(0,L.useCallback)((t=>{t.preventDefault(),t.stopPropagation(),n([e])}),[e,n]);return(0,s.jsx)($e.rU,{to:(0,D.PZ)(e),style:{textDecoration:"none"},children:(0,s.jsxs)(ke.X2,{className:Ze,onMouseEnter:h,onMouseLeave:I,children:[(0,s.jsxs)(ye.n,{position:"relative",display:"flex",children:[r&&i&&(0,s.jsx)(tt,{onClick:_}),!p&&(0,s.jsx)(ye.n,{as:"img",src:e.smallImageUrl,alt:e.name,className:(0,Be.default)(qe,a&&!m&&Ke),onLoad:()=>{u(!0)},onError:()=>{g(!0)},visibility:l?"visible":"hidden"}),!l&&(0,s.jsx)(ye.n,{position:"absolute",className:`${qe} ${We.L}`}),p&&(0,s.jsx)(nt,{})]}),(0,s.jsxs)(ke.sg,{overflow:"hidden",width:"full",color:a?"neutral2":"neutral1",children:[(0,s.jsxs)(ke.X2,{overflow:"hidden",width:"full",whiteSpace:"nowrap",children:[(0,s.jsx)(ye.n,{className:Ve,children:e.name??`#${e.tokenId}`}),e.susFlag&&(0,s.jsx)(He.yT,{})]}),(0,s.jsxs)(ke.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(ye.n,{className:Ye,children:e.collectionName}),e.collectionIsVerified&&(0,s.jsx)(Ge.SA,{className:Xe})]})]}),f&&(0,s.jsx)(Je,{onClick:_,emphasis:ze.eI.medium,size:ze.qE.medium,children:"Remove"}),(!f||i)&&(0,s.jsxs)(ke.sg,{flexShrink:"0",alignItems:"flex-end",children:[(0,s.jsxs)(ye.n,{className:"_1kuawc9 rgw6ez3ss rgw6ezbg rgw6ezda rgw6ez3xs",children:[T,"\xa0ETH"]}),(0,s.jsx)(ye.n,{className:Ye,children:A})]})]})})},rt=({asset:e,usdPrice:t,markAssetAsReviewed:n,top:r,isMobile:a})=>{const{formatEther:i}=(0,te.Gb)(),o=Le.O$.from(e.updatedPriceInfo?.ETHPrice).gt(Le.O$.from(e.priceInfo.ETHPrice)),c=(0,L.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!1)}),[e,n]),d=(0,L.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!0)}),[e,n]);return(0,s.jsxs)(ke.sg,{className:"rgw6ez2p4 rgw6ez28m rgw6ezlg rgw6ezqy rgw6ez4v4 rgw6ez3t4 rgw6ez4ba rgw6ez818 rgw6ez8ao rgw6ez59s rgw6ez5zg rgw6ez1ds rgw6ez80w",borderTopColor:r?"surface3":"transparent",children:[(0,s.jsxs)(ke.X2,{className:"rgw6ezd4 rgw6ezba rgw6eze4 rgw6ez4ds rgw6ez3ss",children:[o?(0,s.jsx)(Ge.PH,{}):(0,s.jsx)(Ge.HE,{}),(0,s.jsx)(ye.n,{children:`Price ${o?"increased":"decreased"} from ${i({input:e.priceInfo.ETHPrice,type:te.sw.NFTToken})} ETH`})]}),(0,s.jsx)(ye.n,{style:{marginLeft:"-8px",marginRight:"-8px"},children:(0,s.jsx)(st,{asset:e,usdPrice:t,removeAsset:()=>{},isMobile:a})}),(0,s.jsxs)(ke.X2,{gap:"8",justifyContent:"space-between",children:[(0,s.jsx)(Qe,{onClick:c,emphasis:ze.eI.medium,size:ze.qE.small,children:"Remove"}),(0,s.jsx)(Qe,{onClick:d,emphasis:ze.eI.high,size:ze.qE.small,children:"Keep"})]})]})},at=({assets:e})=>(0,s.jsx)(ke.sg,{display:"grid",style:{gridTemplateColumns:`repeat(${e.length}, 20px)`,width:32+20*(e.length-1)+"px"},children:e.map(((e,t)=>(0,s.jsx)(ye.n,{as:"img",src:e.smallImageUrl,width:"32",height:"32",borderStyle:"solid",borderWidth:"1px",borderColor:"surface1",borderRadius:"4",style:{zIndex:t},className:Ke},`${e.address}-${e.tokenId}`)))}),it=({assets:e,usdPrice:t,clearUnavailableAssets:n,didOpenUnavailableAssets:r,setDidOpenUnavailableAssets:a,isMobile:i})=>{const[o,c]=(0,L.useReducer)((e=>!e),!1),[d,l]=(0,L.useState)(8);if((0,L.useEffect)((()=>{if(!d)return void(r||(n(),a(!1)));const e=setInterval((()=>{l(d-1)}),1e3);return()=>clearInterval(e)}),[d,n,r,a]),!e||0===e.length)return null;const u=e.length>1,p=o||!u;return(0,s.jsx)(ke.sg,{className:"rgw6ez2p4 rgw6ez28m rgw6ezlg rgw6ezqy rgw6ez4v4 rgw6ez3tg rgw6ez4ba rgw6ez818 rgw6ez8ao rgw6ez59s rgw6ez6ea rgw6ez5zg rgw6ez1ds",children:(0,s.jsxs)(ke.sg,{children:[(0,s.jsxs)(ke.X2,{justifyContent:"space-between",marginBottom:p?"12":"0",cursor:u?"pointer":"default",onClick:()=>{u&&(!r&&a(!0),c())},children:[(0,s.jsxs)(ke.X2,{gap:"12",color:"neutral2",className:Me.Km,children:[!p&&(0,s.jsx)(at,{assets:e.slice(0,5)}),"No longer available"]}),u&&(0,s.jsx)(ke.X2,{color:"neutral2",children:o?(0,s.jsx)(Ge.X_,{}):(0,s.jsx)(Ge.Xs,{})}),!r&&(0,s.jsxs)(ke.X2,{position:"relative",width:"20",height:"20",color:"neutral1",justifyContent:"center",cursor:"pointer",onClick:n,children:[(0,s.jsx)(Ue,{}),(0,s.jsx)(Ge.Nb,{})]})]}),(0,s.jsx)(ke.sg,{gap:"8",style:{marginLeft:"-8px",marginRight:"-8px"},children:p&&e.map((e=>(0,s.jsx)(st,{asset:e,usdPrice:t,removeAsset:()=>{},grayscale:!0,isMobile:i},e.id)))})]})})},ot=()=>{const e=(0,Re.cP)((e=>e.bagStatus)),t=(0,Re.cP)((e=>e.setBagStatus)),n=(0,Re.cP)((e=>e.markAssetAsReviewed)),r=(0,Re.cP)((e=>e.didOpenUnavailableAssets)),o=(0,Re.cP)((e=>e.setDidOpenUnavailableAssets)),c=(0,Re.cP)((e=>e.itemsInBag)),d=(0,Re.cP)((e=>e.setItemsInBag)),l=(0,Re.cP)((e=>e.removeAssetsFromBag)),u=(0,Re.dD)(),p=(0,L.useMemo)((()=>(0,D.G7)(c)),[c]),g=(0,Re.$N)(),{unchangedAssets:m,priceChangedAssets:x,unavailableAssets:h,availableItems:I}=(0,L.useMemo)((()=>({unchangedAssets:p.filter((e=>e.status===F.ZJ.ADDED_TO_BAG||e.status===F.ZJ.REVIEWED)).map((e=>e.asset)),priceChangedAssets:p.filter((e=>e.status===F.ZJ.REVIEWING_PRICE_CHANGE)).map((e=>e.asset)),unavailableAssets:p.filter((e=>e.status===F.ZJ.UNAVAILABLE)).map((e=>e.asset)),availableItems:p.filter((e=>e.status!==F.ZJ.UNAVAILABLE))})),[p]);return(0,L.useEffect)((()=>{const n=x.length>0,s=p.length>0;n&&(0,i._P)(a.Yz.NFT_BUY_BAG_CHANGED,{usd_value:g,bag_quantity:p,...(0,D.Hj)(x)}),e!==F.s.IN_REVIEW||n||t(s?F.s.CONFIRM_REVIEW:F.s.ADDING_TO_BAG),e!==F.s.CONFIRM_REVIEW||s||t(F.s.ADDING_TO_BAG)}),[e,p,x,t,g]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(ke.sg,{display:x.length>0||h.length>0?"flex":"none",children:[h.length>0&&(0,s.jsx)(i.fM,{name:a.Yz.NFT_BUY_BAG_CHANGED,properties:{usd_value:g,bag_quantity:p.length,...(0,D.Hj)(h)},shouldLogImpression:!0,children:(0,s.jsx)(it,{assets:h,usdPrice:g,clearUnavailableAssets:()=>d(I),didOpenUnavailableAssets:r,setDidOpenUnavailableAssets:o,isMobile:u})}),x.map(((e,t)=>(0,s.jsx)(rt,{asset:e,usdPrice:g,markAssetAsReviewed:n,top:0===t&&0===h.length,isMobile:u},e.id)))]}),(0,s.jsx)(ke.sg,{children:m.slice(0).reverse().map((e=>(0,s.jsx)(st,{asset:e,usdPrice:g,removeAsset:l,showRemove:!0,isMobile:u},e.id)))})]})};var ct=n(62329);const dt=(0,ee.default)(oe.oD).withConfig({displayName:"BagHeader__ClearButton",componentId:"sc-feee1033-0"})`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;

  :active {
    text-decoration: none;
  }
`,lt=ee.default.button.withConfig({displayName:"BagHeader__IconWrapper",componentId:"sc-feee1033-1"})`
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  padding: 2px;
  opacity: 1;

  ${ct.c}
`,ut=ee.default.div.withConfig({displayName:"BagHeader__CounterDot",componentId:"sc-feee1033-2"})`
  align-items: center;
  background-color: ${({theme:e})=>e.accent1};
  border-radius: 100px;
  font-weight: bold;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  display: flex;
  font-size: 10px;
  justify-content: center;
  min-width: ${({sizing:e})=>e};
  min-height: ${({sizing:e})=>e};
  padding: 4px 6px;
`,pt=ee.default.div.withConfig({displayName:"BagHeader__Wrapper",componentId:"sc-feee1033-3"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  margin: 16px 28px;
  text-align: center;
`,gt=({numberOfAssets:e,closeBag:t,resetFlow:n,isProfilePage:a})=>{const i=(0,L.useMemo)((()=>(e=>17+6*e.toString().length+"px")(e)),[e]);return(0,s.jsxs)(pt,{children:[(0,s.jsx)(oe.Tv.HeadlineSmall,{children:a?(0,s.jsx)(r.cC,{id:"xNB0TS"}):(0,s.jsx)(r.cC,{id:"EnO7qf"})}),e>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ut,{sizing:i,children:e}),(0,s.jsx)(dt,{onClick:n,children:(0,s.jsx)(r.cC,{id:"yYxB17"})})]}),(0,s.jsx)(lt,{onClick:t,children:(0,s.jsx)(Ge.BW,{"data-testid":"nft-bag-close-icon"})})]})};var mt=n(17669);const xt=(0,ee.default)(ke.sg).withConfig({displayName:"EmptyContent__StyledColumn",componentId:"sc-3568c728-0"})`
  gap: 12px;
  margin-top: 68px;
`;var ht=()=>{const e=(0,o.e5)();return(0,s.jsxs)(xt,{children:[(0,s.jsx)(ke.M5,{children:e?(0,s.jsx)(Ge.JP,{color:mt.Z4.colors.neutral3}):(0,s.jsx)(Ge.Ln,{color:mt.Z4.colors.neutral3,height:"96px",width:"96px",strokeWidth:"1px"})}),e?(0,s.jsx)(ke.M5,{"data-testid":"nft-no-nfts-selected",className:Me.v4,children:"No NFTs selected"}):(0,s.jsxs)(ke.sg,{gap:"16",children:[(0,s.jsx)(ke.M5,{"data-testid":"nft-empty-bag",className:Me.v4,style:{lineHeight:"24px"},children:"Your bag is empty"}),(0,s.jsx)(ke.M5,{fontSize:"12",fontWeight:"book",color:"neutral2",style:{lineHeight:"16px"},children:"Selected NFTs will appear here"})]})]})};var It=({asset:e})=>{const t=(0,Re.Pc)((e=>e.removeSellAsset)),n=(0,Re.dD)(),[r,a]=(0,L.useState)(!1),i=()=>a(!r),o=n=>{n.preventDefault(),n.stopPropagation(),t(e)};return(0,s.jsxs)(ke.X2,{className:Ze,onMouseEnter:i,onMouseLeave:i,children:[(0,s.jsxs)(ye.n,{position:"relative",display:"flex",children:[n&&(0,s.jsx)(tt,{onClick:o}),(0,s.jsx)("img",{src:e.smallImageUrl,alt:e.name,className:qe})]}),(0,s.jsxs)(ke.sg,{overflow:"hidden",width:"full",color:"neutral1",children:[(0,s.jsx)(ke.X2,{overflow:"hidden",width:"full",justifyContent:"space-between",whiteSpace:"nowrap",gap:"16",children:(0,s.jsx)(ye.n,{className:Ve,children:e.name||`#${e.tokenId}`})}),(0,s.jsxs)(ke.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(ye.n,{className:Ye,children:e.asset_contract.name}),e.collectionIsVerified&&(0,s.jsx)(Ge.SA,{className:Xe})]})]}),r&&!n&&(0,s.jsx)(Je,{onClick:o,emphasis:ze.eI.medium,size:ze.qE.medium,children:"Remove"})]})};const ft=()=>{const e=(0,Re.Pc)((e=>e.sellAssets));return(0,s.jsx)(ke.sg,{children:e.length?e.map(((e,t)=>(0,s.jsx)(It,{asset:e},t))):null})},Nt=320,Tt=360,At=ee.default.div.withConfig({displayName:"Bag__BagContainer",componentId:"sc-83712a43-0"})`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 88px;
  right: 20px;
  width: ${Nt}px;
  height: calc(100vh - 108px);
  background: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  z-index: ${({raiseZIndex:e,isProfilePage:t})=>e?t?Se.k.modalOverTooltip:Se.k.modalBackdrop-1:3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    border: none;
  }

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${Tt}px;
  }
`,_t=ee.default.div.withConfig({displayName:"Bag__DetailsPageBackground",componentId:"sc-83712a43-1"})`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0px;
  width: 100%;
  height: 100%;
`,Ct=ee.default.div.withConfig({displayName:"Bag__ContinueButton",componentId:"sc-83712a43-2"})`
  background: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  margin: 32px 28px 16px;
  padding: 10px 0px;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transition.duration.medium};

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Et=({top:e,show:t})=>(0,s.jsx)(ye.n,{marginX:"24",borderWidth:"1px",borderStyle:"solid",borderColor:"transparent",borderTopColor:e?"transparent":"surface3",borderBottomColor:e?"surface3":"transparent",opacity:t?"1":"0",transition:"250"});var bt=()=>{const{resetSellAssets:e,sellAssets:t}=(0,Re.Pc)((({reset:e,sellAssets:t})=>({resetSellAssets:e,sellAssets:t}))),{setProfilePageState:n}=(0,Re.aO)((({setProfilePageState:e})=>({setProfilePageState:e}))),{bagStatus:c,bagIsLocked:d,reset:l,bagExpanded:u,toggleBag:p,setBagExpanded:g}=(0,Re.cP)((e=>({...e,bagIsLocked:e.isLocked,uncheckedItemsInBag:e.itemsInBag}))),{uncheckedItemsInBag:m}=(0,Re.cP)((({itemsInBag:e})=>({uncheckedItemsInBag:e}))),x=(0,o.e5)(),h=(0,o._3)(),I=(0,o.GZ)(),f=(0,Re.dD)(),N=(0,L.useMemo)((()=>(0,D.G7)(m)),[m]),[T,A]=(0,L.useState)(!1),{userCanScroll:_,scrollRef:C,scrollProgress:E,scrollHandler:b}=(0,Re.uh)(),w=(0,L.useCallback)((()=>{g({bagExpanded:!1,manualClose:!0})}),[g]);(0,L.useEffect)((()=>{d&&!T&&A(!0)}),[d,T]);const v=N.length>0,j=N.length>0,y=t.length>0,O=Boolean(!x&&!j&&c===F.s.ADDING_TO_BAG||x&&!y),k=(0,L.useMemo)((()=>({...(0,D.Hj)(N.map((e=>e.asset)))})),[N]);return u&&I?(0,s.jsxs)(Oe.h,{children:[(0,s.jsxs)(At,{"data-testid":"nft-bag",raiseZIndex:f||T,isProfilePage:x,children:[(0,s.jsx)(gt,{numberOfAssets:x?t.length:N.length,closeBag:w,resetFlow:x?e:l,isProfilePage:x}),O&&(0,s.jsx)(ht,{}),(0,s.jsx)(Et,{top:!0,show:_&&E>0}),(0,s.jsx)(ke.sg,{ref:C,className:"_1jcz50r1 rgw6ez2eg rgw6ez2jy rgw6ez1ys rgw6ez8ec",onScroll:b,gap:"12",children:x?(0,s.jsx)(ft,{}):(0,s.jsx)(ot,{})}),v&&!x&&(0,s.jsx)(je,{setModalIsOpen:A,eventProperties:k}),y&&x&&(0,s.jsx)(Ct,{onClick:()=>{p(),n(F.HA.LISTING),(0,i._P)(a.Yz.NFT_PROFILE_PAGE_START_SELL,{list_quantity:t.length,collection_addresses:t.map((e=>e.asset_contract.address)),token_ids:t.map((e=>e.tokenId))})},children:(0,s.jsx)(r.cC,{id:"xGVfLh"})})]}),h?(0,s.jsx)(_t,{onClick:p}):T&&(0,s.jsx)(Pe.a,{onClick:()=>d?void 0:A(!1)})]}):null}},54212:function(e,t,n){n.d(t,{a:function(){return o},U:function(){return i}});var s=n(42893),r=n(42826),a=n(85038);n(84137);const i=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},o=({onClick:e=r.Z})=>(0,s.jsx)(a.n,{className:"_199qdl71 rgw6ez3f4 rgw6ez344 rgw6ez17m rgw6ez1eg rgw6ez48s rgw6ez44m rgw6ez4ua",onClick:e})},50026:function(e,t,n){n.d(t,{B:function(){return p},P:function(){return u}});var s=n(86003),r=n(69867),a=n(15627),i=n(95202),o=n(4572),c=n(1004),d=n(13712),l=n(98841);function u(){const e=(0,l.c)((e=>e.itemsInBag));return(0,d.useMemo)((()=>e.reduce(((e,t)=>t.status!==c.ZJ.UNAVAILABLE?e.add(s.O$.from(t.asset.updatedPriceInfo?t.asset.updatedPriceInfo.ETHPrice:t.asset.priceInfo.ETHPrice)):e),s.O$.from(0))),[e])}function p(){const e=u(),t=(0,a.U8)("ETH"),n=(0,d.useMemo)((()=>(0,o.Z)((0,r.formatEther)(e.toString()),t??void 0)),[t,e]),s=(0,i.sq)(n);return(0,d.useMemo)((()=>s?.toExact()),[s])}}}]);
//# sourceMappingURL=7790.8e976f9e.chunk.js.map