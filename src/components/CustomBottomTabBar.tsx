import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import IconFont from './iconfont';

const tabBarIconMap = {
    Home: {
        unfocused: 'bianqian-copy',
        focused: 'bianqian'
    },
    Strolling: {
        unfocused: 'a-048_pengyouquan-copy',
        focused: 'a-048_pengyouquan'
    },
    Service: {
        unfocused: 'shouye',
        focused: 'shouye'
    },
    HuazhuAccount: {
        unfocused: 'a-tuandui2-copy',
        focused: 'a-tuandui2'
    },
    Mine: {
        unfocused: 'biaoqiankuozhan_wode-395-copy',
        focused: 'biaoqiankuozhan_wode-395'
    }
};

function CustomBottomTabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.customBottomTabBar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key] || {};
                const isFocused = state.index === index;
                const { tabBarLabel, title } = options || {};
                const label = tabBarLabel || title || route.name;
                const isHeight = index == 2;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const getTabBarIcon = ({ color, focused, routeName, index }) => {
                    const iconName: any = focused ? tabBarIconMap[routeName]['focused'] : tabBarIconMap[routeName]['unfocused'];
                    return <IconFont name={iconName} color={focused ? (isHeight ? '#fff' : color) : '#292929'} size={22} />;
                };

                const tabBarContent = (
                    <>
                        {getTabBarIcon({ color: '#5A3D91', focused: isFocused, routeName: route.name, index })}
                        <Text
                            style={{
                                fontSize: 10,
                                color: isFocused ? (isHeight ? '#fff' : '#5A3D91') : '#737276'
                            }}
                        >
                            {label}
                        </Text>
                    </>
                );

                return (
                    <TouchableOpacity accessibilityRole="button" onPress={onPress} activeOpacity={1} style={[styles.tabBarItem]} key={index}>
                        {isHeight ? (
                            <View style={styles.tabBarHeightItem}>
                                <View style={[styles.tabBarHeightItemContent, { paddingTop: isFocused ? 0 : 3 }]}>
                                    {isFocused ? <View style={styles.tabBarHeightActive}>{tabBarContent}</View> : tabBarContent}
                                </View>
                            </View>
                        ) : (
                            tabBarContent
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default CustomBottomTabBar;

const styles = StyleSheet.create({
    customBottomTabBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 45,
        paddingTop: 5,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOpacity: 0.9,
        shadowRadius: 10, //阴影模糊半径
        elevation: 15,
        position: 'relative'
    },
    tabBarItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    tabBarHeightItem: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        position: 'absolute',
        left: '50%',
        marginLeft: -25,
        top: -33,
        borderTopWidth: 0.5,
        borderRightWidth: 0.5,
        borderLeftWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.05)',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    tabBarHeightItemContent: {
        height: 45,
        width: 50,
        backgroundColor: '#fff',
        marginTop: 8,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    tabBarHeightActive: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5A3D91',
        height: 40,
        width: 40,
        borderRadius: 50,
        top: 0,
        position: 'absolute'
    }
});
