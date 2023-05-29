import React from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Index from "../views/Index";
import Presentation from "../views/Presentation";
import Pokemons from "../views/Pokemons";
import Authors from "../views/Authors";

const NavigationTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Main") {
            iconName = focused ? "earth" : "earth-outline";
            size = focused ? size + 8 : size + 5;
          }
          if (route.name === "presentation") {
            iconName = focused ? "clipboard-sharp" : "clipboard-outline";
            size = focused ? size + 8 : size + 5;
          }
           if (route.name === "authors") {
            iconName = focused ? "person-circle-sharp" : "person-circle-outline";
            size = focused ? size + 8 : size + 5;
          }
  
          return <Ionic name={iconName} size={size} color={color}  style={{ marginBottom: 1 }} />;
        },
        tabBarActiveTintColor: "#8f8f8a",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarStyle: {
          display:
            route.name === "Main" || route.name === "presentation"
              ? "none"
              : "flex",
              backgroundColor: "#FF5757",  
               
        },
        headerStyle: {
            backgroundColor: "#FF5757", // Cambia el color del encabezado aquí
          },
      })}
     
    >
      <Tab.Screen
        name="Main"
        component={Index}
        options={{
          title: "INICIO",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="presentation"
        component={Presentation}
        options={{
          title: "INICIO",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="pokemons"
        component={Pokemons}
        options={{
          title: "Pokemons",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="authors"
        component={Authors}
        options={{
          title: "Autores",
          headerTitleAlign: "center",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "white",
          }
        }}
      />
    
    </Tab.Navigator>
  );
};

export default NavigationTab;
