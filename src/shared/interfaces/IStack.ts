import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type BottomTabParamList = {
  Home: undefined;
  Settings: undefined;
  Profile: undefined;
};

export type StackParamList = {
  SingleCategory: undefined;
  SingleProduct: undefined;
  SearchProduct: undefined;
  Main: undefined;
};

export type BottomScreenProp = NativeStackScreenProps<BottomTabParamList>;
export type StackScreenProp = NativeStackScreenProps<StackParamList>;
