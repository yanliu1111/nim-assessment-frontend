const React, { useEffect, useState } = require("react");
const Menu = require("./Menu");
const Order = require("./Order");
const OrderModal = require("./OrderModal");
const styles = require("./styles/Order.module.css");

function Main() {
  const [menuItems, setMenuItems] = useState([]);
  const [order, setOrder] = useState([]);
  const [orderModal, setOrderModal] = useState(false);

  const getItems = async () => {
    const response = await fetch("/api/menu");
    const data = await response.json();
    setMenuItems(data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="page">
      {orderModal && <OrderModal order={order} setOrderModal={setOrderModal} />}
      <h1>Create an order</h1>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <Menu menuItems={menuItems} order={order} setOrder={setOrder} />
        </div>
        {order.length > 0 && (
          <Order order={order} setOrderModal={setOrderModal} />
        )}
      </div>
    </div>
  );
}

module.exports = Main;
