import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../../redux/countSlice";
//import store from "../../redux/store";
//import { useSelector, useDispatch } from "react-redux";

//const dispatch = useDispatch();
//console.log(store.getState().counter.value);
class Counter extends Component {
  /*   componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  } */
  increment = () => {
    const { value } = this.selectNumber;
    this.props.increment(value);
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.decrement(value);
  };
  incrementofOdd = () => {
    const { value } = this.selectNumber;
    console.log(this.props.count);
    if (this.props.count % 2 !== 0) {
      this.props.increment(value);
    }
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    setTimeout(() => {
      this.props.increment(value);
    }, 500);
  };

  render() {
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <h2>下方人数为{this.props.rens}</h2>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementofOdd}>当前求和为奇数+</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.value,
  rens: state.person.length,
});
const mapDispatchToProps = (dispatch) => ({
  increment: (value) => dispatch(increment(value)),
  decrement: (value) => dispatch(decrement(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
