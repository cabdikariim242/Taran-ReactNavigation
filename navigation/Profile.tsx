import { View, Text ,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    const navigation = useNavigation<any>();
  
  return (
    <View className='flex-1 justify-center items-center '>
      <Text className='text-[22px]'>ProfileScreen</Text>
    <Button 
        title="Go to Home Page"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  )
}

export default Profile