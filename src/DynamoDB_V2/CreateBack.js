const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB();

/* const params = {
    BackupName:'employeebackup',
    TableName:'employee'
}

dynamodb.createBackup(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
}) */



//delete backup
const params = {
    BackupArn:'arn:aws:dynamodb:us-east-1:651366224884:table/employee/backup/01647249505099-567fb89f'
}

dynamodb.deleteBackup(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})

