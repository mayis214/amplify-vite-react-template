import { defineFunction } from "@aws-amplify/backend";
export const consultaClaude = defineFunction({
  name: "consultaClaude",
  entry: "./consultaClaude.ts"
});

export const crearBucket = defineFunction({
  name: "crearBucket",
  entry: "./crearBucket.ts"
});

export const crearDynamo = defineFunction({
  name: "crearDynamo",
  entry: "./crearDynamo.ts"
});