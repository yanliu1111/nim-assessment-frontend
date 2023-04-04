const React = require("react");
const MenuItem = require("./MenuItem");
const styles = require("./styles/Order.module.css");

function Menu({ menuItems, order, setOrder }) {
  const addItemToOrder = (item) => {
    const newOrder = [...order];
    const itemInOrder = newOrder.find(
      (orderItem) => orderItem.item === item.id
    );
    if (itemInOrder) {
      itemInOrder.quantity += 1;
    } else {
      newOrder.push({ item: { ...item }, quantity: 1 });
    }
    setOrder(newOrder);
  };
  return (
    <>
      <div>
        <h2>Menu</h2>
      </div>
      <div className={styles.menu}>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} addItemToOrder={addItemToOrder} />
        ))}
      </div>
    </>
  );
}

module.exports = Menu;
