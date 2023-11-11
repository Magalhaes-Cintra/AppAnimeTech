import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'

import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Firebase from '../Firebase';

export default function Login() {
  const navigation = useNavigation();
  const [initializing, setInitializing] = useState(true);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');

  function login() {
    Firebase.auth()
      .signInWithEmailAndPassword(email, senha)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  }

  useEffect(() => {
    Firebase.auth().onAuthStateChanged(function (user) {
      setUser(user);
      if (initializing) setInitializing(false);
    });
  }, []);

  if(user) {
    return navigation.navigate('Home');
  } 
  else {
    console.log('email ou senha errada');
  }

  return (
    <SafeAreaView style={estilos.container}>
      <Image source={require('../assets/goku.jpg')} style={estilos.logo} />

      <Text style={estilos.textoentrada}> Animes Tech </Text>

      <TextInput
        placeholderTextColor={'#fff'}
        style={estilos.textoinput}
        placeholder="Digite o email"
        onChangeText={(email) => setEmail(email)}
        value={email}
      />

      <TextInput
        placeholderTextColor={'#fff'}
        style={estilos.textoinput}
        placeholder="Digite a senha"
        onChangeText={(senha) => setSenha(senha)}
        value={senha}
      />

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => {
          login();
        }}>
        <Text style={estilos.textobotao}> Acessar </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },

  logo: {
    width: 250,
    height: 250,
    borderRadius: 150,
  },

  textoinput: {
    width: 250,
    height: 20,
    backgroundColor: '#000',
    color: '#fff',
    marginTop: 10,
    fontSize: 20,
    alignItems: 'center',
  },

  textoentrada: {
    marginTop: 55,
    margimBottom: 35,
    fontSize: 25,
    color: '#480082',
    fontWeight: 'bold',
    paddingVertical: 14,
  },

  botao: {
    width: 200,
    backgroundColor: '#00008B',
    height: 40,
    marginTop: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textobotao: {
    fontSize: 30,
    color: '#FFF5EE',
    fontWeight: 'bold',
  },
});