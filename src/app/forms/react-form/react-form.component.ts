import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'react-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './react-form.component.html',
  styleUrl: './react-form.component.scss'
})
export class ReactFormComponent implements OnInit{

  constructor(){}

  fb = inject(FormBuilder); // Inject FormBuilder
  userForm!: FormGroup;

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required], // Single validation
      lastName: ['', [Validators.required, Validators.minLength(3)]], // Multiple validations
      address: this.fb.group({ // Nested child group
        street: [''],
        city: [''],
        state: [''],
        zip: ['', [Validators.pattern('[0-9]{5}')]], // Zip code validation
      }),
      // languages: this.fb.array([this.fb.control('')]), // Dynamic array of controls
      languages: this.fb.array([]) // Initialize as an empty array
    });
  }

  // Getter for dynamic languages FormArray
  get languages(): FormArray {
    return this.userForm.get('languages') as FormArray;
  }

  // // Add a new language control
  // addLanguage() {
  //   this.languages.push(this.fb.control(''));
  // }
    // Add a new language with its level
    addLanguage(): void {
      const languageGroup = this.fb.group({
        language: ['', Validators.required], // Language name
        level: ['low', Validators.required]  // Default level (low)
      });
      this.languages.push(languageGroup);
    }

  // Remove a language control by index
  removeLanguage(index: number) {
    this.languages.removeAt(index);
  }

  // Submit form
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
      this.resetForm();
    } else {
      console.log('Form is invalid');
    }
  }

  // Reset form
  resetForm() {
    this.userForm.reset();
    this.languages.clear(); // Clear all languages
  }

}

// Key Differences
// Feature	          setValue	                                patchValue
// Strictness        	Requires exact form structure.	          Can update a partial structure.
// Error on Mismatch	Throws an error if structure mismatches.	Ignores missing fields.
// Use Case	          When updating the entire form.	          When updating only specific fields.

// Assume you have this form structure:
// userForm = this.fb.group({
//   firstName: [''],
//   lastName: [''],
//   address: this.fb.group({
//     street: [''],
//     city: ['']
//   })
// });

// Using setValue:
// this.userForm.setValue({
//   firstName: 'John',
//   lastName: 'Doe',
//   address: {
//     street: '123 Main St',
//     city: 'New York'
//   }
// });

// Valid Input: Must include all fields (firstName, lastName, address.street, address.city).
// Error Example: If you try to omit a field like lastName:
// /

// this.userForm.setValue({
//   firstName: 'John',
//   address: {
//     street: '123 Main St',
//     city: 'New York'
//   }
// });
// This will throw an error: "Must supply a value for form control with name: 'lastName'."

// patchValue
// Purpose: Used to update specific fields in the form, without needing to supply values for all controls.
// Flexible: It does not require the object passed to exactly match the form structure.
// Error Handling: No error is thrown if some fields are missing.
// When to Use:
// Use patchValue when you only want to update some fields in the form.

// Using patchValue to update only a subset of fields:

// this.userForm.patchValue({
//   firstName: 'John',
//   address: {
//     city: 'New York'
//   }
// });
