/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';

const DisplayIcon = (text: string) => {
  switch (text) {
    case 'electronics':
      return <MaterialIcons name="electrical-services" size={64} color="black" />;
    case 'jewelry':
      return <MaterialCommunityIcons name="gold" size={64} color="black" />;
    case "men's clothing":
      return <FontAwesome5 name="tshirt" size={64} color="black" />;
    case "women's clothing":
      return <Ionicons name="woman" size={64} color="black" />;
    default:
      return <AntDesign name="user" size={128} color="black" />;
  }
};

export default DisplayIcon;
