import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#131000",
    alignItems: "baseline",
    justifyContent: "flex-start",
    
  },
  eventName: {
    marginTop: 72,
    marginBottom: 12,
    fontWeight: "bold",
    fontSize: 24,
    color: "#FFF",
  },
  eventDate: {
    fontSize: 16,
    color: "#c6c6c6",
  },
  input: {
    flex: 1,
    backgroundColor: "#1f1e25",
    height: 56,
    borderRadius: 8,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    marginBottom: 48,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: "#31cf67",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    flexDirection: "row",
    width: "100%",
    marginTop: 24,
  },
  list: {
    flex: 1,
    width: '100%'
  },
  emptyList: {
    color: '#fff',
    textAlign: "center",
  }
});
