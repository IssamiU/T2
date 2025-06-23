import { Component } from "react";

interface Pet {
    id: number;
    nome: string;
    tipo: string;
    raca: string;
    genero: string;
    dono: string;
}

type props = {
    tema: string;
    pets: Pet[];
    removerPet: (id: number) => void;
}

export default class ListaPets extends Component<props>{
    
    handleRemover = (id: number) => {
        if (window.confirm('Tem certeza que deseja excluir este pet?')) {
            this.props.removerPet(id);
        }
    }

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <h3 className="mb-4">Lista de Pets</h3>
                <div className="list-group">
                    {this.props.pets.map((pet, index) => (
                        <div key={pet.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            >
                            <div>
                                <strong>{pet.nome}</strong> - {pet.tipo}, {pet.raca} ({pet.genero})
                                <br />
                                <small className="text-muted">Dono: {pet.dono}</small>
                            </div>
                            <button 
                                className="btn btn-danger btn-sm"
                                onClick={() => this.handleRemover(pet.id)}
                            >
                                Excluir
                            </button>
                        </div>
                    ))}
                    {this.props.pets.length === 0 && (
                        <div className="list-group-item text-center text-muted">
                            Nenhum pet cadastrado
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
