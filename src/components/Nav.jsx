const React = require("react");
const { Link, useLocation } = require("react-router-dom");
const styles = require("./styles/Nav.module.css");

function Nav() {
  const location = useLocation();
  return (
    <nav className={styles.nav}>
      <ul className={styles.navListLeft}>
        <li className={styles.navItem}>
          <Link
            to="/"
            className={`${styles.navLink} ${
              location.pathname === "/" && styles.active
            }`}
          >
            Order
          </Link>
        </li>
      </ul>
    </nav>
  );
}

module.exports = Nav;
