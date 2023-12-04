/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
  AntDesign,
  Feather,
  FontAwesome,
  Entypo,
} from '@expo/vector-icons';

const DisplayIcon = (text: string) => {
  switch (text) {
    case 'smartphones':
      return <Feather name="smartphone" size={64} color="black" />;
    case 'laptops':
      return <Ionicons name="laptop-outline" size={64} color="black" />;
    case 'fragrances':
      return <MaterialCommunityIcons name="bottle-tonic-outline" size={64} color="black" />;
    case 'skincare':
      return <MaterialCommunityIcons name="face-man-shimmer" size={64} color="black" />;
    case 'groceries':
      return <Ionicons name="fast-food" size={64} color="black" />;
    case 'home-decoration':
      return <AntDesign name="home" size={64} color="black" />;
    case 'furniture':
      return <MaterialCommunityIcons name="table-furniture" size={64} color="black" />;
    case 'tops':
      return <FontAwesome5 name="tshirt" size={64} color="black" />;
    case 'womens-dresses':
      return <Ionicons name="md-woman" size={64} color="black" />;
    case 'womens-shoes':
      return <MaterialCommunityIcons name="shoe-ballet" size={64} color="black" />;
    case 'mens-shirts':
      return <Ionicons name="shirt-outline" size={64} color="black" />;
    case 'mens-shoes':
      return <MaterialCommunityIcons name="shoe-sneaker" size={64} color="black" />;
    case 'mens-watches':
      return <Feather name="watch" size={64} color="black" />;
    case 'womens-watches':
      return <Ionicons name="ios-watch" size={64} color="black" />;
    case 'womens-bags':
      return <Foundation name="shopping-bag" size={64} color="black" />;
    case 'womens-jewellery':
      return <MaterialCommunityIcons name="gold" size={64} color="black" />;
    case 'sunglasses':
      return <FontAwesome5 name="glasses" size={64} color="black" />;
    case 'automotive':
      return <MaterialIcons name="sports-motorsports" size={64} color="black" />;
    case 'motorcycle':
      return <FontAwesome name="motorcycle" size={64} color="black" />;
    case 'lighting':
      return <Entypo name="thunder-cloud" size={64} color="black" />;
    default:
      return <AntDesign name="user" size={128} color="black" />;
  }
};

export default DisplayIcon;
