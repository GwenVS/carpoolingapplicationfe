(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/yGZ":function(n,l,e){"use strict";e.r(l);var o=e("CcnG"),u=e("gIcY"),a=function(){function n(n,l){this.router=n,this.fb=l,this.formErrors={email:"",password:""},this.validationMessages={email:{required:"Please enter your email",email:"please enter your vaild email"},password:{required:"please enter your password",pattern:"The password must contain numbers and letters",minlength:"Please enter more than 4 characters",maxlength:"Please enter less than 25 characters"}}}return n.prototype.ngOnInit=function(){this.buildForm()},n.prototype.buildForm=function(){var n=this;this.userForm=this.fb.group({email:["",[u.w.required,u.w.email]],password:["",[u.w.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$"),u.w.minLength(6),u.w.maxLength(25)]]}),this.userForm.valueChanges.subscribe(function(l){return n.onValueChanged(l)}),this.onValueChanged()},n.prototype.onValueChanged=function(n){},n.prototype.login=function(){this.router.navigate(["/"])},n}(),r=function(){},d=e("pMnS"),t=e("21Lb"),i=e("OzfB"),c=e("lzlj"),s=e("FVSy"),m=e("ZYCi"),p=e("Ip0R"),f=e("dJrM"),v=e("seP3"),g=e("Wf4p"),h=e("Fzqc"),b=e("dWZg"),_=e("wFw1"),y=e("b716"),C=e("/VYK"),w=e("bujt"),q=e("UodH"),F=e("lLAP"),R=o["\u0275crt"]({encapsulation:0,styles:[[".sigin-conainer[_ngcontent-%COMP%]{min-height:100%;background-size:cover;padding:100px}.sigin-main[_ngcontent-%COMP%]{position:relative;margin:0 auto;width:500px}.full-width[_ngcontent-%COMP%]{width:100%}.redirect[_ngcontent-%COMP%]{font-size:14px;margin-left:10px;color:#0aa}"]],data:{}});function E(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"div",[["class","help is-danger"]],null,null,null,null,null)),(n()(),o["\u0275ted"](1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.component.formErrors.email)})}function L(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"div",[["class","help is-danger"]],null,null,null,null,null)),(n()(),o["\u0275ted"](1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.component.formErrors.password)})}function P(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,69,"div",[["fxFlexFill",""],["fxLayout","column"],["fxLayoutAlign","center center"],["style","background-image:url('../../../assets/login11.jpg');\nheight: 100%;\nbackground-repeat: no-repeat;\nbackground-position: center;\nbackground-size: cover; "]],null,null,null,null,null)),o["\u0275did"](1,737280,null,0,t.e,[i.n,o.ElementRef,i.s],{layout:[0,"layout"]},null),o["\u0275did"](2,737280,null,0,t.d,[i.n,o.ElementRef,[6,t.e],i.s],{align:[0,"align"]},null),o["\u0275did"](3,737280,null,0,t.b,[i.n,o.ElementRef,i.s],null,null),(n()(),o["\u0275eld"](4,0,null,null,65,"div",[["fxLayout","column"]],null,null,null,null,null)),o["\u0275did"](5,737280,null,0,t.e,[i.n,o.ElementRef,i.s],{layout:[0,"layout"]},null),(n()(),o["\u0275eld"](6,0,null,null,63,"div",[["class"," mat-elevation-z4"]],null,null,null,null,null)),(n()(),o["\u0275eld"](7,0,null,null,62,"mat-card",[["class","mat-card"]],null,null,null,c.d,c.a)),o["\u0275did"](8,49152,null,0,s.a,[],null,null),(n()(),o["\u0275eld"](9,0,null,0,6,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),o["\u0275did"](10,16384,null,0,s.i,[],null,null),(n()(),o["\u0275ted"](-1,null,["User login "])),(n()(),o["\u0275eld"](12,0,null,null,3,"a",[["class","redirect"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==o["\u0275nov"](n,13).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),o["\u0275did"](13,671744,null,0,m.m,[m.k,m.a,p.LocationStrategy],{routerLink:[0,"routerLink"]},null),o["\u0275pad"](14,1),(n()(),o["\u0275ted"](-1,null,["Register an account"])),(n()(),o["\u0275eld"](16,0,null,0,53,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),o["\u0275did"](17,16384,null,0,s.d,[],null,null),(n()(),o["\u0275eld"](18,0,null,null,51,"form",[["fxLayout","column"],["fxLayoutAlign","start stretch"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var u=!0,a=n.component;return"submit"===l&&(u=!1!==o["\u0275nov"](n,22).onSubmit(e)&&u),"reset"===l&&(u=!1!==o["\u0275nov"](n,22).onReset()&&u),"ngSubmit"===l&&(u=!1!==a.login()&&u),u},null,null)),o["\u0275did"](19,737280,null,0,t.e,[i.n,o.ElementRef,i.s],{layout:[0,"layout"]},null),o["\u0275did"](20,737280,null,0,t.d,[i.n,o.ElementRef,[6,t.e],i.s],{align:[0,"align"]},null),o["\u0275did"](21,16384,null,0,u.z,[],null,null),o["\u0275did"](22,540672,null,0,u.j,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,u.c,null,[u.j]),o["\u0275did"](24,16384,null,0,u.q,[[4,u.c]],null,null),(n()(),o["\u0275eld"](25,0,null,null,18,"mat-form-field",[["class","full-width mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,f.b,f.a)),o["\u0275did"](26,7389184,null,7,v.c,[o.ElementRef,o.ChangeDetectorRef,[2,g.j],[2,h.b],[2,v.a],b.a,o.NgZone,[2,_.a]],null,null),o["\u0275qud"](335544320,1,{_control:0}),o["\u0275qud"](335544320,2,{_placeholderChild:0}),o["\u0275qud"](335544320,3,{_labelChild:0}),o["\u0275qud"](603979776,4,{_errorChildren:1}),o["\u0275qud"](603979776,5,{_hintChildren:1}),o["\u0275qud"](603979776,6,{_prefixChildren:1}),o["\u0275qud"](603979776,7,{_suffixChildren:1}),(n()(),o["\u0275eld"](34,0,null,1,9,"input",[["class","input mat-input-element mat-form-field-autofill-control"],["formControlName","email"],["id","email"],["matInput",""],["placeholder","Please enter your email"],["required",""],["type","email"]],[[1,"required",0],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[8,"readOnly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(n,l,e){var u=!0;return"input"===l&&(u=!1!==o["\u0275nov"](n,37)._handleInput(e.target.value)&&u),"blur"===l&&(u=!1!==o["\u0275nov"](n,37).onTouched()&&u),"compositionstart"===l&&(u=!1!==o["\u0275nov"](n,37)._compositionStart()&&u),"compositionend"===l&&(u=!1!==o["\u0275nov"](n,37)._compositionEnd(e.target.value)&&u),"blur"===l&&(u=!1!==o["\u0275nov"](n,41)._focusChanged(!1)&&u),"focus"===l&&(u=!1!==o["\u0275nov"](n,41)._focusChanged(!0)&&u),"input"===l&&(u=!1!==o["\u0275nov"](n,41)._onInput()&&u),u},null,null)),o["\u0275did"](35,16384,null,0,u.v,[],{required:[0,"required"]},null),o["\u0275prd"](1024,null,u.m,function(n){return[n]},[u.v]),o["\u0275did"](37,16384,null,0,u.d,[o.Renderer2,o.ElementRef,[2,u.a]],null,null),o["\u0275prd"](1024,null,u.n,function(n){return[n]},[u.d]),o["\u0275did"](39,671744,null,0,u.i,[[3,u.c],[6,u.m],[8,null],[6,u.n],[2,u.B]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,u.o,null,[u.i]),o["\u0275did"](41,999424,null,0,y.b,[o.ElementRef,b.a,[6,u.o],[2,u.r],[2,u.j],g.d,[8,null],C.a,o.NgZone],{id:[0,"id"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),o["\u0275did"](42,16384,null,0,u.p,[[4,u.o]],null,null),o["\u0275prd"](2048,[[1,4]],v.d,null,[y.b]),(n()(),o["\u0275and"](16777216,null,null,1,null,E)),o["\u0275did"](45,16384,null,0,p.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275eld"](46,0,null,null,18,"mat-form-field",[["class","full-width mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,f.b,f.a)),o["\u0275did"](47,7389184,null,7,v.c,[o.ElementRef,o.ChangeDetectorRef,[2,g.j],[2,h.b],[2,v.a],b.a,o.NgZone,[2,_.a]],null,null),o["\u0275qud"](335544320,8,{_control:0}),o["\u0275qud"](335544320,9,{_placeholderChild:0}),o["\u0275qud"](335544320,10,{_labelChild:0}),o["\u0275qud"](603979776,11,{_errorChildren:1}),o["\u0275qud"](603979776,12,{_hintChildren:1}),o["\u0275qud"](603979776,13,{_prefixChildren:1}),o["\u0275qud"](603979776,14,{_suffixChildren:1}),(n()(),o["\u0275eld"](55,0,null,1,9,"input",[["class","input mat-input-element mat-form-field-autofill-control"],["formControlName","password"],["id","password"],["matInput",""],["placeholder","please  enter your password"],["required",""],["type","password"]],[[1,"required",0],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[8,"readOnly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(n,l,e){var u=!0;return"input"===l&&(u=!1!==o["\u0275nov"](n,58)._handleInput(e.target.value)&&u),"blur"===l&&(u=!1!==o["\u0275nov"](n,58).onTouched()&&u),"compositionstart"===l&&(u=!1!==o["\u0275nov"](n,58)._compositionStart()&&u),"compositionend"===l&&(u=!1!==o["\u0275nov"](n,58)._compositionEnd(e.target.value)&&u),"blur"===l&&(u=!1!==o["\u0275nov"](n,62)._focusChanged(!1)&&u),"focus"===l&&(u=!1!==o["\u0275nov"](n,62)._focusChanged(!0)&&u),"input"===l&&(u=!1!==o["\u0275nov"](n,62)._onInput()&&u),u},null,null)),o["\u0275did"](56,16384,null,0,u.v,[],{required:[0,"required"]},null),o["\u0275prd"](1024,null,u.m,function(n){return[n]},[u.v]),o["\u0275did"](58,16384,null,0,u.d,[o.Renderer2,o.ElementRef,[2,u.a]],null,null),o["\u0275prd"](1024,null,u.n,function(n){return[n]},[u.d]),o["\u0275did"](60,671744,null,0,u.i,[[3,u.c],[6,u.m],[8,null],[6,u.n],[2,u.B]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,u.o,null,[u.i]),o["\u0275did"](62,999424,null,0,y.b,[o.ElementRef,b.a,[6,u.o],[2,u.r],[2,u.j],g.d,[8,null],C.a,o.NgZone],{id:[0,"id"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),o["\u0275did"](63,16384,null,0,u.p,[[4,u.o]],null,null),o["\u0275prd"](2048,[[8,4]],v.d,null,[y.b]),(n()(),o["\u0275and"](16777216,null,null,1,null,L)),o["\u0275did"](66,16384,null,0,p.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275eld"](67,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""],["type","submit"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.login()&&o),o},w.d,w.b)),o["\u0275did"](68,180224,null,0,q.b,[o.ElementRef,b.a,F.h,[2,_.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(n()(),o["\u0275ted"](-1,0,["log in"]))],function(n,l){var e=l.component;n(l,1,0,"column"),n(l,2,0,"center center"),n(l,3,0),n(l,5,0,"column"),n(l,13,0,n(l,14,0,"/sigup")),n(l,19,0,"column"),n(l,20,0,"start stretch"),n(l,22,0,e.userForm),n(l,35,0,""),n(l,39,0,"email"),n(l,41,0,"email","Please enter your email","","email"),n(l,45,0,e.formErrors.email),n(l,56,0,""),n(l,60,0,"password"),n(l,62,0,"password","please  enter your password","","password"),n(l,66,0,e.formErrors.password),n(l,68,0,!e.userForm.valid,"primary")},function(n,l){n(l,12,0,o["\u0275nov"](l,13).target,o["\u0275nov"](l,13).href),n(l,18,0,o["\u0275nov"](l,24).ngClassUntouched,o["\u0275nov"](l,24).ngClassTouched,o["\u0275nov"](l,24).ngClassPristine,o["\u0275nov"](l,24).ngClassDirty,o["\u0275nov"](l,24).ngClassValid,o["\u0275nov"](l,24).ngClassInvalid,o["\u0275nov"](l,24).ngClassPending),n(l,25,1,["standard"==o["\u0275nov"](l,26).appearance,"fill"==o["\u0275nov"](l,26).appearance,"outline"==o["\u0275nov"](l,26).appearance,"legacy"==o["\u0275nov"](l,26).appearance,o["\u0275nov"](l,26)._control.errorState,o["\u0275nov"](l,26)._canLabelFloat,o["\u0275nov"](l,26)._shouldLabelFloat(),o["\u0275nov"](l,26)._hideControlPlaceholder(),o["\u0275nov"](l,26)._control.disabled,o["\u0275nov"](l,26)._control.autofilled,o["\u0275nov"](l,26)._control.focused,"accent"==o["\u0275nov"](l,26).color,"warn"==o["\u0275nov"](l,26).color,o["\u0275nov"](l,26)._shouldForward("untouched"),o["\u0275nov"](l,26)._shouldForward("touched"),o["\u0275nov"](l,26)._shouldForward("pristine"),o["\u0275nov"](l,26)._shouldForward("dirty"),o["\u0275nov"](l,26)._shouldForward("valid"),o["\u0275nov"](l,26)._shouldForward("invalid"),o["\u0275nov"](l,26)._shouldForward("pending"),!o["\u0275nov"](l,26)._animationsEnabled]),n(l,34,1,[o["\u0275nov"](l,35).required?"":null,o["\u0275nov"](l,41)._isServer,o["\u0275nov"](l,41).id,o["\u0275nov"](l,41).placeholder,o["\u0275nov"](l,41).disabled,o["\u0275nov"](l,41).required,o["\u0275nov"](l,41).readonly,o["\u0275nov"](l,41)._ariaDescribedby||null,o["\u0275nov"](l,41).errorState,o["\u0275nov"](l,41).required.toString(),o["\u0275nov"](l,42).ngClassUntouched,o["\u0275nov"](l,42).ngClassTouched,o["\u0275nov"](l,42).ngClassPristine,o["\u0275nov"](l,42).ngClassDirty,o["\u0275nov"](l,42).ngClassValid,o["\u0275nov"](l,42).ngClassInvalid,o["\u0275nov"](l,42).ngClassPending]),n(l,46,1,["standard"==o["\u0275nov"](l,47).appearance,"fill"==o["\u0275nov"](l,47).appearance,"outline"==o["\u0275nov"](l,47).appearance,"legacy"==o["\u0275nov"](l,47).appearance,o["\u0275nov"](l,47)._control.errorState,o["\u0275nov"](l,47)._canLabelFloat,o["\u0275nov"](l,47)._shouldLabelFloat(),o["\u0275nov"](l,47)._hideControlPlaceholder(),o["\u0275nov"](l,47)._control.disabled,o["\u0275nov"](l,47)._control.autofilled,o["\u0275nov"](l,47)._control.focused,"accent"==o["\u0275nov"](l,47).color,"warn"==o["\u0275nov"](l,47).color,o["\u0275nov"](l,47)._shouldForward("untouched"),o["\u0275nov"](l,47)._shouldForward("touched"),o["\u0275nov"](l,47)._shouldForward("pristine"),o["\u0275nov"](l,47)._shouldForward("dirty"),o["\u0275nov"](l,47)._shouldForward("valid"),o["\u0275nov"](l,47)._shouldForward("invalid"),o["\u0275nov"](l,47)._shouldForward("pending"),!o["\u0275nov"](l,47)._animationsEnabled]),n(l,55,1,[o["\u0275nov"](l,56).required?"":null,o["\u0275nov"](l,62)._isServer,o["\u0275nov"](l,62).id,o["\u0275nov"](l,62).placeholder,o["\u0275nov"](l,62).disabled,o["\u0275nov"](l,62).required,o["\u0275nov"](l,62).readonly,o["\u0275nov"](l,62)._ariaDescribedby||null,o["\u0275nov"](l,62).errorState,o["\u0275nov"](l,62).required.toString(),o["\u0275nov"](l,63).ngClassUntouched,o["\u0275nov"](l,63).ngClassTouched,o["\u0275nov"](l,63).ngClassPristine,o["\u0275nov"](l,63).ngClassDirty,o["\u0275nov"](l,63).ngClassValid,o["\u0275nov"](l,63).ngClassInvalid,o["\u0275nov"](l,63).ngClassPending]),n(l,67,0,o["\u0275nov"](l,68).disabled||null,"NoopAnimations"===o["\u0275nov"](l,68)._animationMode)})}var I=o["\u0275ccf"]("app-login",a,function(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"app-login",[],null,null,null,P,R)),o["\u0275did"](1,114688,null,0,a,[m.k,u.f],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),k=e("hUWP"),S=e("V9q+"),x=e("u7R8"),M=e("8mMr");e.d(l,"LoginModuleNgFactory",function(){return N});var N=o["\u0275cmf"](r,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,I]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,p.NgLocalization,p.NgLocaleLocalization,[o.LOCALE_ID,[2,p["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](5120,i.d,i.e,[[3,i.d],[2,i.c],[2,i.k],[2,i.b]]),o["\u0275mpd"](5120,i.h,i.v,[[3,i.h],i.d]),o["\u0275mpd"](5120,i.m,i.w,[[3,i.m],o.NgZone,o.PLATFORM_ID,p.DOCUMENT]),o["\u0275mpd"](4608,i.n,i.n,[i.h,i.m]),o["\u0275mpd"](5120,i.p,i.o,[[3,i.p],i.m,i.h]),o["\u0275mpd"](5120,i.t,i.r,[[3,i.t]]),o["\u0275mpd"](4608,i.s,i.s,[[2,i.t],[2,i.q],o.PLATFORM_ID,[2,i.l]]),o["\u0275mpd"](5120,o.APP_BOOTSTRAP_LISTENER,function(n,l){return[i.u(n,l)]},[p.DOCUMENT,o.PLATFORM_ID]),o["\u0275mpd"](4608,g.d,g.d,[]),o["\u0275mpd"](4608,u.A,u.A,[]),o["\u0275mpd"](4608,u.f,u.f,[]),o["\u0275mpd"](1073742336,h.a,h.a,[]),o["\u0275mpd"](1073742336,g.n,g.n,[[2,g.f]]),o["\u0275mpd"](1073742336,s.g,s.g,[]),o["\u0275mpd"](1073742336,p.CommonModule,p.CommonModule,[]),o["\u0275mpd"](1073742336,i.j,i.j,[]),o["\u0275mpd"](1073742336,t.c,t.c,[]),o["\u0275mpd"](1073742336,k.b,k.b,[]),o["\u0275mpd"](1073742336,S.a,S.a,[[2,i.q],o.PLATFORM_ID]),o["\u0275mpd"](1073742336,b.b,b.b,[]),o["\u0275mpd"](1073742336,g.z,g.z,[]),o["\u0275mpd"](1073742336,q.c,q.c,[]),o["\u0275mpd"](1073742336,x.a,x.a,[]),o["\u0275mpd"](1073742336,C.c,C.c,[]),o["\u0275mpd"](1073742336,v.e,v.e,[]),o["\u0275mpd"](1073742336,y.c,y.c,[]),o["\u0275mpd"](1073742336,M.b,M.b,[]),o["\u0275mpd"](1073742336,u.x,u.x,[]),o["\u0275mpd"](1073742336,u.k,u.k,[]),o["\u0275mpd"](1073742336,u.u,u.u,[]),o["\u0275mpd"](1073742336,m.n,m.n,[[2,m.t],[2,m.k]]),o["\u0275mpd"](1073742336,r,r,[]),o["\u0275mpd"](1024,m.i,function(){return[[{path:"",component:a}]]},[])])})},FVSy:function(n,l,e){"use strict";e.d(l,"d",function(){return o}),e.d(l,"i",function(){return u}),e.d(l,"h",function(){return a}),e.d(l,"b",function(){return r}),e.d(l,"f",function(){return d}),e.d(l,"c",function(){return t}),e.d(l,"a",function(){return i}),e.d(l,"e",function(){return c}),e.d(l,"j",function(){return s}),e.d(l,"g",function(){return m});var o=function(){},u=function(){},a=function(){},r=function(){this.align="start"},d=function(){},t=function(){},i=function(){},c=function(){},s=function(){},m=function(){}}}]);