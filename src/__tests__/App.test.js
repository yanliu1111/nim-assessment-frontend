// test Menu component with passed in menuItems
import "@testing-library/jest-dom";
const { render, screen } = require("@testing-library/react");
const Menu = require("../components/Menu");
const { testMenuItems } = require("../sampleTestData");

test("renders menu items", () => {
  render(<Menu menuItems={testMenuItems} />);
  const menuItem = screen.getByText("Burger");
  expect(menuItem).toBeInTheDocument();
});
