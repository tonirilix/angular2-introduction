System.register(["angular2/core","./contact.component","./contact.service"],function(t){var e,c,n,o,a=this&&this.__decorate||function(t,e,c,n){var o,a=arguments.length,i=3>a?e:null===n?n=Object.getOwnPropertyDescriptor(e,c):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,c,n);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(i=(3>a?o(i):a>3?o(e,c,i):o(e,c))||i);return a>3&&i&&Object.defineProperty(e,c,i),i},i=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0};return{setters:[function(t){e=t},function(t){c=t},function(t){n=t}],execute:function(){o=function(){function t(t){this._contactService=t,this.selectedContact=!1}return t.prototype.onSelect=function(t){this.selectedContact=t},t.prototype.getContacts=function(){var t=this;this._contactService.getContacts().then(function(e){return t.contacts=e})},t.prototype.ngOnInit=function(){this.getContacts()},t=a([e.Component({selector:"contact-list",template:'\n        <ul *ngFor="#contact of contacts"\n            (click)="onSelect(contact)"\n            [class.clicked]="selectedContact === contact"\n        >\n            <li>{{contact.firstName}} {{contact.lastName}}</li>\n        </ul>\n        <contact [contact]="selectedContact"></contact>\n    ',directives:[c.ContactComponent],providers:[n.ContactService],styleUrls:["../../src/css/contact-list.css"]}),i("design:paramtypes",[n.ContactService])],t)}(),t("ContactListComponent",o)}}});