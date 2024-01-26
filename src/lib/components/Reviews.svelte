<script>
	import Review from '$lib/components/Review.svelte';
</script>

<section id="reviews" class="mt-10">
	<h3 class="section-title">what people saying</h3>
	<h2 class="section-heading mt-8">Clients</h2>
	<div class="responsive-grid">
		<Review clientImg="/images/chama.webp" clientName="Chama Musonda" serviceOffered="Entreprenuer">
			I recently purchased the Dell XPS laptop from you, and I'm thoroughly impressed with its high
			performance. The sleek design, powerful specs, and vibrant display make it a top-notch choice
			for both work and entertainment. I Highly recommend TonyStar!
		</Review>
		<Review
			clientImg="/images/tasheni.webp"
			clientName="Tasheni Musonda"
			serviceOffered="Entreprenuer"
		>
			Tonystar Electronics lives up to their word. They deliver within their situated number of
			days, and their products are always authentic and of high quality. I always buy from them and
			have no regrets
		</Review>
		<Review clientImg="/images/chama.webp" clientName="Chama Musonda" serviceOffered="Entreprenuer">
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
