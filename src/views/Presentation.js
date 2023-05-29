import React from 'react';
import { ImageBackground, View,TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../css/Styles';

const Presentation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.index.container}>
      <ImageBackground
        source={require("../img/Presentacion.jpg")}
        style={styles.index.backgroundImage}
      >
          <View style={styles.index.content}>
          <TouchableOpacity style={styles.index.button}  onPress={() => navigation.navigate('pokemons')}>
            <Text style={styles.index.buttonText}>
             nuevo Mundo
            <Ionicons name="arrow-forward" size={18} color="white" />
            </Text>
            
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Presentation;
