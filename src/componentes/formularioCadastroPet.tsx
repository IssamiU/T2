import { Component } from "react";

type props = {
    tema: string;
    adicionarPet: (pet: { nome: string; tipo: string; raca: string; genero: string; dono: string }) => void;
}

type state = {
    nome: string;
    tipo: string;
    raca: string;
    genero: string;
    dono: string;
}

export default class FormularioCadastroPet extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            nome: '',
            tipo: 'Cachorro',
            raca: '',
            genero: 'Macho',
            dono: ''
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as Pick<state, keyof state>);
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const { nome, tipo, raca, genero, dono } = this.state;
        
        if (nome && dono) {
            this.props.adicionarPet({ nome, tipo, raca, genero, dono });
            alert(`Pet ${nome} cadastrado com sucesso!`);
            this.setState({ nome: '', tipo: 'Cachorro', raca: '', genero: 'Macho', dono: '' });
        } else {
            alert('Por favor, preencha pelo menos o nome do pet e do dono!');
        }
    }

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <h3 className="mb-4">Cadastro de Pet</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nome do pet" 
                            name="nome"
                            value={this.state.nome}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" style={{ background: tema }}>Tipo</span>
                        <select 
                            className="form-select" 
                            name="tipo"
                            value={this.state.tipo}
                            onChange={this.handleInputChange}
                        >
                            <option value="Cachorro">Cachorro</option>
                            <option value="Gato">Gato</option>
                            <option value="Pássaro">Pássaro</option>
                            <option value="Peixe">Peixe</option>
                            <option value="Outros">Outros</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Raça" 
                            name="raca"
                            value={this.state.raca}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" style={{ background: tema }}>Gênero</span>
                        <select 
                            className="form-select" 
                            name="genero"
                            value={this.state.genero}
                            onChange={this.handleInputChange}
                        >
                            <option value="Macho">Macho</option>
                            <option value="Fêmea">Fêmea</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nome do dono" 
                            name="dono"
                            value={this.state.dono}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>
                            Cadastrar Pet
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
