import { View } from "react-native";
import { s } from "./TopicTheory.style";
import MathJax from "react-native-mathjax";

const mmlOptions = {
    messageStyle: "none",
    extensions: ["tex2jax.js"],
    jax: ["input/TeX", "output/HTML-CSS"],
    tex2jax: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"],
      ],
      processEscapes: true,
    },
    TeX: {
      extensions: [
        "AMSmath.js",
        "AMSsymbols.js",
        "noErrors.js",
        "noUndefined.js",
      ],
    },
};

const TopicTheory = ({ theory }) => {
    return(
        <View style={s.container}>
            <MathJax 
                mathJaxOptions={mmlOptions}
                html={`<font size=4> ${ theory } </font>`}
            />
        </View>
    );
};

export default TopicTheory;