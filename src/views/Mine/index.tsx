import React from 'react';
import { StyleSheet, Text, useColorScheme, View, ScrollView, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '@/store';
import { setTheme } from '@/store/reducer/common';
import type { RootState } from '@/store';

function Mine() {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.common.theme);
    return (
        <ScrollView>
            <Text>mine Screen</Text>
        </ScrollView>
    );
}

export default Mine;
