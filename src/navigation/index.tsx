import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "./routes";
import Dashboard from "../screen/dashboard";
import PostDetailScreen from "../screen/postdetails";

const Stack = createNativeStackNavigator();

const AppNaviagator = () => {
  const headerStyle = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.Dashboard}
          component={Dashboard}
          options={headerStyle}
        />
        <Stack.Screen
          name={Routes.PostDetails}
          component={PostDetailScreen}
          options={headerStyle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNaviagator;
