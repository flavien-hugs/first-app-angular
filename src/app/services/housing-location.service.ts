import { Injectable } from '@angular/core';
import { HousingLocationInfo } from '../models/housing-location.models';

@Injectable({ providedIn: 'root' })
export class HousingLocationService {
	readonly baseUrl: string = 'https://angular.dev/assets/images/tutorials/common';

	private housingLocations: HousingLocationInfo[] = [
		new HousingLocationInfo(
			'Acme Fresh Start Housing',
			'Chicago',
			'IL',
			`${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
			4,
			false,
			true
		),
		new HousingLocationInfo(
			'Acme Fresh Start Housing',
			'Santa Monica',
			'CA',
			`${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
			4,
			false,
			true
		),
		new HousingLocationInfo(
			'Acme Fresh Start Housing',
			'Seattle',
			'WA',
			`${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
			3,
			true,
			false
		),
		new HousingLocationInfo(
			'Acme Fresh Start Housing',
			'Austin',
			'TX',
			`${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
			2,
			false,
			true
		),
	];

	getAllHousingLocations(): HousingLocationInfo[] {
		return [...this.housingLocations];
	}
}
