import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { add_person } from "../../redux/personSlice";
class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = { id: nanoid(), name, age };
    this.props.addone(personObj);
  };
  render() {
    // console.log(this.props.rens[0].name);
    return (
      <div>
        <h2>上方求和组件和为{this.props.count}</h2>
        <h2>i am Person component</h2>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="input name"
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="input age"
        />
        <button onClick={this.addPerson}>add Person</button>
        <ul>
          {this.props.rens.map((p) => (
            <li key={p.id}>
              {p.name}---{p.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({ rens: state.person, count: state.counter.value }),
  {
    addone: add_person,
  }
)(Person);
