import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import colors from '../assets/colors/colors';
import { LinearGradient } from 'expo-linear-gradient';
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
        <LinearGradient
          colors={["#ffffff01", "#ffffff10"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.eventDetailsCardWrapper}
        >
          <View style={styles.eventDetailsCardTop}>
            <Image source={item.imageSqaure} style={styles.eventDetailsImage} />
            <View style={styles.eventTitleWrapper}>
              <Text style={styles.eventTitle}>{item.name}</Text>
            </View>
          </View>

          <View style={styles.eventDetailsCardBottom}>
            <Text style={styles.eventPrizePool}>Prize Pool - {item.prizePool}</Text>
          </View>

        </LinearGradient>

        {/* <View style={styles.eventDetailsCardWrapper}>
        <LinearGradient
          colors={["#ffffff10", "#ffffff01"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.eventDetailsWrapper}
        >
          <Image source={item.image} style={styles.eventPoster} />
          <View style={styles.eventInfoWrapper}>
            <View style={styles.eventDateWrapper}>
              <View style={styles.eventDate}>
                <Text style={styles.eventDateDate}>{item.date}</Text>
                <Text style={styles.eventDateMonth}>{item.month}</Text>
                <Text style={styles.eventDateYear}>{item.day}</Text>
              </View>
            </View>
            <View style={styles.eventDesc}>
              <Text style={styles.eventName}>{item.name}</Text>
              <Text style={styles.eventVenue}>Venue - {item.venue}</Text>
              <Text style={styles.eventTeam}>Team - {item.team}</Text>
              <Text style={styles.eventDescription}>{item.description}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.registerNow}
            onPress={() => {
              navigation.navigate('EventDetails', {
                item: item,
              })
            }}
          >
            <Text style={styles.registerNowText}>Register Now!</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View> */}
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
    padding: 20,
  },
  eventDetailsCardWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  eventDetailsCardTop: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
  },
  eventDetailsImage: {
    width: width * 0.9,
    height: width * 0.9,
    borderRadius: 16,
  },
  eventTitleWrapper: {
    position: 'absolute',
    backgroundColor: colors.gradientLightBlue1,
    bottom: 0,
    transform: [
      { translateX: 0 },
      { translateY: 30, },
    ],
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  eventTitle: {
    fontFamily: 'Montserrat-Bold',
    color: colors.white,
    fontSize: 32,
    textAlign: 'center',
  },
  eventDetailsCardBottom: {
    marginTop: 32,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventPrizePool: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
});