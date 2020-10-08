
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    paddingTop: 15,
    paddingLeft: 15,
    color: 'white',
    fontSize: 20,
  },
  textBlack:{
    paddingTop: 15,
    paddingLeft: 15,
    color: 'black',
    fontSize: 20,
  },
  title: {
      paddingTop:20,
      fontSize:25,
      color: 'black',
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
    width:'100%'
  },
  image:{
    height:50,
    width:50
  },
  Teddy:{
    justifyContent: 'center',
    alignItems: 'center',
    height:'40%',
    width:'40%'
  },
  ListEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    backgroundColor: 'white',
  },
  Alphabet: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    color: 'white',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 5,
    height: 40,
    width: 250,
  },

});

  export default styles;