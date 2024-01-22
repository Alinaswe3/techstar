<script>
	import '../app.pcss';
	import { onMount } from 'svelte';
	import { addSmoothScroll } from '$lib/components/smoothScroll';

	onMount(() => {
		addSmoothScroll('.js-smooth');
	});
</script>

<slot />
