import React from "react";
import renderer from "react-test-renderer";

import App from "./App";

describe("App init", () => {
  it("App renders", () => {
    const app = renderer.create(<App />);
    expect(app).toBeTruthy();
  });
});
