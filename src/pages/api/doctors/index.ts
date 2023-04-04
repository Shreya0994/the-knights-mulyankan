// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Doctors } from "@/data/doctors";
import { IDoctor } from "@/library/doctors";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IDoctor[]>
) {
  const { department } = req.query;
  // if department is passed in the query string, filter the list of doctors based on that department and send send in the response
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
    // If not department provided, send list of all doctors.
    res.status(200).json(Doctors);
  }
}
