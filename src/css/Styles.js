import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  index: {
    container: {
      flex: 1,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
      height: '100%',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      marginTop:"55%",
    },
    button: {
      backgroundColor: 'blue',
      paddingVertical: 20,
      paddingHorizontal: 100,
      marginTop:"100%",
      borderRadius: 15,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    overlayImage: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
  },
  pokemon:{
    container: {
      backgroundColor: '#fff',
      borderRadius: 8,
      elevation: 4,
      marginBottom: 16,
    },
    image: {
      width: '100%',
      height: 200,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    content: {
      padding: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 14,
      color: '#888',
    },
  },
  Input_Decorated:{
    inputs: {
      margin:"auto",
      borderWidth: 1,
      width: "88%",
      borderRadius: 40,
      marginLeft: 25,
      marginTop: 20,
      marginBottom:10,
      borderColor: "#F5F5F5",
      padding: 15,
      backgroundColor: "white",
      color: "#212121",
      fontSize: 16,
    },
  },
  Authors:{
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      marginTop:"35%",
    },
    button: {
      backgroundColor: 'black',
      paddingVertical: 20,
      paddingHorizontal: 50,
      marginTop:"100%",
      borderRadius: 15,
    },
  }
});
