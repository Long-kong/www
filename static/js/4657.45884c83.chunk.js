/*! For license information please see 4657.45884c83.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4657],{19969:function(e,t,n){n.d(t,{SS:function(){return u},sq:function(){return d},MN:function(){return c},RF:function(){return p},uO:function(){return h},I8:function(){return l}});var i=n(87253),a=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",r=n.p+"static/media/noise.3c7efafc83614205bd1a.png",o=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png",s=n(60476);const l=(0,i.default)(s.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,d=i.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
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
  background: url(${r});
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
`,h=(0,i.default)(s.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,u=i.default.div.withConfig({displayName:"styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},79176:function(e,t,n){n.r(t),n.d(t,{default:function(){return Mi}});var i=n(42893),a=n(12204),r=n(80815),o=n(2304),s=n(68040),l=n(63362),d=n(80657);var c=n(62069),p=n(1579),h=n(13712);var u=e=>{const[t,n]=(0,h.useState)(Date.now());return(0,p.Z)((0,h.useCallback)((()=>{n(Date.now())}),[]),e),t},g=n(92796),m=n(55831),f=n.n(m),x=n(87253),w=n(39839),y=n(34120),b=n(65647),j=n(45492),C=n(34578),N=n(1990);const z=x.default.div.withConfig({displayName:"ChainConnectivityWarning__BodyRow",componentId:"sc-b0d4e448-0"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 12px;
  font-weight: 485;
  font-size: 14px;
  line-height: 20px;
`,k=(0,x.default)(C.Z).withConfig({displayName:"ChainConnectivityWarning__CautionTriangle",componentId:"sc-b0d4e448-1"})`
  color: ${({theme:e})=>e.deprecated_accentWarning};
`,A=(0,x.default)(w.dL).withConfig({displayName:"ChainConnectivityWarning__Link",componentId:"sc-b0d4e448-2"})`
  color: ${({theme:e})=>e.black};
  text-decoration: underline;
`,v=x.default.div.withConfig({displayName:"ChainConnectivityWarning__TitleRow",componentId:"sc-b0d4e448-3"})`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
`,E=x.default.div.withConfig({displayName:"ChainConnectivityWarning__TitleText",componentId:"sc-b0d4e448-4"})`
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin: 0px 12px;
`,I=x.default.div.withConfig({displayName:"ChainConnectivityWarning__Wrapper",componentId:"sc-b0d4e448-5"})`
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  bottom: 60px;
  display: none;
  max-width: 348px;
  padding: 16px 20px;
  position: fixed;
  right: 16px;
  z-index: 2;
  @media screen and (min-width: ${N.e.deprecated_upToMedium}px) {
    display: block;
  }
`;function T(){const{chainId:e}=(0,r.useWeb3React)(),t=(0,s.o7)(e),n=t?.label;return(0,i.jsxs)(I,{children:[(0,i.jsxs)(v,{children:[(0,i.jsx)(k,{}),(0,i.jsx)(E,{children:(0,i.jsx)(a.cC,{id:"3xf/uJ"})})]}),(0,i.jsxs)(z,{children:[e===j.H.MAINNET?(0,i.jsx)(a.cC,{id:"iXzD8t"}):(0,i.jsx)(a.cC,{id:"3Fxw1j",values:{label:n}})," ",void 0!==t.statusPage&&(0,i.jsxs)("span",{children:[(0,i.jsx)(a.cC,{id:"IHlLC8"})," ",(0,i.jsx)(A,{href:t.statusPage||"",children:(0,i.jsx)(a.cC,{id:"jqVo/k"})})]})]})]})}const S=x.default.div.withConfig({displayName:"Polling__StyledPolling",componentId:"sc-1647183e-0"})`
  align-items: center;
  bottom: 0;
  color: ${({theme:e})=>e.neutral3};
  display: none;
  padding: 1rem;
  position: fixed;
  right: 0;
  transition: 250ms ease color;

  a {
    color: unset;
  }
  a:hover {
    color: unset;
    text-decoration: none;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    display: flex;
  }
`,M=(0,x.default)(w.Tv.DeprecatedSmall).withConfig({displayName:"Polling__StyledPollingBlockNumber",componentId:"sc-1647183e-1"})`
  color: ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  transition: opacity 0.25s ease;
  opacity: ${({breathe:e,hovering:t})=>t?.7:e?1:.5};
  :hover {
    opacity: 1;
  }

  a {
    color: unset;
  }
  a:hover {
    text-decoration: none;
    color: unset;
  }
`,R=x.default.div.withConfig({displayName:"Polling__StyledPollingDot",componentId:"sc-1647183e-2"})`
  width: 8px;
  height: 8px;
  min-height: 8px;
  min-width: 8px;
  border-radius: 50%;
  position: relative;
  background-color: ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  transition: 250ms ease background-color;
`,D=x.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,P=x.default.div.withConfig({displayName:"Polling__Spinner",componentId:"sc-1647183e-3"})`
  animation: ${D} 1s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  transform: translateZ(0);

  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 2px solid ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  background: transparent;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: relative;
  transition: 250ms ease border-color;

  left: -3px;
  top: -3px;
`,L=f()("10m"),O=f()("10s");function U(){const{chainId:e}=(0,r.useWeb3React)(),t=(0,g.ZP)(),[n,p]=(0,h.useState)(!1),[m,f]=(0,h.useState)(!1),x=u(O),j=(0,l.Z)(),C=(0,c.GZ)(),N=function(){const{pathname:e}=(0,d.TH)();return e.endsWith("/")}(),z=(e?(0,s.bt)(e)?.blockWaitMsBeforeWarning:L)??L,k=Boolean(!!j&&x-j.mul(1e3).toNumber()>z);(0,h.useEffect)((()=>{if(!t)return;p(!0);const e=setTimeout((()=>p(!1)),1e3);return()=>{clearTimeout(e)}}),[t]);const A=(0,h.useMemo)((()=>e&&t?(0,y.E)(e,t.toString(),y.r.BLOCK):""),[t,e]);return C||N?null:(0,i.jsxs)(o.DA,{children:[(0,i.jsxs)(S,{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[(0,i.jsx)(M,{breathe:n,hovering:m,warning:k,children:(0,i.jsx)(w.dL,{href:A,children:(0,i.jsxs)(b.ud,{text:(0,i.jsx)(a.cC,{id:"MCr7bN"}),children:[t,"\u2002"]})})}),(0,i.jsx)(R,{warning:k,children:n&&(0,i.jsx)(P,{warning:k})})," "]}),k&&(0,i.jsx)(T,{})]})}var _=n(56564),F=n(437),W=n(5920),H=n(60476),B=n(69867),q=n(95513),J=n(40168),Q=n(93945),K=n(40045);const V=x.default.div.withConfig({displayName:"CycleTimer__Countdown",componentId:"sc-6f6ec67b-0"})`
  width: 100%;
  border-radius: 14px;
  background: rgba(19, 31, 58, 0.9);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  @media screen and (min-width: ${N.j$.xxl}px) {
    padding: 20px 0;
  }
`,Z=x.default.div.withConfig({displayName:"CycleTimer__CountdownContainer",componentId:"sc-6f6ec67b-1"})`
  width: 100%;
  max-width: 440px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`,G=x.default.div.withConfig({displayName:"CycleTimer__Time",componentId:"sc-6f6ec67b-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-transform: uppercase;
  font-weight: 400;
  span {
    font-weight: bold;
    &:first-child {
      font-size: 24px;
      line-height: 20px;
    }
    &:last-child {
      font-size: 10px;
      line-height: 20px;
    }
  }
  @media screen and (min-width: ${N.j$.xxl}px) {
    span {
      &:first-child {
        font-size: 35px;
      }
      &:last-child {
        font-size: 14px;
      }
    }
  }
`,Y=x.default.span.withConfig({displayName:"CycleTimer__Dots",componentId:"sc-6f6ec67b-3"})`
  font-size: 35px;
`,X=36e5,$=({deadline:e=new Date((new Date).getFullYear(),(new Date).getMonth()+1,1).getTime()})=>{const t=(0,Q.a)(),n=(0,K.F)(),a=(0,q.u)(),r=(0,J.b)(),[o,s]=(0,h.useState)(),[l,d]=(0,h.useState)(),[c,p]=(0,h.useState)(0),[u,g]=(0,h.useState)(0),m=(0,h.useMemo)((()=>1e3*(u-c)+Date.now()),[u,c]),[f,x]=(0,h.useState)(m-Date.now()),w=(0,h.useCallback)((()=>{Promise.allSettled([t(),n(),r(),a()]).then((([e,t,n,i])=>{if(e.value&&t.value&&n.value&&i.value){const a=t.value?.mul(e.value)?.add(n.value)?.toNumber();p(i.value.timestamp),g(a)}}))}),[a,r,t,n]),y=(0,h.useRef)();return(0,h.useEffect)((()=>(y.current=setInterval((()=>{x(m-Date.now())}),1e3),()=>clearInterval(y.current))),[m,f]),(0,h.useEffect)((()=>{Math.trunc(f/1e3)<=1&&w()}),[w,f]),(0,i.jsx)(V,{children:(0,i.jsx)(Z,{children:Object.entries({Days:f/864e5,Hours:f/X%24,Minutes:f/6e4%60,Seconds:f/1e3%60}).map((([e,t],n)=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(G,{children:[(0,i.jsx)("span",{children:`${f>0?Math.floor(t):0}`.padStart(2,"0")}),(0,i.jsx)("span",{children:e})]},e),3!==n&&(0,i.jsx)(Y,{children:":"})]})))})})};var ee=n(91101),te=n(36665);var ne=n(11744);var ie=n(13120),ae=n(83777),re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAIr0lEQVR4Ab1YW4hdVxn+9u3sfebcZk5mMk1SDSYZTe00aWuV2gtYiFjMQ6mXWgn4ICVBKLXQioIWQ1GLiL4EC0JApA9WQW1LBRFCvBRijRibJk3TNMlMnJlk5tz2/b738lsn+mCdk8zkwQWLvTl7zf6//f237x8FI9bz3/rqh7Le5bunjWxmgyE2jVX0pqEqZlQUNS/Ja0WlPpZCM+JUUxa6NhbsQHSDKOu5YeiFYei4UQhFT9tNy/ng5vGlxnj73Map6defef7wmffaEoCmrAbiVwe/cveJv75+bLqa4KaJGhqGMTydFAr8LMdybwA7TDHwE/SDBEEGdOISSVoiiDNUigKJogzvS93AzqkKZjY3MFYbF7ffdecDX3ruhT++16a+GpAiic2Tp99Fs2FiY7OC8boFVVOhqhqEVoHtJvDiBE6UElgBP8qJUwNUoGUUcMsCVkVDkQoYZUqAGv7Z8VCzA2X77Ky5ms1VGZHre5+//1DWWXx8atyCYWnDoxmNBkmBQZSQEQLhF/vcYZQhSgTvc6ilgEL2Ip4tMoGEpN83O4npVg03f2DH4ScP//6AoijlmhiRa8XNXq59eM9j+dYZy+eLPddHv9+Hbffh5g5Cw0eSh8grCVnKoTRV1A0TFasKy6qj1uCuN1GrjUEvfBTRwDk5v/DqaiCuyYgQoj7npktqmjd0GSBljjKLkWYJsjQm7RkKuqBkPPAw3UbXaRo0vTK8qryWQkOaZxg4ffSX57I7ds9Mb926a7CavZGM9L2lXWXeaqjBMipjdViNFiqVBnTGinKNLyjpGgkwZ1DHSQovDJDGKpK6aUQivZ1Hjq4LiJLHE/HCFdJchZA7jyHo/FLo0Pj1kHvVJa6CFCX/hm6LA9RrZCbUEIV2a5S9kUDcfjgQRUw36NwZDIOZoRn0Ag3I9KA76O//hsDf5O+i5BmyIobMZLC7fSwvLaMVmPYoe6M+C1u3zx4vcq8Thz7kTuIIaZoyE3IURT40VkqDEhiND++5i+Kq8ZTg4zgmCyHcgY04CPu7PzJzYt1A+LVZ6Hk/8VwbnuOKwPP40gBJIllKmcoM1pyg8uLf13z4m3yWpAliFtbA9+G7juCGoooX2+27nFH2RrpGLkud/OFSZ/4hBt5tOQ3JnaV1mNUqXWVA03SGiiJRD1mRYCQbkj0Jwu73xGDQVcLIPv/Jj+/5+rVsqdd6eMcDD9jQ1S93Fy9d7nUuo7OyjC637wcISXuc8esLWdqzYYZESQI/CDDo99DrddDrLiuO3XHNMeMzG2+91b+WLQVrWC8f/vEOJ7J/UW1M3tmavAlTW7ehQkYqujasH/IlpWSkEEgZP4OlSxh0l1kE7Tf1Eg8/euCJ89ezsSYgch09+sv6O8eOP6NXW/u3zH5svDneHvYTXdMYrxJEqeSytIceVubOOkng/3Tf/iefZqwVa3n/moH8Z73w3Dd2FPXWtye33bZvw9RGxTIrEHRPyh36brIyd/qVRrP9tb2f3TeP/8f63UsvPvbW22eylU5HdLhPnXpT/PbXP38CN7h03MBihijznbA0EatmRR9mk1D1PB/bFOEG17pdM9cJNgWx+L6WuZ8TwUo16F2B44fQqi3EWk24sf4zo3z3Ow9/+tHzWMdaM5CDBw+qj+x/6tksVg9YwpnM+xcQ2R1ErBluEFMo5TAbE6hPbUPXN/uld/bQ7M76D3bv/lSwlvevCci5S/b2XDdeKsJ8Vss9FL3TSL0BS3hEURTDp0iSQihk2ui1FjZs2YWgaMIfnHv7ppb34N691w/c6wJZSpKdvl3+uQySyXwwL4LFd5SSgqjIAgJhGY9TgmElJSNpwXYvI6cwMXnzDCa27OCzlcubp/HQnnv3HL9hIEJctOadLSfijrMzXHgLqbOIxO+zgQ2QEUSShENW3JBNLqfWFSpB6EiEhUKrwZrYik0zt6Bej8+8r13ed889D/ZH2bpm1iw4E89mTrBT9OZglh5Rx1RgrE8sl0KR7vDZI6j8KAXzJEdCNR8RSFxaEDpLfmkgFAY2T5W3NCrtp/jKb46ypY5mY6XOt+1TwgGqNF63VEyMNzHebqE53uJ1krq0ibzI2OgiuopuCmxE3IHnwGO3TsiayFyW+gGSKHz83Llz5roZmT/f20W9vrnsnkFOgUPBAYOnZavPqUNlt3VpQOrXJKJEkLESUK+oJnUtpQHjRQa2mi9CKcfIWNTsLZ+8B+uVimkaTETsuKo/IG2UfGmEiHd+IJuoYGddYqt3hzFSsNekCZ+KHBFHjTgN6EIykvUYL9OYbm+H172CC4G/fqlYJoKyTs4rKb8qQp7KTIlp3GN8KFhYuATTtIZ1JJWqjaEiz8ZJSUCyI5dD3ZoNuli+QJampti1m+sXRkVl7A02VsqMwiqYnhmBhJ5NAwIdtniNE580nNANUotITVISgMxDnYJJoTwwKBMEp8OU8aJNbvR3zt56cpQ9bdSDTc7FT/Tt5CE3jKs259ueTe3JEXOl72LgxbD9mNeIQ5aKiLuAiZLxoZt1DllNjiBXt2HVCE5j2tvl0t/+cPTIP85fWDMjsql9d+9HH+m/9kr75o0NbGhWaYCyULJAjeowQH3OtR7T1Y8K2ATUJzg5kNv+VYEtKJBiFpfGmIJd7+dcpJdWXG9/ke8+Qo0i1sSItnj2/ksLc4da9THI7grq0lzGAOWhG4Rw2FsGjk+WbPT6Ni53u+gOHMZPiJLiWeP5jCAy6WKyMV7lrEi2mEp3nPrLn1478vczF9bECFOEKqcr0GgrhtZAlWyYujocITWOkygVVNQKdKMKk/MO9DH++4FuIisp/zPgMWDlOBEyftgN0NIibJ/W4XKI7vn+6rOvGH4v/ufh0194eHbx4tl7G1Y5U9PEprqOOiFYzBgrF0otSHIjjDPNT3ItZm0JaDMIS47CSh6x5GZsSCw9kWKavtqoLW9rWud3bJs59qPfvPrGakD+Be8cZT2l8q2iAAAAAElFTkSuQmCC",oe="data:image/png;base64,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";const se=x.default.div.withConfig({displayName:"AffiliatesPopup__Popup",componentId:"sc-a024a311-0"})`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: block;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  transition: opacity 0.15s linear;
  background: rgba(20, 20, 20, 70%);
`,le=x.default.div.withConfig({displayName:"AffiliatesPopup__PopupDialog",componentId:"sc-a024a311-1"})`
  position: relative;
  width: auto;
  margin: 1.75rem;
  pointer-events: none;
  @media screen and (min-width: ${N.j$.lg}px) {
    max-width: 1042px;
    margin-right: auto;
    margin-left: auto;
  }
`,de=x.default.div.withConfig({displayName:"AffiliatesPopup__AffiliateList",componentId:"sc-a024a311-2"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  h2 {
    ${({small:e})=>e?"font-size: 14px;":"font-size: 20px;"}
  }
  h1 {
    ${({small:e})=>e?"font-size: 13px;":"font-size: 22px;"}
    margin: 0 0 0 15px;
    text-align: left;
  }
  @media screen and (min-width: ${N.j$.xxl}px) {
    h2 {
      ${({small:e})=>e?"font-size: 17px;":"font-size: 23px;"}
    }
    h1 {
      ${({small:e})=>e?"font-size: 16px;":"font-size: 26px;"}
      margin: 0 0 0 15px;
      text-align: left;
    }
  }
`,ce=x.default.div.withConfig({displayName:"AffiliatesPopup__AffiliateBoxes",componentId:"sc-a024a311-3"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 25px;
  margin-top: 10px;
  @media screen and (min-width: ${N.j$.sm}px) {
    flex-direction: row;
  }
`,pe=x.default.div.withConfig({displayName:"AffiliatesPopup__AffiliateNo",componentId:"sc-a024a311-4"})`
  display: flex;
  flex-direction: column;
  color: white;
  padding-top: 15px;
`,he=x.default.h2.withConfig({displayName:"AffiliatesPopup__Position",componentId:"sc-a024a311-5"})`
  text-align: center;
`,ue=x.default.div.withConfig({displayName:"AffiliatesPopup__AffiliateBox",componentId:"sc-a024a311-6"})`
  position: relative;
  display: flex;
  width: 100%;
  color: white;
  pointer-events: auto;
  border: none;
  border-radius: 30px;
  outline: 0;
  padding: 25px 15px;
  justify-content: space-between;
  gap: 10px;
  background-clip: padding-box;
  ${({small:e})=>e?"background: #03060D;":"background: radial-gradient(166.71% 94.97% at 17.66% 11.47%, rgba(6, 55, 165, 0.65) 53.56%, rgba(111, 155, 255, 0.65) 100%);"};
  img {
    width: 46px;
    height: auto;
  }
  h2 {
    margin: 0 0 10px 0;
  }
`,ge=x.default.div.withConfig({displayName:"AffiliatesPopup__PopupContent",componentId:"sc-a024a311-7"})`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  pointer-events: auto;
  background: #090e19;
  background-clip: padding-box;
  border: none;
  border-radius: 30px;
  outline: 0;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    text-align: center;
    margin-top: 0;
    font-size: 14px;
  }
  @media screen and (min-width: ${N.j$.lg}px) {
    padding: 30px 20px;
    border-radius: 35px;
  }
  @media screen and (min-width: ${N.j$.xxl}px) {
    button {
      border-radius: 17px;
      font-size: 22px;
      padding: 30px 10px;
    }
  }
`,me=x.default.span.withConfig({displayName:"AffiliatesPopup__Close",componentId:"sc-a024a311-8"})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #acc6ff;
  padding: 10px;
  background: #001c5c;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transform: rotate(45deg);
  margin-left: auto;
  cursor: pointer;
  small {
    font-size: 50px;
    line-height: 30px;
    position: relative;
    left: 0px;
    top: -3px;
    cursor: pointer;
  }
  @media screen and (min-width: ${N.j$.xxl}px) {
    padding: 10px;
    width: 50px;
    height: 50px;
    small {
      font-size: 50px;
      line-height: 30px;
      left: 0px;
      top: -3px;
    }
  }
`,fe=x.default.ul.withConfig({displayName:"AffiliatesPopup__AnnouncementList",componentId:"sc-a024a311-9"})`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`,xe=x.default.li.withConfig({displayName:"AffiliatesPopup__AnnouncementItem",componentId:"sc-a024a311-10"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  width: 100%;
  color: white;
  margin-bottom: 5px;
  padding: 5px 10px;
  border-radius: 4px;
  ${({small:e})=>e?"border: 1px solid #03060D;":"border: 2px solid #3961ba;"};
  ${({small:e})=>e?"background: #090E19":"background: linear-gradient(95deg, rgba(57, 97, 186, 0.4) 47%, rgba(161, 190, 255, 0.4) 110%);"};
  @media screen and (min-width: ${N.j$.lg}px) {
    font-size: 15px;
    margin-bottom: 10px;
    padding: 10px 15px;
  }
`,we=x.default.h1.withConfig({displayName:"AffiliatesPopup__CycleTitle",componentId:"sc-a024a311-11"})`
  display: flex;
  gap: 10px;
  font-size: 22px;
  text-align: center;
  margin: 15px 0;
  @media screen and (min-width: ${N.j$.xxl}px) {
    font-size: 24px;
  }
`;function ye(){const e=(0,_.Wt)(ie.Lk.AFFILIATES),t=(0,_.hg)(),[n,a]=(0,h.useState)(),[r,o]=(0,h.useState)(),[s,l]=(0,h.useState)(),d=function(){const e=(0,te.cq)(ee.ez,ee.Ul);return(0,h.useCallback)((async()=>{if(!e)throw new Error("missing contract");try{return await e.currentCycleStats()}catch(t){throw console.error(t),t}}),[e])}(),c=function(){const e=(0,te.cq)(ee.ez,ee.Ul);return(0,h.useCallback)((async t=>{if(!e)throw new Error("missing contract");try{return await e.cycleWinners(t)}catch(n){throw console.error(n),n}}),[e])}(),p=function(){const e=(0,te.cq)(ee.tG,ne);return(0,h.useCallback)((async()=>{if(!e)throw new Error("missing wethContract");try{return await e.balanceOf(ee.ez)}catch(t){throw console.error(t),t}}),[e])}();return(0,h.useEffect)((()=>{e&&(p().then((e=>(l(e),e))),d().then((e=>(a(e),e))).then((e=>{if(e.index.toNumber()>1){const t=[],n=e.index.toNumber()<10?0:e.index.toNumber()-10;for(let i=e.index.toNumber()-1;i>n;i--)t.push(c(i));return Promise.all(t)}return c(1)})).then((e=>{e&&o(e)})))}),[e,d,c,p]),(0,i.jsx)(i.Fragment,{children:e&&(0,i.jsx)(se,{children:(0,i.jsx)(le,{children:(0,i.jsxs)(ge,{children:[(0,i.jsx)(me,{onClick:()=>t(),children:(0,i.jsx)("small",{children:"+"})}),n&&(0,i.jsxs)(ce,{children:[(0,i.jsxs)(ue,{children:[(0,i.jsxs)(pe,{children:[(0,i.jsx)("img",{src:oe}),(0,i.jsx)(he,{children:"#1"})]}),(0,i.jsxs)(de,{children:[(0,i.jsx)("h2",{children:"Affiliates nominee"}),(0,i.jsxs)(fe,{children:[(0,i.jsx)(xe,{children:(0,ae.Xn)(n?.topAffiliate)}),(0,i.jsxs)(xe,{children:["Beat this to win"," ",(0,i.jsxs)("strong",{children:[(0,B.formatEther)(n?.topAffiliateEarnings).toString()," ETH"]})]})]}),(0,i.jsxs)("h1",{children:["Prize ",s&&(0,B.formatEther)(s.div(2)).toString()," ETH"]})]})]}),(0,i.jsxs)(ue,{children:[(0,i.jsxs)(pe,{children:[(0,i.jsx)("img",{src:oe}),(0,i.jsx)(he,{children:"#1"})]}),(0,i.jsxs)(de,{children:[(0,i.jsx)("h2",{children:"Buyers nominee"}),(0,i.jsxs)(fe,{children:[(0,i.jsx)(xe,{children:(0,ae.Xn)(n?.topBuyer)}),(0,i.jsxs)(xe,{children:["Beat this to win ",(0,i.jsxs)("strong",{children:[(0,B.formatEther)(n?.topTotalBuyAmount).toString()," ETH"]})]})]}),(0,i.jsxs)("h1",{children:["Prize ",s&&(0,B.formatEther)(s.div(2)).toString()," ETH"]})]})]})]}),(0,i.jsxs)(we,{children:[(0,i.jsx)("img",{src:re,alt:"hourglass"}),(0,i.jsx)("span",{children:"Cycle ends in:"}),(0,i.jsx)("img",{src:re,alt:"hourglass"})]}),(0,i.jsx)($,{}),r&&r.length>0&&r.map(((e,t)=>(0,i.jsxs)(ce,{children:[(0,i.jsxs)(ue,{small:!0,children:[(0,i.jsxs)(pe,{children:[(0,i.jsx)("img",{src:oe}),(0,i.jsx)(he,{children:"#1"})]}),(0,i.jsxs)(de,{small:!0,children:[(0,i.jsxs)("h2",{children:["Cycle ",n.index-1-t," Affiliate winner"]}),(0,i.jsx)(fe,{children:(0,i.jsxs)(xe,{small:!0,children:[(0,ae.Xn)(e.topAffiliate),(0,i.jsxs)("strong",{children:[(0,B.formatEther)(e.topAffiliateEarnings).toString()," ETH"]})]})}),e.topAffiliate===ee.r_?(0,i.jsx)("h1",{children:"No winner"}):(0,i.jsxs)("h1",{children:["Won ",(0,B.formatEther)(e.affiliatePrize).toString()," ETH"]})]})]}),(0,i.jsxs)(ue,{small:!0,children:[(0,i.jsxs)(pe,{children:[(0,i.jsx)("img",{src:oe}),(0,i.jsx)(he,{children:"#1"})]}),(0,i.jsxs)(de,{small:!0,children:[(0,i.jsxs)("h2",{children:["Cycle ",n.index-1-t," Buyers winner"]}),(0,i.jsx)(fe,{children:(0,i.jsxs)(xe,{small:!0,children:[(0,ae.Xn)(e.topBuyer),(0,i.jsxs)("strong",{children:[(0,B.formatEther)(e.topTotalBuyAmount).toString()," ETH"]})]})}),e.topBuyer===ee.r_?(0,i.jsx)("h1",{children:"No winner"}):(0,i.jsxs)("h1",{children:["Won ",(0,B.formatEther)(e.buyerPrize).toString()," ETH"]})]})]})]},t)))]})})})})}var be=n(41440);var je=n.p+"static/media/kong-avatar.6a8bd05503216473ccc123ad3ee8285e.svg";const Ce=x.default.div.withConfig({displayName:"AnnouncementsPopup__Popup",componentId:"sc-7aeeac41-0"})`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: block;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  transition: opacity 0.15s linear;
  background: rgba(20, 20, 20, 70%);
`,Ne=x.default.div.withConfig({displayName:"AnnouncementsPopup__PopupDialog",componentId:"sc-7aeeac41-1"})`
  position: relative;
  width: auto;
  margin: 1.75rem;
  pointer-events: none;
  @media screen and (min-width: ${N.j$.sm}px) {
    max-width: 554px;
    margin-right: auto;
    margin-left: auto;
  }
`,ze=x.default.div.withConfig({displayName:"AnnouncementsPopup__PopupContent",componentId:"sc-7aeeac41-2"})`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  pointer-events: auto;
  background: radial-gradient(
    166.71% 94.97% at 17.66% 11.47%,
    rgba(6, 55, 165, 0.65) 53.56%,
    rgba(111, 155, 255, 0.65) 100%
  );
  background-clip: padding-box;
  border: none;
  border-radius: 30px;
  outline: 0;
  padding: 25px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 20px;
    text-align: center;
  }
  p {
    text-align: center;
    margin-top: 0;
    font-size: 14px;
  }
  @media screen and (min-width: ${N.j$.lg}px) {
    padding: 30px 20px;
    border-radius: 35px;
    h1 {
      font-size: 27px;
    }
  }
  @media screen and (min-width: ${N.j$.xxl}px) {
    h1 {
      font-size: 37px;
    }
    button {
      border-radius: 17px;
      font-size: 22px;
      padding: 30px 10px;
    }
  }
`,ke=x.default.span.withConfig({displayName:"AnnouncementsPopup__Close",componentId:"sc-7aeeac41-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #acc6ff;
  padding: 10px;
  background: #001c5c;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transform: rotate(45deg);
  margin-left: auto;
  cursor: pointer;
  small {
    font-size: 50px;
    line-height: 30px;
    position: relative;
    left: 0px;
    top: -3px;
    cursor: pointer;
  }
  @media screen and (min-width: ${N.j$.xxl}px) {
    padding: 10px;
    width: 50px;
    height: 50px;
    small {
      font-size: 50px;
      line-height: 30px;
      left: 0px;
      top: -3px;
    }
  }
`,Ae=x.default.button.withConfig({displayName:"AnnouncementsPopup__PrimaryButton",componentId:"sc-7aeeac41-4"})`
  background: #04da57;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  padding: 10px 10px;
  color: white;
  width: 100%;
  cursor: pointer;
  margin-top: 15px;
  text-decoration: none;
  text-align: center;
  &:hover {
    background: #04bc4b;
  }
  @media screen and (min-width: ${N.j$.lg}px) {
    font-size: 22px;
    padding: 20px 10px;
    margin-top: 30px;
    border-radius: 17px;
  }
`,ve=x.default.div.withConfig({displayName:"AnnouncementsPopup__KongAvatar",componentId:"sc-7aeeac41-5"})`
  position: relative;
  background: radial-gradient(88.59% 88.59% at 21.78% 11.41%, #0637a5 0%, #001e63 100%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  @media screen and (min-width: ${N.j$.lg}px) {
    width: 110px;
    height: 110px;
    img {
      width: 90px;
      height: 90px;
    }
  }
  @media screen and (min-width: ${N.j$.xxl}px) {
    width: 240px;
    height: 240px;
    img {
      width: auto;
      height: auto;
    }
  }
`,Ee=x.default.ul.withConfig({displayName:"AnnouncementsPopup__AnnouncementList",componentId:"sc-7aeeac41-6"})`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`,Ie=x.default.li.withConfig({displayName:"AnnouncementsPopup__AnnouncementItem",componentId:"sc-7aeeac41-7"})`
  font-size: 13px;
  width: 100%;
  color: white;
  text-align: center;
  margin-bottom: 5px;
  padding: 5px 10px;
  border-radius: 4px;
  border: 2px solid #3961ba;
  background: linear-gradient(95deg, rgba(57, 97, 186, 0.4) 47%, rgba(161, 190, 255, 0.4) 110%);
  @media screen and (min-width: ${N.j$.lg}px) {
    font-size: 15px;
    margin-bottom: 10px;
    padding: 10px 15px;
  }
`;(0,x.default)(be.rU).withConfig({displayName:"AnnouncementsPopup__LiquidityButton",componentId:"sc-7aeeac41-8"})`
  background: #04da57;
  border-radius: 17px;
  border: none;
  font-size: 22px;
  padding: 20px 10px;
  color: white;
  width: 100%;
  cursor: pointer;
  margin-top: 30px;
  text-decoration: none;
  text-align: center;
  &:hover {
    background: #07cd54;
  }
`;function Te(){const e=(0,_.Wt)(ie.Lk.ANNOUNCEMENTS),t=(0,_.P9)(),n=(0,h.useCallback)((()=>{sessionStorage.getItem("popup")||(sessionStorage.setItem("popup",JSON.stringify(!0)),t())}),[t]);return(0,h.useEffect)((()=>{sessionStorage.getItem("popup")||t()}),[]),(0,i.jsx)(i.Fragment,{children:e&&(0,i.jsx)(Ce,{children:(0,i.jsx)(Ne,{children:(0,i.jsxs)(ze,{children:[(0,i.jsx)(ke,{onClick:()=>n(),children:(0,i.jsx)("small",{children:"+"})}),(0,i.jsx)(ve,{children:(0,i.jsx)("img",{src:je})}),(0,i.jsx)("h1",{children:"LONG KONG Announcement \ud83e\udd8d \ud83e\udd8d \ud83e\udd8d"}),(0,i.jsx)("p",{children:"LONG KONG is a novel gamified concept that leverages the automated market-making system to reward the most loyal holders."}),(0,i.jsx)("p",{children:"The smart contract could mistakenly be labeled as a Honeypot because you cannot directly sell or transfer KONG. However you can indirectly sell or transfer the LP token."}),(0,i.jsxs)(Ee,{children:[(0,i.jsx)(Ie,{children:"\u2705 Fair mint"}),(0,i.jsx)(Ie,{children:"\u2705 Ownership renounced"}),(0,i.jsx)(Ie,{children:"\u2705 NO pre-mine"}),(0,i.jsx)(Ie,{children:"\u2705 NO buy/sell tax"}),(0,i.jsx)(Ie,{children:"\u2705 NO Proxy Contract"}),(0,i.jsx)(Ie,{children:"\u2705 NO DUMP/APE ONLY"})]}),(0,i.jsx)(Ae,{onClick:()=>n(),children:"Got it \ud83d\ude80"})]})})})})}var Se=n(18337),Me=n(60198),Re=n(73433),De=n(38641),Pe=n(56214);var Le=n(53360);function Oe(e){const t=(0,te.cq)(ee.ez,ee.Ul);return(0,h.useCallback)((async()=>{if(!t)throw new Error("missing contract");try{let n;return n=e?await t.registerAffiliate([ee.tG,ee.ez],{value:(0,B.parseEther)("0.1")}):await t.registerAffiliate([ee.tG,ee.ez]),await n.wait(),console.log(n),n}catch(n){throw console.error(n),n}}),[t,e])}var Ue=n(63498);const _e=x.default.div.withConfig({displayName:"ReferralPopup__Popup",componentId:"sc-a65106e3-0"})`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: block;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  transition: opacity 0.15s linear;
  background: rgba(20, 20, 20, 70%);
`,Fe=x.default.div.withConfig({displayName:"ReferralPopup__PopupDialog",componentId:"sc-a65106e3-1"})`
  position: relative;
  width: auto;
  margin: 1.75rem;
  pointer-events: none;
  @media screen and (min-width: ${N.j$.sm}px) {
    max-width: 554px;
    margin-right: auto;
    margin-left: auto;
  }
`,We=x.default.div.withConfig({displayName:"ReferralPopup__PopupContent",componentId:"sc-a65106e3-2"})`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  pointer-events: auto;
  background: radial-gradient(
    166.71% 94.97% at 17.66% 11.47%,
    rgba(6, 55, 165, 0.65) 53.56%,
    rgba(111, 155, 255, 0.65) 100%
  );
  background-clip: padding-box;
  border: none;
  border-radius: 35px;
  outline: 0;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 27px;
    text-align: center;
  }
  p {
    text-align: center;
    margin-bottom: 0;
  }
  @media screen and (min-width: ${N.j$.xxl}px) {
    h1 {
      font-size: 37px;
    }
    button {
      border-radius: 17px;
      font-size: 22px;
      padding: 30px 10px;
    }
  }
`,He=x.default.span.withConfig({displayName:"ReferralPopup__Close",componentId:"sc-a65106e3-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #acc6ff;
  padding: 10px;
  background: #001c5c;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transform: rotate(45deg);
  margin-left: auto;
  cursor: pointer;
  small {
    font-size: 50px;
    line-height: 30px;
    position: relative;
    left: 0px;
    top: -3px;
    cursor: pointer;
  }
  @media screen and (min-width: ${N.j$.xxl}px) {
    padding: 10px;
    width: 50px;
    height: 50px;
    small {
      font-size: 50px;
      line-height: 30px;
      left: 0px;
      top: -3px;
    }
  }
`,Be=x.default.div.withConfig({displayName:"ReferralPopup__KongAvatar",componentId:"sc-a65106e3-4"})`
  position: relative;
  background: radial-gradient(88.59% 88.59% at 21.78% 11.41%, #0637a5 0%, #001e63 100%);
  width: 110px;
  height: 110px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
  @media screen and (min-width: ${N.j$.xxl}px) {
    width: 240px;
    height: 240px;
    img {
      width: auto;
      height: auto;
    }
  }
`,qe=x.default.button.withConfig({displayName:"ReferralPopup__SimpleButton",componentId:"sc-a65106e3-5"})`
  background: none;
  border: none;
  cursor: pointer;
`,Je=x.default.div.withConfig({displayName:"ReferralPopup__IconWrapper",componentId:"sc-a65106e3-6"})`
  align-items: center;
  justify-content: center;
  line-height: 10px;
  & > img,
  span {
    height: 14px;
    width: 14px;
  }
  @media screen and (min-width: ${N.j$.xxl}px) {
    & > img,
    span {
      height: ${({size:e})=>e?e+"px":"24px"};
      width: ${({size:e})=>e?e+"px":"24px"};
    }
  }
`,Qe=x.default.div.withConfig({displayName:"ReferralPopup__Countdown",componentId:"sc-a65106e3-7"})`
  display: flex;
  justify-content: space-around;
  gap: 5px;
`,Ke=x.default.div.withConfig({displayName:"ReferralPopup__Time",componentId:"sc-a65106e3-8"})`
  display: flex;
  position: relative;
  gap: 5px;
`;function Ve(){const e=(0,_.Wt)(ie.Lk.REFERRAL),t=(0,_.eJ)(),n=(0,Ue.C)((e=>e.wallets.switchingChain)),a=(0,h.useCallback)((()=>!n),[n]),s=(0,r.useWeb3React)(),l=(0,Le.Z)((0,r.useWeb3React)(),a),{account:d,connector:c}=(0,h.useMemo)((()=>s.account?s:l),[s,l]),p=window.location.host+"?ref=",[u,g]=(0,h.useState)(p),[m,f]=(0,De.Z)(),[x,w]=(0,h.useState)(0),[y,j]=(0,h.useState)(0),[C,N]=(0,h.useState)(),[z,k]=(0,h.useState)(),A=(0,Re.z)(d),v=(0,q.u)(),E=(0,Pe.g)(),I=function(){const e=(0,te.cq)(ee.ez,ee.Ul);return(0,h.useCallback)((async()=>{if(!e)throw new Error("missing contract");try{return await e.deploymentTimestamp()}catch(t){throw console.error(t),t}}),[e])}();(0,h.useEffect)((()=>{d&&g(p+d),e&&(I().then((e=>(k(e),e))),A().then((e=>(console.log("affiliateTimestamp",e.toNumber()),w(e.toNumber()),e))),v().then((e=>(console.log("block",e.timestamp),j(e.timestamp),e))),E().then((e=>(N(e),e))))}),[d,p,x,y,C,e,A,v,E,I]);const T=Oe(),S=Oe(!0),M=(0,h.useRef)(),[R,D]=(0,h.useState)(x-y);return(0,h.useEffect)((()=>(e&&(M.current=setInterval((()=>{D(x-y)}),1e3)),()=>clearInterval(M.current))),[x,y,e,R]),(0,i.jsx)(i.Fragment,{children:e&&(0,i.jsx)(_e,{children:(0,i.jsx)(Fe,{children:(0,i.jsxs)(We,{children:[(0,i.jsx)(He,{onClick:()=>t(),children:(0,i.jsx)("small",{children:"+"})}),(0,i.jsx)(Be,{children:(0,i.jsx)("img",{src:je})}),(0,i.jsx)("h1",{children:"Create your own referral link"}),0===x?C?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Adding liquidity during FREE MINT will automatically set your address as an active paid affiliate."}),(0,i.jsx)("p",{children:"Register after FREE MINT"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Create your referral link. You have 2 options:"}),(0,i.jsx)("p",{children:"1. Paid registration costs 0.1 ETH + gas fees. It becomes active immediately after purchase. Eligible for up to 15% affiliate rewards."}),(0,i.jsx)("p",{children:"2. Free registration costs only the gas fees. The link will become active after 1 cycle. Once active, it will be eligible for 5% affiliate rewards."}),(0,i.jsxs)(o.ZP,{width:"100%",gap:"10px",children:[(0,i.jsx)(Me.DF,{onClick:()=>S().then((()=>t())),fontSize:"14px",padding:"10px",width:"100%",$borderRadius:"5px",mt:"1rem",children:"Register instant"}),(0,i.jsx)(Me.JU,{onClick:()=>T().then((()=>t())),fontSize:"14px",padding:"10px",width:"100%",$borderRadius:"5px",mt:"1rem",children:"Register free"})]})]}):void 0!==x&&void 0!==y&&x<y?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Referral link active. You cannot use your own referral link."}),(0,i.jsxs)("p",{children:[p,(0,ae.Xn)(d),(0,i.jsx)(qe,{onClick:()=>{f(u)},children:(0,i.jsx)(b.ZP,{text:"Copied",show:m,children:(0,i.jsx)(Je,{size:12,children:(0,i.jsx)("img",{src:Se.Z,alt:"Icon"})})})})]})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["You have selected free registration with 5% affiliate rewards. The affiliate is currently inactive. It will become active in:",(0,i.jsx)(Qe,{children:Object.entries({Days:R/86400,Hours:R/3600%24,Minutes:R/60%60,Seconds:R/1%60}).map((([e,t])=>(0,i.jsxs)(Ke,{children:[(0,i.jsx)("span",{children:`${R>0?Math.floor(t):0}`.padStart(2,"0")}),(0,i.jsx)("span",{children:e})]},e)))})]}),(0,i.jsx)(o.ZP,{width:"100%",gap:"10px",children:(0,i.jsx)(Me.DF,{onClick:()=>S().then((()=>t())),fontSize:"14px",padding:"10px",width:"100%",$borderRadius:"5px",mt:"1rem",children:"Register instant"})})]})]})})})})}const Ze=x.default.div.withConfig({displayName:"SellPopup__Popup",componentId:"sc-1f2a757c-0"})`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: block;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  transition: opacity 0.15s linear;
  background: rgba(20, 20, 20, 70%);
`,Ge=x.default.div.withConfig({displayName:"SellPopup__PopupDialog",componentId:"sc-1f2a757c-1"})`
  position: relative;
  width: auto;
  margin: 1.75rem;
  pointer-events: none;
  @media screen and (min-width: ${N.j$.sm}px) {
    max-width: 554px;
    margin-right: auto;
    margin-left: auto;
  }
`,Ye=x.default.div.withConfig({displayName:"SellPopup__PopupContent",componentId:"sc-1f2a757c-2"})`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  pointer-events: auto;
  background: radial-gradient(
    166.71% 94.97% at 17.66% 11.47%,
    rgba(6, 55, 165, 0.65) 53.56%,
    rgba(111, 155, 255, 0.65) 100%
  );
  background-clip: padding-box;
  border: none;
  border-radius: 30px;
  outline: 0;
  padding: 25px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 20px;
    text-align: center;
  }
  p {
    text-align: center;
    margin-top: 0;
    font-size: 14px;
  }
  @media screen and (min-width: ${N.j$.lg}px) {
    padding: 30px 20px;
    border-radius: 35px;
    h1 {
      font-size: 27px;
    }
  }
  @media screen and (min-width: ${N.j$.xxl}px) {
    h1 {
      font-size: 37px;
    }
    button {
      border-radius: 17px;
      font-size: 22px;
      padding: 30px 10px;
    }
  }
`,Xe=x.default.button.withConfig({displayName:"SellPopup__PrimaryButton",componentId:"sc-1f2a757c-3"})`
  background: #04da57;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  padding: 10px 10px;
  color: white;
  width: 100%;
  cursor: pointer;
  margin-top: 15px;
  text-decoration: none;
  text-align: center;
  &:hover {
    background: #04bc4b;
  }
  @media screen and (min-width: ${N.j$.lg}px) {
    font-size: 22px;
    padding: 20px 10px;
    margin-top: 30px;
    border-radius: 17px;
  }
`,$e=x.default.div.withConfig({displayName:"SellPopup__KongAvatar",componentId:"sc-1f2a757c-4"})`
  position: relative;
  background: radial-gradient(88.59% 88.59% at 21.78% 11.41%, #0637a5 0%, #001e63 100%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  @media screen and (min-width: ${N.j$.lg}px) {
    width: 110px;
    height: 110px;
    img {
      width: 90px;
      height: 90px;
    }
  }
  @media screen and (min-width: ${N.j$.xxl}px) {
    width: 240px;
    height: 240px;
    img {
      width: auto;
      height: auto;
    }
  }
`,et=x.default.span.withConfig({displayName:"SellPopup__Close",componentId:"sc-1f2a757c-5"})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #acc6ff;
  padding: 10px;
  background: #001c5c;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transform: rotate(45deg);
  margin-left: auto;
  cursor: pointer;
  small {
    font-size: 50px;
    line-height: 30px;
    position: relative;
    left: 0px;
    top: -3px;
    cursor: pointer;
  }
  @media screen and (min-width: ${N.j$.xxl}px) {
    padding: 10px;
    width: 50px;
    height: 50px;
    small {
      font-size: 50px;
      line-height: 30px;
      left: 0px;
      top: -3px;
    }
  }
`;function tt(){const e=(0,_.Wt)(ie.Lk.SELL),t=(0,_.i3)();return(0,i.jsx)(i.Fragment,{children:e&&(0,i.jsx)(Ze,{children:(0,i.jsx)(Ge,{children:(0,i.jsxs)(Ye,{children:[(0,i.jsx)(et,{onClick:()=>t(),children:(0,i.jsx)("small",{children:"+"})}),(0,i.jsx)($e,{children:(0,i.jsx)("img",{src:je})}),(0,i.jsx)("h1",{children:"How to sell"}),(0,i.jsx)("p",{children:"LONG KONG is a novel concept that leverages the AMM system to reward the most patient participants with the best possible exit strategy."}),(0,i.jsx)("p",{children:"The contract is mistakenly labelled as a Honeypot because you cannot directly sell or transfer $KONG. However you can indirectly sell or transfer by wrapping the LP token."}),(0,i.jsx)(Xe,{onClick:()=>t(),children:"Got it \ud83d\ude80"})]})})})})}x.default.div.withConfig({displayName:"Popups__MobilePopupWrapper",componentId:"sc-d51f1b90-0"})`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  display: none;
  padding-left: 20px;
  padding-right: 20px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: block;
    padding-top: 20px;
  `};
`,x.default.div.withConfig({displayName:"Popups__MobilePopupInner",componentId:"sc-d51f1b90-1"})`
  height: 99%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`;const nt=(0,x.default)(H.Tz).withConfig({displayName:"Popups__FixedPopupColumn",componentId:"sc-d51f1b90-2"})`
  position: fixed;
  top: ${({drawerOpen:e})=>64+(e?-50:0)+"px"};
  right: 1rem;
  max-width: 348px !important;
  width: 100%;
  z-index: ${F.k.modal};
  transition: ${({theme:e})=>`top ${e.transition.timing.inOut} ${e.transition.duration.slow}`};

  // ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
  //   display: none;
  // `};
`;function it(){const[e]=(0,W.Q5)();(0,_.iT)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(nt,{gap:"20px",drawerOpen:e,"data-testid":"popups",children:[(0,i.jsx)(Ve,{}),(0,i.jsx)(Te,{}),(0,i.jsx)(tt,{}),(0,i.jsx)(ye,{})]})})}var at,rt=n(31502),ot=n(19903),st=n(66196),lt=n(79371),dt=n(50786),ct=n(50091),pt=n(8809),ht=n(46920),ut=n(89243),gt=Object.defineProperty,mt=Object.getOwnPropertySymbols,ft=Object.prototype.hasOwnProperty,xt=Object.prototype.propertyIsEnumerable,wt=(e,t,n)=>t in e?gt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,yt=(e,t)=>{for(var n in t||(t={}))ft.call(t,n)&&wt(e,n,t[n]);if(mt)for(var n of mt(t))xt.call(t,n)&&wt(e,n,t[n]);return e},bt=(e,t)=>{var n={};for(var i in e)ft.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&mt)for(var i of mt(e))t.indexOf(i)<0&&xt.call(e,i)&&(n[i]=e[i]);return n};(e=>{const t=class{static encodeText(n,i){const a=e.QrSegment.makeSegments(n);return t.encodeSegments(a,i)}static encodeBinary(n,i){const a=e.QrSegment.makeBytes(n);return t.encodeSegments([a],i)}static encodeSegments(e,n,a=1,o=40,l=-1,d=!0){if(!(t.MIN_VERSION<=a&&a<=o&&o<=t.MAX_VERSION)||l<-1||l>7)throw new RangeError("Invalid value");let c,p;for(c=a;;c++){const i=8*t.getNumDataCodewords(c,n),a=s.getTotalBits(e,c);if(a<=i){p=a;break}if(c>=o)throw new RangeError("Data too long")}for(const i of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])d&&p<=8*t.getNumDataCodewords(c,i)&&(n=i);let h=[];for(const t of e){i(t.mode.modeBits,4,h),i(t.numChars,t.mode.numCharCountBits(c),h);for(const e of t.getData())h.push(e)}r(h.length==p);const u=8*t.getNumDataCodewords(c,n);r(h.length<=u),i(0,Math.min(4,u-h.length),h),i(0,(8-h.length%8)%8,h),r(h.length%8==0);for(let t=236;h.length<u;t^=253)i(t,8,h);let g=[];for(;8*g.length<h.length;)g.push(0);return h.forEach(((e,t)=>g[t>>>3]|=e<<7-(7&t))),new t(c,n,g,l)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let i=0;i<t;i++)0==n&&0==i||0==n&&i==t-1||n==t-1&&0==i||this.drawAlignmentPattern(e[n],e[i]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let n=t;for(let a=0;a<10;a++)n=n<<1^1335*(n>>>9);const i=21522^(t<<10|n);r(i>>>15==0);for(let r=0;r<=5;r++)this.setFunctionModule(8,r,a(i,r));this.setFunctionModule(8,7,a(i,6)),this.setFunctionModule(8,8,a(i,7)),this.setFunctionModule(7,8,a(i,8));for(let r=9;r<15;r++)this.setFunctionModule(14-r,8,a(i,r));for(let r=0;r<8;r++)this.setFunctionModule(this.size-1-r,8,a(i,r));for(let r=8;r<15;r++)this.setFunctionModule(8,this.size-15+r,a(i,r));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let n=0;n<12;n++)e=e<<1^7973*(e>>>11);const t=this.version<<12|e;r(t>>>18==0);for(let n=0;n<18;n++){const e=a(t,n),i=this.size-11+n%3,r=Math.floor(n/3);this.setFunctionModule(i,r,e),this.setFunctionModule(r,i,e)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let i=-4;i<=4;i++){const a=Math.max(Math.abs(i),Math.abs(n)),r=e+i,o=t+n;0<=r&&r<this.size&&0<=o&&o<this.size&&this.setFunctionModule(r,o,2!=a&&4!=a)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let i=-2;i<=2;i++)this.setFunctionModule(e+i,t+n,1!=Math.max(Math.abs(i),Math.abs(n)))}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){const n=this.version,i=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(n,i))throw new RangeError("Invalid argument");const a=t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][n],o=t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][n],s=Math.floor(t.getNumRawDataModules(n)/8),l=a-s%a,d=Math.floor(s/a);let c=[];const p=t.reedSolomonComputeDivisor(o);for(let r=0,u=0;r<a;r++){let n=e.slice(u,u+d-o+(r<l?0:1));u+=n.length;const i=t.reedSolomonComputeRemainder(n,p);r<l&&n.push(0),c.push(n.concat(i))}let h=[];for(let t=0;t<c[0].length;t++)c.forEach(((e,n)=>{(t!=d-o||n>=l)&&h.push(e[t])}));return r(h.length==s),h}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let n=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let i=0;i<this.size;i++)for(let r=0;r<2;r++){const o=t-r,s=0==(t+1&2)?this.size-1-i:i;!this.isFunction[s][o]&&n<8*e.length&&(this.modules[s][o]=a(e[n>>>3],7-(7&n)),n++)}}r(n==8*e.length)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let i;switch(e){case 0:i=(n+t)%2==0;break;case 1:i=t%2==0;break;case 2:i=n%3==0;break;case 3:i=(n+t)%3==0;break;case 4:i=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:i=n*t%2+n*t%3==0;break;case 6:i=(n*t%2+n*t%3)%2==0;break;case 7:i=((n+t)%2+n*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][n]&&i&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let r=0;r<this.size;r++){let n=!1,i=0,a=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[r][o]==n?(i++,5==i?e+=t.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,a),n||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),n=this.modules[r][o],i=1);e+=this.finderPenaltyTerminateAndCount(n,i,a)*t.PENALTY_N3}for(let r=0;r<this.size;r++){let n=!1,i=0,a=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[o][r]==n?(i++,5==i?e+=t.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,a),n||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),n=this.modules[o][r],i=1);e+=this.finderPenaltyTerminateAndCount(n,i,a)*t.PENALTY_N3}for(let r=0;r<this.size-1;r++)for(let n=0;n<this.size-1;n++){const i=this.modules[r][n];i==this.modules[r][n+1]&&i==this.modules[r+1][n]&&i==this.modules[r+1][n+1]&&(e+=t.PENALTY_N2)}let n=0;for(const t of this.modules)n=t.reduce(((e,t)=>e+(t?1:0)),n);const i=this.size*this.size,a=Math.ceil(Math.abs(20*n-10*i)/i)-1;return r(0<=a&&a<=9),e+=a*t.PENALTY_N4,r(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{const e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2));let n=[6];for(let i=this.size-7;n.length<e;i-=t)n.splice(1,0,i);return n}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version number out of range");let n=(16*e+128)*e+64;if(e>=2){const t=Math.floor(e/7)+2;n-=(25*t-10)*t-55,e>=7&&(n-=36)}return r(208<=n&&n<=29648),n}static getNumDataCodewords(e,n){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let n=[];for(let t=0;t<e-1;t++)n.push(0);n.push(1);let i=1;for(let a=0;a<e;a++){for(let e=0;e<n.length;e++)n[e]=t.reedSolomonMultiply(n[e],i),e+1<n.length&&(n[e]^=n[e+1]);i=t.reedSolomonMultiply(i,2)}return n}static reedSolomonComputeRemainder(e,n){let i=n.map((e=>0));for(const a of e){const e=a^i.shift();i.push(0),n.forEach(((n,a)=>i[a]^=t.reedSolomonMultiply(n,e)))}return i}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");let n=0;for(let i=7;i>=0;i--)n=n<<1^285*(n>>>7),n^=(t>>>i&1)*e;return r(n>>>8==0),n}finderPenaltyCountPatterns(e){const t=e[1];r(t<=3*this.size);const n=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(n&&e[0]>=4*t&&e[6]>=t?1:0)+(n&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}constructor(e,n,i,a){if(this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version value out of range");if(a<-1||a>7)throw new RangeError("Mask value out of range");this.size=4*e+17;let o=[];for(let t=0;t<this.size;t++)o.push(!1);for(let t=0;t<this.size;t++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();const s=this.addEccAndInterleave(i);if(this.drawCodewords(s),-1==a){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);const n=this.getPenaltyScore();n<e&&(a=t,e=n),this.applyMask(t)}}r(0<=a&&a<=7),this.mask=a,this.applyMask(a),this.drawFormatBits(a),this.isFunction=[]}};let n=t;function i(e,t,n){if(t<0||t>31||e>>>t!=0)throw new RangeError("Value out of range");for(let i=t-1;i>=0;i--)n.push(e>>>i&1)}function a(e,t){return 0!=(e>>>t&1)}function r(e){if(!e)throw new Error("Assertion error")}n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=n;const o=class{static makeBytes(e){let t=[];for(const n of e)i(n,8,t);return new o(o.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!o.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let n=0;n<e.length;){const a=Math.min(e.length-n,3);i(parseInt(e.substr(n,a),10),3*a+1,t),n+=a}return new o(o.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!o.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t,n=[];for(t=0;t+2<=e.length;t+=2){let a=45*o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t));a+=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),i(a,11,n)}return t<e.length&&i(o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,n),new o(o.Mode.ALPHANUMERIC,e.length,n)}static makeSegments(e){return""==e?[]:o.isNumeric(e)?[o.makeNumeric(e)]:o.isAlphanumeric(e)?[o.makeAlphanumeric(e)]:[o.makeBytes(o.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)i(e,8,t);else if(e<16384)i(2,2,t),i(e,14,t);else{if(!(e<1e6))throw new RangeError("ECI assignment value out of range");i(6,3,t),i(e,21,t)}return new o(o.Mode.ECI,0,t)}static isNumeric(e){return o.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return o.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(const i of e){const e=i.mode.numCharCountBits(t);if(i.numChars>=1<<e)return 1/0;n+=4+e+i.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)"%"!=e.charAt(n)?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substr(n+1,2),16)),n+=2);return t}constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}};let s=o;s.NUMERIC_REGEX=/^[0-9]*$/,s.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,s.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=s})(at||(at={})),(e=>{let t;(e=>{const t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};let n=t;n.LOW=new t(0,1),n.MEDIUM=new t(1,0),n.QUARTILE=new t(2,3),n.HIGH=new t(3,2),e.Ecc=n})(t=e.QrCode||(e.QrCode={}))})(at||(at={})),(e=>{let t;(e=>{const t=class{numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}};let n=t;n.NUMERIC=new t(1,[10,12,14]),n.ALPHANUMERIC=new t(2,[9,11,13]),n.BYTE=new t(4,[8,16,16]),n.KANJI=new t(8,[8,10,12]),n.ECI=new t(7,[0,0,0]),e.Mode=n})(t=e.QrSegment||(e.QrSegment={}))})(at||(at={}));var jt=at,Ct={L:jt.QrCode.Ecc.LOW,M:jt.QrCode.Ecc.MEDIUM,Q:jt.QrCode.Ecc.QUARTILE,H:jt.QrCode.Ecc.HIGH},Nt=128,zt="L",kt="#FFFFFF",At="#000000",vt=!1,Et=4,It=.1;function Tt(e,t=0){const n=[];return e.forEach((function(e,i){let a=null;e.forEach((function(r,o){if(!r&&null!==a)return n.push(`M${a+t} ${i+t}h${o-a}v1H${a+t}z`),void(a=null);if(o!==e.length-1)r&&null===a&&(a=o);else{if(!r)return;null===a?n.push(`M${o+t},${i+t} h1v1H${o+t}z`):n.push(`M${a+t},${i+t} h${o+1-a}v1H${a+t}z`)}}))})),n.join("")}function St(e,t){return e.slice().map(((e,n)=>n<t.y||n>=t.y+t.h?e:e.map(((e,n)=>(n<t.x||n>=t.x+t.w)&&e))))}function Mt(e,t,n,i){if(null==i)return null;const a=n?Et:0,r=e.length+2*a,o=Math.floor(t*It),s=r/t,l=(i.width||o)*s,d=(i.height||o)*s,c=null==i.x?e.length/2-l/2:i.x*s,p=null==i.y?e.length/2-d/2:i.y*s;let h=null;if(i.excavate){let e=Math.floor(c),t=Math.floor(p);h={x:e,y:t,w:Math.ceil(l+c-e),h:Math.ceil(d+p-t)}}return{x:c,y:p,h:d,w:l,excavation:h}}!function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}}();function Rt(e){const t=e,{value:n,size:i=Nt,level:a=zt,bgColor:r=kt,fgColor:o=At,includeMargin:s=vt,imageSettings:l}=t,d=bt(t,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let c=jt.QrCode.encodeText(n,Ct[a]).getModules();const p=s?Et:0,u=c.length+2*p,g=Mt(c,i,s,l);let m=null;null!=l&&null!=g&&(null!=g.excavation&&(c=St(c,g.excavation)),m=h.createElement("image",{xlinkHref:l.src,height:g.h,width:g.w,x:g.x+p,y:g.y+p,preserveAspectRatio:"none"}));const f=Tt(c,p);return h.createElement("svg",yt({height:i,width:i,viewBox:`0 0 ${u} ${u}`},d),h.createElement("path",{fill:r,d:`M0,0 h${u}v${u}H0z`,shapeRendering:"crispEdges"}),h.createElement("path",{fill:o,d:f,shapeRendering:"crispEdges"}),m)}var Dt=n(36633),Pt=n.p+"static/media/uniwallet_modal_icon.e17cdec93dd86d3fe3b7.png";const Lt={[ot.xo.UNISWAP_WALLET_MODAL_DOWNLOAD_BUTTON]:"https://uniswapwallet.onelink.me/8q3y/qfwlncf9",[ot.xo.UNISWAP_WALLET_NAVBAR_MENU_DOWNLOAD_BUTTON]:"https://uniswapwallet.onelink.me/8q3y/46tvu6pb",[ot.xo.UNISWAP_WALLET_LANDING_PAGE_DOWNLOAD_BUTTON]:"https://uniswapwallet.onelink.me/8q3y/79gveilz",[ot.xo.UNISWAP_WALLET_BANNER_DOWNLOAD_BUTTON]:"https://uniswapwallet.onelink.me/8q3y/jh9orof3"};function Ot({element:e,isAndroidGALaunched:t}){Dt.gn?Ut({element:e,appPlatform:ot._N.IOS,linkTarget:"uniswap_wallet_appstore"}):t&&Dt.Dt?Ut({element:e,appPlatform:ot._N.ANDROID,linkTarget:"uniswap_wallet_playstore"}):((0,st._P)(ot.Je.UNISWAP_WALLET_MICROSITE_OPENED,{element:e}),window.open(Lt[e],"uniswap_wallet_microsite"))}const Ut=e=>{(0,st._P)(ot.Je.UNISWAP_WALLET_APP_DOWNLOAD_OPENED,{element:e.element,appPlatform:e?.appPlatform}),window.open(Lt[e.element],e.linkTarget)},_t=x.default.button.withConfig({displayName:"DownloadButton__StyledButton",componentId:"sc-7e802adb-0"})`
  ${w.iV}
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 6px;
  padding: 8px 24px;
  border: none;
  white-space: nowrap;
  background: ${({theme:e,branded:t})=>t?e.accent1:e.surface3};
  border-radius: 12px;

  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  color: ${({theme:e,branded:t})=>t?e.deprecated_accentTextLightPrimary:e.neutral1};
`;function Ft({onClick:e,branded:t,children:n}){return(0,i.jsx)(_t,{branded:t,onClick:e,children:n})}function Wt({onClick:e,text:t="Download",element:n}){const a=(0,ut.W)(),r=(0,h.useCallback)((()=>{e?.(),Ot({element:n,isAndroidGALaunched:a})}),[n,a,e]);return(0,i.jsx)(Ft,{branded:!0,onClick:r,children:t})}const Ht=(0,x.default)(o.m0).withConfig({displayName:"UniwalletModal__UniwalletConnectWrapper",componentId:"sc-66e8a6b9-0"})`
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
`,Bt=(0,x.default)(o.m0).withConfig({displayName:"UniwalletModal__HeaderRow",componentId:"sc-66e8a6b9-1"})`
  display: flex;
`,qt=(0,x.default)(o.m0).withConfig({displayName:"UniwalletModal__QRCodeWrapper",componentId:"sc-66e8a6b9-2"})`
  aspect-ratio: 1;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.white};
  margin: 24px 32px 20px;
  padding: 10px;
`,Jt=x.default.div.withConfig({displayName:"UniwalletModal__Divider",componentId:"sc-66e8a6b9-3"})`
  border-bottom: 1px solid ${({theme:e})=>e.surface3};
  width: 100%;
`;function Qt(){const{activationState:e,cancelActivation:t}=(0,ct.Y)(),[n,r]=(0,h.useState)(),o=(0,ut.W)(),s=!(Dt.gn||o&&Dt.Dt)&&e.status===ct.o.PENDING&&e.connection.type===pt.R.UNISWAP_WALLET_V2&&!!n;(0,h.useEffect)((()=>{dt.uq.connector.events.addListener(ht.Z.UNI_URI_AVAILABLE,(e=>{e&&r(e)}))}),[]),(0,h.useEffect)((()=>{s&&(0,st._P)(ot.Je.UNIWALLET_CONNECT_MODAL_OPENED)}),[s]);const l=(0,x.useTheme)();return(0,i.jsx)(lt.Z,{isOpen:s,onDismiss:t,children:(0,i.jsxs)(Ht,{children:[(0,i.jsxs)(Bt,{children:[(0,i.jsx)(w.Tv.SubHeader,{children:(0,i.jsx)(a.cC,{id:"4Ock4M"})}),(0,i.jsx)(w.Tw,{onClick:t})]}),(0,i.jsx)(qt,{children:n&&(0,i.jsx)(Rt,{value:n,width:"100%",height:"100%",level:"M",fgColor:l.darkMode?l.surface1:l.black,imageSettings:{src:Pt,height:33,width:33,excavate:!1}})}),(0,i.jsx)(Jt,{}),(0,i.jsx)(Vt,{})]})})}const Kt=(0,x.default)(o.m0).withConfig({displayName:"UniwalletModal__InfoSectionWrapper",componentId:"sc-66e8a6b9-4"})`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  gap: 20px;
`;function Vt(){const e=(0,ut.W)();return(0,i.jsxs)(Kt,{children:[(0,i.jsxs)(H.Tz,{gap:"4px",children:[(0,i.jsx)(w.Tv.SubHeaderSmall,{color:"neutral1",children:(0,i.jsx)(a.cC,{id:"fo1Rgf"})}),(0,i.jsx)(w.Tv.BodySmall,{color:"neutral2",children:e?(0,i.jsx)(a.cC,{id:"hcdupZ"}):(0,i.jsx)(a.cC,{id:"Hmd9BI"})})]}),(0,i.jsx)(H.ZP,{children:(0,i.jsx)(Wt,{element:ot.xo.UNISWAP_WALLET_MODAL_DOWNLOAD_BUTTON})})]})}var Zt=n(86003),Gt=n(15387),Yt=JSON.parse('[{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"bytes32","name":"merkleRoot_","type":"bytes32"},{"internalType":"uint256","name":"endTime_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyClaimed","type":"error"},{"inputs":[],"name":"ClaimWindowFinished","type":"error"},{"inputs":[],"name":"EndTimeInPast","type":"error"},{"inputs":[],"name":"InvalidProof","type":"error"},{"inputs":[],"name":"NoWithdrawDuringClaim","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"isClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),Xt=n.p+"static/media/airdopBackground.24369a2170b8b8ce7336.png",$t=n(62329),en=n(25575),tn=n(26030),nn=n(634);var an;!function(e){e.LOOKS_RARE_NFT_COMMERCE_REWARDS="LOOKS_RARE_NFT_COMMERCE_REWARDS",e.GENIE_UNISWAP_USDC_AIRDROP="GENIE_UNISWAP_USDC_AIRDROP"}(an||(an={}));const rn=x.default.div.withConfig({displayName:"AirdropModal__ModalWrap",componentId:"sc-2e5fa0a7-0"})`
  display: flex;
  flex-direction: column;
`,on=x.default.div.withConfig({displayName:"AirdropModal__Body",componentId:"sc-2e5fa0a7-1"})`
  padding: 28px 20px 20px 20px;
`,sn=(0,x.default)(Me.UH).withConfig({displayName:"AirdropModal__ClaimButton",componentId:"sc-2e5fa0a7-2"})`
  width: 100%;
  background-color: ${({theme:e})=>e.accent1};
  border-radius: 12px;
  color: ${({theme:e})=>e.white};
`,ln=x.default.div.withConfig({displayName:"AirdropModal__Line",componentId:"sc-2e5fa0a7-3"})`
  height: 1px;
  width: 100%;
  background-color: ${({theme:e})=>e.white};
  opacity: 0.24;
  margin-top: 12px;
  margin-bottom: 12px;
`,dn=x.default.a.withConfig({displayName:"AirdropModal__LinkWrap",componentId:"sc-2e5fa0a7-4"})`
  text-decoration: none;
  ${$t.c}
`,cn=x.default.div.withConfig({displayName:"AirdropModal__ImageContainer",componentId:"sc-2e5fa0a7-5"})`
  position: relative;
  width: 100%;
`,pn=x.default.img.withConfig({displayName:"AirdropModal__StyledImage",componentId:"sc-2e5fa0a7-6"})`
  width: 100%;
  height: 170px;
`,hn=x.default.div.withConfig({displayName:"AirdropModal__USDCLabel",componentId:"sc-2e5fa0a7-7"})`
  font-weight: 535;
  font-size: 36px;
  line-height: 44px;
  margin-top: 8px;
  color: white;
`,un=x.default.div.withConfig({displayName:"AirdropModal__TextContainer",componentId:"sc-2e5fa0a7-8"})`
  position: absolute;
  left: 16px;
  top: 16px;
  right: 16px;
`,gn=x.default.div.withConfig({displayName:"AirdropModal__RewardsDetailsContainer",componentId:"sc-2e5fa0a7-9"})`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,mn=x.default.span.withConfig({displayName:"AirdropModal__CurrencyText",componentId:"sc-2e5fa0a7-10"})`
  color: white;
  font-weight: 535;
  font-size: 12px;
  line-height: 14.5px;
`,fn=x.default.div.withConfig({displayName:"AirdropModal__ClaimContainer",componentId:"sc-2e5fa0a7-11"})`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 380px;
  padding: 60px 28px;
  padding-bottom: 20px;
`,xn=x.default.div.withConfig({displayName:"AirdropModal__SuccessText",componentId:"sc-2e5fa0a7-12"})`
  font-weight: 485;
  font-size: 16px;
  line-height: 24px;
  margin-top: 24px;
  margin-bottom: 8px;
`,wn=x.default.a.withConfig({displayName:"AirdropModal__EtherscanLink",componentId:"sc-2e5fa0a7-13"})`
  text-decoration: none;

  ${$t.c}
`,yn=(0,x.default)(Me.UH).withConfig({displayName:"AirdropModal__CloseButton",componentId:"sc-2e5fa0a7-14"})`
  max-width: 68px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
`,bn=(0,x.default)(w.Tw).withConfig({displayName:"AirdropModal__SyledCloseIcon",componentId:"sc-2e5fa0a7-15"})`
  float: right;
  height: 24px;

  ${$t.c}
`,jn=x.default.div.withConfig({displayName:"AirdropModal__Error",componentId:"sc-2e5fa0a7-16"})`
  display: flex;
  color: ${({theme:e})=>e.critical};
  font-weight: 535;
  line-height: 24px;
  border-radius: 16px;
  padding: 12px 20px;
  font-size: 14px;
  align-items: center;
  gap: 12px;
`,Cn=x.default.div.withConfig({displayName:"AirdropModal__ReactLinkWrap",componentId:"sc-2e5fa0a7-17"})`
  margin-bottom: 40px;
`,Nn=x.default.span.withConfig({displayName:"AirdropModal__RewardsText",componentId:"sc-2e5fa0a7-18"})`
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.white};

  &:first-child {
    margin-bottom: 8px;
  }
`,zn=x.default.span.withConfig({displayName:"AirdropModal__RewardsInformationText",componentId:"sc-2e5fa0a7-19"})`
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme:e})=>e.neutral1};
  margin-bottom: 28px;
`,kn=x.default.span.withConfig({displayName:"AirdropModal__MainHeader",componentId:"sc-2e5fa0a7-20"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.white};
`,An=x.default.div.withConfig({displayName:"AirdropModal__EtherscanLinkWrap",componentId:"sc-2e5fa0a7-21"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;var vn;!function(e){e[e.tradingRewardAmount=300]="tradingRewardAmount",e[e.holderRewardAmount=1e3]="holderRewardAmount",e[e.combinedAmount=1300]="combinedAmount"}(vn||(vn={}));var En=()=>{const{account:e,provider:t}=(0,r.useWeb3React)(),[n,a]=(0,h.useState)(),[o,s]=(0,h.useState)(!1),[l,d]=(0,h.useState)(""),[c,p]=(0,h.useState)(!1),u=(0,nn.k)((e=>e.setIsClaimAvailable)),[g,m]=(0,h.useState)(!1),[f,x]=(0,h.useState)(0),y=(0,_.Wt)(ie.Lk.UNISWAP_NFT_AIRDROP_CLAIM),b=(0,_.xk)(ie.Lk.UNISWAP_NFT_AIRDROP_CLAIM),j=(0,te.cq)(Gt.UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS,Yt),N=()=>{m(!1),p(!0),setTimeout((()=>{p(!1)}),5e3)};(0,h.useEffect)((()=>{e&&t&&j&&(async()=>{try{const{data:n}=await(async e=>{const t=`https://temp.api.uniswap.org/v1/nft/rewards/${e}?category=GENIE_UNISWAP_USDC_AIRDROP`,n=new AbortController,i=setTimeout((()=>n.abort()),3e3),a=await fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}});return clearInterval(i),await a.json()})(e),i=n.find((e=>e?.rewardType===an.GENIE_UNISWAP_USDC_AIRDROP));if(!i)return;const[r]=await j.connect(t).functions.isClaimed(i?.index);if(i&&!1===r){const e=Zt.O$.from(i.amount).div(10**6);a(i),x(e.toNumber()),u(!0)}}catch(n){N()}})()}),[e,j,t,u]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(lt.Z,{hideBorder:!0,isOpen:y,onDismiss:b,maxHeight:90,maxWidth:400,children:(0,i.jsx)(rn,{children:o?(0,i.jsxs)(fn,{children:[(0,i.jsx)(w.Tv.HeadlineSmall,{children:"Congratulations!"}),(0,i.jsxs)(xn,{children:["You have successfully claimed ",f," USDC. Thank you for supporting Genie.xyz."]}),(0,i.jsx)(wn,{href:`https://etherscan.io/tx/${l}`,target:"_blank",children:(0,i.jsx)(w.Tv.Link,{children:(0,i.jsxs)(An,{children:[(0,i.jsx)("span",{children:"Etherscan"}),(0,i.jsx)(tn.XC,{})]})})}),(0,i.jsx)(yn,{size:Me.qE.medium,emphasis:Me.eI.medium,onClick:b,children:"Close"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(cn,{children:[(0,i.jsxs)(un,{children:[(0,i.jsx)(bn,{onClick:b,stroke:"white"}),(0,i.jsx)(kn,{children:"Uniswap NFT Airdrop"}),(0,i.jsxs)(hn,{children:[f," USDC"]}),(0,i.jsx)(ln,{}),(0,i.jsxs)(gn,{children:[(0,i.jsx)(Nn,{children:"Trading rewards"})," ",(0,i.jsx)(mn,{children:f===vn.tradingRewardAmount||f===vn.combinedAmount?`${vn.tradingRewardAmount} USDC`:"0"})]}),(0,i.jsxs)(gn,{children:[(0,i.jsx)(Nn,{children:"Genie NFT holder rewards"})," ",(0,i.jsx)(mn,{children:f!==vn.tradingRewardAmount?`${vn.holderRewardAmount} USDC`:"0"})]})]}),(0,i.jsx)(pn,{src:Xt})]}),(0,i.jsxs)(on,{children:[(0,i.jsxs)(zn,{children:["As a long time supporter of Genie, you\u2019ve been awarded ",f," USDC tokens."]}),(0,i.jsx)(Cn,{children:(0,i.jsx)(dn,{href:"https://uniswap.org/blog/uniswap-nft-aggregator-announcement",target:"_blank",children:(0,i.jsx)(w.Tv.Link,{children:"Read more about Uniswap NFT."})})}),c&&(0,i.jsxs)(jn,{children:[(0,i.jsx)(C.Z,{}),"Claim USDC failed. Please try again later"]}),(0,i.jsxs)(sn,{onClick:async()=>{try{if(j&&n&&n.amount&&n.merkleProof&&t){m(!0);const i=await j.connect(t?.getSigner()).functions.claim(n.index,e,n?.amount,n?.merkleProof);await i.wait(),d(i.hash),m(!1),s(!0),u(!1)}}catch(i){m(!1),N()}},size:Me.qE.medium,emphasis:Me.eI.medium,disabled:g,children:[g&&(0,i.jsx)(en.ZP,{stroke:"white"}),(0,i.jsxs)("span",{children:["Claim",g&&"ing"," USDC"]})]})]})]})})})})},In=n(23586),Tn=n(47096),Sn=n(68456),Mn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAYAAABxcwvcAAAdNUlEQVR4Ab1caZAdV3U+p/u9WSTLGglbNgSscRIwm/A4VBmz2JaTCsFgY7kSNmODSQWIWWJTRcKWKklVxGw/bANmyVLINl6gQsV4oSD80MjGFJBUaSQgBlIpj5wELwFrJI00y3vdN+c7y+1+Iy+yFnfVm3nv9e2+9373LN855/ZjeoaPud1z4yVV6+XtBHOxNtVpnFIaK0oeT4mJqoqItekME8+klKapKGao6u+gfj3ZOXlsipln6Bk8mI7xkXansR7Nb6CCzuVUbxAgxoqUKBWF9J6kgbz68iqSDkdAw195W9i5uiYqS/m+zgMuuuVU1a+38XDn9u6K0Uk6xscxA2lu97713U53Y0r1BNVprK5s3jZ/6bYGMAEKKQgiIQpQwvd9+QwgcU7f27U6ZICHtsC5KKbTUGeyXD60Wa6fpmNwHHWQ+nvnLpd/G2Xu4zorTMzmlIFAr4VIB0CiFmDWVkCDpJUFpV5l1wlIAFPPoQmAFQD1u76g3yn0ei6LLb2ZvZtHT332NB3F46iB1N+7f4PoxTUynXGVhtoBAiasE9CJqYa1e1Wp8MEwu1qxfzZA8gftSHoAiACnshVICwLmcMdAlP8iYVuK45cdNck6YpDS3Nx4r09fE2lYrxJTMtViY1RgAIyssqkR6eRUoVLtvbsU8eBwAAw0LYVqBdhtgHELqCBAm+/7V7XenwGejIOHyk3lquWb6QiPIwJpfs/sVWXR2ShDH0sxGTmKTinqVCgo1gnn99qjqlc2Mm6/7b0CyZzv5eiaHatadizUFNIHQBcFqB6kK/BL1k23nO6V5Xmjq0an6TCPwwIpPbB7rH/iyL+kitZDKnATHbRMHADlpQ9gyL+C3ZCRu5JkMJLbmoyNfgf75UDWzWg51C4l76XVD972RJ7mFk11A3Dptxwb3cTD3cOSqqcNkqpXj7ZK5+NqF8LedAUglRi/a8x2oKs0AIrZmZTtDcfkKzLx8n91SFLKRs5ogqufNzVVrM0eQgW5qvX+Sf4LQMQjnWvLlcs+RE/zeFogze7ePTHUGd0K9WI3ElyUNoFQo7hrbauYYUoD+uOTbX2PiQU9oPb17u4DCAcsVSnwMuPeEkOzXayer57rEYsa1rBzw2IGlg1P8tjoxU+HkB4ySLO7ZyeGu92tYMc6FAbHKxrX7UDo9GNC5EISRtbbuBxQpgjU9mScbVA29NQCvxoQ1Qyqtk1+TckqPaqMcr7eN2+f0VYMfTE6PFWcuPy8QwWqOJRGiwCo7GxNbqDhpkvYnhircxgKR4W7wruEpJhuZR6UAqyQnBSaxE17SI9LUtbcFN83Y1OJSpydg5qxmkzC/b482rXrFCgY+d5E2n1ga/IFP2KQEGsxJKjkMXLuU0K/Y+J1M6nUFqEsXQ6Uq8FS4U1BJP0MpIDjvt6+SA0VUKLJ7uIDrcLVjc0mYhH1FejL9+XxIwPAV3vmJur9i9fQkYKUEIx2eWuqqjELDVj1Wo1huO19C944uaex94RV84HH0idygw2eFNfXDaJqcPt1Vq+YpBJMbgRSdb12gw6V79UW49W1S3LRSGQ4CXxcPqznGI4Bff3f7OUiVU8J1JOC1O8U10jH4+RuFO5d46lkeqad7xK13rWnWX0FhJtww6fLrirhuMkpgE6ybfDxOWaV3L51vM9Qt6AMrodJ7+sLwY0XZGrurf2CgogWKM/qFgp+/9d7r0oL/Q10OCD19i8gON1QQLchrt3SOvNOjcPIgF52EtFd91O68/6wvkvslBtfDq101ULspRKZsvRxtKH2pB2M0NIWaaXSvBy7MQS7Vwn2eyUwcJDagp1rmboVxw2pAzDjTuBVX5NxjD8RFo/r3ZQL1cUDKsLJGHQEpiZBLhGppUYf/i7RmOj9J9ZnO8CulplIQnV2PEz04Awx2p493jBxcoABXmUZAIZdKWOCwa0KtzkIXdg+JwMqBVUIFcaYJT+VnJTqubIwIZVYKu1f1L6g4t1TVk3y6NB5hwzS4r757XJiQhfQ1WzQS9XUaE2L97zpVrnqZKKPnesg0WA4snueaI+8TllJdM808b27qMY8P3AW0Ypha5Z8spgXVttHyHUjQJm5Z+9qOScLrB1QjBlkV21WZWrIlBcY11fzPfFMixK6dEza1qx4V2eos2UpHgepW39WUh1MEziDlSrKlhGMFcrumqghidLxP4hq3/ELSm+5zQCh1KgYrt3xENGLryM+/0ai8VWUROoYXud1N5h0qVq6dPaT2xebmKdC7J61n8M9dz7SSK0Jmg1tsfJhJWpnGTLXQgg1YtRAaQQyCfsWrnk8WnAQSDXzRuUXVeOaMzMOcc7G0d/7+XS8SMP3BOOdolLnb6EkBl0VwUliAiBoeu+0nBdg9ohnfP8riL96kQKXfvpwA2rJ2X6Tx2Fmb2ySarUA3M8faahAba/k6h12MTm30nFUbq/cHrEAlTxlLNxpTMjmVU8K0iKkqBIDFp67aNhualEg5jCvzp1ryoGk8hABStXqdVuIpnfnDGNx6qqMOYtX5Ju22x1fehKlr7xRgLpBbVbatZtIVDHdNEX8wwdFNR+QVV40dcGY/uNRoi/+yNpMPWQ0JDIDkKTagbB8SxMnwv64AoRxL5YNqcczKyLhy765K5dKEw+CNP+AfDGuRrFT5MllIzigXn6DRE1ED8h2zwklkElCql5/ozW69c3EZzzH+I6oFmyRgn3haZRueUtedb7+x5Q++r2BwaX2/1PGKL1mLdGlpxPLfwXx49+n9JFziK8409h07VJU1a00ceP11PYQZ6aisxHVrH97wKRXknblySs2C3CbDpKk3tzcernhuLpUiGenbA2Wm0xjsONIc4QqOdPllcNqX2jVMqLvvMNAhCrduN3udMELGwMsYCkCfdcRUT2SyXJr9dr/E+57yw5igP/SLxABKLT/zDaib+zUXBKHmkbWoOBcRIAR1/Mxa8yzNpWjodKcBjzegcUrqXVkkOoeXR7iHGmJTMNa5ifree0cp2233PDyBS8iuvMXxKeupnTfe4jXijd777eJ/04m8/YJ9W466RlRyekZu0fYNnjGl53sPTdHmyrpAcBO/6KCTlcIuCtGKP3vHrdL4QpdanB/J4+Zw8HmIknHSP/2kJzLRDbN9hCjrh8ACWUfkYx3xjCUgEXiXe1Maol+s87cXvJWkKviI0CkbQ8QrR4ViZJbv+E0oqsnKX1JbMltomIrzYjzl3+SVUEnNzaq6plEtQZAWQJaQJBADNeKrTv/+cROI5TJORvPY+q7Sah8gdnZee3EeKj0wkJCAIxQ550DIPVKqYsF1afgEy018y8saKQmus/MunGvKrJQWSGKDC+Gc0IcWYBJHz+X+OptZpPue7cBef2PiH/2qM+6MGCeK5J292VyfmwAEG6BFS+G0X7e8aJuP6UkIEWcpxwq84Ha8uqR5IPKuVSpvsB+wQZD7ZZ1zEPun98wKEnMGzQFoqmE1IrBzHPZKodX8+RYqEcrSaaDi3HhWlEbFhCSp2wZqoSJiyriP//8SrVbSThTpGh18rgn2t0t597wAkotcLgNGEAGMUXbK+4QKvFvTeEhqD4AqmI+OtnGzhUmRUYvXGv6HsrMLmaV62jjROeaP4SqlS15NiBqQb1ohQu6KggXKsreLnleKKeECrc5Ijm07iSTSsR3sCVnr9WJ1BgQvFW4bAc6Mi70PJGo296qvCoJSaUf7CL62SMNYGsFnJWjCpAen7mH6JKXqURxsqSbChCcUOVjdlbOLmUgnSz2yHJR8r8S3iTZTFqEitaQpklGQk0o/fbgGcVQpyGOPpqU39CAT1bVysTNP4ekzYoavPKryodSS2XgwvlW2KRhM/LBntOSehtW/78lu3DhTURfeiOls56XeZBmHrAAexcoCR9DH/RzUdmbd4jhP4fob85p6ApeETVE7spTuxQVYnwFDqUU5oDGchhKuXb1pPCo8zpF2R1PbA2UFzHlwSYHK1QpjDctEX9NPdTGQThE6ZOTOhltg0BWpCldcJq+J79mIOFWeKDqdi6nZQHAG240jiSkk88+Rf6frCDTK56rUmDqLq+PCjiXfFNAOrsZZJTMy1blBRKF69SU+OJg7mgncRwVAuACSlT9CVW3OlXrTa1cTOpGihK13LtLFKRFbWOrT6Zmshk94TN63CV25Zxx5ywO/IMiIXcJRQDTvu9BIYKvEC/VdXVgAxv3gK0SlVJJQWwnr/SdXw56vVedYpQB3vMcUd0b/8zCHRjx7J1bntmlJLRFp1fZHFUeMI8FaSMqKmoHuzQOMz3O2RBzy4U0PiQb6ToILGdDa9gy1S2pop9KPCXqwOLmef2p1OSKfFBXfJsS7MteUfy7f0kkNMBK4CaFes/Kvc5fnjmAffu9fkbY8hWhEVDLdV9QFaTlQ3ltyY22ebM0qA7tzGh7MwekruM2V/IahYjhSvNYcQNeolas5Zi4WVFybqv2hw2pwk2WdjRtagau07BeJ6cYKzKZd/2S0iXfkCheYrWXrmkWJ2hHxyoqCUTxI2c3k86tDlZ/SCid+49En/uBebW4QvODbNLeLfONkGmw1WXPDMj7ocIk70BPXpqaHuvIap0aUXJm2qkljlXdSJlPkiKB5UbJUhxOE3Dao/kkTDulZnZWvZUvwIFu3imSNkTpbacrgcy1s6i3RdUWEiDUIYmno0/fS/Q/e6gtTQOqF8dnxcsdL4Hre8+0UIlK8iqnSUkQ5SHPk/XqDCTuV0lhs6gizqNxWOq1Wmpp7eawZXKXXhQNeST3dJWvI7cMvIsRtszAHunHV6/1c8kyjskHAtf9iXOJ3neWxni2z8jtonq2StWDnRHrC2DeeRmxuPgnAyhL1mfv1ewAh+TUbmP7dbafCca572WmvmPgwpJGJBE3pxsxxgoKJpqoKfn4f44YrZXQN6M0OKBcggZjlkAWHklhhDdr2Tr21KmRLwcX6dXKbVll9wIhzIEQiJ1LK8PeXHch0dT7haS+UXnU0iObVLT90o/1Gy3H55i0ZRbY7Y/3mc+x7UwxQkori3ZBMOXEvXms1DbkLSoQbRsV9eFJmiR9apu1v3RCbNIquzf0ve81+VxxrXMCj72omAllco9Z+3910fLvVvGYXXkvHhFSStvfT+mGP7X3NGiftJfv/qfmsnNFxikHO2h6r3YwXHiODAtTctaeQkvDUflg6yo0hMOYBxClt4usZTLSl7fCfPoeY9Q4kN9JjQtkpzNROLTeC/cmnBci7wWgxqPqgsEkIJGHdO1nRJUmvkBJVAo0gu68VAHjt6zLIOn0QEbBtnsVtXgAtUOUMBttm6hFAuS/PfqA350xlaOMaCTfTSyTDzk10bq7TgPR1U9iNJIIX7sFb1l3cqNmhYGrqqRj9EBWASMDIMeIKRv7FPaitiJkkknTYweaMcHuXHwL0dd3mOp9/gLJWF5oAXIMvW+cR7OSIWvsu188YFcS2WFn46RUBMUBDXiFEhd1Ve+J8m/mRQNy284EFI0ek1cd8A5u/CPfy8BmakAmCSnsj3sXi9SZIoGv8aJ/TjkwTdlO6K2QBga3Aq1o2yJI7l/dRekPrif69V4x8GLYb36TMnJGO89Ski9Q5JI47+ZNjUlZqHyRal84VzcpFz2g3FClxAcetihcskpmy24FoGx2P731mw2mCtojFl85t8obcArjJipZdWQdDFoFrqrdwXFjA6OUftm3JB38ApUSkrRvLEjuVzhSuujrSmTpxcK73iqB7ro1dn24+kQDoZDNx+damVaknu/FTNlBTRWC2i7VtohjHMn2CDhG5Bez64NieetOLwfRoEtGDIXkfZje0h1p0ew5yuVrHF5pTb4jVwNcSCwYtbDptEdy55/8YwLloTets9itdehwAyhI1yslIH7zOus/yksR3EZGVTlZalQSoYjyQmkr7l93o0goDZ8ypbMrLXVhKsA5M9mogJst7PdRUXV6sPMhG8DbT7f4KQaMstJr/l6Npx792isY5FULywCQG3JwNUYaREIUFANYJpvWfs4AeokEtsKRNJbDTVaNqv1pL0o29zDunxXGff5pxtNw7xaj1cWiWHDyFEphWQGcF2Kp0iQ8iZZpeDPVEXWbrrEps7KQQ4GovczsyTbKXEfySrUBFRVVnlkwO4SytVQtNBYLQLGi6z5vqQ4Bkd0zstslvR58BtKI8jek5LhhS+2iPVKzr5LUyqqRHKzq0wNYfeS2X32KBsjRXwbtu7+S9f8johOW2UK0i6uxbypoQVRSfF+TcqrwdEzT2OjVKReHJhPCYEhSqp2zWP7FnF3DnVKbJpQ24ZzUhw366k+oMf+tQX/sX0UiXmj5a92HTU1KBar63jPdTiTbXszOX6KkhUVznpM3zKOH60Sa/vCfLKhtqZ1KE4z46hG1myYt0aAZmT2N4JLc6WhpCVsHSXJqaqqOH9lhWrqKoXNTGY/KN5MTBePMHMPcqpecyCaaJMuohwSsWjdrgRNgITGGJJnu8HfAES/pO1R1kXdCGgSl8fDdRWsLjhM9yzMVbmRJ0yhaXaGD1U6BS9yEW1HdAWB9dxLufBSg2rvCvgBIOxaU6Hb80fStXL9NwJlQUHSTgW/Uyiw79k5TE9gGh0ftC275wZkBgNr2Qi+RYqXuZYR3+6EUAu7+FfHNUxo+DBh8US962zoNfGMDqRHCvnubZhuPAvfnL9cFovt20SBanLXBuKNXmyPaL8zjRZlJ12Z20T5jMa3yMqndKFLHjd6u6ctkLjrq5NpDECxf4GDHmmYIJnD1awekZwAcDO/LUutHRVd4jhrkC26S7358EEB6OwGQPngX8d9+nyLYVMYctCDVze5bzTLKFD78GjroeM7xZiYKH3jH455upv664pyDc7nn3jlVOW0z0pmOxy5sbbo8WYwMzeSQoF1eqlLzuAJefZdLbgBJYm+SeJK28dRzqIjAKwlnoU9IOVrSsEi2hd1qt2V36Rk0JNJEfXNeWh+RSIMs3qN2jd3aBPMla2x7T4RTzE1oErGal7tJVE1Ttp4LV5lANXeke0PcLldw+/3edcFywSs8pW+T4NZau+hqyTgIJ9p9+rXWFhIDwG55s7j0D+pGLYLUoAZHWfiaAwz5399HdIOkXW9/u37O5z93bwtxf4NY0T1cjgRwSBo3N0M2E6CEKEceyRddj9r5ESRKKrjpkVmVoBpeHVJItKU1a+9eqrj9/uzuyMNq1QTxTGuTVg5DqJGEFFtZ8HnHQ5Swc0SMcdhci7u8AQy02CGGlIRH2vEB41Swawg7wLVwHi8c375UiWHeLOrciooIyt3uiIqiQElSVaE7LqX2oxa5xgW7hnmFOfGwB4wee725b/aqOON3tomqraelkgQvJ2I3CQYKL1D3+0Ys1cgpybDcdrSvG3mITGaSoJZB9CIQDvYapA10Ad7onnfn6mwCJ8I1L1pjUieJfvrrsxtGLVnO7JEKY+kpSwZRTr2CtELNEOBGW7ZFtI5qAyVnINjuK/eqH9tv1ETmzM9WKdpEraNofyiXj2xWeu45HVW7EFeyweVHIZiaOM5VMA2QxeRxke/Oz7EYGUCQEBQfkfY46xTbJHrH/WZwAdx7vACAvHUUTHselHZNGmw/pfQHgJB5+NYlcv0Kyk9A9bx8Hdf6JjD2JwNQrcV2wKjw8lAXmVIY7Mk2LgPeF4eI3dbqwMJ6PSU3wSZxK0CG+w8OFZtLW+7YjWyKBBdHJ2wp2Zb7VqBBJEVNkqgboxL7+ucTfepP7Frsc3r59bbB647LGskNKQrVUeBrk6YylzwoU5QQ9ZxDIqM5ThHqvfMWiuDJpvHVVJy0As+d3P6kIGHnbbV3cbsk4saAfjESW1KKRr/dIMWjCjEwPV3XTZq0TtnOZxUINWnTDBmonkMYkpqhpau3El/zQ02o6c6RsElBJkNl4qFml6wMVNTYOkUT2bNLFYTzQF9L2gn9Y/PWy5+7RQB611JMiqVf8OjotNDx6zhSBapurRUpGv+UPNDl2NfjIYMmy0DISpe2WP1kjD5nNjU35ax7+VB+XDTIKmO78/kiXe/4Z6L/eiznhej+R21s/lxJs3jusYh9xy3RQMqlNjupoC1U+lycbihFef/3VqPTzfQ4Bz/el9gzWO9b2F7vXxgn70f3FXZYq52piEA4NaIcRh5klOpcVMh588yAOUt++7mULF1RH2tt+dFq8G07bYshMp5/ISx79TILbZJ5zxwPYpNop2xsJbqXqgh7CkYP2NpHZ80zwoZKxaZ4/gmb5fpNhwySAjW7ONE/ML9dq5iw+tjwLqvt5J6i0hraocY6HhJMTYUl0wUvYecVdfKm73uuFmFT2iTDU7ghYHlzVi5AUAMwhKhbNAQ0VDy19obPC0C/mTVpgkdb1qXy90+cktLTGU+ERfFEJyRNMVUcN/IhhQQ/XoC5SVWTiia41XZMHibUmRvFLtwc0mhokTwNUTckD0dMKD8algYwUpfv+6458uAKSmruEwHxgMqRhRcu6ZH20eQdPC+Cbly2dvW09HExPcnB9BRHNb94bT0zd6XGNG5DSuR8zAhZvdy5C+fB2qMIkD6N/PGVhhFGFBSUXt2ycUtGFGCo2hmouF5b9v1nOsKRtEEvzRZRBMSgCuE5RA1rUTH1kv1K6Ulx2omI9s+QBZ16MgwKeoqjHBm6SuKYybAVWE08shnP70d9isO+pOS7WZzDdNwzhqtW5K1tiqpup1UICPA6IRnspSdqvFXwoJIbGxYetduxPoY6TV848Zv9Zos0KyoxmmQ5BaAPPRVAhwSSArVy9OJipDtFUcuHLu9fMLIWDslLP6F2aoOC8TJ7uZyzx4ltPCYdjVTprrMqef6HHQhrk8KjhYFf9OxABMCYkOe68iNh0rbGrlz8doDW/yWgPWE58UkrYKivPZT5P6W6xaEeD49k7l+cyPuHul5iig1R5L8vEkbW06UNmXPXHPk0akmCpkNaHq3t+eJxCUhppJVjp0iYAUher2qiewwDG9hRacHO2vlF43K/+ywq1hz3hJ7siEAKoMTwfa3eu7Ch7lc2B6wM/iNxDtvUt8S6ejgk2IYKig30agtwLnLIIRlhS8LOZIqwZIReqFDQur4PMhL5ARK+hzmYmbPH3vGkJ6QI/b5wDTz0u2QsW+hpHE8LpAzWQm9T9diBjTpoj8pZ88JiDEeHmslH/oZcmMImRXyIj7Ub4q7lmCNZr208zZpHGp4M0fqQZwHqenBLDQDZa6lie36u1PsVL1ozTSPdiw/FBh0VkHD0F/uXFwcWN9Z75sfVg0GSQmKwEQqghe2g5lkOkw7lCbZpIgx11w18a8Nn2MD8Exxu3C1Vwk0IgvZCGOuH90l4IXxu3qo/kNoCAfPJx20TT3s5H+YPvBw2SDiwn1BSsNfWv91/Ue0T1o1RTg+K5cM2SfAsty8DHdYR3niVN/ZUs9szty2xe1bVJzxa38KL9NiczeLAItUCVAF6InYIJa5i7bNmeHn3kA30Ex1HBFIcMrHLBaiNEsqMa8wGKXKbpROGPcBP93TKTDCNuwQl8CSa175UTZAeCVUKdh1MXWxODcB05wcbi+4W+WlKPuE4ZBe3iac8bOlpH0cFpDiq/QubaHbhnWm+N45dYsVwJ/9AFAcbFpuVf5ELkhD5ntjghQ/wgL6dJ80b2NgOo4ZfKhrgQBzq2bNfu1HVevYKuPdtAvCmpTmhIzmOKkg4/Kno9bRvfmO9f3EctkK33Q3b9rq8L1Mmhmd7VeKknKy/geSZRxIJyWFO7NiHNEqbpNosbVB1xo84SOylDz2vWgbJOargxHHUQWofeDZD4r3Lude/KM0ujCU8JcDmqvWxTiTgHQTyfZsayvhWPN1/WVkYwcOuwgASNXpsf165bJe4+C3S1bV8DH8x8JiC1D78YZYNElhOCCCn60ZyZCuxdxPPoonhNa5E5iU1vyTAifFXjznaASncJcBNKvuX2gofox+6W3o8YyAtPQQ0PJKAasC4v8b8Fce0vGb8BVCm+Rn+fck4/h8P+wC5fWxzkgAAAABJRU5ErkJggg==",Rn=n(48662),Dn=n(44996),Pn=n(97905),Ln=n(73440),On=n(19969);const Un=(0,x.default)(H.Tz).withConfig({displayName:"AddressClaimModal__ContentWrapper",componentId:"sc-72f6d890-0"})`
  width: 100%;
`,_n=(0,x.default)(On.I8).withConfig({displayName:"AddressClaimModal__ModalUpper",componentId:"sc-72f6d890-1"})`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%);
`,Fn=x.default.div.withConfig({displayName:"AddressClaimModal__ConfirmOrLoadingWrapper",componentId:"sc-72f6d890-2"})`
  width: 100%;
  padding: 24px;
  position: relative;
  background: ${({activeBG:e})=>e&&"radial-gradient(76.02% 75.41% at 1.84% 0%, rgba(255, 0, 122, 0.2) 0%, rgba(33, 114, 229, 0.2) 100%), #FFFFFF;"};
`,Wn=(0,x.default)(H.lg).withConfig({displayName:"AddressClaimModal__ConfirmedIcon",componentId:"sc-72f6d890-3"})`
  padding: 60px 0;
`;function Hn({isOpen:e,onDismiss:t}){const{chainId:n}=(0,r.useWeb3React)(),[s,l]=(0,h.useState)("");const{address:d}=(0,Rn.Z)(s),[c,p]=(0,h.useState)(!1),{claimCallback:u}=(0,Dn.NH)(d),g=(0,Dn.jX)(d),m=(0,Dn.ot)(d),[f,x]=(0,h.useState)(),b=(0,Pn.ub)(f??""),j=f&&!b;function C(){p(!1),x(void 0),l(""),t()}return(0,i.jsxs)(lt.Z,{isOpen:e,onDismiss:C,maxHeight:90,children:[!c&&(0,i.jsxs)(Un,{gap:"lg",children:[(0,i.jsxs)(_n,{children:[(0,i.jsx)(On.sq,{}),(0,i.jsx)(On.RF,{}),(0,i.jsxs)(On.uO,{gap:"md",children:[(0,i.jsxs)(o.m0,{children:[(0,i.jsx)(w.Tv.DeprecatedWhite,{fontWeight:535,children:(0,i.jsx)(a.cC,{id:"OT2U3c"})}),(0,i.jsx)(w.Tw,{onClick:C,style:{zIndex:99},stroke:"white"})]}),(0,i.jsx)(w.Tv.DeprecatedWhite,{fontWeight:535,fontSize:36,children:(0,i.jsx)(a.cC,{id:"191ekK",values:{0:g?.toFixed(0,{groupSeparator:","}??"-")}})})]}),(0,i.jsx)(On.SS,{})]}),(0,i.jsxs)(H.Tz,{gap:"md",style:{padding:"1rem",paddingTop:"0"},justify:"center",children:[(0,i.jsx)(w.Tv.DeprecatedSubHeader,{fontWeight:535,children:(0,i.jsx)(a.cC,{id:"8Utjse"})}),(0,i.jsx)(Ln.Z,{value:s,onChange:function(e){l(e)}}),d&&!m&&(0,i.jsx)(w.Tv.DeprecatedError,{error:!0,children:(0,i.jsx)(a.cC,{id:"YRWR01"})}),(0,i.jsx)(Me.DF,{disabled:!(0,In.isAddress)(d??"")||!m,padding:"16px 16px",width:"100%",$borderRadius:"12px",mt:"1rem",onClick:function(){p(!0),u().then((e=>{x(e)})).catch((e=>{p(!1),console.log(e)}))},children:(0,i.jsx)(a.cC,{id:"Vv5NYl"})})]})]}),(c||j)&&(0,i.jsxs)(Fn,{activeBG:!0,children:[(0,i.jsx)(On.RF,{}),(0,i.jsx)(On.MN,{desaturate:!0}),(0,i.jsxs)(o.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(w.Tw,{onClick:C,style:{zIndex:99},stroke:"black"})]}),(0,i.jsx)(Wn,{children:j?(0,i.jsx)(w.M3,{width:"72px",src:Mn,alt:"UNI logo"}):(0,i.jsx)(w._1,{src:Sn.Z,alt:"loader",size:"90px"})}),(0,i.jsxs)(H.Tz,{gap:"100px",justify:"center",children:[(0,i.jsxs)(H.Tz,{gap:"md",justify:"center",children:[(0,i.jsx)(w.Tv.DeprecatedLargeHeader,{fontWeight:535,color:"black",children:j?(0,i.jsx)(a.cC,{id:"hRWvpI"}):(0,i.jsx)(a.cC,{id:"KvG1xW"})}),!j&&(0,i.jsx)(Tn.xv,{fontSize:36,color:"#ff007a",fontWeight:535,children:(0,i.jsx)(a.cC,{id:"191ekK",values:{0:g?.toFixed(0,{groupSeparator:","}??"-")}})}),d&&(0,i.jsx)(w.Tv.DeprecatedLargeHeader,{fontWeight:535,color:"black",children:(0,i.jsx)(a.cC,{id:"PqfYW9",values:{0:(0,ae.Xn)(d)}})})]}),j&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(w.Tv.DeprecatedSubHeader,{fontWeight:535,color:"black",children:[(0,i.jsxs)("span",{role:"img","aria-label":"party-hat",children:["\ud83c\udf89"," "]}),(0,i.jsx)(a.cC,{id:"zArj19"}),(0,i.jsx)("span",{role:"img","aria-label":"party-hat",children:"\ud83c\udf89"})]})}),c&&!f&&(0,i.jsx)(w.Tv.DeprecatedSubHeader,{color:"black",children:(0,i.jsx)(a.cC,{id:"oG26Rt"})}),c&&f&&!j&&n&&f&&(0,i.jsx)(w.dL,{href:(0,y.E)(n,f,y.r.TRANSACTION),style:{zIndex:99},children:(0,i.jsx)(a.cC,{id:"yVxaEc"})})]})]})]})}var Bn=n(22261);const qn=(0,x.default)(H.ZP).withConfig({displayName:"ConnectedAccountBlocked__ContentWrapper",componentId:"sc-be9117f-0"})`
  align-items: center;
  margin: 32px;
  text-align: center;
  font-size: 12px;
`;function Jn(e){const t=(0,x.useTheme)();return(0,i.jsx)(lt.Z,{isOpen:e.isOpen,onDismiss:Function.prototype(),children:(0,i.jsxs)(qn,{children:[(0,i.jsx)(Bn.$,{size:"22px"}),(0,i.jsx)(w.Tv.DeprecatedLargeHeader,{lineHeight:2,marginBottom:1,marginTop:1,children:(0,i.jsx)(a.cC,{id:"c2y/7S"})}),(0,i.jsx)(w.Tv.DeprecatedDarkGray,{fontSize:12,marginBottom:12,children:e.account}),(0,i.jsxs)(w.Tv.DeprecatedMain,{fontSize:14,marginBottom:12,children:[(0,i.jsx)(a.cC,{id:"hycRWp"})," ",(0,i.jsx)(w.dL,{href:"https://help.uniswap.org/en/articles/6149816",children:(0,i.jsx)(a.cC,{id:"Tz0GSZ"})}),"."]}),(0,i.jsxs)(w.Tv.DeprecatedMain,{fontSize:12,children:[(0,i.jsx)(a.cC,{id:"WpREeE"})," "]}),(0,i.jsx)(w.WD,{toCopy:"compliance@uniswap.org",fontSize:14,iconSize:16,color:t.accent1,iconPosition:"right",children:"compliance@uniswap.org"})]})})}var Qn=n(78174);const Kn=["eth","eth_arbitrum","eth_optimism","eth_polygon","weth","wbtc","matic_polygon","polygon","usdc_arbitrum","usdc_optimism","usdc_polygon","usdc","usdt"];var Vn=n(58025),Zn=n(79954),Gn=n(17487);const Yn=[Zn.qo.Ethereum,Zn.qo.Polygon,Zn.qo.Arbitrum,Zn.qo.Optimism],Xn={[Zn.qo.Ethereum]:{[Gt.WETH9[j.H.MAINNET]?.address.toLowerCase()]:"weth",[Vn.Hz.address.toLowerCase()]:"usdc",[Vn.AA.address.toLowerCase()]:"usdt",[Vn.ML.address.toLowerCase()]:"wbtc",[Vn.Al.address.toLowerCase()]:"polygon",native:"eth"},[Zn.qo.Arbitrum]:{[Vn.pj.address.toLowerCase()]:"usdc_arbitrum",native:"eth_arbitrum"},[Zn.qo.Optimism]:{[Vn.SP.address.toLowerCase()]:"usdc_optimism",native:"eth_optimism"},[Zn.qo.Polygon]:{[Vn.QF.address.toLowerCase()]:"usdc_polygon",[Vn.H8.address.toLowerCase()]:"eth_polygon",native:"matic_polygon"}};function $n(e,t){const n=(0,Gn.Qj)(t);if(!e||!n)return"eth";if(Yn.includes(n)){const t=Xn[n]?.[e.toLowerCase()];return t??"eth"}return"eth"}const ei="#1c1c1e",ti=x.default.div.withConfig({displayName:"FiatOnrampModal__Wrapper",componentId:"sc-a6842f3-0"})`
  // #1c1c1e is the background color for the darkmode moonpay iframe as of 2/16/2023
  background-color: ${({isDarkMode:e,theme:t})=>e?ei:t.white};
  border-radius: 20px;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  flex: 1 1;
  min-width: 375px;
  position: relative;
  width: 100%;
`,ni=(0,x.default)(w.Tv.BodyPrimary).withConfig({displayName:"FiatOnrampModal__ErrorText",componentId:"sc-a6842f3-1"})`
  color: ${({theme:e})=>e.critical};
  margin: auto !important;
  text-align: center;
  width: 90%;
`,ii=x.default.iframe.withConfig({displayName:"FiatOnrampModal__StyledIframe",componentId:"sc-a6842f3-2"})`
  // #1c1c1e is the background color for the darkmode moonpay iframe as of 2/16/2023
  background-color: ${({isDarkMode:e,theme:t})=>e?ei:t.white};
  border-radius: 12px;
  bottom: 0;
  left: 0;
  height: calc(100% - 16px);
  margin: 8px;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: calc(100% - 16px);
`,ai=(0,x.default)(w._1).withConfig({displayName:"FiatOnrampModal__StyledSpinner",componentId:"sc-a6842f3-3"})`
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
`;function ri(){const{account:e}=(0,r.useWeb3React)(),t=(0,x.useTheme)(),n=(0,Qn.Gv)(),o=(0,_._x)(),s=(0,_.Wt)(ie.Lk.FIAT_ONRAMP),{network:l,tokenAddress:c}=function(e){const t=e.split("/");return{network:t.length>2?t[t.length-2]:void 0,tokenAddress:t.length>2?t[t.length-1]:void 0}}(location.pathname),[p,u]=(0,h.useState)(null),[g,m]=(0,h.useState)(null),[f,y]=(0,h.useState)(!1),b=(0,d.oQ)("/swap"),j=(0,h.useCallback)((async()=>{if(e){y(!0),m(null);try{const i="https://us-central1-uniswap-mobile.cloudfunctions.net/signMoonpayLinkV2?platform=web&env=production",a=await fetch(i,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({theme:n?"dark":"light",colorCode:t.accent1,defaultCurrencyCode:$n(c,l),redirectUrl:b,walletAddresses:JSON.stringify(Kn.reduce(((t,n)=>({...t,[n]:e})),{}))})}),{url:r}=await a.json();u(r)}catch(i){console.log("there was an error fetching the link",i),m(i.toString())}finally{y(!1)}}else m("Please connect an account before making a purchase.")}),[e,n,l,b,t.accent1,c]);return(0,h.useEffect)((()=>{j()}),[j]),(0,i.jsx)(lt.Z,{isOpen:s,onDismiss:()=>o(),height:80,children:(0,i.jsx)(ti,{"data-testid":"fiat-onramp-modal",isDarkMode:n,children:g?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w.Tv.MediumHeader,{children:(0,i.jsx)(a.cC,{id:"hn5VGM"})}),(0,i.jsxs)(ni,{children:[(0,i.jsx)(a.cC,{id:"ywDBfs"}),(0,i.jsx)("br",{}),g]})]}):f?(0,i.jsx)(ai,{src:Sn.Z,alt:"loading spinner",size:"90px"}):(0,i.jsx)(ii,{src:p??"",frameBorder:"0",title:"fiat-onramp-iframe",isDarkMode:n})})})}var oi=n(50595),si=n(57878);const li=(0,x.default)(H.ZP).withConfig({displayName:"UkDisclaimerModal__Wrapper",componentId:"sc-8f9673eb-0"})`
  padding: 8px;
`,di=(0,x.default)(H.ZP).withConfig({displayName:"UkDisclaimerModal__ButtonContainer",componentId:"sc-8f9673eb-1"})`
  padding: 8px 12px 4px;
`,ci=(0,x.default)(w.oD).withConfig({displayName:"UkDisclaimerModal__CloseIconWrapper",componentId:"sc-8f9673eb-2"})`
  display: flex;
  color: ${({theme:e})=>e.neutral1};
  justify-content: flex-end;
  padding: 8px 0px 4px;

  :focus {
    text-decoration: none;
  }
`,pi=(0,x.default)(Me.UH).withConfig({displayName:"UkDisclaimerModal__StyledThemeButton",componentId:"sc-8f9673eb-3"})`
  width: 100%;
`;function hi(){const e=(0,_.Wt)(ie.Lk.UK_DISCLAIMER),t=(0,_._x)();return(0,i.jsx)(lt.Z,{isOpen:e,onDismiss:t,children:(0,i.jsxs)(li,{gap:"md",children:[(0,i.jsx)(ci,{onClick:()=>t(),children:(0,i.jsx)(oi.Z,{size:24})}),(0,i.jsxs)(H.ZP,{gap:"sm",children:[(0,i.jsx)(w.Tv.HeadlineLarge,{padding:"0px 8px",fontSize:"24px",lineHeight:"32px",children:(0,i.jsx)(a.cC,{id:"mCcDO+"})}),(0,i.jsx)(w.Tv.BodyPrimary,{padding:"8px 8px 12px",lineHeight:"24px",children:si.Fb})]}),(0,i.jsx)(di,{gap:"md",children:(0,i.jsx)(pi,{size:Me.qE.large,emphasis:Me.eI.medium,onClick:()=>t(),children:(0,i.jsx)(a.cC,{id:"1QfxQT"})})})]})})}var ui;n(46839),n(86333);!function(e){e.quickRouteChains="quick_route_chains"}(ui||(ui={}));n(67621),n(34063);x.default.div.withConfig({displayName:"DevFlagsBox__Box",componentId:"sc-16c269a1-0"})`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: ${({theme:e})=>e.surface1};
  padding: 10px;
  border: 1px solid ${({theme:e})=>e.accent1};
  z-index: 1000;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    bottom: 70px;
  }
`,x.default.div.withConfig({displayName:"DevFlagsBox__TopBar",componentId:"sc-16c269a1-1"})`
  display: flex;
  justify-content: space-between;
`;var gi=n(17790),mi=n(56878),fi=n(85038),xi=n(55867),wi=n(2994),yi=n(54212),bi=n(17669),ji=n(5658),Ci=n(1004),Ni=n(12113),zi=n(43922),ki=n(57482),Ai=(n(84137),"hwks9j7 rgw6ezda rgw6ez4ba rgw6ezbm rgw6ezps rgw6ezva rgw6ezvm rgw6ezfy rgw6ezfn"),vi="hwks9jm rgw6ezba rgw6ez4bg rgw6ezvs rgw6ezf4",Ei="hwks9jy rgw6ez4bg rgw6ezb4 rgw6ezl4";const Ii=x.default.a.withConfig({displayName:"TransactionCompleteModal__UploadLink",componentId:"sc-4f2b79f0-0"})`
  position: absolute;
  right: 32px;
  top: 32px;
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;

  ${$t.c}

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 12px;
    top: 28px;
  }
`;var Ti=()=>{const e=(0,ji.$N)(),{formatEther:t,formatNumberOrString:n}=(0,ki.Gb)(),[r,o]=(0,h.useState)(!1),s=(0,ji.pQ)((e=>e.txHash)),l=(0,ji.pQ)((e=>e.purchasedWithErc20)),d=(0,ji.pQ)((e=>e.setState)),c=(0,ji.pQ)((e=>e.state)),p=(0,h.useRef)(c),u=(0,ji.JC)((e=>e.transactionResponse)),g=(0,ji.JC)((e=>e.setTransactionResponse)),m=(0,ji.dD)(),f=(0,y.E)(1,s,y.r.TRANSACTION),x=(c===Ci.c$.Success||c===Ci.c$.Failed)&&c,w=(0,st.oO)({modal:ot.KO.NFT_TX_COMPLETE}),{nftsPurchased:b,nftsNotPurchased:j,showPurchasedModal:C,showRefundModal:N,totalPurchaseValue:z,totalRefundValue:k,totalUSDRefund:A,txFeeFiat:v}=(0,h.useMemo)((()=>(0,Ni.lb)(u,e)),[u,e]);function E(){g({}),d(Ci.c$.New)}(0,h.useEffect)((()=>{ji.pQ.subscribe((e=>p.current=e.state))}),[]);return(0,i.jsx)(i.Fragment,{children:x&&(0,i.jsxs)(xi.h,{children:[(0,i.jsx)(yi.a,{onClick:E}),(0,i.jsxs)(fi.n,{className:"hwks9j1 rgw6ez2ds rgw6ez2ja rgw6ez2rg rgw6ez2ay rgw6ez44s rgw6ez48s rgw6ez1ds rgw6ez16s rgw6ez16z rgw6ez344 rgw6ez395 rgw6ez3f4 rgw6ez3rm rgw6ez8d8",onClick:E,children:[C&&(0,i.jsx)(st.fM,{name:ot.Yz.NFT_BUY_BAG_SUCCEEDED,properties:{buy_quantity:b.length,usd_value:parseFloat((0,B.formatEther)(z))*e,transaction_hash:s,using_erc20:l,...(0,zi.H)(b),...w},shouldLogImpression:!0,children:(0,i.jsxs)(fi.n,{className:"hwks9j3 rgw6ez4qm rgw6ez82s rgw6ez44s rgw6ez444 rgw6ez1dy rgw6ez48y rgw6ez16s rgw6ez16z rgw6ez2ps rgw6ez2pt rgw6ez29a rgw6ez29b",onClick:yi.U,children:[(0,i.jsx)(tn.jS,{color:bi.gR.color.pink400,width:"36",height:"36",className:"rgw6ez48m rgw6ez35a rgw6ez36h rgw6ez3gm rgw6ez3gz"}),(0,i.jsxs)(fi.n,{display:"flex",flexWrap:"wrap",width:"full",height:"min",children:[(0,i.jsx)("h1",{className:Ai,children:(0,i.jsx)(a.cC,{id:"6Mjzfq"})}),(0,i.jsx)("p",{className:"hwks9jd rgw6ez4ba rgw6ezba rgw6ez16s rgw6ez46a rgw6ezps rgw6ezva rgw6ezvm rgw6ezgy",children:(0,i.jsx)(a.cC,{id:"utdv8e"})})]}),(0,i.jsx)(Ii,{onClick:()=>{window.open((0,Ni.fj)(b,f),"newwindow",`left=${(window.screen.width-560)/2}, top=${(window.screen.height-480)/2}, width=560, height=480`)},target:"_blank",children:(0,i.jsx)(tn.Zm,{width:32,height:32,color:bi.Z4.colors.neutral2})}),(0,i.jsx)(fi.n,{className:"hwks9jf rgw6ez44s rgw6ez444 rgw6ez16s rgw6ez8d8 rgw6ez47m",style:{maxHeight:b.length>32?m?"172px":"292px":"min-content"},children:[...b].map(((e,t)=>(0,i.jsx)("img",{className:(0,mi.default)("hwks9jh rgw6ez82g rgw6ez3xs",b.length>1&&"rgw6ezqm rgw6ezqz rgw6ezfm rgw6ezfz"),style:{maxHeight:`${(0,Ni.QP)(b.length,m)}px`,maxWidth:`${(0,Ni.QP)(b.length,m)}px`},src:e.imageUrl,alt:e.name},t)))}),b.length>32&&(0,i.jsx)(fi.n,{className:"hwks9jk"}),(0,i.jsxs)(fi.n,{display:"flex",width:"full",height:"min",flexDirection:"row",marginTop:{sm:"20",md:"20"},flexWrap:{sm:"wrap",md:"nowrap"},alignItems:"center",paddingRight:"40",paddingLeft:"40",className:"rgw6ez4ba rgw6ezba",justifyContent:"space-between",children:[(0,i.jsxs)(wi.X2,{children:[(0,i.jsxs)(fi.n,{marginRight:"16",children:[b.length," NFT",1===b.length?"":"s"]}),(0,i.jsxs)(fi.n,{children:[t({input:z.toString(),type:ki.sw.NFTToken})," ","ETH"]})]}),(0,i.jsx)("a",{href:f,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,i.jsx)(fi.n,{color:"neutral2",fontWeight:"book",children:(0,i.jsx)(a.cC,{id:"rd4eHq"})})})]})]})}),N&&(C?(0,i.jsx)(st.fM,{name:ot.Yz.NFT_BUY_BAG_REFUNDED,properties:{buy_quantity:b.length,fail_quantity:j.length,refund_amount_usd:A,transaction_hash:s,...w},shouldLogImpression:!0,children:(0,i.jsxs)(fi.n,{className:"hwks9js rgw6ez4qm rgw6ez82s rgw6ez44s rgw6ez444 rgw6ez2pm rgw6ez2pz rgw6ez2jm rgw6ez2k5 rgw6ez2em rgw6ez2ez rgw6ez1dy rgw6ez16s rgw6ez16z rgw6ez48y rgw6ezwg",onClick:yi.U,children:[(0,i.jsxs)(fi.n,{display:"inline-flex",flexWrap:"wrap",width:{sm:"full",md:"half"},paddingRight:{sm:"0",md:"32"},children:[(0,i.jsx)(tn.YG,{color:"pink"}),(0,i.jsx)("p",{className:"hwks9ju rgw6ez4ba rgw6ezda rgw6ezbg rgw6ezl4 rgw6ezva rgw6ezf4 rgw6ezkb",children:"Instant Refund"}),(0,i.jsxs)("p",{className:"hwks9jw rgw6ez4ba rgw6ezba rgw6ezps rgw6ezva rgw6ezwm rgw6ezgm rgw6ez16s",children:["Uniswap returned"," ",(0,i.jsxs)("span",{style:{fontWeight:"535"},children:[t({input:k.toString(),type:ki.sw.NFTToken})," ","ETH"]})," ","back to your wallet for unavailable items."]}),(0,i.jsxs)(fi.n,{display:"flex",flexWrap:"wrap",bottom:"24",width:"full",alignSelf:"flex-end",position:{sm:"absolute",md:"static"},children:[(0,i.jsxs)("p",{className:vi,style:{marginBottom:"2px"},children:[t({input:k.toString(),type:ki.sw.NFTToken})," ","ETH"]}),(0,i.jsx)("p",{className:Ei,children:n({input:A,type:ki.sw.FiatNFTToken})}),(0,i.jsxs)("p",{className:vi,style:{width:"100%"},children:["for ",j.length," unavailable item",1===j.length?"":"s","."]}),(0,i.jsx)(fi.n,{position:{sm:"absolute",md:"relative"},right:{sm:"0",md:"auto"},bottom:{sm:"0",md:"auto"},justifyContent:{sm:"flex-end",md:"flex-start"},textAlign:{sm:"right",md:"left"},flexShrink:"0",marginRight:{sm:"40",md:"24"},width:{sm:"half",md:"auto"},children:(0,i.jsx)("a",{href:f,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,i.jsx)(fi.n,{fontWeight:"book",marginTop:"16",color:"neutral2",className:vi,children:"View on Etherscan"})})})]})]}),(0,i.jsx)(fi.n,{className:"hwks9j10 rgw6ez1dy rgw6ez1dt rgw6ez16s rgw6ez16n rgw6ez444 rgw6ez8d8 rgw6ez46y rgw6ez44y rgw6ez2e5",children:j.map(((e,t)=>(0,i.jsx)(fi.n,{display:"flex",flexWrap:"wrap",height:"min",width:"52",children:(0,i.jsx)("img",{className:"hwks9j12 rgw6ez1ay rgw6ez13y rgw6ez828 rgw6ezqm rgw6ezfa",src:e.imageUrl,alt:e.name},t)},t)))}),(0,i.jsx)(fi.n,{className:"hwks9j14 rgw6ez16s rgw6ez16n rgw6ezps rgw6ez3q4"})]})}):(0,i.jsx)(st.fM,{name:ot.Yz.NFT_BUY_BAG_REFUNDED,properties:{buy_quantity:0,fail_quantity:j.length,refund_amount_usd:A,...w},shouldLogImpression:!0,children:(0,i.jsxs)(fi.n,{className:"hwks9j16 rgw6ez4qm rgw6ez82s rgw6ez44s rgw6ez444 rgw6ezva rgw6ez46a rgw6ezps rgw6ezoz rgw6ez2vg rgw6ez1dy",onClick:yi.U,children:[(0,i.jsx)(fi.n,{marginLeft:"auto",marginRight:"auto",display:"flex",children:c===Ci.c$.Success?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(tn.YG,{}),(0,i.jsx)("h1",{className:Ai,children:"Instant Refund"})]}):(0,i.jsx)("h1",{className:Ai,children:"Failed Transaction"})}),(0,i.jsxs)("p",{className:"hwks9j1c rgw6ez4ba rgw6ezba rgw6ezps rgw6ezva rgw6ezw4",children:[c===Ci.c$.Success&&`Selected item${1===b.length?" is":"s are"} no longer available. Uniswap instantly refunded you for this incomplete transaction. `,n({input:v,type:ki.sw.FiatNFTToken})," was used for gas in attempt to complete this transaction. For support, please visit our"," ",(0,i.jsx)("a",{href:"https://discord.gg/FCfyBSbCU5",children:"Discord"})]}),(0,i.jsxs)(fi.n,{className:"hwks9j1e rgw6ez16s",children:[j.length>=3&&(0,i.jsxs)(fi.n,{className:"rgw6ez6ss rgw6ez828 rgw6ez44s rgw6ez444 rgw6ezvs rgw6ezfa rgw6ez1ay rgw6ez80w",onClick:()=>{o(!r)},children:[!r&&(0,i.jsx)(fi.n,{paddingLeft:"20",paddingTop:"8",paddingBottom:"8",children:j.slice(0,3).map(((e,t)=>(0,i.jsx)("img",{style:{zIndex:2-t},className:"hwks9j1j rgw6ez824 rgw6ez1a4 rgw6ez134 rgw6ez48y",src:e.imageUrl,alt:e.name},t)))}),(0,i.jsxs)(fi.n,{color:r?"neutral1":"neutral2",className:"hwks9j1l rgw6ez4bg rgw6ezd4 rgw6ezba rgw6ez2og rgw6ez27y rgw6ez2ds",children:["Unavailable",(0,i.jsxs)(fi.n,{className:"hwks9j1n rgw6ezd4 rgw6ezb4 rgw6ez44s",children:[j.length," item",1===j.length?"":"s"]})]}),(0,i.jsx)(tn.g8,{className:`${!r&&"hwks9j1t"} hwks9j1s rgw6ezka rgw6ezkm rgw6ezva rgw6ez19a rgw6ez12a`})]}),(r||j.length<3)&&j.map(((e,n)=>(0,i.jsxs)(fi.n,{backgroundColor:"surface1",display:"flex",padding:"4",marginBottom:"1",borderRadius:"8",children:[(0,i.jsx)(fi.n,{className:"hwks9j1o",children:(0,i.jsx)("img",{className:"hwks9j1q rgw6ez824 rgw6ez1es rgw6ez1v4 rgw6ez17s rgw6ez1h4 rgw6ez49g",src:e.imageUrl,alt:e.name})}),(0,i.jsxs)(fi.n,{flexWrap:"wrap",marginTop:"4",children:[(0,i.jsx)(fi.n,{marginLeft:"4",width:"full",display:"flex",children:(0,i.jsxs)("p",{className:vi,style:{marginBottom:"2px"},children:[t({input:e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,type:ki.sw.NFTToken})," ","ETH"]})}),(0,i.jsx)(fi.n,{color:"neutral1",className:Ei,children:c===Ci.c$.Success?"Refunded":e.name})]})]},n)))]}),r&&(0,i.jsx)(fi.n,{className:"hwks9j1f"}),(0,i.jsxs)("p",{className:vi,style:{marginBottom:"2px"},children:[t({input:k.toString(),type:ki.sw.NFTToken})," ","ETH"]}),(0,i.jsx)("p",{className:Ei,children:n({input:A,type:ki.sw.FiatNFTToken})}),(0,i.jsx)(fi.n,{className:"hwks9j9 rgw6ez4bg rgw6ezay rgw6ez44s rgw6ez3y rgw6ez1dy rgw6ez3b4",marginLeft:"auto",marginRight:"0",children:(0,i.jsx)("a",{href:f,target:"_blank",rel:"noreferrer",children:(0,i.jsx)(fi.n,{className:"hwks9jb rgw6ez4bg rgw6ezay rgw6ezd4 rgw6ezw4",children:"View on Etherscan"})})}),(0,i.jsxs)("p",{className:vi,children:["for ",j.length," unavailable item",1===j.length?"":"s","."]}),(0,i.jsxs)(fi.n,{as:"button",border:"none",backgroundColor:"accent1",cursor:"pointer",className:"hwks9j18 rgw6ez1aa rgw6ez46a rgw6ezda rgw6ezba rgw6ez4dg rgw6ez6tm rgw6ez44s rgw6ez3y rgw6ezps rgw6ezva rgw6ezwm",type:"button",onClick:()=>E(),children:[(0,i.jsx)(tn.pf,{className:"rgw6ez7o4 rgw6ezls rgw6ezsa"}),"Return to Marketplace"]})]})}))]})]})})};function Si(){const e=(0,_.Wt)(ie.Lk.ADDRESS_CLAIM),t=(0,_.xk)(ie.Lk.ADDRESS_CLAIM),n=(0,_.Wt)(ie.Lk.BLOCKED_ACCOUNT),{account:a}=(0,r.useWeb3React)();!function(e){const t=(0,Ue.T)();(0,h.useEffect)((()=>{if(e){const n=`risk-check-${e}`,i=Date.now();try{const a=localStorage.getItem(n);if((a?parseInt(a):i-1)<Date.now()){const n=new Headers({"Content-Type":"application/json"});fetch("https://api.uniswap.org/v1/screen",{method:"POST",headers:n,body:JSON.stringify({address:e})}).then((e=>e.json())).then((e=>{e.block&&t((0,ie.i3)(ie.Lk.BLOCKED_ACCOUNT))})).catch((()=>{t((0,ie.i3)(null))}))}}finally{localStorage.setItem(n,(i+f()("1d")).toString())}}}),[e,t])}(a);const o=Boolean(n&&a);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Hn,{isOpen:e,onDismiss:t}),(0,i.jsx)(Jn,{account:a,isOpen:o}),(0,i.jsx)(gi.ZP,{}),(0,i.jsx)(Qt,{}),(0,i.jsx)(rt.Cl,{}),(0,i.jsx)(Ti,{}),(0,i.jsx)(En,{}),(0,i.jsx)(ri,{}),(0,i.jsx)(hi,{}),!1]})}function Mi(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(it,{}),(0,i.jsx)(U,{}),(0,i.jsx)(Si,{})]})}}}]);
//# sourceMappingURL=4657.45884c83.chunk.js.map