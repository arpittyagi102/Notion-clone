<script>
    import { pagesData } from "../store";
    import { pageSelected } from "../store";

    $: allData = $pagesData;
    $: selectedData = allData.find(findData => findData.id == $pageSelected);

    function handleTitleChange(e){
        selectedData.title = e.target.value;
        $pagesData = $pagesData;
    }

    function handleContentChange(e){
        selectedData.content = e.target.innerText;
        $pagesData = $pagesData;
    }

    function debug(){
        console.log({
            selectedData,
            $pagesData
        })
    }
</script>

<div class="flex flex-col grow p-32 px-48">
    <input 
        class=" bg-transparent text-4xl w-full font-bold focus:outline-none " 
        value={selectedData?.title}
        on:blur={handleTitleChange}
    />
    <textarea
        class="text-lg pt-5 bg-transparent focus: outline-none"
        rows="10"
        bind:value = {selectedData.content}
    />
        
    <button on:click={()=>{debug()}}>
        Debug
    </button>
</div>
 