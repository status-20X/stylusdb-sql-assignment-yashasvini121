const fs = require('fs');
const csv = require('csv-parser');

/**
 * @function readCSV
 * @description Reads a CSV file and returns its contents as an array of objects.
 * @param {string} filePath - The path to the CSV file.
 * @returns {Promise<Array<Object>>} A promise that resolves with the array of objects representing the CSV data.
 */
const readCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err) {
        reject(err); // Error while getting file stats
      } else if (stats.size === 0) {
        reject(new Error('File is empty'));
      } else {
        const results = [];
        fs.createReadStream(filePath)
          .pipe(csv())
          .on('data', (data) => results.push(data))
          .on('end', () => {
            resolve(results);
          })
          .on('error', (error) => {
            reject(error);
          });
      }
    });
  });
};

module.exports = readCSV;
