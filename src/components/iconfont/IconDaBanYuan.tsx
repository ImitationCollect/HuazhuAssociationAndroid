/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path, Circle } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
    size?: number;
    color?: string | string[];
}

let IconDaBanYuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
    return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
            <Path
                d="M933.122735 217.13871073c-5.04183 0-10.083659-1.937119-13.921058-5.811356-224.246297-225.76693-589.121472-225.76693-813.367769 0-7.686053 7.743358-20.165272 7.743358-27.860535 0-7.686053-7.739265-7.686053-20.298302 0-28.040636 239.609193-241.237273 629.470435-241.237273 869.071442 0 7.695263 7.742335 7.695263 20.302395 0 28.040636C943.205371 215.20261573 938.164564 217.13871073 933.122735 217.13871073z"
                fill={getIconColor(color, 0, '#F4F4F4')}
                stroke-width="0.5" 
            />
        </Svg>
    );
};

IconDaBanYuan = React.memo ? React.memo(IconDaBanYuan) : IconDaBanYuan;

export default IconDaBanYuan;
