/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconA048Pengyouquan from './IconA048Pengyouquan';
import IconA048PengyouquanCopy from './IconA048PengyouquanCopy';
import IconBiaoqiankuozhanWode395 from './IconBiaoqiankuozhanWode395';
import IconBianqian from './IconBianqian';
import IconBianqianCopy from './IconBianqianCopy';
import IconBiaoqiankuozhanWode395Copy from './IconBiaoqiankuozhanWode395Copy';
import IconShouye from './IconShouye';
import IconATuandui2 from './IconATuandui2';
import IconATuandui2Copy from './IconATuandui2Copy';
export { default as IconA048Pengyouquan } from './IconA048Pengyouquan';
export { default as IconA048PengyouquanCopy } from './IconA048PengyouquanCopy';
export { default as IconBiaoqiankuozhanWode395 } from './IconBiaoqiankuozhanWode395';
export { default as IconBianqian } from './IconBianqian';
export { default as IconBianqianCopy } from './IconBianqianCopy';
export { default as IconBiaoqiankuozhanWode395Copy } from './IconBiaoqiankuozhanWode395Copy';
export { default as IconShouye } from './IconShouye';
export { default as IconATuandui2 } from './IconATuandui2';
export { default as IconATuandui2Copy } from './IconATuandui2Copy';
import { default as IconDaBanYuan } from './IconDaBanYuan';

export type IconNames =
    | 'a-048_pengyouquan'
    | 'a-048_pengyouquan-copy'
    | 'biaoqiankuozhan_wode-395'
    | 'bianqian'
    | 'bianqian-copy'
    | 'biaoqiankuozhan_wode-395-copy'
    | 'shouye'
    | 'a-tuandui2'
    | 'a-tuandui2-copy'
    | 'dabanyuan';

interface Props extends GProps, ViewProps {
    name: IconNames;
    size?: number;
    color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
    switch (name) {
        case 'a-048_pengyouquan':
            return <IconA048Pengyouquan key="1" {...rest} />;
        case 'a-048_pengyouquan-copy':
            return <IconA048PengyouquanCopy key="2" {...rest} />;
        case 'biaoqiankuozhan_wode-395':
            return <IconBiaoqiankuozhanWode395 key="3" {...rest} />;
        case 'bianqian':
            return <IconBianqian key="4" {...rest} />;
        case 'bianqian-copy':
            return <IconBianqianCopy key="5" {...rest} />;
        case 'biaoqiankuozhan_wode-395-copy':
            return <IconBiaoqiankuozhanWode395Copy key="6" {...rest} />;
        case 'shouye':
            return <IconShouye key="7" {...rest} />;
        case 'a-tuandui2':
            return <IconATuandui2 key="8" {...rest} />;
        case 'a-tuandui2-copy':
            return <IconATuandui2Copy key="9" {...rest} />;
        case 'dabanyuan':
            return <IconDaBanYuan key="10" {...rest} />;
    }

    return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
