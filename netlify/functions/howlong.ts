import { Handler } from "@netlify/functions";
import {HowLongToBeatService} from "howlongtobeat-ts";


const handler: Handler = async (event, context) => {
  const q = event?.queryStringParameters?.['q'];
  if(q) {
    const hltb = new HowLongToBeatService();
    const results = await hltb.search(q);
    return {
      statusCode: 200, body: JSON.stringify(results)
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify([])
  };
};

export { handler };
