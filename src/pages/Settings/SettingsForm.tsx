/* eslint-disable no-restricted-globals */
import { View, Text, TextInput, Button, Alert } from 'react-native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SettingsFormData } from 'shared/interfaces/ISettings';
import { useProductService } from 'shared/service/productService';
import FlashMessage from 'react-native-flash-message';

interface Props {
  setDisplayForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsForm = ({ setDisplayForm }: Props) => {
  // ALL HOOKS
  const { createProductMutation } = useProductService();
  const { createProduct } = createProductMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      price: '',
    },
  });

  const validatePrice = (value: any) => {
    const isNumeric = !isNaN(parseFloat(value)) && isFinite(value);
    if (!isNumeric) {
      return 'Please enter a valid number.';
    }

    const numericValue = parseFloat(value);
    if (numericValue < 0) {
      return 'Price should be a positive value.';
    }

    if (parseFloat(value) > 100) {
      return 'Price should not exceed 100.';
    }

    return true;
  };

  const onSubmit = (data: SettingsFormData) => {
    if (!errors.description && !errors.name && !errors.price) {
      createProduct.mutate(data, {
        onSuccess: () => {
          Alert.alert('Success', 'Product Created');
          setDisplayForm(false);
        },
        onError: () => {
          Alert.alert('Failed', 'Something Went Wrong');
        },
      });
    }
  };

  return (
    <View className="p-5 flex flex-col">
      <FlashMessage position="top" />
      <Text className="text-center text-2xl font-semibold">Add New Product</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Enter Product Name"
            className="border border-black p-2 rounded-md mt-3"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text className="text-red-500 text-xs">Name is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Enter Product Description"
            className="border border-black p-2 rounded-md mt-3"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="description"
      />
      {errors.description && <Text className="text-red-500 text-xs">Description is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          validate: validatePrice,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Enter Product Price"
            className="border border-black p-2 rounded-md mt-3"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="number-pad"
          />
        )}
        name="price"
      />
      {errors.price && errors.price.type === 'required' && (
        <Text className="text-red-500 text-xs">Price is required.</Text>
      )}
      {errors.price && errors.price.type !== 'required' && (
        <Text className="text-red-500 text-xs">{errors.price.message}</Text>
      )}

      <View className="mt-5">
        <Button title="Submit" onPress={handleSubmit(onSubmit)} color="black" disabled={createProduct.isPending} />
      </View>
    </View>
  );
};

export default SettingsForm;
