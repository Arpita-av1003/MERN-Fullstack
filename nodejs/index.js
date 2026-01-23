
const fs = require('fs');

// Read the JSON file
const jsonDataBefore = require('./data.json');

// Print JSON data before updating
console.log('Before updating JSON:');
console.log(JSON.stringify(jsonDataBefore, null, 2));

// Update the data
jsonDataBefore[0].programmingLanguage.push("JavaScript");
jsonDataBefore[1].programmingLanguage.push("JavaScript");

// Write the updated data back to the JSON file
fs.writeFileSync('./data.json', JSON.stringify(jsonDataBefore, null, 2));

// Print JSON data after updating
console.log('\nAfter updating JSON:');
console.log(JSON.stringify(jsonDataBefore));

console.log('\nData updated successfully.');
//File path: /index.js

const fs = require('fs');

// Define the file path
const filePath = 'data.json';

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    
    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Display the original data
        console.log('Before updating JSON:');
        console.log(jsonData);

        // Update the data
        jsonData.forEach(item => {
            item.programmingLanguage.push('JavaScript');
        });

        // Display the updated data
        console.log('\nAfter updating JSON:');
        console.log(jsonData);

        // Write the updated data back to the file
        fs.writeFile(filePath, JSON.stringify(jsonData), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('\nData updated successfully.');
        });
    } catch (error) {
        console.error('Error parsing JSON data:', error);
    }
});
// Node.js program to demonstrate the 
// fsPromises.writeFile() method 

// Import the filesystem module 
const fs = require('fs');
const fsPromises = require('fs').promises;
let data = "This is a file containing"
        + " a collection of movies.";

(async function main() {
    try {
        await fsPromises.writeFile(
                "movies.txt", data)

        console.log("File written successfully");
        console.log("The written file has"
            + " the following contents:");

        console.log("" + 
            fs.readFileSync("./movies.txt"));

    } catch (err) {
        console.error(err);
    }
})();
// Node.js program to demonstrate the 
// fsPromises.writeFile() method 

// Import the filesystem module 
const fs = require('fs');
const fsPromises = require('fs').promises;
let data1 = "This is a file containing"
        + " a collection of books.";

(async function main() {
    try {

        await fsPromises.writeFile(
                "books.txt", data, {
            encoding: "utf8",
            flag: "w",
            mode: 0o666
        });

        console.log("File written successfully\n");
        console.log("The written has the "
                + "following contents:");

        console.log("" + 
            fs.readFileSync("books.txt"));
    }
    catch (err) {
        console.error(err);
    }
})();