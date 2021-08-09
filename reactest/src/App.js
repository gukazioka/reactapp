import './assets/App.css'
import React, { Component } from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import CustomerTable from './components/CustomerTable/CustomerTable';

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

  render() { 
    return ( 
    <div className="App">
      <RegistrationForm saveCustomer = {this.saveCustomer.bind(this)}/>
      <CustomerTable customers = {this.state.customers}/>
    </div> );
  }
}
 
export default App;
