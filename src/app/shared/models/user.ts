export class user {
	public userId: number;
	public firstName: string;
	public lastName: string;
	public primaryEmail: string;
	public alternateEmail: string;
	public isAdmin: boolean;
	public isTeamLead: boolean;
	public isSpiritualDirector: boolean;
	public isActive: boolean;
	public updatedBy: string;
	public updatedDateTime: string;
	
	constructor(userId: number, firstName: string, lastName: string, primaryEmail: string, alternateEmail: string, isAdmin: boolean, 
				isTeamLead: boolean,isSpiritualDirector: boolean, isActive: boolean, updatedBy: string, updatedDateTime: string) {
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.primaryEmail = primaryEmail;
		this.alternateEmail = alternateEmail;
		this.isAdmin = isAdmin;
		this.isTeamLead = isTeamLead;
		this.isSpiritualDirector = isSpiritualDirector;
		this.isActive = isActive;
		this.updatedBy = updatedBy;
		this.updatedDateTime = updatedDateTime;
	}
}