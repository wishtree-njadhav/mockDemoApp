import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { requireCheckboxesToBeCheckedValidator } from './require-checkbox.validator';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit{
    selectedCountry = 'BE';
    countries: any = [
        {
          full: 'BE',
          short: 'BE'
        },
        {
          full: 'BCA',
          short: 'BCA'
        },
        {
          full: 'BCS',
          short: 'BCS'
        }
      ];
      java: string;
      advJava: string;
      angular: string;
      react: string;
      emailPresent = true;
      genders = ['Male', 'Female', 'Transgender'];
      registrationForm = new FormGroup({
        fullname: new FormControl('', [Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
        address: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required , Validators.pattern('^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
        mob: new FormControl('',  [Validators.required,
        Validators.pattern('[7-9][0-9]{9}')]),
        dob: new FormControl('', [Validators.required]),
        gender: new FormControl('female', [Validators.required ]),
        education: new FormControl('', [Validators.required]),
        myCheckboxGroup: new FormGroup({
            java: new FormControl(false),
        advjava: new FormControl(false),
        angular: new FormControl(false),
        react: new FormControl(false),
            }, requireCheckboxesToBeCheckedValidator()),
        password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]),
      });

      fullNameErrorMessage = {
        fullname: [
          { type: 'required', message: 'Fullname is required' },
          {
            type: 'pattern',
            message: 'Fullname should contain only alphabets',
          },
        ],
      };
      addressErrorMessage = {
          address: [
              {type: 'required' , message: 'Address is required'}
          ]
      };
      emailErrorMessage = {
          email: [
              {type: 'required' , message: 'Email is required'},
              {type: 'pattern' , message: 'Email is invalid'}
          ]
      };
      mobErrorMessage = {
          mob: [
            {type: 'required' , message: 'Mobile number is required'},
            {type: 'pattern' , message: 'Mobile number should contain 10 digits and starts with 7/8/9'}
          ]
      };
      dobErrorMessage = {
        dob: [{type: 'required' , message: 'Select date of birth is required'} ]
      };
      genderErrorMessage = {
          gender: [
              {type: 'required' , message: 'Select gender'}
          ]
      };
      educationErrorMessage = {
        education: [
            {type: 'required' , message: 'Select education'}
        ]
      };
      passwordErrorMessage = {
          password: [{type: 'required' , message: 'Password is required'},
          {type: 'pattern' , message: 'Password should contain atleast 1 uppercase,1 lowercase char 1 digit and 1 special symbol min length 8 and max length 12'}]
      };
    ngOnInit(): void {

    }
    onSubmit(fvalue): void{
        console.log(this.registrationForm.value);
        if (this.registrationForm.value.myCheckboxGroup.java === true) {
            console.log(this.registrationForm.value.myCheckboxGroup.COVAXIN);
            this.java = 'JAVA';
          }
        if (this.registrationForm.value.myCheckboxGroup.advjava === true) {
            console.log(this.registrationForm.value.myCheckboxGroup.COVAXIN);
            this.advJava = 'ADVANCEJAVA';
          }
        if (this.registrationForm.value.myCheckboxGroup.angular === true) {
            console.log(this.registrationForm.value.myCheckboxGroup.COVAXIN);
            this.angular = 'ANGULAR';
          }
        if (this.registrationForm.value.myCheckboxGroup.react === true) {
            console.log(this.registrationForm.value.myCheckboxGroup.COVAXIN);
            this.react = 'REACT';
          }
        let allUserDetails = JSON.parse(localStorage.getItem('UsersData'));
        if (allUserDetails != null) {
            allUserDetails.map(user => {
                if (user.Email === this.registrationForm.value.email) {
                   this.emailPresent = false;
                }
            });
        }

        if (allUserDetails == null) {
            allUserDetails = [];

            const userDetails = {
                    FirstName: this.registrationForm.value.fullname,
                    Address: this.registrationForm.value.address,
                    Email: this.registrationForm.value.email,
                    Mobile: this.registrationForm.value.mob,
                    DOB: this.registrationForm.value.dob,
                    gender: this.registrationForm.value.gender,
                    Education: this.registrationForm.value.education,
                    JAVA: this.java,
                    ADVANCEJAVA: this.advJava,
                    ANGULAR: this.angular,
                    REACT: this.react,
                    Password: this.registrationForm.value.password,
                };
            allUserDetails.push(userDetails);
            localStorage.setItem('UsersData', JSON.stringify(allUserDetails));

        }
        else if (allUserDetails != null) {
                if (this.emailPresent === true){
                const userDetails = {
                    FirstName: this.registrationForm.value.fullname,
                    Address: this.registrationForm.value.address,
                    Email: this.registrationForm.value.email,
                    Mobile: this.registrationForm.value.mob,
                    DOB: this.registrationForm.value.dob,
                    gender: this.registrationForm.value.gender,
                    Education: this.registrationForm.value.education,
                    JAVA: this.java,
                    ADVANCEJAVA: this.advJava,
                    ANGULAR: this.angular,
                    REACT: this.react,
                    Password: this.registrationForm.value.password,
                };
                allUserDetails.push(userDetails);
                localStorage.setItem('UsersData', JSON.stringify(allUserDetails));
            }
            else{
                console.log('in else');
                alert('your Email is already register...please sign up with another Email');
            }
        }


    }
   }


