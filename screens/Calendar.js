import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../assets/colors/colors';

const Saved = () => {
  return (
    <LinearGradient colors={[colors.gradientDarkBlue1, colors.gradientDarkBlue2]} style={styles.calendarScreenWrapper}>
      <Text style={{ color: colors.white }}>Calendar</Text>
    </LinearGradient>
  );
}

export default Saved;

const styles = StyleSheet.create({
  calendarScreenWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});