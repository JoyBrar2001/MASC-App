import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-web'
import colors from '../assets/colors/colors'
import { Featured, Events } from '../components/index.js'

const sections = ['Featured', 'Events', 'PYQs', 'Placements', 'Research', 'Blogs', 'Internships'];

const HomeScreen = () => {
  const [currentSection, setCurrentSection] = useState('Events');

  const changeCurrentSection = (section) => {
    setCurrentSection(section)
    // console.log(currentSection)
  }

  return (
    <View style={styles.homeScreenWrapper}>
      {/* TopBar */}
      <SafeAreaView style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <Image style={styles.topBarProfileIcon} source={require('../assets/icons/Profile Picture.png')} />
          <Text style={styles.topBarText}>Hello, Joy</Text>
        </View>
        <Image style={styles.topBarACMLogo} source={require('../assets/icons/MUJ ACM Chapter Icon.png')} />
      </SafeAreaView>

      {/* Navigation Pills */}
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.sectionNavigatorWrapper}
          style={styles.sectionNavigatorWrapper}
        >
          {sections.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={currentSection === item ? styles.sectionNavigatorItemSelected : styles.sectionNavigatorItem}
              onPress={() => changeCurrentSection(item)}
            >
              <Text style={styles.sectionNavigatorItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.mainSectionWrapper}>
        {
          currentSection === "Featured" ?
            <Featured /> :
          currentSection === "Events" ?
            <Events /> :
            null
        }
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  homeScreenWrapper: {
    flex: 1,
    backgroundColor: colors.gradientDarkBlue1,
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
  },
  topBarACMLogo: {
    width: 40,
    height: 40,
  },
  sectionNavigatorWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    paddingLeft: 6,
    marginVertical: 6,
  },
  sectionNavigatorItem: {
    color: colors.white,
    height: 40,
    backgroundColor: '#ffffff10',
    borderRadius: 20,
    paddingHorizontal: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionNavigatorItemSelected: {
    color: colors.white,
    height: 40,
    backgroundColor: colors.gradientLightBlue1,
    borderRadius: 20,
    paddingHorizontal: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionNavigatorItemText: {
    color: colors.white,
  },
  gradient: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  mainSectionWrapper: {
    flex: 1,
    paddingHorizontal: 16,
  }
})