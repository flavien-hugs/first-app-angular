import { Component, inject, Inject, Input, input, OnInit } from '@angular/core';
import { HousingLocationInfo } from '../../models/housing-location.models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-housing-location',
	imports: [],
	templateUrl: './housing-location.component.html',
	styleUrl: './housing-location.component.scss',
})
export class HousingLocationComponent {
	@Input() housingLocation!: HousingLocationInfo;

	route: ActivatedRoute = inject(ActivatedRoute);
	housingLocationId: string | null = null;

	constructor(private router: Router) {}

	onViewHousingLocationDetail() {
		this.housingLocationId = this.housingLocation.id;
		this.router.navigateByUrl(`/details/${this.housingLocationId}`);
	}
}
