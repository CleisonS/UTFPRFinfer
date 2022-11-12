import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IPhone11ProMaxSing = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iPhone11ProMaxSing}>
      <Text style={styles.uTFPRFinderText}>UTFPRFinder</Text>
      <View style={styles.appleIDView}>
        <View style={styles.rectangleView} />
        <Text style={styles.appleIDText}>AppleID</Text>
        <Image
          style={styles.appleLogo1Icon}
          resizeMode="cover"
          source={require("../assets/applelogo-1.png")}
        />
      </View>
      <Pressable
        style={styles.googlePressable}
        onPress={() => navigation.navigate("IPhone11ProMaxHome")}
      >
        <View style={styles.rectangleView1} />
        <Text style={styles.googleText2}>
          <Text style={styles.googleText1}>
            <Text style={styles.googleText}>Google</Text>
          </Text>
          <Text style={styles.blankLineText1}>
            <Text style={styles.blankLineText}> </Text>
          </Text>
        </Text>
        <Image
          style={styles.google1Icon}
          resizeMode="cover"
          source={require("../assets/google-1.png")}
        />
      </Pressable>
      <Text style={styles.aoContinuarVocConcordaCom}>
        Ao continuar você concorda com os termos e condições
      </Text>
      <Pressable
        style={styles.cadastrarSePressable}
        onPress={() => navigation.navigate("IPhone11ProMaxCadrastro")}
      >
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Text style={styles.cadastrarSeText1}>
          <Text style={styles.cadastrarSeText}>
            <Text style={styles.cadastrarText}>Cadastrar</Text>
            <Text style={styles.seText}>-se</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={styles.text}>{` `}</Text>
          </Text>
        </Text>
        <Image
          style={styles.document1Icon}
          resizeMode="cover"
          source={require("../assets/document-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.loginPressable}
        onPress={() => navigation.navigate("IPhone11ProMaxHome")}
      >
        <Image
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Text style={styles.loginText1}>
          <Text style={styles.loginText}>Login</Text>
          <Text style={styles.text2}>{` `}</Text>
        </Text>
        <Image
          style={styles.profile1Icon}
          resizeMode="cover"
          source={require("../assets/profile-1.png")}
        />
      </Pressable>
      <Image
        style={styles.scott2Icon}
        resizeMode="cover"
        source={require("../assets/scott-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  uTFPRFinderText: {
    position: "absolute",
    marginTop: -76,
    marginLeft: -119,
    top: "50%",
    left: "50%",
    fontSize: 37,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 238,
    height: 36,
  },
  rectangleView: {
    position: "absolute",
    marginLeft: -75.5,
    top: 0,
    left: "50%",
    borderRadius: 30,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 151,
    height: 48,
  },
  appleIDText: {
    position: "absolute",
    height: "33.33%",
    width: "39.74%",
    top: "33.33%",
    left: "30.46%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  appleLogo1Icon: {
    position: "absolute",
    top: 9,
    left: 12,
    width: 31,
    height: 31,
  },
  appleIDView: {
    position: "absolute",
    marginLeft: 28,
    top: 720,
    left: "50%",
    width: 151,
    height: 48,
  },
  rectangleView1: {
    position: "absolute",
    marginLeft: -75.5,
    top: 0,
    left: "50%",
    borderRadius: 30,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 151,
    height: 48,
  },
  googleText: {
    fontSize: 15,
  },
  googleText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText: {
    fontSize: 16,
  },
  blankLineText1: {
    margin: 0,
  },
  googleText2: {
    position: "absolute",
    height: "31.91%",
    width: "36.42%",
    top: "33.33%",
    left: "31.79%",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  google1Icon: {
    position: "absolute",
    top: 9,
    left: 13,
    width: 31,
    height: 31,
  },
  googlePressable: {
    position: "absolute",
    marginLeft: -180,
    top: 720,
    left: "50%",
    width: 151,
    height: 48,
  },
  aoContinuarVocConcordaCom: {
    position: "absolute",
    top: 848,
    left: 60,
    fontSize: 11,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 294,
    height: 16,
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 146,
    width: 321,
    height: 48,
  },
  cadastrarText: {
    fontSize: 15,
  },
  seText: {
    fontSize: 16,
  },
  cadastrarSeText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text: {
    fontSize: 15,
  },
  text1: {
    margin: 0,
  },
  cadastrarSeText1: {
    position: "absolute",
    marginTop: -12.36,
    marginLeft: -160.5,
    top: "50%",
    left: "50%",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 321,
    height: 23.27,
  },
  document1Icon: {
    position: "absolute",
    top: 8,
    left: 23,
    width: 31,
    height: 31,
    overflow: "hidden",
  },
  cadastrarSePressable: {
    position: "absolute",
    top: 606,
    left: 46,
    width: 321,
    height: 48,
  },
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 146,
    width: 321,
    height: 48,
  },
  loginText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text2: {
    margin: 0,
  },
  loginText1: {
    position: "absolute",
    marginTop: -12.36,
    marginLeft: -160.5,
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 321,
    height: 23.27,
  },
  profile1Icon: {
    position: "absolute",
    top: 8,
    left: 23,
    width: 31,
    height: 31,
    overflow: "hidden",
  },
  loginPressable: {
    position: "absolute",
    top: 538,
    left: 46,
    width: 321,
    height: 48,
  },
  scott2Icon: {
    position: "absolute",
    top: 21,
    left: 3,
    width: 423,
    height: 408,
  },
  iPhone11ProMaxSing: {
    position: "relative",
    borderRadius: 46,
    backgroundColor: "#1a1a1a",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default IPhone11ProMaxSing;
