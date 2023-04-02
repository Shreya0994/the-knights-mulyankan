export interface IDoctor {
  id: number;
  image: string;
  name: string;
  department: string;
  subHeading: string;
}

export class Doctor implements IDoctor {
  constructor(
    public id: number,
    public image: string,
    public name: string,
    public department: string,
    public subHeading: string
  ) {}
}
