<script>
	import Service from '$lib/components/Service.svelte';
</script>

<section id="services" class="mt-20 flex flex-col gap-6 lg:mt-4 lg:content-center">
	<h3 class="section-title text-center">more about me</h3>
	<h2 class="section-heading mb-8 text-center">Services I offer</h2>
	<div class="services">
		<Service
			serviceName="Entrepreneur"
			serviceImg="/images/tech.webp"
			serviceDescription="Here to provide you the with best devices, at budget friendly prices"
		/>
		<Service
			serviceName="Web Development"
			serviceImg="/images/web.webp"
			serviceDescription="Let me help you build your online presence"
		/>
		<Service
			serviceImg="/images/coming-soon.webp"
			serviceName="Coming soon!"
			serviceDescription="New service to be provided soon!"
		/>
	</div>
</section>

<style>
	.services {
		justify-content: center;
		overflow: hidden;
		padding: 10px;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(16rem, 20rem));
		gap: 4rem;
	}
</style>
