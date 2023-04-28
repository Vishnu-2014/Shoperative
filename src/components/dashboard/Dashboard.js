import React from 'react';
import {BottomTabs} from './BottomTabs';
import {NavigationBar} from '../CustomComponents/NavigationBar';
const Dashboard = ({navigation}) => {
  return (
    <>
      <NavigationBar navigation={navigation} />
      <BottomTabs />
    </>
  );
};
export {Dashboard};
