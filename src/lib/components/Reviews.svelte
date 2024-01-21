<script>
	import Review from '$lib/components/Review.svelte';
</script>

<section class="mt-10">
	<h3 class="section-title">what people saying</h3>
	<h2 class="section-heading mt-8">Clients</h2>
	<div class="responsive-grid">
		<Review
			clientImg="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			clientName="Noel Barber"
			serviceOffered="Django App"
		>
			PHP, ASP, Ruby, Python, etc. Medium skill in database/server work, medium skill in JavaScript,
			light skill in HTML.
		</Review>
		<Review
			clientImg="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			clientName="Darla Stevenson"
			serviceOffered="Website"
		>
			PHP, ASP, Ruby, Python, etc. Medium skill in database/server work, medium skill in JavaScript,
			light skill in HTML.
		</Review>
		<Review
			clientImg="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			clientName="Francis Wolfe"
			serviceOffered="Web applications"
		>
			PHP, ASP, Ruby, Python, etc. Medium skill in database/server work, medium skill in JavaScript,
			light skill in HTML.
		</Review>
	</div>
</section>

<style>
	.responsive-grid {
		justify-content: space-between;
		overflow: hidden;
		margin: 2rem auto;
		padding: 2.4rem 5px;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, max-content));
		gap: 2rem;
	}
</style>
