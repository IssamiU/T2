import { Component } from "react";

type props = {
    tema: string;
    adicionarCliente: (cliente: { nome: string; nomeSocial: string; email: string }) => void;
}

type state = {
    nome: string;
    nomeSocial: string;
    email: string;
}

export default class FormularioCadastroCliente extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            nome: '',
            nomeSocial: '',
            email: ''
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as Pick<state, keyof state>);
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const { nome, nomeSocial, email } = this.state;
        
        if (nome && email) {
            this.props.adicionarCliente({ nome, nomeSocial, email });
            alert(`Cliente ${nome} cadastrado com sucesso!`);
            this.setState({ nome: '', nomeSocial: '', email: '' });
        } else {
            alert('Por favor, preencha pelo menos o nome e e-mail!');
        }
    }

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <h3 className="mb-4">Cadastro de Cliente</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nome" 
                            name="nome"
                            value={this.state.nome}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nome social" 
                            name="nomeSocial"
                            value={this.state.nomeSocial}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" style={{ background: tema }}>@</span>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="E-mail" 
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>
                            Cadastrar Cliente
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
