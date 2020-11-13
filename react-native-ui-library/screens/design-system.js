import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Modal } from 'react-native';
import { 
  Button, 
  H1, H2, H3, H4, H5, H6, CustomText, 
  SmallModal, MediumModal, LargeModal,
  TextBox
} from '../components';

export default function DesignSystemScreen() {
  const [smallModalVisible, setSmallModalVisible] = useState(false);
  const [mediumModalVisible, setMediumModalVisible] = useState(false);
  const [largeModalVisible, setLargeModalVisible] = useState(false);
  const [defaultText, setDefaultText] = useState('Default Textbox');
  const [numberText, setNumberText] = useState('1234');
  const [emailText, setEmailText] = useState('patrick@eligeant.com');

  return (
    <ScrollView>
      <View style={styles.container}>
        <Button text='TINY' size='tiny'/>
        <Button text='SMALL' size='small'/>
        <Button text='MEDIUM' size='medium'/>
        <Button text='LARGE' size='large'/>
        <Button text='GIANT' size='giant'/>
        <Button text='GREEN' color='green'/>
        <Button text='RED' color='red'/>
        <Button text='ORANGE' color='orange'/>
        <Button text='PURPLE' color='purple'/>
        <Button text='PINK' color='pink'/>
        <Button text='YELLOW' color='yellow'/>
        <H1 text='H1' weight='bold' />
        <H2 text='H2' weight='bold' />
        <H3 text='H3' weight='regular' />
        <H4 text='H4' weight='regular' />
        <H5 text='H5' weight='bold' />
        <H6 text='H6' weight='bold' />
        <SmallModal modalVisible={smallModalVisible}>
          <View style={[styles.modalContainer, styles.small]}>
            <H4 text='Small Modal' weight='regular' />
            <Button 
              onPressEvent={() => {
                  setSmallModalVisible(false);
              }}
              text='Close' 
              size='tiny' 
              color='red'
            />
          </View>
        </SmallModal>
        <MediumModal modalVisible={mediumModalVisible}>
          <View style={[styles.modalContainer, styles.medium]}>
            <H4 text='Medium Modal' weight='regular' />
            <Button 
              onPressEvent={() => {
                  setMediumModalVisible(false);
              }}
              text='Close' 
              size='tiny' 
              color='red'
            />
          </View>
        </MediumModal>
        <LargeModal modalVisible={largeModalVisible}>
          <View style={[styles.modalContainer, styles.large]}>
            <H4 text='Large Modal' weight='regular' />
            <Button 
              onPressEvent={() => {
                  setLargeModalVisible(false);
              }}
              text='Close' 
              size='tiny' 
              color='red'
            />
          </View>
        </LargeModal>
        <Button 
          text='SMALL MODAL' 
          size='medium'
          onPressEvent={() => {
            setSmallModalVisible(true);
          }}
        />
        <Button 
          text='MEDIUM MODAL' 
          size='medium'
          onPressEvent={() => {
            setMediumModalVisible(true);
          }}
        />
        <Button 
          text='LARGE MODAL' 
          size='medium'
          onPressEvent={() => {
            setLargeModalVisible(true);
          }}
        />
        <TextBox 
          valueProp={defaultText}
          onChangeTextEvent={value => setDefaultText(value)}
        />
        <TextBox 
          placeHolderText='Numeric' 
          keyboardType='numeric' 
          valueProp={numberText}
          onChangeTextEvent={value => setNumberText(value)}
        />
        <TextBox 
          placeHolderText='Email' 
          keyboardType='email-address'
          valueProp={emailText}
          onChangeTextEvent={value => setEmailText(value)} 
        />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  small: {
    minHeight: 50,
  },
  medium: {
    minHeight: 125,
  },
  large: {
    minHeight: 175,
  },
});
