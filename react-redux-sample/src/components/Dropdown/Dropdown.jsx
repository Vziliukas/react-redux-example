import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../Message/Message';

const mapStateToProps = state => ({ payload: state.payload });

class ConnectedDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payload: props.payload,
      id: props.payload[0].id,
      title: props.payload[0].title,
    };
  }

  handleChange = ({ target }) => {
    const { payload } = this.state;
    const { id, title } = payload.find(item => item.title === target.value);

    this.setState({ id, title });
  };

  render() {
    const { title, id, payload } = this.state;

    return (
      <div>
        <div className="field">
          <div className="select is-success">
            <select onChange={this.handleChange} value={title}>
              {payload.map((item, index) => (
                <option value={item.title} key={index}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Message id={id} />
      </div>
    );
  }
}

const Dropdown = connect(mapStateToProps)(ConnectedDropdown);

export default Dropdown;
