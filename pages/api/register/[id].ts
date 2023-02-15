import type { NextApiRequest, NextApiResponse } from 'next'
import {data} from "../../../dbase"
import connectDB from '../../../config/connectDB';
import Details from "../../../models/registerModel";

type Data = {
        // id: string;
        // text: string;
        // body: string;
}



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    
              console.log('CONNECTING TO MONGO')
              await connectDB()
              console.log('CONNECTED SUCESSFUL')
              const { id } = req.query
              const test = await Details.find()
             const filtered:any = test.filter((user:any) => user.id === id)
             console.log(filtered)
              console.log('FETCHING ID')
              if (filtered.length > 0) {
                   return res.status(200).json(filtered)
               }else{
                res.status(404).json(`User not found`)
             }
        
}