import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Board from '@/components/Board';

const Game = () => {
  const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <TouchableOpacity key={move} onPress={() => jumpTo(move)}>
        <Text>{description}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <View>
      <View>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </View>
      <View>{moves}</View>
    </View>
  );
};

export default Game;
