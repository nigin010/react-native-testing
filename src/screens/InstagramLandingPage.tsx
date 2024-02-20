/* eslint-disable prettier/prettier */
import React from 'react';
import HeaderComponent from '../component/HeaderComponent';
import {ScrollView, StyleSheet, View} from 'react-native';
import StoryComponent from '../component/StoryComponent';
import FeedComponent from '../component/FeedComponent';

const InstagramUI = () => {
  return (
    <View>
      <ScrollView>
        <HeaderComponent />
        <StoryComponent/>
        <FeedComponent/>
      </ScrollView>
    </View>
  );
};

export default InstagramUI;
