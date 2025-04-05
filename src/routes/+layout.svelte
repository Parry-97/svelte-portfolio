<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import "@fontsource-variable/raleway";
  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
  import "../app.css";
  let { children } = $props();
  import { ModeWatcher, toggleMode } from "mode-watcher";
  import { Separator } from "$lib/components/ui/separator";
  import logo from "$lib/assets/logo.png";
</script>

<ModeWatcher></ModeWatcher>

<div class="flex flex-col">
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
    <div class="col-start-3 col-span-1 row-start-2">
      <img class="h-10" src={logo} alt="greek letter psi" />
    </div>
    <div class="flex align-middle gap-5 col-start-5 col-span-1 row-start-2">
      <a class="hover:underline" href="/">Home</a>
      <a class="hover:underline" href="/about">About</a>
      <a class="hover:underline" href="/blogs">Blogs</a>
      <a class="hover:underline" href="/projects">Projects</a>
    </div>
  </nav>

  <div class="mt-6 grid grid-cols-10 h-full align-middle">
    {@render children()}
  </div>

  <Separator class="w-1/3 mx-auto mt-10"></Separator>

  <footer class="self-end mt-10 pb-20 w-1/3 mx-auto text-gray-500 font-body">
    <div class="grid grid-cols-3 w-full">
      <div class="flex flex-col gap-5 col-start-1 col-span-1">
        <a class="hover:underline" href="/">Home</a>
        <a class="hover:underline" href="/about">About</a>
        <a class="hover:underline" href="/blogs">Blogs</a>
        <a class="hover:underline" href="/projects">Projects</a>
      </div>

      <div class="flex flex-col gap-5 col-start-2">
        <a
          class="hover:underline"
          href="https://www.linkedin.com/in/param-pal-singh-251324212/"
          >Linkedin</a
        >
        <a class="hover:underline" href="https://github.com/Parry-97">Github</a>
        <!-- <a class="hover:underline" href="/about">Twitter</a> -->
      </div>

      <div class="flex flex-col gap-5 col-start-3">
        <a class="hover:underline" href="/snippets">Snippets</a>
        <a class="hover:underline" href="/tags">Tags</a>
      </div>
    </div>
  </footer>
</div>
