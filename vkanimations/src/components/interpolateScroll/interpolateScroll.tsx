import React from 'react';
import {ScrollView, StyleSheet, View, Dimensions} from 'react-native';
import InterpolateItem from './interpolateItem';

const InterPolateScroll = () => {
  // Variable to handle words
  const Words = ['Hey,', 'there', "it's", 'me', 'VK'];

  //   getting width and height of the device
  const {width, height} = Dimensions.get('window');

  const InterPolateStyles = StyleSheet.create({
    mainView: {
      backgroundColor: '#fff',
      height,
      width,
    },
  });

  return (
    <ScrollView style={InterPolateStyles.mainView} horizontal>
      {Words.map((value: string, index: number) => {
        return <InterpolateItem title={value} key={index} index={index} />;
      })}
    </ScrollView>
  );
};

export default InterPolateScroll;
