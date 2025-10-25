import { Component, OnInit } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocationInfo } from '../../models/housing-location.models';
import { HousingLocationService } from '../../services/housing-location.service';

@Component({
	selector: 'app-home',
	imports: [HousingLocationComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
	housingLocations!: HousingLocationInfo[];

	constructor(private housingLocationService: HousingLocationService) {}

	ngOnInit() {
		this.housingLocations = this.housingLocationService.getAllHousingLocations();
	}
}
