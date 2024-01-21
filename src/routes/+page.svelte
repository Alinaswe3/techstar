<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Education from '$lib/components/Educations.svelte';
	import Services from '$lib/components/Services.svelte';
	import Statistics from '$lib/components/Statistics.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
</script>

<Navbar />
<main class="container relative grid gap-16 px-10 pt-20 lg:px-2">
	<div class="custom-overlay"></div>
	<Hero />
	<About />
	<Skills />
	<Education />
	<Services />
	<Statistics />
	<Reviews />
</main>

<style>
	.custom-overlay {
		z-index: -99;
		position: absolute;
		width: 100%;
		height: 100%;
		top: -1rem;
		left: 0;
		opacity: 0.022;
		background: linear-gradient(135deg, #0000 18.75%, #00e472 0 31.25%, #0000 0),
			repeating-linear-gradient(45deg, #00e472 -6.25% 6.25%, #313536 0 18.75%);
		background-size: 64px 64px;
	}
</style>
