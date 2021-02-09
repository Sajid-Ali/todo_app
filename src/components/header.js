import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {lighterWhite} from '../utils/color-plates';

const Header = ({title}) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title.toUpperCase()}</Text>
  </View>
);

const SubTitle = ({subtitle}) => (
  <Text style={[styles.titleText, {color: '#fff'}]}>
    {subtitle.toUpperCase()}
  </Text>
);

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40,
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
  },

  titleText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export {Header, SubTitle};
