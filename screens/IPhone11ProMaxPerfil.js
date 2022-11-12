import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IPhone11ProMaxPerfil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iPhone11ProMaxPerfil}>
      <Text style={styles.tonicoDaSilva}>Tonico da Silva</Text>
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
      <Text style={styles.tonicodasilvaabcdcomText}>
        tonicodasilva@abcd.com
      </Text>
      <Pressable
        style={styles.aulasDoDia}
        onPress={() => navigation.navigate("IPhone11ProMaxMapaAluno")}
      >
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
      </Pressable>
      <Pressable
        style={styles.iconlyBoldArrowLeftSquarPressable}
        onPress={() => navigation.navigate("IPhone11ProMaxHome")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/iconlyboldarrowleftsquare.png")}
        />
      </Pressable>
      <Image
        style={styles.avatarIcon}
        resizeMode="cover"
        source={require("../assets/avatar1.png")}
      />
      <View style={styles.caixaNotificaesView}>
        <View style={styles.rectangleView3} />
        <Text style={styles.ligarNotificaesText}>Ligar notificações</Text>
        <View style={styles.seletorView}>
          <View style={styles.rectangleView4} />
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
        </View>
        <Text style={styles.notificaesText1}>
          <Text style={styles.notificaesText}>Notificações</Text>
        </Text>
      </View>
      <View style={styles.cadastrarDiciplinaView}>
        <View style={styles.rectangleView5} />
        <Image
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-14.png")}
        />
        <Text style={styles.cadastrarText}>Cadastrar</Text>
        <Text style={styles.cdigoText}>Código</Text>
        <Text style={styles.cadastrarDiciplinaText}>Cadastrar diciplina</Text>
      </View>
      <Pressable
        style={styles.logoutPressable}
        onPress={() => navigation.navigate("IPhone11ProMaxSing")}
      >
        <View style={styles.rectangleView6} />
        <Text style={styles.logOutText}>Log out</Text>
        <Image
          style={styles.logout1Icon}
          resizeMode="cover"
          source={require("../assets/logout-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tonicoDaSilva: {
    position: "absolute",
    marginTop: -235,
    marginLeft: -136,
    top: "50%",
    left: "50%",
    fontSize: 37,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 272,
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
  tonicodasilvaabcdcomText: {
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
    top: 518,
    left: "50%",
    width: 362,
    height: 208,
  },
  icon1: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconlyBoldArrowLeftSquarPressable: {
    position: "absolute",
    left: "7%",
    top: "6.36%",
    right: "83.94%",
    bottom: "89.45%",
    width: "9.06%",
    height: "4.19%",
  },
  avatarIcon: {
    position: "absolute",
    top: 95,
    left: 150,
    width: 114,
    height: 111,
  },
  rectangleView3: {
    position: "absolute",
    marginLeft: -160.5,
    top: 21,
    left: "50%",
    borderRadius: 15,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 321,
    height: 57,
  },
  ligarNotificaesText: {
    position: "absolute",
    top: 40,
    left: 15,
    fontSize: 16,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 154,
    height: 19,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 30,
    backgroundColor: "#7f7f7f",
    width: 40,
    height: 20,
  },
  ellipseIcon: {
    position: "absolute",
    top: 3,
    left: 3,
    width: 14,
    height: 14,
  },
  seletorView: {
    position: "absolute",
    top: 40,
    left: 271,
    width: 40,
    height: 20,
  },
  notificaesText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  notificaesText1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 15,
    fontFamily: "Inter",
    color: "#4a4a4a",
    textAlign: "center",
    width: 93,
    height: 15,
  },
  caixaNotificaesView: {
    position: "absolute",
    marginLeft: -161,
    top: 331,
    left: "50%",
    width: 321,
    height: 78,
  },
  rectangleView5: {
    position: "absolute",
    marginLeft: -160.5,
    top: 23,
    left: "50%",
    borderRadius: 15,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 321,
    height: 57,
  },
  rectangleIcon1: {
    position: "absolute",
    top: 36,
    left: 208,
    borderRadius: 146,
    width: 103,
    height: 32,
  },
  cadastrarText: {
    position: "absolute",
    top: 42,
    left: 208,
    fontSize: 16,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 103,
    height: 15,
  },
  cdigoText: {
    position: "absolute",
    top: 42,
    left: 25,
    fontSize: 16,
    fontFamily: "Inter",
    color: "#b8b8b8",
    textAlign: "left",
    width: 55,
    height: 19,
  },
  cadastrarDiciplinaText: {
    position: "absolute",
    top: 0,
    left: 2,
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
    top: 417,
    left: "50%",
    width: 321,
    height: 80,
  },
  rectangleView6: {
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
  logoutPressable: {
    position: "absolute",
    marginLeft: -59,
    top: 771,
    left: "50%",
    width: 118,
    height: 39,
  },
  iPhone11ProMaxPerfil: {
    position: "relative",
    borderRadius: 46,
    backgroundColor: "#1a1a1a",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default IPhone11ProMaxPerfil;
