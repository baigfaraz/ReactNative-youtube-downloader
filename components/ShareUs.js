import { useClipboard } from "@react-native-community/clipboard";
import {
  Share,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Clipboard,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ShareUs = () => {
  const shareMessage = async () => {
    const options = {
      message: "http://youtube-to-videos/MP3-converter.com",
    };

    try {
      const response = await Share.share(options);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const CopyUrl = () => {
    const textToCopy = "http://youtube-to-videos/MP3-converter.com";
    Clipboard.setString(textToCopy);
    ToastAndroid.show("Text copied", ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Text style={styles.mainHeading}>Youtube video/MP3 Downloader</Text>
        <Text style={styles.description}>
          Share this app with your freinds. Copy URL or share with social..
        </Text>
        <View style={styles.urlView}>
          <Text style={styles.urlText}>
            http://youtube-to-videos/MP3-converter.com
          </Text>
          <TouchableOpacity onPress={CopyUrl}>
            <Icon name="copy-outline" color="red" size={24} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.shareButton} onPress={shareMessage}>
          <Text style={styles.shareButtonText}>Share Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C4E0E5",
    padding: 16,
  },
  mainView: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  mainHeading: {
    fontSize: 19,
    fontWeight: "700",
    color: "red",
  },
  description: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
    color: "#2980B9",
  },
  urlView: {
    height: 60,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2980B9",
  },
  urlText: {
    fontSize: 13,
    fontWeight: "500",
    marginRight: 5,
  },
  shareButton: {
    height: 50,
    width: "30%",
    backgroundColor: "#2980B9",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  shareButtonText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "white",
  },
});

export default ShareUs;
