import { mdsvex, escapeSvelte } from "mdsvex";
import { createHighlighter } from "shiki";
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const highlighter = await createHighlighter({
  themes: ["poimandres"],
  langs: [
    "javascript",
    "terraform",
    "bicep",
    "json",
    "yaml",
    "rust",
    "python",
    "typescript",
  ],
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".md"],
      highlight: {
        highlighter: async (code, lang) => {
          await highlighter.loadLanguage(lang);
          const html = escapeSvelte(
            highlighter.codeToHtml(code, { lang, theme: "poimandres" }),
          );
          return `{@html \`${html}\` }`;
        },
      },
    }),
  ],

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
    alias: {
      "@/*": "./path/to/lib/*",
    },
  },

  extensions: [".svelte", ".svx", ".md"],
};

export default config;
