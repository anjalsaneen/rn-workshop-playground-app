import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Button
        title="  +   "
        onPress={() => setCount(count+1)}
      />
      <Text style={{fontSize: 20, padding: 20}}>{count}</Text>
      <Button
        title="  -   "
        onPress={() => setCount(count-1)}
      />
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})

export default App;
