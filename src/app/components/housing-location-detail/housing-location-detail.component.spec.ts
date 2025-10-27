import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocationDetailComponent } from './housing-location-detail.component';

describe('HousingLocationDetail', () => {
	let component: HousingLocationDetailComponent;
	let fixture: ComponentFixture<HousingLocationDetailComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HousingLocationDetailComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HousingLocationDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
