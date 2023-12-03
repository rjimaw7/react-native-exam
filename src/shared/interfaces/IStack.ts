import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  Home: undefined;
  Settings: undefined;
};

export type ScreenProp = NativeStackScreenProps<StackParamList>;
