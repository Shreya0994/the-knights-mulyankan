export interface IServiceCardInformation {
    id:number
    image: string;
    title: string;
    description: string;
  }
  
  export class ServiceCardInformation implements IServiceCardInformation {
    constructor(
    public id: number,
    public image: string,
    public title: string,
    public description: string
    ){}
  }