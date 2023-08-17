import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../assets/colors/colors';

const Saved = () => {
  return (
    <LinearGradient colors={[colors.gradientDarkBlue1, colors.gradientDarkBlue2]} style={styles.savedScreenWrapper}>
      <Text style={{ color: colors.white }}>Saved</Text>
    </LinearGradient>
  );
}

export default Saved;

const styles = StyleSheet.create({
  savedScreenWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});