const fs = require('fs')

const files = [...fs.readdirSync(__dirname+'/files')]

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'file.csv',
    header: [
        {id: 'cod', title:''},
    ]
});
 
const records = []

files.forEach((file) => {
    const typeFile = file.split('.')[1]
    

    records.push({
        cod:file.split(`.${typeFile}`).slice(0,1),
        
    })

    console.log(file)
})


async function createCsv(){
    await csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
}
 
createCsv()