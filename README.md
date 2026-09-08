# svelte5-lazy-image


> [!NOTE]
> Updated for Svelte 5; includes TypeScript support. Original: https://github.com/alexstaroselsky/svelte-lazy-image.git

Svelte 5 component to lazy load images using [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).


## Usage

```bash
git clone https://github.com/ZEDtm/svelte5-lazy-image.git
```

### Svelte 5:

#### use:action

Set `data-src` and/or `data-srcset` on an `img` element:

```html
<script>
	import { useLazyImage as lazyImage } from 'svelte5-lazy-image'
</script>

<img data-src="https://via.placeholder.com/250?text=src1" alt="foobar" use:lazyImage />
```

Specify IntersectionObserver [options](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver) via object passed to `use`:

```html
<script>
	import { LazyImage, useLazyImage as lazyImage } from 'svelte5-lazy-image';
</script>

<img src="https://via.placeholder.com/250?text=placeholder1"
data-src="https://via.placeholder.com/250?text=src1" alt="foobar" use:lazyImage={{ threshold: 0.5 }}
/>
```

#### Component

```html
<script>
	import { LazyImage } from 'svelte5-lazy-image';
</script>

<LazyImage
	src="https://via.placeholder.com/250?text=src"
	placeholder="https://via.placeholder.com/250?text=placeholder"
	alt="Lorem Ipsum"
/>
```

The component uses `Props` to pass props other than `placeholder`, `src`, or `alt` to the underlying `img` element. An example using `img` attributes `srcset` and `sizes`:

```html
<script>
	import { LazyImage } from 'svelte5-lazy-image';
</script>

<LazyImage
	src="https://via.placeholder.com/250?text=src"
	placeholder="https://via.placeholder.com/250?text=placeholder"
	alt="Lorem Ipsum"
	srcset="https://via.placeholder.com/480 480w, https://via.placeholder.com/800 800w"
	sizes="(max-width: 600px) 480px, 800px"
/>
```

Specify IntersectionObserver [options](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver):

```html
<script>
  import { LazyImage } from 'svelte5-lazy-image';
</script>

<LazyImage
  src="https://via.placeholder.com/250?text=src"
  placeholder="https://via.placeholder.com/250?text=placeholder"
  alt="Lorem Ipsum"
  options={{ threshold: 0.5 }}
/>
```

New in Svelte 5: use `bindable` to implement features like a blur effect before loading:

```html
<script>
  import { LazyImage } from 'svelte5-lazy-image';

  let imgLoaded = $state(false);
</script>

<LazyImage
  bind:loaded={imgLoaded}
  src="https://via.placeholder.com/250?text=src"
  placeholder="https://via.placeholder.com/250?text=placeholder"
  alt="Lorem Ipsum"
  options={{ threshold: 0.5 }}
  class={cn("absolute inset-0 h-full w-full object-bottom dark:brightness-[0.4] dark:grayscale", !imgLoaded && "blur-sm" )}
/>
```
