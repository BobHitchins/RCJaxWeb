export class encounterMaterial {
	public encounterMaterialId: number;
	public encounterMaterialTitle: string;
	public encounterMaterialAuthor: string;
	public encounterMaterialLink: string;
	public encounterMaterialCost: number;
	public updatedBy: string;
	public updatedDateTime: string;

	constructor(encounterMaterialId: number, encounterMaterialTitle: string, encounterMaterialAuthor: string, encounterMaterialLink: string,
				encounterMaterialCost: number, updatedBy: string; updatedDateTime: string) {
		this.encounterMaterialId = encounterMaterialId;
		this.encounterMaterialTitle = encounterMaterialTitle;
		this.encounterMaterialAuthor = encounterMaterialAuthor;
		this.encounterMaterialLink = encounterMaterialLink;
		this.encounterMaterialCost = encounterMaterialCost;
		this.updatedBy = updatedBy;
		this.updatedDateTime = updatedDateTime;
	}
}