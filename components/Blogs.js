import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FeaturedTopPicksData } from '../data/data'
import { LinearGradient } from 'expo-linear-gradient'
import Carousel from 'react-native-reanimated-carousel'
import colors from '../assets/colors/colors'

const CreateFeaturedTopPicksCard = ({ item }) => (
  <LinearGradient
    colors={["#ffffff01", "#ffffff10"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.featuredTopPicksCard}
  >
    <Image source={item.image} style={styles.topPicksCardImage} />

    <View style={styles.topPicksCardInfo}>
      <Text style={styles.topPicksCardTitle}>{item.name}</Text>
      {/* <Text style={styles.topPicksCardDescription}>{item.description}</Text> */}
    </View>

    <TouchableOpacity style={styles.checkItOutWrapper}>
      <Text style={styles.checkItOutText}>Check it out!</Text>
      <Feather name="arrow-up-right" size={18} color={colors.white} />
    </TouchableOpacity>
  </LinearGradient>
)

const width = Dimensions.get('window').width

const Blogs = () => {

  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <Text style={styles.blogTitle}>Our Best Blogs</Text>
      <View style={styles.blogsCarouselWrapper}>
        <Carousel
          loop
          width={width * 0.9}
          height={width * 2}
          autoPlay={true}
          layout={'tinder'} layoutCardOffset={`9`}
          data={FeaturedTopPicksData}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log("Current Index : ", index)}
          renderItem={({ index, item }) => (
            <LinearGradient colors={["#ffffff10", "#ffffff01"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.blogCarouselCardWrapper}>
              <Image source={item.image} style={styles.carouselCardImage}></Image>
              <View style={styles.carouselCardInfo}>
                <Text style={styles.carouselCardTitle}>{item.name}</Text>
                <Text style={styles.carouselCardDescription}>{item.description}</Text>
              </View>
              <TouchableOpacity style={styles.checkItOutWrapper}>
                <Text>Check it out on Medium</Text>
              </TouchableOpacity>
            </LinearGradient>
          )}
        />
      </View>
    </ScrollView>
  )
}

export default Blogs

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
  },
  blogCarouselCardWrapper: {
    
  },
  carouselCardImage: {
    width: width,
    height: 160,
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
    paddingVertical: 8,
    borderRadius: 15,
  },
})