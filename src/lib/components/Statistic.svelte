<script lang="ts">
	export let count: string = '0';
	export let name: string = 'unknown';
</script>

<div class="flex flex-col items-center gap-3 lg:flex-row">
	<div
		class="min-h-24 min-w-24 overflow-hidden rounded-full border-4 border-dashed border-primary p-4"
	>
		<slot />
	</div>
	<p class="text-4xl">{count}</p>
	<p class="text-3xl">{name}</p>
</div>
