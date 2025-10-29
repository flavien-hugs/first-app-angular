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
	housingLocationList: HousingLocationInfo[] = [];
	filteredLocationList: HousingLocationInfo[] = [];

	constructor(private housingLocationService: HousingLocationService) {}

	ngOnInit() {
		this.housingLocationList = this.housingLocationService.getAllHousingLocations();
		this.filteredLocationList = this.housingLocationList;
	}

	filterResults(query: string) {
		if (!query) {
			this.filteredLocationList = this.housingLocationList;
			return;
		} else {
			this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
				housingLocation?.name.toLowerCase().includes(query.toLowerCase())
			);
		}
	}
}
