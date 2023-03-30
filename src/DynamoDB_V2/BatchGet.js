const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB();


const params = {
    RequestItems: {
        "employee": {
            Keys:[
                {
                    "id": {
                        S:"1"
                    }
                },

                {
                    "id" : {
                        S:"2"
                    }
                },

                {
                    "id": {
                        S:"3"
                    }
                },

                {
                    "id": {
                        S:"4"
                    }
                }
            ]
        }
    }
}

dynamodb.batchGetItem(params, function(err, data) {
    if(err) {
        console.log(err, err.stack);
        
    } else {
        data.Responses.employee.forEach(function(element, index) {
            console.log(element);
            
        })
    }
})