<header id="home" class="grid grid-cols-[1.1fr_0.9fr] items-center gap-6 lg:grid-cols-1 lg:gap-16">
	<div class="flex flex-col gap-6">
		<h1 class="section-heading text-5xl leading-tight md:text-3xl">
			Aspiring <strong>software developer</strong> with a keen interest in the tech world
		</h1>
		<p class="text-2xl text-secondary-content md:text-xl">Software Developer | Entrepreneur</p>
		<div class="mt-4 flex gap-4">
			<button class="btn btn-disabled btn-primary btn-sm"> Learn more </button>
			<a href="#contact" class="js-smooth btn btn-outline btn-primary btn-sm cursor-pointer">
				Contact
			</a>
		</div>
	</div>
	<div class="border-animate h-full">
		<img class="h-full w-full" src="/images/hero.webp" alt="Tony's gadgets" />
	</div>
</header>

<style>
	header {
		margin-top: -2rem;
		padding: 3rem 0.5rem;
		max-height: 800px;
		min-height: calc(100vh - 6rem);
	}

	.border-animate {
		position: relative;
		width: 100%;
		height: auto;
		background: linear-gradient(0deg, #000, #272727);
	}

	.border-animate:before,
	.border-animate:after {
		content: '';
		position: absolute;
		left: -2px;
		top: -2px;
		background: linear-gradient(
			45deg,
			#fb0094,
			#0000ff,
			#00ff00,
			#ffff00,
			#ff0000,
			#fb0094,
			#0000ff,
			#00ff00,
			#ffff00,
			#ff0000
		);
		background-size: 400%;
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		z-index: -1;
		animation: steam 60s linear infinite;
	}

	@keyframes steam {
		0% {
			background-position: 0 0;
		}
		50% {
			background-position: 400% 0;
		}
		100% {
			background-position: 0 0;
		}
	}

	.border-animate:after {
		filter: blur(50px);
	}
</style>
