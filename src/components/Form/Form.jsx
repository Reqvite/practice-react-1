import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addUser({ ...this.state });
    this.setState({
      name: '',
      email: '',
    });
    this.props.openForm();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input onChange={this.handleChange} type="text" name="name" />
          </label>
          <label>
            Email:
            <input onChange={this.handleChange} type="email" name="email" />
          </label>
          <button type="submit">Add</button>
        </form>
      </>
    );
  }
}
