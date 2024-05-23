const formatValuesToString = (obj) => {
  const formatted = {};
  for (const key in obj) {
    formatted[key] =
      typeof obj[key] !== "string" ? obj[key].toString() : obj[key];
  }
  return formatted;
};

export function convertToUtilities(input) {
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

const input = {
  typography: {
    H1: {
      Bold: {
        fontFamily: "Inter",
        fontWeight: "500",
        font: "500",
        lineHeight: "110%",
        fontSize: 78.126,
        paragraphSpacing: 32,
        letterSpacing: "-5%",
      },
    },
    H2: {
      Bold: {
        fontFamily: "Inter",
        fontWeight: "Bold",
        lineHeight: "110%",
        fontSize: 39.063,
        paragraphSpacing: 26,
        letterSpacing: "-5%",
      },
      Regular: {
        fontFamily: "Inter",
        fontWeight: "Regular",
        lineHeight: "110%",
        fontSize: 39.063,
        paragraphSpacing: 26,
        letterSpacing: "-5%",
      },
    },
    Body: {
      fontFamily: "Roboto",
      fontWeight: "Regular",
      lineHeight: "110%",
      fontSize: 16,
      paragraphSpacing: 26,
    },
  },
};

const utilities = convertToUtilities(input);
