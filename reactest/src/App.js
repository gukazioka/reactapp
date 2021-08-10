import './assets/App.css'
import React, { Component } from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import CustomerTable from './components/CustomerTable/CustomerTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoSVG from './assets/img/logo.svg';

class App extends Component {

  constructor(){
    super()
    this.customers = []
    this.state = {
      customers: []
    }
  }

  saveCustomer(name, email, cpf, phone, cep, publicarea, number, district, city, state){
    const newCustomer = {name, email, cpf, phone, cep, publicarea, number, district, city, state}
    const newArrayCustomers = [...this.state.customers, newCustomer]
    const newState = {
      customers: newArrayCustomers
    }
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = ''))
    this.setState(newState)
  }
  
  delCustomer(index){
    let arrayCustomer = this.state.customers
    arrayCustomer.splice(index, 1);
    this.setState({customers: arrayCustomer})
  }

  render() { 
    return ( 
    <div className="App">
      <img className="App_logo" src={logoSVG}/>
      <RegistrationForm saveCustomer = {this.saveCustomer.bind(this)}/>
      <CustomerTable delCustomer = {this.delCustomer.bind(this)} customers = {this.state.customers}/>
    </div> );
  }
}
 
export default App;
