import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from './App.style';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>

        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}