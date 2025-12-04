const cds = require('@sap/cds');
const { SELECT } = require('@sap/cds/lib/ql/cds-ql');

async  function FetchResult() {
    try {

        const data = await SELECT.from('ACN_BTPBOOTCAMP_DIVISION_NUMBERS');

        // Take the first entry (you can change this logic if you want all rows)
        const row = data[0]

        // Return the fetched values
        return {
            Process: 'Division',
            FirstNumber: row.FIRSTNUMBER,
            SecondNumber: row.SECONDNUMBER,
            Result: row.QUOTIENT
        };
        
    }  catch (error) {
        return { MESSAGE: error.message };
    }
}

module.exports = {
    FetchResult
}