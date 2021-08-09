import React, { Component } from 'react';
import './style.css'

class RegistrationForm extends Component {

  constructor(props) {
    super(props);
    this.name = '';
    this.email = '';
    this.cpf = '';
    this.phone = '';
    this.cep = '';
    this.publicarea = '';
    this.number = '';
    this.district = '';
    this.city = '';
    this.estado = '';
  }

  _handleResetInput(){
    this.name = '';
    this.email = '';
    this.cpf = '';
    this.phone = '';
    this.cep = '';
    this.publicarea = '';
    this.number = '';
    this.district = '';
    this.city = '';
    this.estado = '';
  }

  _handleMudancaNome(event) {
    event.stopPropagation()
    this.name = event.target.value
  }

  _handleMudancaEmail(event) {
    event.stopPropagation()
    this.email = event.target.value
  }

  _handleMudancaCPF(event) {
    event.stopPropagation()
    this.cpf = event.target.value
  }

  _handleMudancaPhone(event) {
    event.stopPropagation()
    this.phone = event.target.value
  }

  _handleMudancaCEP(event) {
    event.stopPropagation()
    this.cep = event.target.value
  }

  _handleMudancaPublicArea(event) {
    event.stopPropagation()
    this.publicarea = event.target.value
  }

  _handleMudancaNumber(event) {
    event.stopPropagation()
    this.number = event.target.value
  }

  _handleMudancaDistrict(event) {
    event.stopPropagation()
    this.district = event.target.value
  }

  _handleMudancaCity(event) {
    event.stopPropagation()
    this.city = event.target.value
  }

  _handleMudancaEstado(event) {
    event.stopPropagation()
    this.estado = event.target.value
  }

  _saveCustomer(event) {
    event.preventDefault()
    event.stopPropagation()
    this.props.saveCustomer(this.name, this.email, this.cpf, this.phone, this.cep, this.publicarea, this.number, this.district, this.city, this.estado)
    this._handleResetInput()
  }

  render() {
    return (
      <form onSubmit={this._saveCustomer.bind(this)}>
        <input
          type='text'
          placeholder='Nome'
          onChange={this._handleMudancaNome.bind(this)}
        />
        <input type='text'
          placeholder='E-mail'
          onChange={this._handleMudancaEmail.bind(this)}
        />
        <input type='text'
          placeholder='CPF ou CNPJ'
          onChange={this._handleMudancaCPF.bind(this)}
        />
        <input type='text'
          placeholder='CEP'
          onChange = {this._handleMudancaCEP.bind(this)}
        />
        <input type='text'
          placeholder='Logradouro'
          onChange = {this._handleMudancaPublicArea.bind(this)}
        />
        <input type='text'
          placeholder='Número'
          onChange = {this._handleMudancaNumber.bind(this)}
        />
        <input type='text'
          placeholder='Bairro'
          onChange = {this._handleMudancaDistrict.bind(this)}
        />
        <input type='text'
          placeholder='Cidade'
          onChange = {this._handleMudancaCity.bind(this)}
        />
        <input type='text'
          placeholder='Estado'
          onChange = {this._handleMudancaEstado.bind(this)}
        />
        <input type='submit'
          value='Inscrever'
        />
      </form>
    );
  }
}

export default RegistrationForm;