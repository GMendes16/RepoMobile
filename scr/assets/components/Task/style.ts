import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 4,
    backgroundColor: 'black',
    height: 43,
    width: 281,
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: 10, 
  },
  ajuste:{
    flexDirection:'row',

  },
  text: {
    color: themas.colors.gray,
    fontSize: 18,
    textAlign: 'center',
    flex: 1, 
  },
  addTaks: {
    width: 43,
    height: 43,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 10, 
  },
  deleteTaks: {
    width: 43,
    height: 43,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  }
});
