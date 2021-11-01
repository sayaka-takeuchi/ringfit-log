import Icon from "react-native-vector-icons/AntDesign";
import {NativeBaseProvider, ScrollView, Box} from "native-base";
import LogCard from "../components/LogCard";
import React, {FC} from "react";
import {StyleSheet} from "react-native";

const styles=StyleSheet.create({
  icon: {
   position: "absolute",
   bottom: 30,
    right: 10,
    zIndex: 100
  }
})

type HomeScreenProps = {
  navigation: any
}

const HomeScreen:FC<HomeScreenProps> = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Icon name="pluscircle" size={50} color="#900" style={styles.icon} onPress = {() => navigation.navigate("AddLog")}/>
      <ScrollView _contentContainerStyle={{
        px: "20px",
      }}>
      <LogCard navigation={navigation}/>
      <LogCard navigation={navigation}/>
      <LogCard navigation={navigation}/>
      <LogCard navigation={navigation}/>
      <LogCard navigation={navigation}/>
      <LogCard navigation={navigation}/>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default HomeScreen;
