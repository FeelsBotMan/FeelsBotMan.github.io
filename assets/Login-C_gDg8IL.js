import{r as n,j as s,L as l}from"./index-BR1Csf5A.js";import{M as C,L as d}from"./mail-C307XXoT.js";import{A as m}from"./arrow-right-BnktX18m.js";var j=function(){var e=n.useState(""),a=e[0],t=e[1],i=n.useState(""),r=i[0],o=i[1],c=function(u){u.preventDefault(),console.log("Login attempt:",{email:a,password:r})};return s.jsx("div",{className:"login-container",children:s.jsxs("div",{className:"login-card",children:[s.jsxs("div",{className:"login-header",children:[s.jsx("h1",{children:"Welcome Back"}),s.jsx("p",{children:"키보드 스토어에 오신 것을 환영합니다"})]}),s.jsxs("form",{onSubmit:c,className:"login-form",children:[s.jsx("div",{className:"form-group",children:s.jsxs("div",{className:"input-wrapper",children:[s.jsx(C,{className:"input-icon"}),s.jsx("input",{type:"email",value:a,onChange:function(u){return t(u.target.value)},placeholder:"이메일",required:!0,className:"form-input"})]})}),s.jsx("div",{className:"form-group",children:s.jsxs("div",{className:"input-wrapper",children:[s.jsx(d,{className:"input-icon"}),s.jsx("input",{type:"password",value:r,onChange:function(u){return o(u.target.value)},placeholder:"비밀번호",required:!0,className:"form-input"})]})}),s.jsxs("div",{className:"form-options",children:[s.jsxs("label",{className:"remember-me",children:[s.jsx("input",{type:"checkbox"}),s.jsx("span",{children:"자동 로그인"})]}),s.jsx(l,{to:"/forgot-password",className:"forgot-password",children:"비밀번호 찾기"})]}),s.jsxs("button",{type:"submit",className:"login-button",children:["로그인",s.jsx(m,{size:16})]}),s.jsxs("div",{className:"social-login",children:[s.jsx("span",{className:"divider",children:"또는"}),s.jsxs("div",{className:"social-buttons",children:[s.jsx("button",{type:"button",className:"social-button kakao",children:"카카오로 시작하기"}),s.jsx("button",{type:"button",className:"social-button naver",children:"네이버로 시작하기"})]})]}),s.jsxs("div",{className:"signup-prompt",children:[s.jsx("span",{children:"아직 회원이 아니신가요?"}),s.jsx(l,{to:"/signup",className:"signup-link",children:"회원가입"})]})]})]})})};export{j as default};
