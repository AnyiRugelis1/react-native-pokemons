import React from 'react'
import { TextInput } from 'react-native';
import { styles } from '../css/Styles';

const DecoratedTexInput = ({placeholder,value,setValue}) => {
  return (
    <TextInput
    style={styles.Input_Decorated.inputs}
    placeholder={placeholder}
    placeholderTextColor={"#C4C4C4"}
    value={value}
    onChangeText={(text) => {
        setValue(text);
    }}
  />
  )
}

export default DecoratedTexInput
