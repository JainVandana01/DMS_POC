import type { NextApiRequest, NextApiResponse } from "next"

//API urls
//import { BASE_URL } from "../../config"

import { basicFetch } from "../../api/fetchFunction"


export default async function handler (req:NextApiRequest, res:NextApiResponse) {

    const data = await basicFetch('http://127.0.0.1:3001/');
    res.status(200).json(data)
    
}