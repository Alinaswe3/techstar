<script lang="ts">
	export let serviceName: string = 'Shoes';
	export let serviceDescription: string = 'If a dog chews shoes whose shoes does he choose?';
</script>

<div class=" card w-full border-2 border-solid border-primary bg-base-100 shadow-lg">
	<figure>
		<img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
	</figure>
	<div class="card-body">
		<h2 class="section-heading card-title text-2xl">{serviceName}</h2>
		<p class="long-text">{serviceDescription}</p>
	</div>
</div>
