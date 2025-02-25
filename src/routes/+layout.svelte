<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  // Supports weights 100-900
  import "@fontsource-variable/raleway";
  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
  import "../app.css";
  let { children } = $props();
  import { ModeWatcher, toggleMode } from "mode-watcher";
  import { Separator } from "$lib/components/ui/separator";
  // Check out this hf space for logo: enzostvs/Logo.Ai
</script>

<ModeWatcher></ModeWatcher>

<nav class="font-body mt-4 grid grid-cols-7">
  <Button
    class="col-span-1 row-start-1 col-start-8"
    on:click={toggleMode}
    variant="outline"
    size="icon"
  >
    <Sun
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <Moon
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
  <div class="col-start-3 col-span-1 row-start-2">Logo</div>
  <div class="flex gap-5 col-start-5 col-span-1 row-start-2">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/blogs">Blog</a>
    <a href="/projects">Projects</a>
  </div>
</nav>

{@render children()}

<Separator class="w-1/3 mx-auto"></Separator>
<footer class="mt-10 pb-20 w-1/3 mx-auto text-gray-500 font-body">
  <div class="grid grid-cols-3 w-full">
    <div class="flex flex-col gap-5 col-start-1 col-span-1">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/blogs">Blog</a>
      <a href="/projects">Projects</a>
    </div>

    <div class="flex flex-col gap-5 col-start-2">
      <a href="/about">Linkedin</a>
      <a href="/about">Github</a>
      <a href="/about">X</a>
    </div>

    <div class="flex flex-col gap-5 col-start-3">
      <a href="/snippets">Snippets</a>
      <a href="/tags">Tags</a>
    </div>
  </div>
</footer>
