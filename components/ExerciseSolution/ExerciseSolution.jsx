import { Text, View, LogBox } from "react-native";
import { s } from "./ExerciseSolution.style";
import { MathText } from 'react-native-math-view';
import { useEffect } from "react";
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

const ExerciseSolution = ({ solution }) => {

    /*useEffect(() => {
        LogBox.ignoreAllLogs(true);
     }, []);*/

    return(
        <View style={ s.container }>
            <MathJax
                mathJaxOptions={mmlOptions}
                html={`<font size=4> ${ solution } </font>`}
            />
            
            {/* 
            <MathText
                value={`${ solution }`}
                CellRendererComponent={<Text style={s.statement} />}
            />
            */}
        </View>
    );
};

export default ExerciseSolution;