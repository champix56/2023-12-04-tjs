import React from "react";
import Button from "./components/ui/Button/Button";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { counter: 0, hello: "de lu" };
  }
  componentDidMount() {
    this.setState({ counter: -1 });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("value after state", this.state);
  }
  render() {
    return (
      <div>
        <div className="App">
          Valeur de counter : {this.state.counter}
          <hr />
          <Button
            bgColor="skyblue"
            onButtonClick={(arg) => {
              this.setState({ counter: this.state.counter - 1 });
              console.log(this.state.counter);
            }}
          >
            -1
          </Button>
          <Button
            bgColor="tomato"
            onButtonClick={() => {
              this.setState({ counter: this.state.counter + 1 });
              console.log(this.state.counter);
            }}
          >
            <div>+1</div>
          </Button>
          <Button
            bgColor="aquamarine"
            onButtonClick={() => {
              this.setState({ counter: this.state.counter + 1 });
              console.log(this.state.counter);
            }}
          >
            <img
              src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/cross-256.png"
              alt=""
            />
            <div>cancel</div>
          </Button>
          <Button
            bgColor="red"
            onButtonClick={() => {
              this.setState({ counter: this.state.counter + 1 });
              console.log(this.state.counter);
            }}
          >
            <img
              src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/cross-256.png"
              alt=""
            />
            cancel
          </Button>
        </div>
      </div>
    );
  }
}
