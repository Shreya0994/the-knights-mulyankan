// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { companyInformation, ICompanyInformation } from "@/library/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICompanyInformation>
) {
  const companyInfo = companyInformation;
  res.status(200).json(companyInfo);
}
