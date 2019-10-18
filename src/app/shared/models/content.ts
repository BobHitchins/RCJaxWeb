export class content {
	public contentId: number;
	public contentTypeId: number;
	public contentText: string;
	public contentLink: string;
	public contentDate: string; 
	public isActive: boolean;
	public updatedBy: string;
	public updatedDateTime: string;
	
	constructor(contentId: number, contentTypeId: number, contentText: string, contentLink: string, contentDate: string, 
				isActive: boolean, updatedBy: string, updatedDateTime: string) {
		this.contentId = contentId;
		this.contentTypeId = contentTypeId;
		this.contentText = contentText;
		this.contentLink = contentLink;
		this.contentDate = contentDate;
		this.isActive = isActive;
		this.updatedBy = updatedBy;
		this.updatedDateTime = updatedDateTime;
	}
}
