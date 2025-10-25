export class HousingLocationInfo {
	id: string;

	constructor(
		public name: string,
		public city: string,
		public state: string,
		public photo: string,
		public availableUnits: number,
		public wifi: boolean,
		public laundry: boolean
	) {
		this.id = crypto.randomUUID().substring(0, 8);
	}
}
