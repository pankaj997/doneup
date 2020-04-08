import React from "react";
import {connect} from 'react-redux';
class Update extends React.Component {
  state={
    name: "",
    password: "",
    email:""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    const values =this.props;
    const val=values.pros[0];
    return (
<div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <h1>USER DETAILS</h1>
            <div className="firstname">
              <label htmlFor="username">UserName</label>
              <input
                name="name"
                value={val.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password"> Password</label>
              <input
                name="password"
                type="text"
                value={val.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email"> Email</label>
              <input
                name="email"
                type="email"
                value={val.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="update">
              <button type="submit" onSubmit={this.handleSubmit}>Update</button>
            </div>
            <div className="Logout">
              <button type="submit">Logout</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    pros:state.users
  }
  
}

export default connect(mapStateToProps) (Update);
