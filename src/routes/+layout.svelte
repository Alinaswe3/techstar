<script>
	import '../app.pcss';
	import { onMount } from 'svelte';
	import { addSmoothScroll } from '$lib/components/smoothScroll';

	onMount(() => {
		addSmoothScroll('.js-smooth');
	});
</script>

<svelte:head>
	<title>TechStar - Focus more on delivery than profits</title>
	<meta name="description" content="TechStar is ..." />
	<meta name="robots" content="index, follow" />
</svelte:head>

<slot />
