import {Text} from "react-native";
import {Box, Button, VStack} from "native-base";
import React, {FC} from "react";
import {SafeAreaView} from "react-native";

type LogCardProps = {
  navigation: any
}
const LogCard:FC<LogCardProps> = ({navigation}) => {
  return (
<SafeAreaView >

      <Box  borderWidth={1} borderRadius='md' mb={4}>
      <VStack space={4} >
        <Box px={4} pt={4}>
          3/3
        </Box>
        <Box px={4}>
          <Text>総運動時間</Text>
          <Text>〇〇時間〇〇分</Text>
        </Box>
        <Box px={4} pb={4}>
          <Text>総消費カロリー</Text>
          <Text>〇〇kcal</Text>
        </Box>
        <Button onPress={() => navigation.navigate("LogDetail")}>詳細</Button>
      </VStack>
    </Box>
  </SafeAreaView>
  )
}

export default LogCard;