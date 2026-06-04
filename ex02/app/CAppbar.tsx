import React, { useState } from "react";
import { View, useWindowDimensions } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Text } from "react-native-paper";
import { evaluate } from "mathjs";
import CTextInput from "./CTextInput";
import CButton from "./CButton";

const messages = [
  "7",
  "8",
  "9",
  "C",
  "AC",
  "4",
  "5",
  "6",
  "+",
  "-",
  "1",
  "2",
  "3",
  "x",
  "/",
  "0",
  ".",
  "00",
  "=",
  "",
];

export default function CAppbar() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    // <View
    //   style={{
    //     width: "100%",
    //     height: "100%",
    //     display: "flex",
    //     flexDirection: "column",
    //   }}
    // >
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header
        style={{
          backgroundColor: "#534DB3",
        }}
      >
        <Appbar.Content color="white" title="Calculator" />
      </Appbar.Header>
      <View style={{ height: isLandscape ? "25%" : "50%" }}>
        <CTextInput
          onChangeText={() => {}}
          label=""
          msg="0"
          variant="outlined"
          textColor="#534DB3"
          contentStyle={{ textAlign: "right" }}
          style={{ borderWidth: 0, height: 40 }}
          disabled={false}
        />
        <CTextInput
          onChangeText={() => {}}
          label=""
          msg="0"
          variant="outlined"
          textColor="#534DB3"
          contentStyle={{ textAlign: "right" }}
          style={{ borderWidth: 0, height: 40 }}
          disabled={true}
        />
      </View>
      <View
        style={{ paddingTop: isLandscape ? 0 : 20, backgroundColor: "#534DB3" }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!!messages.length &&
            messages.map((m, i) => {
              return (
                <CButton
                  key={`button_${i}`}
                  onClick={() => {
                    console.log(`button pressed: ${m}`);
                  }}
                  msg={m}
                  variant="contained"
                  textColor="white"
                  style={{
                    width: "18%",
                    height: isLandscape ? "12.5%" : "10%",
                    borderWidth: 0,
                  }}
                  buttonColor="transparent"
                  labelStyle={{}}
                />
              );
            })}
        </View>
      </View>
    </SafeAreaView>
  );
}
