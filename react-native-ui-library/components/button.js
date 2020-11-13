import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fontSizes, fontWeight } from '../constants';

export const Button = ({onPressEvent, text, color, size}) => {

    const getSize = size => {
        switch(size) {
            case 'tiny':
                return 24;
            case 'small':
                return 32;
            case 'medium': 
                return 40;
            case 'large':
                return 48;
            case 'giant':
                return 56;
            default: 
                return 40;
        }
    }

    const getColor = color => {
        switch(color) {
            case 'blue': 
                return {
                    backgroundColor: colors.defaults.blue,
                    color: colors.light.blue,
                }
            case 'green': 
                return {
                    backgroundColor: colors.defaults.green,
                    color: colors.light.green,
                }
            case 'red': 
                return {
                    backgroundColor: colors.defaults.red,
                    color: colors.light.red,
                }
            case 'orange': 
                return {
                    backgroundColor: colors.defaults.orange,
                    color: colors.light.orange,
                }
            case 'purple': 
                return {
                    backgroundColor: colors.defaults.purple,
                    color: colors.light.purple,
                }
            case 'pink': 
                return {
                    backgroundColor: colors.defaults.pink,
                    color: colors.light.pink,
                }
            case 'yellow':
                return {
                    backgroundColor: colors.defaults.yellow,
                    color: colors.light.yellow,
                }
            default: 
                return {
                    backgroundColor: colors.defaults.blue,
                    color: colors.light.blue,
                }
        }
    }

    const buttonStyle = {
        minHeight: getSize(size),
        minWidth: getSize(size),
        backgroundColor: getColor(color).backgroundColor,
    };

    const textStyle = {
        color: getColor(color).color,
    }

    return (
        <TouchableOpacity onPress={onPressEvent} style={[styles.button, buttonStyle]}>
            <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        margin: 8,
        backgroundColor: colors.defaults.blue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: fontSizes.small,
        fontWeight: fontWeight.bold,
        marginHorizontal: 8,
    },
});
