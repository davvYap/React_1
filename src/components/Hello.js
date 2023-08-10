const name = "David";

const displayMessage = () => {
  return "Let's buy some food!";
};

function Hello() {
  return (
    <h1>
      Hello World from {name}. <br /> Total is {20 + 10}. <br /> {displayMessage()}
    </h1>
  );
}

// ES6 synthax
// const Hello = () => <h2>Hello There</h2>;

export default Hello;
