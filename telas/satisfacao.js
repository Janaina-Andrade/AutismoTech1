import React from "react";
import {StyleSheet,Image, Text} from 'react-native';
import metrica from '../assets/metrica.png';

export default function Satisfacao(){
    return<>
    <Text style={estilos.title}>Auto avaliação</Text>
    <Text style={estilos.pesquisa}>Quão satisfeito você está, hoje, com o seu trabalho?</Text>
    <Image source={metrica} style={estilos.metrica}/>

    </>
}

const estilos = StyleSheet.create({
    title:{
        fontSize: 24,
        color: "464646",
        width: 100,
        height: 100,
        marginTop: 5,
        flexDirection: "row",
        textAlign:"justify",
        
    },
    metrica:{
        width:20,
        height:20, 
    },
    pesquisa:{
        color: "464646",
        textAlign:"justify"

    }
})