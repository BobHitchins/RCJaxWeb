export class contentType {
	public contentTypeId: number;
	public contentTypeName: string;
	public contentTypeDescription: string;
	public updatedBy: string;
	public updatedDateTime: string;
	
	constructor(contentTypeId: number, contentTypeName: string, contentTypeDescription: string, updatedBy: string, updatedDateTime: string) {
		this.contentTypeId = contentTypeId;
		this.contentTypeName = contentTypeName;
		this.contentTypeDescription = contentTypeDescription;
		this.updatedBy = updatedBy;
		this.updatedDateTime = updatedDateTime;
	}
}
