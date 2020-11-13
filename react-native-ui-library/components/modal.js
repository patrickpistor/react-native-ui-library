import React from "react";
import { StyleSheet, Modal } from 'react-native';
import { colors, fontSizes, fontWeight } from '../constants';

export const SmallModal = ({ modalVisible, children }) => {
    return ( 
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            {children}
        </Modal>
    );
}

export const MediumModal = ({ modalVisible, children }) => {
    return ( 
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            {children}
        </Modal>
    );
}

export const LargeModal = ({ modalVisible, children }) => {
    return ( 
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            {children}
        </Modal>
    );
}
