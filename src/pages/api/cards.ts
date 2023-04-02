import { CardsItems } from "@/data/cards";
import { Card, InfoCard } from "@/library/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Card[]>
) {

    res.status(200).json(CardsItems);
}
