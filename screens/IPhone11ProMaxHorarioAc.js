import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const IPhone11ProMaxHorarioAc = () => {
  return (
    <View style={styles.iPhone11ProMaxHorarioAc}>
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
      <Image
        style={styles.iconlyBoldArrowLeftSquar}
        resizeMode="cover"
        source={require("../assets/iconlyboldarrowleftsquare.png")}
      />
      <Image
        style={styles.avatarIcon}
        resizeMode="cover"
        source={require("../assets/avatar.png")}
      />
      <View style={styles.aulasDoDia}>
        <View style={styles.rectangleView} />
        <View style={styles.aULA3View}>
          <Text style={styles.rEDESBB16SText}>5REDES BB16S</Text>
          <Text style={styles.salaB4S4Text}>Sala B4-S4</Text>
          <Text style={styles.hRText}>21:15 HR</Text>
        </View>
        <View style={styles.aULA2View}>
          <Text style={styles.lABTOPGEOAA25SText}>LABTOPGEO AA25S</Text>
          <Text style={styles.salaB2S2Text}>Sala B2-S2</Text>
          <Text style={styles.hRText1}>19:45 HR</Text>
        </View>
        <View style={styles.aULAView}>
          <Text style={styles.pROGVV26SText}>2PROG VV26S</Text>
          <Text style={styles.salaB2S2Text1}>Sala B2-S2</Text>
          <Text style={styles.hRText2}>19:00 HR</Text>
        </View>
        <Text style={styles.aulasDeHoje}>Aulas de Hoje</Text>
      </View>
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
  iconlyBoldArrowLeftSquar: {
    position: "absolute",
    height: "4.19%",
    width: "9.06%",
    top: "6.36%",
    right: "84.42%",
    bottom: "89.45%",
    left: "6.52%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  avatarIcon: {
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
    height: 168,
  },
  rEDESBB16SText: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -174.5,
    top: "50%",
    left: "50%",
    fontSize: 13,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 127,
    height: 20,
  },
  salaB4S4Text: {
    position: "absolute",
    marginTop: -8,
    marginLeft: -39.5,
    top: "50%",
    left: "50%",
    fontSize: 13,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 80,
    height: 16,
  },
  hRText: {
    position: "absolute",
    marginTop: -6,
    marginLeft: 109.5,
    top: "50%",
    left: "50%",
    fontSize: 13,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 65,
    height: 16,
  },
  aULA3View: {
    position: "absolute",
    marginTop: 27,
    marginLeft: -175,
    top: "50%",
    left: "50%",
    width: 349,
    height: 20,
  },
  lABTOPGEOAA25SText: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -174.5,
    top: "50%",
    left: "50%",
    fontSize: 13,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 127,
    height: 20,
  },
  salaB2S2Text: {
    position: "absolute",
    marginTop: -8,
    marginLeft: -39.5,
    top: "50%",
    left: "50%",
    fontSize: 13,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 80,
    height: 16,
  },
  hRText1: {
    position: "absolute",
    marginTop: -6,
    marginLeft: 109.5,
    top: "50%",
    left: "50%",
    fontSize: 13,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 65,
    height: 16,
  },
  aULA2View: {
    position: "absolute",
    marginTop: 0,
    marginLeft: -175,
    top: "50%",
    left: "50%",
    width: 349,
    height: 20,
  },
  pROGVV26SText: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -174.5,
    top: "50%",
    left: "50%",
    fontSize: 13,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 113,
    height: 16,
  },
  salaB2S2Text1: {
    position: "absolute",
    marginTop: -8,
    marginLeft: -39.5,
    top: "50%",
    left: "50%",
    fontSize: 13,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 80,
    height: 16,
  },
  hRText2: {
    position: "absolute",
    marginTop: -6,
    marginLeft: 109.5,
    top: "50%",
    left: "50%",
    fontSize: 13,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 65,
    height: 16,
  },
  aULAView: {
    position: "absolute",
    marginTop: -27,
    marginLeft: -175,
    top: "50%",
    left: "50%",
    width: 349,
    height: 20,
  },
  aulasDeHoje: {
    position: "absolute",
    marginTop: -69,
    marginLeft: -73,
    top: "50%",
    left: "50%",
    fontSize: 21,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 142,
    height: 16,
  },
  aulasDoDia: {
    position: "absolute",
    marginLeft: -181,
    top: 188,
    left: "50%",
    width: 362,
    height: 168,
  },
  iPhone11ProMaxHorarioAc: {
    position: "relative",
    borderRadius: 46,
    backgroundColor: "#1a1a1a",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default IPhone11ProMaxHorarioAc;
