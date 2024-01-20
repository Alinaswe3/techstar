<section class="my-20 grid grid-cols-2 items-center gap-14 lg:grid-cols-1">
	<div class="img-border">
		<img
			src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="Tony Chingore"
		/>
	</div>
	<div class="flex flex-col gap-6 lg:row-start-1">
		<h3 class="section-title">about me</h3>
		<h4 class="text-6xl">Web Developer</h4>
		<div class="text-xl leading-8 text-accent">
			<p>
				PHP, ASP, Ruby, Python, etc. Medium skill in database/server work, medium skill in
				JavaScript, light skill in HTML.
			</p>
			<br />
			<p>
				This is very different from a Front End Developer as there is little working with the design
				and heavier on programming concepts and concerns, like security and structure.
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
