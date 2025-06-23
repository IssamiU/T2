import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaProdutos from "./listaProdutos";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaPets from "./listaPets";
import FormularioCadastroPet from "./formularioCadastroPet";
import ListaServicos from "./listaServicos";
import FormularioCadastroServico from "./formularioCadastroServico";

// Interfaces para tipagem
interface Cliente {
    id: number;
    nome: string;
    nomeSocial: string;
    email: string;
}

interface Produto {
    id: number;
    nome: string;
    preco: string;
    categoria: string;
}

interface Pet {
    id: number;
    nome: string;
    tipo: string;
    raca: string;
    genero: string;
    dono: string;
}

interface Servico {
    id: number;
    nome: string;
    preco: string;
    duracao: string;
    descricao: string;
}

type state = {
    tela: string;
    clientes: Cliente[];
    produtos: Produto[];
    pets: Pet[];
    servicos: Servico[];
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes',
            clientes: [
                { id: 1, nome: 'Arakaki Silva', nomeSocial: 'Arakaki', email: 'arakaki@email.com' },
                { id: 2, nome: 'Massanori dos Santos', nomeSocial: 'Massanori', email: 'massanori@email.com' },
                { id: 3, nome: 'Wellington Lima', nomeSocial: 'Wellington', email: 'wellington@email.com' }
            ],
            produtos: [
                { id: 1, nome: 'Ração Premium Cães', preco: '45.90', categoria: 'Ração' },
                { id: 2, nome: 'Brinquedo Mordedor', preco: '15.50', categoria: 'Brinquedos' },
                { id: 3, nome: 'Shampoo Pet', preco: '22.30', categoria: 'Higiene' }
            ],
            pets: [
                { id: 1, nome: 'Bolsonaro', tipo: 'Cachorro', raca: 'Golden Retriever', genero: 'Macho', dono: 'Arakaki Silva' },
                { id: 2, nome: 'Arnaldo Feijoada', tipo: 'Gato', raca: 'Persa', genero: 'Fêmea', dono: 'Massanori dos Santos' },
                { id: 3, nome: 'Joelma', tipo: 'Cachorro', raca: 'Labrador', genero: 'Macho', dono: 'Wellington Lima' }
            ],
            servicos: [
                { id: 1, nome: 'Banho e Tosa', preco: '45.00', duracao: '2 horas', descricao: 'Banho completo com tosa' },
                { id: 2, nome: 'Consulta Veterinária', preco: '80.00', duracao: '1 hora', descricao: 'Consulta geral' },
                { id: 3, nome: 'Vacinação', preco: '35.00', duracao: '30 minutos', descricao: 'Aplicação de vacinas' }
            ]
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    // Funções para adicionar itens
    adicionarCliente = (cliente: Omit<Cliente, 'id'>) => {
        const novoId = Math.max(...this.state.clientes.map(c => c.id), 0) + 1;
        const novoCliente: Cliente = { ...cliente, id: novoId };
        this.setState({
            clientes: [...this.state.clientes, novoCliente]
        });
    }

    adicionarProduto = (produto: Omit<Produto, 'id'>) => {
        const novoId = Math.max(...this.state.produtos.map(p => p.id), 0) + 1;
        const novoProduto: Produto = { ...produto, id: novoId };
        this.setState({
            produtos: [...this.state.produtos, novoProduto]
        });
    }

    adicionarPet = (pet: Omit<Pet, 'id'>) => {
        const novoId = Math.max(...this.state.pets.map(p => p.id), 0) + 1;
        const novoPet: Pet = { ...pet, id: novoId };
        this.setState({
            pets: [...this.state.pets, novoPet]
        });
    }

    adicionarServico = (servico: Omit<Servico, 'id'>) => {
        const novoId = Math.max(...this.state.servicos.map(s => s.id), 0) + 1;
        const novoServico: Servico = { ...servico, id: novoId };
        this.setState({
            servicos: [...this.state.servicos, novoServico]
        });
    }

    // Funções para remover itens
    removerCliente = (id: number) => {
        this.setState({
            clientes: this.state.clientes.filter(cliente => cliente.id !== id)
        });
    }

    removerProduto = (id: number) => {
        this.setState({
            produtos: this.state.produtos.filter(produto => produto.id !== id)
        });
    }

    removerPet = (id: number) => {
        this.setState({
            pets: this.state.pets.filter(pet => pet.id !== id)
        });
    }

    removerServico = (id: number) => {
        this.setState({
            servicos: this.state.servicos.filter(servico => servico.id !== id)
        });
    }

    render() {
        let barraNavegacao = <BarraNavegacao 
            seletorView={this.selecionarView} 
            tema="#e3f2fd" 
            botoes={[
                'Clientes', 
                'Produtos', 
                'Pets', 
                'Serviços',
                'Cadastrar Cliente', 
                'Cadastrar Produto', 
                'Cadastrar Pet',
                'Cadastrar Serviço'
            ]} 
        />

        switch(this.state.tela) {
            case 'Clientes':
                return (
                    <>
                        {barraNavegacao}
                        <ListaCliente 
                            tema="#e3f2fd" 
                            clientes={this.state.clientes}
                            removerCliente={this.removerCliente}
                        />
                    </>
                )
            case 'Produtos':
                return (
                    <>
                        {barraNavegacao}
                        <ListaProdutos 
                            tema="#e3f2fd"
                            produtos={this.state.produtos}
                            removerProduto={this.removerProduto}
                        />
                    </>
                )
            case 'Pets':
                return (
                    <>
                        {barraNavegacao}
                        <ListaPets 
                            tema="#e3f2fd"
                            pets={this.state.pets}
                            removerPet={this.removerPet}
                        />
                    </>
                )
            case 'Serviços':
                return (
                    <>
                        {barraNavegacao}
                        <ListaServicos 
                            tema="#e3f2fd"
                            servicos={this.state.servicos}
                            removerServico={this.removerServico}
                        />
                    </>
                )
            case 'Cadastrar Cliente':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroCliente 
                            tema="#e3f2fd"
                            adicionarCliente={this.adicionarCliente}
                        />
                    </>
                )
            case 'Cadastrar Produto':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroProduto 
                            tema="#e3f2fd"
                            adicionarProduto={this.adicionarProduto}
                        />
                    </>
                )
            case 'Cadastrar Pet':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroPet 
                            tema="#e3f2fd"
                            adicionarPet={this.adicionarPet}
                        />
                    </>
                )
            case 'Cadastrar Serviço':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroServico 
                            tema="#e3f2fd"
                            adicionarServico={this.adicionarServico}
                        />
                    </>
                )
            default:
                return (
                    <>
                        {barraNavegacao}
                        <ListaCliente 
                            tema="#e3f2fd" 
                            clientes={this.state.clientes}
                            removerCliente={this.removerCliente}
                        />
                    </>
                )
        }
    }
}
