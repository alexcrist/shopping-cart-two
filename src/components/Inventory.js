import Product from "./Product";

function Inventory({ addToCart, inventory, refreshInventory }) {
  return (
    <div className='section'>
      <h1>Inventory</h1>
      <button onClick={refreshInventory}>
        Refresh inventory
      </button>
      {inventory.map((item, index) => (
        <Product 
          key={index}
          quantity={item.instock}
          buttonText='Add to cart'
          buttonAction={() => addToCart(item.name)}
          {...item} 
        /> )
      )}
    </div>
  );
}
  
export default Inventory;