//Made using AWS tutorial for full stack app
import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
    name: "products",
},
);