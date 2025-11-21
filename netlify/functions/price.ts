import { Handler } from "@netlify/functions";
import axios from 'axios';
import * as dotenv from 'dotenv';
import {PriceInfo} from "../../src/app/models/price-info";

// Interfaces for the search response
export interface GameAssets {
  banner145?: string;
  banner300?: string;
  banner400?: string;
  banner600?: string;
  boxart?: string;
}

export interface GameSearchResult {
  id: string;
  slug: string;
  title: string;
  type: string;
  mature: boolean;
  assets: GameAssets;
}

const handler: Handler = async (event, context) => {
  dotenv.config();
  const apiKey = process.env?.['API_KEY'];

  const title = event.queryStringParameters?.['title'];

  const params = {key: apiKey, title};
  const searchUrl = 'https://api.isthereanydeal.com/games/search/v1';
  const searchResponse = await axios.get<GameSearchResult[]>(searchUrl, {params});

  const gameIds: string[] = searchResponse.data.map((g: GameSearchResult) => g.id);

  if(gameIds?.length) {
    const priceUrl = 'https://api.isthereanydeal.com/games/prices/v3';
    const priceParams = {key: apiKey};
    const priceRes = await axios.post<PriceInfo[]>(`${priceUrl}?key=${apiKey}`, gameIds);

    return {
      statusCode: 200,
      body: JSON.stringify(priceRes.data)
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({})
  };
};

export { handler };
