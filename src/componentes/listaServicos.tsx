import { Component } from "react";

interface Servico {
    id: number;
    nome: string;
    preco: string;
    duracao: string;
    descricao: string;
}

type props = {
    tema: string;
    servicos: Servico[];
    removerServico: (id: number) => void;
}

export default class ListaServicos extends Component<props>{
    
    handleRemover = (id: number) => {
        if (window.confirm('Tem certeza que deseja excluir este serviço?')) {
            this.props.removerServico(id);
        }
    }

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <h3 className="mb-4">Lista de Serviços</h3>
                <div className="list-group">
                    {this.props.servicos.map((servico, index) => (
                        <div key={servico.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            >
                            <div>
                                <strong>{servico.nome}</strong> - R$ {servico.preco}
                                <br />
                                <small className="text-muted">Duração: {servico.duracao}</small>
                                {servico.descricao && (
                                    <>
                                        <br />
                                        <small className="text-muted">{servico.descricao}</small>
                                    </>
                                )}
                            </div>
                            <button 
                                className="btn btn-danger btn-sm"
                                onClick={() => this.handleRemover(servico.id)}
                            >
                                Excluir
                            </button>
                        </div>
                    ))}
                    {this.props.servicos.length === 0 && (
                        <div className="list-group-item text-center text-muted">
                            Nenhum serviço cadastrado
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
