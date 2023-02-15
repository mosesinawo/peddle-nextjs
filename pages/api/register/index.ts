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

     if (req.method === 'GET'){
         try{
          console.log('CONNECTING TO MONGO')
          await connectDB()
          console.log('CONNECTED SUCESSFUL')
          const test = await Details.find()
          console.log('FETCHING DATA')
          res.status(200).json(test)
         }catch(error){
          res.status(500).json({error})
         }
              }else if(req.method === 'POST'){
               try {
                    const  {_id, email,password,address,country} = req.body
                    console.log('CONNECTING TO MONGO')
                    await connectDB()
                    console.log('CONNECTED SUCESSFUL')
                 
                    console.log('CREATING DATA')
                    const test = await Details.create(req.body)
                    console.log('CREATED DATA')
                    res.json({test})
                 
                    
               } catch (error) {
                    res.json({error})
                    
               }
          }

}


   


//mongodb+srv://Moses6318:<password>
//@mosescluster.q6wrukd.mongodb.net/?retryWrites=true&w=majority