const fs = require("fs");
const data = require("./tw.json");

function transformJsonToTw(json) {
  const result = {};
  const entries = Object.entries(json);

  for (const [key, value] of entries) {
    if (!value?.value && value?.value !== 0) {
      result[key] = transformJsonToTw(value);
    } else {
      result[key] =
        typeof value.value === "number" ? value.value + "px" : value.value;
    }
  }

  return result;
}

fs.writeFileSync(
  "./variableOutput.js",
  "export const twVariables = " +
    JSON.stringify(transformJsonToTw(data), null, 2),
  "utf-8"
);
console.log(
  "Processing completed successfully. Output written to 'variableOutput.js'."
);
