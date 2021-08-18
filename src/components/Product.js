function Product({ name, country, quantity, cost, buttonText, buttonAction }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">From {country}</p>
        <p className="card-text">${cost}</p>
        <p className="card-text">Qty: {quantity}</p>
        <button onClick={buttonAction} className="btn btn-primary">{buttonText}</button>
      </div>
    </div>
  );
}

export default Product;