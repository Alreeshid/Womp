import { defineFunction } from "@aws-amplify/backend";

export const listUsers = defineFunction({
    name: "listUsers",
    entry: "./handler.ts"
})