import React, { Component } from 'react';
import {ReactComponent as DeleteSVG} from '../../assets/img/delete.svg'

class DeleteButton extends Component {

    _delCustomer(){
        const index = this.props.index
        this.props.delCustomer(index)
    }

    render() { 
        return ( 
            <tr>
                <td><DeleteSVG onClick = {this._delCustomer.bind(this)}/></td>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.cpf}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.cep}</td>
                <td>{this.props.publicarea}</td>
                <td>{this.props.number}</td>
                <td>{this.props.district}</td>
                <td>{this.props.city}</td>
                <td>{this.props.state}</td>
              </tr>
         );
    }
}
 
export default DeleteButton;