// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { companyInformation } from "@/data/company-information";
import { ICompanyInformation } from "@/library/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICompanyInformation>
) {
  // const companyInfo = ;
  res.status(200).json(companyInformation);
}
