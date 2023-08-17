import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../assets/colors/colors';
import { FeaturedTopPicksData } from '../data/data';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

Feather.loadFont();

const CreateFeaturedTopPicksCard = ({ item }) => (
  <LinearGradient 
    colors={["#ffffff01", "#ffffff10"]} 
    start={{x: 0, y: 0}} 
    end={{x: 1, y: 1}} 
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
);

const Featured = () => {
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <Text style={styles.topPicksTitle}>Our Top Picks for you</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.featuredTopPicksWrapper}>
        {FeaturedTopPicksData.map((item, index) => (
          <CreateFeaturedTopPicksCard item={item} key={index} />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

export default Featured;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  },
  topPicksTitle: {
    color: colors.white,
    fontSize: 30,
    fontFamily: 'Montserrat-Light',
    textAlign: 'center',
    marginVertical: 12,
  },
  featuredTopPicksWrapper: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
  },
  featuredTopPicksCard: {
    width: 160,
    borderRadius: 15,
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topPicksCardImage: {
    width: 160,
    height: 80,
  },
  topPicksCardInfo: {
    padding: 10,
  },
  topPicksCardTitle: {
    color: colors.white,
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    lineHeight: 24,
    marginBottom: 10,
  },
  topPicksCardDescription: {
    color: colors.white,
    fontSize: 10,
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
  checkItOutText: {
    fontSize: 14,
    color: colors.white,
    fontFamily: 'Montserrat-SemiBold',
  },
});