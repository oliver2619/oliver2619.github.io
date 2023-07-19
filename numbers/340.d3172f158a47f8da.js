"use strict";(self.webpackChunknumbers=self.webpackChunknumbers||[]).push([[340],{2340:(In,he,l)=>{l.r(he),l.d(he,{MenuModule:()=>Tn});var M=l(6814),o=l(4946),Ct=l(7715),Vt=l(5592),At=l(7453),Mt=l(4829),bt=l(4564),Dt=l(8251),Ft=l(7400),Et=l(2714),Nt=l(7398);let fe=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),_=(()=>{class n extends fe{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),Ot={provide:h,useExisting:(0,o.Gpc)(()=>O),multi:!0},Gt=new o.OlP("CompositionEventMode");let O=(()=>{class n extends fe{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function xt(){const n=(0,M.q)()?(0,M.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Gt,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([Ot]),o.qOj]}),n})();const u=new o.OlP("NgValidators"),p=new o.OlP("NgAsyncValidators");function be(n){return null!=n}function De(n){return(0,o.QGY)(n)?(0,Ct.D)(n):n}function Fe(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function Ee(n,t){return t.map(e=>e(n))}function we(n){return n.map(t=>function Tt(n){return!n.validate}(t)?t:e=>t.validate(e))}function Y(n){return null!=n?function Ne(n){if(!n)return null;const t=n.filter(be);return 0==t.length?null:function(e){return Fe(Ee(e,t))}}(we(n)):null}function Z(n){return null!=n?function Se(n){if(!n)return null;const t=n.filter(be);return 0==t.length?null:function(e){return function wt(...n){const t=(0,bt.jO)(n),{args:e,keys:r}=(0,At.D)(n),i=new Vt.y(s=>{const{length:a}=e;if(!a)return void s.complete();const d=new Array(a);let C=a,A=a;for(let q=0;q<a;q++){let de=!1;(0,Mt.Xf)(e[q]).subscribe((0,Dt.x)(s,kn=>{de||(de=!0,A--),d[q]=kn},()=>C--,void 0,()=>{(!C||!de)&&(A||s.next(r?(0,Et.n)(r,d):d),s.complete())}))}});return t?i.pipe((0,Ft.Z)(t)):i}(Ee(e,t).map(De)).pipe((0,Nt.U)(Fe))}}(we(n)):null}function Oe(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function xe(n){return n._rawValidators}function Ge(n){return n._rawAsyncValidators}function z(n){return n?Array.isArray(n)?n:[n]:[]}function G(n,t){return Array.isArray(n)?n.includes(t):n===t}function Be(n,t){const e=z(t);return z(n).forEach(i=>{G(e,i)||e.push(i)}),e}function Te(n,t){return z(t).filter(e=>!G(n,e))}class ke{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Y(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Z(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class c extends ke{get formDirective(){return null}get path(){return null}}class m extends ke{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Ie{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Pe=(()=>{class n extends Ie{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(m,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})(),He=(()=>{class n extends Ie{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(c,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[o.qOj]}),n})();const b="VALID",T="INVALID",V="PENDING",D="DISABLED";function J(n){return(k(n)?n.validators:n)||null}function Q(n,t){return(k(t)?t.asyncValidators:n)||null}function k(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}function Re(n,t,e){const r=n.controls;if(!(t?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[e])throw new o.vHH(1001,"")}function je(n,t,e){n._forEachChild((r,i)=>{if(void 0===e[i])throw new o.vHH(1002,"")})}class I{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===b}get invalid(){return this.status===T}get pending(){return this.status==V}get disabled(){return this.status===D}get enabled(){return this.status!==D}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Be(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Be(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Te(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Te(t,this._rawAsyncValidators))}hasValidator(t){return G(this._rawValidators,t)}hasAsyncValidator(t){return G(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=V,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=D,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=b,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===V)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?D:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;const e=De(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?D:this.errors?T:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(T)?T:b}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){k(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function Ht(n){return Array.isArray(n)?Y(n):n||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function Ut(n){return Array.isArray(n)?Z(n):n||null}(this._rawAsyncValidators)}}class F extends I{constructor(t,e,r){super(J(e),Q(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){je(this,0,t),Object.keys(t).forEach(r=>{Re(this,!0,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{const i=this.controls[r];i&&i.patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[e,r]of Object.entries(this.controls))if(this.contains(e)&&t(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}class Le extends F{}const y=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>E}),E="always";function w(n,t,e=E){X(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||"always"===e)&&t.valueAccessor.setDisabledState?.(n.disabled),function jt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&qe(n,t)})}(n,t),function qt(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function Lt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&qe(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Rt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function H(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),R(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function U(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function X(n,t){const e=xe(n);null!==t.validator?n.setValidators(Oe(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=Ge(n);null!==t.asyncValidator?n.setAsyncValidators(Oe(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();U(t._rawValidators,i),U(t._rawAsyncValidators,i)}function R(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=xe(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.validator);s.length!==i.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const i=Ge(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.asyncValidator);s.length!==i.length&&(e=!0,n.setAsyncValidators(s))}}}const r=()=>{};return U(t._rawValidators,r),U(t._rawAsyncValidators,r),e}function qe(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function ze(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function $e(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const S=class extends I{constructor(t=null,e,r){super(J(e),Q(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),k(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=$e(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){ze(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){ze(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){$e(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};let Ke=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})();const en={provide:h,useExisting:(0,o.Gpc)(()=>re),multi:!0};let tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})(),tn=(()=>{class n{constructor(){this._accessors=[]}add(e,r){this._accessors.push([e,r])}remove(e){for(let r=this._accessors.length-1;r>=0;--r)if(this._accessors[r][1]===e)return void this._accessors.splice(r,1)}select(e){this._accessors.forEach(r=>{this._isSameGroup(r,e)&&r[1]!==e&&r[1].fireUncheck(e.value)})}_isSameGroup(e,r){return!!e[0].control&&e[0]._parent===r._control._parent&&e[1].name===r.name}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:tt}),n})(),re=(()=>{class n extends _{constructor(e,r,i,s){super(e,r),this._registry=i,this._injector=s,this.setDisabledStateFired=!1,this.onChange=()=>{},this.callSetDisabledState=(0,o.f3M)(y,{optional:!0})??E}ngOnInit(){this._control=this._injector.get(m),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(e){this._state=e===this.value,this.setProperty("checked",this._state)}registerOnChange(e){this._fn=e,this.onChange=()=>{e(this.value),this._registry.select(this)}}setDisabledState(e){(this.setDisabledStateFired||e||"whenDisabledForLegacyCode"===this.callSetDisabledState)&&this.setProperty("disabled",e),this.setDisabledStateFired=!0}fireUncheck(e){this.writeValue(e)}_checkName(){!this.name&&this.formControlName&&(this.name=this.formControlName)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(tn),o.Y36(o.zs3))},n.\u0275dir=o.lG2({type:n,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(e,r){1&e&&o.NdJ("change",function(){return r.onChange()})("blur",function(){return r.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[o._Bn([en]),o.qOj]}),n})();const oe=new o.OlP("NgModelWithFormControlWarning"),on={provide:c,useExisting:(0,o.Gpc)(()=>j)};let j=(()=>{class n extends c{constructor(e,r,i){super(),this.callSetDisabledState=i,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(R(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return w(r,e,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){H(e.control||null,e,!1),function $t(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,function Ze(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(e),"dialog"===e?.target?.method}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,i=this.form.get(e.path);r!==i&&(H(r||null,e),(n=>n instanceof S)(i)&&(w(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);(function Ye(n,t){X(n,t)})(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function Yt(n,t){return R(n,t)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){X(this.form,this),this._oldForm&&R(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,10),o.Y36(p,10),o.Y36(y,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([on]),o.qOj,o.TTD]}),n})();const ln={provide:m,useExisting:(0,o.Gpc)(()=>ae)};let ae=(()=>{class n extends m{set isDisabled(e){}constructor(e,r,i,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function te(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===O?e=s:function zt(n){return Object.getPrototypeOf(n.constructor)===_}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){this._added||this._setUpControl(),function ee(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return function P(n,t){return[...t.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(o.Y36(c,13),o.Y36(u,10),o.Y36(p,10),o.Y36(h,10),o.Y36(oe,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([ln]),o.qOj,o.TTD]}),n})(),gt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[tt]}),n})();class _t extends I{constructor(t,e,r){super(J(e),Q(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){let r=this._adjustIndex(t);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){let i=this._adjustIndex(t);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){je(this,0,t),t.forEach((r,i)=>{Re(this,!1,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}}function yt(n){return!!n&&(void 0!==n.asyncValidators||void 0!==n.validators||void 0!==n.updateOn)}let Mn=(()=>{class n{constructor(){this.useNonNullable=!1}get nonNullable(){const e=new n;return e.useNonNullable=!0,e}group(e,r=null){const i=this._reduceControls(e);let s={};return yt(r)?s=r:null!==r&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new F(i,s)}record(e,r=null){const i=this._reduceControls(e);return new Le(i,r)}control(e,r,i){let s={};return this.useNonNullable?(yt(r)?s=r:(s.validators=r,s.asyncValidators=i),new S(e,{...s,nonNullable:!0})):new S(e,r,i)}array(e,r,i){const s=e.map(a=>this._createControl(a));return new _t(s,r,i)}_reduceControls(e){const r={};return Object.keys(e).forEach(i=>{r[i]=this._createControl(e[i])}),r}_createControl(e){return e instanceof S||e instanceof I?e:Array.isArray(e)?this.control(e[0],e.length>1?e[1]:null,e.length>2?e[2]:null):this.control(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),bn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:y,useValue:e.callSetDisabledState??E}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[gt]}),n})(),Dn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:oe,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:y,useValue:e.callSetDisabledState??E}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[gt]}),n})();var g=l(6538),Fn=l(9971),L=l(2271);function En(n,t){1&n&&o._UZ(0,"span",9)}function wn(n,t){1&n&&o._UZ(0,"span",10)}function Nn(n,t){if(1&n&&(o.TgZ(0,"tr")(1,"td"),o._uU(2),o.qZA(),o.TgZ(3,"td"),o.YNc(4,En,1,0,"span",6),o.YNc(5,wn,1,0,"span",7),o.qZA(),o.TgZ(6,"td",8),o._uU(7),o.qZA(),o.TgZ(8,"td",8),o._uU(9),o.qZA()()),2&n){const e=t.$implicit;o.xp6(2),o.AsE("",e.size,"\xd7",e.size,""),o.xp6(2),o.Q6J("ngIf",e.items),o.xp6(1),o.Q6J("ngIf",!e.items),o.xp6(2),o.Oqu(e.score),o.xp6(2),o.Oqu(e.maxNumber)}}let Sn=(()=>{class n{constructor(e){this.records=e.get(),this.records.sort((r,i)=>r.score-i.score)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(Fn.$))},n.\u0275cmp=o.Xpm({type:n,selectors:[["n-hiscore"]],decls:8,vars:1,consts:[["nText","menu.hiscore"],["colspan","2","nText","hiscore.mode"],["nText","game.score"],["nText","hiscore.max"],[4,"ngFor","ngForOf"],["type","button","nText","menu.back","routerLink",".."],["nText","menu.level1",4,"ngIf"],["nText","menu.level2",4,"ngIf"],[1,"number"],["nText","menu.level1"],["nText","menu.level2"]],template:function(e,r){1&e&&(o._UZ(0,"h2",0),o.TgZ(1,"table")(2,"tr"),o._UZ(3,"th",1)(4,"th",2)(5,"th",3),o.qZA(),o.YNc(6,Nn,10,6,"tr",4),o.qZA(),o._UZ(7,"button",5)),2&e&&(o.xp6(6),o.Q6J("ngForOf",r.records))},dependencies:[M.sg,M.O5,g.rH,L.f],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:5rem}"],changeDetection:0}),n})();var vt=l(9375);const xn=[{path:"",pathMatch:"full",component:(()=>{class n{constructor(e,r){this.gameService=e,this.router=r}get version(){return"0.0.1"}get canResume(){return this.gameService.canResume}resume(){this.gameService.resume(),this.router.navigateByUrl("game")}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(vt.h),o.Y36(g.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["n-main"]],decls:9,vars:2,consts:[["nText","menu"],[1,"button-list","vertical"],["type","button","routerLink","new-game","nText","menu.new"],["type","button","nText","menu.resume",3,"disabled","click"],["type","button","routerLink","settings","nText","menu.settings"],["type","button","routerLink","hiscore","nText","menu.hiscore"],[1,"version"],["nText","version"]],template:function(e,r){1&e&&(o._UZ(0,"h2",0),o.TgZ(1,"div",1),o._UZ(2,"button",2),o.TgZ(3,"button",3),o.NdJ("click",function(){return r.resume()}),o.qZA(),o._UZ(4,"button",4)(5,"button",5),o.qZA(),o.TgZ(6,"div",6),o._UZ(7,"span",7),o._uU(8),o.qZA()),2&e&&(o.xp6(3),o.Q6J("disabled",!r.canResume),o.xp6(5),o.hij(" ",r.version,""))},dependencies:[g.rH,L.f],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:5rem}.version[_ngcontent-%COMP%]{font-size:3vh}"],changeDetection:0}),n})()},{path:"hiscore",component:Sn},{path:"new-game",component:(()=>{class n{get value(){return this.formGroup.value}constructor(e,r,i){this.gameService=e,this.router=r,this.formGroup=i.group({}),this.formGroup.addControl("size",i.control(4)),this.formGroup.addControl("items",i.control(!1))}start(){const e=this.value;this.gameService.newGame({size:e.size,items:e.items}),this.router.navigateByUrl("/game/main")}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(vt.h),o.Y36(g.F0),o.Y36(Mn))},n.\u0275cmp=o.Xpm({type:n,selectors:[["n-new-game"]],decls:15,vars:4,consts:[["nText","menu.new"],[3,"formGroup"],[1,"radio"],["type","radio","name","size","formControlName","size",3,"value"],[1,"button-list"],["type","button","nText","menu.back","routerLink",".."],["type","button","nText","menu.start",3,"click"]],template:function(e,r){1&e&&(o._UZ(0,"h2",0),o.TgZ(1,"form",1)(2,"div",2)(3,"label"),o._UZ(4,"input",3),o._uU(5,"3\xd73"),o.qZA(),o.TgZ(6,"label"),o._UZ(7,"input",3),o._uU(8,"4\xd74"),o.qZA(),o.TgZ(9,"label"),o._UZ(10,"input",3),o._uU(11,"5\xd75"),o.qZA()()(),o.TgZ(12,"div",4),o._UZ(13,"button",5),o.TgZ(14,"button",6),o.NdJ("click",function(){return r.start()}),o.qZA()()),2&e&&(o.xp6(1),o.Q6J("formGroup",r.formGroup),o.xp6(3),o.Q6J("value",3),o.xp6(3),o.Q6J("value",4),o.xp6(3),o.Q6J("value",5))},dependencies:[g.rH,L.f,Ke,O,re,Pe,He,j,ae],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:5rem}"],changeDetection:0}),n})()},{path:"settings",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["n-settings"]],decls:2,vars:0,consts:[["nText","menu.settings"],["type","button","nText","menu.back","routerLink",".."]],template:function(e,r){1&e&&o._UZ(0,"h2",0)(1,"button",1)},dependencies:[g.rH,L.f],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:5rem}"],changeDetection:0}),n})()},{path:"**",redirectTo:""}];let Gn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[g.Bz.forChild(xn),g.Bz]}),n})();var Bn=l(6208);let Tn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[M.ez,Gn,Bn.m,bn,Dn]}),n})()}}]);