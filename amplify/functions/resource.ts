import { defineFunction } from "@aws-amplify/backend";
export const consultaClaude = defineFunction({
  name: "consultaClaude",
  entry: "./consultaClaude.ts"
});