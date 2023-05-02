import React from 'react';
import {Dimensions, View, Image} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 2);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const ImageCurousel = props => {
  const {imageData} = props;
  const progressValue = useSharedValue < Number > 0;
  const _renderItem = ({item, index}) => {
    return (
      <View>
        <Image
          source={item}
          style={{width: '100%', height: 140, borderRadius: 20}}
        />
      </View>
    );
  };

  return (
    <Carousel
      data={imageData}
      // autoPlay={true}
      renderItem={_renderItem}
      width={SLIDER_WIDTH}
      snapEnabled
      scrollAnimationDuration={1000}
      height={140}
      onProgressChange={(_, absoluteProgress) =>
        (progressValue.value = absoluteProgress)
      }
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 50,
      }}
    />
  );
};
export {ImageCurousel};
