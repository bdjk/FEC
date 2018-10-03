const exec = require('child_process').exec;
const time = require('performance-now');

const command =
  'mongoimport --db mydb --collection Items --type tsv --file data.tsv --ignoreBlanks';
const start = time();

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

const end = time();
