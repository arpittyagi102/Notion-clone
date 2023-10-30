import { writable } from "svelte/store";

export const pageSelected = writable(0);
export const pagesData = writable([{
        "id":0,
        "emoji":"🌞",
        "title":"The first page",
        "content":"Type here"
    },
    {
        "id":1,
        "emoji":"💗",
        "title":"The second page",
        "content":"Type here"
    }]);
