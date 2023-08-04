import { keyboardVisible } from "react-native";
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Dashboard from "./Dashboard";
import ShareUs from "./ShareUs";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = Platform.OS === "ios" ? "ios-home" : "md-home";
          } else if (route.name === "Settings") {
            iconName = "settings-outline";
          } else if (route.name === "Share Us") {
            iconName = "share-social-outline";
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
        tabBarStyle: {
          display: "flex",
          height: keyboardVisible ? 0 : 65, // Set the height of the tab bar here
          backgroundColor: "#C4E0E5",
          borderTopWidth: 0.3,
          borderTopColor: "#2980B9",
          // shadowColor:'#2980B9',
        },

        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        keyboardHidesTabBar: true,
        tabBarLabelStyle: {
          marginBottom: 10, // Adjust the space between icon and label here
          fontWeight: "500",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      {/* <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      /> */}
      <Tab.Screen
        name="Share Us"
        component={ShareUs}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
