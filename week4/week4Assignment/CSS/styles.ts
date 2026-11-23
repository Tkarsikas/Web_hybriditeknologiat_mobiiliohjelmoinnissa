import { StyleSheet } from "react-native";
import { theme } from "./theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  headerText: {
    textAlign: "center",
    padding: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    borderColor: theme.colors.border,
    borderWidth: 2,
    marginBottom: 4,
  },
  saveButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 6,
  },
  saveText: {
    fontSize: 20,
    color: "#2e6a9b",
    fontWeight: "bold",
  },
  textInputText: {
    flex: 1,
    fontSize: 20,
    paddingHorizontal: 8,
  },
  todoRow: {
    flexDirection: "row",
    backgroundColor: theme.colors.background,
    padding: 4,
    margin: 4,
    borderColor: theme.colors.border,
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: "center",
  },
  todoText: {
    flex: 1,
    color: theme.colors.text,
  },
  deleteButton: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "600",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#999",
  },
});

export default styles;
