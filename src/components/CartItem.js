import React from 'react';

const CartItem = ({ item, onRemove }) => {
  const handleRemove = () => {
    onRemove(item);
  };

  return (
    <div className="cart-item">
      <img src={item.product.imageUrl} alt={item.product.name} />
      <div>
        <h3>{item.product.name}</h3>
        <p>{`R$ ${item.product.value.toFixed(2)}`}</p>
        <p>Quantidade: {item.quantity}</p>
      </div>
      <button onClick={handleRemove}>Remover</button>
    </div>
  );
};

export default CartItem;
