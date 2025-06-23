import { Component } from "react";

type props = {
    tema: string;
    adicionarServico: (servico: { nome: string; preco: string; duracao: string; descricao: string }) => void;
}

type state = {
    nome: string;
    preco: string;
    duracao: string;
    descricao: string;
}

export default class FormularioCadastroServico extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            nome: '',
            preco: '',
            duracao: '',
            descricao: ''
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as Pick<state, keyof state>);
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const { nome, preco, duracao, descricao } = this.state;
        
        if (nome && preco && duracao) {
            this.props.adicionarServico({ nome, preco, duracao, descricao });
            alert(`Serviço ${nome} cadastrado com sucesso!`);
            this.setState({ nome: '', preco: '', duracao: '', descricao: '' });
        } else {
            alert('Por favor, preencha todos os campos obrigatórios (Nome, Preço e Duração)!');
        }
    }

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <h3 className="mb-4">Cadastro de Serviço</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <span className="input-group-text" style={{ background: tema }}>Serviço</span>
                        <select 
                            className="form-select" 
                            name="nome"
                            value={this.state.nome}
                            onChange={this.handleInputChange}
                            required
                        >
                            <option value="">Selecione um serviço</option>
                            <option value="Banho">Banho</option>
                            <option value="Tosa">Tosa</option>
                            <option value="Banho e Tosa">Banho e Tosa</option>
                            <option value="Consulta Veterinária">Consulta Veterinária</option>
                            <option value="Vacinação">Vacinação</option>
                            <option value="Exame de Sangue">Exame de Sangue</option>
                            <option value="Limpeza Dental">Limpeza Dental</option>
                            <option value="Corte de Unhas">Corte de Unhas</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" style={{ background: tema }}>R$</span>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Preço do serviço" 
                            name="preco"
                            value={this.state.preco}
                            onChange={this.handleInputChange}
                            step="0.01"
                            required
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" style={{ background: tema }}>Duração</span>
                        <select 
                            className="form-select" 
                            name="duracao"
                            value={this.state.duracao}
                            onChange={this.handleInputChange}
                            required
                        >
                            <option value="">Selecione a duração</option>
                            <option value="30 minutos">30 minutos</option>
                            <option value="1 hora">1 hora</option>
                            <option value="1h 30min">1h 30min</option>
                            <option value="2 horas">2 horas</option>
                            <option value="2h 30min">2h 30min</option>
                            <option value="3 horas">3 horas</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descrição (opcional)</label>
                        <textarea 
                            className="form-control" 
                            name="descricao"
                            value={this.state.descricao}
                            onChange={this.handleInputChange}
                            rows={3}
                            placeholder="Descreva detalhes sobre o serviço..."
                        />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>
                            Cadastrar Serviço
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
