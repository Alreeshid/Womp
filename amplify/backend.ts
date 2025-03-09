import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';

import * as iam from "aws-cdk-lib/aws-iam";
import {PolicyStatement} from "aws-cdk-lib/aws-iam";

//custom functions:
import { listUsers } from './data/list-users/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  storage,
  listUsers,
});


const lambdaFunction = backend.listUsers.resources.lambda;
lambdaFunction.role?.attachInlinePolicy(
 new iam.Policy(backend.auth.resources.userPool, "AllowListUsers", {
  statements: [
   new iam.PolicyStatement({
    actions: ["cognito-idp:ListUsers"],
    resources: [backend.auth.resources.userPool.userPoolArn],
  }),
  ],
 })
);