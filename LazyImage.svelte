<script lang="ts">
	import { onMount } from 'svelte'
    import type { HTMLAttributes } from 'svelte/elements'

	interface LazyImageProps extends HTMLAttributes<HTMLImageElement> {
		placeholder: string,
		src: string,
		alt: string,
		options: {
			root?: any,
			rootMargin?: string,
			threshold?: number,
		}
		loaded?: boolean
	}

	let {
		placeholder,
		src,
		alt,
		loaded = $bindable(false),
		options = {root: null, rootMargin: '0px 0px 0px 0px', threshold: 0.0},
		...props
	}: LazyImageProps = $props()

	let imgElement: Element
	let observer: IntersectionObserver
	let intersected = $state(false)

	let path = $derived(intersected ? src : placeholder)

	onMount(() => {
		observer = new IntersectionObserver((entries, self) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					intersected = true;
					self.unobserve(imgElement);
				}
			});
		}, options);
		observer.observe(imgElement);

		return () => {
			if (observer) {
				observer.unobserve(imgElement);
			}
		};
	});

	function handleLoad() {
		if (!loaded && path === src) {
			loaded = true;
		}
	}
</script>

<img
	src={path}
	{alt}
	onload={handleLoad}
	bind:this={imgElement}
	{...props}
/>