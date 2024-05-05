"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6154],{63548:function(e,t,n){n.d(t,{Z:function(){return O}});var i=n(42893),a=n(12204),s=n(19903),o=n(80815),r=n(66196),d=n(13119),l=n(92483),c=n(48141),p=n(40508),u=n(13712),m=n(87253),h=n(39839),f=n(47371),g=n(57482),x=n(44326),y=n(42881),b=n(60198),j=n(45533),C=n(56823),v=n(48972),w=n(2304),T=n(20437),I=n(925);const E=m.default.div.withConfig({displayName:"CurrencyInputPanel__InputPanel",componentId:"sc-3db49bc3-0"})`
  ${f.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:t})=>t?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,N=m.default.div.withConfig({displayName:"CurrencyInputPanel__Container",componentId:"sc-3db49bc3-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:t,disabled:n})=>!n&&`\n    :focus,\n    :hover {\n      border: 1px solid ${t?" transparent":e.surface2};\n    }\n  `}
`,_=(0,m.default)(b.Ux).withConfig({displayName:"CurrencyInputPanel__CurrencySelect",componentId:"sc-3db49bc3-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:t})=>e?t.surface1:t.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:t})=>e?t.neutral1:t.white};
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
    background-color: ${({selected:e,theme:t})=>e?t.surface2:(0,p._j)(.05,t.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,D=m.default.div.withConfig({displayName:"CurrencyInputPanel__InputRow",componentId:"sc-3db49bc3-3"})`
  ${f.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,S=m.default.div.withConfig({displayName:"CurrencyInputPanel__LabelRow",componentId:"sc-3db49bc3-4"})`
  ${f.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,p._j)(.2,e.neutral2)};
  }
`,k=(0,m.default)(S).withConfig({displayName:"CurrencyInputPanel__FiatRow",componentId:"sc-3db49bc3-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,A=m.default.span.withConfig({displayName:"CurrencyInputPanel__Aligner",componentId:"sc-3db49bc3-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,P=(0,m.default)(x.r).withConfig({displayName:"CurrencyInputPanel__StyledDropDown",componentId:"sc-3db49bc3-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:t})=>e?t.neutral1:t.white};
    stroke-width: 1.5px;
  }
`,M=m.default.span.withConfig({displayName:"CurrencyInputPanel__StyledTokenName",componentId:"sc-3db49bc3-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
`,R=m.default.button.withConfig({displayName:"CurrencyInputPanel__StyledBalanceMax",componentId:"sc-3db49bc3-9"})`
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
`,$=(0,m.default)(v.I).withConfig({displayName:"CurrencyInputPanel__StyledNumericalInput",componentId:"sc-3db49bc3-10"})`
  ${d._Q};
  text-align: left;
`,W=(0,m.default)(l.Z).withConfig({displayName:"CurrencyInputPanel__StyledPrefetchBalancesWrapper",componentId:"sc-3db49bc3-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function O({value:e,onUserInput:t,onMax:n,showMaxButton:l,onCurrencySelect:p,currency:f,otherCurrency:x,id:b,showCommonBases:v,showCurrencyAmount:S,disableNonToken:O,renderBalance:U,fiatValue:L,hideBalance:V=!1,pair:z=null,hideInput:B=!1,locked:F=!1,loading:H=!1,...G}){const[Z,q]=(0,u.useState)(!1),{account:Y,chainId:Q}=(0,o.useWeb3React)(),K=(0,y._h)(Y??void 0,f??void 0),X=(0,m.useTheme)(),{formatCurrencyAmount:J}=(0,g.Gb)(),ee=(0,u.useCallback)((()=>{q(!1)}),[q]),te=(0,c.EC)(Q);return(0,i.jsxs)(E,{id:b,hideInput:B,...G,children:[!F&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(N,{hideInput:B,disabled:!te,children:[(0,i.jsxs)(D,{style:B?{padding:"0",borderRadius:"8px"}:{},selected:!p,children:[!B&&(0,i.jsx)($,{className:"token-amount-input",value:e,onUserInput:t,disabled:!te,$loading:H}),(0,i.jsx)(W,{shouldFetchOnAccountUpdate:Z,$fullWidth:B,children:(0,i.jsx)(_,{disabled:!te,visible:void 0!==f,selected:!!f,hideInput:B,className:"open-currency-select-button",onClick:()=>{p&&q(!0)},pointerEvents:p?void 0:"none",children:(0,i.jsxs)(A,{children:[(0,i.jsxs)(w.DA,{children:[z?(0,i.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,i.jsx)(j.Z,{currency0:z.token0,currency1:z.token1,size:24,margin:!0})}):f&&(0,i.jsx)(C.Z,{style:{marginRight:"0.5rem"},currency:f,size:"24px"}),z?(0,i.jsxs)(M,{className:"pair-name-container",children:[z?.token0.symbol,":",z?.token1.symbol]}):(0,i.jsx)(M,{className:"token-symbol-container",active:Boolean(f&&f.symbol),children:(f&&f.symbol&&f.symbol.length>20?f.symbol.slice(0,4)+"..."+f.symbol.slice(f.symbol.length-5,f.symbol.length):f?.symbol)||(0,i.jsx)(a.cC,{id:"T0Y2+3"})})]}),p&&(0,i.jsx)(P,{selected:!!f})]})})})]}),Boolean(!B&&!V&&f)&&(0,i.jsx)(k,{children:(0,i.jsxs)(w.m0,{children:[(0,i.jsx)(d.EG,{$loading:H,children:L&&(0,i.jsx)(I.x,{fiatValue:L})}),Y&&(0,i.jsxs)(w.DA,{style:{height:"17px"},children:[(0,i.jsx)(h.Tv.DeprecatedBody,{onClick:n,color:X.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!V&&f&&K)&&(U?.(K)||(0,i.jsx)(a.cC,{id:"VuFd5C",values:{0:J({amount:K,type:g.sw.TokenNonTx})}}))}),Boolean(l&&K)&&(0,i.jsx)(r.M8,{events:[s.TM.onClick],name:s.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:s.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,i.jsx)(R,{onClick:n,children:(0,i.jsx)(a.cC,{id:"4HtGBb"})})})]})]})})]})}),p&&(0,i.jsx)(T.Z,{isOpen:Z,onDismiss:ee,onCurrencySelect:p,selectedCurrency:f,otherSelectedCurrency:x,showCommonBases:v,showCurrencyAmount:S,disableNonToken:O})]})}},86299:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(42893),a=n(15387),s=n(44998),o=n.n(s);const r=new a.Fraction(o().BigInt(1),o().BigInt(1e6));function d({currencyAmount:e,significantDigits:t=4}){return(0,i.jsx)(i.Fragment,{children:e.equalTo(o().BigInt(0))?"0":e.greaterThan(r)?e.toSignificant(t):`<${r.toSignificant(1)}`})}},19969:function(e,t,n){n.d(t,{SS:function(){return m},sq:function(){return l},MN:function(){return c},RF:function(){return p},uO:function(){return u},I8:function(){return d}});var i=n(87253),a=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",s=n.p+"static/media/noise.3c7efafc83614205bd1a.png",o=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png",r=n(60476);const d=(0,i.default)(r.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,l=i.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
  background: url(${a});
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
`,c=i.default.span.withConfig({displayName:"styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${o});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,p=i.default.span.withConfig({displayName:"styled__CardNoise",componentId:"sc-6a13bc9-3"})`
  background: url(${s});
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
`,u=(0,i.default)(r.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,m=i.default.div.withConfig({displayName:"styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},72714:function(e,t,n){n.d(t,{Z:function(){return r},e:function(){return o}});var i=n(42893),a=n(87253),s=n(437);const o=a.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
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
  z-index: ${s.k.default};
`;function r(e){return(0,i.jsx)(o,{...e})}},55494:function(e,t,n){n.d(t,{DC:function(){return r},ER:function(){return d},bb:function(){return l},im:function(){return o},pr:function(){return c}});var i=n(13119),a=n(47096),s=n(87253);const o=s.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,r=(0,s.default)(a.xv).withConfig({displayName:"styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,d=s.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
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
`,l=s.default.span.withConfig({displayName:"styled__Dots",componentId:"sc-bfb6c8b8-3"})`
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
`,c=(0,s.default)(i.pr).withConfig({displayName:"styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
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
`},6942:function(e,t,n){n.r(t),n.d(t,{default:function(){return vn}});var i=n(42893),a=n(7571),s=n(23586),o=n(12204),r=n(19903),d=n(80815),l=n(66196),c=n(60198),p=n(42246),u=n(60476),m=n(44998),h=n.n(m),f=n(4572),g=n(55494),x=n(13712),y=n(46591),b=n(41440),j=n(45433),C=n(57246),v=n(30476),w=n(14014),T=n(80638),I=n(15387),E=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldImplementation","type":"address"},{"indexed":false,"internalType":"address","name":"newImplementation","type":"address"}],"name":"NewImplementation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"proposer","type":"address"},{"indexed":false,"internalType":"address[]","name":"targets","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"},{"indexed":false,"internalType":"string[]","name":"signatures","type":"string[]"},{"indexed":false,"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"ProposalCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"eta","type":"uint256"}],"name":"ProposalQueued","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldProposalThreshold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newProposalThreshold","type":"uint256"}],"name":"ProposalThresholdSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"support","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"votes","type":"uint256"},{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"VoteCast","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldVotingDelay","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVotingDelay","type":"uint256"}],"name":"VotingDelaySet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldVotingPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVotingPeriod","type":"uint256"}],"name":"VotingPeriodSet","type":"event"},{"constant":true,"inputs":[],"name":"BALLOT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_PROPOSAL_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_VOTING_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_VOTING_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_PROPOSAL_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_VOTING_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_VOTING_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalCount","type":"uint256"}],"name":"_initiate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newProposalThreshold","type":"uint256"}],"name":"_setProposalThreshold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newVotingDelay","type":"uint256"}],"name":"_setVotingDelay","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newVotingPeriod","type":"uint256"}],"name":"_setVotingPeriod","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"}],"name":"castVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"castVoteBySig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"string","name":"reason","type":"string"}],"name":"castVoteWithReason","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"execute","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"getActions","outputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"address","name":"voter","type":"address"}],"name":"getReceipt","outputs":[{"components":[{"internalType":"bool","name":"hasVoted","type":"bool"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"uint96","name":"votes","type":"uint96"}],"internalType":"struct GovernorBravoDelegateStorageV1.Receipt","name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initialProposalId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"timelock_","type":"address"},{"internalType":"address","name":"uni_","type":"address"},{"internalType":"uint256","name":"votingPeriod_","type":"uint256"},{"internalType":"uint256","name":"votingDelay_","type":"uint256"},{"internalType":"uint256","name":"proposalThreshold_","type":"uint256"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"latestProposalIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalMaxOperations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposals","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"proposer","type":"address"},{"internalType":"uint256","name":"eta","type":"uint256"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"uint256","name":"forVotes","type":"uint256"},{"internalType":"uint256","name":"againstVotes","type":"uint256"},{"internalType":"uint256","name":"abstainVotes","type":"uint256"},{"internalType":"bool","name":"canceled","type":"bool"},{"internalType":"bool","name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"internalType":"string","name":"description","type":"string"}],"name":"propose","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"queue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"quorumVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"state","outputs":[{"internalType":"enum GovernorBravoDelegateStorageV1.ProposalState","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"timelock","outputs":[{"internalType":"contract TimelockInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"uni","outputs":[{"internalType":"contract UniInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votingDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]'),N=n(45492);const _={[N.H.MAINNET]:{[I.UNI_ADDRESSES[N.H.MAINNET]]:"UNI",[I.TIMELOCK_ADDRESSES[N.H.MAINNET]]:"Timelock",[I.GOVERNANCE_ALPHA_V0_ADDRESSES[N.H.MAINNET]]:"Governance (V0)",[I.GOVERNANCE_ALPHA_V1_ADDRESSES[N.H.MAINNET]]:"Governance (V1)",[I.GOVERNANCE_BRAVO_ADDRESSES[N.H.MAINNET]]:"Governance","0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e":"ENS Registry","0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41":"ENS Public Resolver","0xf754A7E347F81cFdc70AF9FbCCe9Df3D826360FA":"Franchiser Factory"}},D=12,S={1:D},k=2,A="Should Uniswap v3 be deployed to Polygon?",P="# Uniswap Grants Program v0.1\n\n*co-authored with [Ken Ng](https://twitter.com/nkennethk?lang=en)*\n\n## Summary:\n\n**This post outlines a framework for funding Uniswap ecosystem development with grants from the[ UNI Community Treasury](https://uniswap.org/blog/uni/).** The program starts small\u2014sponsoring hackathons, [for example](https://gov.uniswap.org/c/proposal-discussion/5)\u2014but could grow in significance over time (with renewals approved by governance) to fund core protocol development. Grants administration is a subjective process that cannot be easily automated, and thus we propose a nimble committee of 6 members \u20141 lead and 5 reviewers\u2014to deliver an efficient, predictable process to applicants, such that funding can be administered without having to put each application to a vote. We propose the program start with an initial cap of $750K per quarter and a limit of 2 quarters before renewal\u2014a sum that we feel is appropriate for an MVP relative to the size of the treasury that UNI token holders are entrusted with allocating.\n\n**Purpose:**\n\n**The mission of the UGP is to provide valuable resources to help grow the Uniswap ecosystem.** Through public discourse and inbound applications, the community will get first-hand exposure to identify and respond to the most pressing needs of the ecosystem, as well as the ability to support innovative projects expanding the capabilities of Uniswap. By rewarding talent early with developer incentives, bounties, and infrastructure support, UGP acts as a catalyst for growth and helps to maintain Uniswap as a nexus for DeFi on Ethereum.\n\n**Quarterly Budget:**\n\n* Max quarterly budget of up to $750k\n* Budget and caps to be assessed every six months\n\n**Grant Allocation Committee:**\n\n* Of 6 committee members: 1 lead and 5 reviewers\n* Each committee has a term of 2 quarters (6 months) after which the program needs to be renewed by UNI governance\n* Committee functions as a 4 of 5 multi-sig\n\n**Committee Members**\n\nWhile the goals and priorities of the grant program will be thoroughly discussed and reviewed by the community through public discourse, **the decision to start UGP by operating as a small committee is to ensure that the application and decision process will be efficient and predictable, so applicants have clear objectives and timely decisions.**\n\nStarting with just six members enables the committee to efficiently fund projects with tight feedback loops and rapid iterations. The purpose of this committee would be to test the hypothesis that the Grants Program can successfully provide value for the UNI ecosystem before scaling the program.\n\n**We suggest the grants program is administered by a single lead. Here we propose Kenneth Ng, a co-author of this post**. Ken has helped grow the Ethereum Foundation Grants Program over the last two years in establishing high level priorities and adapting for the ecosystems needs.\n\n**The other 5 committee members should be thought of as \u201creviewers\u201d \u2014 UNI community members who will keep the grants program functional by ensuring Ken is leading effectively and, of course, not absconding with funds.** Part of the reviewers job is to hold the program accountable for success (defined below) and/or return any excess funds to the UNI treasury. Reviewers are not compensated as part of this proposal as we expect their time commitment to be minimal. Compensation for the lead role is discussed below, as we expect this to be a labor intensive role.\n\n**Program Lead:** [Ken Ng](https://twitter.com/nkennethk?lang=en) (HL Creative Corp)\n*Ecosystem Support Program at the Ethereum Foundation*\n\n1. Reviewer: [Jesse Walden](https://twitter.com/jessewldn) (o/b/o Unofficial LLC dba [Variant Fund](http://twitter.com/variantfund))\n*Founder and Investor at Variant Fund (holds UNI)*\n\n2. Reviewer: [Monet Supply](https://twitter.com/MonetSupply)\n*Risk Analyst at MakerDAO*\n\n3. Reviewer: [Robert Leshner](https://twitter.com/rleshner)\n*Founder and CEO of Compound Finance*\n\n4. Reviewer: [Kain Warwick](https://twitter.com/kaiynne)\n*Founder of Synthetix*\n\n5. Reviewer: [Ashleigh Schap](https://twitter.com/ashleighschap)\n*Growth Lead, Uniswap (Company)*\n\n## Methodology\n\n**1.1 Budget**\n\nThis proposal recommends a max cap of $750K per quarter, with the ability to reevaluate biannually at each epoch (two fiscal quarters). While the UGP Grants Committee will be the decision makers around individual grants, respective budgets, roadmaps, and milestones, any top-level changes to UGP including epochs and max cap, will require full community quorum (4% approval).\n\nThe UGP will be funded by the UNI treasury according to the[ release schedule](https://uniswap.org/blog/uni/) set out by the Uniswap team, whereby 43% of the UNI treasury is released over a four-year timeline. In Year 1 this will total to 172,000,000 UNI (~$344M as of writing).\n\nTaking into consideration the current landscape of ecosystem funding across Ethereum, the community would be hard-pressed to allocate even 5% of Year 1\u2019s treasury. For context Gitcoin CLR Round 7 distributed $725k ($450k in matched) across 857 projects and YTD, Moloch has granted just under $200k but in contrast, the EF has committed to somewhere in the 8 figure range.\n\n**1.2 Committee Compensation**\n\nOperating a successful grants program takes considerable time and effort. Take, for instance, the EF Ecosystem Support Program, which has awarded grants since 2018, consists of an internal team at the Foundation as well as an ever increasing roster of community advisors in order to keep expanding and adapting to best serve the needs of the Ethereum ecosystem. While the structure of the allocation committee has six members, we propose that only the lead will be remunerated for their work in establishing the initial processes, vetting applications, and managing the program overall as this role is expected to be time consuming if the program is to be succesful. We propose that the other committee members be unpaid UNI ecosystem stakeholders who have an interest in seeing the protocol ecosystem continue to operate and grow.\n\n**We propose the lead be compensated 25 UNI/hr (approximately $100 USD at time of this writing) capped at 30 hours/week. This compensation, along with the quarterly budget, will be allocated to the UGP multisig from the UNI treasury**. In keeping with the committee\u2019s commitment to the community, hours and duties will be logged publicly and transparently .\n\n**2.1 Priorities**\n\nInitially, the program aims to start narrow in scope, funding peripheral ecosystem initiatives, such as targeted bounties, hackathon sponsorships, and other low-stakes means of building out the Uniswap developer ecosystem. Over time, if the program proves effective, the grant allocations can grow in scope to include, for example, improved frontends, trading interfaces, and eventually, core protocol development.\n\n![|624x199](upload://vNP0APCOjiwQMurCmYI47cTLklc.png)\n\nWith the initial priorities in mind, some effective measures for quick successes might look like:\n\n* Total number of projects funded\n* Quarterly increase in applications\n* Project engagement post-event/funding\n* Overall community engagement/sentiment\n\n**2.2 Timeline**\n\nIn keeping with the fast pace of the UNI ecosystem, we organize time in epochs, or two calendar quarters. Each epoch will see two funding rounds, one per quarter, after which the community can review and create proposals to improve or revamp the program as they deem fit.\n\n**![|624x245](upload://n56TSh5X3mt4TSqVVMFhbnZM0eM.png)**\n\n**Rolling Wave 1 & 2 Applications**\n\n* Starting in Q1 2021, UGP will start accepting applications for events looking for support in the form of bounties or prizes that in parallel can be proactively sourced. During these first two waves of funding projects, the allocation committee lead can begin laying out guardrails for continued funding\n\n* Considering the immediate feedback loops for the first epoch, we expect these allocation decisions to be discussed and reviewed by the larger community. Should this not be of value, the community can submit a formal governance proposal to change any piece of UGP that was not effective\n\n**Wave 3 & Beyond**\n\n* Beginning with Wave 3, there should have been enough time with impactful projects funded to be considered for follow-on funding, should it make sense. In the same vein, projects within scope will be expanded to also include those working on integrations and and other key components.\n\n* Beyond the second epoch, as the community helps to review and help adapt UGP to be most effective, the scope will continue to grow in order to accommodate the state of the ecosystem including that of core protocol improvements\n\n## Conclusion:\n\n**If this proposal is successfully approved, UGP will start accepting applications on a rolling basis beginning at the start of 2021.** With the phases and priorities laid out above, UGP will aim to make a significant impact by catalyzing growth and innovation in the UNI ecosystem.\n\n**This program is meant to be the simplest possible MVP of a Uniswap Ecosystem Grants initiative.** While the multi-sig committee comes with trust assumptions about the members, our hope is the community will approve this limited engagement to get the ball rolling in an efficient structure. **After the first epoch (2 fiscal quarters) the burden of proof will be on UGP to show empirical evidence that the program is worth continuing in its existing form and will submit to governance to renew treasury funding.**\n\nIf this program proves successful, we hope it will inspire others to follow suit and create their own funding committees for allocating treasury capital\u2014ideally with different specializations.\n";var M=n(36665),R=n(61646),$=n(54479);const W=11473815,O=13059344,U=13551293,L=13786993,V=14732457;var z,B=n(58025),F=n(92796),H=n(63498),G=n(71768),Z=n(4894);!function(e){e[e.INVALID=0]="INVALID",e[e.LOADING=1]="LOADING",e[e.SYNCING=2]="SYNCING",e[e.ERROR=3]="ERROR",e[e.SYNCED=4]="SYNCED"}(z||(z={}));var q=n(97905),Y=n(843),Q=n(50614);function K(){return(0,M.cq)(I.GOVERNANCE_BRAVO_ADDRESSES,E,!0)}const X=K;function J(){const{chainId:e}=(0,d.useWeb3React)(),t=(0,x.useMemo)((()=>e?B.yg[e]?.address:void 0),[e]);return(0,M.cq)(t,T.Mt,!0)}var ee;!function(e){e[e.UNDETERMINED=-1]="UNDETERMINED",e[e.PENDING=0]="PENDING",e[e.ACTIVE=1]="ACTIVE",e[e.CANCELED=2]="CANCELED",e[e.DEFEATED=3]="DEFEATED",e[e.SUCCEEDED=4]="SUCCEEDED",e[e.QUEUED=5]="QUEUED",e[e.EXPIRED=6]="EXPIRED",e[e.EXECUTED=7]="EXECUTED"}(ee||(ee={}));const te=new j.vU(w.Mt);function ne(e){const{result:t}=(0,R.Wk)(e,"proposalCount");return t?.[0]?.toNumber()}const ie={"0x5ef2c7f0":"setSubnodeRecord(bytes32,bytes32,address,address,uint64)","0x10f13a8c":"setText(bytes32,string,string)","0xb4720477":"sendMessageToChild(address,bytes)","0xa9059cbb":"transfer(address,uint256)","0x095ea7b3":"approve(address,uint256)","0x7b1837de":"fund(address,uint256)"};function ae(e,t,n,i){const s=function(e){const{chainId:t}=(0,d.useWeb3React)(),n=(0,F.ZP)(),i=(0,H.C)((e=>e.logs)),a=(0,H.T)();return(0,x.useEffect)((()=>{if(e&&t)return a((0,G.NH)({chainId:t,filter:e})),()=>{a((0,G.ys)({chainId:t,filter:e}))}}),[t,a,e]),(0,x.useMemo)((()=>{if(!t||!e||!n)return{logs:void 0,state:z.INVALID};const a=i[t]?.[(0,Z.QM)(e)],s=a?.results;return s?s.error?{state:z.ERROR,logs:void 0}:{state:(0,Z.x5)(e,n)||s.blockNumber>=n?z.SYNCED:z.SYNCING,logs:s.logs}:{state:z.LOADING,logs:void 0}}),[n,t,e,i])}((0,x.useMemo)((()=>{const t=e?.filters?.ProposalCreated();if(t)return{...t,fromBlock:n,toBlock:i}}),[e,n,i]));return(0,x.useMemo)((()=>s?.logs?.map((e=>te.parseLog(e).args))?.filter((e=>t.flat().some((t=>t===e.id.toNumber()))))?.map((e=>{let t;const n=parseInt(e.startBlock?.toString());try{t=e.description}catch(i){let e=C.te.replace;if(n===O){const t=[226,128,152].toString(),n=[226,128,166].toString();e=(e,i,a,s)=>{if(e===C.Uw.UNEXPECTED_CONTINUE){const e=[a[i],a[i+1],a[i+2]].reverse().toString();if(e===t)return s.push(8216),2;if(e===n)return s.push(8230),2}return C.te.replace(e,i,a,s)}}t=JSON.parse((0,C.ZN)(i.error.value,e))||""}return n!==O&&n!==U&&n!==V||(t=t.replace(/ {2}/g,"\n").replace(/\d\. /g,"\n$&")),{description:t,details:e.targets.map(((t,n)=>{const i=e.signatures[n];let s,o,r=e.calldatas[n];if(""===i){const e=r.slice(0,10),t=ie[e]??"UNKNOWN()";if(!t)throw new Error("Missing four byte sig");[s,o]=t.substring(0,t.length-1).split("("),r=`0x${r.slice(10)}`}else[s,o]=i.substring(0,i.length-1).split("(");return{target:t,functionSig:s,callData:a.$.decode(o.split(","),r).join(", ")}}))}}))),[t,s])}const se=[[1],[2],[3],[4]],oe=[[1],[2],[3]];function re(e,t=0){return"number"===typeof e?new Array(e-t).fill(0).map(((e,n)=>[n+1+t])):[]}function de(){const{chainId:e}=(0,d.useWeb3React)(),t=(0,M.cq)(I.GOVERNANCE_ALPHA_V0_ADDRESSES,w.Mt,!1),n=(0,M.cq)(I.GOVERNANCE_ALPHA_V1_ADDRESSES,w.Mt,!1),i=K(),a=ne(t),s=ne(n),o=ne(i),r=(0,x.useMemo)((()=>e===N.H.MAINNET?se:re(a)),[e,a]),l=(0,x.useMemo)((()=>e===N.H.MAINNET?oe:re(s)),[e,s]),c=(0,x.useMemo)((()=>re(o,8)),[o]),p=(0,R.es)(t,"proposals",r),u=(0,R.es)(n,"proposals",l),m=(0,R.es)(i,"proposals",c),h=(0,R.es)(t,"state",r),f=(0,R.es)(n,"state",l),g=(0,R.es)(i,"state",c),y=ae(t,r,11042287,12563484),b=ae(n,l,12686656,13059343),j=ae(i,c,13538153),C=(0,x.useMemo)((()=>e?B.yg[e]:void 0),[e]);return(0,x.useMemo)((()=>{const e=[...p,...u,...m],a=[...h,...f,...g],s=[...y??[],...b??[],...j??[]];return!C||e.some((e=>e.loading))||a.some((e=>e.loading))||t&&!y||n&&!b||i&&!j?{data:[],loading:!0}:{data:e.map(((e,t)=>{const n=parseInt(e?.result?.startBlock?.toString());let i=s[t]?.description??"";n===W&&(i=P);let o=i?.split(/#+\s|\n/g)[1];return n===L&&(o=A),{id:e?.result?.id.toString(),title:o??v.ag._({id:"wja8aL"}),description:i??v.ag._({id:"ry0RbG"}),proposer:e?.result?.proposer,status:a[t]?.result?.[0]??ee.UNDETERMINED,forCount:I.CurrencyAmount.fromRawAmount(C,e?.result?.forVotes),againstCount:I.CurrencyAmount.fromRawAmount(C,e?.result?.againstVotes),startBlock:n,endBlock:parseInt(e?.result?.endBlock?.toString()),eta:e?.result?.eta,details:s[t]?.details,governorIndex:t>=p.length+u.length?2:t>=p.length?1:0}})),loading:!1}}),[y,b,j,t,n,i,h,f,g,p,u,m,C])}function le(e,t){const{data:n}=de();return n.filter((t=>t.governorIndex===e))?.find((e=>e.id===t))}function ce(){const{account:e}=(0,d.useWeb3React)(),t=J(),{result:n}=(0,R.Wk)(t,"delegates",[e??void 0]);return n?.[0]??void 0}function pe(){const{account:e,chainId:t}=(0,d.useWeb3React)(),n=J(),{result:i,loading:a}=(0,R.Wk)(n,"getCurrentVotes",[e??void 0]);return(0,x.useMemo)((()=>{const e=t?B.yg[t]:void 0;return{loading:a,votes:e&&i?I.CurrencyAmount.fromRawAmount(e,i?.[0]):void 0}}),[t,a,i])}var ue,me=n(87253),he=n(39839),fe=n(72714),ge=n(73440),xe=n(63548),ye=n(79371),be=n(2304),je=n(77856),Ce=n(47096);!function(e){e.TRANSFER_TOKEN="Transfer Token",e.APPROVE_TOKEN="Approve Token"}(ue||(ue={}));const ve=(0,me.default)(u.ZP).withConfig({displayName:"ProposalActionSelector__ContentWrapper",componentId:"sc-29cf481c-0"})`
  width: 100%;
  flex: 1 1;
  position: relative;
`,we=me.default.div.withConfig({displayName:"ProposalActionSelector__ActionSelectorHeader",componentId:"sc-29cf481c-1"})`
  font-size: 14px;
  font-weight: 535;
  color: ${({theme:e})=>e.neutral2};
  margin-bottom: 10px;
`,Te=(0,me.default)(c.Kb).withConfig({displayName:"ProposalActionSelector__ActionDropdown",componentId:"sc-29cf481c-2"})`
  padding: 0px;
  background-color: transparent;
  color: ${({theme:e})=>e.neutral1};
  font-size: 1.25rem;

  :hover,
  :active,
  :focus {
    outline: 0px;
    box-shadow: none;
    background-color: transparent;
  }
`,Ie=me.default.div.withConfig({displayName:"ProposalActionSelector__ProposalActionSelectorFlex",componentId:"sc-29cf481c-3"})`
  margin-top: 10px;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface1};
`,Ee=me.default.div.withConfig({displayName:"ProposalActionSelector__ProposalActionSelectorContainer",componentId:"sc-29cf481c-4"})`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1em;
`,Ne=({className:e,onClick:t,proposalAction:n})=>(0,i.jsx)(Ie,{children:(0,i.jsxs)(Ee,{className:e,children:[(0,i.jsx)(we,{children:(0,i.jsx)(o.cC,{id:"ZjOawn"})}),(0,i.jsx)(Te,{onClick:t,children:n})]})});function _e({isOpen:e,onDismiss:t,onProposalActionSelect:n}){const a=(0,x.useCallback)((e=>{n(e),t()}),[t,n]);return(0,i.jsx)(ye.Z,{isOpen:e,onDismiss:t,children:(0,i.jsxs)(ve,{children:[(0,i.jsx)(je.AC,{gap:"16px",children:(0,i.jsxs)(be.m0,{children:[(0,i.jsx)(Ce.xv,{fontWeight:535,fontSize:16,children:(0,i.jsx)(o.cC,{id:"pnOrm4"})}),(0,i.jsx)(he.Tw,{onClick:t})]})}),(0,i.jsx)(je.Z0,{}),(0,i.jsx)(je.sN,{onClick:()=>a(ue.TRANSFER_TOKEN),children:(0,i.jsx)(u.ZP,{children:(0,i.jsx)(Ce.xv,{fontWeight:535,children:(0,i.jsx)(o.cC,{id:"PmH8DD"})})})}),(0,i.jsx)(je.sN,{onClick:()=>a(ue.APPROVE_TOKEN),children:(0,i.jsx)(u.ZP,{children:(0,i.jsx)(Ce.xv,{fontWeight:535,children:(0,i.jsx)(o.cC,{id:"TXcuVO"})})})})]})})}var De;!function(e){e[e.ADDRESS=0]="ADDRESS",e[e.CURRENCY=1]="CURRENCY"}(De||(De={}));const Se=me.default.div.withConfig({displayName:"ProposalActionDetail__ProposalActionDetailContainer",componentId:"sc-c0193175-0"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  > * {
    width: 100%;
  }
  > :not(:last-child) {
    margin-bottom: 10px;
  }
`,ke=({className:e,proposalAction:t,currency:n,amount:a,toAddress:s,onCurrencySelect:r,onAmountInput:d,onToAddressInput:l})=>{const c={[ue.TRANSFER_TOKEN]:[{type:De.ADDRESS,label:(0,i.jsx)(o.cC,{id:"/jQctM"})},{type:De.CURRENCY}],[ue.APPROVE_TOKEN]:[{type:De.ADDRESS,label:(0,i.jsx)(o.cC,{id:"/jQctM"})},{type:De.CURRENCY}]};return(0,i.jsx)(Se,{className:e,children:c[t].map(((e,t)=>e.type===De.ADDRESS?(0,i.jsx)(ge.Z,{label:e.label,value:s,onChange:l},t):e.type===De.CURRENCY?(0,i.jsx)(xe.Z,{value:a,currency:n,onUserInput:e=>d(e),onCurrencySelect:e=>r(e),showMaxButton:!1,showCommonBases:!1,showCurrencyAmount:!1,disableNonToken:!0,hideBalance:!0,id:"currency-input"},t):null))})},Ae=me.default.input.withConfig({displayName:"TextInput__Input",componentId:"sc-9b182cb1-0"})`
  font-size: ${({fontSize:e})=>e||"1.25rem"};
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  background-color: ${({theme:e})=>e.surface1};
  transition: color 300ms ${({error:e})=>e?"step-end":"step-start"};
  color: ${({error:e,theme:t})=>e?t.critical:t.neutral1};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 535;
  width: 100%;
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
`,Pe=me.default.textarea.withConfig({displayName:"TextInput__TextAreaInput",componentId:"sc-9b182cb1-1"})`
  font-size: ${({fontSize:e})=>e||"1.25rem"};
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  resize: none;
  background-color: ${({theme:e})=>e.surface1};
  transition: color 300ms ${({error:e})=>e?"step-end":"step-start"};
  color: ${({error:e,theme:t})=>e?t.critical:t.neutral1};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 535;
  width: 100%;
  line-height: 1.2;
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral2};
  }
`,Me=(0,x.memo)((({className:e,value:t,onUserInput:n,placeholder:a,fontSize:s})=>{const o=(0,x.useRef)(document.createElement("textarea")),r=(0,x.useCallback)((e=>{o.current.style.height="auto",o.current.style.height=o.current.scrollHeight+"px",n(e.target.value)}),[n]);return(0,i.jsx)(Pe,{style:{height:"auto",minHeight:"535px"},className:e,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:a||"",onChange:r,value:t,fontSize:s,ref:o})}));Me.displayName="ResizingTextArea";const Re=(0,me.default)(Ce.xv).withConfig({displayName:"ProposalEditor__ProposalEditorHeader",componentId:"sc-22c72d18-0"})`
  font-size: 14px;
  font-weight: 535;
  color: ${({theme:e})=>e.neutral2};
`,$e=(0,x.memo)((0,me.default)((({className:e,value:t,onUserInput:n,placeholder:a,fontSize:s})=>{const o=(0,x.useCallback)((e=>{n(e.target.value)}),[n]);return(0,i.jsx)("div",{className:e,children:(0,i.jsx)(Ae,{type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:a||"",onChange:o,value:t,fontSize:s})})})).withConfig({displayName:"ProposalEditor__ProposalTitle",componentId:"sc-22c72d18-1"})`
  margin-top: 10.5px;
  margin-bottom: 7.5px;
`),We=me.default.div.withConfig({displayName:"ProposalEditor__ProposalEditorContainer",componentId:"sc-22c72d18-2"})`
  margin-top: 10px;
  padding: 0.75rem 1rem 0.75rem 1rem;
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface1};
`,Oe=({className:e,title:t,body:n,onTitleInput:a,onBodyInput:s})=>(0,i.jsxs)(We,{className:e,children:[(0,i.jsx)(Re,{children:(0,i.jsx)(o.cC,{id:"qcybNQ"})}),(0,i.jsx)($e,{value:t,onUserInput:a,placeholder:v.ag._({id:"ypPAJ2"}),fontSize:"1.25rem"}),(0,i.jsx)("hr",{}),(0,i.jsx)(Me,{value:n,onUserInput:s,placeholder:"## Summary\n\nInsert your summary here\n\n## Methodology\n  \nInsert your methodology here\n\n## Conclusion\n  \nInsert your conclusion here\n  \n  ",fontSize:"1rem"})]});var Ue=n(30889),Le=n(68456),Ve=n(34120);const ze=me.default.div.withConfig({displayName:"ModalViews__ConfirmOrLoadingWrapper",componentId:"sc-94f08704-0"})`
  width: 100%;
  padding: 24px;
`,Be=(0,me.default)(u.lg).withConfig({displayName:"ModalViews__ConfirmedIcon",componentId:"sc-94f08704-1"})`
  padding: 60px 0;
`;function Fe({children:e,onDismiss:t}){return(0,i.jsxs)(ze,{children:[(0,i.jsxs)(be.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(he.Tw,{onClick:t})]}),(0,i.jsx)(Be,{children:(0,i.jsx)(he._1,{src:Le.Z,alt:"loader",size:"90px"})}),(0,i.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[e,(0,i.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(o.cC,{id:"oG26Rt"})})]})]})}function He({children:e,onDismiss:t,hash:n}){const a=(0,me.useTheme)(),{chainId:s}=(0,d.useWeb3React)();return(0,i.jsxs)(ze,{children:[(0,i.jsxs)(be.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(he.Tw,{onClick:t})]}),(0,i.jsx)(Be,{children:(0,i.jsx)(Ue.Z,{strokeWidth:.5,size:90,color:a.accent1})}),(0,i.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[e,s&&n&&(0,i.jsx)(he.dL,{href:(0,Ve.E)(s,n,Ve.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,i.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(o.cC,{id:"yVxaEc"})})})]})]})}const Ge=({isOpen:e,hash:t,onDismiss:n})=>{const a=(0,me.useTheme)();return(0,i.jsx)(ye.Z,{isOpen:e,onDismiss:n,children:t?(0,i.jsx)(He,{onDismiss:n,hash:t,children:(0,i.jsxs)(u.Tz,{gap:"md",justify:"center",children:[(0,i.jsx)(Ce.xv,{fontWeight:535,fontSize:20,textAlign:"center",children:(0,i.jsx)(o.cC,{id:"zEu7SF"})}),t&&(0,i.jsx)(he.dL,{href:(0,Ve.E)(1,t,Ve.r.TRANSACTION),children:(0,i.jsx)(Ce.xv,{fontWeight:535,fontSize:14,color:a.accent1,children:(0,i.jsx)(o.cC,{id:"rd4eHq"})})}),(0,i.jsx)(c.DF,{as:b.rU,to:"/vote",onClick:n,style:{margin:"20px 0 0 0"},children:(0,i.jsx)(Ce.xv,{fontWeight:535,fontSize:20,children:(0,i.jsx)(o.cC,{id:"vUOn9d"})})})]})}):(0,i.jsx)(Fe,{onDismiss:n,children:(0,i.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,i.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(o.cC,{id:"jVqrMl"})})})})})},Ze=(0,me.default)(u.Tz).withConfig({displayName:"CreateProposal__PageWrapper",componentId:"sc-2a2ea36c-0"})`
  padding: 24px 8px 0px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    // padding-top: 20px;
  }
`,qe=(0,me.default)(y.Z).withConfig({displayName:"CreateProposal__BackArrow",componentId:"sc-2a2ea36c-1"})`
  cursor: pointer;
  color: ${({theme:e})=>e.neutral1};
`,Ye=(0,me.default)(b.rU).withConfig({displayName:"CreateProposal__Nav",componentId:"sc-2a2ea36c-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 1em 0 0 1em;
  text-decoration: none;
`,Qe=(0,me.default)(he.Tv.SubHeaderLarge).withConfig({displayName:"CreateProposal__HeaderText",componentId:"sc-2a2ea36c-3"})`
  margin: auto !important;
`,Ke=({proposalThreshold:e,hasActiveOrPendingProposal:t,hasEnoughVote:n,isFormInvalid:a,handleCreateProposal:s})=>{const r=e?h().divide(e.quotient,h().exponentiate(h().BigInt(10),h().BigInt(e.currency.decimals))).toLocaleString():void 0;return(0,i.jsx)(c.Kd,{style:{marginTop:"18px"},error:t||!n,disabled:a||t||!n,onClick:s,children:t?(0,i.jsx)(o.cC,{id:"EaeCw4"}):n?(0,i.jsx)(o.cC,{id:"+2ovA+"}):(0,i.jsx)(i.Fragment,{children:r?(0,i.jsx)(o.cC,{id:"zeKvPC",values:{formattedProposalThreshold:r}}):(0,i.jsx)(o.cC,{id:"GujLUI"})})})},Xe=(0,me.default)(g.im).withConfig({displayName:"CreateProposal__CreateProposalWrapper",componentId:"sc-2a2ea36c-4"})`
  display: flex;
  flex-flow: column wrap;
`,Je=me.default.div.withConfig({displayName:"CreateProposal__AutonomousProposalCTA",componentId:"sc-2a2ea36c-5"})`
  text-align: center;
  margin-top: 10px;
`;function et(){const{account:e,chainId:t}=(0,d.useWeb3React)(),n=function(e){const t=X(),n=(0,R.Wk)(t,"latestProposalIds",[e]);return n?.result?.[0]?.toString()}(e??void 0)??"0",c=le(k,n),{votes:m}=pe(),g=function(){const{chainId:e}=(0,d.useWeb3React)(),t=X(),n=(0,R.Wk)(t,"proposalThreshold"),i=(0,x.useMemo)((()=>e?B.yg[e]:void 0),[e]);if(n?.result?.[0]&&i)return I.CurrencyAmount.fromRawAmount(i,n.result[0])}(),[y,b]=(0,x.useState)(!1),[j,C]=(0,x.useState)(),[v,w]=(0,x.useState)(!1),[T,E]=(0,x.useState)(ue.TRANSFER_TOKEN),[N,_]=(0,x.useState)(""),[D,S]=(0,x.useState)(B.yg[t??1]),[A,P]=(0,x.useState)(""),[M,W]=(0,x.useState)(""),[O,U]=(0,x.useState)(""),L=(0,x.useCallback)((()=>{b(!0)}),[b]),V=(0,x.useCallback)((e=>{E(e)}),[E]),z=(0,x.useCallback)((()=>{b(!1)}),[b]),F=(0,x.useCallback)((()=>{C(void 0),w(!1)}),[C,w]),H=(0,x.useCallback)((e=>{_(e)}),[_]),G=(0,x.useCallback)((e=>{S(e)}),[S]),Z=(0,x.useCallback)((e=>{P(e)}),[P]),Q=(0,x.useCallback)((e=>{W(e)}),[W]),K=(0,x.useCallback)((e=>{U(e)}),[U]),J=(0,x.useMemo)((()=>Boolean(!T||!(0,s.isAddress)(N)||!D?.isToken||""===A||""===M||""===O)),[T,N,D,A,M,O]),te=Boolean(m&&g&&h().greaterThanOrEqual(m.quotient,g.quotient)),ne=function(){const{account:e,chainId:t}=(0,d.useWeb3React)(),n=X(),i=(0,q.h7)();return(0,x.useCallback)((a=>{if(!e||!n||!a||!t)return;const s=[a.targets,a.values,a.signatures,a.calldatas,a.description];return n.estimateGas.propose(...s).then((e=>n.propose(...s,{gasLimit:(0,$.y)(e)}).then((e=>(i(e,{type:Y.i.SUBMIT_PROPOSAL}),e.hash)))))}),[e,i,n,t])}();return(0,i.jsx)(l.fM,{page:r.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,i.jsx)(Ze,{children:(0,i.jsxs)(fe.Z,{$maxWidth:"800px",children:[(0,i.jsxs)(Ye,{to:"/vote",children:[(0,i.jsx)(qe,{}),(0,i.jsx)(Qe,{children:"Create Proposal"})]}),(0,i.jsxs)(Xe,{children:[(0,i.jsx)(p.Pj,{children:(0,i.jsx)(u.Tz,{gap:"10px",children:(0,i.jsx)(he.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,i.jsx)(o.cC,{id:"8kkwc5",components:{0:(0,i.jsx)("strong",{}),1:(0,i.jsx)(he.dL,{href:"https://docs.uniswap.org/protocol/reference/Governance/governance-reference#propose"})}})})})}),(0,i.jsx)(Ne,{onClick:L,proposalAction:T}),(0,i.jsx)(ke,{proposalAction:T,currency:D,amount:A,toAddress:N,onCurrencySelect:G,onAmountInput:Z,onToAddressInput:H}),(0,i.jsx)(Oe,{title:M,body:O,onTitleInput:Q,onBodyInput:K}),(0,i.jsx)(Ke,{proposalThreshold:g,hasActiveOrPendingProposal:c?.status===ee.ACTIVE||c?.status===ee.PENDING,hasEnoughVote:te,isFormInvalid:J,handleCreateProposal:async()=>{w(!0);const e={};if(!ne||!T||!D.isToken)return;const t=(0,f.Z)(A,D);if(!t)return;let n,i;switch(e.targets=[D.address],e.values=["0"],e.description=`# ${M}\n\n${O}\n`,T){case ue.TRANSFER_TOKEN:n=[["address","uint256"]],i=[[(0,s.getAddress)(N),t.quotient.toString()]],e.signatures=[`transfer(${n[0].join(",")})`];break;case ue.APPROVE_TOKEN:n=[["address","uint256"]],i=[[(0,s.getAddress)(N),t.quotient.toString()]],e.signatures=[`approve(${n[0].join(",")})`]}e.calldatas=[];for(let s=0;s<e.signatures.length;s++)e.calldatas[s]=a.$.encode(n[s],i[s]);const o=await(ne(e??void 0)?.catch((()=>{w(!1)})));o&&C(o)}}),te?null:(0,i.jsxs)(Je,{children:["Don\u2019t have 2.5M votes? Anyone can create an autonomous proposal using"," ",(0,i.jsx)(he.dL,{href:"https://fish.vote",children:"fish.vote"})]})]}),(0,i.jsx)(_e,{isOpen:y,onDismiss:z,onProposalActionSelect:e=>V(e)}),(0,i.jsx)(Ge,{isOpen:v,hash:j,onDismiss:F})]})})})}var tt=n(80657),nt=n(19969),it=n(86299),at=n(25575),st=n(85729),ot=n(36772),rt=n(50595),dt=n(15993),lt=n(48662),ct=n(42881);const pt=(0,me.default)(u.Tz).withConfig({displayName:"DelegateModal__ContentWrapper",componentId:"sc-627ffb35-0"})`
  width: 100%;
  padding: 24px;
`,ut=(0,me.default)(rt.Z).withConfig({displayName:"DelegateModal__StyledClosed",componentId:"sc-627ffb35-1"})`
  :hover {
    cursor: pointer;
  }
`,mt=me.default.div.withConfig({displayName:"DelegateModal__TextButton",componentId:"sc-627ffb35-2"})`
  :hover {
    cursor: pointer;
  }
`;function ht({isOpen:e,onDismiss:t,title:n}){const{account:a,chainId:r}=(0,d.useWeb3React)(),[l,p]=(0,x.useState)(!1),[m,h]=(0,x.useState)("");const f=l?m:a,{address:g}=(0,lt.Z)(f),y=(0,ct.mM)(a??void 0,r?B.yg[r]:void 0),b=function(){const{account:e,chainId:t,provider:n}=(0,d.useWeb3React)(),i=(0,q.h7)(),a=J();return(0,x.useCallback)((o=>{if(!n||!t||!e||!o||!(0,s.isAddress)(o??""))return;const r=[o];if(!a)throw new Error("No UNI Contract!");return a.estimateGas.delegate(...r,{}).then((e=>a.delegate(...r,{value:null,gasLimit:(0,$.y)(e)}).then((e=>(i(e,{type:Y.i.DELEGATE,delegatee:o}),e.hash)))))}),[e,i,t,n,a])}(),[j,C]=(0,x.useState)(),[v,w]=(0,x.useState)(!1);function T(){C(void 0),w(!1),t()}return(0,i.jsxs)(ye.Z,{isOpen:e,onDismiss:T,maxHeight:90,children:[!v&&!j&&(0,i.jsx)(pt,{gap:"lg",children:(0,i.jsxs)(u.Tz,{gap:"lg",justify:"center",children:[(0,i.jsxs)(be.m0,{children:[(0,i.jsx)(he.Tv.DeprecatedMediumHeader,{fontWeight:535,children:n}),(0,i.jsx)(ut,{stroke:"black",onClick:T})]}),(0,i.jsx)(he.Tv.DeprecatedBody,{children:(0,i.jsx)(o.cC,{id:"bax021"})}),(0,i.jsx)(he.Tv.DeprecatedBody,{children:(0,i.jsx)(o.cC,{id:"7AHe/w"})}),l&&(0,i.jsx)(ge.Z,{value:m,onChange:function(e){h(e)}}),(0,i.jsx)(c.DF,{disabled:!(0,s.isAddress)(g??""),onClick:async function(){if(w(!0),!b)return;const e=await(b(g??void 0)?.catch((e=>{w(!1),console.log(e)})));e&&C(e)},children:(0,i.jsx)(he.Tv.DeprecatedMediumHeader,{color:"white",children:l?(0,i.jsx)(o.cC,{id:"Ui1tti"}):(0,i.jsx)(o.cC,{id:"SqN37/"})})}),(0,i.jsx)(mt,{onClick:()=>p(!l),children:(0,i.jsx)(he.Tv.DeprecatedBlue,{children:l?(0,i.jsx)(o.cC,{id:"vXCSlR"}):(0,i.jsx)(o.cC,{id:"i3lR50"})})})]})}),v&&!j&&(0,i.jsx)(Fe,{onDismiss:T,children:(0,i.jsxs)(u.Tz,{gap:"md",justify:"center",children:[(0,i.jsx)(he.Tv.DeprecatedLargeHeader,{children:l?(0,i.jsx)(o.cC,{id:"mYDX/5"}):(0,i.jsx)(o.cC,{id:"rO0m+d"})}),(0,i.jsxs)(he.Tv.DeprecatedMain,{fontSize:36,children:[" ",(0,dt.Z)(y,4)]})]})}),j&&(0,i.jsx)(He,{onDismiss:T,hash:j,children:(0,i.jsxs)(u.Tz,{gap:"md",justify:"center",children:[(0,i.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(o.cC,{id:"ExzCxg"})}),(0,i.jsx)(he.Tv.DeprecatedMain,{fontSize:36,children:(0,dt.Z)(y,4)})]})})]})}const ft=me.default.div.withConfig({displayName:"ProposalEmptyState__EmptyProposals",componentId:"sc-553f4938-0"})`
  border: 1px solid ${({theme:e})=>e.neutral2};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,gt=me.default.i.withConfig({displayName:"ProposalEmptyState__Sub",componentId:"sc-553f4938-1"})`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
`,xt=({HeaderContent:e,SubHeaderContent:t})=>(0,i.jsxs)(ft,{children:[(0,i.jsx)(he.Tv.DeprecatedBody,{style:{marginBottom:"8px"},children:(0,i.jsx)(e,{})}),(0,i.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(gt,{children:(0,i.jsx)(t,{})})})]});function yt(){const{chainId:e}=(0,d.useWeb3React)();return e&&e!==N.H.MAINNET?(0,i.jsx)(xt,{HeaderContent:()=>(0,i.jsx)(o.cC,{id:"ejl/89"}),SubHeaderContent:()=>(0,i.jsx)(o.cC,{id:"ekfCbW"})}):(0,i.jsx)(xt,{HeaderContent:()=>(0,i.jsx)(o.cC,{id:"wra16A"}),SubHeaderContent:()=>(0,i.jsx)(o.cC,{id:"LNOwr1"})})}var bt=n(40508),jt=n(53984),Ct=n(56564),vt=n(13120),wt=n(83777),Tt=n(91101);const It=(e,t)=>{switch(e){case ee.PENDING:case ee.ACTIVE:return t.accent1;case ee.SUCCEEDED:case ee.EXECUTED:return t.success;case ee.DEFEATED:return t.critical;case ee.QUEUED:case ee.CANCELED:case ee.EXPIRED:default:return t.neutral3}};function Et({status:e}){switch(e){case ee.PENDING:return(0,i.jsx)(o.cC,{id:"UbRKMZ"});case ee.ACTIVE:return(0,i.jsx)(o.cC,{id:"F6pfE9"});case ee.SUCCEEDED:return(0,i.jsx)(o.cC,{id:"KAbcm2"});case ee.EXECUTED:return(0,i.jsx)(o.cC,{id:"L4jnDP"});case ee.DEFEATED:return(0,i.jsx)(o.cC,{id:"WRTJfs"});case ee.QUEUED:return(0,i.jsx)(o.cC,{id:"8wu9lr"});case ee.CANCELED:return(0,i.jsx)(o.cC,{id:"GGWsTU"});case ee.EXPIRED:return(0,i.jsx)(o.cC,{id:"M1RnFv"});default:return(0,i.jsx)(o.cC,{id:"v2r3sT"})}}const Nt=me.default.span.withConfig({displayName:"styled__StyledProposalContainer",componentId:"sc-676ed4ee-0"})`
  font-size: 0.825rem;
  font-weight: 535;
  padding: 0.5rem;
  border-radius: 8px;
  color: ${({status:e,theme:t})=>It(e,t)};
  border: 1px solid ${({status:e,theme:t})=>It(e,t)};
  width: fit-content;
  justify-self: flex-end;
  text-transform: uppercase;
  flex: 0 0 100px;
  text-align: center;
`;function _t({status:e}){return(0,i.jsx)(Nt,{status:e,children:(0,i.jsx)(Et,{status:e})})}const Dt=(0,me.default)(u.Tz).withConfig({displayName:"Landing__PageWrapper",componentId:"sc-aed8217e-0"})`
  padding-top: 68px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,St=(0,me.default)(u.Tz).withConfig({displayName:"Landing__TopSection",componentId:"sc-aed8217e-1"})`
  max-width: 640px;
  width: 100%;
`,kt=(0,me.default)(jt.zx).withConfig({displayName:"Landing__Proposal",componentId:"sc-aed8217e-2"})`
  padding: 0.75rem 1rem;
  width: 100%;
  margin-top: 1rem;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  outline: none;
  cursor: pointer;
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  background-color: ${({theme:e})=>e.surface1};
  &:focus {
    background-color: ${({theme:e})=>(0,bt._j)(.05,e.surface1)};
  }
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
  }
`,At=me.default.span.withConfig({displayName:"Landing__ProposalNumber",componentId:"sc-aed8217e-3"})`
  opacity: ${({theme:e})=>e.opacity.hover};
  flex: 0 0 40px;
`,Pt=me.default.span.withConfig({displayName:"Landing__ProposalTitle",componentId:"sc-aed8217e-4"})`
  font-weight: 535;
  flex: 1;
  max-width: 420px;
  white-space: initial;
  word-wrap: break-word;
  padding-right: 10px;
`,Mt=(0,me.default)(nt.I8).withConfig({displayName:"Landing__VoteCard",componentId:"sc-aed8217e-5"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  overflow: hidden;
`,Rt=(0,me.default)(be.m0).withConfig({displayName:"Landing__WrapSmall",componentId:"sc-aed8217e-6"})`
  margin-bottom: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-wrap: wrap;
  `};
`,$t=(0,me.default)(he.Tv.DeprecatedMain).withConfig({displayName:"Landing__TextButton",componentId:"sc-aed8217e-7"})`
  color: ${({theme:e})=>e.accent1};
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`,Wt=me.default.div.withConfig({displayName:"Landing__AddressButton",componentId:"sc-aed8217e-8"})`
  padding: 2px 4px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.accent1};
`,Ot=(0,me.default)(he.dL).withConfig({displayName:"Landing__StyledExternalLink",componentId:"sc-aed8217e-9"})`
  color: ${({theme:e})=>e.neutral1};
`;function Ut(){const e=(0,me.useTheme)(),{account:t,chainId:n}=(0,d.useWeb3React)(),[a,s]=(0,x.useState)(!0),p=(0,Ct.Wt)(vt.Lk.DELEGATE),m=(0,Ct.up)(),{data:f,loading:g}=de(),{loading:y,votes:j}=pe(),C=(0,ct.mM)(t??void 0,n?B.yg[n]:void 0),v=ce(),w=Boolean(C&&h().notEqual(C.quotient,h().BigInt(0))&&v===Tt.r_);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.fM,{page:r.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,i.jsxs)(Dt,{gap:"lg",justify:"center",children:[(0,i.jsx)(ht,{isOpen:p,onDismiss:m,title:w?(0,i.jsx)(o.cC,{id:"MdYzHJ"}):(0,i.jsx)(o.cC,{id:"pyQcYT"})}),(0,i.jsx)(St,{gap:"md",children:(0,i.jsxs)(Mt,{children:[(0,i.jsx)(nt.sq,{}),(0,i.jsx)(nt.RF,{}),(0,i.jsx)(nt.uO,{children:(0,i.jsxs)(u.Tz,{gap:"md",children:[(0,i.jsx)(be.m0,{children:(0,i.jsx)(he.Tv.DeprecatedWhite,{fontWeight:535,children:(0,i.jsx)(o.cC,{id:"b/GPs3"})})}),(0,i.jsx)(be.m0,{children:(0,i.jsx)(he.Tv.DeprecatedWhite,{fontSize:14,children:(0,i.jsx)(o.cC,{id:"UPoMvW"})})}),(0,i.jsx)(he.dL,{style:{color:e.white,textDecoration:"underline"},href:"https://uniswap.org/blog/uni",target:"_blank",children:(0,i.jsx)(he.Tv.DeprecatedWhite,{fontSize:14,children:(0,i.jsx)(o.cC,{id:"UP8B0b"})})})]})}),(0,i.jsx)(nt.sq,{}),(0,i.jsx)(nt.RF,{})]})}),(0,i.jsxs)(St,{gap:"2px",children:[(0,i.jsxs)(Rt,{children:[(0,i.jsx)(he.Tv.DeprecatedMediumHeader,{style:{margin:"0.5rem 0.5rem 0.5rem 0",flexShrink:0},children:(0,i.jsx)(o.cC,{id:"6g1gi0"})}),(0,i.jsxs)(be.BA,{gap:"6px",justify:"flex-end",children:[g||y?(0,i.jsx)(at.ZP,{}):null,w?(0,i.jsx)(c.DF,{style:{width:"fit-content",height:"40px"},padding:"8px",$borderRadius:"8px",onClick:m,children:(0,i.jsx)(o.cC,{id:"1XEaEo"})}):j&&h().notEqual(h().BigInt(0),j?.quotient)?(0,i.jsx)(he.Tv.DeprecatedBody,{fontWeight:535,mr:"6px",children:(0,i.jsx)(o.cC,{id:"YgWhFg",components:{0:(0,i.jsx)(it.Z,{currencyAmount:j})}})}):C&&v&&v!==Tt.r_&&h().notEqual(h().BigInt(0),C?.quotient)?(0,i.jsx)(he.Tv.DeprecatedBody,{fontWeight:535,mr:"6px",children:(0,i.jsx)(o.cC,{id:"YgWhFg",components:{0:(0,i.jsx)(it.Z,{currencyAmount:C})}})}):"",(0,i.jsx)(c.DF,{as:b.rU,to:"/create-proposal",style:{width:"fit-content",borderRadius:"8px",height:"40px"},padding:"8px",children:(0,i.jsx)(o.cC,{id:"+2ovA+"})})]})]}),!w&&(0,i.jsxs)(be.m0,{children:[(0,i.jsx)("div",{}),v&&v!==Tt.r_?(0,i.jsxs)(be.DA,{children:[(0,i.jsx)(he.Tv.DeprecatedBody,{fontWeight:535,mr:"4px",children:(0,i.jsx)(o.cC,{id:"if4+2Q"})}),(0,i.jsxs)(Wt,{children:[(0,i.jsx)(Ot,{href:(0,Ve.E)(1,v,Ve.r.ADDRESS),style:{margin:"0 4px"},children:v===t?(0,i.jsx)(o.cC,{id:"QwCX4t"}):(0,wt.Xn)(v)}),(0,i.jsx)($t,{onClick:m,style:{marginLeft:"4px"},children:(0,i.jsx)(o.cC,{id:"zBlp20"})})]})]}):""]}),0===f?.length&&(0,i.jsx)(yt,{}),f?.length>0&&(0,i.jsxs)(u.Tz,{gap:"md",children:[(0,i.jsx)(be.m0,{}),(0,i.jsxs)(be.m0,{children:[(0,i.jsx)(he.Tv.DeprecatedMain,{children:(0,i.jsx)(o.cC,{id:"h3EttW"})}),(0,i.jsx)(ot.Z,{isActive:!a,toggle:()=>s((e=>!e))})]})]}),f?.slice(0)?.reverse()?.filter((e=>!a||e.status!==ee.CANCELED))?.map((e=>(0,i.jsxs)(kt,{as:b.rU,to:`/vote/${e.governorIndex}/${e.id}`,children:[(0,i.jsxs)(At,{children:[e.governorIndex,".",e.id]}),(0,i.jsx)(Pt,{children:e.title}),(0,i.jsx)(_t,{status:e.status})]},`${e.governorIndex}${e.id}`)))]}),(0,i.jsx)(he.Tv.DeprecatedSubHeader,{color:"text3",children:(0,i.jsx)(o.cC,{id:"3Mwm54"})})]})}),(0,i.jsx)(st.c,{})]})}var Lt=n(86003);const Vt=(0,me.default)(u.Tz).withConfig({displayName:"ExecuteModal__ContentWrapper",componentId:"sc-71fc4874-0"})`
  width: 100%;
  padding: 24px;
`,zt=(0,me.default)(rt.Z).withConfig({displayName:"ExecuteModal__StyledClosed",componentId:"sc-71fc4874-1"})`
  :hover {
    cursor: pointer;
  }
`,Bt=me.default.div.withConfig({displayName:"ExecuteModal__ConfirmOrLoadingWrapper",componentId:"sc-71fc4874-2"})`
  width: 100%;
  padding: 24px;
`,Ft=(0,me.default)(u.lg).withConfig({displayName:"ExecuteModal__ConfirmedIcon",componentId:"sc-71fc4874-3"})`
  padding: 60px 0;
`;function Ht({isOpen:e,onDismiss:t,proposalId:n}){const{chainId:a}=(0,d.useWeb3React)(),s=function(){const{account:e,chainId:t}=(0,d.useWeb3React)(),n=X(),i=(0,q.h7)();return(0,x.useCallback)((a=>{if(!e||!n||!a||!t)return;const s=[a];return n.estimateGas.execute(...s,{}).then((e=>n.execute(...s,{value:null,gasLimit:(0,$.y)(e)}).then((e=>(i(e,{type:Y.i.EXECUTE,governorAddress:n.address,proposalId:parseInt(a)}),e.hash)))))}),[e,i,n,t])}(),[r,l]=(0,x.useState)(),[p,m]=(0,x.useState)(!1),h=(0,me.useTheme)();function f(){l(void 0),m(!1),t()}return(0,i.jsxs)(ye.Z,{isOpen:e,onDismiss:f,maxHeight:90,children:[!p&&!r&&(0,i.jsx)(Vt,{gap:"lg",children:(0,i.jsxs)(u.Tz,{gap:"lg",justify:"center",children:[(0,i.jsxs)(be.m0,{children:[(0,i.jsx)(he.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,i.jsx)(o.cC,{id:"/dt0VU",values:{proposalId:n}})}),(0,i.jsx)(zt,{onClick:f})]}),(0,i.jsx)(be.m0,{children:(0,i.jsx)(he.Tv.DeprecatedBody,{children:(0,i.jsx)(o.cC,{id:"VHfiai"})})}),(0,i.jsx)(c.DF,{onClick:async function(){if(m(!0),!s)return;const e=await(s(n)?.catch((e=>{m(!1),console.log(e)})));e&&l(e)},children:(0,i.jsx)(he.Tv.DeprecatedMediumHeader,{color:"white",children:(0,i.jsx)(o.cC,{id:"ZC2VJP"})})})]})}),p&&!r&&(0,i.jsxs)(Bt,{children:[(0,i.jsxs)(be.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(zt,{onClick:f})]}),(0,i.jsx)(Ft,{children:(0,i.jsx)(he._1,{src:Le.Z,alt:"loader",size:"90px"})}),(0,i.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,i.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,i.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(o.cC,{id:"cS4teF"})})}),(0,i.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(o.cC,{id:"oG26Rt"})})]})]}),r&&(0,i.jsxs)(Bt,{children:[(0,i.jsxs)(be.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(zt,{onClick:f})]}),(0,i.jsx)(Ft,{children:(0,i.jsx)(Ue.Z,{strokeWidth:.5,size:90,color:h.accent1})}),(0,i.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,i.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,i.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(o.cC,{id:"xthwq6"})})}),a&&(0,i.jsx)(he.dL,{href:(0,Ve.E)(a,r,Ve.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,i.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(o.cC,{id:"yVxaEc"})})})]})]})]})}const Gt=(0,me.default)(u.Tz).withConfig({displayName:"QueueModal__ContentWrapper",componentId:"sc-6467bc71-0"})`
  width: 100%;
  padding: 24px;
`,Zt=(0,me.default)(rt.Z).withConfig({displayName:"QueueModal__StyledClosed",componentId:"sc-6467bc71-1"})`
  :hover {
    cursor: pointer;
  }
`,qt=me.default.div.withConfig({displayName:"QueueModal__ConfirmOrLoadingWrapper",componentId:"sc-6467bc71-2"})`
  width: 100%;
  padding: 24px;
`,Yt=(0,me.default)(u.lg).withConfig({displayName:"QueueModal__ConfirmedIcon",componentId:"sc-6467bc71-3"})`
  padding: 60px 0;
`;function Qt({isOpen:e,onDismiss:t,proposalId:n}){const{chainId:a}=(0,d.useWeb3React)(),s=function(){const{account:e,chainId:t}=(0,d.useWeb3React)(),n=X(),i=(0,q.h7)();return(0,x.useCallback)((a=>{if(!e||!n||!a||!t)return;const s=[a];return n.estimateGas.queue(...s,{}).then((e=>n.queue(...s,{value:null,gasLimit:(0,$.y)(e)}).then((e=>(i(e,{type:Y.i.QUEUE,governorAddress:n.address,proposalId:parseInt(a)}),e.hash)))))}),[e,i,n,t])}(),[r,l]=(0,x.useState)(),[p,m]=(0,x.useState)(!1),h=(0,me.useTheme)();function f(){l(void 0),m(!1),t()}return(0,i.jsxs)(ye.Z,{isOpen:e,onDismiss:f,maxHeight:90,children:[!p&&!r&&(0,i.jsx)(Gt,{gap:"lg",children:(0,i.jsxs)(u.Tz,{gap:"lg",justify:"center",children:[(0,i.jsxs)(be.m0,{children:[(0,i.jsx)(he.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,i.jsx)(o.cC,{id:"PCMS6I",values:{proposalId:n}})}),(0,i.jsx)(Zt,{onClick:f})]}),(0,i.jsx)(be.m0,{children:(0,i.jsx)(he.Tv.DeprecatedBody,{children:(0,i.jsx)(o.cC,{id:"ZYe2DX"})})}),(0,i.jsx)(c.DF,{onClick:async function(){if(m(!0),!s)return;const e=await(s(n)?.catch((e=>{m(!1),console.log(e)})));e&&l(e)},children:(0,i.jsx)(he.Tv.DeprecatedMediumHeader,{color:"white",children:(0,i.jsx)(o.cC,{id:"b24kPi"})})})]})}),p&&!r&&(0,i.jsxs)(qt,{children:[(0,i.jsxs)(be.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(Zt,{onClick:f})]}),(0,i.jsx)(Yt,{children:(0,i.jsx)(he._1,{src:Le.Z,alt:"loader",size:"90px"})}),(0,i.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,i.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,i.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(o.cC,{id:"4iM1V1"})})}),(0,i.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(o.cC,{id:"oG26Rt"})})]})]}),r&&(0,i.jsxs)(qt,{children:[(0,i.jsxs)(be.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(Zt,{onClick:f})]}),(0,i.jsx)(Yt,{children:(0,i.jsx)(Ue.Z,{strokeWidth:.5,size:90,color:h.accent1})}),(0,i.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,i.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,i.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(o.cC,{id:"ExzCxg"})})}),a&&(0,i.jsx)(he.dL,{href:(0,Ve.E)(a,r,Ve.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,i.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(o.cC,{id:"yVxaEc"})})})]})]})]})}var Kt=n(44455),Xt=n(63362),Jt=n(55831),en=n.n(Jt),tn=n(51871),nn=n.n(tn);const an=(0,me.default)(u.Tz).withConfig({displayName:"VoteModal__ContentWrapper",componentId:"sc-7df8fc6e-0"})`
  width: 100%;
  padding: 24px;
`,sn=(0,me.default)(rt.Z).withConfig({displayName:"VoteModal__StyledClosed",componentId:"sc-7df8fc6e-1"})`
  :hover {
    cursor: pointer;
  }
`,on=me.default.div.withConfig({displayName:"VoteModal__ConfirmOrLoadingWrapper",componentId:"sc-7df8fc6e-2"})`
  width: 100%;
  padding: 24px;
`,rn=(0,me.default)(u.lg).withConfig({displayName:"VoteModal__ConfirmedIcon",componentId:"sc-7df8fc6e-3"})`
  padding: 60px 0;
`;function dn({isOpen:e,onDismiss:t,proposalId:n,voteOption:a}){const{chainId:s}=(0,d.useWeb3React)(),r=function(){const{account:e,chainId:t}=(0,d.useWeb3React)(),n=X(),i=(0,q.h7)();return(0,x.useCallback)(((a,s)=>{if(!e||!n||!a||!t)return;const o=[a,s===Q.N.Against?0:s===Q.N.For?1:2];return n.estimateGas.castVote(...o,{}).then((e=>n.castVote(...o,{value:null,gasLimit:(0,$.y)(e)}).then((e=>(i(e,{type:Y.i.VOTE,decision:s,governorAddress:n.address,proposalId:parseInt(a),reason:""}),e.hash)))))}),[e,i,n,t])}(),{votes:l}=pe(),[p,m]=(0,x.useState)(),[h,f]=(0,x.useState)(!1),g=(0,me.useTheme)();function y(){m(void 0),f(!1),t()}return(0,i.jsxs)(ye.Z,{isOpen:e,onDismiss:y,maxHeight:90,children:[!h&&!p&&(0,i.jsx)(an,{gap:"lg",children:(0,i.jsxs)(u.Tz,{gap:"lg",justify:"center",children:[(0,i.jsxs)(be.m0,{children:[(0,i.jsx)(he.Tv.DeprecatedMediumHeader,{fontWeight:535,children:a===Q.N.Against?(0,i.jsx)(o.cC,{id:"aSX+fT",values:{proposalId:n}}):a===Q.N.For?(0,i.jsx)(o.cC,{id:"A7Ys4I",values:{proposalId:n}}):(0,i.jsx)(o.cC,{id:"eiIsQo",values:{proposalId:n}})}),(0,i.jsx)(sn,{onClick:y})]}),(0,i.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(o.cC,{id:"WO4eRQ",values:{0:(0,dt.Z)(l,4)}})}),(0,i.jsx)(c.DF,{onClick:async function(){if(f(!0),!r||void 0===a)return;const e=await(r(n,a)?.catch((e=>{f(!1),console.log(e)})));e&&m(e)},children:(0,i.jsx)(he.Tv.DeprecatedMediumHeader,{color:"white",children:a===Q.N.Against?(0,i.jsx)(o.cC,{id:"aSX+fT",values:{proposalId:n}}):a===Q.N.For?(0,i.jsx)(o.cC,{id:"A7Ys4I",values:{proposalId:n}}):(0,i.jsx)(o.cC,{id:"eiIsQo",values:{proposalId:n}})})})]})}),h&&!p&&(0,i.jsxs)(on,{children:[(0,i.jsxs)(be.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(sn,{onClick:y})]}),(0,i.jsx)(rn,{children:(0,i.jsx)(he._1,{src:Le.Z,alt:"loader",size:"90px"})}),(0,i.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,i.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,i.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(o.cC,{id:"b2nic5"})})}),(0,i.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(o.cC,{id:"oG26Rt"})})]})]}),p&&(0,i.jsxs)(on,{children:[(0,i.jsxs)(be.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(sn,{onClick:y})]}),(0,i.jsx)(rn,{children:(0,i.jsx)(Ue.Z,{strokeWidth:.5,size:90,color:g.accent1})}),(0,i.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,i.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,i.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(o.cC,{id:"RSb2E9"})})}),s&&(0,i.jsx)(he.dL,{href:(0,Ve.E)(s,p,Ve.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,i.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(o.cC,{id:"yVxaEc"})})})]})]})]})}const ln=(0,me.default)(u.Tz).withConfig({displayName:"VotePage__PageWrapper",componentId:"sc-b378f0a5-0"})`
  padding-top: 68px;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,cn=(0,me.default)(u.Tz).withConfig({displayName:"VotePage__ProposalInfo",componentId:"sc-b378f0a5-1"})`
  background: ${({theme:e})=>e.surface1};
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  max-width: 640px;
  width: 100%;
`,pn=(0,me.default)(he.m_).withConfig({displayName:"VotePage__ArrowWrapper",componentId:"sc-b378f0a5-2"})`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 24px;
  color: ${({theme:e})=>e.neutral1};

  a {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
  :hover {
    text-decoration: none;
  }
`,un=me.default.div.withConfig({displayName:"VotePage__CardWrapper",componentId:"sc-b378f0a5-3"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
`,mn=(0,me.default)(nt.I8).withConfig({displayName:"VotePage__StyledDataCard",componentId:"sc-b378f0a5-4"})`
  width: 100%;
  background: none;
  background-color: ${({theme:e})=>e.surface1};
  height: fit-content;
  z-index: 2;
`,hn=me.default.div.withConfig({displayName:"VotePage__ProgressWrapper",componentId:"sc-b378f0a5-5"})`
  width: 100%;
  margin-top: 1rem;
  height: 4px;
  border-radius: 4px;
  background-color: ${({theme:e})=>e.surface2};
  position: relative;
`,fn=me.default.div.withConfig({displayName:"VotePage__Progress",componentId:"sc-b378f0a5-6"})`
  height: 4px;
  border-radius: 4px;
  background-color: ${({theme:e,status:t})=>"for"===t?e.success:e.critical};
  width: ${({percentageString:e})=>e??"0%"};
`,gn=me.default.div.withConfig({displayName:"VotePage__MarkDownWrapper",componentId:"sc-b378f0a5-7"})`
  max-width: 640px;
  overflow: hidden;
`,xn=(0,me.default)(be.m0).withConfig({displayName:"VotePage__WrapSmall",componentId:"sc-b378f0a5-8"})`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    align-items: flex-start;
    flex-direction: column;
  `};
`,yn=me.default.div.withConfig({displayName:"VotePage__DetailText",componentId:"sc-b378f0a5-9"})`
  word-break: break-all;
`,bn=(0,me.default)(he.dL).withConfig({displayName:"VotePage__ProposerAddressLink",componentId:"sc-b378f0a5-10"})`
  word-break: break-all;
`;function jn(e,t,n,i){if(e&&t&&n&&i){const a=new Date;return a.setTime(i.add(Lt.O$.from(n).mul(Lt.O$.from(e-t))).toNumber()*en()("1s")),a}}function Cn(){const{governorIndex:e,id:t}=(0,tt.UO)(),n=Number.parseInt(e),{chainId:a,account:s}=(0,d.useWeb3React)(),m=function(e){const t=X(),n=(0,R.Wk)(t,"quorumVotes")?.result?.[0],{chainId:i}=(0,d.useWeb3React)(),a=(0,x.useMemo)((()=>i?B.yg[i]:void 0),[i]);if(t&&n&&i===N.H.MAINNET&&a&&e===k)return I.CurrencyAmount.fromRawAmount(a,n)}(n),f=le(n,t),[g,b]=(0,x.useState)(void 0),j=(0,Ct.Wt)(vt.Lk.VOTE),C=(0,Ct.VE)(),v=(0,Ct.Wt)(vt.Lk.DELEGATE),w=(0,Ct.up)(),T=(0,Ct.Wt)(vt.Lk.QUEUE),E=(0,Ct.wG)(),A=(0,Ct.Wt)(vt.Lk.EXECUTE),P=(0,Ct.jC)(),M=(0,Xt.Z)(),$=(0,F.ZP)(),W=jn(f?.startBlock,$,(a&&S[a])??D,M),O=jn(f?.endBlock,$,(a&&S[a])??D,M),U=new Date,L=(0,Kt.eQ)(),V={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"},z=f?.eta?new Date(f.eta.mul(en()("1s")).toNumber()):void 0,H=f?.forCount?.add(f.againstCount),G=H?f?.forCount?.asFraction?.divide(H.asFraction)?.multiply(100):void 0,Z=G?new I.Fraction(100).subtract(G):void 0,q=function(e){const{account:t,chainId:n}=(0,d.useWeb3React)(),i=J(),a=(0,x.useMemo)((()=>n?B.yg[n]:void 0),[n]),s=(0,R.Wk)(i,"getPriorVotes",[t??void 0,e??void 0])?.result?.[0];return s&&a?I.CurrencyAmount.fromRawAmount(a,s):void 0}(f?.startBlock??void 0),Y=q&&h().greaterThan(q.quotient,h().BigInt(0))&&f&&f.status===ee.ACTIVE,K=s&&f?.status===ee.SUCCEEDED,te=s&&f?.status===ee.QUEUED,ne=(0,ct.mM)(s??void 0,a?B.yg[a]:void 0),ie=ce(),ae=Boolean(ne&&h().notEqual(ne.quotient,h().BigInt(0))&&ie===Tt.r_),se=e=>{if((0,wt.UJ)(e)&&a){const t=_[a]?.[e]??e;return(0,i.jsx)(he.dL,{href:(0,Ve.E)(a,e,Ve.r.ADDRESS),children:t})}return(0,i.jsx)("span",{children:e})};return(0,i.jsx)(l.fM,{page:r.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(ln,{gap:"lg",justify:"center",children:[(0,i.jsx)(dn,{isOpen:j,onDismiss:C,proposalId:f?.id,voteOption:g}),(0,i.jsx)(ht,{isOpen:v,onDismiss:w,title:(0,i.jsx)(o.cC,{id:"MdYzHJ"})}),(0,i.jsx)(Qt,{isOpen:T,onDismiss:E,proposalId:f?.id}),(0,i.jsx)(Ht,{isOpen:A,onDismiss:P,proposalId:f?.id}),(0,i.jsxs)(cn,{gap:"lg",justify:"start",children:[(0,i.jsxs)(be.m0,{style:{width:"100%"},children:[(0,i.jsx)(pn,{to:"/vote",children:(0,i.jsx)(o.cC,{id:"HgT4Lv",components:{0:(0,i.jsx)(y.Z,{size:20})}})}),f&&(0,i.jsx)(_t,{status:f.status})]}),(0,i.jsxs)(u.Tz,{gap:"10px",style:{width:"100%"},children:[(0,i.jsx)(he.Tv.DeprecatedLargeHeader,{style:{marginBottom:".5rem"},children:f?.title}),(0,i.jsx)(be.m0,{children:(0,i.jsx)(he.Tv.DeprecatedMain,{children:W&&W>U?(0,i.jsx)(o.cC,{id:"/lY+kD",values:{0:W.toLocaleString(L,V)}}):null})}),(0,i.jsx)(be.m0,{children:(0,i.jsx)(he.Tv.DeprecatedMain,{children:O&&(O<U?(0,i.jsx)(o.cC,{id:"3X8B3E",values:{0:O.toLocaleString(L,V)}}):(0,i.jsx)(o.cC,{id:"IPCr3d",values:{0:O.toLocaleString(L,V)}}))})}),f&&f.status===ee.ACTIVE&&!Y&&(0,i.jsx)(p.rd,{children:(0,i.jsxs)(he.Tv.DeprecatedBlack,{children:[(0,i.jsx)(o.cC,{id:"7bxUAT",values:{0:f.startBlock}})," ",ae&&(0,i.jsx)("span",{children:(0,i.jsx)(o.cC,{id:"LP6nKU",components:{0:(0,i.jsx)(he.m_,{to:"/vote"})}})})]})})]}),Y&&(0,i.jsxs)(be.DA,{style:{width:"100%",gap:"12px"},children:[(0,i.jsx)(c.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{b(Q.N.For),C()},children:(0,i.jsx)(o.cC,{id:"TW/9Cs"})}),(0,i.jsx)(c.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{b(Q.N.Against),C()},children:(0,i.jsx)(o.cC,{id:"taP3et"})})]}),K&&(0,i.jsx)(be.DA,{style:{width:"100%",gap:"12px"},children:(0,i.jsx)(c.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{E()},children:(0,i.jsx)(o.cC,{id:"b24kPi"})})}),te&&(0,i.jsxs)(i.Fragment,{children:[z&&(0,i.jsx)(be.m0,{children:(0,i.jsx)(he.Tv.DeprecatedBlack,{children:(0,i.jsx)(o.cC,{id:"bW/jOL",values:{0:z.toLocaleString(L,V)}})})}),(0,i.jsx)(be.DA,{style:{width:"100%",gap:"12px"},children:(0,i.jsx)(c.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{P()},disabled:!M||!f?.eta||M.lt(f.eta),children:(0,i.jsx)(o.cC,{id:"ZC2VJP"})})})]}),(0,i.jsxs)(un,{children:[(0,i.jsx)(mn,{children:(0,i.jsxs)(nt.uO,{children:[(0,i.jsx)(u.Tz,{gap:"md",children:(0,i.jsxs)(xn,{children:[(0,i.jsx)(he.Tv.DeprecatedBlack,{fontWeight:535,children:(0,i.jsx)(o.cC,{id:"YHpbe1"})}),f&&(0,i.jsxs)(he.Tv.DeprecatedBlack,{fontWeight:535,children:[f.forCount.toFixed(0,{groupSeparator:","}),m&&(0,i.jsx)("span",{style:{fontWeight:485},children:` / ${m.toExact({groupSeparator:","})}`})]})]})}),(0,i.jsx)(hn,{children:(0,i.jsx)(fn,{status:"for",percentageString:f?.forCount.greaterThan(0)?`${G?.toFixed(0)??0}%`:"0%"})})]})}),(0,i.jsx)(mn,{children:(0,i.jsxs)(nt.uO,{children:[(0,i.jsx)(u.Tz,{gap:"md",children:(0,i.jsxs)(xn,{children:[(0,i.jsx)(he.Tv.DeprecatedBlack,{fontWeight:535,children:(0,i.jsx)(o.cC,{id:"GFvPy6"})}),f&&(0,i.jsx)(he.Tv.DeprecatedBlack,{fontWeight:535,children:f.againstCount.toFixed(0,{groupSeparator:","})})]})}),(0,i.jsx)(hn,{children:(0,i.jsx)(fn,{status:"against",percentageString:f?.againstCount?.greaterThan(0)?`${Z?.toFixed(0)??0}%`:"0%"})})]})})]}),(0,i.jsxs)(u.Tz,{gap:"md",children:[(0,i.jsx)(he.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,i.jsx)(o.cC,{id:"URmyfc"})}),f?.details?.map(((e,t)=>(0,i.jsxs)(yn,{children:[t+1,": ",se(e.target),".",e.functionSig,"(",e.callData.split(",").map(((t,n)=>(0,i.jsxs)("span",{children:[se(t),e.callData.split(",").length-1===n?"":","]},n))),")"]},t)))]}),(0,i.jsxs)(u.Tz,{gap:"md",children:[(0,i.jsx)(he.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,i.jsx)(o.cC,{id:"Nu4oKW"})}),(0,i.jsx)(gn,{children:(0,i.jsx)(nn(),{source:f?.description,renderers:{image:function({...e}){return(0,i.jsx)("img",{...e,style:{width:"100%",height:"100$",objectFit:"cover"},alt:""})}}})})]}),(0,i.jsxs)(u.Tz,{gap:"md",children:[(0,i.jsx)(he.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,i.jsx)(o.cC,{id:"5nBkYU"})}),(0,i.jsx)(bn,{href:f?.proposer&&a?(0,Ve.E)(a,f?.proposer,Ve.r.ADDRESS):"",children:(0,i.jsx)(nn(),{source:f?.proposer})})]})]})]}),(0,i.jsx)(st.c,{})]})})}function vn(){return(0,i.jsxs)(tt.Z5,{children:[(0,i.jsx)(tt.AW,{path:"/",element:(0,i.jsx)(Ut,{})}),(0,i.jsx)(tt.AW,{path:":governorIndex/:id",element:(0,i.jsx)(Cn,{})}),(0,i.jsx)(tt.AW,{path:"create-proposal",element:(0,i.jsx)(et,{})})]})}},15993:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(15387),a=n(29198),s=n(44998),o=n.n(s);function r({number:e,locale:t,sigFigs:n,fixedDecimals:i,options:s={}}){let o,r;if(o=!t||t&&!a.RF.includes(t)?a.ZW:[t,a.ZW],s.minimumFractionDigits=s.minimumFractionDigits||i,s.maximumFractionDigits=s.maximumFractionDigits||i,s.maximumSignificantDigits=s.maximumSignificantDigits||i?void 0:n,"number"===typeof e)r=i?parseFloat(e.toFixed(i)):e;else{const t=parseFloat(e.toSignificant(n));r=i?parseFloat(t.toFixed(i)):t}return r.toLocaleString(o,s)}function d(e,t,n=a.ZW,s){return e?o().equal(e.quotient,o().BigInt(0))?"0":e.divide(e.decimalScale).lessThan(new i.Fraction(1,1e5))?`<${r({number:1e-5,locale:n})}`:r({number:e,locale:n,sigFigs:t,fixedDecimals:s}):"-"}}}]);
//# sourceMappingURL=6154.db3182c7.chunk.js.map