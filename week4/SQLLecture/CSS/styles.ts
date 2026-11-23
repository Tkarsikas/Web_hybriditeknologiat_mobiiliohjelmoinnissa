import { StyleSheet } from "react-native";
import { theme } from "./theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
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
    backgroundColor: "#FF3B30",
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
