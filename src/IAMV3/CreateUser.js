import {IAMClient, CreateUserCommand, GetUserCommand} from '@aws-sdk/client-iam';
const iamClient = new IAMClient();

const params = {
    UserName: 'test'
}

const run = async() => {
    try {
        const data = await iamClient.send(new GetUserCommand(params))
        console.log('User already exists');
        return data;

    } catch(e) {
        try {
            const result = await iamClient.send(new CreateUserCommand(params));
            console.log('User created', result);
            return result

        } catch(e) {
            console.log(e);
        }
    }
}

run();