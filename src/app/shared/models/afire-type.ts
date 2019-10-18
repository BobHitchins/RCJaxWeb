export class afireType {
	public afireTypeId: number;
	public afireTypeName: string;
	public afireTypeDescription: string;
	public updatedBy: string;
	public updatedDateTime: string;
	
	constructor(afireTypeId: number, afireTypeName: string, afireTypeDescription: string, updatedBy: string, updatedDateTime: string) {
		this.afireTypeId = afireTypeId;
		this.afireTypeName = afireTypeName; 
		this.afireTypeDescription = afireTypeDescription;
		this.updatedBy = updatedBy;
		this.updatedDateTime = updatedDateTime;
	}
}
