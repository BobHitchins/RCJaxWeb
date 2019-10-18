export class phone {
	public phoneId: number;
	public phoneTypeId: number;	
	public userId: number;
	public phoneNumber: string;
	public updatedBy: string;
	public updatedDateTime: string;
	
	constructor(phoneId: number, phoneTypeId: number, userId: number, phoneNumber: string, updatedBy: string, updatedDateTime: string) {
		this.phoneId = phoneId;
		this.phoneTypeId = phoneTypeId;
		this.userId = userId;
		this phoneNumber = phoneNumber;
		this.updatedBy = updatedBy;
		this.updatedDateTime = updatedDateTime;
	}
}
