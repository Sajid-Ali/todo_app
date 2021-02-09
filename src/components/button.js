import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {lighterWhite} from '../utils/color-plates';

export const Button = ({deleteAllItems}) => (
  <TouchableOpacity onPress={deleteAllItems}>
    <Icon name="delete-sweep" size={24} color={'#fff'} />
  </TouchableOpacity>
);
