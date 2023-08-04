import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Dashboard({ navigation }) {
  return (
    <View style={styles.app}>
      <View style={styles.mainHeading}>
        <Text style={styles.mainHeadingText}>Youtube Video/MP3 Downloader</Text>
      </View>
      <View style={styles.imageSection}>
        <Image
          source={require("../assets/download.png")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.videoDownloaderButton}
          onPress={() => {
            navigation.navigate("MP4");
          }}
        >
          <Icon name="download" size={35} color="#2980B9" />
          <View>
            <Text style={styles.ytDownloaderText1}>
              Youtube Video Downloader
            </Text>
            <Text style={styles.ytDownloaderText2}>
              Paste URL's and download videos
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mp3DownloaderButton}
          onPress={() => {
            navigation.navigate("MP3");
          }}
        >
          <Icon name="download" size={35} color="red" />
          <View>
            <Text style={styles.mp3DownloaderText1}>MP3 Downloader</Text>
            <Text style={styles.mp3DownloaderText2}>
              Paste URL's and download audio
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    padding: 16,
    backgroundColor: "#C4E0E5",
  },
  mainHeading: {
    width: "100%",
    height: "12%",
    alignItems: "center",
    justifyContent: "center",
  },
  mainHeadingText: {
    fontSize: 19,
    fontWeight: "700",
    color:'red',
  },
  imageSection: {
    width: "100%",
    height: "39%",
    padding: 20,
  },
  image: {
    width: "100%",
    borderRadius: 16,
    height: "100%",
  },
  buttons: {
    width: "100%",
    height: "35%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flexDirection: "column",
  },
  videoDownloaderButton: {
    width: "100%",
    height: "25%",
    backgroundColor: "#B2FEFA",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
  },
  mp3DownloaderButton: {
    width: "100%",
    height: "25%",
    backgroundColor: "#FFAFBD",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  ytDownloaderText1: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#2980B9",
  },
  ytDownloaderText2: {
    fontSize: 11,
    fontWeight: "500",
    marginLeft: 10,
    color: "#2980B9",
  },
  mp3DownloaderText1: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    color: "red",
  },
  mp3DownloaderText2: {
    fontSize: 11,
    fontWeight: "500",
    marginLeft: 10,
    color: "red",
  },
});
