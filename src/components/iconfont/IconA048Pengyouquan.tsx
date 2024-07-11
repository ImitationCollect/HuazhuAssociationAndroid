/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
    size?: number;
    color?: string | string[];
}

let IconA048Pengyouquan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
    return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
            <Path
                d="M512.93 859.36c-46.89 0-92.4-9.19-135.24-27.31-41.37-17.5-78.53-42.55-110.43-74.45-31.9-31.9-56.95-69.05-74.45-110.43-18.12-42.84-27.31-88.35-27.31-135.24s9.19-92.4 27.31-135.24c17.5-41.37 42.55-78.53 74.45-110.43 31.9-31.9 69.06-56.95 110.43-74.45 42.84-18.12 88.35-27.31 135.24-27.31s92.4 9.19 135.24 27.31c41.37 17.5 78.53 42.55 110.43 74.45 31.9 31.9 56.95 69.05 74.45 110.43 18.12 42.84 27.31 88.35 27.31 135.24s-9.19 92.4-27.31 135.24c-17.5 41.37-42.55 78.53-74.45 110.43-31.9 31.9-69.06 56.95-110.43 74.45-42.84 18.12-88.35 27.31-135.24 27.31z m0-659.86c-83.45 0-161.91 32.5-220.92 91.51C233 350.02 200.5 428.48 200.5 511.93s32.5 161.91 91.51 220.92c59.01 59.01 137.47 91.51 220.92 91.51s161.91-32.5 220.92-91.51c59.01-59.01 91.51-137.47 91.51-220.92s-32.5-161.91-91.51-220.92C674.84 232 596.38 199.5 512.93 199.5z"
                fill={getIconColor(color, 0, '#654115')}
            />
            <Path d="M687.68 631.63c-9.67 0-17.5-7.83-17.5-17.5V248.85c0-9.67 7.83-17.5 17.5-17.5s17.5 7.83 17.5 17.5v365.28c0 9.67-7.83 17.5-17.5 17.5z" fill={getIconColor(color, 1, '#654115')} />
            <Path
                d="M687.47 427.9c-2.97 0-5.98-0.76-8.73-2.35L364.17 243.94c-8.37-4.83-11.24-15.54-6.41-23.91 4.83-8.37 15.54-11.24 23.91-6.41l314.57 181.62c8.37 4.83 11.24 15.54 6.41 23.91-3.24 5.61-9.12 8.75-15.17 8.75zM651.39 812.47c-2.97 0-5.98-0.76-8.73-2.35l-313.85-181.2c-8.37-4.83-11.24-15.54-6.41-23.91 4.83-8.37 15.53-11.24 23.91-6.41l313.85 181.2c8.37 4.83 11.24 15.54 6.41 23.91-3.24 5.61-9.12 8.75-15.17 8.75z"
                fill={getIconColor(color, 2, '#654115')}
            />
            <Path
                d="M196.99 508.02c-6.04 0-11.92-3.13-15.17-8.74-4.84-8.37-1.98-19.07 6.39-23.91L494.3 298.42c8.37-4.84 19.07-1.98 23.91 6.39s1.98 19.07-6.39 23.91L205.73 505.67a17.465 17.465 0 0 1-8.74 2.35zM520.74 728.63c-6.04 0-11.92-3.13-15.17-8.74-4.84-8.37-1.98-19.07 6.39-23.91l317.63-183.66c8.37-4.84 19.07-1.98 23.91 6.39s1.98 19.07-6.39 23.91L529.48 726.28a17.465 17.465 0 0 1-8.74 2.35z"
                fill={getIconColor(color, 3, '#654115')}
            />
            <Path d="M337.08 793.7c-9.67 0-17.5-7.83-17.5-17.5V409.92c0-9.67 7.83-17.5 17.5-17.5s17.5 7.83 17.5 17.5V776.2c0 9.67-7.83 17.5-17.5 17.5z" fill={getIconColor(color, 4, '#654115')} />
            <Path
                d="M397.38 468.26v86.5c0 14.2 7.57 27.32 19.87 34.42l74.91 43.25c12.3 7.1 27.45 7.1 39.74 0l74.91-43.25a39.736 39.736 0 0 0 19.87-34.42v-86.5c0-14.2-7.57-27.32-19.87-34.42l-74.91-43.25c-12.3-7.1-27.45-7.1-39.74 0l-74.91 43.25a39.736 39.736 0 0 0-19.87 34.42z"
                fill={getIconColor(color, 5, '#FCCA25')}
                opacity=".3"
            />
        </Svg>
    );
};

IconA048Pengyouquan = React.memo ? React.memo(IconA048Pengyouquan) : IconA048Pengyouquan;

export default IconA048Pengyouquan;
