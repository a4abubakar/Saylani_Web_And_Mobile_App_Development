import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginTextView:{
      marginBottom: '7%',
      marginRight: 1
    },
    loginText:{
      color: 'white',
      fontSize: 32,
      fontWeight: "900"
    },
    textInput:{
      padding: 4,
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      marginBottom: '10%',
      color: 'black',
      backgroundColor:"white"
    },
    textInputView:{
      width: '70%',
      marginBottom: '5%',
    },
    buttonView:{
      backgroundColor: 'blue',
      width: '50%',
      height: '8%',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      // marginBottom: '20%'
    },
    textColor:{
      color: 'black',
    },
    signText:{
      color: 'white',
    },
    signUpView:{
      flex: 0.2,
      marginTop: '3%',
      flexDirection: 'row'
    },
    signupButton:{
      paddingLeft: 4,
      fontSize: 17
    },
    image:{
      width: 100,
      height: 100
    },
    pickerContainer:{
      width: '100%',
      borderBottomColor: 'grey',
      color: 'black',
      backgroundColor: 'white',
    },
    pickerLabel:{
      backgroundColor: '#454957',
    }

  });

  export default styles;