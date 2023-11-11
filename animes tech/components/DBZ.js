import {Text,ScrollView,Image,View,SafeAreaView,StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useFonts,ShantellSans_500Medium} from '@expo-google-fonts/dev';
export default function dbz(){
  let [fontsLoaded, fontError] = useFonts({
    ShantellSans_500Medium
  });

  //se a  fontes nao existi 
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
     <LinearGradient
      colors={['#700000','#000000']} // Cores do gradiente    
    >
    <SafeAreaView>    
    <ScrollView>
    <View style={styles.container}>
     <View  style={styles.banner}>
    <Text style={styles.txtinicial}> Dragon Ball Z</Text>

    <Image style={styles.poster} source={require('../assets/goku.jpg')}></Image>
  
      <Text style={styles.txt}>Goku: The hero of the series, Goku is a Saiyan who is known for his cheerful personality and his constant desire to become stronger. He is the main protagonist and is easily recognizable by his spiky hair and orange outfit.</Text>
     </View> 
       <Text style={styles.txtinicial}> Personagens</Text>
  <View style={styles.perso}>
    <Image style={styles.img}  source={require('../assets/chaos.jpg')}></Image>
    <Image style={styles.img}   source={require('../assets/oolong.jpg')}></Image>
  </View>    
               <View style={styles.perso}> 
              <Text style={styles.txt1}>Chaos</Text>
              <Text style={styles.txt2}>Oolong</Text>
              </View>



  <View style={styles.perso}>
    <Image style={styles.img}  source={require('../assets/gokublack.jpg')}></Image>
    <Image style={styles.img}   source={require('../assets/trunks.jpg')}></Image>
  </View>    
               <View style={styles.perso}> 
              <Text style={styles.txt1}>Goku Black</Text>
              <Text style={styles.txt2}>Trunks</Text>
              </View>



  <View style={styles.perso}>
    <Image style={styles.img}  source={require('../assets/bulma.jpg')}></Image>
    <Image style={styles.img}   source={require('../assets/zenio.jpg')}></Image>
  </View>    
               <View style={styles.perso}> 
              <Text style={styles.txt1}>Bulma</Text>
              <Text style={styles.txt2}>Zen Io</Text>
              </View>

       <View style={styles.perso}>
    <Image style={styles.img}  source={require('../assets/gohan.jpg')}></Image>
    <Image style={styles.img}   source={require('../assets/piccolo.jpg')}></Image>
  </View>    
               <View style={styles.perso}> 
              <Text style={styles.txt1}>Gohan</Text>
              <Text style={styles.txt2}>Piccolo</Text>
              </View>

    </View>
    </ScrollView>
    </SafeAreaView>
    </LinearGradient>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
   
  },
  poster:{
   width:300,
   height:400,
   margin:10,
  },
  banner:{
     flex: 1,
    justifyContent: 'center',
    alignItems:'center',
   backgroundColor:'#700000',
   borderBottomLeftRadius:40,
   borderBottomRightRadius:40,

  },
  txtinicial: {
    margin: 24,
    fontSize: 30,
    textAlign: 'center',
    color:'#FFFAFA',
    fontFamily: 'ShantellSans_500Medium'

  },
  perso:{
   justifyContent:'center',
   alignItems:'center',
   flexDirection:'row',
  },
 img:{
   width:170,
   height:180,
   margin:10,
   borderRadius:30,
 },
 txt1:{
   fontSize: 20,
   marginRight:60,
    color:'#FFFAFA',
    fontFamily: 'ShantellSans_500Medium'
 },
 txt2:{
   fontSize: 20,
marginLeft:60, 
 color:'#FFFAFA',
     fontFamily: 'ShantellSans_500Medium'
},
txt:{
   color:'#FFFAFA',
   margin:20,
     fontSize: 20,
    fontFamily: 'ShantellSans_500Medium'
}
});
