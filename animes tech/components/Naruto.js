import {Text,ScrollView,Image,View,SafeAreaView,StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function naruto(){
  return (
    <LinearGradient
      colors={['#FFA500 ', '#FFD700']} // Cores do gradiente    
    >
    <SafeAreaView>    
    <ScrollView>
    <View style={styles.container}>
         <View  style={styles.banner}>
    <Text style={styles.txtinicial}> Naruto
</Text>
    <Image style={styles.poster} source={require('../assets/naruto.jpg')}></Image>
  
      <Text style={styles.txt}>Naruto Uzumaki: The protagonist of the series, Naruto is a hyperactive and optimistic ninja who has been rejected and isolated his entire life due to the presence of a demonic creature sealed within him. He seeks recognition, friendship and the fulfillment of his dream of becoming Hokage.</Text>
      </View>
       <Text style={styles.txtinicial}> Personagens</Text>
  <View style={styles.perso}>
    <Image style={styles.img}  source={require('../assets/obito.jpg')}></Image>
    <Image style={styles.img}   source={require('../assets/sasuke.jpg')}></Image>
  </View>    
               <View style={styles.perso}> 
              <Text style={styles.txt1}>Obito</Text>
              <Text style={styles.txt2}>Sosuke</Text>
              </View>



  <View style={styles.perso}>
    <Image style={styles.img}  source={require('../assets/itachi.jpg')}></Image>
    <Image style={styles.img}   source={require('../assets/kisme.jpg')}></Image>
  </View>    
               <View style={styles.perso}> 
              <Text style={styles.txt1}>Itachi</Text>
              <Text style={styles.txt2}>Kisme</Text>
              </View>



  <View style={styles.perso}>
    <Image style={styles.img}  source={require('../assets/orochimaru.jpg')}></Image>
    <Image style={styles.img}   source={require('../assets/haku.jpg')}></Image>
  </View>    
               <View style={styles.perso}> 
              <Text style={styles.txt1}>Orochimaru</Text>
              <Text style={styles.txt2}>Haku</Text>
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
    padding: 8,
  },
   banner:{
     flex: 1,
    justifyContent: 'center',
    alignItems:'center',
   backgroundColor:'#040081',
   borderBottomLeftRadius:40,
   borderBottomRightRadius:40,

  },
  poster:{
   width:300,
   height:400,
   margin:10,
  },
  txtinicial: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#FFFAFA',
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
   marginRight:60,
    color:'#FFFAFA',

 },
 txt2:{
marginLeft:60, 
 color:'#FFFAFA',
},
txt:{
   color:'#FFFAFA',
}
});
