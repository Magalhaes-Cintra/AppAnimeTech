import {createBottomTabNavigator} from'@react-navigation/bottom-tabs';
import{MaterialCommunityIcons}from "@expo/vector-icons";
 
import Home from "./Home";
import DBZ from "./DBZ";
import Naruto from "./Naruto";
 
const Tab = createBottomTabNavigator();
export default function Rotastab(){
 
  return(
   <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
 
  <Tab.Screen name="DBZ" component={DBZ} options={{tabBarIcon:({color,size})=><MaterialCommunityIcons name="star" color={'#F2BED1'} size={35}/>}}/>
 
  <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({color,size})=><MaterialCommunityIcons  name="home" color={color} size={35}/>}}/>
 
  <Tab.Screen name="Naruto" component={Naruto}  options={{tabBarIcon:({color,size})=><MaterialCommunityIcons  name="star" color={'#80B3FF'} size={35}/>}}/>
</Tab.Navigator>
  );
 
}
