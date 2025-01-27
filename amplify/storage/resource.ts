//Made using AWS tutorial for full stack app
import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
    name: "amplifyNotesDrive",
    access: (allow) => ({
        "media/{entity_id}/*": [
            allow.entity("identity").to(["read", "write", "delete"])
        ],
    }),
});