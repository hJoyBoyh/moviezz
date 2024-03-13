import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

function CustomDrawer(props) {
  return (
    <View style={styles.container}>
      <Text>Usename</Text>

      <DrawerContentScrollView
        {...props}
      >


        <View style={styles.drawerListContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={styles.buttomMenuContainer}>
        <TouchableOpacity onPress={() => { }} style={styles.signOutTouchable}>
          <View style={styles.signOutContainer}>
            <Ionicons name="exit-outline" size={22} color={'white'} />
            <Text
              style={styles.signOut}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;



const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b1b1b' },
  drawerListContainer: { 
    flex: 1, 
    backgroundColor: '#1b1b1b',
     paddingTop: 10 
    },
  buttomMenuContainer: { 
    padding: 20,
    borderTopWidth: 1, 
    borderTopColor: 'white'
  },
  signOutTouchable: { 
    paddingVertical: 15 
  },
  signOutContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  signOut: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginLeft: 5,
    color: 'white'
  }
});