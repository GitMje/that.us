<script>
	import { Form, Input } from 'sveltejs-forms';
	import { Circle3 } from 'svelte-loading-spinners';

	import post from './_form';
	let submitted = false;

	function handleSubmit(detail) {
		return post(detail)
			.then(() => {
				submitted = true;
			})
			.catch((error) => console.error('Request failed', error));
	}
</script>

<section class="">
	<div class="relative mx-auto lg:flex lg:items-center">
		<div class="lg:w-0 lg:flex-1">
			<h2
				class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 text-gray-800"
				id="newsletter-headline"
			>
				Subscribe Today
			</h2>
			{#if !submitted}
				<p class="mt-3 max-w-3xl prose prose-lg text-gray-500">
					Another list? We know you're busy enough just trying to get your product shipped. We also
					don't want to become more noise for you. We don't email much, honestly, we're busy too,
					but when we do it's to make sure you stay in the know.
				</p>
			{:else}
				<p class="mt-3 max-w-3xl prose prose-lg text-gray-500">
					Thank you for signing up. Welcome to THAT family.
				</p>
				<p class="mt-3 text-sm leading-5 text-gray-500">
					Please check your inbox to confirm your subscription.
				</p>
			{/if}
		</div>
		<div class="mt-8 lg:mt-0 lg:ml-8">
			{#if !submitted}
				<Form
					on:submit={handleSubmit}
					aria-labelledby="newsletter-headline"
					validateOnBlur={false}
					validateOnChange={false}
					let:isSubmitting
				>
					{#if !isSubmitting}
						<div class="sm:flex">
							<Input type="hidden" name="u" value="16" />
							<Input type="hidden" name="f" value="16" />
							<Input type="hidden" name="s" />
							<Input type="hidden" name="c" value="0" />
							<Input type="hidden" name="m" value="0" />
							<Input type="hidden" name="act" value="sub" />
							<Input type="hidden" name="v" value="2" />
							<Input
								name="email"
								aria-label="Email address"
								type="email"
								required
								class="appearance-none min-w-0 w-full py-2 px-4 
								bg-white border border-gray-300 
								rounded-md shadow-sm text-base text-gray-900 placeholder-gray-500 
								focus:outline-none focus:ring-thatBlue-500 focus:border-thatBlue-500 focus:placeholder-gray-400"
								placeholder="Enter your email"
							/>
							<div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
								<button
									type="submit"
									class="px-4 py-2 rounded-md shadow text-base leading-6 font-medium border-2
									border-thatBlue-500 text-thatBlue-500 bg-white hover:bg-thatBlue-500
									hover:text-white focus:bg-thatBlue-500 focus:text-white focus:outline-none
									focus:ring-thatBlue-500 focus:border-thatBlue-800 transition
									duration-150 ease-in-out"
								>
									Add me
								</button>
							</div>
						</div>
						<p class="mt-3 text-sm leading-5 text-gray-500">
							We care about the protection of your data.
						</p>
						<p class="mt-3 text-sm leading-5 text-gray-500">
							Read our
							<a href="/support/privacy-policy" class="text-thatBlue-500 font-medium underline">
								Privacy Policy.
							</a>
						</p>
					{:else}
						<div class="relative my-6 flex flex-col items-center space-y-6">
							<Circle3
								size={'60'}
								unit={'px'}
								ballTopLeft="#f74646"
								ballTopRight="#ff834d"
								ballBottomLeft="#26529A"
								ballBottomRight="#555555"
							/>
						</div>
					{/if}
				</Form>
			{/if}
		</div>
	</div>
</section>
