import{r,j as e}from"./index-C7OIASGM.js";const n=()=>{const[a]=r.useState([]),t=()=>a.reduce((s,l)=>s+l.price*l.quantity,0);return e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-2xl font-bold mb-6",children:"장바구니"}),a.length===0?e.jsx("div",{className:"text-center py-8",children:e.jsx("p",{children:"장바구니가 비어있습니다."})}):e.jsxs("div",{children:[a.map(s=>e.jsxs("div",{className:"flex items-center gap-4 bg-white p-4 rounded-lg shadow mb-4",children:[e.jsx("img",{src:s.imageUrl,alt:s.name,className:"w-24 h-24 object-cover rounded"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-semibold",children:s.name}),e.jsxs("p",{children:[s.price.toLocaleString(),"원"]}),e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsx("button",{className:"px-2 py-1 border rounded",children:"-"}),e.jsx("span",{children:s.quantity}),e.jsx("button",{className:"px-2 py-1 border rounded",children:"+"})]})]})]},s.id)),e.jsx("div",{className:"bg-white p-4 rounded-lg shadow mt-4",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-semibold",children:"총 금액:"}),e.jsxs("span",{className:"font-bold text-xl",children:[t().toLocaleString(),"원"]})]})})]})]})};export{n as default};