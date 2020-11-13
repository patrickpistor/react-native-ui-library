import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, Modal } from 'react-native';
import { 
  Button, 
  H3, H4,
  MediumModal,
  TextBox
} from '../components';

export default function HomeScreen() {
    const [counter, setCounter] = useState(0);
    const [counterTextbox, setCounterTextbox] = useState('0');
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <MediumModal modalVisible={modalVisible}>
                <View style={[styles.modalContainer, styles.medium]}>
                    <H4 text='Are you sure you want to clear?' weight='regular' />
                    <Button 
                        onPressEvent={() => {
                            setCounter(0);
                            setModalVisible(false);
                        }}
                        text='Clear' 
                        size='tiny' 
                        color='blue'
                    />
                    <Button 
                        onPressEvent={() => {
                            setModalVisible(false);
                        }}
                        text='Close' 
                        size='tiny' 
                        color='red'
                    />
                </View>
            </MediumModal>
            <View style={styles.row}>
                <TextBox 
                    placeHolderText='Enter Number' 
                    keyboardType='numeric'
                    valueProp={counterTextbox}
                    onChangeTextEvent={value => setCounterTextbox(value)}
                />
                <Button onPressEvent={() => setCounter(parseInt(counterTextbox) + counter)} text='ENTER COUNT' size='medium'/>
            </View>
            <View style={styles.row}>
                <Button onPressEvent={() => setCounter(counter + 1)} text='+ COUNT' size='medium' color='green'/>
                <Button onPressEvent={() => setModalVisible(true)} text='DELETE COUNT' size='medium' color='red'/>
                <Button onPressEvent={() => setCounter(counter - 1)} text='- COUNT' size='medium' color='orange'/>
            </View>
            <H3 text={counter} weight='regular' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    medium: {
        minHeight: 125,
    },
});
