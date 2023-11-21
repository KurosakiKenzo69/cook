import React from "react";
import { Pressable, StyleSheet, Text } from 'react-native';

const ComponentButton = ({ text, onPress, style, type }) => {
  const buttonStyles =
    type === 'outline'
      ? [styles.buttonOutline, style]
      : type === 'text'
      ? [styles.buttonText, style]
      : type === 'textGray'
      ? [styles.buttonGray, style]
      : [styles.button, style]
      
      

  const textStyles =
    type === 'text'
      ? [styles.text, { color: '#004DC8' }] : [styles.text];

  return (
    <Pressable onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3d8af7',
    margin: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    width: '100%',
  },
  buttonOutline: {
    borderColor: '#004DC8',
    borderWidth: 1,
    margin: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    margin: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonGray: {
    color: '#A9A9A9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ComponentButton;
