import {NavigationContainer} from '@react-navigation/native';

import Rotas from './components/Rotas';
import Rotastab from './components/Rotastab';

export default function app() {
  return (
<NavigationContainer>
<Rotas />
</NavigationContainer>
  );
}

export function Home() {
  return (
<NavigationContainer>
<Rotastab />
</NavigationContainer>
  );
}