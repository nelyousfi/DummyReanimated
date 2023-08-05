import {useRef} from 'react';
import {View, ViewStyle} from 'react-native';

const Animated = {
  View: View,
};

type Config = {
  duration: number;
  easing: {factory: () => (x: number) => number};
};

const Easing = {
  bezier: (
    _x1: number,
    _y1: number,
    _x2: number,
    _y2: number,
  ): Config['easing'] => {
    return {
      factory: () => (x: number) => x,
    };
  },
};

const useAnimatedStyle = (fun: () => ViewStyle): ViewStyle => {
  return fun();
};

const useSharedValue = (value: number): {value: number} => {
  const ref = useRef({value});
  return ref.current;
};

const withTiming = (value: number, _config: Config): number => {
  return value;
};

export {Easing, useAnimatedStyle, useSharedValue, withTiming};

export default Animated;
