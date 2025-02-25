<script>
  import { fly } from "svelte/transition";
</script>

<div
  in:fly={{ x: -200, duration: 300, delay: 300 }}
  out:fly={{ x: 200, duration: 300 }}
  class="col-span-1 my-20 col-start-2 flex flex-col gap-14"
>
  <h1 class="text-5xl font-bold font-body">About me</h1>
  <p class="font-body text-gray-500 mt-3">
    Hey, I'm Sveltekit Blogger. I'm a Software Developer, writer and creator of
    Sveltekit Starter Project and Sveltekit Blog Project The template has all
    the route and sample pages setup for you which you can change and customize
    further. All the pages are by default loaded from the different JS file and
    is fetched using prefetch when use hover over the links, which reduces the
    load time when user eventually decides to click on the link and load the
    route <a class="text-blue-400 underline" href="/about"
      >learn more about me</a
    >
  </p>
</div>
