import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PlacesService} from '../../services/places.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities: string[] = [
    'Sofia, Bulgaria',
    'Plovdiv, Bulgaria',
    'Varna, Bulgaria',
    'Burgas, Bulgaria',
    'Ruse, Bulgaria',
    'Pleven, Bulgaria',
    'Dobrich, Bulgaria',
    'Shumen, Bulgaria',
    'Vidin, Bulgaria',
    'Vratsa, Bulgaria',
    'Blagoevgrad, Bulgaria',
    'Gabrovo, Bulgaria',
    'Yambol, Bulgaria',
    'Dupnitsa, Bulgaria',
    'Sliven, Bulgaria',
    'Pernik, Bulgaria'
  ];

  categories: string[] = [
    'sights-museums',
    'shopping',
    'eat-drink',
    'transport',
    'accommodation',
    'administrative-areas-buildings',
    'natural-geographical',
    'petrol-station',
    'hospital-health-care-facility',
    'atm-bank-exchange',
    'going-out'
  ];

  placesForm: FormGroup;

  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.placesForm = new FormGroup({
      location: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    });
  }

  onSubmit(form) {
    console.log(form.value);
    this.router.navigateByUrl('/places/' + form.value.location + '/' + form.value.category);
  }
}
