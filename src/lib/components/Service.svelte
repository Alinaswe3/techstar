<script lang="ts">
	export let serviceName: string = 'Shoes';
	export let serviceDescription: string = 'If a dog chews shoes whose shoes does he choose?';

	export let serviceImg: string = '';
</script>

<div class=" card w-full border-2 border-solid border-primary bg-base-100 shadow-lg">
	<figure class="h-1/2">
		<img class="h-full w-full" src={serviceImg} alt="Service provided" />
	</figure>
	<div class="card-body gap-1">
		<h2 class="section-heading card-title text-2xl">{serviceName}</h2>
		<p class="long-text">{serviceDescription}</p>
	</div>
</div>
