import { Handler } from "@netlify/functions";
import {HowLongToBeatService} from "howlongtobeat";

const handler: Handler = async (event, context) => {
  const q = event?.queryStringParameters?.['q'];
  if(q) {
    const service = new HowLongToBeatService();
    const results = await service.search(q);
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
