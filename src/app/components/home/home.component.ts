import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocationInfo } from '../../models/housing-location.models';

@Component({
	selector: 'app-home',
	imports: [HousingLocationComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	readonly baseUrl: string = 'https://angular.dev/assets/images/tutorials/common';

	housingLocation: HousingLocationInfo = {
		id: 9999,
		name: 'Test Housing Location',
		city: 'Test City',
		state: 'TS',
		photo: `${this.baseUrl}/example-house.jpg`,
		availableUnits: 99,
		wifi: true,
		laundry: false,
	};
}
