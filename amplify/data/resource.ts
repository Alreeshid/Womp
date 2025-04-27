import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

import { listUsers } from '../functions/list-users/resource';
import { list } from 'aws-amplify/storage';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Products: a
    .model({
      //productID: a.id(),
      sellerName: a.string(),
      productName: a.string(),
      productDescription: a.string(),
      productImage: a.string(), //this will need to be an HREF
      purchasedPrice: a.float(),
      listPrice: a.float(),
      condition: a.string(),
      tags: a.string(),
      listedAt: a.datetime(),
      isFeatured: a.boolean().default(false),
      hasBeenSold: a.boolean().default(false)
    })
    .authorization((allow) => [allow.owner(), allow.guest()]), //added the guest portion
  Reviews: a
  .model({
    userID: a.id(),
    userName: a.string(),
    reviewText: a.string(),
    timestamp: a.datetime()
  })
  .authorization((allow) => [allow.authenticated()]),
  Tickets: a
  .model({
    userID: a.id(),
    userName: a.string(),
    userEmail: a.string(),
    ticketSubject: a.string(),
    ticketRating: a.integer(),
    ticketContent: a.string(),
    timestamp: a.datetime()
  })
  .authorization((allow) => [allow.guest()]),
  Tags: a
  .model({
    text: a.string(),
    isActive: a.boolean().default(true)
  })
  .authorization((allow) => [allow.guest()]),

  listAllUsers: a
  .query()
  .returns(a.string())
  .handler(a.handler.function(listUsers))
  .authorization((allow) => [allow.guest()]),
/*
  Purchase: a
  .mutation()
  .arguments({
    productID: a.string(),
    userID: a.string()
  })
  .returns(a.ref("Post")
  .authorization(allow => [allow.authenticated()])
)
  */
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
