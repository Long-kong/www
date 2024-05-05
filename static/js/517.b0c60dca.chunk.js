"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[517],{20555:function(e,a,t){t.d(a,{K:function(){return l}});var n=t(1152),i=t(13712),r=t(79954);function o(e,a){const t=e?.markets?.[0];if(!a&&!e?.nftContracts?.[0]?.address)return{};const n={};return e?.traits&&e?.traits.forEach((e=>{e.name&&e.stats&&(n[e.name]=e.stats.map((e=>({trait_type:e.name,trait_value:e.value,trait_count:e.assets}))))})),{address:a??e?.nftContracts?.[0]?.address??"",isVerified:e?.isVerified,name:e?.name,description:e?.description,standard:e?.nftContracts?.[0]?.standard,bannerImageUrl:e?.bannerImage?.url,stats:{num_owners:t?.owners,floor_price:t?.floorPrice?.value,one_day_volume:t?.volume?.value,one_day_change:t?.volumePercentChange?.value,one_day_floor_change:t?.floorPricePercentChange?.value,banner_image_url:e?.bannerImage?.url,total_supply:e?.numAssets,total_listings:t?.listings?.value,total_volume:t?.totalVolume?.value},traits:n,marketplaceCount:t?.marketplaces?.map((e=>({marketplace:e.marketplace?.toLowerCase()??"",count:e.listings??0,floorPrice:e.floorPrice??0}))),imageUrl:e?.image?.url??"",twitterUrl:e?.twitterName,instagram:e?.instagramName,discordUrl:e?.discordUrl,externalUrl:e?.homepageUrl,rarityVerified:!1}}function l(e,a){const{data:t,loading:n}=(0,r.aG)({variables:{addresses:e},skip:a}),l=t?.nftCollections?.edges?.[0]?.node;return(0,i.useMemo)((()=>({data:o(l,e),loading:n})),[e,n,l])}n.ZP`
  query Collection($addresses: [String!]!) {
    nftCollections(filter: { addresses: $addresses }) {
      edges {
        cursor
        node {
          bannerImage {
            url
          }
          collectionId
          description
          discordUrl
          homepageUrl
          image {
            url
          }
          instagramName
          isVerified
          name
          numAssets
          twitterName
          nftContracts {
            address
            chain
            name
            standard
            symbol
            totalSupply
          }
          traits {
            name
            values
            stats {
              name
              value
              assets
              listings
            }
          }
          markets(currencies: ETH) {
            floorPrice {
              currency
              value
            }
            owners
            totalVolume {
              value
              currency
            }
            listings {
              value
            }
            volume(duration: DAY) {
              value
              currency
            }
            volumePercentChange(duration: DAY) {
              value
              currency
            }
            floorPricePercentChange(duration: DAY) {
              value
              currency
            }
            marketplaces {
              marketplace
              listings
              floorPrice
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`},80517:function(e,a,t){t.r(a),t.d(a,{default:function(){return ta}});var n=t(42893),i=t(19903),r=t(66196),o=t(79954),l=t(1152),s=t(13712);function d(e,a){const{data:t,loading:n,error:i}=(0,o.FH)({variables:{size:e,timePeriod:a}});return{data:(0,s.useMemo)((()=>t?.topCollections?.edges?.map((e=>{const a=e?.node;return{name:a.name,address:a.nftContracts?.[0]?.address,imageUrl:a.image?.url,bannerImageUrl:a.bannerImage?.url,isVerified:a.isVerified,volume:a.markets?.[0]?.volume?.value,volumeChange:a.markets?.[0]?.volumePercentChange?.value,floor:a.markets?.[0]?.floorPrice?.value,floorChange:a.markets?.[0]?.floorPricePercentChange?.value,marketCap:a.markets?.[0]?.totalVolume?.value,percentListed:(a.markets?.[0]?.listings?.value??0)/(a.nftContracts?.[0]?.totalSupply??1),owners:a.markets?.[0]?.owners,sales:a.markets?.[0]?.sales?.value,totalSupply:a.nftContracts?.[0]?.totalSupply}}))),[t?.topCollections?.edges]),loading:n,error:i}}l.ZP`
  query TrendingCollections($size: Int, $timePeriod: HistoryDuration) {
    topCollections(first: $size, duration: $timePeriod) {
      edges {
        node {
          name
          nftContracts {
            address
            totalSupply
          }
          image {
            url
          }
          bannerImage {
            url
          }
          isVerified
          markets(currencies: ETH) {
            floorPrice {
              value
            }
            owners
            totalVolume {
              value
            }
            volume(duration: $timePeriod) {
              value
            }
            volumePercentChange(duration: $timePeriod) {
              value
            }
            floorPricePercentChange(duration: $timePeriod) {
              value
            }
            sales {
              value
            }
            listings {
              value
            }
          }
        }
      }
    }
  }
`;var c=t(12113),m=t(80657),p=t(87253),u=t(26030),h=t(68830);const g=p.default.div.withConfig({displayName:"Carousel__CarouselContainer",componentId:"sc-718aa339-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,x=p.default.div.withConfig({displayName:"Carousel__CarouselCardContainer",componentId:"sc-718aa339-1"})`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  height: 390px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 600px;
  }
`,f=(0,p.default)(h.a.div).withConfig({displayName:"Carousel__CarouselItemCard",componentId:"sc-718aa339-2"})`
  display: flex;
  justify-content: center;
  padding: 4px 12px 32px;
  position: absolute;
  will-change: transform;
  width: calc(100%);
  height: calc(100%);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 4px 32px 32px;
  }
`,b=p.default.div.withConfig({displayName:"Carousel__CarouselItemIcon",componentId:"sc-718aa339-3"})`
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: none;
  user-select: none;
  height: calc(100%);
  padding: 4px 0 32px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    display: flex;
  }

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,C=800,y=({children:e,activeIndex:a,toggleNextSlide:t})=>{const i=(0,s.useCallback)(((a,t=e.length)=>(0,c.ef)(a,t)),[e]),r=(0,s.useCallback)(((e,a,t)=>(0,c.E)(e,a,t,i)),[i]),[o,l]=(0,h.useSprings)(e.length,(a=>({x:(a<e.length-1?a:-1)*C}))),d=(0,s.useRef)([0,1]),m=(0,s.useCallback)(((a,t)=>{const n=i(Math.floor(a/C)%e.length),o=t<0?e.length-2:1;l((i=>{const l=r(i,n,o),s=r(i,d.current[0],d.current[1]),m=(0,c.Z1)(n,o,l,e.length,a);return{x:-a%(C*e.length)+C*m,immediate:t<0?s>l:s<l,config:{tension:250,friction:30}}})),d.current=[n,o]}),[i,r,l,e.length]),p=(0,s.useRef)(0);(0,s.useEffect)((()=>{m(a*C,p.current)}),[a,m]);const y=(0,s.useCallback)((e=>{p.current=e,t(e)}),[t]);return(0,s.useEffect)((()=>{const e=setInterval((async()=>{y(1)}),7e3);return()=>{clearInterval(e)}}),[y,a]),(0,n.jsxs)(g,{children:[(0,n.jsx)(b,{onClick:()=>y(-1),children:(0,n.jsx)(u.wy,{width:"16px",height:"16px"})}),(0,n.jsx)(x,{children:o.map((({x:a},t)=>(0,n.jsx)(f,{style:{x:a},children:e[t]},t)))}),(0,n.jsx)(b,{onClick:()=>y(1),children:(0,n.jsx)(u.XC,{width:"16px",height:"16px"})})]})},w=({children:e})=>(0,n.jsx)(y,{activeIndex:0,toggleNextSlide:()=>{},children:[e]});var v=t(13119),j=t(80343),_=t(20555),k=t(1004),T=t(85325),$=t(57482);const N=p.default.div.withConfig({displayName:"CarouselCard__CarouselCardBorder",componentId:"sc-a2f657bb-0"})`
  width: 100%;
  position: relative;
  border-radius: 21px;
  cursor: pointer;
  border: 1px solid transparent;
  transition-property: border-color;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};
  }

  ::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    z-index: -1;
    box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
    transition-property: opacity;
    transition-duration: ${({theme:e})=>e.transition.duration.fast};
    transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};
  }

  :hover::after {
    opacity: 1;
  }
`,I=p.default.div.withConfig({displayName:"CarouselCard__CardHeaderContainer",componentId:"sc-a2f657bb-1"})`
  position: relative;
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,S=p.default.div.withConfig({displayName:"CarouselCard__LoadingCardHeaderContainer",componentId:"sc-a2f657bb-2"})`
  position: relative;
  animation: ${v.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,H=p.default.div.withConfig({displayName:"CarouselCard__CardHeaderColumn",componentId:"sc-a2f657bb-3"})`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 202px;
  justify-content: center;
  padding: 0 40px;
  z-index: 1;
`,z=p.default.div.withConfig({displayName:"CarouselCard__IconContainer",componentId:"sc-a2f657bb-4"})`
  display: inline-flex;
  vertical-align: text-bottom;
  margin-left: 2px;
  transform: translateY(-2px) translateX(2px);
`,P=p.default.div.withConfig({displayName:"CarouselCard__CollectionNameContainer",componentId:"sc-a2f657bb-5"})`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  max-height: 56px;
`,F=(0,p.default)(j.X).withConfig({displayName:"CarouselCard__LoadingCollectionNameContainer",componentId:"sc-a2f657bb-6"})`
  width: 50%;
`,E=p.default.div.withConfig({displayName:"CarouselCard__HeaderOverlay",componentId:"sc-a2f657bb-7"})`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.08));
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 0;

  // overlay workaround for firefox only
  @supports (-moz-appearance: none) {
    bottom: -1px;
  }
`,V=p.default.img.withConfig({displayName:"CarouselCard__CollectionImage",componentId:"sc-a2f657bb-8"})`
  width: 86px;
  height: 86px;
  background: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border: 2px solid ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border-radius: 100px;
`,D=p.default.div.withConfig({displayName:"CarouselCard__LoadingCollectionImage",componentId:"sc-a2f657bb-9"})`
  width: 86px;
  height: 86px;
  border-radius: 100px;
  animation: ${v.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,B=(0,p.default)(j.X).withConfig({displayName:"CarouselCard__LoadingTableElement",componentId:"sc-a2f657bb-10"})`
  width: 50px;
`,X=p.default.div.withConfig({displayName:"CarouselCard__TableElement",componentId:"sc-a2f657bb-11"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,L=p.default.div.withConfig({displayName:"CarouselCard__FirstColumnTextWrapper",componentId:"sc-a2f657bb-12"})``,M=p.default.div.withConfig({displayName:"CarouselCard__CardBottomContainer",componentId:"sc-a2f657bb-13"})`
  display: grid;
  flex: 1;
  gap: 8px;
  grid-template-columns: auto auto auto;
  padding: 16px 16px 20px;
`,O=p.default.img.withConfig({displayName:"CarouselCard__MarketplaceIcon",componentId:"sc-a2f657bb-14"})`
  width: 20px;
  height: 20px;
`,A=p.default.div.withConfig({displayName:"CarouselCard__CarouselCardContainer",componentId:"sc-a2f657bb-15"})`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  ${X}:nth-child(3n-1), ${B}:nth-child(3n-1) {
    justify-self: center;
  }

  ${X}:nth-child(3n), ${B}:nth-child(3n) {
    justify-self: right;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) or ((min-width: ${({theme:e})=>e.breakpoint.sm}px) and (max-width: 880px)) {
    ${L} {
      display: none;
    }
    ${X} {
      justify-self: left !important;
    }
    ${H} {
      padding: 0 20px;
    }
  }
`,G=({marketplace:e,floorInEth:a,listings:t})=>{const{formatNumberOrString:i}=(0,$.Gb)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(X,{children:[(0,n.jsx)(O,{src:`/nft/svgs/marketplaces/${e.toLowerCase()}-grey.svg`,alt:`${e} icon`}),(0,n.jsx)(L,{children:(0,n.jsx)(T.T.BodySmall,{color:"neutral2",children:e})})]}),(0,n.jsx)(X,{children:(0,n.jsx)(T.T.BodySmall,{color:"neutral2",children:Number(a)>0?`${i({input:a,type:$.sw.NFTTokenFloorPriceTrailingZeros})} ETH`:"-"})}),(0,n.jsx)(X,{children:(0,n.jsx)(T.T.BodySmall,{color:"neutral2",children:Number(t)>0?t:"None"})})]})},R=[k.Fz.Opensea,k.Fz.X2Y2,k.Fz.LooksRare],U={[k.Fz.Opensea]:"OpenSea",[k.Fz.X2Y2]:"X2Y2",[k.Fz.LooksRare]:"LooksRare"},W=({collection:e,onClick:a})=>{const{data:t,loading:i}=(0,_.K)(e.address??""),{formatNumber:r}=(0,$.Gb)();return i?(0,n.jsx)(K,{}):(0,n.jsx)(N,{children:(0,n.jsxs)(A,{onClick:a,children:[(0,n.jsx)(q,{collection:e}),(0,n.jsx)(M,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(X,{children:[(0,n.jsx)(u.pD,{width:"20",height:"20"}),(0,n.jsx)(L,{children:(0,n.jsx)(T.T.SubHeaderSmall,{color:"userThemeColor",children:"Uniswap"})})]}),(0,n.jsx)(X,{children:e.floor&&(0,n.jsxs)(T.T.SubHeaderSmall,{color:"userThemeColor",children:[r({input:e.floor,type:$.sw.NFTToken})," ETH Floor"]})}),(0,n.jsx)(X,{children:(0,n.jsxs)(T.T.SubHeaderSmall,{color:"userThemeColor",children:[t.marketplaceCount?.reduce(((e,a)=>e+a.count),0)," Listings"]})}),R.map((a=>{const i=t.marketplaceCount?.find((e=>e.marketplace===a));return i?(0,n.jsx)(G,{marketplace:U[a],listings:i.count,floorInEth:i.floorPrice},`CarouselCard-key-${e.address}-${i.marketplace}`):null}))]})})]})})},Y=()=>(0,n.jsx)(n.Fragment,{children:[...Array(12)].map((e=>(0,n.jsx)(B,{},e)))}),Z=(0,p.default)(T.T.MediumHeader).withConfig({displayName:"CarouselCard__CollectionName",componentId:"sc-a2f657bb-16"})`
  display: inline;
  vertical-align: text-bottom;
  line-height: 28px;
`,q=({collection:e})=>(0,n.jsxs)(I,{src:e.bannerImageUrl??"",children:[(0,n.jsxs)(H,{children:[(0,n.jsx)(V,{src:e.imageUrl}),(0,n.jsxs)(P,{children:[(0,n.jsx)(Z,{color:"deprecated_accentTextLightPrimary",fontWeight:"500",children:e.name}),e.isVerified&&(0,n.jsx)(z,{children:(0,n.jsx)(u.SA,{width:"24px",height:"24px"})})]})]}),(0,n.jsx)(E,{})]}),K=({collection:e})=>(0,n.jsx)(N,{children:(0,n.jsxs)(A,{children:[e?(0,n.jsx)(q,{collection:e}):(0,n.jsxs)(S,{children:[(0,n.jsxs)(H,{children:[(0,n.jsx)(D,{}),(0,n.jsx)(F,{})]}),(0,n.jsx)(E,{})]}),(0,n.jsx)(M,{children:(0,n.jsx)(Y,{})})]})}),J=p.default.div.withConfig({displayName:"Banner__BannerContainer",componentId:"sc-37b670da-0"})`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 22px;
  position: relative;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding: 32px 16px;
  }
`,Q=p.default.div.withConfig({displayName:"Banner__BannerMainArea",componentId:"sc-37b670da-1"})`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 36px;
  max-width: ${({theme:e})=>e.maxWidth};
  justify-content: space-between;
  z-index: 2;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    height: 100%;
    gap: 14px;
    margin-top: 4px;
    margin-bottom: 6px;
  }
`,ee=p.default.div.withConfig({displayName:"Banner__HeaderContainer",componentId:"sc-37b670da-2"})`
  display: flex;
  max-width: 500px;
  font-weight: 535;
  font-size: 72px;
  line-height: 88px;
  align-self: center;
  flex-shrink: 0;
  padding-bottom: 32px;

  color: ${({theme:e})=>e.neutral1};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    font-size: 48px;
    line-height: 67px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    font-size: 36px;
    line-height: 50px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    line-height: 43px;
    text-align: center;
    padding-bottom: 16px;

    br {
      display: none;
    }
  }

  /* Custom breakpoint to split into two lines on smaller screens */
  @media only screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 0;

    br {
      display: unset;
    }
  }
`,ae=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"];var te=()=>{const e=(0,m.s0)(),{data:a}=d(5+ae.length,o._u.Day),t=(0,s.useMemo)((()=>a?.filter((e=>e.address&&!ae.includes(e.address))).slice(0,5)),[a]),[i,r]=(0,s.useState)(0),l=(0,s.useCallback)((e=>{t&&r((a=>(0,c.ef)(a+e,t.length)))}),[t]);return(0,n.jsx)(J,{children:(0,n.jsxs)(Q,{children:[(0,n.jsxs)(ee,{children:["Better prices. ",(0,n.jsx)("br",{}),"More listings."]}),t?(0,n.jsx)(y,{activeIndex:i,toggleNextSlide:l,children:t.map((a=>(0,n.jsx)(W,{collection:a,onClick:()=>e(`/nfts/collection/${a.address}`)},a.address)))}):(0,n.jsx)(w,{children:(0,n.jsx)(K,{})})]})})},ne=t(62329),ie=t(5658),re=t(39839),oe=t(69867),le=t(86682);t(84137),t(46912);const se=p.default.div.withConfig({displayName:"Cells__TruncatedText",componentId:"sc-6ddadcc7-0"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,de=(0,p.default)(se).withConfig({displayName:"Cells__CollectionNameContainer",componentId:"sc-6ddadcc7-1"})`
  display: flex;
  padding: 14px 0px 14px 8px;
  align-items: center;
`,ce=(0,p.default)(se).withConfig({displayName:"Cells__CollectionName",componentId:"sc-6ddadcc7-2"})`
  margin-left: 8px;
`,me=(0,p.default)(re.Tv.SubHeader).withConfig({displayName:"Cells__TruncatedSubHeader",componentId:"sc-6ddadcc7-3"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,pe=(0,p.default)(re.Tv.SubHeaderSmall).withConfig({displayName:"Cells__TruncatedSubHeaderSmall",componentId:"sc-6ddadcc7-4"})`
  color: ${({theme:e})=>`${e.neutral1}`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ue=p.default.div.withConfig({displayName:"Cells__RoundedImage",componentId:"sc-6ddadcc7-5"})`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  background: ${({src:e,theme:a})=>e?`url(${e})`:a.surface2};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`,he=p.default.div.withConfig({displayName:"Cells__ChangeCellContainer",componentId:"sc-6ddadcc7-6"})`
  display: flex;
  color: ${({theme:e,change:a})=>a>=0?e.success:e.critical};
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`,ge=p.default.div.withConfig({displayName:"Cells__EthContainer",componentId:"sc-6ddadcc7-7"})`
  display: flex;
  justify-content: flex-end;
`,xe=({value:e})=>{const a=(0,ie.dD)();return(0,n.jsxs)(de,{children:[(0,n.jsx)(ue,{src:e.logo}),(0,n.jsx)(ce,{children:a?(0,n.jsx)(pe,{children:e.name}):(0,n.jsx)(me,{children:e.name})}),e.isVerified&&(0,n.jsx)("span",{className:"rgw6ezl4 rgw6ez454 rgw6ez2o4 rgw6ez19s rgw6ez12s rgw6ez45y",children:(0,n.jsx)(u.SA,{})})]})},fe=({value:e})=>{const{formatNumberOrString:a}=(0,$.Gb)();return(0,n.jsx)("span",{children:e.value?a({input:e.value,type:$.sw.NFTCollectionStats}):"-"})},be=(e,a,t,n)=>e===k.VG.ETH?t:n&&t?n*(a?parseFloat((0,oe.formatEther)(t)):t):void 0,Ce=({value:e,denomination:a,usdPrice:t})=>{const{formatNumberOrString:i}=(0,$.Gb)(),r=be(a,!1,e,t),o=a===k.VG.ETH,l=i({input:r,type:o?$.sw.NFTToken:$.sw.FiatTokenStats})+(o?" ETH":""),s=(0,ie.dD)()?re.Tv.BodySmall:re.Tv.BodyPrimary;return(0,n.jsx)(ge,{children:(0,n.jsx)(s,{children:e?l:"-"})})},ye=({value:e})=>(0,n.jsx)(re.Tv.BodyPrimary,{children:e}),we=({value:e,denomination:a,usdPrice:t})=>{const{formatNumberOrString:i}=(0,$.Gb)(),r=be(a,!1,e,t),o=a===k.VG.ETH,l=i({input:r,type:o?$.sw.WholeNumber:$.sw.FiatTokenStats})+(o?" ETH":"");return(0,n.jsx)(ge,{children:(0,n.jsx)(re.Tv.BodyPrimary,{children:l})})},ve=({change:e,children:a})=>{const t=(0,ie.dD)()?re.Tv.BodySmall:re.Tv.BodyPrimary;return(0,n.jsxs)(he,{change:e??0,children:[(0,n.jsx)(le.Kx,{delta:e}),(0,n.jsx)(t,{color:"currentColor",children:a||`${e?Math.abs(Math.round(e)):0}%`})]})};var je=t(80815),_e=t(83246),ke=t(37636),Te=t(82118),$e=t(83029),Ne=t(85038),Ie="_1mor7veh rgw6ezd4 rgw6ezbg rgw6ezea rgw6ez2og rgw6ez27y rgw6ez1jm rgw6ez464 rgw6ez48y",Se="_1mor7vea rgw6ez4qm rgw6ez16s rgw6ez82g rgw6ez814",He="_1mor7ved rgw6ezd4 rgw6ezba rgw6eze4 rgw6ez4bg rgw6ez2os rgw6ez28a",ze="rgw6ezra rgw6ez55s rgw6ez8ao rgw6ez81o";const Pe=p.default.div.withConfig({displayName:"Table__RankCellContainer",componentId:"sc-31220bfb-0"})`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 12px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-left: 8px;
  }
`,Fe=p.default.tr.withConfig({displayName:"Table__StyledRow",componentId:"sc-31220bfb-1"})`
  cursor: pointer;
  :hover {
    background: ${({theme:e})=>e.surface3};
  }
  :active {
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }
`,Ee=p.default.tr.withConfig({displayName:"Table__StyledLoadingRow",componentId:"sc-31220bfb-2"})`
  height: 80px;
`,Ve=p.default.th.withConfig({displayName:"Table__StyledHeader",componentId:"sc-31220bfb-3"})`
  ${({disabled:e})=>!e&&"cursor: pointer;"}

  :hover {
    ${({theme:e,disabled:a})=>!a&&`opacity: ${e.opacity.hover};`}
  }

  :active {
    ${({theme:e,disabled:a})=>!a&&`opacity: ${e.opacity.click};`}
  }
`,De=p.default.div.withConfig({displayName:"Table__StyledLoadingHolder",componentId:"sc-31220bfb-4"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,Be=p.default.div.withConfig({displayName:"Table__StyledCollectionNameHolder",componentId:"sc-31220bfb-5"})`
  display: flex;
  margin-left: 24px;
  gap: 8px;
  align-items: center;
`,Xe=(0,p.default)(j.X).withConfig({displayName:"Table__StyledImageHolder",componentId:"sc-31220bfb-6"})`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,Le=(0,p.default)(j.X).withConfig({displayName:"Table__StyledRankHolder",componentId:"sc-31220bfb-7"})`
  width: 8px;
  height: 16px;
  margin-right: 12px;
`,Me=10;function Oe({columns:e,data:a,smallHiddenColumns:t,mediumHiddenColumns:o,largeHiddenColumns:l,...d}){const c=(0,p.useTheme)(),{chainId:u}=(0,je.useWeb3React)(),{width:h}=(0,Te.i)(),g=(0,ie.dD)(),{getTableProps:x,getTableBodyProps:f,headerGroups:b,rows:C,prepareRow:y,setHiddenColumns:w,visibleColumns:v}=(0,$e.useTable)({columns:e,data:a,initialState:{sortBy:[{desc:!0,id:Ge.Volume}]},...d},$e.useSortBy),j=(0,m.s0)();return(0,s.useEffect)((()=>{h&&(h<=c.breakpoint.sm?w(t):h<=c.breakpoint.md?w(o):h<=c.breakpoint.lg?w(l):w([]))}),[h,w,e,t,o,l,c.breakpoint]),0===a.length?(0,n.jsx)(Ae,{headerGroups:b,visibleColumns:v,...x()}):(0,n.jsxs)("table",{...x(),className:Se,children:[(0,n.jsx)("thead",{className:ze,children:b.map((e=>(0,s.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,a)=>(0,s.createElement)(Ve,{className:He,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===a?"left":"right",paddingLeft:0===a?g?"16px":"52px":0},disabled:e.disableSortBy,key:a,children:[(0,n.jsx)(Ne.n,{as:"span",color:"neutral2",position:"relative",children:e.isSorted?e.isSortedDesc?(0,n.jsx)(ke.V,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):(0,n.jsx)(_e.c,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):""}),(0,n.jsx)(Ne.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,n.jsx)("tbody",{...f(),children:C.map(((e,a)=>(y(e),(0,n.jsx)(r.M8,{events:[i.TM.onClick],name:i.Yz.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:u},element:i.xo.NFT_TRENDING_ROW,children:(0,s.createElement)(Fe,{...e.getRowProps(),key:e.id,onClick:()=>j(`/nfts/collection/${e.original.collection.address}`),"data-testid":"nft-trending-collection"},e.cells.map(((e,t)=>(0,s.createElement)("td",{className:"_1mor7vef rgw6ezd4 rgw6ezbg rgw6ezea rgw6ez2o4 rgw6ez27m rgw6ez1jm rgw6ez464 rgw6ez48y",...e.getCellProps(),key:t,style:{maxWidth:0===t?g?"240px":"360px":"160px"}},0===t?(0,n.jsxs)(Pe,{children:[!g&&(0,n.jsx)(re.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:a+1}),e.render("Cell")]}):e.render("Cell")))))},a))))})]})}function Ae({headerGroups:e,visibleColumns:a,...t}){return(0,n.jsxs)("table",{...t,className:Se,children:[(0,n.jsx)("thead",{className:ze,children:e.map((e=>(0,s.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,a)=>(0,s.createElement)(Ve,{className:He,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===a?"left":"right",paddingLeft:0===a?"52px":0},disabled:0===a,key:a,children:[(0,n.jsx)(Ne.n,{as:"span",color:"accent1",position:"relative",children:e.isSorted?e.isSortedDesc?(0,n.jsx)(ke.V,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):(0,n.jsx)(_e.c,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):""}),(0,n.jsx)(Ne.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,n.jsx)("tbody",{...t,children:[...Array(Me)].map(((e,t)=>(0,n.jsx)(Ee,{children:[...Array(a.length)].map(((e,a)=>(0,n.jsx)("td",{className:Ie,children:0===a?(0,n.jsxs)(Be,{children:[(0,n.jsx)(Le,{}),(0,n.jsx)(Xe,{}),(0,n.jsx)(j.X,{})]}):(0,n.jsx)(De,{children:(0,n.jsx)(j.X,{})})},a)))},t)))})]})}var Ge;!function(e){e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners"}(Ge||(Ge={}));const Re=(e,a)=>e?a?Math.round(1e5*e)>=Math.round(1e5*a)?1:-1:1:-1;var Ue=({data:e,timePeriod:a})=>{const t=(0,s.useMemo)((()=>(e,a)=>Re(e.original.floor.value,a.original.floor.value)),[]),i=(0,s.useMemo)((()=>(e,a)=>Re(e.original.floor.change,a.original.floor.change)),[]),r=(0,s.useMemo)((()=>(e,a)=>Re(e.original.volume.value,a.original.volume.value)),[]),o=(0,s.useMemo)((()=>(e,a)=>Re(e.original.volume.change,a.original.volume.change)),[]),l=(0,s.useMemo)((()=>[{Header:"Collection name",accessor:"collection",Cell:xe,disableSortBy:!0},{id:Ge.Floor,Header:Ge.Floor,accessor:({floor:e})=>e.value,sortType:t,Cell:function(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ce,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),a!==k.XH.AllTime&&(0,n.jsx)(re.SF,{children:(0,n.jsx)(ve,{change:e.row.original.floor.change})})]})}},{id:Ge.FloorChange,Header:Ge.FloorChange,accessor:({floor:e})=>e.value,sortDescFirst:!0,disableSortBy:a===k.XH.AllTime,sortType:i,Cell:function(e){return a===k.XH.AllTime?(0,n.jsx)(ye,{value:"-"}):(0,n.jsx)(ve,{change:e.row.original.floor.change})}},{id:Ge.Volume,Header:Ge.Volume,accessor:({volume:e})=>e.value,sortDescFirst:!0,sortType:r,Cell:function(e){return(0,n.jsx)(we,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:Ge.VolumeChange,Header:Ge.VolumeChange,accessor:({volume:e})=>e.value,sortDescFirst:!0,disableSortBy:a===k.XH.AllTime,sortType:o,Cell:function(e){const{change:t}=e.row.original.volume;return a===k.XH.AllTime?(0,n.jsx)(ye,{value:"-"}):t&&t>=9999?(0,n.jsxs)(ve,{change:t,children:[">9999","%"]}):(0,n.jsx)(ve,{change:t})}},{id:Ge.Items,Header:Ge.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return(0,n.jsx)(fe,{value:{value:e.row.original.totalSupply}})}},{Header:Ge.Owners,accessor:({owners:e})=>e.value,sortDescFirst:!0,Cell:function(e){return(0,n.jsx)(fe,{value:e.row.original.owners})}}]),[i,t,o,r,a]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Oe,{smallHiddenColumns:[Ge.Items,Ge.FloorChange,Ge.Volume,Ge.VolumeChange,Ge.Owners],mediumHiddenColumns:[Ge.Items,Ge.FloorChange,Ge.VolumeChange,Ge.Owners],largeHiddenColumns:[Ge.Items,Ge.Owners],data:e,columns:l})})};const We=[{label:"1D",value:k.XH.OneDay},{label:"1W",value:k.XH.SevenDays},{label:"1M",value:k.XH.ThirtyDays},{label:"All",value:k.XH.AllTime}],Ye=p.default.div.withConfig({displayName:"TrendingCollections__ExploreContainer",componentId:"sc-c0c70b1b-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme:e})=>e.maxWidth};
  padding: 0 16px;
`,Ze=p.default.div.withConfig({displayName:"TrendingCollections__StyledHeader",componentId:"sc-c0c70b1b-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  line-height: 44px;
  font-weight: 535;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
  }
`,qe=p.default.div.withConfig({displayName:"TrendingCollections__FiltersRow",componentId:"sc-c0c70b1b-2"})`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    margin-bottom: 16px;
    margin-top: 16px;
  }
`,Ke=p.default.div.withConfig({displayName:"TrendingCollections__Filter",componentId:"sc-c0c70b1b-3"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  padding: 4px;
`,Je=p.default.div.withConfig({displayName:"TrendingCollections__Selector",componentId:"sc-c0c70b1b-4"})`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({active:e,theme:a})=>e?a.surface3:"none"};
  cursor: pointer;

  ${ne.c}
`,Qe=(0,p.default)(re.Tv.SubHeader).withConfig({displayName:"TrendingCollections__StyledSelectorText",componentId:"sc-c0c70b1b-5"})`
  color: ${({theme:e,active:a})=>a?e.neutral1:e.neutral2};
`;var ea=()=>{const{formatterLocalCurrency:e}=(0,$.h2)(),[a,t]=(0,s.useState)(k.XH.OneDay),[i,r]=(0,s.useState)(!0),{data:l,loading:c}=d(100,function(e){switch(e){case k.XH.OneDay:return o._u.Day;case k.XH.SevenDays:return o._u.Week;case k.XH.ThirtyDays:return o._u.Month;case k.XH.AllTime:return o._u.Max;default:return o._u.Day}}(a)),m=(0,ie.$N)(),p=(0,s.useMemo)((()=>!c&&l?l.map((e=>({...e,collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:i?k.VG.ETH:k.VG.USD,usdPrice:m}))):[]),[l,c,i,m]);return(0,n.jsxs)(Ye,{children:[(0,n.jsx)(Ze,{children:"Trending NFT collections"}),(0,n.jsxs)(qe,{children:[(0,n.jsx)(Ke,{children:We.map((e=>(0,n.jsx)(Je,{active:e.value===a,onClick:()=>t(e.value),children:(0,n.jsx)(Qe,{lineHeight:"20px",active:e.value===a,children:e.label})},e.value)))}),(0,n.jsxs)(Ke,{onClick:()=>r(!i),children:[(0,n.jsx)(Je,{active:i,children:(0,n.jsx)(Qe,{lineHeight:"20px",active:i,children:"ETH"})}),(0,n.jsx)(Je,{active:!i,children:(0,n.jsx)(Qe,{lineHeight:"20px",active:!i,children:e})})]})]}),(0,n.jsx)(Ue,{data:p,timePeriod:a})]})};const aa=p.default.div.withConfig({displayName:"explore__ExploreContainer",componentId:"sc-f5d86c41-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    gap: 0px;
  }
`;var ta=()=>{const e=(0,ie.cP)((e=>e.setBagExpanded));return(0,s.useEffect)((()=>{e({bagExpanded:!1,manualClose:!1})}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.fM,{page:i.yJ.NFT_EXPLORE_PAGE,shouldLogImpression:!0,children:(0,n.jsxs)(aa,{children:[(0,n.jsx)(te,{}),(0,n.jsx)(ea,{})]})})})}}}]);
//# sourceMappingURL=517.b0c60dca.chunk.js.map