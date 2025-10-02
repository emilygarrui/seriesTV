import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SerieService } from '../services/serie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.page.html',
  styleUrls: ['./serie-form.page.scss'],
  standalone: false,
})
export class SerieFormPage implements OnInit {

  serieForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private serieService: SerieService,
    private router: Router) {
    this.serieForm = this.formBuilder.group({
      title: ['', Validators.required],
      genre: ['', Validators.required],
    })
  }

  ngOnInit() { }

  createSerie() {
    if (this.serieForm.valid) {
      console.log('Valid form:', this.serieForm.value);
      this.serieService.createSerie(this.serieForm.value).subscribe(response => {
        this.router.navigateByUrl("/my-series")
      })
    } else {
      console.log('Form not valid');
    }
  }

  getFormControl(field: string) {
    return this.serieForm.get(field);
  }

}
