// npm install @react-navigation/native (instala o pacote de navegação q funciona do Expo e sem expo)
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// npm install @react-navigation/stack - vamos usar navegação por stack (clique em botões) - se quiser navegar por icones na base do app ou menu hambuger com links q abrem tem q instalar outros pacotes
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; //vai sempre envolta de todas as rotas
import { createStackNavigator } from '@react-navigation/stack';

import Incidents from './pages/incidents';
import Detail from './pages/detail';

const AppStack = createStackNavigator(); // primeira navegação criada e dentro dele cadastramos nossas rotas

export default function Routes() {
    return(
        <NavigationContainer> 
            <AppStack.Navigator screenOptions={{headerShown: false}} >
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />

            </AppStack.Navigator>

        </NavigationContainer>
    );
}