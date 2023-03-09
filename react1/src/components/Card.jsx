import React from "react";
import Button from "./Button"


// product from prop is obj{} so use obj destructuring to get the data easily {product}
const Card = ({product}) => {

  return (
    <div
      className="card p-5 text-center"
      style={{width: "28rem"}}
    >
      <div className="card-body">
        <img src={product.image} alt="" height="100px" />
        <h5 className="card-title text-truncate">{product.title}</h5>
        <p className="card-text text-truncate text-secondary small">
          {product.description}
        </p>
        <Button/>
      </div>
    </div>
  );
};

export default Card;
