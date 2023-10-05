/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, RefreshControl, Button} from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{
            headerLargeTitle: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Screen1({navigation}: NativeStackScreenProps<any>) {
  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <View
          style={{
            paddingTop: 100,
          }}>
          <Text>Custom header</Text>
        </View>
      ),
    });
  }, [navigation]);

  const [refreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Button title="Screen2" onPress={() => navigation.push('Screen2')} />
    </ScrollView>
  );
}

function Screen2() {
  return <ScrollView contentInsetAdjustmentBehavior="automatic" />;
}
