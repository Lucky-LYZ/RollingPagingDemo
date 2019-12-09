import React from "react";
import { render } from "react-dom";
import InfiniteScrollCom from "./infiniteScroll.js";
import VirtualListCom from "./virtualList.js";
import "./styles.less";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollType: "infinite"
    };
  }

  toggleType = () => {
    let scrollType = this.state.scrollType;
    this.setState({
      scrollType: scrollType === "infinite" ? "virtualList" : "infinite"
    });
  };

  render() {
    return (
      <div className="app">
        <button onClick={this.toggleType}>切换组件</button>
        <div className="depart" />
        <section
          hidden={this.state.scrollType === "virtualList" ? false : true}
        >
          <InfiniteScrollCom />
        </section>
        <section hidden={this.state.scrollType === "infinite" ? false : true}>
          <VirtualListCom />
        </section>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
