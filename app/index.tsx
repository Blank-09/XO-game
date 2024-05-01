import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text className="text-4xl font-bold mb-4">XO Game</Text>
      <Text>Let's play the game of XO</Text>
      <Link
        href="/game"
        className="mt-6 px-4 py-3 w-44 text-center border border-neutral-950 rounded"
      >
        Play
      </Link>
      <Link
        href="/leaderboard"
        className="mt-2 px-4 py-3 w-44 text-center border border-neutral-950 rounded"
      >
        Leaderboard
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
