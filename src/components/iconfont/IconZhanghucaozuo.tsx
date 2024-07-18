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

let IconZhanghucaozuo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M884.736 776.192h-727.04V222.208h727.04v115.2h-237.056c-87.04 0-158.208 70.144-158.208 156.672s71.168 157.184 158.208 157.184h237.056v124.928z m-2.048-378.368v188.416h-235.52c-51.712 0-94.208-42.496-94.208-94.208 0-51.712 42.496-94.208 94.208-94.208h235.52z m-1.024-235.52H161.28c-34.304 0-62.464 28.16-62.464 62.976v549.376c0 34.816 28.16 62.976 62.464 62.976h719.872c34.304 0 62.464-28.16 62.464-62.976V225.28c0.512-34.816-27.648-62.976-61.952-62.976z m-281.6 329.728c0 26.112 20.992 47.104 47.104 47.104s47.104-20.992 47.104-47.104-20.992-47.104-47.104-47.104-47.104 20.992-47.104 47.104z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconZhanghucaozuo.defaultProps = {
  size: 18,
};

IconZhanghucaozuo = React.memo ? React.memo(IconZhanghucaozuo) : IconZhanghucaozuo;

export default IconZhanghucaozuo;
