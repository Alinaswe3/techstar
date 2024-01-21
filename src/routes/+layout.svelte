<script>
	import '../app.pcss';
	import { onMount } from 'svelte';
	import { smoothScroll } from '$lib/components/smoothScroll';

	onMount(() => {
		smoothScroll();
	});
</script>

<slot />
