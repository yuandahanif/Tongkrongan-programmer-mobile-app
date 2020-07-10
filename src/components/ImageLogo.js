import React from 'react';
import {Image} from 'react-native';

export default function ImageLogo(props) {
  const {file, size = 0, margin} = props;
  return (
    <Image
      source={file}
      style={{width: size, height: size, marginHorizontal: margin}}
    />
  );
}
