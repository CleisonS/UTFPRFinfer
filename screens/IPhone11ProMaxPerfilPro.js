import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IPhone11ProMaxPerfilPro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iPhone11ProMaxPerfilPro}>
      <Text style={styles.profFulanoDeTal}>Prof Fulano de tal</Text>
      <View style={styles.editarPerfilView}>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-12.png")}
        />
        <Text style={styles.editarPerfilText}>Editar Perfil</Text>
      </View>
      <Pressable
        style={styles.home1Pressable}
        onPress={() => navigation.navigate("IPhone11ProMaxHome")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/home-1.png")}
        />
      </Pressable>
      <Text style={styles.fulanodetalabcdcomText}>fulanodetal@abcd.com</Text>
      <View style={styles.aulasDoDia}>
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
        <View style={styles.rectangleView2} />
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
        <Text style={styles.diciplinasText}>Diciplinas</Text>
      </View>
      <Image
        style={styles.iconlyBoldArrowLeftSquar}
        resizeMode="cover"
        source={require("../assets/iconlyboldarrowleftsquare.png")}
      />
      <View style={styles.cadastrarDiciplinaView}>
        <View style={styles.rectangleView3} />
        <View style={styles.cadastrarView}>
          <Image
            style={styles.rectangleIcon1}
            resizeMode="cover"
            source={require("../assets/rectangle-14.png")}
          />
          <Text style={styles.cadastrarText}>Cadastrar</Text>
        </View>
        <Text style={styles.cdigoMatriaText}>Código matéria</Text>
        <Text style={styles.cdigoMatriaText1}>Código matéria</Text>
        <Text style={styles.cdigoSalaText}>Código sala</Text>
        <Text style={styles.cadastrarDiciplinaText}>Cadastrar diciplina</Text>
      </View>
      <View style={styles.logoutView}>
        <View style={styles.rectangleView4} />
        <Text style={styles.logOutText}>Log out</Text>
        <Image
          style={styles.logout1Icon}
          resizeMode="cover"
          source={require("../assets/logout-1.png")}
        />
      </View>
      <Image
        style={styles.perfilProfIcon}
        resizeMode="cover"
        source={require("../assets/perfil-prof.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profFulanoDeTal: {
    position: "absolute",
    marginTop: -235,
    marginLeft: -158,
    top: "50%",
    left: "50%",
    fontSize: 37,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 316,
    height: 36,
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 146,
    width: 120,
    height: 33,
  },
  editarPerfilText: {
    position: "absolute",
    marginTop: -8.5,
    marginLeft: -41,
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  editarPerfilView: {
    position: "absolute",
    top: 285,
    left: 147,
    width: 120,
    height: 33,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  home1Pressable: {
    position: "absolute",
    left: 187,
    top: 833,
    width: 40,
    height: 40,
  },
  fulanodetalabcdcomText: {
    position: "absolute",
    marginTop: -192,
    marginLeft: -136,
    top: "50%",
    left: "50%",
    fontSize: 15,
    textDecoration: "underline",
    fontWeight: "100",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 271,
    height: 16,
  },
  rectangleView: {
    position: "absolute",
    marginLeft: -172,
    top: 34,
    left: "50%",
    borderRadius: 15,
    backgroundColor: "#333",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 344,
    height: 174,
  },
  rectangleView1: {
    position: "absolute",
    marginLeft: -177,
    top: 29,
    left: "50%",
    borderRadius: 15,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 354,
    height: 169,
  },
  rectangleView2: {
    position: "absolute",
    marginLeft: -181,
    top: 23,
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
    marginTop: 30,
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
    marginTop: -16,
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
    marginTop: -62,
    marginLeft: -177,
    top: "50%",
    left: "50%",
    width: 349,
    height: 20,
  },
  diciplinasText: {
    position: "absolute",
    marginTop: -104,
    marginLeft: -175,
    top: "50%",
    left: "50%",
    fontSize: 15,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#4f4f4f",
    textAlign: "left",
    width: 74,
    height: 16,
  },
  aulasDoDia: {
    position: "absolute",
    marginLeft: -181,
    top: 517,
    left: "50%",
    width: 362,
    height: 208,
  },
  iconlyBoldArrowLeftSquar: {
    position: "absolute",
    height: "4.19%",
    width: "9.06%",
    top: "6.36%",
    right: "83.94%",
    bottom: "89.45%",
    left: "7%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView3: {
    position: "absolute",
    marginLeft: -160.5,
    top: 19,
    left: "50%",
    borderRadius: 15,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 321,
    height: 154,
  },
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 146,
    width: 103,
    height: 32,
  },
  cadastrarText: {
    position: "absolute",
    top: 6,
    left: 0,
    fontSize: 16,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 103,
    height: 15,
  },
  cadastrarView: {
    position: "absolute",
    top: 80,
    left: 213,
    width: 103,
    height: 32,
  },
  cdigoMatriaText: {
    position: "absolute",
    top: 122,
    left: 15,
    fontSize: 16,
    fontFamily: "Inter",
    color: "#b8b8b8",
    textAlign: "left",
    width: 116,
    height: 19,
  },
  cdigoMatriaText1: {
    position: "absolute",
    top: 50,
    left: 19,
    fontSize: 16,
    fontFamily: "Inter",
    color: "#b8b8b8",
    textAlign: "left",
    width: 116,
    height: 19,
  },
  cdigoSalaText: {
    position: "absolute",
    top: 86,
    left: 19,
    fontSize: 16,
    fontFamily: "Inter",
    color: "#b8b8b8",
    textAlign: "left",
    width: 91,
    height: 19,
  },
  cadastrarDiciplinaText: {
    position: "absolute",
    top: 0,
    left: 3,
    fontSize: 15,
    fontFamily: "Inter",
    color: "#4a4a4a",
    textAlign: "left",
    width: 159,
    height: 15,
  },
  cadastrarDiciplinaView: {
    position: "absolute",
    marginLeft: -161,
    top: 325,
    left: "50%",
    width: 321,
    height: 173,
  },
  rectangleView4: {
    position: "absolute",
    marginLeft: -59,
    top: 0,
    left: "50%",
    borderRadius: 15,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 118,
    height: 39,
  },
  logOutText: {
    position: "absolute",
    top: 12,
    left: 35.99,
    fontSize: 15,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 82.01,
    height: 15,
  },
  logout1Icon: {
    position: "absolute",
    top: 3,
    left: 8.52,
    width: 33,
    height: 33,
    overflow: "hidden",
  },
  logoutView: {
    position: "absolute",
    marginLeft: -59,
    top: 771,
    left: "50%",
    width: 118,
    height: 39,
  },
  perfilProfIcon: {
    position: "absolute",
    top: 95,
    left: 150,
    width: 114,
    height: 111,
  },
  iPhone11ProMaxPerfilPro: {
    position: "relative",
    borderRadius: 46,
    backgroundColor: "#1a1a1a",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default IPhone11ProMaxPerfilPro;
