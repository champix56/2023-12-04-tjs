import React from "react";
import Button from "./components/ui/Button/Button";

export default class App extends React.PureComponent {
  constructor(props){
    super(props)
    this.state={counter:0, hello: 'de lu'}
  }
  componentDidMount(){
    this.setState({counter:-1})
  }
  componentDidUpdate(prevProps,prevState){
    console.log('value after state',this.state)
  }
  render() {
    return (
      <div>
        <div className="App">
          Valeur de counter : {this.state.counter}
          <hr />
          <Button
            text="-1"
            bgColor="skyblue"
            onButtonClick={(arg) => {
              this.setState({counter:this.state.counter - 1});
              console.log(this.state.counter);
            }}
          />
          <Button
            text="+1"
            bgColor="tomato"
            onButtonClick={() => {
              this.setState({counter:this.state.counter + 1});
              console.log(this.state.counter);
            }}
          />
        </div>
      </div>
    );
  }
}
