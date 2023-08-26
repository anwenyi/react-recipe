import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import HomeScreen from '../screens/Home/HomeScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import SearchScreen from '../screens/Search/SearchScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions, SafeAreaView, KeyboardAvoidingView  } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './styles'
import { Searchbar } from 'react-native-paper';
import { FAB, TextInput } from 'react-native-paper';

state = {
  search: '',
};

updateSearch = (search) => {
  this.setState({ search });
};

const { search } = this.state;
 const Tab = createMaterialTopTabNavigator();
 // screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;
const Stack = createStackNavigator();
// function MainNavigator() {
//   return(
//     // <Stack.Navigator
//     //   screenOptions={{
//     //       headerTitleStyle: {
//     //         fontWeight: 'bold',
//     //         textAlign: 'center',
//     //         alignSelf: 'center',
//     //         flex: 1,
//     //       }
//     //   }}
//     // >
//     //   <Stack.Screen name='Home' component={HomeScreen} />
//     //   <Stack.Screen name='Recipe' component={RecipeScreen}/>
//     //   <Stack.Screen name='Search' component={SearchScreen} />
//     // </Stack.Navigator>
//     <Tab.Navigator
//       screenOptions={{
//         tabBarLabelStyle: { fontSize: 15 },
//         tabBarItemStyle: { width: SCREEN_WIDTH/2, height: 50 },
//         tabBarStyle: { backgroundColor: 'powderblue' },
//       }}
//     >
//     <Tab.Screen name="Recipes" component={HomeScreen}> {(props) => <HomeScreen {...props} />}</Tab.Screen>
//     <Tab.Screen name="ingredients" component={SearchScreen} />
//   </Tab.Navigator>

//   )
// } 



 const Drawer = createDrawerNavigator();

// function DrawerStack() {
//   return(
//     <Drawer.Navigator
//       drawerPosition='left'
//       initialRouteName='Main'
//       drawerStyle={{
//         width: 250
//       }}
//       screenOptions={{headerShown: false}}
//       drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
//     >
//       <Drawer.Screen name='Main' component={MainNavigator} />
//     </Drawer.Navigator>
//   )
// } 


 export default function AppContainer() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const Tab = createMaterialTopTabNavigator();
  const onChangeSearch = query => setSearchQuery(query);
  console.log(searchQuery);
  return(
    <NavigationContainer>
      <Searchbar
    placeholder="Search"
    onChangeText={onChangeSearch}
    value={searchQuery}
    style={{ marginTop: '10%' }}
  />
  <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 15 },
        tabBarItemStyle: { width: SCREEN_WIDTH/2, height: 50 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
    <Tab.Screen name="Home">{props => <HomeScreen {...props} extra={searchQuery}/>}</Tab.Screen>
    <Tab.Screen name="ingredients" component={SearchScreen} />
    <Tab.Screen name="Recipe" component={RecipeScreen} />
  </Tab.Navigator>
      {/* <DrawerStack/> */}
    </NavigationContainer>
  )
} 
 