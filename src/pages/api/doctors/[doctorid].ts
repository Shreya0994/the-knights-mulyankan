// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Doctors } from "@/data/doctors";
import { IDoctor, Doctor } from "@/library/doctors";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IDoctor>
) {
  const { doctorid } = req.query;

  if (doctorid) {
    res
      .status(200)
      .json(Doctors.filter((doctor) => doctor.id.toString() === doctorid)[0]);
  } else {
    res.status(404);
  }
}
