import React, { useState } from "react";
import { StyleSheet, TextInput } from 'react-native';
import { colors, fontSizes, fontWeight } from '../constants';

export const TextBox = ({placeHolderText, keyboardType, onChangeTextEvent, valueProp}) => {
    return (
        <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeTextEvent(text)}
            keyboardType={keyboardType ? keyboardType : 'default'}
            value={valueProp}
        />
    );
}

const styles = StyleSheet.create({
    textInput: { 
        height: 40, 
        borderColor: colors.grey, 
        borderRadius: 6,
        borderWidth: 1,
        paddingHorizontal: 10,
        width: 200,
        marginVertical: 10,
    },
});
