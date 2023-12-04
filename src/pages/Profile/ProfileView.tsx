/* eslint-disable react/no-array-index-key */
import { View, ScrollView, TouchableHighlight, Text } from 'react-native';
import React from 'react';
import { IProfile } from 'shared/interfaces/IProfile';
import Profile from './Profile';
import ProfileSkeleton from 'components/ProfileSkeleton';

interface Props {
  userDataMemo: IProfile[] | undefined;
  userDataLoading: boolean;
  setSkip: React.Dispatch<React.SetStateAction<number>>;
  skip: number;
}

const ProfileView = ({ userDataLoading, userDataMemo, setSkip, skip }: Props) => {
  const pageNumbers = [1, 2, 3, 4, 5];

  return (
    <View>
      {userDataLoading ? (
        Array.from({ length: 5 }, (_, index) => <ProfileSkeleton key={index} />)
      ) : (
        <>
          <ScrollView>
            <View>{userDataMemo && userDataMemo.map((item, index) => <Profile item={item} key={index} />)}</View>
          </ScrollView>
          <View className="flex flex-row justify-center gap-4 mt-4">
            {!userDataLoading &&
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
        </>
      )}
    </View>
  );
};

export default ProfileView;
