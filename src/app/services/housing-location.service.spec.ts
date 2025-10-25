import { TestBed } from '@angular/core/testing';

import { HousingLocationService } from './housing-location.service';

describe('HousingLocation', () => {
	let service: HousingLocationService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(HousingLocationService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
