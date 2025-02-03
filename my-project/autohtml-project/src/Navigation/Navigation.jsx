import "./Navigation.css";

export const Navigation = ({ className, ...props }) => {
  return (
    <div className={"navigation " + className}>
      <div className="world-peas">World Peas </div>
      <div className="shop">Shop </div>
      <div className="newstand">Newstand </div>
      <div className="who-we-are">Who we are </div>
      <div className="my-profile">My profile </div>
      <div className="cart-button">
        <div className="basket-3">Basket (3) </div>
      </div>
    </div>
  );
};
