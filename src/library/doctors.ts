import { ParsedUrlQuery } from "querystring";

export interface IDoctor {
  id: number;
  image: string;
  name: string;
  department: string;
  subHeading: string;
  description: string;
  education: Array<Education>;
  skills: string;
  expertise: Array<string>;
  weekday: string;
  weekdayTime: string;
  saturday: string;
  saturdayTime: string;
  sundayday: string;
  sundayTime: string;
  telephone: string;
}

export class Doctor implements IDoctor {
  constructor(
    public id: number,
    public image: string,
    public name: string,
    public department: string,
    public subHeading: string,
    public description: string,
    public education: Array<Education>,
    public skills: string,
    public expertise: Array<string>,
    public weekday: string,
    public weekdayTime: string,
    public saturday: string,
    public saturdayTime: string,
    public sundayday: string,
    public sundayTime: string,
    public telephone: string
  ) {}
}

export type Education = {
  year: string;
  degree: string;
  description: string;
};

export interface Params extends ParsedUrlQuery {
  doctorid: string;
}
