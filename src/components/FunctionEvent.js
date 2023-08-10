function FunctionEvent() {
  const handleClick = () => {
    console.log("button has clicked");
  };
  return (
    <div>
      Function Component
      <br />
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default FunctionEvent;

/*
 * <button onClick={handleClick()}>Click here</button>
 * means that whenever the button is render, the handleClick() function will be called
 * thus, don't input the function this way, as it will decrease the performance
 */
