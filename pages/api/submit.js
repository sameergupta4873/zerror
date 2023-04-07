import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis"; 


export default async function handler(req,res){
    if(req.method !== 'POST'){
        return res.status(405).send({message: 'Only POST request are allowed.'})
    }

    const body = req.body

    try {
        const auth = new google.auth.GoogleAuth(
            {
                credentials:{
                    client_email: process.env.GOOGLE_SHEET_EMAIL,
                    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
                },
                scopes: [
                    'https://www.googleapis.com/auth/drive',
                    'https://www.googleapis.com/auth/drive.file',
                    'https://www.googleapis.com/auth/spreadsheets'
                ]
            });

            const sheets = google.sheets({
                auth,
                version: 'v4'
            });

            const response = await sheets.spreadsheets.values.append({
                spreadsheetId: process.env.GOOGLE_SHEET_ID,
                range: 'A1:I1',
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [
                        [body.name, body.company, body.city, body.state, body.country, body.enquiry, body.email, body.num, body.message]
                    ]
                }
            });

            return res.status(200).json({
                data: response.data
            })
    } catch (e) {
        console.error(e)
        return res.status(500).json({
            message:'Something went wrong'
        })
    }
}