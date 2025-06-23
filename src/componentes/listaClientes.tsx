import { Component } from "react";

interface Cliente {
    id: number;
    nome: string;
    nomeSocial: string;
    email: string;
}

type props = {
    tema: string;
    clientes: Cliente[];
    removerCliente: (id: number) => void;
}

export default class ListaCliente extends Component<props>{
    
    handleRemover = (id: number) => {
        if (window.confirm('Tem certeza que deseja excluir este cliente?')) {
            this.props.removerCliente(id);
        }
    }

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <h3 className="mb-4">Lista de Clientes</h3>
                <div className="list-group">
                    {this.props.clientes.map((cliente, index) => (
                        <div key={cliente.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
                             >
                            <div>
                                <strong>{cliente.nome}</strong>
                                {cliente.nomeSocial && cliente.nomeSocial !== cliente.nome && (
                                    <span> ({cliente.nomeSocial})</span>
                                )}
                                <br />
                                <small className="text-muted">{cliente.email}</small>
                            </div>
                            <button 
                                className="btn btn-danger btn-sm"
                                onClick={() => this.handleRemover(cliente.id)}
                            >
                                Excluir
                            </button>
                        </div>
                    ))}
                    {this.props.clientes.length === 0 && (
                        <div className="list-group-item text-center text-muted">
                            Nenhum cliente cadastrado
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
