import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

screen: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    paddingTop: 15,
    paddingLeft: 15,
    color: 'white',
    fontSize: 20,
  },
  title: {
      paddingTop:20,
      fontSize:25,
      color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    height:'100%',
    width:'100%'
  },
  Teddy:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height:'20%',
    width:'20%'
  },
  ListEmpty: {
    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    height: 50,
    width: 50,

    backgroundColor: 'white'
  },
  Alphabet: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    color: 'white',
  },

});

  export default styles;