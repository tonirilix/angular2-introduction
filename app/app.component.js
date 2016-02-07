System.register(["angular2/core","./contacts/contact-list.component","./contacts/new-contact.component","angular2/router"],function(t){var e,n,o,c,a,r,i=this&&this.__decorate||function(t,e,n,o){var c,a=arguments.length,r=3>a?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(r=(3>a?c(r):a>3?c(e,n,r):c(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},u=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0};return{setters:[function(t){e=t},function(t){n=t},function(t){o=t},function(t){c=t,a=t}],execute:function(){r=function(){function t(){}return t=i([e.Component({selector:"app",template:'\n        <header>\n            <nav>\n                <a [routerLink]="[\'Contacts\']">Contacts</a>\n                <a [routerLink]="[\'NewContact\']">New Contact</a>\n            </nav>\n        </header>\n        <div class="main">\n            <router-outlet></router-outlet>\n        </div>                       \n    ',directives:[n.ContactListComponent,c.ROUTER_DIRECTIVES]}),a.RouteConfig([{path:"/contacts",name:"Contacts",component:n.ContactListComponent,useAsDefault:!0},{path:"/newcontact",name:"NewContact",component:o.NewContactComponent}]),u("design:paramtypes",[])],t)}(),t("AppComponent",r)}}});