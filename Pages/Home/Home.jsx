import { ScrollView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./Home.style";
import { CardHome, Header, TabBottomMenuHome } from "../../components";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TopicData from "../../data/topics.json"; 

let isFirstRender = true; //Bandera para controlar la carga de los datos
let isLoadUpdate = false; //Bandera para controlar cuando se actualizan los datos y guardarlo

const Home = () => {

    //hook para inicializar la data de los temas 
    const [ topicList, setTopicList ] = useState([]);

    // Inicializamos siempre el tab en "all" mediante un hook useState
    const [ selectedTabName, setSelectedTabName ] = useState("all");

    //Cargar los datos guardados cuando se inicia la aplicación
    useEffect(() => {
        loadTopicList();
    },[]);

    //Ejecuta la función saveTopicList para guardar cambios en la data cada que se actualiza topicList
    useEffect(() => {
        if(!isLoadUpdate){
            !isFirstRender ? saveTopicList() : isFirstRender = false;
        }else{
            isLoadUpdate = false;
        }
    },[topicList]);

    //Función que se encarga de pasar los datos de string a un objeto de JSON y así poder cargarlos de inicio
    const loadTopicList = async () => {
        console.log("LOAD");
        try {
            const topicListString = await AsyncStorage.getItem("@topicList");
            const parsedTopicList = JSON.parse(topicListString);
            isLoadUpdate = true;
            parsedTopicList.length === 0 ? setTopicList(TopicData) : setTopicList(parsedTopicList);
        } catch (error) {
            alert(error)
        };
    };

    //Función que guarda los cambios que el usuario va realizando en la aplicación ej: cuando se actualiza el boolean isComplete 
    const saveTopicList = async () => {
        console.log("SAVE")
        try {
            await AsyncStorage.setItem("@topicList", JSON.stringify(topicList));
        } catch (error) {
            alert(error);
        };
    };

    // Funcion que filtra el contenido de cards dependiendo el tab seleccionado
    const getFilteredList = () => {
        switch(selectedTabName){
            case "all":
                return topicList;
            case "inProgress":
                return topicList.filter((topic) => topic.isCompleted === false);
            case "done": 
                return topicList.filter((topic) => topic.isCompleted === true);
        };
    };

    //Función que renderiza las cards dependiendo el tab seleccionado
    const renderTopicList = () => {
        return getFilteredList().map((topic) => 
            <View key={topic.id} style={s.cardItem} >
                <CardHome onLongPress={updateTopic} topic={topic} />
            </View>
        );
    };

    //Función que actualiza la bandera isCompleted despues de presioonar la card por mas de tres segundos
    const updateTopic = (topic) => {
        const updatedTopic = { 
            ...topic, 
            isCompleted: !topic.isCompleted 
        };
        const updateTopicList = [ ...topicList ];
        const indexToUpdate = updateTopicList.findIndex( (t) => t.id === updatedTopic.id );
        updateTopicList[indexToUpdate] = updatedTopic;
        setTopicList(updateTopicList);
    };
    
    return(
        <>
            <SafeAreaProvider>
                <SafeAreaView style={s.home} >
                    <View style={s.header}>
                        <Header />
                    </View>
                    <View style={s.body} >
                        <ScrollView>{renderTopicList()}</ScrollView>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
            <View style={s.footer} >
                <TabBottomMenuHome 
                    selectedTabName={selectedTabName} 
                    onPress={setSelectedTabName}
                    topicList={topicList}
                />
            </View>
        </>
        );
};

export default Home;