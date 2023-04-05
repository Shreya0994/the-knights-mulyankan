export interface IDepartmentSingle {
    id: number;
    image: string;
    deptname: string;
    description: string;
    longdescription: string;
}

export class Department implements IDepartmentSingle {
    constructor(
        public id: number,
        public image: string,
        public deptname: string,
        public description: string,
        public longdescription: string
    ) { }
}