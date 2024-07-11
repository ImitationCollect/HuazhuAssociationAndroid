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

let IconShouye: FunctionComponent<Props> = ({ size, color, ...rest }) => {
    return (
        <Svg viewBox="0 0 1353 1024" width={size} height={size} {...rest}>
            <Path
                d="M1085.344851875 447.45073625l-364.0708209375-378.8620078125C698.56826 44.97472625 668.4668946874999 32 636.0300790625 32s-62.667928124999996 12.97472625-85.24395187500001 36.5887284375l-364.07082 378.8620078125c-37.626705937500006 38.924178749999996-32.955804375 72.788214375-26.4684421875 87.1901615625 4.6709015625 10.2500334375 19.462089374999998 37.626705937500006 62.538180937499995 37.626705937500006h53.326125v291.282605625c0 66.30085125 47.746993125 128.44979062500002 114.95607562500001 128.44979062500002H512.7701796875c18.4241109375 0 33.345046875-14.920935 33.345045937500004-33.345046875v-275.0641978125c0-32.955804375-5.060143125-51.37991625 28.8038925-51.37991625h122.48141625c33.864035625 0 28.8038925 18.553859062500003 28.8038925 51.37991625v278.4376265625c0 16.4779021875 13.3639678125 29.8418709375 29.8418709375 29.8418709375h124.94661468749999c67.5983240625 0 114.95607468749999-62.148939375000005 114.95607468749999-128.44979062500002V572.1378565625h53.326125c43.20583875 0 57.9970265625-27.3766725 62.667928124999996-37.626706874999996 5.8386271875-13.753210312499998 11.0285175-47.617245937499995-26.5981884375-87.0604134375z m-36.199486875 64.87363218750001h-85.6331934375c-15.439924687499998 0-27.89566125 12.4557375-27.895662187499997 27.89566125v323.5896740625c0 32.955804375-21.408298125 68.6363025-55.1425865625 68.6363025h-94.9749965625V683.979996875c0-66.30085125-21.408298125-111.193404375-89.0066221875-111.193404375H573.881140625c-67.5983240625 0-89.0066221875 45.411541875-89.006623125 111.193404375v248.46600937500003h-94.1965125c-33.864035625 0-55.1425865625-35.1615084375-55.1425875-68.6363025V537.2358425c0-13.753210312499998-11.1582646875-24.911474062499998-24.911474062499998-24.911474062499998H222.13630999999998c-0.9082312499999999 0-1.8164615625-4.1519128125-2.7246928125-4.1519128125 1.8164615625-3.7626703125 5.579131875-12.97472625 11.54750625-18.943100625L594.77045 110.88633593750001c10.6392759375-11.1582646875 26.46844125-18.034869375 41.259629062500004-18.034869375 14.7911878125 0 29.1931340625 7.006351875 40.35139875 18.034869375L1040.8415403125 489.09960781250004c5.968374375000001 5.968374375000001 9.731044687499999 15.3101775 11.54750625 18.943100625-1.42722 0.1297471875-2.205703125 4.28166-3.2436815625 4.28166z m0 0"
                fill={getIconColor(color, 0, '#2e9571')}
            />
        </Svg>
    );
};

IconShouye = React.memo ? React.memo(IconShouye) : IconShouye;

export default IconShouye;