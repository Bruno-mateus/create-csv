const fs = require('fs')

const files = [...fs.readdirSync(__dirname+'/files')]

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'file.csv',
    header: [
        {id: 'cod', title: 'codigo produto'},
    ]
});
 
const records = []

files.forEach((file) => {

    records.push({
        cod:file.split('.jpg').slice(0,1)
    })     

})


async function createCsv(){
    await csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
}
 
createCsv()