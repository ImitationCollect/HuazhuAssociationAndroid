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

const getTabBarIcon = ({ color, focused, routeName, index }) => {
    const iconName: any = focused ? tabBarIconMap[routeName]['focused'] : tabBarIconMap[routeName]['unfocused'];
    return <IconFont name={iconName} color={focused ? (index == 2 ? '#fff' : color) : '#292929'} size={20} />;
};

function CustomBottomTabBar({ state, descriptors, navigation, position }) {
    return (
        <View style={styles.customBottomTabBar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key] || {};
                const isFocused = state.index === index;
                const { tabBarLabel, title } = options || {};
                const label = tabBarLabel || title || route.name;

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

                const tabBarContent = (
                    <>
                        {getTabBarIcon({ color: '#5A3D91', focused: isFocused, routeName: route.name, index })}
                        <Text
                            style={{
                                fontSize: 10,
                                color: isFocused ? (index == 2 ? '#fff' : '#5A3D91') : '#737276'
                            }}
                        >
                            {label}
                        </Text>
                    </>
                );

                return (
                    <TouchableOpacity accessibilityRole="button" onPress={onPress} activeOpacity={1} style={styles.tabBarItem}>
                        {index == 2 ? (
                            <View style={styles.tabBarHeightItem}>
                                <View style={styles.tabBarHeightArc}>
                                    <IconFont name="dabanyuan" size={48} color="rgba(0, 0, 0, 0.025)" style={styles.tabBarHeightArcIcon}></IconFont>
                                </View>
                                <View style={[styles.tabBarHeightItemCircle, { backgroundColor: isFocused ? '#5A3D91' : '#fff' }]}>{tabBarContent}</View>
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
        height: 42,
        paddingTop: 5,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOpacity: 0.9,
        shadowRadius: 10, //阴影模糊半径
        elevation: 15
    },
    tabBarItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    tabBarHeightItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: 50,
        width: 50,
        borderRadius: 50,
        position: 'relative',
    },
    tabBarHeightItemCircle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 50
    },
    tabBarHeightArc: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: -5,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        
    },

    tabBarHeightArcIcon: {
        backgroundColor: '#fff',
        borderRadius: 50,
    }
});
