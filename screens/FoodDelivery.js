import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../assets/colors/colors';
import Carousel from 'react-native-reanimated-carousel';
import { FoodTopPicksData, RestaurantData } from '../data/data';
import { Feather } from '@expo/vector-icons'

const width = Dimensions.get('window').width;

const GradientLine = () => (
  <LinearGradient style={styles.gradientLine} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} colors={["#ffffff00", "#ffffff", "#ffffff00"]} />
);

const CreateTopPiclsCard = ({ item, index }) => {
  return (
    <View key={index} style={styles.foodTopPicksCardWrapper}>
      <ImageBackground source={item.image} style={styles.carouselCardImage}>
        {/* <View style={styles.carouselCardInfo}>
          <Text style={styles.carouselCardDescription}>{item.description}</Text>
        </View>
        <TouchableOpacity style={styles.checkItOutWrapper}>
          <Text style={styles.checkItOutText}>Check it out</Text>
          <Feather name="arrow-up-right" size={24} color="white" />
        </TouchableOpacity> */}

        <LinearGradient
          colors={["#00000000", "#000000"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.carouselCardBgGradient}
        >
          <View style={styles.foodTopPicksDescWrapper}>
            <Text style={styles.foodTopPicksDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.topPicksArrowWrapper}>
              <Feather name="arrow-up-right" size={32} color="white" />
            </TouchableOpacity>
          </View>
        </LinearGradient>

      </ImageBackground>
    </View>
  )
}

const GenereatePriceSymbol = ( price ) => {
  let priceString = '';
  let priceRemainingString = '';
  for(let i = 0; i < price; i++){
    priceString += '₹';
  }
  for(let i = 0; i < 5 - price; i++){
    priceRemainingString += '₹';
  }

  // console.log(priceString);
  // console.log(priceRemainingString);

  return { priceString, priceRemainingString };
}

const CreateRestaurantsCard = ({ item, index }) => {
  const { priceString, priceRemainingString } = GenereatePriceSymbol(item.price);

  return (
    // <TouchableOpacity>
      <LinearGradient
        colors={["#ffffff01", "#ffffff10"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.restaurantCard, 
          { marginBottom: item.id === RestaurantData.length - 1 ? 80 : 0 }
        ]}
      >
        <View style={styles.restaurantCardTopWrapper}>
          <View style={styles.restaurantCardTitleWrapper}>
            <Text style={styles.restaurantCardTitle}>{item.name}</Text>
            <View style={styles.restaurantPriceWrapper}>
              <Text style={styles.restaurantPriceText}>{priceString}</Text>
              <Text style={[styles.restaurantPriceText, { opacity: 0.4 }]}>{priceRemainingString}</Text>
            </View>
          </View>
          {item.image ?
            <Image source={item.image} style={styles.restaurantLogo} />
            : null
          }
        </View>
        <View style={styles.restaurantCardInfoWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={true} contentContainerStyle={styles.restaurantCardTagsWrapper} >
            {item.tags.map((item, index) => (
              <View style={styles.restaurantCardTagWrapper}>
                <Text style={styles.restaurantCardTagText}>{item}</Text>
              </View>
            ))}
          </ScrollView>
          <Text style={styles.restaurantCardText}>Location: {item.location}</Text>
          <Text style={styles.restaurantCardText}>Time: {item.time}</Text>
          <Text style={styles.restaurantCardText}>Info Field 1</Text>
          <Text style={styles.restaurantCardText}>Info Field 2</Text>
        </View>

        <TouchableOpacity style={styles.orderNowButtonWrapper}>
          <Text style={styles.orderNowText}>Order Now</Text>
          <Feather name="arrow-up-right" size={24} color="white" />
        </TouchableOpacity>
      </LinearGradient>
    // </TouchableOpacity>
  )
}

const FoodDelivery = () => {
  return (
    <LinearGradient colors={[colors.gradientDarkBlue1, colors.gradientDarkBlue2]} style={styles.foodDeliveryWrapper}>
      <SafeAreaView style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <Image style={styles.topBarProfileIcon} source={require('../assets/icons/profilePicture.png')} />
          <Text style={styles.topBarText}>Hello, Joy</Text>
        </View>
        <Image style={styles.topBarACMLogo} source={require('../assets/icons/mujAcmChapterIcon.png')} />
      </SafeAreaView>

      <GradientLine />

      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <Text style={styles.topPicksTitle}>Top Picks for You</Text>
        <View style={styles.blogsCarouselWrapper}>
          <Carousel
            loop
            width={width}
            height={width * 0.9}
            autoPlay={true}
            mode='parallax'
            // layout={'tinder'} layoutCardOffset={`9`}
            data={FoodTopPicksData}
            scrollAnimationDuration={1000}
            // onSnapToItem={(index) => console.log("Current Index : ", index)}
            renderItem={({ index, item }) => <CreateTopPiclsCard item={item} index={index} />}
          />
        </View>

        <Text style={[styles.topPicksTitle, { marginTop: -72, }]}>Restaurants</Text>
        <View style={styles.restaurantsWrapper}>
          {RestaurantData.map((item, index) => (
            <CreateRestaurantsCard item={item} index={index} key={index} />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export default FoodDelivery;

const styles = StyleSheet.create({
  foodDeliveryWrapper: {
    flex: 1,
    paddingTop: 32,
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  topBarLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  topBarProfileIcon: {
    width: 32,
    height: 34,
  },
  topBarText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: 'Montserrat-Light'
  },
  topBarACMLogo: {
    width: 40,
    height: 40,
  },
  topPicksTitle: {
    color: colors.white,
    fontSize: 30,
    fontFamily: 'Montserrat-Light',
    textAlign: 'center',
    marginVertical: 12,
  },
  gradientLine: {
    width: '100%',
    height: 1,
  },
  foodTopPicksCardWrapper: {
    overflow: 'hidden',
    borderRadius: 15,
  },
  blogsCarouselWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -28,
  },
  carouselCardImage: {
    width: width,
    height: width * 0.7,
    transform: [
      { scale: 1.05 },
    ],
  },
  carouselCardBgGradient: {
    width: width,
    height: width * 0.7,
    padding: 16,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  foodTopPicksDescWrapper: {
    flexDirection: 'row',
    width: width * 0.92,
    alignItems: 'center',
  },
  foodTopPicksDescription: {
    color: colors.white,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 26,
    flex: 1,
    width: width * 0.6,
  },
  topPicksArrowWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginLeft: 6,
    borderRadius: 32,
    backgroundColor: colors.gradientLightBlue1,
  },

  restaurantsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
  },
  restaurantCard: {
    borderRadius: 15,
    overflow: 'hidden',
    width: width * 0.9,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  restaurantCardTopWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  restaurantCardTitleWrapper: {
    flexDirection: 'column',
  },
  restaurantCardTitle: {
    color: colors.white,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
  },
  restaurantLogo: {
    height: width * 0.20,
    width: width * 0.20,
    borderRadius: 64,
  },
  restaurantPriceWrapper: {
    flexDirection: 'row',
  },
  restaurantPriceText: {
    color: colors.white,
    fontSize: 16,
    letterSpacing: 2,
  },
  restaurantCardInfoWrapper: {
    flexDirection: 'column',
    gap: 8,
  },
  restaurantCardText: {
    color: colors.white,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  restaurantCardTagsWrapper: {
    gap: 12,
  },
  restaurantCardTagWrapper: {
    backgroundColor: '#ffffff10',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginVertical: 8,
  },
  restaurantCardTagText: {
    color: colors.white,
    fontFamily: 'Montserrat-Light',
  },
  orderNowButtonWrapper: {
    backgroundColor: colors.gradientLightBlue1,
    position: 'absolute',
    right: 0,
    bottom: 0,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
  },
  orderNowText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: colors.white,
  }
});