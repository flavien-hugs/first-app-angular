import { Component, Input, input } from '@angular/core';
import { HousingLocationInfo } from '../../models/housing-location.models';

@Component({
	selector: 'app-housing-location',
	imports: [],
	templateUrl: './housing-location.component.html',
	styleUrl: './housing-location.component.scss',
})
export class HousingLocationComponent {
	@Input() housingLocation!: HousingLocationInfo;
}
