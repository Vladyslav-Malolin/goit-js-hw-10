import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i}from"./assets/vendor-BbbuE1sJ.js";document.querySelector(".form").addEventListener("submit",t=>{t.preventDefault();const s=parseInt(t.target.delay.value,10),o=t.target.state.value;new Promise((e,r)=>{setTimeout(()=>{o==="fulfilled"?e(s):r(s)},s)}).then(e=>{i.success({title:"✅ Success",message:`Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{i.error({title:"❌ Error",message:`Rejected promise in ${e}ms`,position:"topRight"})}),t.target.reset()});
//# sourceMappingURL=2-snackbar.js.map
