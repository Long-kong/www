"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2476],{17015:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var i=n(42893),d=n(12204),r=n(19903),a=n(80815),o=n(66196),s=n(22875),l=n(6053),c=n(44998),u=n.n(c),p=n(13712),m=n(47212),x=n(41440),h=n(47096),f=n(87253),g=n(39839),j=n(60198),w=n(42246),A=n(60476),y=n(19969),k=n(16403),v=n(2304),T=n(20095),_=n(85729),b=n(91101),R=n(97761),C=n(42881),B=n(45433),I=n(57916),N=n(15387),E=n(30112),F=n(45492),M=n(63362),q=n(61646),S=n(58025);const D=new B.vU(I.Mt),P={1:[{tokens:[S.Fl[F.H.MAINNET],S.h1],stakingRewardAddress:"0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711"},{tokens:[S.Fl[F.H.MAINNET],S.Hz],stakingRewardAddress:"0x7FBa4B8Dc5E7616e59622806932DBea72537A56b"},{tokens:[S.Fl[F.H.MAINNET],S.AA],stakingRewardAddress:"0x6C3e4cb2E96B01F4b866965A91ed4437839A121a"},{tokens:[S.Fl[F.H.MAINNET],S.ML],stakingRewardAddress:"0xCA35e32e7926b96A9988f61d510E038108d8068e"}]};var W=n(64614);const H=(0,f.default)(A.Tz).withConfig({displayName:"v2__PageWrapper",componentId:"sc-9a4b705-0"})`
  max-width: 640px;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0px 8px;
  `};
`,z=(0,f.default)(y.I8).withConfig({displayName:"v2__LPFeeExplainer",componentId:"sc-9a4b705-1"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  margin: 0 0 16px 0;
  overflow: hidden;
`,L=(0,f.default)(v.m0).withConfig({displayName:"v2__TitleRow",componentId:"sc-9a4b705-2"})`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    flex-direction: column-reverse;
  `};
`,U=(0,f.default)(v.DA).withConfig({displayName:"v2__ButtonRow",componentId:"sc-9a4b705-3"})`
  gap: 8px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  `};
`,Y=(0,f.default)(j.DF).withConfig({displayName:"v2__ResponsiveButtonPrimary",componentId:"sc-9a4b705-4"})`
  height: 40px;
  width: fit-content;
  border-radius: 12px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,$=(0,f.default)(j.PL).withConfig({displayName:"v2__ResponsiveButtonSecondary",componentId:"sc-9a4b705-5"})`
  height: 40px;
  width: fit-content;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
  color: #fff;
  border-color: #fff;
`,O=f.default.div.withConfig({displayName:"v2__EmptyProposals",componentId:"sc-9a4b705-6"})`
  border: 1px solid ${({theme:e})=>e.neutral2};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function Z(){const e=(0,f.useTheme)(),{account:t}=(0,a.useWeb3React)(),n=(0,l.G)();let c=(0,W.B3)();n||(c=[]);const B=(0,p.useMemo)((()=>c.map((e=>({liquidityToken:(0,W.Ce)(e),tokens:e})))),[c]),I=(0,p.useMemo)((()=>B.map((e=>e.liquidityToken))),[B]),[F,Z]=(0,C.v2)(t??void 0,I),G=(0,p.useMemo)((()=>B.filter((({liquidityToken:e})=>F[e.address]?.greaterThan("0")))),[B,F]),J=(0,R.OY)(G.map((({tokens:e})=>e))),Q=Z||J?.length<G.length||J?.some((e=>!e)),V=J.map((([,e])=>e)).filter((e=>Boolean(e))),X=function(e){const{chainId:t,account:n}=(0,a.useWeb3React)(),i=(0,M.Z)(),d=(0,p.useMemo)((()=>t?P[t]?.filter((t=>void 0===e||null!==e&&e.involvesToken(t.tokens[0])&&e.involvesToken(t.tokens[1])))??[]:[]),[t,e]),r=t?S.yg[t]:void 0,o=(0,p.useMemo)((()=>d.map((({stakingRewardAddress:e})=>e))),[d]),s=(0,p.useMemo)((()=>[n??void 0]),[n]),l=(0,q._Y)(o,D,"balanceOf",s),c=(0,q._Y)(o,D,"earned",s),m=(0,q._Y)(o,D,"totalSupply"),x=(0,q._Y)(o,D,"rewardRate",void 0,q.DB),h=(0,q._Y)(o,D,"periodFinish",void 0,q.DB);return(0,p.useMemo)((()=>t&&r?o.reduce(((e,t,n)=>{const a=l[n],o=c[n],s=m[n],p=x[n],f=h[n];if(!a?.loading&&!o?.loading&&s&&!s.loading&&p&&!p.loading&&f&&!f.loading){if(a?.error||o?.error||s.error||p.error||f.error)return console.error("Failed to load staking rewards info"),e;const l=d[n].tokens,c=new E.Pair(N.CurrencyAmount.fromRawAmount(l[0],"0"),N.CurrencyAmount.fromRawAmount(l[1],"0")),m=N.CurrencyAmount.fromRawAmount(c.liquidityToken,u().BigInt(a?.result?.[0]??0)),x=N.CurrencyAmount.fromRawAmount(c.liquidityToken,u().BigInt(s.result?.[0])),h=N.CurrencyAmount.fromRawAmount(r,u().BigInt(p.result?.[0])),g=(e,t,n)=>N.CurrencyAmount.fromRawAmount(r,u().greaterThan(t.quotient,u().BigInt(0))?u().divide(u().multiply(n.quotient,e.quotient),t.quotient):u().BigInt(0)),j=g(m,x,h),w=f.result?.[0]?.toNumber(),A=1e3*w,y=!w||!i||w>i.toNumber();e.push({stakingRewardAddress:t,tokens:d[n].tokens,periodFinish:A>0?new Date(A):void 0,earnedAmount:N.CurrencyAmount.fromRawAmount(r,u().BigInt(o?.result?.[0]??0)),rewardRate:j,totalRewardRate:h,stakedAmount:m,totalStakedAmount:x,getHypotheticalRewardRate:g,active:y})}return e}),[]):[]),[l,t,i,c,d,h,x,o,m,r])}(),K=X?.filter((e=>u().greaterThan(e.stakedAmount.quotient,b.iV))),ee=(0,R.OY)(K?.map((e=>e.tokens))),te=V.filter((e=>0===ee?.map((e=>e[1])).filter((t=>t?.liquidityToken.address===e.liquidityToken.address)).length));return(0,i.jsx)(o.fM,{page:r.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(H,{children:[(0,i.jsxs)(z,{children:[(0,i.jsx)(y.sq,{}),(0,i.jsx)(y.RF,{}),(0,i.jsx)(y.sq,{}),(0,i.jsx)(y.RF,{})]}),n?(0,i.jsx)(A.Tz,{gap:"lg",justify:"center",children:(0,i.jsxs)(A.Tz,{gap:"md",style:{width:"100%"},children:[(0,i.jsxs)(L,{style:{marginTop:"1rem"},padding:"0",children:[(0,i.jsx)(g.Pw,{children:(0,i.jsx)(g.Tv.DeprecatedMediumHeader,{style:{marginTop:"0.5rem",justifySelf:"flex-start"},children:(0,i.jsx)(d.cC,{id:"MbHgIE"})})}),(0,i.jsxs)(U,{children:[(0,i.jsx)($,{as:x.rU,padding:"6px 8px",to:"/add/v2/ETH",children:(0,i.jsx)(d.cC,{id:"ma87bD"})}),(0,i.jsx)(Y,{id:"find-pool-button",as:x.rU,to:"/pools/v2/find",padding:"6px 8px",children:(0,i.jsx)(h.xv,{fontWeight:535,fontSize:16,children:(0,i.jsx)(d.cC,{id:"SkceS7"})})}),(0,i.jsx)(Y,{id:"join-pool-button",as:x.rU,to:"/add/v2/ETH",padding:"6px 8px",children:(0,i.jsx)(h.xv,{fontWeight:535,fontSize:16,children:(0,i.jsx)(d.cC,{id:"knGjuL"})})})]})]}),t?Q?(0,i.jsx)(O,{children:(0,i.jsx)(g.Tv.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,i.jsx)(T.bb,{children:(0,i.jsx)(d.cC,{id:"yQE2r9"})})})}):V?.length>0||ee?.length>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.PL,{children:(0,i.jsx)(v.m0,{children:(0,i.jsx)(d.cC,{id:"vAuUUB",components:{0:(0,i.jsx)(g.dL,{href:"https://v2.info.uniswap.org/account/"+t}),1:(0,i.jsx)("span",{})}})})}),te.map((e=>(0,i.jsx)(k.ZP,{pair:e},e.liquidityToken.address))),ee.map(((e,t)=>e[1]&&(0,i.jsx)(k.ZP,{pair:e[1],stakedBalance:K[t].stakedAmount},K[t].stakingRewardAddress))),(0,i.jsx)(v.DA,{justify:"center",style:{width:"100%"},children:(0,i.jsxs)(j.JU,{as:x.rU,to:"/migrate/v2",id:"import-pool-link",style:{padding:"8px 16px",margin:"0 4px",borderRadius:"12px",width:"fit-content",fontSize:"14px"},children:[(0,i.jsx)(m.Z,{size:16,style:{marginRight:"8px"}}),(0,i.jsx)(d.cC,{id:"kBAezW"})]})})]}):(0,i.jsx)(O,{children:(0,i.jsx)(g.Tv.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,i.jsx)(d.cC,{id:"erwMRf"})})}):(0,i.jsx)(w.ZP,{padding:"40px",children:(0,i.jsx)(g.Tv.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,i.jsx)(d.cC,{id:"jWRT4F"})})})]})}):(0,i.jsx)(s.A,{})]}),(0,i.jsx)(_.c,{})]})})}},49111:function(e,t,n){n.d(t,{B:function(){return r}});var i=n(48141),d=n(58025);function r(e){if(e.isNative)return e;const t=(0,i.oG)(e.chainId);return t&&d.Fl[t]?.equals(e)?(0,d.gX)(e.chainId):e}}}]);
//# sourceMappingURL=2476.40ee6510.chunk.js.map