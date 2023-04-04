const React = require("react");
const ReactDOM = require("react-dom/client");
global.IS_REACT_ACT_ENVIRONMENT = true;
const { act } = require("react-dom/test-utils");
const ConfirmationPage = require("../components/ConfirmationPage");
const { testOrder } = require("../sampleTestData");

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  container.remove();
  container = null;
});

it("renders the data", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(testOrder)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    const root = ReactDOM.createRoot(container);
    root.render(<ConfirmationPage />);
  });

  // expect the order details to be in the document
  expect(container.textContent).toContain(testOrder.name);
  expect(container.textContent).toContain(testOrder.address);
  expect(container.textContent).toContain(testOrder.items[0].item.name);
  expect(container.textContent).toContain(testOrder.id.toString());

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
