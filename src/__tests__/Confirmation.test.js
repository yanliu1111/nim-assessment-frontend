// test if a file called Confirmation.js exists
const fs = require("fs");
const { render, screen } = require("@testing-library/react");
import "@testing-library/jest-dom";

const ConfirmationPage = require("../components/ConfirmationPage");
const OrderConfirmation = require("../components/OrderConfirmation");
const { testOrder } = require("../sampleTestData");

describe("files exist", () => {
  it("ConfirmationPage.jsx should exist", () => {
    expect(fs.existsSync("./src/components/ConfirmationPage.jsx")).toBe(true);
  });
  it("OrderConfirmation.jsx should exist", () => {
    expect(fs.existsSync("./src/components/OrderConfirmation.jsx")).toBe(true);
  });
});

// pass the test data as order prop into OrderConfirmation component

test("renders confirmation page with name, address and items, and order id", () => {
  console.log("the test order is", testOrder);
  render(<OrderConfirmation order={testOrder} />);
  const name = screen.getByText("example");
  const address = screen.getByText("123 Main St");
  const items = screen.getByText("Burger");
  const orderId = screen.getByText("12345");
  expect(name).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(items).toBeInTheDocument();
  expect(orderId).toBeInTheDocument();
});
