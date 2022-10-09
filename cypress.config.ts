import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'mf3q46',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportHeight: 1080,
  viewportWidth: 1600
});
