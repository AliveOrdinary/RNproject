import { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image />
        <TextInput
          style={styles.inputFied}
          placeholder="Type goals"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.btnContainer}>
          <Button title="Add Goal" onPress={addGoalHandler} />
          <Button title="cancel" onPress={props.cancelAddGoalHandler} />
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  inputFied: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "60%",
    marginTop: 10,
  },
});
