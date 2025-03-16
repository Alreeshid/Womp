import type { Handler } from "aws-lambda";
import { CognitoIdentityProviderClient, ListUsersCommand } from "@aws-sdk/client-cognito-identity-provider";

export const handler: Handler = async (event, context) => {
    //function code needs to grab the list of all cognito users
    const client = new CognitoIdentityProviderClient()
    const input = { //params for lisitng a user
        "UserPoolId": "us-east-1_Gwm05DQ2D",
        "AttributesToGet": [
            "email",
            "sub", //sub seems to be ther User ID
            "userProfits",
            "userLat",
            "userLong"
        ],//array of params to be fetched from the user Identity
    }

    const command = new ListUsersCommand(input);
    const response = await client.send(command);

    return response; //should be an object with all users
}