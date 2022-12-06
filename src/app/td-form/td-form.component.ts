import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

  @ViewChild('form', {static:true}) form!:NgForm

  hero: any = {
    nome: '',
    alterego: '',
    superpotere: '',
    nemico: '',
    pianeta: '',
    debolezza: ''
  }

  constructor() { }

  ngOnInit(): void {

  }

  submit(form: NgForm){
    console.log(form.value);
  }

}
