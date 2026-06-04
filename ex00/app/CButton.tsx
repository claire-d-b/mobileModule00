import { Button } from "react-native-paper";
import { GestureResponderEvent } from "react-native";

interface Props {
  onClick: (e: GestureResponderEvent) => void;
  msg: string;
  variant: "text" | "outlined" | "contained" | "elevated" | "contained-tonal";
  textColor: string;
  style: {};
}

export default function CButton({
  onClick,
  msg,
  variant,
  textColor,
  style,
}: Props) {
  return (
    <Button
      onPress={onClick}
      style={style}
      mode={variant}
      textColor={textColor}
    >
      {msg}
    </Button>
  );
}
