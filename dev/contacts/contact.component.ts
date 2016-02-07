import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Contact} from './contact';

@Component({
    selector: "contact",
    template: `        
        <div>
            <div>
            <label for="first-name">First Name:</label>              
            <input [(ngModel)]="contact.firstName">
            </div>
            <div>
            <label for="first-name">Last Name:</label>                        
            <input [(ngModel)]="contact.lastName">
            </div>
            <div>
            <label for="first-name">Phone Number:</label>
            <input [(ngModel)]="contact.phone">
            </div>
            <div>
            <label for="first-name">Email:</label> 
            <input [(ngModel)]="contact.email">
            </div>
            <button (click)="onCreateNew()">Create new contact from this contact</button>
        </div>
    `,         
    inputs: ["contact"],
    styles: [`
        label {
            display: inline-block;
            width: 140px;
        }
        
        input {
            width: 250px;
        }
    `]
})
export class ContactComponent {
   public contact: Contact = null;
   
   constructor(private _privateRouter: Router){};
   
   onCreateNew(){
       this._privateRouter.navigate(['NewContactFromContact', {
           lastName: this.contact.lastName
       }]);
   }
}