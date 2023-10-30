<script>
    import { pagesData } from "../store";
    import { pageSelected } from "../store";

    $: allData = $pagesData;
    $: selectedData = allData.find(findData => findData.id == $pageSelected);

    function handleTitleChange(e){
        console.log(e.target);
        selectedData.title = e.target.value;
        $pagesData = $pagesData
    }

    function handleContentChange(e){
        selectedData.content = e.target.innerText;
    }

</script>

<div class="flex flex-col grow p-32 px-48">
    <strong>
        <input 
            class=" bg-transparent text-4xl focus:outline-none w-full" 
            value={selectedData.title}
            on:blur={handleTitleChange}
        />
    </strong>
    <div
        class="text-lg pt-5 focus: outline-none"
        contenteditable
        on:blur={handleContentChange}
    >
        {selectedData.content}
    </div>
    <button on:click={()=>{console.log(selectedData)}}>
        Debug
    </button>
</div>
