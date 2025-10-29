import { Component, inject, Inject } from '@angular/core';
import { HousingLocationInfo } from '../../models/housing-location.models';
import { HousingLocationService } from '../../services/housing-location.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-housing-location-detail',
	imports: [ReactiveFormsModule],
	templateUrl: './housing-location-detail.component.html',
	styleUrl: './housing-location-detail.component.scss',
})
export class HousingLocationDetailComponent {
	route: ActivatedRoute = inject(ActivatedRoute);
	housingService = inject(HousingLocationService);
	housingLocation: HousingLocationInfo | undefined;

	applyForm = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		email: new FormControl(''),
	});

	constructor() {
		const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
		if (housingLocationId !== null) {
			this.housingService
				.getHousingLocationById(housingLocationId)
				.then((housingLocation) => {
					this.housingLocation = housingLocation ?? undefined;
				});
		}
	}

	submitApplication() {
		this.housingService.submitApplication(
			this.applyForm.value.firstName ?? '',
			this.applyForm.value.lastName ?? '',
			this.applyForm.value.email ?? ''
		);
	}
}
