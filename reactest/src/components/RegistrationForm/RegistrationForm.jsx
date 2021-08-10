import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import "./style.css"

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

  _handleResetInput() {
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

  _onlyNumber(event){
      if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
      }
  }

  _onlyLetters(event){
    if (!/^[a-zA-Z\s]*$/.test(event.key)) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className = "registration-form_section">
        <Form onSubmit={this._saveCustomer.bind(this)}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" 
            onKeyPress={this._onlyLetters.bind(this)}
            onChange={this._handleMudancaNome.bind(this)}
            required/>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" 
            onChange={this._handleMudancaEmail.bind(this)} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>CPF ou CNPJ</Form.Label>
            <Form.Control type="text" 
            onKeyPress={this._onlyNumber.bind(this)}
            onChange={this._handleMudancaCPF.bind(this)}
            required/>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" 
            onKeyPress={this._onlyNumber.bind(this)}
            onChange={this._handleMudancaPhone.bind(this)} />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>CEP</Form.Label>
            <Form.Control type="text" 
            onKeyPress={this._onlyNumber.bind(this)}
            onChange={this._handleMudancaCEP.bind(this)} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Logradouro</Form.Label>
            <Form.Control type="text" 
            onChange={this._handleMudancaPublicArea.bind(this)} />
          </Form.Group>
          <Form.Group as={Col} xs ={1}>
            <Form.Label>Número</Form.Label>
            <Form.Control type="text"
            onKeyPress={this._onlyNumber.bind(this)}
            onChange={this._handleMudancaNumber.bind(this)} />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col}>
            <Form.Label>Bairro</Form.Label>
            <Form.Control type="text" 
            onChange={this._handleMudancaDistrict.bind(this)} />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Cidade</Form.Label>
            <Form.Control type="text" 
            onChange={this._handleMudancaCity.bind(this)} />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Estado</Form.Label>
            <Form.Control type="text" 
            onKeyPress={this._onlyLetters.bind(this)}
            onChange={this._handleMudancaEstado.bind(this)} />
          </Form.Group>
        </Row>
        <Button className="registration-form_button" type="submit">
          Cadastrar
        </Button>
      </Form>
      </div>
    );
  }
}

export default RegistrationForm;