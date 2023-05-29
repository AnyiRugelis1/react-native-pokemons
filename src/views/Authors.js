import React from 'react';
import { ImageBackground, View,TouchableOpacity, Text, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../css/Styles';

const Authors = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.index.container}>
      <ImageBackground
        source={require("../img/autores.jpg")}
        style={styles.index.backgroundImage}
      >
          <View style={styles.Authors.content}>
          <TouchableOpacity style={styles.Authors.button}  onPress={() => Linking .openURL("https://github.com/S-ospina27/pokemonst-react-native")}>
            <Text style={styles.index.buttonText}>
            <Ionicons name="md-logo-github" size={48} color="white" />
            </Text>
            
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Authors;
