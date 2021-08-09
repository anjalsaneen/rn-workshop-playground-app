import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  PermissionsAndroid
} from 'react-native';
import Contacts from 'react-native-contacts';

const App = () => {
  const [count, setCount] = useState(0)
  const [contacts, setContacts] = useState([])

  const getContacts= () => {
    console.log('Test')
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.',
        'buttonPositive': 'Please accept bare mortal'
      }
    )
    .then((item) => {
      Contacts.getAll().then(contacts => {
        console.log({contacts})
        setContacts(contacts)
      })
    })
  }

  const renderItem = ({ item }) => (
    <Text style={{paddingVertical: 10}}>{item.displayName}</Text>
  );

  return (
    <View style={{flex: 1}}>
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

      <View style={{padding: 16}}>
        <Text style={{fontWeight: '700'}}>Contacts</Text>
        <Button
        title="Get Contacts"
        onPress={() => getContacts()}
        />

      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.displayName}
      />

      </View>
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
