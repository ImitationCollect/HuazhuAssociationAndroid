import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/views/Home/index';
import Strolling from './src/views/Strolling/index';
import Service from './src/views/Service/index';
import HuazhuAccount from './src/views/HuazhuAccount/index';
import Mine from './src/views/Mine/index';
import CustomBottomTabBar from './src/components/CustomBottomTabBar';
import { StatusBar, useColorScheme } from 'react-native';
import { store } from './src/store';
import { Provider } from 'react-redux';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
    const colorScheme = useColorScheme();

    return (
        <Provider store={store}>
            <StatusBar
                translucent={true}
                backgroundColor="transparent"
                barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} // 设置文字颜色
            />
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Home"
                    screenOptions={({ route }) => {
                        return {
                            headerShown: false //是否显示标题
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
        </Provider>
    );
}

export default App;
