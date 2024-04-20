const readCSV = require('../../src/csvReader');

test('Read CSV File', async () => {
    const data = await readCSV('sample-data/sample.csv');
    // checking if data is of type Array
    if (!Array.isArray(data)) {
        throw new Error('Output Data of readCSV is not of Array Type.');
    }

    // checking if data is not empty
    if (data.length === 0) {
        throw new Error('Output Data of readCSV is empty.');
    }
});