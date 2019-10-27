import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    flexDirection: "row",
  },
  ham: {
    padding: 10
  },
  logoutView: {
    marginTop: 10,
    backgroundColor: 'black',
    width: '50%',
    height: 40,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  }
});

export default styles;