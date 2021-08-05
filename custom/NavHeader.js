import React from 'react';
import {Image} from 'react-native'



function Header() {
    
const image = 'https://dailysylhetmirror.com/assets/frontend/logo_1621627254.png';

    return (
      <Image
        style={{ width: 150, height: 40, resizeMode: 'stretch' }}
        source={require('../header-logo.jpg')}
      />
    );
  }

export default Header;