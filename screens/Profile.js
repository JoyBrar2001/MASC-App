import { StyleSheet, Text, View, SafeAreaView, Image, } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../assets/colors/colors';
import { Entypo, FontAwesome, Feather, Ionicons } from '@expo/vector-icons';

Entypo.loadFont();
FontAwesome.loadFont();
Feather.loadFont();
Ionicons.loadFont();

const GradientLine = () => (
  <LinearGradient style={styles.gradientLine} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} colors={["#ffffff00", "#ffffff", "#ffffff00"]} />
);

const Profile = () => {
  return (
    <LinearGradient colors={[colors.gradientDarkBlue1, colors.gradientDarkBlue2]} style={styles.profileScreenWrapper}>
      <SafeAreaView style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <Image style={styles.topBarProfileIcon} source={require('../assets/icons/profilePicture.png')} />
          <Text style={styles.topBarText}>Hello, Joy</Text>
        </View>
        <Image style={styles.topBarACMLogo} source={require('../assets/icons/mujAcmChapterIcon.png')} />
      </SafeAreaView>

      <GradientLine />

      <View style={styles.profilePhotoWrapper}>
        <Text style={styles.yourProfileTitle}>Your Profile</Text>
        <GradientLine />
        <FontAwesome name="user-circle-o" size={128} color="white" style={{ marginTop: 32 }} />
        <Text style={[styles.yourProfileTitle, { fontFamily: 'Montserrat-SemiBold' }]}>Joy Brar</Text>
        <Text style={styles.memberSinceText}>Member since: 30-8-2022</Text>
      </View>

      <View style={styles.buttonsWrapper}>
        <GradientLine />
        <View style={styles.buttonWrapper}>
          <FontAwesome name="user" size={32} color="white" />
          <Text style={styles.buttonText}>Account Details</Text>
          <Feather name="chevron-right" size={32} color="white" />
        </View>
        <GradientLine />
        <View style={styles.buttonWrapper}>
          <Ionicons name="fast-food" size={32} color="white" />
          <Text style={styles.buttonText}>My Orders</Text>
          <Feather name="chevron-right" size={32} color="white" />
        </View>
        <GradientLine />
        <View style={styles.buttonWrapper}>
          <Entypo name="pie-chart" size={32} color="white" />
          <Text style={styles.buttonText}>My Stats</Text>
          <Feather name="chevron-right" size={32} color="white" />
        </View>
        <GradientLine />
        <View style={styles.buttonWrapper}>
          <Ionicons name="newspaper" size={32} color="white" />
          <Text style={styles.buttonText}>My Blogs</Text>
          <Feather name="chevron-right" size={32} color="white" />
        </View>
        <GradientLine />
        <View style={styles.buttonWrapper}>
          <Ionicons name="settings" size={32} color="white" />
          <Text style={styles.buttonText}>Settings</Text>
          <Feather name="chevron-right" size={32} color="white" />
        </View>
        <GradientLine />
      </View>
    </LinearGradient>
  );
}

export default Profile;

const styles = StyleSheet.create({
  profileScreenWrapper: {
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
    width: "100%",
    height: 1,
  },
  yourProfileTitle: {
    color: colors.white,
    fontSize: 30,
    fontFamily: 'Montserrat-Light',
    textAlign: 'center',
    marginVertical: 6,
  },
  profilePhotoWrapper: {
    width: "100%",
    alignItems: 'center',
  },
  memberSinceText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Montserrat-Light',
    textAlign: 'center',
    opacity: 0.8,
  },
  buttonsWrapper: {
    paddingTop: 16,
    flexDirection: 'column',
    paddingHorizontal: 16,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
  },
});