export class phoneType {
	public phoneTypeId: number;
	public phoneTypeName: string;
	public phoneTypeDescription: string;
	public updatedBy: string;
	public updatedDateTime: string;
	
	constructor(phoneTypeId: number, phoneTypeName: string, phoneTypeDescription: string, updatedBy: string, updatedDateTime: string) {
		this.phoneTypeId = phoneTypeId; 
		this.phoneTypeName = phoneTypeName;
		this.phoneTypeDescription = phoneTypeDescription;
		this.updatedBy = updatedBy;
		this.updatedDateTime = updatedDateTime;
	}
}
