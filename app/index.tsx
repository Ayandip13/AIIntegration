import Colors from "@/shared/Colors";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 40,
      }}
    >
      <Image
        source={require("@/assets/images/android-icon-foreground.png")}
        style={{
          width: Dimensions.get("window").width * 0.85,
          height: 200,
          marginBottom: 50,
        }}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold", color: Colors.PRIMARY }}>
        Welcome to AI Pocket GPT
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: Colors.DARK_GREY,
          marginTop: 10,
          textAlign: "center",
        }}
      >
        Your Ultimate AI Companion to make your life easier
      </Text>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          marginTop: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 15,
          width: "100%",
          shadowColor: Colors.PRIMARY,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: Colors.WHITE,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}
