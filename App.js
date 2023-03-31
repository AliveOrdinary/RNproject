import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoal) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function cancelAddGoalHandler() {
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: 600, marginBottom: 20 }}>
            My Goals
          </Text>
        </View>
        <Button
          title="Add New Goal"
          color="#2f2f2f"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          addGoalHandler={addGoalHandler}
          cancelAddGoalHandler={cancelAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <Text style={{ alignSelf: "center", fontWeight: 500, fontSize: 16 }}>
            List of Goals
          </Text>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  deleteGoalHandler={deleteGoalHandler}
                />
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  goalsContainer: {
    marginTop: 20,
    flex: 5,
    width: "90%",
  },
});
