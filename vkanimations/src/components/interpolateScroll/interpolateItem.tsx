import React, {FC} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const InterpolateItem: FC<{title: string; index: number}> = ({
  title,
  index,
}) => {
  //   getting width and height of the device
  const {width, height} = Dimensions.get('window');

  //   variable to handle item size
  const itemSize = width * 0.7;

  // Stylesheet fot interpolate item
  const InterpolateItem = StyleSheet.create({
    mainView: {
      backgroundColor: `rgba(0,0,256,0.${index + 2})`,
      width,
      height,
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemView: {
      height: itemSize,
      width: itemSize,
      backgroundColor: `rgba(0,0,256,0.${index + 4})`,
    },
  });

  return (
    <View style={InterpolateItem.mainView}>
      <View style={InterpolateItem.itemView}>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export default InterpolateItem;
