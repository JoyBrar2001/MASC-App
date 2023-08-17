import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { FeaturedTopPicksData } from '../data/data';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import colors from '../assets/colors/colors';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const width = Dimensions.get('window').width;

const Blogs = () => {
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <Text style={styles.blogTitle}>Our Best Blogs</Text>
      <View style={styles.blogsCarouselWrapper}>
        <Carousel
          loop
          width={width}
          height={width * 0.9}
          autoPlay={true}
          mode='parallax'
          // layout={'tinder'} layoutCardOffset={`9`}
          data={FeaturedTopPicksData}
          scrollAnimationDuration={1000}
          // onSnapToItem={(index) => console.log("Current Index : ", index)}
          renderItem={({ index, item }) => (
            <LinearGradient colors={["#ffffff10", "#ffffff01"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.blogCarouselCardWrapper}>
              <Image source={item.image} style={styles.carouselCardImage}></Image>
              <View style={styles.carouselCardInfo}>
                <Text style={styles.carouselCardTitle}>{item.name}</Text>
                <Text style={styles.carouselCardDescription}>{item.description}</Text>
              </View>
              <TouchableOpacity style={styles.checkItOutWrapper}>
                <Text style={styles.checkItOutText}>Read more on Medium</Text>
                <Feather name="arrow-up-right" size={24} color="white" />
              </TouchableOpacity>
            </LinearGradient>
          )}
        />
      </View>
      <Text style={styles.blogTitle}>Latest Blogs</Text>
      <View style={styles.latestBlogsWrapper}>
        {FeaturedTopPicksData.map((item, index) => (
          <LinearGradient
            colors={["#ffffff01", "#ffffff10"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            key={index}
            style={[
              styles.latestBlogCardWrapper,
              {marginBottom: item.id === FeaturedTopPicksData.length - 1 ? 80 : 0}, 
            ]}
          >
            <Image source={item.image} style={styles.latestBlogCardImage} />
            <View style={styles.latestBlogCardInfo}>
              <Text style={styles.latestBlogCardTitle}>{item.name}</Text>
              <Text style={styles.latestBlogCardDesciption}>{item.description}</Text>
            </View>
            <View style={styles.latestBlogCardCheckItOutWrapper}>
              <Text style={styles.latestBlogCardCheckItOutText}>Check it out on Medium</Text>
              <Feather name="arrow-up-right" size={24} color="white" />
            </View>
          </LinearGradient>
        ))}
      </View>
    </ScrollView>
  );
}

export default Blogs;

const styles = StyleSheet.create({
  blogTitle: {
    color: colors.white,
    fontSize: 30,
    fontFamily: 'Montserrat-Light',
    textAlign: 'center',
    marginVertical: 12,
  },
  blogsCarouselWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
  blogCarouselCardWrapper: {
    overflow: 'hidden',
    borderRadius: 15,
  },
  carouselCardImage: {
    width: width,
    height: 180,
  },
  carouselCardInfo: {
    padding: 10,
  },
  carouselCardTitle: {
    color: colors.white,
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
  },
  carouselCardDescription: {
    marginTop: 6,
    color: colors.white,
    fontSize: 12,
    fontFamily: 'Montserrat-Light',
  },
  checkItOutWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gradientLightBlue1,
    gap: 4,
    paddingVertical: 12,
    borderRadius: 15,
  },
  checkItOutText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    color: colors.white,
  },
  latestBlogsWrapper: {
    flexDirection: 'column',
    gap: 20,
    paddingHorizontal: 16,
  },
  latestBlogCardWrapper: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  latestBlogCardImage: {
    width: width,
    height: 200,
  },
  latestBlogCardInfo: {
    padding: 10,
  },
  latestBlogCardTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.white,
  },
  latestBlogCardDesciption: {
    fontFamily: 'Montserrat-Light',
    marginTop: 6,
    fontSize: 12,
    color: colors.white,
  },
  latestBlogCardCheckItOutWrapper: {
    flexDirection: 'row',
    padding: 10,
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gradientLightBlue1,
  },
  latestBlogCardCheckItOutText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
});