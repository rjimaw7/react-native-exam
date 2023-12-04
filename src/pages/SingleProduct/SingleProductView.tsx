/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, Image } from 'react-native';
import React from 'react';
import { ICategory } from 'shared/interfaces/ICategory';
import { AirbnbRating } from 'react-native-ratings';

interface Props {
  singleProductData: ICategory | undefined;
  singleProductDataLoading: boolean;
  singleProductDataFetching: boolean;
}

const SingleProductView = ({ singleProductData, singleProductDataFetching, singleProductDataLoading }: Props) => {
  return (
    <View className="flex p-3 items-center gap-3">
      <Text className="font-bold text-2xl text-center">{singleProductData?.title}</Text>
      <Image
        source={{
          uri: singleProductData?.thumbnail,
        }}
        style={{ width: 300, height: 300 }}
        resizeMode="stretch"
      />
      <View className="flex items-center justify-center">
        <Text className="font-bold text-lg">{singleProductData?.description}</Text>
      </View>
      <Text className="font-bold text-4xl">${singleProductData?.price}</Text>
      <AirbnbRating count={singleProductData?.rating} isDisabled reviews={['']} size={20} />
    </View>
  );
};

export default SingleProductView;
