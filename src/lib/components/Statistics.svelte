<script>
	import Statistic from '$lib/components/Statistic.svelte';
	import Icon from '@iconify/svelte';
</script>

<section
	class="responsive-grid my-14 rounded-3xl bg-base-100 shadow-sm shadow-primary transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary"
>
	<Statistic count="25" name="Clients">
		<Icon class="h-full w-full" icon="bi:people" />
	</Statistic>
	<Statistic count="2" name="Projects">
		<Icon class="h-full w-full" icon="pajamas:work" />
	</Statistic>
	<Statistic count="10" name="Sales">
		<Icon class="h-full w-full" icon="tdesign:money" />
	</Statistic>
</section>

<style>
	.responsive-grid {
		justify-content: space-around;
		overflow: hidden;
		margin: 2rem auto;
		width: 90%;
		padding: 40px 20px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(16rem, max-content));
		gap: 4rem;
	}
</style>
