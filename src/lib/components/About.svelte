<section id="about" class="mt-20 grid grid-cols-2 items-center gap-14 lg:grid-cols-1">
	<div class="img-border">
		<img src="/images/tony.webp" alt="An image of the CEO Tony Chingore" />
	</div>
	<div class="flex flex-col gap-6 lg:row-start-1">
		<h3 class="section-title">about me</h3>
		<h4 class="section-heading text-4xl">Entrepreneur</h4>
		<div class="long-text">
			<p>
				I am a growing entrepreneur who takes his passion for tech and brings it to the world of
				consumers
			</p>
			<br />
			<p>
				I work by supplying smartphones, laptops, smart watches, and other gadgets from China,
				recommending the best products for your needs and budget
			</p>
		</div>
	</div>
</section>

<style>
	.img-border {
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: center;
		width: 90%;
		height: 90%;
		margin: auto;
		background-color: #fff;
		border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
		box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
		animation: morphing 10s infinite;
		overflow: hidden;
	}
	.img-border:hover {
		animation-play-state: paused;
	}
	.img-border h1 {
		color: #fff;
		font-family:
			Helvetica Neue,
			Helvetica,
			Verdana,
			sans-serif;
		font-weight: 400;
		font-size: 35px;
		line-height: 100%;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		margin: auto;
	}
	@-moz-keyframes morphing {
		0% {
			border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
			box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
		}
		25% {
			border-radius: 58% 42% 75% 25%/76% 46% 54% 24%;
		}
		50% {
			border-radius: 50% 50% 33% 67%/55% 27% 73% 45%;
			box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.2);
		}
		75% {
			border-radius: 33% 67% 58% 42%/63% 68% 32% 37%;
		}
	}
	@-webkit-keyframes morphing {
		0% {
			border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
			box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
		}
		25% {
			border-radius: 58% 42% 75% 25%/76% 46% 54% 24%;
		}
		50% {
			border-radius: 50% 50% 33% 67%/55% 27% 73% 45%;
			box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.2);
		}
		75% {
			border-radius: 33% 67% 58% 42%/63% 68% 32% 37%;
		}
	}
	@-o-keyframes morphing {
		0% {
			border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
			box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
		}
		25% {
			border-radius: 58% 42% 75% 25%/76% 46% 54% 24%;
		}
		50% {
			border-radius: 50% 50% 33% 67%/55% 27% 73% 45%;
			box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.2);
		}
		75% {
			border-radius: 33% 67% 58% 42%/63% 68% 32% 37%;
		}
	}
	@keyframes morphing {
		0% {
			border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
			box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
		}
		25% {
			border-radius: 58% 42% 75% 25%/76% 46% 54% 24%;
		}
		50% {
			border-radius: 50% 50% 33% 67%/55% 27% 73% 45%;
			box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.2);
		}
		75% {
			border-radius: 33% 67% 58% 42%/63% 68% 32% 37%;
		}
	}
</style>
