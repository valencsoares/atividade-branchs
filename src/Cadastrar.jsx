import Menu from "./componentes/Menu.jsx";
import Navbar from "./componentes/navbar.jsx";
import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";

export default function Cadastrar(){
    const listaVideosSalva = JSON.parse(localStorage.getItem("ListaVideos"))|| [];   
    useEffect(() => { localStorage.setItem("ListaVideos", JSON.stringify(listaVideos)) }, [listaVideos]);
    const navigate = useNavigate();
    return(
        <div className="container">
            <Navbar/>
            <Menu/>
        <div className="cadastro">
            <h1 className="texto">Cadastre quantos videos quiser!</h1>
            <form onSubmit={salvar}>
                <div className="barras">
                    <input placeholder="adicione o nome do canal do vídeo" type="text" value={canal} onChange={(e)=>{setCanal(e.target.value)}}/>
                    <input placeholder="adicione a url do vídeo" type="text" value={url} onChange={(e)=>{setURL(e.target.value)}}/>
                    <input placeholder="adicione o título" type="text" value={titulo} onChange={(e)=>{setTitulo(e.target.value)}}/>
                    <input placeholder="adicione a descrição" type="text" value={descricao} onChange={(e)=>{setDescricao(e.target.value)}}/>
                    <input placeholder="adicione o tempo de duração do vídeo (99:99:99)" type="text" value={tempo} onChange={(e)=>{setTempo(e.target.value)}}/>
                    <input placeholder="adicione a data de publicação do vídeo (99/99/9999)" type="text" value={data} onChange={(e)=>{setData(e.target.value)}}/>
                </div>
                <div>
                    <button className="add">Cadastrar</button>
                </div>    
            </form>
        </div>
    </div>
)}