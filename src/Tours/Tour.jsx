import React from "react";

function Tour({ id, name, image, price, info, removeTour }) {
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p> {info} </p>
        <button
          className="delete-btn"
          onClick={() => {
            removeTour(id);
            console.log(id);
          }}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
}

export default Tour;
