import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  let rollupOptions = {};

  if (process.env.npm_lifecycle_event === "build.client") {
    // Client-specific configuration
    rollupOptions = {
      output: {
        // Customize the client build structure
        entryFileNames: (fileInfo:any) => {
          console.log("fileInfo", fileInfo);
          return `build/[name]-[hash].js`
        },
        chunkFileNames: (fileInfo:any) => {
          console.log("fileInfo", fileInfo);
          return `build/[name]-[hash].js`
        },
        assetFileNames: `build/[name]-[hash].[ext]`,
      },
    };
  }

  return {
    build: {
      rollupOptions,
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
  };
});
