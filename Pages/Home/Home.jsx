import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./Home.style";
import { CardHome, Header, TabBottomMenuHome } from "../../components";
import { useState } from "react";

const Home = () => {

    //Data con el id y título de los temas inicializados en un hook useState
    const [ topicList, setTopicList ] = useState([
        { id: 1, title: "Grupos y Campos", isCompleted: false },
        { id: 2, title: "Espacios vectoriales", isCompleted:false },
        { id: 3, title: "Transformaciones lineales", isCompleted: false },
        { id: 4, title: "Espacios con producto interno", isCompleted: false },
        { id: 5, title: "Operadores lineales en espacios con producto interno", isCompleted: false }
    ]);
    // Inicializamos siempre el tab en "all" mediante un hook useState
    const [ selectedTabName, setSelectedTabName ] = useState("all");

    // Funcion que filtra el contenido de cards dependiendo el tab seleccionado
    const getFilteredList = () => {
        switch(selectedTabName){
            case "all":
                return topicList;
            case "inProgress":
                return topicList.filter((topic) => topic.isCompleted === false);
            case "done": 
                return topicList.filter((topic) => topic.isCompleted === true);
        }
    }

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
    }

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