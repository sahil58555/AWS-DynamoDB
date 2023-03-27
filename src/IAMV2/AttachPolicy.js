const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
    PolicyArn:"arn:aws:iam::574520967410:policy/newuserfullpolicy",
    UserName:"rohan"
}


iam.attachUserPolicy(params, (err, data) => {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})