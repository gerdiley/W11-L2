import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

   form! : FormGroup ;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      heroInfo: this.fb.group({
        nome: this.fb.control(null, [Validators.required]),
        alterego: this.fb.control(null, [Validators.required]),
        superpotere: this.fb.control(null, [Validators.required]),
        nemico: this.fb.control(null, [Validators.maxLength(10)]),
        pianeta: this.fb.control(null, [Validators.required]),
        debolezza: this.fb.control(null)
      })
    })

    this.form.valueChanges.subscribe(value => {
      console.log(value);
  });
  }

  getFormC(name: string){
    return this.form.get(name);
  }

  getErrorsC(name: string, error: string) {
    return this.form.get(name)?.errors![error];
}

submit(){
  console.log(this.form);
  console.log('form correttamente inviato');


}


}
