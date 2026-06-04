import React, { useState } from "react";
import { Text, PaperProvider } from "react-native-paper";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CButton from "./CButton";

export default function App() {
  const [state, setState] = useState(true);
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <SafeAreaProvider>
        <PaperProvider>
          <View
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
              backgroundColor: "#534DB3",
            }}
          >
            {(state && (
              <Text style={{ color: "white" }}>This is a button.</Text>
            )) || <Text style={{ color: "white" }}>Hello World!</Text>}
            <CButton
              onClick={() => {
                console.log("Button clicked!");
                setState((s) => !s);
              }}
              style={{ borderColor: "white" }}
              textColor="white"
              msg="Click me"
              variant="outlined"
            ></CButton>
          </View>
        </PaperProvider>
      </SafeAreaProvider>
    </View>
  );
}
