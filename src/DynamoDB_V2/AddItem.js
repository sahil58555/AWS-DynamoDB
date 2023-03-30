const AWS = require('aws-sdk');

//AWS.config.update({'region':'us-east-1'})

const dyanmodb = new AWS.DynamoDB();


const params = {
    TableName:'employee',
    Item: {
        'id':{
            'S':'2'
        },
        'name':{
            'S':'john'
        },

        'age': {
            'S':'20'
        }
    }
}

dyanmodb.putItem(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})