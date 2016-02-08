import {Component} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {OnInit} from 'angular2/core';
import {ControlGroup} from 'angular2/common';
import {FormBuilder} from 'angular2/common';
import {Validators} from 'angular2/common';

@Component({
    template: `        
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
            <div>
                <label for="id">Id:</label>              
                <input type="text" id="id"
                    [ngFormControl]="myForm.controls['id']"                     
                >                
            </div>
            <div>
                <label for="first-name">First Name:</label>              
                <input type="text" id="first-name" 
                    [ngFormControl]="myForm.controls['firstName']"
                    #firstName="ngForm"
                >
                <span *ngIf="!firstName.valid">Not valid</span>                
            </div>
            <div>
                <label for="last-name">Last Name:</label>                        
                <input type="text" id="last-name"      
                    [ngFormControl]="myForm.controls['lastName']"              
                >
            </div>
            <div>
                <label for="phone">Phone Number:</label>
                <input type="text" id="phone"           
                    [ngFormControl]="myForm.controls['phone']"         
                >
            </div>
            <div>
                <label for="email">Email:</label> 
                <input type="text" id="email"              
                    [ngFormControl]="myForm.controls['email']"      
                >
            </div>
            <button [disabled]="!myForm.valid" type="submit">Create contact</button>
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
    myForm: ControlGroup;

    constructor(
        private _contactService: ContactService, 
        private _router: Router, 
        private _routeParam: RouteParams,
        private _formBuilder: FormBuilder) { }

    onAddContact(id, firstName, lastName, phone, email) {
        let contact: Contact = { id: id, firstName: firstName, lastName: lastName, phone: phone, email: email };
        this._contactService.insertContact(contact);
        this._router.navigate(['Contacts']);
    }
    
    onSubmit(value){
        this._contactService.insertContact(value);
        this._router.navigate(['Contacts']);        
    }

    ngOnInit(): any {
        this.myForm = this._formBuilder.group({
            'id': [''],
            'firstName': ['', Validators.required],
            'lastName': [this._routeParam.get('lastName'), Validators.required],
            'phone': [''],
            'email': ['', Validators.required],            
        })
    }
}