import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../assets/colors/colors';

const Profile = () => {
  return (
    <LinearGradient colors={[colors.gradientDarkBlue1, colors.gradientDarkBlue2]} style={styles.profileScreenWrapper}>
      <Text style={{ color: colors.white }}>Profile</Text>
    </LinearGradient>
  );
}

export default Profile;

const styles = StyleSheet.create({
  profileScreenWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});