export class address {
	public addressId: number;
	public userId: number;
	public street: string;
	public city: string;
	public stateAbbr: string;
	public zip: string;
	public updatedBy: string;
	public updatedDateTime: string;
	
	constructor(addressId: number, userId: number, street: string, city: string, stateAbbr: string, zip: string, updatedBy: string, updatedDateTime: string) {
		this.addressId = addressId;
		this.userId = userId;
		this.street = street;
		this.city = city;
		this.stateAbbr = stateAbbr;
		this.zip = zip;
		this.updatedBy = updatedBy;
		this.updatedDateTime = updatedDateTime;
	}
}