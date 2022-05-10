const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <hi>{number}</hi>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
