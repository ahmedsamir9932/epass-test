"use strict";(self.webpackChunke_invoice=self.webpackChunke_invoice||[]).push([[413],{4413:(tt,_,p)=>{p.r(_),p.d(_,{LoginModule:()=>H});var u=p(6895),a=p(4006),t=p(4650),l=p(2605),g=p(4463),m=p(7793),f=p(605);function x(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"email_required")," "))}function C(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"invalid_email")," "))}function w(e,i){if(1&e&&(t.TgZ(0,"span",30),t.YNc(1,x,3,3,"span",26),t.YNc(2,C,3,3,"span",26),t.qZA()),2&e){const n=t.oxw();let o,r;t.xp6(1),t.Q6J("ngIf",(null==(o=n.form.get("email"))?null:o.errors).required),t.xp6(1),t.Q6J("ngIf",(null==(r=n.form.get("email"))?null:r.errors).email)}}function v(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"password_required")," "))}function P(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"password_required_eight")," "))}function b(e,i){if(1&e&&(t.TgZ(0,"span",30),t.YNc(1,v,3,3,"span",26),t.YNc(2,P,3,3,"span",26),t.qZA()),2&e){const n=t.oxw();let o,r;t.xp6(1),t.Q6J("ngIf",(null==(o=n.form.get("password"))?null:o.errors).required),t.xp6(1),t.Q6J("ngIf",(null==(r=n.form.get("password"))?null:r.errors).minlength)}}function O(e,i){if(1&e&&(t.TgZ(0,"button",31),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const n=t.oxw();t.Q6J("disabled",!n.form.valid),t.xp6(1),t.hij(" ",t.lcZ(2,2,"sign_in")," ")}}function y(e,i){1&e&&t._UZ(0,"app-loader")}function Z(e,i){if(1&e&&(t.TgZ(0,"div",32),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",n.error," ")}}const M=function(e){return{"ar-style":e}},I=function(){return["forgot-password"]};let T=(()=>{class e{constructor(n,o,r,s){this.fb=n,this.router=o,this.translate=r,this.loginService=s,this.isLoading=!1,this.error="",this.form=this.fb.group({email:["",[a.kI.required,a.kI.email]],password:["",[a.kI.required,a.kI.minLength(8)]]})}ngOnInit(){}submitForm(){this.error="",this.isLoading=!0,this.loginService.login(this.form.value).subscribe({next:n=>{this.isLoading=!1,localStorage.setItem("userMail",this.form.value.email),localStorage.setItem("authToken",n?.data?.token),localStorage.setItem("role",n?.data?.role),this.router.navigate(["/"])},error:n=>{this.isLoading=!1,this.error=n.error?.ErrorMessage}})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.qu),t.Y36(l.F0),t.Y36(g.sK),t.Y36(m.r))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:52,vars:38,consts:[[1,"page-container"],[1,"content-container","row"],[1,"logo-wrapper","col-6"],[1,"tri-1",3,"ngClass"],["src","../../../../../assets/images/tri1.png","alt","TRI 1"],[1,"tri-2"],["src","../../../../../assets/images/tri2.png","alt","TRI 2"],["src","../../../../../assets/images/trio-logo-white.png",1,"logo"],[1,"info"],[1,"white","welcome"],[1,"white","text"],[1,"icons-container"],[1,"bi","bi-facebook"],[1,"bi","bi-globe2"],[1,"bi","bi-envelope-fill"],[1,"copyright"],[1,"login-form-wrapper","col-6"],[1,"primary","fw-bold","mb-2"],[1,"secondary"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["type","text","placeholder","demo@example.com","formControlName","email"],["class","alert-message",4,"ngIf"],[1,"mb-4"],["type","password","placeholder","*********","formControlName","password"],["class","primary w-100",3,"disabled",4,"ngIf"],[4,"ngIf"],["class","alert alert-danger",4,"ngIf"],[1,"secondary","text-center"],[1,"primary","cursor-pointer","fw-bold",3,"routerLink"],[1,"alert-message"],[1,"primary","w-100",3,"disabled"],[1,"alert","alert-danger"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t._UZ(7,"img",7),t.TgZ(8,"div",8)(9,"div",9),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"div",10),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"div",11),t._UZ(16,"i",12)(17,"i",13)(18,"i",14),t.qZA(),t.TgZ(19,"div",15),t._uU(20),t.ALo(21,"translate"),t.qZA()()(),t.TgZ(22,"div",16)(23,"div")(24,"div",17),t._uU(25),t.ALo(26,"translate"),t.qZA(),t.TgZ(27,"div",18),t._uU(28),t.ALo(29,"translate"),t.qZA()(),t.TgZ(30,"form",19),t.NdJ("ngSubmit",function(){return o.submitForm()}),t.TgZ(31,"div",20)(32,"label"),t._uU(33),t.ALo(34,"translate"),t.qZA(),t._UZ(35,"input",21),t.YNc(36,w,3,2,"span",22),t.qZA(),t.TgZ(37,"div",23)(38,"label"),t._uU(39),t.ALo(40,"translate"),t.qZA(),t._UZ(41,"input",24),t.YNc(42,b,3,2,"span",22),t.qZA(),t.YNc(43,O,3,4,"button",25),t.YNc(44,y,1,0,"app-loader",26),t.qZA(),t.YNc(45,Z,2,1,"div",27),t.TgZ(46,"span",28),t._uU(47),t.ALo(48,"translate"),t.TgZ(49,"span",29),t._uU(50),t.ALo(51,"translate"),t.qZA()()()()()),2&n){let r,s;t.xp6(3),t.Q6J("ngClass",t.VKq(35,M,"ar"===o.translate.currentLang)),t.xp6(7),t.Oqu(t.lcZ(11,17,"welcome")),t.xp6(3),t.hij(" ",t.lcZ(14,19,"welcome_description")," "),t.xp6(7),t.Oqu(t.lcZ(21,21,"privacy_policy")),t.xp6(5),t.Oqu(t.lcZ(26,23,"sign_in")),t.xp6(3),t.Oqu(t.lcZ(29,25,"sign_in_2")),t.xp6(2),t.Q6J("formGroup",o.form),t.xp6(3),t.hij(" ",t.lcZ(34,27,"email")," "),t.xp6(3),t.Q6J("ngIf",(null==(r=o.form.get("email"))?null:r.errors)&&(null==(r=o.form.get("email"))?null:r.touched)),t.xp6(3),t.hij(" ",t.lcZ(40,29,"password")," "),t.xp6(3),t.Q6J("ngIf",(null==(s=o.form.get("password"))?null:s.errors)&&(null==(s=o.form.get("password"))?null:s.touched)),t.xp6(1),t.Q6J("ngIf",!o.isLoading),t.xp6(1),t.Q6J("ngIf",o.isLoading),t.xp6(1),t.Q6J("ngIf",o.error),t.xp6(2),t.hij(" ",t.lcZ(48,31,"forgot_password")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(37,I)),t.xp6(1),t.hij(" ",t.lcZ(51,33,"press_here")," ")}},dependencies:[u.mk,u.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,f.R,l.rH,g.X$],styles:[".page-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:url(bg.afec2804017c12d6.png),linear-gradient(to bottom,rgb(0,0,0),rgb(0,0,0));background-size:cover}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{box-shadow:0 4px 4px #00000040;border-radius:10px;width:900px}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]{background-color:#24324d;padding:18px 24px;display:flex;flex-direction:column;justify-content:space-between;min-height:600px;position:relative}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:150px}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .tri-1[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:190px;height:85px}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .tri-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .tri-1.ar-style[_ngcontent-%COMP%]{left:0;right:unset}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .tri-2[_ngcontent-%COMP%]{position:absolute;top:20%;left:0;width:85px;height:190px}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .tri-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]{margin-bottom:20px;font-weight:700;font-size:22px;line-height:38px}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:14px}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .icons-container[_ngcontent-%COMP%]{margin-top:15px}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .icons-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;font-size:18px;background:rgba(255,255,255,.4);padding:5px 10px;margin-right:15px;border-radius:5px;cursor:pointer}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{color:#fff;font-size:13px;margin-top:15px}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]{display:flex;padding:18px 24px;flex-direction:column;justify-content:space-evenly;min-height:600px;background:#fff}"]}),e})();var A=p(4689),h=p(4383);function L(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"email_required")," "))}function k(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"invalid_email")," "))}function q(e,i){if(1&e&&(t.TgZ(0,"span",14),t.YNc(1,L,3,3,"span",13),t.YNc(2,k,3,3,"span",13),t.qZA()),2&e){const n=t.oxw();let o,r;t.xp6(1),t.Q6J("ngIf",(null==(o=n.form.get("email"))?null:o.errors).required),t.xp6(1),t.Q6J("ngIf",(null==(r=n.form.get("email"))?null:r.errors).email)}}function N(e,i){if(1&e&&(t.TgZ(0,"button",15),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const n=t.oxw();t.Q6J("disabled",!n.form.valid),t.xp6(1),t.hij(" ",t.lcZ(2,2,"reset_password")," ")}}function F(e,i){1&e&&t._UZ(0,"app-loader")}const U=function(){return["/login"]};let S=(()=>{class e{constructor(n,o,r,s,c){this.fb=n,this.router=o,this.translate=r,this.loginService=s,this.toaster=c,this.form=this.fb.group({email:["",[a.kI.required,a.kI.email]]}),this.isLoading=!1}ngOnInit(){}submitForm(){this.isLoading=!0,this.loginService.forgotPassword(this.form.value).subscribe({next:n=>{this.isLoading=!1,this.router.navigate(["/login/confirm-otp"])},error:n=>{this.isLoading=!1,this.toaster.error(n?.error?.ErrorMessage?n?.error?.ErrorMessage:n?.error?.errorMessages[0]?.message)}})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.qu),t.Y36(l.F0),t.Y36(g.sK),t.Y36(m.r),t.Y36(h._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-forgot-password"]],decls:25,vars:18,consts:[[1,"page-container"],[1,"content-container"],[1,"logo-wrapper"],["src","../../../../../assets/images/trio-logo-black.svg",1,"logo"],[1,"primary-text"],[1,"black-text"],[1,"back"],[3,"routerLink"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","placeholder","demo@example.com","formControlName","email"],["class","alert-message",4,"ngIf"],["class","primary w-100",3,"disabled",4,"ngIf"],[4,"ngIf"],[1,"alert-message"],[1,"primary","w-100",3,"disabled"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"span"),t._uU(6),t.ALo(7,"translate"),t.qZA()(),t.TgZ(8,"div",5)(9,"span"),t._uU(10),t.ALo(11,"translate"),t.qZA()(),t.TgZ(12,"div",6)(13,"a",7),t._uU(14),t.ALo(15,"translate"),t.qZA()(),t.TgZ(16,"form",8),t.NdJ("ngSubmit",function(){return o.submitForm()}),t.TgZ(17,"div",9)(18,"label"),t._uU(19),t.ALo(20,"translate"),t.qZA(),t._UZ(21,"input",10),t.YNc(22,q,3,2,"span",11),t.qZA(),t.YNc(23,N,3,4,"button",12),t.YNc(24,F,1,0,"app-loader",13),t.qZA()()()),2&n){let r;t.xp6(6),t.hij(" ",t.lcZ(7,9,"forgot_title")," "),t.xp6(4),t.hij(" ",t.lcZ(11,11,"enter_email")," "),t.xp6(3),t.Q6J("routerLink",t.DdM(17,U)),t.xp6(1),t.hij(" ",t.lcZ(15,13,"back_to_login")," "),t.xp6(2),t.Q6J("formGroup",o.form),t.xp6(3),t.hij(" ",t.lcZ(20,15,"email")," "),t.xp6(3),t.Q6J("ngIf",(null==(r=o.form.get("email"))?null:r.errors)&&(null==(r=o.form.get("email"))?null:r.touched)),t.xp6(1),t.Q6J("ngIf",!o.isLoading),t.xp6(1),t.Q6J("ngIf",o.isLoading)}},dependencies:[u.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,f.R,l.yS,g.X$],styles:[".page-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:url(bg.afec2804017c12d6.png),linear-gradient(to bottom,rgb(0,0,0),rgb(0,0,0));background-size:cover}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{background:#fff;box-shadow:0 4px 4px #00000040;border-radius:10px;width:500px;padding:20px 70px;text-align:center}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]{margin:20px 0 50px}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .primary-text[_ngcontent-%COMP%]{margin:20px 0;color:#c9252b;font-weight:700;font-size:22px}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .black-text[_ngcontent-%COMP%]{margin:20px 0;font-size:18px}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin:20px 0 30px;text-align:start}.back[_ngcontent-%COMP%]{margin:0 0 20px;text-decoration:underline}.back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#c9252b}"]}),e})();const J=function(){return["/login"]};let V=(()=>{class e{constructor(n,o){this.fb=n,this.router=o,this.form=this.fb.group({otp:["",[a.kI.required,a.kI.minLength(6)]]})}ngOnInit(){}submitForm(){this.router.navigate(["/login/reset-password"])}onOtpChange(n){this.form.get("otp")?.patchValue(n)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.qu),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-confirm-otp"]],decls:19,vars:11,consts:[[1,"page-container"],[1,"content-container"],[1,"logo-wrapper"],["src","../../../../../assets/images/trio-logo-black.svg",1,"logo"],[1,"primary-text"],[1,"black-text"],[1,"mb-3"],["href","mailTo:",1,"btn","btn-danger",2,"padding","12px 35px"],[1,"back"],[3,"routerLink"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"span"),t._uU(6),t.ALo(7,"translate"),t.qZA()(),t.TgZ(8,"div",5)(9,"span"),t._uU(10),t.ALo(11,"translate"),t.qZA()(),t.TgZ(12,"div",6)(13,"a",7),t._uU(14,"Open Web Mail"),t.qZA()(),t.TgZ(15,"div",8)(16,"a",9),t._uU(17),t.ALo(18,"translate"),t.qZA()()()()),2&n&&(t.xp6(6),t.hij(" ",t.lcZ(7,4,"forgot_title")," "),t.xp6(4),t.hij(" ",t.lcZ(11,6,"send-link-message")," "),t.xp6(6),t.Q6J("routerLink",t.DdM(10,J)),t.xp6(1),t.hij(" ",t.lcZ(18,8,"back_to_login")," "))},dependencies:[l.yS,g.X$],styles:[".page-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:url(bg.afec2804017c12d6.png),linear-gradient(to bottom,rgb(0,0,0),rgb(0,0,0));background-size:cover}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{background:#fff;box-shadow:0 4px 4px #00000040;border-radius:10px;width:500px;padding:20px 70px;text-align:center}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]{margin:20px 0 50px}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .primary-text[_ngcontent-%COMP%]{margin:20px 0;color:#c9252b;font-weight:700;font-size:22px}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .black-text[_ngcontent-%COMP%]{margin:20px 0;font-size:18px}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin:20px 0 30px;text-align:center}.back[_ngcontent-%COMP%]{margin:0 0 20px;text-decoration:underline}.back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#c9252b}"]}),e})(),Y=(()=>{class e{transform(n){return Object.keys(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"keys",type:e,pure:!0}),e})(),K=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[Y],imports:[[u.ez,a.u5,a.UX]]}),e})();function D(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"password_required")," "))}function Q(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"password_required_eight")," "))}function $(e,i){if(1&e&&(t.TgZ(0,"span",16),t.YNc(1,D,3,3,"span",15),t.YNc(2,Q,3,3,"span",15),t.qZA()),2&e){const n=t.oxw();let o,r;t.xp6(1),t.Q6J("ngIf",(null==(o=n.form.get("password"))?null:o.errors).required),t.xp6(1),t.Q6J("ngIf",(null==(r=n.form.get("password"))?null:r.errors).minlength)}}function E(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"confirm_password_message")," "))}function R(e,i){if(1&e&&(t.TgZ(0,"span",16),t.YNc(1,E,3,3,"span",15),t.qZA()),2&e){const n=t.oxw();let o;t.xp6(1),t.Q6J("ngIf",(null==(o=n.form.get("confirmPassword"))?null:o.errors).notSame)}}function z(e,i){if(1&e&&(t.TgZ(0,"div",17),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",n.error," ")}}function B(e,i){if(1&e&&(t.TgZ(0,"button",18),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const n=t.oxw();t.Q6J("disabled",!n.form.valid),t.xp6(1),t.hij(" ",t.lcZ(2,2,"confirm")," ")}}function X(e,i){1&e&&t._UZ(0,"app-loader")}const G=function(){return["/login"]};let W=(()=>{class e{constructor(n,o,r,s,c,d){this.fb=n,this.translate=o,this.aroute=r,this.loginService=s,this.toaster=c,this.router=d,this.form=this.fb.group({password:["",[a.kI.required,a.kI.minLength(8)]],confirmPassword:["",[a.kI.required,a.kI.minLength(8)]]}),this.isLoading=!1,this.error=""}ngOnInit(){this.token=this.aroute.snapshot.queryParams.token,this.email=this.aroute.snapshot.queryParams.email}submitForm(){this.isLoading=!0,this.error="",this.loginService.resetPassword({password:this.form.value.password,confirmPassword:this.form.value.confirmPassword,token:this.token,email:this.email}).subscribe({next:o=>{this.isLoading=!1,this.toaster.success(o.message?o.message:"Password Reset Successfully"),this.router.navigate(["/login"])},error:o=>{this.isLoading=!1,o?.error?.errorMessages.length?this.error=o?.error?.errorMessages[0]?.message:this.toaster.error("Error Happaned")}})}onChangePassword(){this.form.get("password")?.value!==this.form.get("confirmPassword")?.value?this.form.get("confirmPassword")?.setErrors({notSame:!0}):this.form.get("confirmPassword")?.setErrors(null)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.qu),t.Y36(g.sK),t.Y36(l.gz),t.Y36(m.r),t.Y36(h._W),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-reset-password"]],decls:32,vars:23,consts:[[1,"page-container"],[1,"content-container"],[1,"logo-wrapper"],["src","../../../../../assets/images/trio-logo-black.svg",1,"logo"],[1,"primary-text"],[1,"black-text"],[1,"back"],[3,"routerLink"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","password","placeholder","*********","formControlName","password",3,"input"],["class","alert-message",4,"ngIf"],["type","password","placeholder","*********","formControlName","confirmPassword",3,"input"],["class","alert alert-danger",4,"ngIf"],["class","primary w-100",3,"disabled",4,"ngIf"],[4,"ngIf"],[1,"alert-message"],[1,"alert","alert-danger"],[1,"primary","w-100",3,"disabled"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"span"),t._uU(6),t.ALo(7,"translate"),t.qZA()(),t.TgZ(8,"div",5)(9,"span"),t._uU(10),t.ALo(11,"translate"),t.qZA()(),t.TgZ(12,"div",6)(13,"a",7),t._uU(14),t.ALo(15,"translate"),t.qZA()(),t.TgZ(16,"form",8),t.NdJ("ngSubmit",function(){return o.submitForm()}),t.TgZ(17,"div",9)(18,"label"),t._uU(19),t.ALo(20,"translate"),t.qZA(),t.TgZ(21,"input",10),t.NdJ("input",function(){return o.onChangePassword()}),t.qZA(),t.YNc(22,$,3,2,"span",11),t.qZA(),t.TgZ(23,"div",9)(24,"label"),t._uU(25),t.ALo(26,"translate"),t.qZA(),t.TgZ(27,"input",12),t.NdJ("input",function(){return o.onChangePassword()}),t.qZA(),t.YNc(28,R,2,1,"span",11),t.qZA(),t.YNc(29,z,2,1,"div",13),t.YNc(30,B,3,4,"button",14),t.YNc(31,X,1,0,"app-loader",15),t.qZA()()()),2&n){let r,s;t.xp6(6),t.hij(" ",t.lcZ(7,12,"new_password")," "),t.xp6(4),t.hij(" ",t.lcZ(11,14,"enter_new_password")," "),t.xp6(3),t.Q6J("routerLink",t.DdM(22,G)),t.xp6(1),t.hij(" ",t.lcZ(15,16,"back_to_login")," "),t.xp6(2),t.Q6J("formGroup",o.form),t.xp6(3),t.hij(" ",t.lcZ(20,18,"password")," "),t.xp6(3),t.Q6J("ngIf",(null==(r=o.form.get("password"))?null:r.errors)&&(null==(r=o.form.get("password"))?null:r.touched)),t.xp6(3),t.hij(" ",t.lcZ(26,20,"confirm_password")," "),t.xp6(3),t.Q6J("ngIf",(null==(s=o.form.get("confirmPassword"))?null:s.touched)&&(null==(s=o.form.get("confirmPassword"))?null:s.errors)),t.xp6(1),t.Q6J("ngIf",o.error),t.xp6(1),t.Q6J("ngIf",!o.isLoading),t.xp6(1),t.Q6J("ngIf",o.isLoading)}},dependencies:[u.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,f.R,l.yS,g.X$],styles:[".page-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:url(bg.afec2804017c12d6.png),linear-gradient(to bottom,rgb(0,0,0),rgb(0,0,0));background-size:cover}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{background:#fff;box-shadow:0 4px 4px #00000040;border-radius:10px;width:500px;padding:20px 70px;text-align:center}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]{margin:20px 0 50px}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .primary-text[_ngcontent-%COMP%]{margin:20px 0;color:#c9252b;font-weight:700;font-size:22px}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .black-text[_ngcontent-%COMP%]{margin:20px 0;font-size:18px}.page-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin:20px 0 30px;text-align:start}.back[_ngcontent-%COMP%]{margin:0 0 20px;text-decoration:underline}.back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#c9252b}"]}),e})(),H=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,A.m,K,l.Bz.forChild([{path:"",component:T},{path:"forgot-password",component:S},{path:"confirm-otp",component:V},{path:"reset-password",component:W}])]}),e})()}}]);