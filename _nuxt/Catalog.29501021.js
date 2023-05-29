import{o,m as V,j as J,u as G,g as fe,l as L,E as be,y as me,w as Pe,k as ge,H as M,t as j,n as re,f as q,a as Y,p as ue,b as R,P as O,N as F,c as B,d as k,T as Z,_ as ye}from"./use-event-listener.aa0642d7.js";import he from"./Icon.35cdb420.js";import{_ as Se}from"./default.882c024d.js";import{r as _,s as Q,Z as z,f as A,i as $,$ as X,Y as se,v as H,F as ee,a2 as we,a0 as te,o as le,c as _e,z as K,w as T,u as W,A as oe,t as ne,a4 as $e,e as N,b as Ee,x as xe}from"./entry.d67a00ac.js";import"./config.4048b18c.js";import"./nuxt-link.765996b4.js";function ae(a,s){if(a)return a;let i=s??"button";if(typeof i=="string"&&i.toLowerCase()==="button")return"button"}function Ie(a,s){let i=_(ae(a.value.type,a.value.as));return Q(()=>{i.value=ae(a.value.type,a.value.as)}),z(()=>{var y;i.value||o(s)&&o(s)instanceof HTMLButtonElement&&!((y=o(s))!=null&&y.hasAttribute("type"))&&(i.value="button")}),i}var Fe=(a=>(a[a.Open=0]="Open",a[a.Closed=1]="Closed",a))(Fe||{});let ie=Symbol("PopoverContext");function U(a){let s=te(ie,null);if(s===null){let i=new Error(`<${a} /> is missing a parent <${de.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,U),i}return s}let pe=Symbol("PopoverGroupContext");function ve(){return te(pe,null)}let ce=Symbol("PopoverPanelContext");function ke(){return te(ce,null)}let de=A({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(a,{slots:s,attrs:i,expose:y}){var l;let e=_(null);y({el:e,$el:e});let c=_(1),p=_(null),h=_(null),S=_(null),f=_(null),b=$(()=>V(e)),g=$(()=>{var t,u;if(!o(p)||!o(f))return!1;for(let D of document.querySelectorAll("body > *"))if(Number(D==null?void 0:D.contains(o(p)))^Number(D==null?void 0:D.contains(o(f))))return!0;let r=J(),m=r.indexOf(o(p)),P=(m+r.length-1)%r.length,I=(m+1)%r.length,E=r[P],C=r[I];return!((t=o(f))!=null&&t.contains(E))&&!((u=o(f))!=null&&u.contains(C))}),d={popoverState:c,buttonId:_(null),panelId:_(null),panel:f,button:p,isPortalled:g,beforePanelSentinel:h,afterPanelSentinel:S,togglePopover(){c.value=G(c.value,{[0]:1,[1]:0})},closePopover(){c.value!==1&&(c.value=1)},close(t){d.closePopover();let u=(()=>t?t instanceof HTMLElement?t:t.value instanceof HTMLElement?o(t):o(d.button):o(d.button))();u==null||u.focus()}};X(ie,d),fe($(()=>G(c.value,{[0]:L.Open,[1]:L.Closed})));let x={buttonId:d.buttonId,panelId:d.panelId,close(){d.closePopover()}},w=ve(),v=w==null?void 0:w.registerPopover;function n(){var t,u,r,m;return(m=w==null?void 0:w.isFocusWithinPopoverGroup())!=null?m:((t=b.value)==null?void 0:t.activeElement)&&(((u=o(p))==null?void 0:u.contains(b.value.activeElement))||((r=o(f))==null?void 0:r.contains(b.value.activeElement)))}return z(()=>v==null?void 0:v(x)),be((l=b.value)==null?void 0:l.defaultView,"focus",t=>{var u,r;c.value===0&&(n()||p&&f&&t.target!==window&&((u=o(d.beforePanelSentinel))!=null&&u.contains(t.target)||(r=o(d.afterPanelSentinel))!=null&&r.contains(t.target)||d.closePopover()))},!0),me([p,f],(t,u)=>{var r;d.closePopover(),Pe(u,ge.Loose)||(t.preventDefault(),(r=o(p))==null||r.focus())},$(()=>c.value===0)),()=>{let t={open:c.value===0,close:d.close};return M({theirProps:a,ourProps:{ref:e},slot:t,slots:s,attrs:i,name:"Popover"})}}}),Be=A({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${j()}`}},inheritAttrs:!1,setup(a,{attrs:s,slots:i,expose:y}){let l=U("PopoverButton"),e=$(()=>V(l.button));y({el:l.button,$el:l.button}),Q(()=>{l.buttonId.value=a.id}),se(()=>{l.buttonId.value=null});let c=ve(),p=c==null?void 0:c.closeOthers,h=ke(),S=$(()=>h===null?!1:h.value===l.panelId.value),f=_(null),b=`headlessui-focus-sentinel-${j()}`;S.value||z(()=>{l.button.value=f.value});let g=Ie($(()=>({as:a.as,type:s.type})),f);function d(n){var t,u,r,m,P;if(S.value){if(l.popoverState.value===1)return;switch(n.key){case B.Space:case B.Enter:n.preventDefault(),(u=(t=n.target).click)==null||u.call(t),l.closePopover(),(r=o(l.button))==null||r.focus();break}}else switch(n.key){case B.Space:case B.Enter:n.preventDefault(),n.stopPropagation(),l.popoverState.value===1&&(p==null||p(l.buttonId.value)),l.togglePopover();break;case B.Escape:if(l.popoverState.value!==0)return p==null?void 0:p(l.buttonId.value);if(!o(l.button)||(m=e.value)!=null&&m.activeElement&&!((P=o(l.button))!=null&&P.contains(e.value.activeElement)))return;n.preventDefault(),n.stopPropagation(),l.closePopover();break}}function x(n){S.value||n.key===B.Space&&n.preventDefault()}function w(n){var t,u;a.disabled||(S.value?(l.closePopover(),(t=o(l.button))==null||t.focus()):(n.preventDefault(),n.stopPropagation(),l.popoverState.value===1&&(p==null||p(l.buttonId.value)),l.togglePopover(),(u=o(l.button))==null||u.focus()))}function v(n){n.preventDefault(),n.stopPropagation()}return()=>{let n=l.popoverState.value===0,t={open:n},{id:u,...r}=a,m=S.value?{ref:f,type:g.value,onKeydown:d,onClick:w}:{ref:f,id:u,type:g.value,"aria-expanded":a.disabled?void 0:l.popoverState.value===0,"aria-controls":o(l.panel)?l.panelId.value:void 0,disabled:a.disabled?!0:void 0,onKeydown:d,onKeyup:x,onClick:w,onMousedown:v},P=re();function I(){let E=o(l.panel);if(!E)return;function C(){G(P.value,{[k.Forwards]:()=>O(E,F.First),[k.Backwards]:()=>O(E,F.Last)})===Z.Error&&O(J().filter(D=>D.dataset.headlessuiFocusGuard!=="true"),G(P.value,{[k.Forwards]:F.Next,[k.Backwards]:F.Previous}),{relativeTo:o(l.button)})}C()}return H(ee,[M({ourProps:m,theirProps:{...s,...r},slot:t,attrs:s,slots:i,name:"PopoverButton"}),n&&!S.value&&l.isPortalled.value&&H(q,{id:b,features:Y.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:I})])}}});A({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(a,{attrs:s,slots:i}){let y=U("PopoverOverlay"),l=`headlessui-popover-overlay-${j()}`,e=ue(),c=$(()=>e!==null?(e.value&L.Open)===L.Open:y.popoverState.value===0);function p(){y.closePopover()}return()=>{let h={open:y.popoverState.value===0};return M({ourProps:{id:l,"aria-hidden":!0,onClick:p},theirProps:a,slot:h,attrs:s,slots:i,features:R.RenderStrategy|R.Static,visible:c.value,name:"PopoverOverlay"})}}});let Oe=A({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${j()}`}},inheritAttrs:!1,setup(a,{attrs:s,slots:i,expose:y}){let{focus:l}=a,e=U("PopoverPanel"),c=$(()=>V(e.panel)),p=`headlessui-focus-sentinel-before-${j()}`,h=`headlessui-focus-sentinel-after-${j()}`;y({el:e.panel,$el:e.panel}),Q(()=>{e.panelId.value=a.id}),se(()=>{e.panelId.value=null}),X(ce,e.panelId),z(()=>{var v,n;if(!l||e.popoverState.value!==0||!e.panel)return;let t=(v=c.value)==null?void 0:v.activeElement;(n=o(e.panel))!=null&&n.contains(t)||O(o(e.panel),F.First)});let S=ue(),f=$(()=>S!==null?(S.value&L.Open)===L.Open:e.popoverState.value===0);function b(v){var n,t;switch(v.key){case B.Escape:if(e.popoverState.value!==0||!o(e.panel)||c.value&&!((n=o(e.panel))!=null&&n.contains(c.value.activeElement)))return;v.preventDefault(),v.stopPropagation(),e.closePopover(),(t=o(e.button))==null||t.focus();break}}function g(v){var n,t,u,r,m;let P=v.relatedTarget;P&&o(e.panel)&&((n=o(e.panel))!=null&&n.contains(P)||(e.closePopover(),((u=(t=o(e.beforePanelSentinel))==null?void 0:t.contains)!=null&&u.call(t,P)||(m=(r=o(e.afterPanelSentinel))==null?void 0:r.contains)!=null&&m.call(r,P))&&P.focus({preventScroll:!0})))}let d=re();function x(){let v=o(e.panel);if(!v)return;function n(){G(d.value,{[k.Forwards]:()=>{var t;O(v,F.First)===Z.Error&&((t=o(e.afterPanelSentinel))==null||t.focus())},[k.Backwards]:()=>{var t;(t=o(e.button))==null||t.focus({preventScroll:!0})}})}n()}function w(){let v=o(e.panel);if(!v)return;function n(){G(d.value,{[k.Forwards]:()=>{let t=o(e.button),u=o(e.panel);if(!t)return;let r=J(),m=r.indexOf(t),P=r.slice(0,m+1),I=[...r.slice(m+1),...P];for(let E of I.slice())if(E.dataset.headlessuiFocusGuard==="true"||u!=null&&u.contains(E)){let C=I.indexOf(E);C!==-1&&I.splice(C,1)}O(I,F.First,{sorted:!1})},[k.Backwards]:()=>{var t;O(v,F.Previous)===Z.Error&&((t=o(e.button))==null||t.focus())}})}n()}return()=>{let v={open:e.popoverState.value===0,close:e.close},{id:n,focus:t,...u}=a,r={ref:e.panel,id:n,onKeydown:b,onFocusout:l&&e.popoverState.value===0?g:void 0,tabIndex:-1};return M({ourProps:r,theirProps:{...s,...u},attrs:s,slot:v,slots:{...i,default:(...m)=>{var P;return[H(ee,[f.value&&e.isPortalled.value&&H(q,{id:p,ref:e.beforePanelSentinel,features:Y.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:x}),(P=i.default)==null?void 0:P.call(i,...m),f.value&&e.isPortalled.value&&H(q,{id:h,ref:e.afterPanelSentinel,features:Y.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:w})])]}},features:R.RenderStrategy|R.Static,visible:f.value,name:"PopoverPanel"})}}});A({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(a,{attrs:s,slots:i,expose:y}){let l=_(null),e=we([]),c=$(()=>V(l));y({el:l,$el:l});function p(b){let g=e.value.indexOf(b);g!==-1&&e.value.splice(g,1)}function h(b){return e.value.push(b),()=>{p(b)}}function S(){var b;let g=c.value;if(!g)return!1;let d=g.activeElement;return(b=o(l))!=null&&b.contains(d)?!0:e.value.some(x=>{var w,v;return((w=g.getElementById(x.buttonId.value))==null?void 0:w.contains(d))||((v=g.getElementById(x.panelId.value))==null?void 0:v.contains(d))})}function f(b){for(let g of e.value)g.buttonId.value!==b&&g.close()}return X(pe,{registerPopover:h,unregisterPopover:p,isFocusWithinPopoverGroup:S,closeOthers:f}),()=>M({ourProps:{ref:l},theirProps:a,slot:{},attrs:s,slots:i,name:"PopoverGroup"})}});const Ce={class:"w-full flex-auto overflow-hidden bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"},De={class:"p-4"},Te={class:"font-semibold text-gray-900 hover:text-yellow-300 ease-in-out duration-300 cursor-pointer"},Ne=N("span",{class:"absolute inset-0"},null,-1),Ke=A({__name:"Catalog",setup(a){const s=[{name:"Beard"},{name:"Hair"},{name:"Cutting"},{name:"Shaving"},{name:"Styling"},{name:"Equipment"},{name:"Accessories"}];return(i,y)=>{const l=ye,e=he,c=Se;return le(),_e(W(de),null,{default:K(({open:p})=>[T(W(Be),{class:"relative inline-flex leading-6 text-white items-center w-[190px] h-9 text-xs font-semibold uppercase transition duration-150 ease-in-out bg-yellow-400 hover:bg-yellow-300 focus:outline-none pl-8"},{default:K(()=>[T(l,{"is-menu-open":p,class:"absolute scale-75 left-2"},null,8,["is-menu-open"]),oe(" "+ne(i.$t("header.catalog"))+" ",1),T(e,{name:"CaretIcon",size:"12",class:"ml-2 rotate-90"}),T(c)]),_:2},1024),T($e,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 -translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:K(()=>[T(W(Oe),{class:"absolute -z-10 left-0 top-0 flex w-full pt-20"},{default:K(()=>[N("div",Ce,[N("div",De,[(le(),Ee(ee,null,xe(s,h=>N("div",{key:h.name,class:"group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 ease-in-out duration-300"},[N("div",null,[N("span",Te,[oe(ne(h.name)+" ",1),Ne])])])),64))])])]),_:1})]),_:1})]),_:1})}}});export{Ke as default};
