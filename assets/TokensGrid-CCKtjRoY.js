import{j as e}from"./jsx-runtime-DQ32znRX.js";function d({tokens:i,hasRemValue:r,hasSpaceValue:t}){return e.jsxs("table",{className:"table-standard",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Token"}),e.jsx("th",{children:"Value"}),r&&e.jsx("th",{children:"Pixels"}),t&&e.jsx("th",{children:"Space"})]})}),e.jsx("tbody",{children:Object.entries(i).map(([n,s])=>e.jsxs("tr",{children:[e.jsx("td",{children:n}),e.jsx("td",{children:s}),r&&e.jsxs("td",{children:[parseFloat(s)*16,"px"]}),t&&e.jsx("td",{children:e.jsx("div",{className:"space-width",style:{width:s}})})]},n))})]})}d.__docgenInfo={description:"",methods:[],displayName:"TokensGrid",props:{tokens:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},hasRemValue:{required:!1,tsType:{name:"boolean"},description:""},hasSpaceValue:{required:!1,tsType:{name:"boolean"},description:""}}};export{d as T};
