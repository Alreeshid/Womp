import { defineAuth } from '@aws-amplify/backend';
import { listUsers } from '../functions/list-users/resource';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  groups: ["Admins", "Users"],
  access: (allow) =>[
    allow.resource(listUsers).to(["manageUsers"])
  ]
});
