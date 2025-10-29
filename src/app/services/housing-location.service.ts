import { Injectable } from '@angular/core';
import { HousingLocationInfo } from '../models/housing-location.models';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class HousingLocationService {
	private _apiUrl: string = `${environment.apiUrl}/locations`;

	async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
		const response = await fetch(this._apiUrl);
		if (!response.ok) {
			console.error(`HTTP Error: ${response.status} ${response.statusText}`);
			return [];
		}
		return (await response.json()) ?? [];
	}

	async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
		try {
			const response = await fetch(`${this._apiUrl}?id=${id}`);

			if (!response.ok) {
				console.error(`Erreur HTTP: ${response.status} ${response.statusText}`);
				return undefined;
			}

			const locationData = await response.json();

			// Assuming the API returns an array, we take the first element
			if (Array.isArray(locationData) && locationData.length > 0) {
				return locationData[0] as HousingLocationInfo;
			} else {
				console.warn(`Housing location not found for id=${id}`);
				return undefined;
			}
		} catch (error) {
			console.error(`Error fetching housing location:`, error);
			return undefined;
		}
	}

	async submitApplication(firstName: string, lastName: string, email: string): Promise<void> {
		console.log(`Application received: ${firstName} ${lastName}, ${email}`);
	}
}
