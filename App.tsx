import { registerRootComponent } from "expo";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { data } from "./data";
import { pickOne } from "./utils";
import { useRandomItem } from "./useRandomItem";
import { Button } from "./Button";

export default function App() {
  const { categories, currentCategory, currentItem, pickRandom } =
    useRandomItem();

  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    pickRandom();
  }, []);

  const checkAnswer = (c) => {
    setIsCorrect(c === currentCategory);
    setIsAnswered(true);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>{currentItem}</Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        {isCorrect && isAnswered && (
          <Text style={{ color: "green" }}>Correct!</Text>
        )}
        {!isCorrect && isAnswered && (
          <Text style={{ color: "red" }}>Wrong! ( Was {currentCategory})</Text>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 20,
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        {categories.map((c) => {
          return (
            <Button
              key={c}
              onPress={() => {
                checkAnswer(c);
              }}
              style={{ marginBottom: 5, backgroundColor: "red", width: "48%" }}
            >
              {c}
            </Button>
          );
        })}
      </View>

      <Button
        style={{ width: "100%" }}
        onPress={() => {
          setIsAnswered(false);
          pickRandom();
        }}
      >
        Random
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 30
  }
});

registerRootComponent(App);
