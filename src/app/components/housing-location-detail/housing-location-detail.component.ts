import { Component, inject, Inject } from '@angular/core';
import { HousingLocationInfo } from '../../models/housing-location.models';
import { HousingLocationService } from '../../services/housing-location.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-housing-location-detail',
	imports: [],
	templateUrl: './housing-location-detail.component.html',
	styleUrl: './housing-location-detail.component.scss',
})
export class HousingLocationDetailComponent {
	route: ActivatedRoute = inject(ActivatedRoute);
	housingService = inject(HousingLocationService);
	housingLocation: HousingLocationInfo | undefined;

	constructor() {
		const housingLocationId = this.route.snapshot.params['id'];
		if (housingLocationId !== null) {
			this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
		}
	}
}
