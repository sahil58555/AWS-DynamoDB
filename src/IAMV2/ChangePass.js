const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
    NewPassword:'Mypassword1',
    OldPassword:'oAiq093nvqBh#p['
}

iam.changePassword(params, (err, data) => {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})