import {Component} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {OnInit} from "angular2/core";

@Component({
    template: `        
        <form #myForm="ngForm" (ngSubmit)="onSubmit()">
            <div>
                <label for="id">Id:</label>              
                <input type="text" id="id">
            </div>
            <div>
                <label for="first-name">First Name:</label>              
                <input type="text" id="first-name"
                    ngControl="firstName"
                    required
                    [(ngModel)] = "newContact.firstName"
                    #firstName="ngForm"
                >
                <span *ngIf="!firstName.valid">Not valid</span>
            </div>
            <div>
                <label for="last-name">Last Name:</label>                        
                <input type="text" id="last-name"
                    ngControl="lastName"
                    required
                    [(ngModel)] = "newContact.lastName"
                >
            </div>
            <div>
                <label for="phone">Phone Number:</label>
                <input type="text" id="phone"
                    ngControl="phone"
                    [(ngModel)] = "newContact.phone"
                >
            </div>
            <div>
                <label for="email">Email:</label> 
                <input type="text" id="email"
                    ngControl="email"
                    required
                    [(ngModel)] = "newContact.email"
                >
            </div>
            <button type="submit" [disabled] = "!myForm.form.valid">Create contact</button>
        </form>
    `,
    providers: [ContactService],
    styles: [`
        label {
            display: inline-block;
            width: 140px;
        }
        
        input {
            width: 250px;
        }
        
        .ng-invalid{
            border: 1px solid red;
        }
    `]
})
export class NewContactComponent implements OnInit {

    newContact: Contact;

    constructor(private _contactService: ContactService, private _router: Router, private _routeParam: RouteParams) { }

    onAddContact(id, firstName, lastName, phone, email) {
        let contact: Contact = { id: id, firstName: firstName, lastName: lastName, phone: phone, email: email };
        this._contactService.insertContact(contact);
        this._router.navigate(['Contacts']);
    }
    
    onSubmit(){
        this._contactService.insertContact(this.newContact);
        this._router.navigate(['Contacts']);        
    }

    ngOnInit(): any {
        //this.newContact.lastName = this._routeParam.get('lastName');
        this.newContact = {
            id: 9,
            firstName: '',
            lastName: this._routeParam.get('lastName'),
            phone: '',
            email: ''
        }
    }
}