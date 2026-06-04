import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { GestureResponderEvent } from "react-native";

interface Props {
  onChangeText: (text: string) => void;
  label: string;
  msg: string;
  variant: "flat" | "outlined";
  textColor: string;
  contentStyle: {};
  style: {};
  disabled: boolean;
}

export default function CTextInput({
  onChangeText,
  label,
  msg,
  variant,
  textColor,
  contentStyle,
  style,
  disabled,
}: Props) {
  return (
    <TextInput
      onChangeText={onChangeText}
      label={label}
      value={msg}
      mode={variant}
      textColor={textColor}
      contentStyle={contentStyle}
      style={style}
      disabled={disabled}
    />
  );
}
