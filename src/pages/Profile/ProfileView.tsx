/* eslint-disable react/no-array-index-key */
import { View, ScrollView, TouchableHighlight, Text } from 'react-native';
import React from 'react';
import { IProfile } from 'shared/interfaces/IProfile';
import Profile from './Profile';
import ProfileSkeleton from 'components/ProfileSkeleton';

interface Props {
  displayData: IProfile[] | undefined;
  displayDataLoading: boolean;
  setSkip: React.Dispatch<React.SetStateAction<number>>;
  skip: number;
}

const ProfileView = ({ displayDataLoading, displayData, setSkip, skip }: Props) => {
  const pageNumbers = [1, 2, 3, 4, 5];

  return (
    <View>
      {displayDataLoading ? (
        Array.from({ length: 5 }, (_, index) => <ProfileSkeleton key={index} />)
      ) : (
        <>
          {displayData?.length === 0 ? (
            <Text className="text-gray-400">No Users Found</Text>
          ) : (
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
              <View>{displayData?.map((item, index) => <Profile item={item} key={index} />)}</View>
            </ScrollView>
          )}
          {displayData && displayData?.length > 0 && (
            <View className="flex flex-row justify-center gap-4 mt-4">
              {!displayDataLoading &&
                pageNumbers.map((pageNumber) => (
                  <TouchableHighlight
                    key={pageNumber}
                    className={`p-2 rounded-md ${pageNumber === skip / 5 + 1 ? 'bg-black' : ''}`}
                    onPress={() => {
                      setSkip((pageNumber - 1) * 5);
                    }}
                  >
                    <Text className={`${pageNumber === skip / 5 + 1 ? 'text-white' : 'text-black'}`}>{pageNumber}</Text>
                  </TouchableHighlight>
                ))}
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default ProfileView;
