import { Handler } from "@netlify/functions";
import axios from 'axios';
import * as dotenv from 'dotenv';

const handler: Handler = async (event, context) => {
  dotenv.config();
  const apiKey = process.env?.['API_KEY'];

  const title = event.queryStringParameters?.['title'];

  const plainParams = {key: apiKey, title};
  const plainUrl = 'https://api.isthereanydeal.com/v02/game/plain/';
  const plainRes = await axios.get(plainUrl, {params: plainParams});

  const plain = plainRes.data.data.plain;

  if(plain) {
    const priceParams = {key: apiKey, plains: plain};
    const priceUrl = 'https://api.isthereanydeal.com/v01/game/prices/';
    const priceRes = await axios.get(priceUrl, {params: priceParams});
    const list = priceRes.data.data[plain].list;
    return {
      statusCode: 200,
      body: JSON.stringify(list)
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({})
  };
};

export { handler };
