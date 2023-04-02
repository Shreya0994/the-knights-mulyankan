// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { servicecardInformation } from "@/data/servicecard-information";
import { IServiceCardInformation } from "@/library/servicecard";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IServiceCardInformation[]>
) {
  // const companyInfo = ;
  res.status(200).json(servicecardInformation);
}
