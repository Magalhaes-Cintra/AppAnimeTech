import {Text,ScrollView,Image,View,SafeAreaView,StyleSheet} from 'react-native';

export default function Home(){
  return (
    <SafeAreaView style={styles.container}>    
    <ScrollView>
    <View>
    <Text style={styles.txtinicial}> Dragon Ball Z
</Text>
    <Image style={styles.poster} source={require('../assets/homeperso.jpg')}></Image>
  
      <Text style={styles.txt}>"Dragon Ball Z" is known for its intense battles with superhuman powers, impressive transformations and charismatic characters. The series explores themes of friendship, courage, personal growth and the pursuit of excellence in martial arts.</Text>

      <Text style={styles.txtinicial}> Naruto
</Text>
    <Image style={styles.poster} source={require('../assets/narutohome.jpg')}></Image>
  
      <Text style={styles.txt}>"Naruto"is an anime and manga series created by Masashi Kishimoto that tells the story of Naruto Uzumaki, a young ninja from Vila da Folha, who carries a demonic creature sealed inside him. Naruto dreams of becoming the Hokage, the leader of his village, as a way to gain recognition and overcome his lonely and rejected childhood.</Text>
   </View>

    </ScrollView>
    </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#34e1eb', 
    padding: 8,
    
  },
  poster:{
   flex: 1,
   justifyContent: 'center',
   alignItems:'center',
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
 
txt:{
   color:'#FFF',
}
});
