import Product from "./Product";

function Cart({ cart, removeFromCart }) {
  return (
    <div className='section'>
      <h1>Cart</h1>
      {cart.map((item, index) => (
        <Product
          key={index}
          quantity={1}
          buttonText='Remove from cart'
          buttonAction={() => removeFromCart(item.name)}
          {...item}
        />
      ))}
    </div>
  );
}

export default Cart;