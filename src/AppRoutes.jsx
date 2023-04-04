const React = require("react");
const { Routes, Route } = require("react-router-dom");
const Main = require("./components/Main");

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

module.exports = AppRoutes;
