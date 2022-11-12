const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import IPhone11ProMaxSing from "./screens/IPhone11ProMaxSing";
import IPhone11ProMaxHome from "./screens/IPhone11ProMaxHome";
import IPhone11ProMaxPerfil from "./screens/IPhone11ProMaxPerfil";
import IPhone11ProMaxPerfilPro from "./screens/IPhone11ProMaxPerfilPro";
import IPhone11ProMaxCadrastro from "./screens/IPhone11ProMaxCadrastro";
import IPhone11ProMaxMapaProfe from "./screens/IPhone11ProMaxMapaProfe";
import IPhone11ProMaxMapaAluno from "./screens/IPhone11ProMaxMapaAluno";
import IPhone11ProMaxHorarioAc from "./screens/IPhone11ProMaxHorarioAc";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone11ProMaxSing"
              component={IPhone11ProMaxSing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMaxHome"
              component={IPhone11ProMaxHome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMaxPerfil"
              component={IPhone11ProMaxPerfil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMaxPerfilProfessor"
              component={IPhone11ProMaxPerfilPro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMaxCadrastro"
              component={IPhone11ProMaxCadrastro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMaxMapaProfessor"
              component={IPhone11ProMaxMapaProfe}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMaxMapaAluno"
              component={IPhone11ProMaxMapaAluno}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMaxHorarioAcademico"
              component={IPhone11ProMaxHorarioAc}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
