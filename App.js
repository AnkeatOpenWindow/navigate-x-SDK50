import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DevelopmentScreen from './screens/DevelopmentScreen';
import PhotosScreen from './screens/PhotosScreen';
import Private from './screens/PrivateScreen'; // Corrected import
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              {/* 'home-outline' : is the name of the icon you write down to get the icon from Ionicons */}
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Development') {
              iconName = focused ? 'code' : 'code-outline'; // Using Ionicons' code icon
            } else if (route.name === 'Photo') {
              iconName = focused ? 'camera' : 'camera-outline'; // Using Ionicons' camera icon
            } else if (route.name === 'Private') {
              iconName = focused ? 'lock-closed' : 'lock-closed-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        {/* name="Home" : is the name that shows on the tab bar */}
        {/* component={HomeScreen} : is the component of the dirrent screens */}
        <Tab.Screen name="Home" component={HomeScreen} /> 
        <Tab.Screen name="Development" component={DevelopmentScreen} />
        <Tab.Screen name="Photo" component={PhotosScreen} />
        <Tab.Screen name="Private" component={Private} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
