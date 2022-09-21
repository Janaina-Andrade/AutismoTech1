import React from "react";
import {StyleSheet,Image, Dimensions, Text, StatusBar,ScrollView, TouchableOpacity} from 'react-native';


import topo from '../../assets/avatar.png';
import points from '../../assets/points.png';
import tarefas from '../../assets/tarefas.png';
import feito from '../../assets/done.png';
import progresso from '../../assets/progresso.png';
import ajuda from '../../assets/help.png';
import seta from '../../assets/seta.png';
import calendario from '../../assets/calendar.png'
import metrica from  '../../assets/metrica.png'

const width = Dimensions.get('screen').width;
export default function Persona(){
    return <>

    
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.nome}>Fernando Souza</Text>
    <Text style={estilos.descricao}>Progresso de hoje</Text>
    <Image source={points} style={estilos.points}></Image>
    <Text style={estilos.progresso}>(2/3)</Text>
    <Text style={estilos.dia}>Tarefas do dia</Text>
     <TouchableOpacity style={estilos.botao} onPress={() =>{}}>
       <Text style= {estilos.textoBotao}>Reunioes e tarefas</Text> 
       <Image source={seta} style={estilos.seta}/>
    </TouchableOpacity>
    <Image source={calendario} style={estilos.calendar}/>
   <Image source={tarefas} style={estilos.tarefas}/>
  
   <StatusBar>
    
   <ScrollView>
    
    <Image source={feito} style={estilos.feito}/>
    <Image source={progresso} style={estilos.progresso}/>
    <Image source={ajuda} style={estilos.ajuda}/>

   </ScrollView></StatusBar>
   

</>

}

const estilos= StyleSheet.create({
   feito:{
        color: "464646",
        width: 50,
        height:50,
        alignItems: "baseline",
        marginLeft: 24,
        lineHeight:"space-between",
        flexDirection: "row",
},
progresso:{
    color: "464646",
width: 50,
height:50,
alignItems: "baseline",
marginLeft: 24,
lineHeight:"space-between",
flexDirection: "row",
},

ajuda:{
    color: "464646",
        width: 50,
        height:50,
        alignItems: "baseline",
        marginLeft: 24,
        margin: "baseline",
        flexDirection: "row",
},
    topo:{
        width: 100,
        height: 100,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "space-between"
   
},
    nome:{
        color: "#464646",
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 26,
        textAlign: "center",
        position: "relative"
        
                
},
descricao:{
        color: "464646",
        fontSize:16,
        lineHeight: 26,
        textAlign: "center",
        fontWeight: 500,
        
},
points:{
    width: 20,
    height:20,
    alignItems: "flex-start",
    marginLeft: 24,
},
progresso:{
    color: "464646",
    fontSize: 12,
    margin:30,

},

tarefas:{
    color: "464646",
    width: 340,
    height: 400,
    marginLeft: 26,
    
},
calendar:{
    color: "464646",
        fontSize:16,
        lineHeight: 26,
        textAlign: "center",
        fontWeight: 500,
},
botao:{
    margin: 22,
        backgroundColor: "#2A9F85",
        paddingVertical: 8,
        borderRadius:6,
},
textoBotao:{
    textAlign: "left",
    padding: 16,
},
seta:{
    width: 7,
    height: 9,
    marginLeft: 330,
    alignItems: "center",
    color: "white",
    padding: 6,
    position: "relative"


},




})