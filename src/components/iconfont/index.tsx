/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconBiaoqiankuozhanWode395 from './IconBiaoqiankuozhanWode395';
import IconBiaoqiankuozhanWode395Copy from './IconBiaoqiankuozhanWode395Copy';
import IconATuandui2 from './IconATuandui2';
import IconATuandui2Copy from './IconATuandui2Copy';
import IconXiaoxi from './IconXiaoxi1';
import IconXiaoxi1Active from './IconXiaoxi1Active';
import IconZhanghucaozuo from './IconZhanghucaozuo';
import IconQiapian1 from './IconQiapian1';

export { default as IconBiaoqiankuozhanWode395 } from './IconBiaoqiankuozhanWode395';
export { default as IconBiaoqiankuozhanWode395Copy } from './IconBiaoqiankuozhanWode395Copy';
export { default as IconATuandui2 } from './IconATuandui2';
export { default as IconATuandui2Copy } from './IconATuandui2Copy';
export { default as IconXiaoxi } from './IconXiaoxi1';
export { default as IconXiaoxi1Active } from './IconXiaoxi1Active';
export { default as IconZhanghucaozuo } from './IconZhanghucaozuo';
export { default as IconQiapian1 } from './IconQiapian1';

export type IconNames = 'biaoqiankuozhan_wode-395' | 'biaoqiankuozhan_wode-395-copy' | 'a-tuandui2' | 'a-tuandui2-copy' | 'xiaoxi' | 'xiaoxi-active' | 'account' | 'card';

interface Props extends GProps, ViewProps {
    name: IconNames;
    size?: number;
    color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
    switch (name) {
        case 'biaoqiankuozhan_wode-395':
            return <IconBiaoqiankuozhanWode395 key="3" {...rest} />;
        case 'biaoqiankuozhan_wode-395-copy':
            return <IconBiaoqiankuozhanWode395Copy key="6" {...rest} />;
        case 'a-tuandui2':
            return <IconATuandui2 key="8" {...rest} />;
        case 'a-tuandui2-copy':
            return <IconATuandui2Copy key="9" {...rest} />;
        case 'xiaoxi':
            return <IconXiaoxi key="10" {...rest} />;
        case 'xiaoxi-active':
            return <IconXiaoxi1Active key="10" {...rest} />;
        case 'account':
            return <IconZhanghucaozuo key="10" {...rest} />;
        case 'card':
            return <IconQiapian1 key="10" {...rest} />;
    }

    return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
