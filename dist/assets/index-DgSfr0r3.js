var ie=Object.defineProperty;var Q=e=>{throw TypeError(e)};var se=(e,t,n)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _=(e,t,n)=>se(e,typeof t!="symbol"?t+"":t,n),z=(e,t,n)=>t.has(e)||Q("Cannot "+n);var H=(e,t,n)=>(z(e,t,"read from private field"),n?n.call(e):t.get(e)),x=(e,t,n)=>t.has(e)?Q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);var Y=(e,t,n)=>(z(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const V="https://forkify-api.jonas.io/api/v2/recipes/",re=10,oe=10,j="6077ccb2-6ee6-4e4d-b959-e6527d8d0d7a",ae=1.5,ce=function(e){return new Promise(function(t,n){setTimeout(function(){n(new Error(`Request took too long! Timeout after ${e} second`))},e*1e3)})},W=async function(e,t=void 0){try{const n=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([n,ce(re)]),r=await i.json();if(!i.ok)throw new Error(`${r.message} (${i.status})`);return r}catch(n){throw n}},l={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:oe},bookmarks:[]},K=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},de=async function(e){try{const t=await W(`${V}${e}?key=${j}`);l.recipe=K(t),l.bookmarks.some(n=>n.id===e)?l.recipe.bookmarked=!0:l.recipe.bookmarked=!1}catch(t){throw t}},le=async function(e){try{l.search.query=e;const t=await W(`${V}?search=${e}&key=${j}`);l.search.results=t.data.recipes.map(n=>({id:n.id,title:n.title,publisher:n.publisher,image:n.image_url,...n.key&&{key:n.key}})),l.search.page=1}catch(t){throw t}},D=function(e=l.search.page){l.search.page=e;const t=(e-1)*l.search.resultsPerPage,n=e*l.search.resultsPerPage;return l.search.results.slice(t,n)},ue=function(e){l.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/l.recipe.servings}),l.recipe.servings=e},X=function(){localStorage.setItem("bookmarks",JSON.stringify(l.bookmarks))},G=function(e){l.bookmarks.push(e),e.id===l.recipe.id&&(l.recipe.bookmarked=!0),X()},he=function(e){const t=l.bookmarks.findIndex(n=>n.id===e);l.bookmarks.splice(t,1),e===l.recipe.id&&(l.recipe.bookmarked=!1),X()},fe=function(){const e=localStorage.getItem("bookmarks");e&&(l.bookmarks=JSON.parse(e))};fe();const ge=async function(e){try{const t=Object.entries(e).filter(r=>r[0].startsWith("ingredient")&&r[1]!=="").map(r=>{const s=r[1].replaceAll(" ","").split(",").map(h=>h.trim());if(s.length!==3)throw new Error("Wrong ingredient format!! Please use the correct format :)");const[c,f,p]=s;return{quantity:c?+c:null,unit:f,description:p}}),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},i=await W(`${V}?key=${j}`,n);l.recipe=K(i),G(l.recipe)}catch(t){throw t}};typeof BigInt>"u"&&(BigInt=function(e){if(isNaN(e))throw new Error("");return e});const a=BigInt(0),d=BigInt(1),L=BigInt(2),R=BigInt(5),k=BigInt(10),pe=2e3,o={s:d,n:a,d};function y(e,t){try{e=BigInt(e)}catch{throw $()}return e*t}function w(e){return typeof e=="bigint"?e:Math.floor(e)}function g(e,t){if(t===a)throw F();const n=Object.create(C.prototype);n.s=e<a?-d:d,e=e<a?-e:e;const i=S(e,t);return n.n=e/i,n.d=t/i,n}function I(e){const t={};let n=e,i=L,r=R-d;for(;r<=n;){for(;n%i===a;)n/=i,t[i]=(t[i]||a)+d;r+=d+L*i++}return n!==e?n>1&&(t[n]=(t[n]||a)+d):t[e]=(t[e]||a)+d,t}const m=function(e,t){let n=a,i=d,r=d;if(e!=null)if(t!==void 0){if(typeof e=="bigint")n=e;else{if(isNaN(e))throw $();if(e%1!==0)throw Z();n=BigInt(e)}if(typeof t=="bigint")i=t;else{if(isNaN(t))throw $();if(t%1!==0)throw Z();i=BigInt(t)}r=n*i}else if(typeof e=="object"){if("d"in e&&"n"in e)n=BigInt(e.n),i=BigInt(e.d),"s"in e&&(n*=BigInt(e.s));else if(0 in e)n=BigInt(e[0]),1 in e&&(i=BigInt(e[1]));else if(typeof e=="bigint")n=e;else throw $();r=n*i}else if(typeof e=="number"){if(isNaN(e))throw $();if(e<0&&(r=-d,e=-e),e%1===0)n=BigInt(e);else if(e>0){let s=1,c=0,f=1,p=1,h=1,b=1e7;for(e>=1&&(s=10**Math.floor(1+Math.log10(e)),e/=s);f<=b&&h<=b;){let u=(c+p)/(f+h);if(e===u){f+h<=b?(n=c+p,i=f+h):h>f?(n=p,i=h):(n=c,i=f);break}else e>u?(c+=p,f+=h):(p+=c,h+=f),f>b?(n=p,i=h):(n=c,i=f)}n=BigInt(n)*BigInt(s),i=BigInt(i)}}else if(typeof e=="string"){let s=0,c=a,f=a,p=a,h=d,b=d,u=e.replace(/_/g,"").match(/\d+|./g);if(u===null)throw $();if(u[s]==="-"?(r=-d,s++):u[s]==="+"&&s++,u.length===s+1?f=y(u[s++],r):u[s+1]==="."||u[s]==="."?(u[s]!=="."&&(c=y(u[s++],r)),s++,(s+1===u.length||u[s+1]==="("&&u[s+3]===")"||u[s+1]==="'"&&u[s+3]==="'")&&(f=y(u[s],r),h=k**BigInt(u[s].length),s++),(u[s]==="("&&u[s+2]===")"||u[s]==="'"&&u[s+2]==="'")&&(p=y(u[s+1],r),b=k**BigInt(u[s+1].length)-d,s+=3)):u[s+1]==="/"||u[s+1]===":"?(f=y(u[s],r),h=y(u[s+2],d),s+=3):u[s+3]==="/"&&u[s+1]===" "&&(c=y(u[s],r),f=y(u[s+2],r),h=y(u[s+4],d),s+=5),u.length<=s)i=h*b,r=n=p+i*c+b*f;else throw $()}else if(typeof e=="bigint")n=e,r=e,i=d;else throw $();if(i===a)throw F();o.s=r<a?-d:d,o.n=n<a?-n:n,o.d=i<a?-i:i};function _e(e,t,n){let i=d;for(;t>a;e=e*e%n,t>>=d)t&d&&(i=i*e%n);return i}function me(e,t){for(;t%L===a;t/=L);for(;t%R===a;t/=R);if(t===d)return a;let n=k%t,i=1;for(;n!==d;i++)if(n=n*k%t,i>pe)return a;return BigInt(i)}function ve(e,t,n){let i=d,r=_e(k,n,t);for(let s=0;s<300;s++){if(i===r)return BigInt(s);i=i*k%t,r=r*k%t}return 0}function S(e,t){if(!e)return t;if(!t)return e;for(;;){if(e%=t,!e)return t;if(t%=e,!t)return e}}function C(e,t){if(m(e,t),this instanceof C)e=S(o.d,o.n),this.s=o.s,this.n=o.n/e,this.d=o.d/e;else return g(o.s*o.n,o.d)}var F=function(){return new Error("Division by Zero")},$=function(){return new Error("Invalid argument")},Z=function(){return new Error("Parameters must be integer")};C.prototype={s:d,n:a,d,abs:function(){return g(this.n,this.d)},neg:function(){return g(-this.s*this.n,this.d)},add:function(e,t){return m(e,t),g(this.s*this.n*o.d+o.s*this.d*o.n,this.d*o.d)},sub:function(e,t){return m(e,t),g(this.s*this.n*o.d-o.s*this.d*o.n,this.d*o.d)},mul:function(e,t){return m(e,t),g(this.s*o.s*this.n*o.n,this.d*o.d)},div:function(e,t){return m(e,t),g(this.s*o.s*this.n*o.d,this.d*o.n)},clone:function(){return g(this.s*this.n,this.d)},mod:function(e,t){if(e===void 0)return g(this.s*this.n%this.d,d);if(m(e,t),a===o.n*this.d)throw F();return g(this.s*(o.d*this.n)%(o.n*this.d),o.d*this.d)},gcd:function(e,t){return m(e,t),g(S(o.n,this.n)*S(o.d,this.d),o.d*this.d)},lcm:function(e,t){return m(e,t),o.n===a&&this.n===a?g(a,d):g(o.n*this.n,S(o.n,this.n)*S(o.d,this.d))},inverse:function(){return g(this.s*this.d,this.n)},pow:function(e,t){if(m(e,t),o.d===d)return o.s<a?g((this.s*this.d)**o.n,this.n**o.n):g((this.s*this.n)**o.n,this.d**o.n);if(this.s<a)return null;let n=I(this.n),i=I(this.d),r=d,s=d;for(let c in n)if(c!=="1"){if(c==="0"){r=a;break}if(n[c]*=o.n,n[c]%o.d===a)n[c]/=o.d;else return null;r*=BigInt(c)**n[c]}for(let c in i)if(c!=="1"){if(i[c]*=o.n,i[c]%o.d===a)i[c]/=o.d;else return null;s*=BigInt(c)**i[c]}return o.s<a?g(s,r):g(r,s)},log:function(e,t){if(m(e,t),this.s<=a||o.s<=a)return null;const n={},i=I(o.n),r=I(o.d),s=I(this.n),c=I(this.d);for(const h in r)i[h]=(i[h]||a)-r[h];for(const h in c)s[h]=(s[h]||a)-c[h];for(const h in i)h!=="1"&&(n[h]=!0);for(const h in s)h!=="1"&&(n[h]=!0);let f=null,p=null;for(const h in n){const b=i[h]||a,u=s[h]||a;if(b===a){if(u!==a)return null;continue}let q=u,N=b;const J=S(q,N);if(q/=J,N/=J,f===null&&p===null)f=q,p=N;else if(q*p!==f*N)return null}return f!==null&&p!==null?g(f,p):null},equals:function(e,t){return m(e,t),this.s*this.n*o.d===o.s*o.n*this.d},lt:function(e,t){return m(e,t),this.s*this.n*o.d<o.s*o.n*this.d},lte:function(e,t){return m(e,t),this.s*this.n*o.d<=o.s*o.n*this.d},gt:function(e,t){return m(e,t),this.s*this.n*o.d>o.s*o.n*this.d},gte:function(e,t){return m(e,t),this.s*this.n*o.d>=o.s*o.n*this.d},compare:function(e,t){m(e,t);let n=this.s*this.n*o.d-o.s*o.n*this.d;return(a<n)-(n<a)},ceil:function(e){return e=k**BigInt(e||0),g(w(this.s*e*this.n/this.d)+(e*this.n%this.d>a&&this.s>=a?d:a),e)},floor:function(e){return e=k**BigInt(e||0),g(w(this.s*e*this.n/this.d)-(e*this.n%this.d>a&&this.s<a?d:a),e)},round:function(e){return e=k**BigInt(e||0),g(w(this.s*e*this.n/this.d)+this.s*((this.s>=a?d:a)+L*(e*this.n%this.d)>this.d?d:a),e)},roundTo:function(e,t){m(e,t);const n=this.n*o.d,i=this.d*o.n,r=n%i;let s=w(n/i);return r+r>=i&&s++,g(this.s*s*o.n,o.d)},divisible:function(e,t){return m(e,t),!(!(o.n*this.d)||this.n*o.d%(o.n*this.d))},valueOf:function(){return Number(this.s*this.n)/Number(this.d)},toString:function(e){let t=this.n,n=this.d;e=e||15;let i=me(t,n),r=ve(t,n,i),s=this.s<a?"-":"";if(s+=w(t/n),t%=n,t*=k,t&&(s+="."),i){for(let c=r;c--;)s+=w(t/n),t%=n,t*=k;s+="(";for(let c=i;c--;)s+=w(t/n),t%=n,t*=k;s+=")"}else for(let c=e;t&&c--;)s+=w(t/n),t%=n,t*=k;return s},toFraction:function(e){let t=this.n,n=this.d,i=this.s<a?"-":"";if(n===d)i+=t;else{let r=w(t/n);e&&r>a&&(i+=r,i+=" ",t%=n),i+=t,i+="/",i+=n}return i},toLatex:function(e){let t=this.n,n=this.d,i=this.s<a?"-":"";if(n===d)i+=t;else{let r=w(t/n);e&&r>a&&(i+=r,t%=n),i+="\\frac{",i+=t,i+="}{",i+=n,i+="}"}return i},toContinued:function(){let e=this.n,t=this.d,n=[];do{n.push(w(e/t));let i=e%t;e=t,t=i}while(e!==d);return n},simplify:function(e){const t=BigInt(1/(e||.001)|0),n=this.abs(),i=n.toContinued();for(let r=1;r<i.length;r++){let s=g(i[r-1],d);for(let f=r-2;f>=0;f--)s=s.inverse().add(i[f]);let c=s.sub(n);if(c.n*t<c.d)return s.mul(this.s)}return this}};const v="/assets/icons-LrhAoYAd.svg";class P{constructor(){_(this,"_data")}render(t,n=!0){if(!t||Array.isArray(t)&&t.length===0)return this.renderError();this._data=t;const i=this._generateMarkup();if(!n)return i;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",i)}update(t){this._data=t;const n=this._generateMarkup(),i=document.createRange().createContextualFragment(n),r=Array.from(i.querySelectorAll("*")),s=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((c,f)=>{var h;const p=s[f];!c.isEqualNode(p)&&((h=c.firstChild)==null?void 0:h.nodeValue.trim())!==""&&(p.textContent=c.textContent),c.isEqualNode(p)||Array.from(c.attributes).forEach(b=>p.setAttribute(b.name,b.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const t=`
          <div class="spinner">
            <svg>
              <use href="${v}#icon-loader"></use>
            </svg>
          </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){const n=`
            <div class="error">
                <div>
                    <svg>
                        <use href="${v}#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${t}</p>
            </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}renderMessage(t=this._message){const n=`
            <div class="message">
                <div>
                    <svg>
                        <use href="${v}#icon-smile"></use>
                    </svg>
                </div>
                <p>${t}</p>
            </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}}class be extends P{constructor(){super(...arguments);_(this,"_parentElement",document.querySelector(".recipe"));_(this,"_errorMessage","We could not find that recipe. Please try another one!");_(this,"_message","")}addHandlerRender(n){["hashchange","load"].forEach(i=>window.addEventListener(i,n))}addHandlerUpdateServings(n){this._parentElement.addEventListener("click",function(i){const r=i.target.closest(".btn--update-servings");if(!r)return;const s=+r.dataset.updateTo;s>0&&n(s)})}addHandlerAddBookmark(n){this._parentElement.addEventListener("click",function(i){i.target.closest(".btn--bookmark")&&n()})}_generateMarkup(){return`
            <figure class="recipe__fig">
                <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
                <h1 class="recipe__title">
                <span>${this._data.title}</span>
                </h1>
            </figure>

            <div class="recipe__details">
                <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${v}#icon-clock"></use> 
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
                <span class="recipe__info-text">minutes</span>
                </div>
                <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${v}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                <span class="recipe__info-text">servings</span>

                <div class="recipe__info-buttons">
                    <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                    <svg>
                        <use href="${v}#icon-minus-circle"></use>
                    </svg>
                    </button>
                    <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                    <svg>
                        <use href="${v}#icon-plus-circle"></use>
                    </svg>
                    </button>
                </div>
                </div>

                <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                    <svg>
                    <use href="${v}#icon-user"></use>
                    </svg>
                </div>
                <button class="btn--round btn--bookmark">
                <svg class="">
                    <use href="${v}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
                </svg>
                </button>
            </div>

            <div class="recipe__ingredients">
                <h2 class="heading--2">Recipe ingredients</h2>
                <ul class="recipe__ingredient-list">
                ${this._data.ingredients.map(this._generateMarkupIngredient).join(" ")}
                </ul>
            </div>

            <div class="recipe__directions">
                <h2 class="heading--2">How to cook it</h2>
                <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
                directions at their website.
                </p>
                <a
                class="btn--small recipe__btn"
                href="${this._data.sourceUrl}"
                target="_blank"
                >
                <span>Directions</span>
                <svg class="search__icon">
                    <use href="${v}#icon-arrow-right"></use>
                </svg>
                </a>
            </div>
        `}_generateMarkupIngredient(n){return`
        <li class="recipe__ingredient">
            <svg class="recipe__icon">
            <use href="${v}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${n.quantity?new C(n.quantity).toFraction():""}</div>
            <div class="recipe__description">
            <span class="recipe__unit">${n.unit}</span>
            ${n.description}
            </div>
        </li>
        `}}const E=new be;var B,T,ee;class ke{constructor(){x(this,T);x(this,B,document.querySelector(".search"))}getQuery(){const t=H(this,B).querySelector(".search__field").value;return Y(this,T,ee).call(this),t}addHandlerSearch(t){H(this,B).addEventListener("submit",function(n){n.preventDefault(),t()})}}B=new WeakMap,T=new WeakSet,ee=function(){H(this,B).querySelector(".search__field").value=""};const te=new ke;class we extends P{constructor(){super(...arguments);_(this,"_parentElement","")}_generateMarkup(){const n=window.location.hash.slice(1);return`
            <li class="preview">
                <a class="preview__link ${this._data.id===n?"preview__link--active":""}" href="#${this._data.id}">
                    <figure class="preview__fig">
                        <img src="${this._data.image}" alt="${this._data.title}" />
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${this._data.title}</h4>
                        <p class="preview__publisher">${this._data.publisher}</p>
                        <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                            <svg>
                            <use href="${v}#icon-user"></use>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
        `}}const ne=new we;class ye extends P{constructor(){super(...arguments);_(this,"_parentElement",document.querySelector(".results"));_(this,"_errorMessage","No recipes were found for your query. Please try again!!");_(this,"_message","")}_generateMarkup(){return this._data.map(n=>ne.render(n,!1)).join("")}}const O=new ye;class Ee extends P{constructor(){super(...arguments);_(this,"_parentElement",document.querySelector(".pagination"))}addHandlerClick(n){this._parentElement.addEventListener("click",function(i){const r=i.target.closest(".btn--inline");if(!r)return;const s=+r.dataset.goto;n(s)})}_generateMarkup(){const n=this._data.page,i=Math.ceil(this._data.results.length/this._data.resultsPerPage);return n===1&&i>1?`
                <button data-goto="${n+1}" class="btn--inline pagination__btn--next">
                    <span>Page ${n+1}</span>
                    <svg class="search__icon">
                        <use href="${v}#icon-arrow-right"></use>
                    </svg>
                </button>
            `:n===i&&i>1?`
                <button data-goto="${n-1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${v}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${n-1}</span>
                </button>
            `:n<i?`
                <button data-goto="${n-1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${v}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${n-1}</span>
                </button>
                <button data-goto="${n+1}" class="btn--inline pagination__btn--next">
                    <span>Page ${n+1}</span>
                    <svg class="search__icon">
                        <use href="${v}#icon-arrow-right"></use>
                    </svg>
                 </button>
            `:""}}const U=new Ee;class $e extends P{constructor(){super(...arguments);_(this,"_parentElement",document.querySelector(".bookmarks__list"));_(this,"_errorMessage","No bookmarks yet. Find a nice recipe and bookmark it.");_(this,"_message","")}addHandlerRender(n){window.addEventListener("load",n)}_generateMarkup(){return this._data.map(n=>ne.render(n,!1)).join("")}}const A=new $e;class Se extends P{constructor(){super();_(this,"_parentElement",document.querySelector(".upload"));_(this,"_message","Recipe was successfully uploaded. :)");_(this,"_window",document.querySelector(".add-recipe-window"));_(this,"_overlay",document.querySelector(".overlay"));_(this,"_btnOpen",document.querySelector(".nav__btn--add-recipe"));_(this,"_btnClose",document.querySelector(".btn--close-modal"));this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(n){this._parentElement.addEventListener("submit",function(i){i.preventDefault();const r=[...new FormData(this)],s=Object.fromEntries(r);n(s)})}_generateMarkup(){}}const M=new Se,Ie=async function(){try{const e=window.location.hash.slice(1);if(!e)return;E.renderSpinner(),O.update(D()),A.update(l.bookmarks),await de(e),E.render(l.recipe)}catch(e){E.renderError(),console.error(e)}},Be=async function(){try{O.renderSpinner();const e=te.getQuery();if(console.log("Search Query:- ",e),!e)return;await le(e),console.log("Search Query model:- ",l.search),O.render(D()),U.render(l.search)}catch(e){console.log(e)}},Pe=function(e){O.render(D(e)),U.render(l.search)},Me=function(e){ue(e),E.update(l.recipe)},Le=function(){l.recipe.bookmarked?he(l.recipe.id):G(l.recipe),E.update(l.recipe),A.render(l.bookmarks)},Ae=function(){A.render(l.bookmarks)},qe=async function(e){try{M.renderSpinner(),await ge(e),console.log(l.recipe),E.render(l.recipe),M.renderMessage(),A.render(l.bookmarks),window.history.pushState(null,"",`#${l.recipe.id}`),setTimeout(function(){M.toggleWindow()},ae*1e3)}catch(t){M.renderError(t.message)}},Ne=function(){A.addHandlerRender(Ae),E.addHandlerRender(Ie),E.addHandlerUpdateServings(Me),E.addHandlerAddBookmark(Le),te.addHandlerSearch(Be),U.addHandlerClick(Pe),M.addHandlerUpload(qe)};Ne();
