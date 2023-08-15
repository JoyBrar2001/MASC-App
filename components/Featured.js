import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'

const Featured = () => {
  return (
    <View>
      <Text style={styles.text}>Featured</Text>
    </View>
  )
}

export default Featured

const styles = StyleSheet.create({
    text: {
        color: colors.white,
    }
})