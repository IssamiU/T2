import { Component } from "react";

type props = {
    tema: string;
    adicionarProduto: (produto: { nome: string; preco: string; categoria: string }) => void;
}

type state = {
    nome: string;
    preco: string;
    categoria: string;
}

export default class FormularioCadastroProduto extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            nome: '',
            preco: '',
            categoria: 'Ração'
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as Pick<state, keyof state>);
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const { nome, preco, categoria } = this.state;
        
        if (nome && preco) {
            this.props.adicionarProduto({ nome, preco, categoria });
            alert(`Produto ${nome} cadastrado com sucesso!`);
            this.setState({ nome: '', preco: '', categoria: 'Ração' });
        } else {
            alert('Por favor, preencha todos os campos obrigatórios!');
        }
    }

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <h3 className="mb-4">Cadastro de Produto</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nome do produto" 
                            name="nome"
                            value={this.state.nome}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" style={{ background: tema }}>R$</span>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Preço" 
                            name="preco"
                            value={this.state.preco}
                            onChange={this.handleInputChange}
                            step="0.01"
                            required
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" style={{ background: tema }}>Categoria</span>
                        <select 
                            className="form-select" 
                            name="categoria"
                            value={this.state.categoria}
                            onChange={this.handleInputChange}
                        >
                            <option value="Ração">Ração</option>
                            <option value="Brinquedos">Brinquedos</option>
                            <option value="Higiene">Higiene</option>
                            <option value="Medicamentos">Medicamentos</option>
                            <option value="Acessórios">Acessórios</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>
                            Cadastrar Produto
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
