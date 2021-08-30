export const BeersItemsQuantityControl = ({ dispatch }) => {
  const renderButton = type => {
    return <button onClick={() => dispatch({ type: type })}>{type}</button>;
  };

  return (
    <div className="beers-item-control">
      <p>Items per page</p>
      {renderButton("2")}
      {renderButton("5")}
      {renderButton("10")}
      {renderButton("15")}
      {renderButton("25")}
    </div>
  );
};
