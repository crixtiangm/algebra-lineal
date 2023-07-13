import { TouchableOpacity, Text, Image} from "react-native";
import { s } from "./CardHome.style";
import { useNavigation } from "@react-navigation/native";
import checkImg from "../../assets/check.png";

/**
 * 
 * @topic prop del componente que contiene un objeto con la informació del tema ej: {id:1, title: "Grupos y Campos", isCompleted: false}
 * @onLongPress prop del componente para cambiar el estado boolean del tema ej: {isCompleted: true}
 * 
 */

const CardHome = ({ topic, onLongPress }) => {
    const nav = useNavigation();

    return(
        <TouchableOpacity onPress={() => nav.navigate(`${topic.page}`,{...topic})} onLongPress={() => onLongPress(topic)} style={s.card} >
            <Text style={[s.topic, topic.isCompleted && {textDecorationLine: "line-through"}]} >{topic.title}</Text>
            {topic.isCompleted && <Image style={s.img} source={checkImg} />}
        </TouchableOpacity>
    );
};

export default CardHome;