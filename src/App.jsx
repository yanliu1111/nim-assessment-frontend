const AppRoutes = require("./AppRoutes");
const Nav = require("./components/Nav");

function App() {
  return (
    <>
      <Nav />
      <AppRoutes />
    </>
  );
}

module.exports = App;
