/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next"


export default function(req: NextApiRequest, res: NextApiResponse) {
    console.log('evento recebido')

    return res.status(200).json({ok: true})
}
