import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import './style.css'
import CustomerRow from '../CustomerRow/CustomerRow'

class CustomerTable extends Component {

  render() {
    return (
      <div className="customer-table_section">
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th className='customer-table_header'>#</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>CPF ou CNPJ</th>
              <th>Telefone</th>
              <th>CEP</th>
              <th>Logradouro</th>
              <th>Número</th>
              <th>Bairro</th>
              <th>Cidade</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {this.props.customers.map((valor,index) => {
              return (
                <CustomerRow
                  index = {index}
                  delCustomer = {this.props.delCustomer}
                  name = {valor.name}
                  email = {valor.email}
                  cpf = {valor.cpf}
                  phone = {valor.phone}
                  cep = {valor.cep}
                  publicarea = {valor.publicarea}
                  number = {valor.number}
                  district = {valor.district}
                  city = {valor.city}
                  state = {valor.state}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CustomerTable;