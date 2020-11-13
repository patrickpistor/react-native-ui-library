import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fontSizes, fontWeight } from '../constants';

const getFontWeight = weight => {
    switch(weight) {
        case 'thin':
            return fontWeight.thin;
        case 'ultraLight':
            return fontWeight.ultraLight;
        case 'light': 
            return fontWeight.light;
        case 'regular':
            return fontWeight.regular;
        case 'medium':
            return fontWeight.medium;
        case 'semiBold':
            return fontWeight.semiBold;
        case 'bold':
            return fontWeight.bold;
        case 'heavy':
            return fontWeight.heavy;
        case 'black':
            return fontWeight.black;
        default: 
            return fontWeight.regular;
    }
}

export const H1 = ({ weight, text }) => {
    const textStyle = {
        fontWeight: getFontWeight(weight),
        fontSize: fontSizes.h1,
    }
    return ( <Text style={textStyle}>{text}</Text> );
}

export const H2 = ({ weight, text }) => {
    const textStyle = {
        fontWeight: getFontWeight(weight),
        fontSize: fontSizes.h2,
    }
    return ( <Text style={textStyle}>{text}</Text> );
}

export const H3 = ({ weight, text }) => {
    const textStyle = {
        fontWeight: getFontWeight(weight),
        fontSize: fontSizes.h3,
    }
    return ( <Text style={textStyle}>{text}</Text> );
}

export const H4 = ({ weight, text }) => {
    const textStyle = {
        fontWeight: getFontWeight(weight),
        fontSize: fontSizes.h4,
    }
    return ( <Text style={textStyle}>{text}</Text> );
}

export const H5 = ({ weight, text }) => {
    const textStyle = {
        fontWeight: getFontWeight(weight),
        fontSize: fontSizes.h5,
    }
    return ( <Text style={textStyle}>{text}</Text> );
}

export const H6 = ({ weight, text }) => {
    const textStyle = {
        fontWeight: getFontWeight(weight),
        fontSize: fontSizes.h6,
    }
    return ( <Text style={textStyle}>{text}</Text> );
}
