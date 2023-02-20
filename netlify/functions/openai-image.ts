import { Handler } from "@netlify/functions";
import axios, {AxiosHeaders} from 'axios';
import * as dotenv from 'dotenv';

const handler: Handler = async (event, context) => {
  dotenv.config();
  const apiKey = process.env?.['OPENAI_API_KEY'];

  const headers: AxiosHeaders = new AxiosHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${apiKey}`);

  const plainUrl = 'https://api.openai.com/v1/images/generations';
  const plainRes = await axios.post(plainUrl, event.body, {headers});

  return {
    statusCode: 200,
    body: JSON.stringify(plainRes.data)
  };
};

export { handler };
