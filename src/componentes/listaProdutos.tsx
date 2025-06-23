import { Component } from "react";

interface Produto {
    id: number;
    nome: string;
    preco: string;
    categoria: string;
}

type props = {
    tema: string;
    produtos: Produto[];
    removerProduto: (id: number) => void;
}

export default class ListaProdutos extends Component<props>{
    
    handleRemover = (id: number) => {
        if (window.confirm('Tem certeza que deseja excluir este produto?')) {
            this.props.removerProduto(id);
        }
    }

    getBadgeColor = (categoria: string) => {
        switch(categoria) {
            case 'Ração': return 'bg-primary';
            case 'Brinquedos': return 'bg-success';
            case 'Higiene': return 'bg-info';
            case 'Medicamentos': return 'bg-danger';
            case 'Acessórios': return 'bg-warning';
            default: return 'bg-secondary';
        }
    }

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <h3 className="mb-4">Lista de Produtos</h3>
                <div className="list-group">
                    {this.props.produtos.map((produto, index) => (
                        <div key={produto.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            >
                            <div>
                                <strong>{produto.nome}</strong> - R$ {produto.preco} 
                                <span className={`badge ${this.getBadgeColor(produto.categoria)} ms-2`}>
                                    {produto.categoria}
                                </span>
                            </div>
                            <button 
                                className="btn btn-danger btn-sm"
                                onClick={() => this.handleRemover(produto.id)}
                            >
                                Excluir
                            </button>
                        </div>
                    ))}
                    {this.props.produtos.length === 0 && (
                        <div className="list-group-item text-center text-muted">
                            Nenhum produto cadastrado
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
