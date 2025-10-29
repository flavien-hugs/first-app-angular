import { Injectable } from '@angular/core';
import { HousingLocationInfo } from '../models/housing-location.models';

@Injectable({ providedIn: 'root' })
export class HousingLocationService {
	readonly baseUrl: string = 'https://angular.dev/assets/images/tutorials/common';

	private housingLocationList: HousingLocationInfo[] = [];

	constructor() {
		this.housingLocationList = Array.from({ length: 10 }, (_, i) => this.createRandomHouse(i));
	}

	private createRandomHouse(index: number): HousingLocationInfo {
		const cities = ['Chicago', 'Seattle', 'Austin', 'Santa Monica', 'New York'];
		const states = ['IL', 'WA', 'TX', 'CA', 'NY'];
		const names = ['Acme', 'Lorem Ipsum', 'Sunrise', 'Green Valley', 'Maple Residency'];
		const photos = [
			'bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
			'brandon-griggs-wR11KBaB86U-unsplash.jpg',
		];

		const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

		return new HousingLocationInfo(
			`${random(names)} Housing ${index + 1}`,
			random(cities),
			random(states),
			`${this.baseUrl}/${random(photos)}`,
			Math.floor(Math.random() * 5) + 1,
			Math.random() < 0.5,
			Math.random() < 0.7
		);
	}

	getAllHousingLocations(): HousingLocationInfo[] {
		return [...this.housingLocationList];
	}

	getHousingLocationById(id: string): HousingLocationInfo | null {
		return this.housingLocationList.find((h) => h.id === id) ?? null;
	}

	async submitApplication(firstName: string, lastName: string, email: string): Promise<void> {
		console.log(`Application received: ${firstName} ${lastName}, ${email}`);
	}
}
