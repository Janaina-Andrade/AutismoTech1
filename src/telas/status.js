import React from "react";
import {Image, Text} from 'react-native';
import topo from '../../assets/avatar.png';
import points from '../../assets/points.png';


export default function Status(){
    return<>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.nome}>Fernando Souza</Text>
    <Text style={estilos.descricao}>Progresso de hoje</Text>
    <Image source={points} style={estilos.points}></Image>
    <Text style={estilos.progresso}>(2/3)</Text>
    <Image source={calendar} style={estilos.calendar}/>
    </>
}


const estilos={
    calendar:{
        width:100,
        Height: 100,
},
}