import { View, Text, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className='flex-1 bg-red-500 justify-center items-center'>
      <Text className='text-green-400 text-[30px]'>HomeScreen</Text>

      {/* Input field si user uu fariin u qoro */}
      <TextInput
        placeholder="Qor fariinta halkan"
        className={`w-64 h-12 p-2 mt-4 mb-4 rounded-lg bg-green-200/40
                    ${isFocused ? 'bg-gray-200 border-2 border-blue-500' : 'border border-gray-400'}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={message}
        onChangeText={setMessage}
      />

      {/* Button u dira Notifications */}
      <Button
        title="Send to Notifications"
        onPress={() =>
          navigation.navigate("Notifications", { message })
        }
      />
    </View>
  );
};

export default HomeScreen;
