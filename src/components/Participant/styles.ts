import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1f1e25",
    width: "100%",
    flexDirection: 'row',
    borderRadius: 8,
    alignItems: 'center',
    height: 56,
    marginBottom: 10,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 16,
    flex: 1,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: "#e23c44",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
