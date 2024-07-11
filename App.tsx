import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/views/Home/index';
import Strolling from './src/views/Strolling/index';
import Service from './src/views/Service/index';
import HuazhuAccount from './src/views/HuazhuAccount/index';
import Mine from './src/views/Mine/index';
import CustomBottomTabBar from './src/components/CustomBottomTabBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => {
                    const isCircle = ['Service'].includes(route.name);
                    const tabBarItemStyle = isCircle ? {} : {};
                    return {
                        headerShown: false, //是否显示标题
                        tabBarActiveTintColor: isCircle ? '#fff' : '#5A3D91', //选中时tab颜色
                        tabBarInactiveTintColor: '#747474', //默认颜色
                        tabBarActiveBackgroundColor: isCircle ? '#5A3D91' : '#fff',
                        tabBarLabelStyle: {
                            fontSize: 10,
                            marginTop: -5,
                            marginBottom: 3
                        },
                        tabBarItemStyle: {
                            ...tabBarItemStyle
                        }
                    };
                }}
                tabBar={props => <CustomBottomTabBar {...props} />}
            >
                <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: '首页' }} />
                <Tab.Screen
                    name="Strolling"
                    component={Strolling}
                    options={{
                        tabBarLabel: '逛逛'
                    }}
                />
                <Tab.Screen
                    name="Service"
                    component={Service}
                    options={{
                        tabBarLabel: '服务'
                    }}
                />

                <Tab.Screen
                    name="HuazhuAccount"
                    component={HuazhuAccount}
                    options={{
                        tabBarLabel: '华住号'
                    }}
                />
                <Tab.Screen
                    name="Mine"
                    component={Mine}
                    options={{
                        tabBarLabel: '会员'
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
