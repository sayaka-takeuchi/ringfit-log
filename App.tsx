import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import AddLogScreen from "./Screens/AddLogScreen";
import LogDetailScreen from "./Screens/LogDetailScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
          <Stack.Screen name={"Home"} component={HomeScreen} />
          <Stack.Screen name={"AddLog"} component={AddLogScreen} />
          <Stack.Screen name={"LogDetail"} component={LogDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;