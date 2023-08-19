import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import colors from '../assets/colors/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width;

const GradientLine = () => (
  <LinearGradient style={styles.gradientLine} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} colors={["#ffffff00", "#ffffff", "#ffffff00"]} />
);

const EventDetails = ({ route, navigation: { goBack }, ...props }) => {
  const { item } = route.params;

  return (
    <LinearGradient colors={[colors.gradientDarkBlue1, colors.gradientDarkBlue2]} style={styles.homeScreenWrapper}>
      {/* TopBar */}
      <SafeAreaView style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <Image style={styles.topBarProfileIcon} source={require('../assets/icons/profilePicture.png')} />
          <Text style={styles.topBarText}>Hello, Joy</Text>
        </View>
        <Image style={styles.topBarACMLogo} source={require('../assets/icons/mujAcmChapterIcon.png')} />
      </SafeAreaView>

      <GradientLine />
      
      <View style={styles.eventTitleTopWrapper}>
        <Text style={styles.eventTitleTop}>{item.name}</Text>
        <TouchableOpacity onPress={() => goBack()} style={styles.eventTitleTopIconWrapper}>
          <Ionicons name="chevron-back" size={36} color="white" style={styles.eventTitleTopIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.mainWrapper}>
        <Image source={item.imageSqaure} style={styles.eventSquareBanner} />
        <LinearGradient
          colors={["#ffffff11", "#ffffff01"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.eventDetailsWrapper}
          blurRadius={1}
        >
          <BlurView style={styles.eventDetailsInnerWrapper} intensity={12}>
            <Text style={styles.eventDate}>{item.day}, {item.date} {item.month}</Text>
            <Text style={styles.prizePool}>Prize Pool - Rs.{item.prizePool}</Text>
            <Text style={styles.eventTeam}>Team Size - {item.team}</Text>
            <Text style={styles.description}>About the event - {item.description}</Text>
          </BlurView>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerNow}>Register Now !</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

    </LinearGradient>
  );
}

export default EventDetails

const styles = StyleSheet.create({
  homeScreenWrapper: {
    flex: 1,
    backgroundColor: colors.gradientDarkBlue1,
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
  eventTitleTopWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventTitleTopIconWrapper: {
    position: 'absolute',
    top: 16,
    left: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventTitleTopIcon: {
    
  },
  eventTitleTop: {
    color: colors.white,
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',
    fontSize: 32,
    marginTop: 12,
    width: width*0.9,
  },
  gradientLine: {
    height: 1,
    width: "100%",
  },
  text: {
    color: colors.white,
  },
  mainWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 12,
  },
  eventSquareBanner: {
    width: width*0.9,
    height: width*0.9,
    borderRadius: 16,
  },
  eventDetailsWrapper: {
    width: width*0.8,
    marginTop: -30,
    borderRadius: 16,
    overflow: 'hidden',
  },
  eventDetailsInnerWrapper: {
    padding: 12,
    flexDirection: 'column',
    gap: 6,
  },
  eventDate: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: colors.white,
    textAlign: 'center',
  },
  prizePool: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold', 
    color: colors.white,
    textAlign: 'center',
  },
  eventTeam: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: colors.white,
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.white,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  registerButton: {
    backgroundColor: colors.gradientLightBlue1,
    width: width*0.8,
    padding: 12,
  },
  registerNow: {
    fontSize: 30,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.white,
    textAlign: 'center',
  },
});