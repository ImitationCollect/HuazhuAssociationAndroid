import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { theme } from '@/constant/theme';

export interface CommonState {
    theme: string;
    themeConfig: any;
}

const initialState: CommonState = {
    theme: 'light',
    themeConfig: theme['light']
};

export const CommonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            const model = action.payload;
            state.theme = model;
            state.themeConfig = theme[model];
        }
    }
});

export const { setTheme } = CommonSlice.actions;

export default CommonSlice.reducer;
