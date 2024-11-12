import{c as t,r,j as s,L as i}from"./index-VN6b7JN_.js";import{A as l}from"./arrow-right-CSd0N9Fw.js";/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=t("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=t("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=t("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);var m=function(){var e=r.useState([])[0],u=function(){return e.reduce(function(a,c){return a+c.price*c.quantity},0)},n=function(a,c){return(a*c).toLocaleString()+"원"};return s.jsxs("div",{className:"cart-container",children:[s.jsxs("div",{className:"cart-header",children:[s.jsx("h1",{children:"장바구니"}),s.jsx("p",{className:"cart-count",children:e.length>0?"".concat(e.length,"개의 상품"):""})]}),e.length===0?s.jsx("div",{className:"empty-cart",children:s.jsxs("div",{className:"empty-cart-content",children:[s.jsx("h2",{children:"장바구니가 비어있습니다"}),s.jsx("p",{children:"원하는 상품을 장바구니에 담아보세요"}),s.jsxs(i,{to:"/products",className:"shop-link",children:["쇼핑 계속하기",s.jsx(l,{size:16})]})]})}):s.jsxs("div",{className:"cart-content",children:[s.jsx("div",{className:"cart-items",children:e.map(function(a){return s.jsxs("div",{className:"cart-item",children:[s.jsx("div",{className:"item-image",children:s.jsx("img",{src:a.imageUrl,alt:a.name})}),s.jsxs("div",{className:"item-details",children:[s.jsxs("div",{className:"item-info",children:[s.jsx("h3",{children:a.name}),s.jsxs("p",{className:"item-price",children:[a.price.toLocaleString(),"원"]})]}),s.jsxs("div",{className:"item-actions",children:[s.jsxs("div",{className:"quantity-controls",children:[s.jsx("button",{className:"quantity-btn",children:s.jsx(d,{size:16})}),s.jsx("span",{className:"quantity",children:a.quantity}),s.jsx("button",{className:"quantity-btn",children:s.jsx(h,{size:16})})]}),s.jsx("p",{className:"subtotal",children:n(a.price,a.quantity)}),s.jsx("button",{className:"remove-btn",children:s.jsx(C,{size:16})})]})]})]},a.id)})}),s.jsxs("div",{className:"cart-summary",children:[s.jsxs("div",{className:"summary-row",children:[s.jsx("span",{children:"상품 금액"}),s.jsxs("span",{children:[u().toLocaleString(),"원"]})]}),s.jsxs("div",{className:"summary-row",children:[s.jsx("span",{children:"배송비"}),s.jsx("span",{children:"무료"})]}),s.jsxs("div",{className:"summary-total",children:[s.jsx("span",{children:"총 결제금액"}),s.jsxs("span",{children:[u().toLocaleString(),"원"]})]}),s.jsx("button",{className:"checkout-btn",children:"결제하기"})]})]})]})};export{m as default};
