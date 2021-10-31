import React from "react";
import {
  NativeBaseProvider, ScrollView,
} from "native-base";
import LogCard from "./components/LogCard";
import Icon from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from "react-native";
export default function App() {
  return (
    <NativeBaseProvider>
      <Icon name="pluscircle" size={50} color="#900" style={styles.icon}  />
      <ScrollView _contentContainerStyle={{
        px: "20px",
      }}>
      <LogCard />
      <LogCard />
      <LogCard />
      <LogCard />
      <LogCard />
      </ScrollView>
    </NativeBaseProvider>
  );
}
const styles=StyleSheet.create({
  icon: {
   position: "absolute",
   bottom: 30,
    right: 10
  }
})