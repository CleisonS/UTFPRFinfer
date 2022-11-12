import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IPhone11ProMaxMapaProfe = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iPhone11ProMaxMapaProfe}>
      <Image
        style={styles.search1Icon}
        resizeMode="cover"
        source={require("../assets/search-1.png")}
      />
      <Image
        style={styles.plus1Icon}
        resizeMode="cover"
        source={require("../assets/plus-11.png")}
      />
      <Pressable
        style={styles.iconlyBoldArrowLeftSquarPressable}
        onPress={() => navigation.navigate("IPhone11ProMaxHome")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/iconlyboldarrowleftsquare.png")}
        />
      </Pressable>
      <Image
        style={styles.perfilProfIcon}
        resizeMode="cover"
        source={require("../assets/perfil-prof1.png")}
      />
      <View style={styles.aulasDoDia}>
        <View style={styles.rectangleView} />
        <View style={styles.aULAView}>
          <Text style={styles.pROGVV26SText}>2PROG VV26S</Text>
          <Text style={styles.salaB2S2Text}>Sala B2-S2</Text>
        </View>
        <Image
          style={styles.arrowDown21}
          resizeMode="cover"
          source={require("../assets/arrow--down-2-1.png")}
        />
        <Image
          style={styles.editSquare1}
          resizeMode="cover"
          source={require("../assets/edit-square-1.png")}
        />
      </View>
      <Image
        style={styles.mapaUTFPRDV1}
        resizeMode="cover"
        source={require("../assets/mapa-utfprdv-1.png")}
      />
      <Image
        style={styles.location212}
        resizeMode="cover"
        source={require("../assets/location-2--1-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search1Icon: {
    position: "absolute",
    top: 64,
    left: 313,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  plus1Icon: {
    position: "absolute",
    top: 831,
    left: 187,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconlyBoldArrowLeftSquarPressable: {
    position: "absolute",
    left: "6.52%",
    top: "6.36%",
    right: "84.42%",
    bottom: "89.45%",
    width: "9.06%",
    height: "4.19%",
  },
  perfilProfIcon: {
    position: "absolute",
    top: 54,
    left: 353,
    width: 44,
    height: 44,
  },
  rectangleView: {
    position: "absolute",
    marginLeft: -181,
    top: 0,
    left: "50%",
    borderRadius: 15,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 362,
    height: 57,
  },
  pROGVV26SText: {
    position: "absolute",
    marginTop: -3.05,
    marginLeft: -107.5,
    top: "50%",
    left: "50%",
    fontSize: 13,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 113,
    height: 5.43,
  },
  salaB2S2Text: {
    position: "absolute",
    marginTop: -2.37,
    marginLeft: 27.5,
    top: "50%",
    left: "50%",
    fontSize: 13,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 80,
    height: 5.43,
  },
  aULAView: {
    position: "absolute",
    marginTop: -8.5,
    marginLeft: -108,
    top: "50%",
    left: "50%",
    width: 215,
    height: 6.11,
  },
  arrowDown21: {
    position: "absolute",
    top: 17,
    left: 293,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  editSquare1: {
    position: "absolute",
    top: 12,
    left: 16,
    width: 33,
    height: 33,
    overflow: "hidden",
  },
  aulasDoDia: {
    position: "absolute",
    marginLeft: -187,
    top: 183,
    left: "50%",
    width: 362,
    height: 57,
  },
  mapaUTFPRDV1: {
    position: "absolute",
    top: 258,
    left: 0,
    width: 512,
    height: 472,
  },
  location212: {
    position: "absolute",
    top: 450,
    left: 128,
    width: 19,
    height: 29,
    overflow: "hidden",
  },
  iPhone11ProMaxMapaProfe: {
    position: "relative",
    borderRadius: 46,
    backgroundColor: "#1a1a1a",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default IPhone11ProMaxMapaProfe;
