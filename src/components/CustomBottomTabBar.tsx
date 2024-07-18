import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import IconFont from './iconfont';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';

const tabBarIconMap = {
    Home: {
        unfocused: 'account',
        focused: 'account'
    },
    Strolling: {
        unfocused: 'card',
        focused: 'card'
    },
    Service: {
        unfocused: 'shouye',
        focused: 'shouye'
    },
    HuazhuAccount: {
        unfocused: 'xiaoxi',
        focused: 'xiaoxi-active'
    },
    Mine: {
        unfocused: 'a-tuandui2-copy',
        focused: 'a-tuandui2'
    }
};

const getStyles = (theme: any) => {
    return StyleSheet.create({
        customBottomTabBar: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: 45,
            paddingTop: 5,
            backgroundColor: theme.bottom_tab_bg,
            shadowColor: theme.bottom_tab_shadow_color,
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
            backgroundColor: theme.bottom_tab_bg,
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
            backgroundColor: theme.bottom_tab_bg,
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
            height: 40,
            width: 40,
            borderRadius: 50,
            top: 0,
            position: 'absolute',
            backgroundColor: theme.primary_color,
            shadowColor: theme.bottom_tab_Height_shadow_color,
            shadowOpacity: 0.9,
            shadowRadius: 10, //阴影模糊半径
            elevation: 15
        }
    });
};

function CustomBottomTabBar({ state, descriptors, navigation }) {
    const theme = useSelector((state: RootState) => state.common.themeConfig);
    const styles = getStyles(theme);

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
                    return <IconFont name={iconName} color={focused ? (isHeight ? '#fff' : color) : theme.bottom_tab_icon_color} size={22} />;
                };

                const tabBarContent = (
                    <>
                        {getTabBarIcon({ color: theme.primary_color, focused: isFocused, routeName: route.name, index })}
                        <Text
                            style={{
                                fontSize: isHeight ? 20 : 10,
                                color: isHeight ? '#fff' : isFocused ? theme.primary_color : theme.bottom_tab_text_color
                            }}
                        >
                            {isHeight ? '+' : label}
                        </Text>
                    </>
                );

                return (
                    <TouchableOpacity accessibilityRole="button" onPress={onPress} activeOpacity={1} style={[styles.tabBarItem]} key={index}>
                        {isHeight ? (
                            <View style={styles.tabBarHeightItem}>
                                <View style={[styles.tabBarHeightItemContent, { paddingTop: isFocused ? 0 : 3 }]}>
                                    <View style={[styles.tabBarHeightActive]}>{tabBarContent}</View>
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
