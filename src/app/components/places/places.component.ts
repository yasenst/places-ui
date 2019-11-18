import { Component, OnInit } from '@angular/core';
import {PlacesService} from '../../services/places.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  public places;

  constructor(private placesService: PlacesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPlaces(this.route.snapshot.params.location, this.route.snapshot.params.category);
  }

  getPlaces(location: string, category: string) {
    this.placesService.getPlaces(location, category).subscribe(
      data => { this.places = data; },
      err => console.error(err),
      () => console.log('places loaded')
    );
  }
}
