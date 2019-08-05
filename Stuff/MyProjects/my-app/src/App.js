import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Compare from './components/comparePage';
import { connect } from 'react-redux';
import { updateUser } from './actions/user-action';


class App extends Component {
  constructor(props){
    super(props)
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }
  onUpdateUser(event){
    this.props.onUpdateUser(event.target.value);
  }
  render() {
    return (
      <div className="App">
          <input onChange = {this.onUpdateUser} />
          CLICK { this.props.userRe }
           <Compare />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productRe: state.productRe,
  userRe: state.userRe
})
const mapActionsToProp = {
  onUpdateUser: updateUser
};
export default connect(mapStateToProps, mapActionsToProp)(App);
