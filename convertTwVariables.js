const fs = require("fs");

const data = require("./tw.json");

function transformJsonToTw(json) {
  const result = {};
  for (const key in json) {
    if (!json[key]?.value) {
      result[key] = transformJsonToTw(json[key]);
    } else {
      result[key] = json[key].value;
    }
  }

  return result;
}

fs.writeFileSync(
  "./variableOutput.js",
  "module.exports = " + JSON.stringify(transformJsonToTw(data), null, 2),
  "utf-8"
);
console.log(
  "Processing completed successfully. Output written to 'variableOutput.js'."
);
