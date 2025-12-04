const cds = require('@sap/cds');
const { InsertNumber } = require('../srv/setter/index');
const { FetchResult } = require('../srv/getter/index');
const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');

module.exports = async srv => {
    // Before creating students validate age
    srv.before('CREATE', 'Students', req => {
        if (req.data.age < 0){
            req.reject(400, 'Age must be a positive number');
    }});

    // Before updating a student, validate age if present
    srv.before('UPDATE', 'Students', req => {
        if ('age' in req.data && req.data.age < 0) {
            req.reject(400, 'Age must be  positive');
        }
    });

    //Optional log before deleting
    srv.before('DELETE', 'Students', req => {
        console.log(`Deleting student with ID: ${req.data.ID}`);
    });

    srv.on('insertNumber', async (req) => {
        const { first, second }  = req.data;
        const result = await InsertNumber(first, second);
        return result; // Returns a string
    })

    srv.on('getDivisionResult', async () => {
        const result = await FetchResult();
        return result;
    })
};