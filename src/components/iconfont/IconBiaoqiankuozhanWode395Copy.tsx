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

let IconBiaoqiankuozhanWode395Copy: FunctionComponent<Props> = ({ size, color, ...rest }) => {
    return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
            <Path
                d="M512.01189965 511.94303661c0.00020213 0.00157483 0.0003116 0.0031665 0.00031161 0.00479187 0 0.02095283-0.01698627 0.03793911-0.0379391 0.0379391-0.00064003 0-0.00128008-0.00001686-0.0019117-0.00005053 0.00506136 0.01040903 0.01573989 0.01759263 0.02809431 0.01759263 0.01724735 0 0.03122712-0.01397978 0.03122712-0.03122714 0-0.01319658-0.00820259-0.02448147-0.01978223-0.02904593z"
                fill={getIconColor(color, 0, '#E0D9EA')}
            />
            <Path
                d="M501.4528 545.8432c-120.4736 0-218.5216-98.048-218.5216-218.5216s98.048-218.5216 218.5216-218.5216 218.5216 98.048 218.5216 218.5216-98.048 218.5216-218.5216 218.5216z m0-396.0832c-97.8944 0-177.5616 79.6672-177.5616 177.5616s79.6672 177.5616 177.5616 177.5616 177.5616-79.6672 177.5616-177.5616-79.6672-177.5616-177.5616-177.5616z"
                fill={getIconColor(color, 1, '#55524F')}
            />
            <Path
                d="M514.28289958 512.87560823c-0.43452579-0.35346199-0.61989963-0.4106835-1.1903265-0.58175197-0.75460857 1.58968489-2.69656337 2.61609562-4.57354787 2.61609562-0.23246235 0-0.46075232-0.01728566-0.68427383-0.05006882a4.35866921 4.35866921 0 0 0-0.3296197 1.54796089c-0.00178816 0.06675841 0.05304909 0.12099962 0.11921146 0.12099964h8.50454599c0.06675841 0 0.12099962-0.05424122 0.11921145-0.12099964-0.03933978-1.47643402-0.89289387-2.65901174-1.96520101-3.53223572z"
                fill={getIconColor(color, 2, '#E0D9EA')}
            />
            <Path
                d="M866.7136 921.4976H136.192c-8.2432 0-16.2816-3.3792-22.0672-9.3184a30.49984 30.49984 0 0 1-8.6528-22.1184c2.816-103.5264 45.2608-200.3456 119.5008-272.7424 74.3936-72.4992 172.5952-112.4352 276.48-112.4352 11.3152 0 20.48 9.1648 20.48 20.48s-9.1648 20.48-20.48 20.48c-190.2592 0-344.064 146.176-354.6112 334.6944H856.064c-6.4-111.616-65.3824-214.272-159.232-276.1728a20.5312 20.5312 0 0 1-5.8368-28.3648 20.5312 20.5312 0 0 1 28.3648-5.8368c107.9808 71.2704 174.592 190.8736 178.0736 319.9488 0.2048 8.2944-2.8672 16.128-8.6528 22.1184a30.94528 30.94528 0 0 1-22.0672 9.2672z"
                fill={getIconColor(color, 3, '#55524F')}
            />
        </Svg>
    );
};

IconBiaoqiankuozhanWode395Copy = React.memo ? React.memo(IconBiaoqiankuozhanWode395Copy) : IconBiaoqiankuozhanWode395Copy;

export default IconBiaoqiankuozhanWode395Copy;
