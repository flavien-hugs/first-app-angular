import { Component, inject, OnInit } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocationInfo } from '../../models/housing-location.models';
import { HousingLocationService } from '../../services/housing-location.service';

@Component({
	selector: 'app-home',
	imports: [HousingLocationComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	housingLocationList: HousingLocationInfo[] = [];
	filteredLocationList: HousingLocationInfo[] = [];

	housingLocationService: HousingLocationService = inject(HousingLocationService);

	constructor() {
		this.housingLocationService
			.getAllHousingLocations()
			.then((housingLocationList: HousingLocationInfo[]) => {
				this.housingLocationList = housingLocationList;
				this.filteredLocationList = housingLocationList;
			});
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
