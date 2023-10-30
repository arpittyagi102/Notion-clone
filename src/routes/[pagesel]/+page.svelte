<script>
    import { page } from "$app/stores";
    import { pagesData } from "../store";
    import { pageSelected } from "../store";

    const pagesel = $page.params.pagesel;
    $: allData = $pagesData;
    $: selectedData = allData.find(findData => findData.id == $pageSelected);

    function handleTitleChange(e){
        selectedData.title = e.target.value;
        $pagesData = $pagesData
        debug();
    }

    function debug(){
        console.log("all data is " , allData);
        console.log("pagesData is " , $pagesData);
    }

</script>

<div class="flex justify-center items-center grow">
    <input 
        class=" bg-transparent text-5xl focus:outline-none" 
        value={selectedData.title}
        on:blur={handleTitleChange}
    >
</div>
