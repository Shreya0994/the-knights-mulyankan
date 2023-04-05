
import { departmentData } from "@/data/departmentsingle";
import { IDepartmentSingle } from "@/library/departmentsingle";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IDepartmentSingle>
) {
    // const companyInfo = ;
    res.status(200).json(departmentData);
}