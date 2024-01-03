import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { useState } from "react";
import ApiCall from "./components/apicall";
// view -> container that will wrap multiple components together

export default function App() {
  /* var, function */
  const [value, setValue] = useState(""); // Use stat as string
  const [listOfNotes, setListOfNotes] = useState([]); // Use state as array

  // Gets the text of the input and saves it in the variable value
  function handleOnChangeText(getEnteredText) {
    setValue(getEnteredText);
  }

  //When button is clicked, the value of the previous function (stored in value) is added to the array
  function handleOnPressButton() {
    setListOfNotes((currentNotes) => [...currentNotes, value]);
    setValue("");
  }

  function handleRemoveItem(getCurrentIndex) {
    let cpyListOfNotes = [...listOfNotes];

    cpyListOfNotes = cpyListOfNotes.filter(
      (_, index) => getCurrentIndex !== index
    );
    setListOfNotes(cpyListOfNotes);
  }

  return (
    <View
      style={{
        padding: 60,
        paddingHorizontal: 15,
        flex: 1,
      }}
    >
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleOnChangeText}
          style={styles.input}
          placeholder="Add Your Note Here"
          value={value}
        />
        <Button onPress={handleOnPressButton} color={"#000"} title="Add note" />
      </View>
      <View style={styles.listContainer}>
        {/* Scrollview does render all items. FlatList does only render items that are visible on the screen. Flatlist is also much cleaner becaus logic is already handled */}
        <FlatList
          data={listOfNotes}
          renderItem={(itemData) => (
            <Pressable onPress={() => handleRemoveItem(itemData.index)}>
              <Text style={styles.listItem}>{itemData.item}</Text>
            </Pressable>
          )}
        />
      </View>
      <View style={styles.apiContainer}>
        <ApiCall />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingBottom: 30,
    borderBottomWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  },
  listContainer: {
    paddingTop: 30,
    flex: 1,
  },
  listItem: {
    borderRadius: 1,
    borderColor: "red",
    backgroundColor: "green",
    padding: 20,
    marginBottom: 20,
    color: "#fff",
    fontSize: 20,
  },
  apiContainer : {
    flex: 2,
  }
});
