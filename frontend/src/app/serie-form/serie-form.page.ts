import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SerieService } from '../services/serie-service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.page.html',
  styleUrls: ['./serie-form.page.scss'],
  standalone: false,
})
export class SerieFormPage implements OnInit {
  serieId: string | null = null;
  serie: any = {
    title: '',
    genre: ''
  };
  serieForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private serieService: SerieService,
    private router: Router) {
    this.serieForm = this.formBuilder.group({
      title: ['', Validators.required],
      genre: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.serieId = this.route.snapshot.paramMap.get('id');
    if (this.serieId) {
      this.serieService.getSerieById(this.serieId).subscribe((data: any) => {
        this.serieForm.patchValue({
          title: data.title,
          genre: data.genre
        });
      });
    }
  }

  getFormControl(field: string) {
    return this.serieForm.get(field);
  }

saveSerie() {
  console.log('saveSerie called', this.serieId, this.serieForm.value);
  if (this.serieForm.valid) {
    if (this.serieId) {
      this.serieService.updateSerie(this.serieId, this.serieForm.value).subscribe(() => {
        this.router.navigateByUrl("/my-series");
      });
    } else {
      this.serieService.createSerie(this.serieForm.value).subscribe(() => {
        this.router.navigateByUrl("/my-series");
      });
    }
  } else {
    console.log('Form not valid');
  }
}

}
