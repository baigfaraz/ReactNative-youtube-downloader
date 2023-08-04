import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./components/BottomTab";
import YoutubeToMP4 from "./components/Youtube-to-mp4";
import YoutubeToMP3 from "./components/Youtube-to-mp3";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MP4"
          component={YoutubeToMP4}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
            headerTitleStyle: {
              display: "none",
            },
            headerTintColor: "#2980B9",
          }}
        />
        <Stack.Screen
          name="MP3"
          component={YoutubeToMP3}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
            headerTitleStyle: {
              display: "none",
            },
            headerTintColor: "#2980B9",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
