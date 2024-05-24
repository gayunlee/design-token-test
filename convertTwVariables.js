const fs = require("fs");
const data = require("./tw.json");

const MULTI_VALUE_FIELDS = ["heading-xl", "heading-lg", "heading-md"];

const formatValuesToString = (obj) => {
  const formatted = {};
  for (const key in obj) {
    formatted[key] = typeof obj[key] !== "string" ? obj[key] + "px" : obj[key];
  }
  return formatted;
};

function transformJsonToTw(json) {
  const result = {};
  const entries = Object.entries(json);
  for (const [key, value] of entries) {
    if (!value?.value && value?.value !== 0) {
      result[key] = transformJsonToTw(value);
    } else {
      const transformedValue =
        typeof value?.value === "number" ? value?.value + "px" : value?.value;
      result[key] = transformedValue;
    }
  }

  return result;
}

function convertToUtilities(input) {
  const utilities = {};
  const utilNames = [];

  function traverse(obj, keys = []) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        traverse(obj[key], [...keys, key]);
      } else {
        const className = `.${keys.join("-")}`;
        utilities[className] = formatValuesToString(obj);
        utilNames.push(className);
      }
    }
  }

  traverse(input);
  return utilities;
}

const generateUtilities = (json) => {
  let result = {};
  MULTI_VALUE_FIELDS.forEach((field) => {
    result = {
      ...result,
      ...convertToUtilities({ [field]: transformedTw[field] }),
    };
  });
  return result;
};

const transformedTw = transformJsonToTw(data);
const multiValueUtils = generateUtilities(transformedTw);
fs.writeFileSync(
  "./variableOutput.js",
  "export const twVariables = " + JSON.stringify(transformedTw, null, 2),
  "utf-8"
);

fs.writeFileSync(
  "./utilities.js",
  "export const twUtils = " + JSON.stringify(multiValueUtils, null, 2),
  "utf-8"
);

console.log(
  "Processing completed successfully. Output written to 'variableOutput.js'."
);
