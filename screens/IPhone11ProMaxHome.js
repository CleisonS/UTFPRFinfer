import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IPhone11ProMaxHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iPhone11ProMaxHome}>
      <Image
        style={styles.search1Icon}
        resizeMode="cover"
        source={require("../assets/search-1.png")}
      />
      <Pressable
        style={styles.avatarPressable}
        onPress={() => navigation.navigate("IPhone11ProMaxPerfil")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/avatar.png")}
        />
      </Pressable>
      <Text style={styles.inicioText}>Inicio</Text>
      <Text style={styles.olTonicoDaSilva}>
        <Text style={styles.olText}>Olá</Text>
        <Text style={styles.tonicoDaSilva}>Tonico da Silva</Text>
      </Text>
      <View style={styles.botoView}>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-12.png")}
        />
        <Text style={styles.salasText}>Salas</Text>
      </View>
      <Image
        style={styles.plus1Icon}
        resizeMode="cover"
        source={require("../assets/plus-1.png")}
      />
      <Text style={styles.atualizaesText}>Atualizações</Text>
      <View style={styles.rectangleView} />
      <View style={styles.rectangleView1} />
      <Text style={styles.categoriasText}>Categorias</Text>
      <View style={styles.gruposView}>
        <View style={styles.rectangleView2} />
        <Image
          style={styles.user1Icon}
          resizeMode="cover"
          source={require("../assets/3-user-1.png")}
        />
        <Text style={styles.gruposText1}>
          <Text style={styles.gruposText}>Grupos</Text>
        </Text>
        <View style={styles.lineView} />
        <View style={styles.rectangleView3} />
        <Text style={styles.text}>3</Text>
      </View>
      <Pressable
        style={styles.aulasDoDia}
        onPress={() => navigation.navigate("IPhone11ProMaxMapaProfessor")}
      >
        <View style={styles.rectangleView4} />
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
      </Pressable>
      <View style={styles.horariosView}>
        <View style={styles.rectangleView5} />
        <Image
          style={styles.timeSquare1}
          resizeMode="cover"
          source={require("../assets/time-square-1.png")}
        />
        <Text style={styles.horarioAulasText1}>
          <Text style={styles.horarioAulasText}>Horario aulas</Text>
        </Text>
        <View style={styles.lineView1} />
        <View style={styles.rectangleView6} />
        <Text style={styles.text1}>3/7</Text>
      </View>
      <View style={styles.notificaesView}>
        <View style={styles.rectangleView7} />
        <Image
          style={styles.notification321}
          resizeMode="cover"
          source={require("../assets/notification-3--2-1.png")}
        />
        <Text style={styles.notificaesText1}>
          <Text style={styles.notificaesText}>Notificações</Text>
        </Text>
        <View style={styles.lineView2} />
        <View style={styles.rectangleView8} />
        <Text style={styles.text2}>5</Text>
        <Image
          style={styles.perfilNotiIcon}
          resizeMode="cover"
          source={require("../assets/perfil-noti.png")}
        />
      </View>
      <Pressable
        style={styles.localizaoPressable}
        onPress={() => navigation.navigate("IPhone11ProMaxMapaAluno")}
      >
        <View style={styles.rectangleView9} />
        <Image
          style={styles.location211}
          resizeMode="cover"
          source={require("../assets/location-2--1-1.png")}
        />
        <Text style={styles.mapaDeSalas1}>
          <Text style={styles.mapaDeSalas}>Mapa de salas</Text>
        </Text>
        <View style={styles.lineView3} />
        <View style={styles.rectangleView10} />
        <Text style={styles.text3}>10</Text>
      </Pressable>
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
  icon: {
    width: "100%",
    height: "100%",
  },
  avatarPressable: {
    position: "absolute",
    left: 353,
    top: 54,
    width: 44,
    height: 44,
  },
  inicioText: {
    position: "absolute",
    marginTop: -389,
    marginLeft: -180,
    top: "50%",
    left: "50%",
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 66,
    height: 23,
  },
  olText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  tonicoDaSilva: {
    margin: 0,
  },
  olTonicoDaSilva: {
    position: "absolute",
    marginTop: -348,
    marginLeft: -181,
    top: "50%",
    left: "50%",
    fontSize: 37,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 287,
    height: 91,
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 146,
    width: 120,
    height: 33,
  },
  salasText: {
    position: "absolute",
    marginTop: -8.5,
    marginLeft: -60,
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 120,
    height: 16,
  },
  botoView: {
    position: "absolute",
    top: 209,
    left: 29,
    width: 120,
    height: 33,
  },
  plus1Icon: {
    position: "absolute",
    top: 831,
    left: 187,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  atualizaesText: {
    position: "absolute",
    marginTop: -231,
    marginLeft: -25,
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 90,
    height: 16,
  },
  rectangleView: {
    position: "absolute",
    marginLeft: -165,
    top: 309,
    left: "50%",
    borderRadius: 15,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 333,
    height: 156,
  },
  rectangleView1: {
    position: "absolute",
    marginLeft: -173,
    top: 292,
    left: "50%",
    borderRadius: 15,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 349,
    height: 162,
  },
  categoriasText: {
    position: "absolute",
    marginTop: 35,
    marginLeft: -186,
    top: "50%",
    left: "50%",
    fontSize: 21,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 117,
    height: 16,
  },
  rectangleView2: {
    position: "absolute",
    marginLeft: -78.5,
    top: 0,
    left: "50%",
    borderRadius: 15,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 157,
    height: 139,
  },
  user1Icon: {
    position: "absolute",
    top: 8,
    left: 11,
    width: 33,
    height: 33,
    overflow: "hidden",
  },
  gruposText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  gruposText1: {
    position: "absolute",
    height: "33.09%",
    width: "56.05%",
    top: "33.81%",
    left: "7.01%",
    fontSize: 16,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    top: 110.5,
    left: 12.5,
    borderStyle: "solid",
    borderColor: "#feab1d",
    borderTopWidth: 5,
    width: 79,
    height: 5,
  },
  rectangleView3: {
    position: "absolute",
    top: 99,
    left: 103,
    borderRadius: 11,
    backgroundColor: "#feab1d",
    width: 48,
    height: 22,
  },
  text: {
    position: "absolute",
    marginTop: 33.5,
    marginLeft: 24.5,
    top: "50%",
    left: "50%",
    fontSize: 11,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 48,
  },
  gruposView: {
    position: "absolute",
    marginLeft: 18,
    top: 517,
    left: "50%",
    width: 157,
    height: 139,
  },
  rectangleView4: {
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
    marginLeft: -179,
    top: 277,
    left: "50%",
    width: 362,
    height: 168,
  },
  rectangleView5: {
    position: "absolute",
    marginLeft: -78.5,
    top: 0,
    left: "50%",
    borderRadius: 15,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 157,
    height: 139,
  },
  timeSquare1: {
    position: "absolute",
    top: 8,
    left: 9,
    width: 33,
    height: 33,
    overflow: "hidden",
  },
  horarioAulasText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  horarioAulasText1: {
    position: "absolute",
    height: "33.09%",
    width: "56.05%",
    top: "33.81%",
    left: "8.28%",
    fontSize: 16,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  lineView1: {
    position: "absolute",
    top: 113.5,
    left: 10.5,
    borderStyle: "solid",
    borderColor: "#bc62ff",
    borderTopWidth: 5,
    width: 79,
    height: 5,
  },
  rectangleView6: {
    position: "absolute",
    top: 102,
    left: 101,
    borderRadius: 11,
    backgroundColor: "#bc62ff",
    width: 48,
    height: 22,
  },
  text1: {
    position: "absolute",
    marginTop: 36.5,
    marginLeft: 22.5,
    top: "50%",
    left: "50%",
    fontSize: 11,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 48,
  },
  horariosView: {
    position: "absolute",
    marginLeft: -173,
    top: 674,
    left: "50%",
    width: 157,
    height: 139,
  },
  rectangleView7: {
    position: "absolute",
    marginLeft: -78.5,
    top: 0,
    left: "50%",
    borderRadius: 15,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 157,
    height: 139,
  },
  notification321: {
    position: "absolute",
    top: 8,
    left: 10,
    width: 33,
    height: 33,
    overflow: "hidden",
  },
  notificaesText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  notificaesText1: {
    position: "absolute",
    height: "33.09%",
    width: "62.42%",
    top: "33.81%",
    left: "7.64%",
    fontSize: 16,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  lineView2: {
    position: "absolute",
    top: 113.5,
    left: 12.5,
    borderStyle: "solid",
    borderColor: "#d10028",
    borderTopWidth: 5,
    width: 79,
    height: 5,
  },
  rectangleView8: {
    position: "absolute",
    top: 102,
    left: 103,
    borderRadius: 11,
    backgroundColor: "#d10028",
    width: 48,
    height: 22,
  },
  text2: {
    position: "absolute",
    marginTop: 36.5,
    marginLeft: 44.5,
    top: "50%",
    left: "50%",
    fontSize: 11,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  perfilNotiIcon: {
    position: "absolute",
    top: 11,
    left: 116,
    width: 21,
    height: 21,
  },
  notificaesView: {
    position: "absolute",
    marginLeft: 18,
    top: 674,
    left: "50%",
    width: 157,
    height: 139,
  },
  rectangleView9: {
    position: "absolute",
    marginLeft: -78.5,
    top: 0,
    left: "50%",
    borderRadius: 15,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 157,
    height: 139,
  },
  location211: {
    position: "absolute",
    top: 8,
    left: 9,
    width: 33,
    height: 33,
    overflow: "hidden",
  },
  mapaDeSalas: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  mapaDeSalas1: {
    position: "absolute",
    height: "33.09%",
    width: "56.05%",
    top: "33.81%",
    left: "9.55%",
    fontSize: 16,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  lineView3: {
    position: "absolute",
    top: 110.5,
    left: 10.5,
    borderStyle: "solid",
    borderColor: "#4ce066",
    borderTopWidth: 5,
    width: 79,
    height: 5,
  },
  rectangleView10: {
    position: "absolute",
    top: 99,
    left: 101,
    borderRadius: 11,
    backgroundColor: "#4ce066",
    width: 48,
    height: 22,
  },
  text3: {
    position: "absolute",
    marginTop: 33.5,
    marginLeft: 22.5,
    top: "50%",
    left: "50%",
    fontSize: 11,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 48,
  },
  localizaoPressable: {
    position: "absolute",
    marginLeft: -173,
    top: 517,
    left: "50%",
    width: 157,
    height: 139,
  },
  iPhone11ProMaxHome: {
    position: "relative",
    borderRadius: 46,
    backgroundColor: "#1a1a1a",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default IPhone11ProMaxHome;
