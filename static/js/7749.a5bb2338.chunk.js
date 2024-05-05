"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7749],{14396:function(e,r,t){t.d(r,{R_:function(){return n},gS:function(){return a},xr:function(){return s},oj:function(){return i},Co:function(){return o},Yb:function(){return l},fb:function(){return c},hX:function(){return d},rG:function(){return g},FC:function(){return u},rZ:function(){return m}});t(84137),t(46912);var n="e2d0r6e rgw6ezda rgw6ezbg rgw6eze4 rgw6ez4ba rgw6ez1ds rgw6ez47m rgw6ez2cy",a="e2d0r6h e2d0r6g rgw6ezda rgw6ezbg rgw6eze4 rgw6ez2e4 rgw6ez2jm rgw6ez2os rgw6ez28a rgw6ez174 rgw6ez4v4 rgw6ez89w rgw6ez82g rgw6ez8fk",s="rgw6ez14g rgw6ez1bg rgw6ez828",i="rgw6ezd4 rgw6ezbg rgw6ezea rgw6ezfs rgw6ez8d0 rgw6ez45m rgw6ez45s",o="e2d0r6a rgw6ezd4 rgw6ezbg rgw6ezea rgw6ez3t4",l="e2d0r63 e2d0r61 rgw6ez45a rgw6ez2d4 rgw6ez2e5 rgw6ez2im rgw6ez2jn rgw6ez2os rgw6ez28a rgw6ez4ba rgw6ez80w rgw6ez8ao rgw6ez818 rgw6ez59s rgw6ez5zg",c="e2d0r6c rgw6ezd4 rgw6ezba rgw6eze4 rgw6ez4bg",d="e2d0r6l rgw6ezd4 rgw6ezba rgw6ezds rgw6ez2e4 rgw6ez2jm rgw6ez2os rgw6ez28a rgw6ez4qy rgw6ez4ba rgw6ez82g rgw6ez80w",g="e2d0r65 e2d0r61 rgw6ez45a rgw6ez2e4 rgw6ez2jm rgw6ez27y rgw6ez4bg rgw6ezb4 rgw6ezda",u="e2d0r6n rgw6ez2d4 rgw6ez2im rgw6ez44s rgw6ez824 rgw6ez18y rgw6ez16y rgw6ez4ba rgw6ez4qy rgw6ezay rgw6ezda rgw6ez80w",m="e2d0r6j e2d0r6g rgw6ezda rgw6ezbg rgw6eze4 rgw6ez2e4 rgw6ez2jm rgw6ez2os rgw6ez28a rgw6ez174 rgw6ez4v4 rgw6ez89w rgw6ez82g rgw6ez8fk rgw6ez4d4 rgw6ez80w"},35253:function(e,r,t){t.d(r,{m:function(){return o}});var n=t(1152),a=t(12113),s=t(13712),i=t(79954);function o(e,r,t){const{data:n,loading:o,fetchMore:l,error:c}=(0,i.YV)({variables:{filter:e,first:r},fetchPolicy:t}),d=n?.nftActivity?.pageInfo?.hasNextPage,g=(0,s.useCallback)((()=>l({variables:{after:n?.nftActivity?.pageInfo?.endCursor}})),[n,l]),u=(0,s.useMemo)((()=>n?.nftActivity?.edges?.map((e=>{const r=e?.node,t=r?.asset;return{collectionAddress:r.address,tokenId:r.tokenId,tokenMetadata:{name:t?.name,imageUrl:t?.image?.url,smallImageUrl:t?.smallImage?.url,metadataUrl:t?.metadataUrl,rarity:{primaryProvider:"Rarity Sniper",providers:t?.rarities?.map((e=>({...e,provider:"Rarity Sniper"})))},suspiciousFlag:t?.suspiciousFlag,standard:t?.nftContract?.standard},eventType:r.type,marketplace:r.marketplace,fromAddress:r.fromAddress,toAddress:r.toAddress,transactionHash:r.transactionHash,orderStatus:r.orderStatus,price:(0,a.K3)(r.price?.value??0),symbol:t?.collection?.image?.url,quantity:r.quantity,url:r.url,eventTimestamp:1e3*r.timestamp}}))),[n]);return(0,s.useMemo)((()=>({nftActivity:u,hasNext:d,loadMore:g,loading:o,error:c})),[d,g,o,u,c])}n.ZP`
  query NftActivity($filter: NftActivityFilterInput, $after: String, $first: Int) {
    nftActivity(filter: $filter, after: $after, first: $first) {
      edges {
        node {
          id
          address
          tokenId
          asset {
            id
            metadataUrl
            image {
              id
              url
            }
            smallImage {
              id
              url
            }
            name
            rarities {
              id
              provider
              rank
              score
            }
            suspiciousFlag
            nftContract {
              id
              standard
            }
            collection {
              id
              image {
                id
                url
              }
            }
          }
          type
          marketplace
          fromAddress
          toAddress
          transactionHash
          price {
            id
            value
          }
          orderStatus
          quantity
          url
          timestamp
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
`},17749:function(e,r,t){t.d(r,{cS:function(){return C},VJ:function(){return k},YQ:function(){return T}});var n=t(42893),a=t(62329),s=t(35253),i=t(85038),o=t(2994),l=t(5658),c=t(1004),d=t(13712),g=t(46642),u=t(41440),m=t(87253),p=t(14396),f=t(61984);t(84137),t(36199);const w=()=>(0,n.jsx)(i.n,{className:"_2kdvfw1 rgw6ez14g rgw6ez1bg rgw6ez828"}),h=()=>(0,n.jsx)(i.n,{className:"fbjar43 _2kdvfw1 rgw6ez18y rgw6ez83g"}),x=()=>(0,n.jsxs)(i.n,{as:"a",className:p.Yb,children:[(0,n.jsxs)(o.X2,{gap:"16",children:[(0,n.jsx)(w,{}),(0,n.jsx)(h,{})]}),(0,n.jsx)(o.X2,{children:(0,n.jsx)(h,{})}),(0,n.jsx)(o.X2,{display:{sm:"none",md:"flex"},children:(0,n.jsx)(h,{})}),(0,n.jsx)(o.X2,{display:{sm:"none",lg:"flex"},children:(0,n.jsx)(h,{})}),(0,n.jsx)(o.X2,{display:{sm:"none",xl:"flex"},children:(0,n.jsx)(h,{})})]}),y=({rowCount:e})=>(0,n.jsx)(n.Fragment,{children:[...Array(e)].map(((e,r)=>(0,n.jsx)(x,{},r)))}),j=()=>(0,n.jsxs)(o.sg,{marginTop:"36",children:[(0,n.jsx)(k,{}),(0,n.jsx)(y,{rowCount:10})]});var z;!function(e){e.Item="Item",e.Event="Event",e.Price="Price",e.By="By",e.To="To"}(z||(z={}));const v=m.default.div.withConfig({displayName:"Activity__FilterBox",componentId:"sc-1d0f5cfb-0"})`
  display: flex;
  color: ${({isActive:e,theme:r})=>r.neutral1};
  background: ${({isActive:e,theme:r})=>e?r.surface3:r.surface1};
  border: ${({isActive:e,theme:r})=>`1px solid ${r.surface3}`};
  ${a.c};
`,k=()=>(0,n.jsxs)(i.n,{className:p.rG,children:[(0,n.jsx)(i.n,{children:z.Item}),(0,n.jsx)(i.n,{children:z.Event}),(0,n.jsx)(i.n,{display:{sm:"none",md:"block"},children:z.Price}),(0,n.jsx)(i.n,{display:{sm:"none",xl:"block"},children:z.By}),(0,n.jsx)(i.n,{display:{sm:"none",xxl:"block"},children:z.To})]}),b={[c.n$.Listing]:!0,[c.n$.Sale]:!0,[c.n$.Transfer]:!1,[c.n$.CancelListing]:!1},T=(e,r)=>({...e,[r.eventType]:!e[r.eventType]}),C=({contractAddress:e,rarityVerified:r,collectionName:t,chainId:a})=>{const[m,w]=(0,d.useReducer)(T,b),{nftActivity:h,hasNext:x,loadMore:z,loading:C}=(0,s.m)({activityTypes:Object.keys(m).map((e=>e)).filter((e=>m[e])),address:e},25),I=x&&h?.length,A=(0,l.cP)((e=>e.itemsInBag)),N=(0,l.cP)((e=>e.addAssetsToBag)),M=(0,l.cP)((e=>e.removeAssetsFromBag)),$=(0,l.cP)((e=>e.bagExpanded)),S=(0,l.cP)((e=>e.toggleBag)),F=(0,l.dD)(),E=(0,l.$N)(),P=(0,d.useCallback)((function({eventType:e}){const r=m[e];return(0,n.jsx)(v,{className:p.hX,isActive:r,onClick:()=>w({eventType:e}),children:e.charAt(0)+e.slice(1).toLowerCase()+"s"})}),[m]);return(0,n.jsxs)(i.n,{marginLeft:{sm:"16",md:"48"},children:[(0,n.jsxs)(o.X2,{gap:"8",paddingTop:{sm:"0",md:"16"},children:[(0,n.jsx)(P,{eventType:c.n$.Listing}),(0,n.jsx)(P,{eventType:c.n$.Sale}),(0,n.jsx)(P,{eventType:c.n$.Transfer})]}),C?(0,n.jsx)(j,{}):h&&(0,n.jsxs)(o.sg,{marginTop:"36",children:[(0,n.jsx)(k,{}),(0,n.jsx)(g.Z,{next:z,hasMore:!!x,loader:I?(0,n.jsx)(y,{rowCount:2}):null,dataLength:h?.length??0,style:{overflow:"unset"},children:h.map(((e,s)=>e.eventType&&(0,n.jsxs)(i.n,{as:u.rU,"data-testid":"nft-activity-row",to:`/nfts/asset/${e.collectionAddress}/${e.tokenId}?origin=activity`,className:p.Yb,children:[(0,n.jsx)(f.Et,{event:e,rarityVerified:r,collectionName:t,eventTimestamp:e.eventTimestamp,isMobile:F}),(0,n.jsx)(f.VM,{eventType:e.eventType,eventTimestamp:e.eventTimestamp,eventTransactionHash:e.transactionHash,price:e.price,isMobile:F}),(0,n.jsx)(f.Ic,{marketplace:e.marketplace,price:e.price}),(0,n.jsx)(f.UM,{address:e.fromAddress,chainId:a}),(0,n.jsx)(f.UM,{address:e.toAddress,chainId:a,desktopLBreakpoint:!0}),(0,n.jsx)(f.Dg,{event:e,collectionName:t,selectAsset:N,removeAsset:M,itemsInBag:A,cartExpanded:$,toggleCart:S,isMobile:F,ethPriceInUSD:E})]},s)))})]})]})}},61984:function(e,r,t){t.d(r,{UM:function(){return I},Dg:function(){return C},VM:function(){return F},Et:function(){return L},Ic:function(){return N}});var n=t(42893),a=t(12204),s=t(19903),i=t(66196),o=t(65647),l=t(45492),c=t(79954),d=t(85038),g=t(2994),u=t(26030),m=t(1004),p=t(12113),f=t(9961);var w=t(3406),h=t(13712),x=t(87253),y=t(39839),j=t(83777),z=t(57482),v=t(34120),k=t(14396);const b=(0,x.default)(y.dL).withConfig({displayName:"ActivityCells__AddressLink",componentId:"sc-117d4884-0"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  font-weight: 485;
  line-height: 20px;
  a {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
  a:hover {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
    opacity: ${({theme:e})=>e.opacity.hover};
  }
  a:focus {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
    opacity: ${({theme:e})=>e.opacity.click};
  }
`,T=(e,r,t)=>{if(r)return t?(0,n.jsx)(a.cC,{id:"t/YqKh"}):(0,n.jsx)(a.cC,{id:"2RtVHm"});switch(e){case c.iF.Executed:return(0,n.jsx)(a.cC,{id:"s9KGXU"});case c.iF.Cancelled:return(0,n.jsx)(a.cC,{id:"vv7kpg"});case c.iF.Expired:return(0,n.jsx)(a.cC,{id:"M1RnFv"});case c.iF.Valid:return(0,n.jsx)(a.cC,{id:"jqzUyM"});default:return null}},C=({event:e,collectionName:r,selectAsset:t,removeAsset:a,itemsInBag:o,cartExpanded:l,toggleCart:u,isMobile:m,ethPriceInUSD:p})=>{const w=(0,h.useMemo)((()=>((e,r,t)=>{const n=e.price?parseFloat(e.price)*t:"0",a=e.price?(0,f.parseEther)(e.price):"";return{address:e.collectionAddress,collectionName:r,imageUrl:e.tokenMetadata?.imageUrl,marketplace:e.marketplace,name:e.tokenMetadata?.name,tokenId:e.tokenId,susFlag:e.tokenMetadata?.suspiciousFlag,smallImageUrl:e.tokenMetadata?.smallImageUrl,collectionSymbol:e.symbol,priceInfo:{USDPrice:n,ETHPrice:a,basePrice:a,baseAsset:"ETH"},tokenType:e.tokenMetadata?.standard}})(e,r,p)),[e,r,p]),x=(0,h.useMemo)((()=>o.some((e=>w.tokenId===e.asset.tokenId&&w.address===e.asset.address))),[w,o]),y=((e,r)=>{if(!r||!e)return!1;const t=Object.keys(c.Wf).map((e=>e.toLowerCase())),n=e===c.iF.Valid,a=t.includes(r.toLowerCase());return n&&a})(e.orderStatus,e.marketplace),j=(0,i.oO)({page:s.yJ.NFT_COLLECTION_PAGE}),z={collection_address:w.address,token_id:w.tokenId,token_type:w.tokenType,...j};return(0,n.jsx)(g.sg,{display:{sm:"none",lg:"flex"},height:"full",justifyContent:"center",marginX:"auto",children:e.eventType===c.y3.Listing&&e.orderStatus?(0,n.jsx)(d.n,{as:"button",className:y&&x?k.rZ:k.gS,onClick:e=>{e.preventDefault(),x?a([w]):t([w]),!x&&!l&&!m&&u(),!x&&(0,i._P)(s.Yz.NFT_BUY_ADDED,{eventProperties:z})},disabled:!y,children:T(e.orderStatus,y,x)}):"-"})},I=({address:e,desktopLBreakpoint:r,chainId:t})=>(0,n.jsx)(g.sg,{display:{sm:"none",xl:r?"none":"flex",xxl:"flex"},className:k.R_,children:(0,n.jsx)(b,{href:(0,v.E)(t??l.H.MAINNET,e??"",v.r.ADDRESS),style:{textDecoration:"none"},children:(0,n.jsx)(d.n,{onClick:e=>e.stopPropagation(),children:e?(0,j.Xn)(e,2):"-"})})}),A=({price:e})=>(0,n.jsx)(o.ud,{text:(0,n.jsx)(d.n,{textAlign:"left",fontSize:"14",fontWeight:"book",color:"neutral2",children:`${e} ETH`}),placement:"top",children:(0,n.jsx)(d.n,{children:`${e.substring(0,5)}... ETH`})}),N=({marketplace:e,price:r})=>{const{formatNumberOrString:t}=(0,z.Gb)(),a=(0,h.useMemo)((()=>r?t({input:parseFloat(r?.toString()),type:z.sw.NFTToken}):null),[t,r]);return(0,n.jsxs)(g.X2,{display:{sm:"none",md:"flex"},gap:"8",children:[e&&(0,p.Dp)(e,"16"),a?a.length>6?(0,n.jsx)(A,{price:a}):(0,n.jsx)(n.Fragment,{children:`${a} ETH`}):(0,n.jsx)(n.Fragment,{children:"-"})]})},M=e=>{switch(e){case c.y3.Listing:return(0,n.jsx)(u.TV,{width:16,height:16});case c.y3.Sale:return(0,n.jsx)(u.QF,{width:16,height:16});case c.y3.Transfer:return(0,n.jsx)(u.dj,{width:16,height:16});case c.y3.CancelListing:return(0,n.jsx)(u.Io,{width:16,height:16});default:return null}},$=({transactionHash:e})=>(0,n.jsx)(g.X2,{onClick:r=>((e,r)=>{e.preventDefault(),window.open(`https://etherscan.io/tx/${r}`,"_blank","noopener,noreferrer")})(r,e),marginLeft:"4",children:(0,n.jsx)(u.Bu,{})}),S=e=>({[c.y3.Listing]:"deprecated_gold",[c.y3.Sale]:"success",[c.y3.Transfer]:"deprecated_violet",[c.y3.CancelListing]:"critical"}[e]),F=({eventType:e,eventTimestamp:r,eventTransactionHash:t,eventOnly:a,price:s,isMobile:i})=>{const{formatNumberOrString:o}=(0,z.Gb)(),l=(0,h.useMemo)((()=>s?o({input:parseFloat(s?.toString()),type:z.sw.NFTToken}):null),[o,s]);return(0,n.jsxs)(g.sg,{height:"full",justifyContent:"center",gap:"4",children:[(0,n.jsxs)(g.X2,{className:k.Co,color:S(e),children:[M(e),m.ze[e]]}),r&&!i&&!a&&(0,n.jsxs)(g.X2,{className:k.fb,children:[(0,w.F)(r.toString()),t&&(0,n.jsx)($,{transactionHash:t})]}),i&&s&&(0,n.jsx)(g.X2,{fontSize:"16",fontWeight:"book",color:"neutral1",children:`${l} ETH`})]})},E=()=>(0,n.jsx)(d.n,{position:"relative",style:{background:"#24272e"},className:k.xr,children:(0,n.jsxs)(d.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"book",children:["Image",(0,n.jsx)("br",{}),"not",(0,n.jsx)("br",{}),"available"]})}),P=({rarity:e,collectionName:r,rarityVerified:t})=>{const{formatNumber:a}=(0,z.Gb)(),s=e.rank||e.providers?.[0].rank;return s?(0,n.jsx)(d.n,{children:(0,n.jsx)(o.ud,{text:(0,n.jsxs)(g.X2,{children:[(0,n.jsx)(d.n,{display:"flex",marginRight:"4",children:(0,n.jsx)("img",{src:"/nft/svgs/gem.svg",alt:"cardLogo",width:16})}),(0,n.jsx)(d.n,{width:"full",fontSize:"14",children:t?`Verified by ${r}`:"Ranking by Rarity Sniper"})]}),placement:"top",children:(0,n.jsxs)(d.n,{className:k.FC,children:[(0,n.jsx)(d.n,{paddingTop:"2",paddingBottom:"2",display:"flex",children:a({input:s,type:z.sw.WholeNumber})}),(0,n.jsx)(d.n,{display:"flex",height:"16",children:t?(0,n.jsx)(u.w,{}):null})]})})}):null},_=e=>e?.smallImageUrl||e?.imageUrl,L=({event:e,rarityVerified:r,collectionName:t,eventTimestamp:a,isMobile:s})=>{const[i,o]=(0,h.useState)(!1),[l,c]=(0,h.useState)(!_(e.tokenMetadata));return(0,n.jsxs)(g.X2,{gap:"16",overflow:"hidden",whiteSpace:"nowrap",children:[l?(0,n.jsx)(E,{}):(0,n.jsx)(d.n,{as:"img",alt:e.tokenMetadata?.name||e.tokenId,src:_(e.tokenMetadata),draggable:!1,className:k.xr,style:{background:i?"none":"#24272e"},onLoad:()=>o(!0),onError:()=>c(!0)}),(0,n.jsxs)(g.sg,{height:"full",justifyContent:"center",overflow:"hidden",whiteSpace:"nowrap",marginRight:"24",children:[(0,n.jsx)(d.n,{className:k.oj,children:e.tokenMetadata?.name||e.tokenId}),e.tokenMetadata?.rarity&&!s&&(0,n.jsx)(P,{rarity:e.tokenMetadata?.rarity,rarityVerified:r,collectionName:t}),s&&a&&(0,w.F)(a.toString())]})]})}},3406:function(e,r,t){t.d(r,{F:function(){return n}});const n=e=>{const r=parseFloat(e),t=(new Date).getTime()-r,n=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),s=Math.floor(t%36e5/6e4);return n>0?`${n} day${n>1?"s":""} ago`:a>0?`${a} hour${a>1?"s":""} ago`:s>1?`${s} minutes ago`:"Just now"}}}]);
//# sourceMappingURL=7749.a5bb2338.chunk.js.map