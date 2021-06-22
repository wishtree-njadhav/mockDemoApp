import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
    loginForm = new FormGroup({
        email: new FormControl('' , [Validators.required , Validators.pattern('^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
        password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')])
    });
    emailErrorMessage = {
        email: [
            {type: 'required' , message: 'Email is required'},
            {type: 'pattern' , message: 'Email is invalid'}
        ]
    };
    passwordErrorMessage = {
        password: [{type: 'required' , message: 'Password is required'},
        {type: 'pattern' , message: 'Password should contain atleast 1 uppercase,1 lowercase char 1 digit and 1 special symbol min length 8 and max length 12'}]
    };
    ngOnInit(): void {
    }
    onSubmit(fvalue): void {
        
        console.log(this.loginForm.value);
        let allUserDetails = JSON.parse(localStorage.getItem('UsersData'));
        console.log(allUserDetails);

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < allUserDetails.length; i++ ){
            console.log(this.loginForm.value.password);
            console.log(this.loginForm.value.email);
            if (this.loginForm.value.email == allUserDetails[i].Email && this.loginForm.value.password === allUserDetails[i].Password ){
              alert('Login successfull');
              console.log('login successful');
             }
             else{
                 alert('Incorrect email or password');
                 console.log('login unsuccessfull');
             }
        }

    }

}
