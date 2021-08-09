import React, { Component } from 'react';

class CustomerTable extends Component {
  render() {
    return (
      <table>
        <tr>
          <td>Nome</td>
          <td>E-mail</td>
          <td>CPF ou CNPJ</td>
          <td>CEP</td>
          <td>Logradouro</td>
          <td>Número</td>
          <td>Bairro</td>
          <td>Cidade</td>
          <td>Estado</td>
        </tr>
        {this.props.customers.map(valor => {
          return (<tr>
            <td>{valor.name}</td>
            <td>{valor.email}</td>
            <td>{valor.cpf}</td>
            <td>{valor.phone}</td>
            <td>{valor.cep}</td>
            <td>{valor.publicarea}</td>
            <td>{valor.number}</td>
            <td>{valor.district}</td>
            <td>{valor.state}</td>
          </tr>);
        })}
      </table>
    );
  }
}

export default CustomerTable;