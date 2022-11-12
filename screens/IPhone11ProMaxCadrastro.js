import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IPhone11ProMaxCadrastro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iPhone11ProMaxCadrastro}>
      <View style={styles.editarPerfilView}>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-12.png")}
        />
        <Text style={styles.cadastrarText}>Cadastrar</Text>
      </View>
      <Pressable
        style={styles.iconlyBoldArrowLeftSquarPressable}
        onPress={() => navigation.navigate("IPhone11ProMaxSing")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/iconlyboldarrowleftsquare.png")}
        />
      </Pressable>
      <View style={styles.nomeView}>
        <View style={styles.rectangleView} />
        <Text style={styles.inputFieldText}>Input Field</Text>
        <Text style={styles.nomeCompletoText}>Nome Completo:</Text>
      </View>
      <View style={styles.nomeView1}>
        <View style={styles.rectangleView1} />
        <Text style={styles.inputFieldText1}>Input Field</Text>
        <Text style={styles.telefoneText}>Telefone:</Text>
      </View>
      <View style={styles.checkAlunoView}>
        <View style={styles.checkboxView} />
        <Text style={styles.alunoText}>Aluno</Text>
      </View>
      <View style={styles.checkProfessorView}>
        <View style={styles.checkboxView1} />
        <Text style={styles.professorText}>Professor</Text>
      </View>
      <View style={styles.nomeView2}>
        <View style={styles.rectangleView2} />
        <Text style={styles.inputFieldText2}>Input Field</Text>
        <Text style={styles.emailText}>Email:</Text>
      </View>
      <View style={styles.nomeView3}>
        <View style={styles.rectangleView3} />
        <Text style={styles.inputFieldText3}>Input Field</Text>
        <Text style={styles.rAText}>RA:</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 146,
    width: 120,
    height: 33,
  },
  cadastrarText: {
    position: "absolute",
    marginTop: -8.5,
    marginLeft: -35,
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  editarPerfilView: {
    position: "absolute",
    top: 565,
    left: 147,
    width: 120,
    height: 33,
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
    left: "7%",
    top: "6.36%",
    right: "83.94%",
    bottom: "89.45%",
    width: "9.06%",
    height: "4.19%",
  },
  rectangleView: {
    position: "absolute",
    marginLeft: -160,
    top: 23,
    left: "50%",
    borderRadius: 11,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 320,
    height: 35,
  },
  inputFieldText: {
    position: "absolute",
    top: 31,
    left: 10,
    fontSize: 16,
    fontFamily: "Inter",
    color: "#b8b8b8",
    textAlign: "left",
    width: 116,
    height: 19,
  },
  nomeCompletoText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 19,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 159,
    height: 15,
  },
  nomeView: {
    position: "absolute",
    marginLeft: -160,
    top: 157,
    left: "50%",
    width: 320,
    height: 58,
  },
  rectangleView1: {
    position: "absolute",
    marginLeft: -160,
    top: 23,
    left: "50%",
    borderRadius: 11,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 320,
    height: 35,
  },
  inputFieldText1: {
    position: "absolute",
    top: 31,
    left: 10,
    fontSize: 16,
    fontFamily: "Inter",
    color: "#b8b8b8",
    textAlign: "left",
    width: 116,
    height: 19,
  },
  telefoneText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 19,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 159,
    height: 15,
  },
  nomeView1: {
    position: "absolute",
    marginLeft: -160,
    top: 391,
    left: "50%",
    width: 320,
    height: 58,
  },
  checkboxView: {
    position: "relative",
    width: 35,
    height: 35,
  },
  alunoText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 19,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 90,
    height: 17,
  },
  checkAlunoView: {
    position: "relative",
    width: 90,
    height: 53,
  },
  checkboxView1: {
    position: "relative",
    width: 35,
    height: 35,
  },
  professorText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 19,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 90,
    height: 17,
  },
  checkProfessorView: {
    position: "relative",
    width: 90,
    height: 57,
  },
  rectangleView2: {
    position: "absolute",
    marginLeft: -160,
    top: 23,
    left: "50%",
    borderRadius: 11,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 320,
    height: 35,
  },
  inputFieldText2: {
    position: "absolute",
    top: 31,
    left: 10,
    fontSize: 16,
    fontFamily: "Inter",
    color: "#b8b8b8",
    textAlign: "left",
    width: 116,
    height: 19,
  },
  emailText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 19,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 159,
    height: 15,
  },
  nomeView2: {
    position: "absolute",
    marginLeft: -160,
    top: 313,
    left: "50%",
    width: 320,
    height: 58,
  },
  rectangleView3: {
    position: "absolute",
    marginLeft: -160,
    top: 23,
    left: "50%",
    borderRadius: 11,
    backgroundColor: "#333",
    borderStyle: "solid",
    borderColor: "#2b2b2b",
    borderWidth: 1,
    width: 320,
    height: 35,
  },
  inputFieldText3: {
    position: "absolute",
    top: 31,
    left: 10,
    fontSize: 16,
    fontFamily: "Inter",
    color: "#b8b8b8",
    textAlign: "left",
    width: 116,
    height: 19,
  },
  rAText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 19,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 159,
    height: 15,
  },
  nomeView3: {
    position: "absolute",
    marginLeft: -160,
    top: 235,
    left: "50%",
    width: 320,
    height: 58,
  },
  iPhone11ProMaxCadrastro: {
    position: "relative",
    borderRadius: 46,
    backgroundColor: "#1a1a1a",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default IPhone11ProMaxCadrastro;
