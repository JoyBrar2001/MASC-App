import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const GradientLine = () => {
  return (
    <LinearGradient 
      style={styles.gradientLine} 
      start={{ x: 0, y: 0.5 }} 
      end={{ x: 1, y: 0.5 }} 
      colors={["#ffffff00", "#ffffff", "#ffffff00"]} 
    />
  )
}

export default GradientLine

const styles = StyleSheet.create({
  gradientLine: {
    width: '100%',
    height: 1,
  }
})