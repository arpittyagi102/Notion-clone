<script>
	import '../app.postcss';
	import Navbar from './Navbar.svelte';
</script>

<div class="flex">
	<Navbar/>
	<slot />
</div>
