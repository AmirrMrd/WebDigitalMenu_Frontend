// export class branch {
//     public BranchId: number;
//     public BranchName: string;
//     public BranchIpAddress : string;
//     public BranchPortNumber: string;
//     public BranchDescription : string;
//     public BranchLogoUrl : string;
//     public IsActive : boolean;

//     constructor(branchId: number, branchName: string, branchIpAddress : string, branchPortNumber: string, branchDescription : string, branchLogoUrl : string , isActive : boolean) {
//         this.BranchId = branchId;
//         this.BranchName = branchName;
//         this.BranchIpAddress = branchIpAddress;
//         this.BranchPortNumber = branchPortNumber;
//         this.BranchDescription = branchDescription;
//         this.BranchLogoUrl = branchLogoUrl,
//         this.IsActive = isActive;
// }


// }

export interface branch {
    BranchId: number;
    BranchName: string;
    BranchIpAddress : string;
    BranchPortNumber: string;
    BranchDescription : string;
    BranchIsActive : boolean;
    ImageBase64 : string


}