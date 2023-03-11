const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');

const creds = require('./client-secret.json');

async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet('');
}

