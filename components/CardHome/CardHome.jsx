import { TouchableOpacity, Text, Image} from "react-native";
import { s } from "./CardHome.style";
import checkImg from "../../assets/check.png";

const CardHome = ({ topic, onLongPress }) => {

    return(
        <TouchableOpacity onLongPress={() => onLongPress(topic)} style={s.card} >
            <Text style={[s.topic, topic.isCompleted && {textDecorationLine: "line-through"}]} >{topic.title}</Text>
            {topic.isCompleted && <Image style={s.img} source={checkImg} />}
        </TouchableOpacity>
    );
};

export default CardHome;