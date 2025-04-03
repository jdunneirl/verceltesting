// pages/api/ckbox.ts

import jwt from "jsonwebtoken";

import type { NextApiRequest, NextApiResponse } from "next";


const CKBOX_ENVIRONMENT_ID = process.env.CKBOX_ENVIRONMENT_ID;
const CKBOX_ACCESS_KEY = process.env.CKBOX_ACCESS_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
    if ( CKBOX_ACCESS_KEY && CKBOX_ENVIRONMENT_ID) {
      

        const payload = {
            aud: CKBOX_ENVIRONMENT_ID,
            sub: 10,
            auth: {
                ckbox: {
                    role: 10,
                },
            },
        };

        res.send(
            jwt.sign(payload, CKBOX_ACCESS_KEY, {
                algorithm: "HS256",
                expiresIn: "1h",
            })
        );
    } else {
        res.status(401);
    }

    res.end();
}
