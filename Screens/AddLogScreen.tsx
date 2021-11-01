import React, {useState} from "react"
import {Box, Button, FormControl, Input, NativeBaseProvider, Stack} from "native-base";

const AddLogScreen = () => {
  const [exerciseTime, setExerciseTime] = useState(0);
  const [calorie, setCalorie] = useState(0);
  console.log(exerciseTime)
  console.log(calorie)
  return (
        <NativeBaseProvider>
    <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto" borderWidth={1}>
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>運動時間(分)</FormControl.Label>
          <Input placeholder="60" onChangeText={(time) => setExerciseTime(parseInt(time, 10))}/>

        </Stack>
        <Stack mx="4">
          <FormControl.Label>カロリー</FormControl.Label>
          <Input placeholder="300" onChangeText={(cal) => setCalorie(parseInt(cal, 10))}/>

        </Stack>
        <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
            追加
          </Button>
      </FormControl>
    </Box>
        </NativeBaseProvider>
  )
}

export default AddLogScreen;