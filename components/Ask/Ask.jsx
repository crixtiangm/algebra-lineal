import { Text, View } from "react-native";
import { s } from "./Ask.style";
import { MathText } from 'react-native-math-view';
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

const Ask = ({ exerciseNum, statement }) => {
    return(
        <View style={s.container} >
            <MathJax
                mathJaxOptions={mmlOptions}
                html={`<font size=4>${exerciseNum}.- ${statement}</font>`}
            />
            {/*
            <MathText
                value={`${exerciseNum}.- ${statement}`}
                CellRendererComponent={<Text style={s.statement} />}
            />
            */}
        </View>
    );
};

export default Ask;