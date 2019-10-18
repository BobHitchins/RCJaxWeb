export class afire {
	public afireId: number;
	public afireTypeId: number;
	public userId: number;
	public dateStarted: string;
	public isActive: boolean;
	public updatedBy: string;
	public updatedDateTime: string;
	
	constructor(afireId: number, afireTypeId: number, userId: number, dateStarted: string, isActive: boolean, updatedBy: string, updatedDateTime: string) {
		this.afireId = afireId;
		this.afireTypeId = afireTypeId;
		this.userId = userId;
		this.dateStarted = dateStarted;
		this.isActive = isActive;
		this.updatedBy = updatedBy;
		this.updatedDateTime = updatedDateTime;
	}
}
