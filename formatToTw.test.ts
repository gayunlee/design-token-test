import { describe, it, expect } from "vitest";
import { transformJsonToTw } from "./formatToTw";

const mockResult = {
  accent: {
    default: "#5a67d8",
    onAccent: {
      primary: "#ffffff",
      secondary: "#ffff33",
    },
    bg: "#434190",
  },
  color: {
    fuschia: {
      "60": "#fcddecff",
    },
    iris: {
      "60": "#a5a6f6ff",
    },
  },
};

const mockJson = {
  accent: {
    default: {
      value: "#5a67d8",
      type: "color",
    },
    onAccent: {
      primary: {
        value: "#ffffff",
        type: "color",
      },
      secondary: {
        value: "#ffff33",
        type: "color",
      },
    },
    bg: {
      value: "#434190",
      type: "color",
    },
  },
  color: {
    fuschia: {
      "60": {
        description: "",
        type: "color",
        value: "#fcddecff",
        blendMode: "normal",
      },
    },
    iris: {
      "60": {
        description: "",
        type: "color",
        value: "#a5a6f6ff",
        blendMode: "normal",
      },
    },
  },
};

describe("transformJsonToTw 테스트", () => {
  it("json에서 tailwindcss 변수 객체로 변환", () => {
    expect(transformJsonToTw(mockJson)).toEqual(mockResult);
  });
});
