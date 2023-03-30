const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB();

const params = {
    Key: {
        "id": {
            S:'2'
        }
    }, 
    TableName:'employee'
}

dynamodb.getItem(params, function(err, data) {
    if(err) {
        console.log(err, err.stack);
        
    } else {
        console.log(data['Item']);
        
    }
})