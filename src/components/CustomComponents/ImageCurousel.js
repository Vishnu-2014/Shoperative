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
        <Image source={item} style={{width: '100%', height: 140}} />
      </View>
    );
  };

  const PaginationItem=()=> {
  index: number
  backgroundColor: string
  length: number
  animValue: Animated.SharedValue<number>
  isRotate?: boolean
}> = (props) => {
  const { animValue, index, length, backgroundColor, isRotate } = props;
  const width = 10;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View
      style={{
        backgroundColor: "white",
        width,
        height: width,
        borderRadius: 50,
        overflow: "hidden",
        transform: [
          {
            rotateZ: isRotate ? "90deg" : "0deg",
          },
        ],
      }}
    >
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  );
};
  return (
    <Carousel
      loop
      data={imageData}
      autoPlay={true}
      renderItem={_renderItem}
      width={SLIDER_WIDTH}
      snapEnabled
      scrollAnimationDuration={3000}
      height={140}
      onProgressChange={(_, absoluteProgress) =>
        (progressValue.value = absoluteProgress)
      }
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 50,
      }}>
      {!!progressValue && (
        <View
          style={
            isVertical
              ? {
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: 10,
                  alignSelf: 'center',
                  position: 'absolute',
                  right: 5,
                  top: 40,
                }
              : {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 100,
                  alignSelf: 'center',
                }
          }>
          {colors.map((backgroundColor, index) => {
            return (
              <PaginationItem
                backgroundColor={backgroundColor}
                animValue={progressValue}
                index={index}
                key={index}
                isRotate={isVertical}
                length={colors.length}
              />
            );
          })}
        </View>
      )}
    </Carousel>
  );
};
export {ImageCurousel};
