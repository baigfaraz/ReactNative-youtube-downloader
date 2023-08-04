import React, {useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import getYouTubeID from "get-youtube-id";
import axios from "axios";

function YoutubeToMP3() {
  const [inputUrlRef, setInputUrlRef] = useState("");
  const [urlResult, setUrlResult] = useState(null);

  const handleSubmit = async () => {
    if (urlResult) {
      setUrlResult(null);
    }
    const youtubeId = getYouTubeID(inputUrlRef);

    const options = {
      method: "get",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      headers: {
        "X-RapidAPI-Key": "8ba375b17emshc530d09d1a6b6e0p1770d6jsn2fec0f979250",
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
      params: {
        id: youtubeId,
      },
    };

    try {
      const response = await axios.request(options);

      setUrlResult(response.data.link);
    } catch (error) {
      console.log(error);
    }

    setInputUrlRef("");
  };

  const handleDownload = () => {
    if (urlResult) {
      Linking.openURL(urlResult);
    }
    setUrlResult(null);
  };

  return (
    <View style={styles.app}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.logo}>youtube</Text>
        <Text style={styles.logo1}>2mp3</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.content_title}>YouTube to MP3 converter</Text>
        <Text style={styles.content_description}>
          Transform YouTube videos into MP3 in just a few clicks!
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.form_input}
            placeholder="Paste a YouTube video URL link..."
            keyboardType="url"
            value={inputUrlRef}
            onChangeText={(text) => setInputUrlRef(text)}
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.form_button}>
            <Text style={styles.button_text}>Convert</Text>
          </TouchableOpacity>
        </View>

        {urlResult && (
          <TouchableOpacity
            onPress={handleDownload}
            style={styles.download_btn}
          >
            <Text style={styles.button_text}>Download MP3</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#C4E0E5",
  },
  logo: {
    fontWeight: "bold",
    marginTop: 16,
    fontSize: 22,
    color: "red",
  },
  logo1: {
    fontWeight: "bold",
    marginTop: 16,
    fontSize: 22,
    color: "#2980B9",
  },
  content: {
    alignItems: "center",
    marginTop: 60,
  },
  content_title: {
    fontWeight: "700",
    fontSize: 28,
    marginBottom: 10,
    textAlign: "center",
    color: "red",
  },
  content_description: {
    fontWeight: "500",
    fontSize: 16,
    opacity: 0.9,
    marginBottom: 16,
    textAlign: "center",
    color: "#2980B9",
  },
  form: {
    alignItems: "center",
  },
  form_input: {
    maxWidth: 500,
    minWidth: 300,
    height: 40,
    backgroundColor: "white",
    borderRadius: 3,
    paddingHorizontal: 10,
    fontSize: 13,
    fontWeight:"500",
    marginBottom: 16,
    elevation: 10,
    shadowColor: "#2980B9",
  },
  form_button: {
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980B9",
    borderRadius: 3,
    marginBottom: 40,
  },
  download_btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "red",
    borderRadius: 3,
  },
  button_text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default YoutubeToMP3;
