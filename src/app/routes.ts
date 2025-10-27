import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HousingLocationDetailComponent } from './components/housing-location-detail/housing-location-detail.component';

const routeConfig: Routes = [
	{
		path: '',
		component: HomeComponent,
		title: 'Home page',
	},
	{
		path: 'details/:id',
		component: HousingLocationDetailComponent,
		title: 'Home details',
	},
];
export default routeConfig;
