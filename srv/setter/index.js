const cdsCompile = require('@sap/cds/lib/compile/cds-compile');
const { v4: uuidv4 } = require('uuid');

async function InsertNumber(first, second) {
    const  txInsert = await cds.transaction();

    if (second === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    const result = first / second;

    await txInsert.begin();
    await txInsert.run(INSERT.into('ACN_BTPBOOTCAMP_DIVISION_NUMBERS').entries({
        ID: uuidv4(),
        firstNumber: first,
        secondNumber: second,
        quotient: result
    }))
    await txInsert.commit();

    return 'Successfully Inserted';
};

module.exports = {
    InsertNumber
}