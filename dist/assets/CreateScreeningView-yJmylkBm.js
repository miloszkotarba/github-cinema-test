import{_ as U,r as d,o as B,a as n,c as l,g as k,b as o,l as E,m as c,v as y,C as D,F as p,e as M,t as v,p as L,f as O,B as F,w as N}from"./index-elwunUWg.js";import{a as _}from"./axios-QLjAsgXu.js";import{h as g}from"./ErrorHandler-0YoZ9Z16.js";import{_ as T,a as f}from"./AlertDisplay-ZM8wSD_9.js";import{_ as q}from"./MainPage-GSCsHXFk.js";/* empty css                                                     */import"./logo-djfQEiQd.js";const r=i=>(L("data-v-bee4b0d7"),i=i(),O(),i),z={class:"admin-container"},W={class:"indent"},j=r(()=>o("header",null,"Dodawanie seansu",-1)),H={class:"field"},P=r(()=>o("label",{for:"datetime"},"data seansu",-1)),Y=["min"],G={class:"field"},J=r(()=>o("label",{for:"movie"},"Wybierz film",-1)),K=["value"],Q={class:"field"},X=r(()=>o("label",{for:"room"},"Wybierz salę",-1)),Z=["value"],ee={class:"field"},te=r(()=>o("label",{for:"advertisementsDuration"},"długość reklam (min)",-1)),oe=r(()=>o("button",{type:"submit",class:"submit-btn"},"Dodaj",-1)),se={__name:"CreateScreening",setup(i){const h="https://api.kino-screenix.pl/api/v1/screenings",S="https://api.kino-screenix.pl/api/v1/movies",x="https://api.kino-screenix.pl/api/v1/rooms",u=()=>{const e=new Date,a=e.getFullYear(),t=String(e.getMonth()+1).padStart(2,"0"),$=String(e.getDate()).padStart(2,"0"),C=String(e.getHours()).padStart(2,"0"),I=String(e.getMinutes()).padStart(2,"0");return`${a}-${t}-${$}T${C}:${I}`},m=d(null),s=d({date:u(),advertisementsDuration:"",movie:null,room:null}),b=d([]),w=d([]),A=async()=>{try{if(s.value.advertisementsDuration<0)return f.addAlert("Nieprawidłowa długość reklam","error");const e=s.value.movie,a=s.value.room;s.value.movie={_id:e},s.value.room={_id:a};const t=await _.post(h,s.value);s.value={date:u(),advertisementsDuration:"",movie:null,room:null},f.addAlert("Dodano seans.","success","/admin/seanse")}catch(e){f.addAlert(e.response.data.error,"error"),g(e,m)}},R=async()=>{try{const e=await _.get(S);b.value=e.data.movies}catch(e){g(e,m)}},V=async()=>{try{const e=await _.get(x);w.value=e.data.rooms}catch(e){g(e,m)}};return B(async()=>{await V(),await R()}),(e,a)=>(n(),l(p,null,[k(T),o("div",null,[o("div",z,[o("div",W,[j,o("form",{onSubmit:E(A,["prevent"])},[o("div",H,[P,c(o("input",{type:"datetime-local","onUpdate:modelValue":a[0]||(a[0]=t=>s.value.date=t),min:u(),required:""},null,8,Y),[[y,s.value.date]])]),o("div",G,[J,c(o("select",{"onUpdate:modelValue":a[1]||(a[1]=t=>s.value.movie=t)},[(n(!0),l(p,null,M(b.value,t=>(n(),l("option",{key:t._id,value:t._id},v(t.title),9,K))),128))],512),[[D,s.value.movie]])]),o("div",Q,[X,c(o("select",{"onUpdate:modelValue":a[2]||(a[2]=t=>s.value.room=t)},[(n(!0),l(p,null,M(w.value,t=>(n(),l("option",{key:t._id,value:t._id},v(t.name)+" ["+v(t.numberOfSeats)+"] ",9,Z))),128))],512),[[D,s.value.room]])]),o("div",ee,[te,c(o("input",{type:"number","onUpdate:modelValue":a[3]||(a[3]=t=>s.value.advertisementsDuration=t),required:""},null,512),[[y,s.value.advertisementsDuration]])]),oe],32)])])])],64))}},ae=U(se,[["__scopeId","data-v-bee4b0d7"]]),pe={__name:"CreateScreeningView",setup(i){return(h,S)=>(n(),F(q,null,{PageContent:N(()=>[k(ae)]),_:1}))}};export{pe as default};