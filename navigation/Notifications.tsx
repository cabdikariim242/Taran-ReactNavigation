import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const Notifications = () => {
  const route = useRoute<any>();
  const { message } = route.params || ''; // Halkan fariinta ayaa ka timaada

  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-[24px]'>Notifications</Text>
      <Text className='text-[20px] mt-4'>{message}</Text>
    </View>
  );
};

export default Notifications;
