import React, {useReducer} from 'react';
import {StyleSheet, TouchableOpacity, View, Dimensions} from 'react-native';
// import Animated, {
//   Easing,
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from 'react-native-reanimated';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from './src';

const config = {
  duration: 500,
  easing: Easing.bezier(0.5, 0.01, 0, 1),
};

export default function App() {
  const randomWidth = useSharedValue(100);

  const style = useAnimatedStyle(() => {
    const width = withTiming(randomWidth.value, config);
    return {
      width,
    };
  });

  const [, rerender] = useReducer(x => x + 1, 0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          randomWidth.value = Math.random() * Dimensions.get('window').width;
          rerender();
        }}>
        <Animated.View style={[styles.box, style]} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    backgroundColor: 'orange',
    marginVertical: 10,
  },
});
