// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Doctors } from "@/data/doctors";
import { IDoctor } from "@/library/doctors";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IDoctor[]>
) {
  const { department } = req.query;
  if (department) {
    res
      .status(200)
      .json(
        Doctors.filter(
          (d) =>
            d.department.toLowerCase() === department.toString().toLowerCase()
        )
      );
  } else {
    res.status(200).json(Doctors);
  }
}
