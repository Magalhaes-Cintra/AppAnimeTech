import {createStackNavigator} from'@react-navigation/stack';

import Login from './Login';
import Rotastab from './Rotastab';

const Stack = createStackNavigator();

export default function Rotas(){
  return(
    <Stack.Navigator inicialRouteName='Login'>
    
  <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
  <Stack.Screen name="Home" component={Rotastab} options={{ headerShown: false}}/>
    </Stack.Navigator>
  );
}
