import {Handler} from "@netlify/functions";
import {google, sheets_v4} from 'googleapis';
import * as dotenv from "dotenv";
import * as process from "process";
import Schema$Spreadsheet = sheets_v4.Schema$Spreadsheet;
import {TromboneChampSong} from "../../src/app/models/trombone-champ-song";

const handler: Handler = async (event, context) => {
  dotenv.config();
  const apiKey = process.env?.['GOOGLE_API_KEY'];
  const sheetId = process.env?.['SPREADSHEET_ID'];
  const range = process.env?.['SHEET_RANGE'] || 'By Release!A4:I';

  const sheets = google.sheets({version: 'v4', auth: apiKey});
  const fields = 'sheets/data/rowData/values/formattedValue,sheets/data/rowData/values/hyperlink';
  const response = await sheets.spreadsheets.get({spreadsheetId: sheetId, includeGridData: true, ranges: [range], fields});
  const spreadsheet = response.data;
  const extracted = extractSongData(spreadsheet);

  return {
    statusCode: 200,
    body: JSON.stringify(extracted)
  };
};

function extractSongData(spreadsheet: Schema$Spreadsheet): TromboneChampSong[] | undefined {
  // assume first sheet is what we want
  const sheet = spreadsheet.sheets?.[0];
  const gridData = sheet?.data?.[0];
  const rows = gridData?.rowData;
  return rows?.map(row => {
    const values = row.values;
    return {
      name: values?.[0]?.formattedValue,
      artist: values?.[1]?.formattedValue,
      creator: values?.[2]?.formattedValue,
      length: values?.[3]?.formattedValue,
      starRanking: values?.[4]?.formattedValue,
      bpm: values?.[5]?.formattedValue,
      genre: values?.[6]?.formattedValue,
      link: values?.[7]?.hyperlink,
    }
  });
}

export { handler };
