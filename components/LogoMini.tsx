import React from 'react';
import { Image } from "react-native";

export function LogoMini() {
    return (
     <Image  style={{ width: 60, height: 40 }} source={require('../assets/miniLogoColorImg.png')} />
    );
  }