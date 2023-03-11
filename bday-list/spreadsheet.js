const {GoogleSpreadsheet} = require('google-spreadsheet');
const creds = require('./client_secret.json');

const doc = new GoogleSpreadsheet('1Eanctv_Wef8hQuV8DHs0iZjRClVRouhtKF3eWhauAF8');

async function accessSpreadsheet(){
    await doc.useServiceAccountAuth({
        client_email: creds.client_email,
        private_key: creds.private_key,
    });

    await doc.loadInfo();
    console.log(doc.title);

    const sheet = doc.sheetsByIndex[0];
    console.log(`Title ${sheet.title}, Row: ${sheet.rowCount}`);
}

accessSpreadsheet();