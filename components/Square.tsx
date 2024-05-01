import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import React from 'react';

type Props = {
  value: string;
  onSquareClick: (event: GestureResponderEvent) => void;
};

const Square: React.FC<Props> = ({ value, onSquareClick }) => {
  return (
    <TouchableOpacity
      className="m-1 w-20 h-20 border rounded items-center justify-center"
      onPress={onSquareClick}
    >
      <Text className="text-4xl">{value}</Text>
    </TouchableOpacity>
  );
};

export default Square;
