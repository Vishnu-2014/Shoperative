import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const ImageCurousel = props => {
  const {imageData} = props;
  let _carousel = React.useRef();
  const _renderItem = ({item, index}) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <Carousel
      ref={c => {
        _carousel = c;
      }}
      data={imageData}
      renderItem={_renderItem}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
    />
  );
};
