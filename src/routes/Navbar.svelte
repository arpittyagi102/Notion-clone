<script>
	import { page } from "$app/stores";
    import { pagesData } from "./store.js";
    import { pageSelected } from "./store.js";
    import { createEventDispatcher } from "svelte";
    import { goto } from "$app/navigation";

    let username = 'Arpit Tyagi';
    let selectedId = 0;
    let idCounter = 2;
    
    function createNewPage(){
        $pagesData=[...$pagesData,{
                id : idCounter++,
                emoji:'📂',
                title:'Untitled',
                content:'Type here'
             }]
            //console.log($pagesData);
        }

    function handleNavigation(page){
        $pageSelected = page.id;
        console.log("pagesData is " , $pagesData);
        goto('/'+page.title);
    }


    </script>

<nav class="h-screen w-48 p-3" style="background-color: #202020; width:250px">
    <p>🧑‍💼 {username}'s Notion</p>
    
    <div class="mt-4 flex flex-col gap-1 opacity-60">
        <button class="ps-2 rounded-lg text-left hover:bg-gray-700 cursor-pointer">
            <img class="inline" src='https://img.icons8.com/ios-filled/ffffff/20/search--v1.png' alt="icon"/>
            <span> Search</span>
        </button>
        <button class="ps-2 rounded-lg text-left hover:bg-gray-700 cursor-pointer">
            <img class="inline" src='https://img.icons8.com/windows/ffffff/20/clock--v1.png' alt="icon"/>
            <span> Updates</span>
        </button>
        <button class="ps-2 rounded-lg text-left hover:bg-gray-700 cursor-pointer">
            <img class="inline" src='https://img.icons8.com/material-outlined/ffffff/20/settings--v1.png' alt="icon"/>
            <span> Settings & members</span>
        </button>
        <button class="ps-2 rounded-lg text-left hover:bg-gray-700 cursor-pointer" on:click={createNewPage}>
            <img class="inline" src='https://img.icons8.com/ios-glyphs/ffffff/20/plus--v1.png' alt="icon"/>
            <span> New Page</span>
        </button>
    </div>
    
    <div class="mt-4 flex flex-col gap-1">
        {#each $pagesData as page}
        <button class={`ps-2 rounded-lg text-left hover:bg-gray-700 cursor-pointer ${page.id==$pageSelected ? "bg-gray-700" : "opacity-60"}`} on:click={handleNavigation(page)}> 
            > {page.emoji} {page.title}
        </button>
        {/each}
    </div>
    <button on:click={()=>{$pagesData[0].title="Changed"}}>delete</button>
</nav>