"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9526],{9526:function(a,b,c){c.d(b,{Z:function(){return F}});var d=c(1048),e=c(32793),f=c(67294),g=c(90512),h=c(70917),i=c(94780),j=c(56535),k=c(7610);function l(a,b=0,c=1){return(0,k.Z)(a,b,c)}function m(a){if(a.type)return a;if("#"===a.charAt(0))return m(function(a){a=a.slice(1);let b=RegExp(`.{1,${a.length>=6?2:1}}`,"g"),c=a.match(b);return c&&1===c[0].length&&(c=c.map(a=>a+a)),c?`rgb${4===c.length?"a":""}(${c.map((a,b)=>b<3?parseInt(a,16):Math.round(parseInt(a,16)/255*1e3)/1e3).join(", ")})`:""}(a));let b=a.indexOf("("),c=a.substring(0,b);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(c))throw Error((0,j.Z)(9,a));let d=a.substring(b+1,a.length-1),e;if("color"===c){if(e=(d=d.split(" ")).shift(),4===d.length&&"/"===d[3].charAt(0)&&(d[3]=d[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(e))throw Error((0,j.Z)(10,e))}else d=d.split(",");return d=d.map(a=>parseFloat(a)),{type:c,values:d,colorSpace:e}}function n(a){let{type:b,colorSpace:c}=a,{values:d}=a;return -1!==b.indexOf("rgb")?d=d.map((a,b)=>b<3?parseInt(a,10):a):-1!==b.indexOf("hsl")&&(d[1]=`${d[1]}%`,d[2]=`${d[2]}%`),d=-1!==b.indexOf("color")?`${c} ${d.join(" ")}`:`${d.join(", ")}`,`${b}(${d})`}var o=c(90948),p=c(28628),q=c(1588),r=c(34867);function s(a){return(0,r.ZP)("MuiSkeleton",a)}(0,q.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var t=c(85893);let u=["animation","className","component","height","style","variant","width"],v=a=>a,w,x,y,z,A=a=>{let{classes:b,variant:c,animation:d,hasChildren:e,width:f,height:g}=a;return(0,i.Z)({root:["root",c,d,e&&"withChildren",e&&!f&&"fitContent",e&&!g&&"heightAuto"]},s,b)},B=(0,h.keyframes)(w||(w=v`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),C=(0,h.keyframes)(x||(x=v`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),D=(0,o.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.root,b[c.variant],!1!==c.animation&&b[c.animation],c.hasChildren&&b.withChildren,c.hasChildren&&!c.width&&b.fitContent,c.hasChildren&&!c.height&&b.heightAuto]}})(({theme:a,ownerState:b})=>{var c,d,f,g;let h=(c=a.shape.borderRadius,String(c).match(/[\d.\-+]*\s*(.*)/)[1]||""||"px"),i=(d=a.shape.borderRadius,parseFloat(d));return(0,e.Z)({display:"block",backgroundColor:a.vars?a.vars.palette.Skeleton.bg:(f=a.palette.text.primary,g="light"===a.palette.mode?.11:.13,f=m(f),g=l(g),("rgb"===f.type||"hsl"===f.type)&&(f.type+="a"),"color"===f.type?f.values[3]=`/${g}`:f.values[3]=g,n(f)),height:"1.2em"},"text"===b.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${h}/${Math.round(i/.6*10)/10}${h}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===b.variant&&{borderRadius:"50%"},"rounded"===b.variant&&{borderRadius:(a.vars||a).shape.borderRadius},b.hasChildren&&{"& > *":{visibility:"hidden"}},b.hasChildren&&!b.width&&{maxWidth:"fit-content"},b.hasChildren&&!b.height&&{height:"auto"})},({ownerState:a})=>"pulse"===a.animation&&(0,h.css)(y||(y=v`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),B),({ownerState:a,theme:b})=>"wave"===a.animation&&(0,h.css)(z||(z=v`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),C,(b.vars||b).palette.action.hover)),E=f.forwardRef(function(a,b){let c=(0,p.i)({props:a,name:"MuiSkeleton"}),{animation:f="pulse",className:h,component:i="span",height:j,style:k,variant:l="text",width:m}=c,n=(0,d.Z)(c,u),o=(0,e.Z)({},c,{animation:f,component:i,variant:l,hasChildren:Boolean(n.children)}),q=A(o);return(0,t.jsx)(D,(0,e.Z)({as:i,ref:b,className:(0,g.Z)(q.root,h),ownerState:o},n,{style:(0,e.Z)({width:m,height:j},k)}))});var F=E}}])