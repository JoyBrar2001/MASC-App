import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/colors/colors'
import { Featured, Events, Blogs } from '../components/index.js'
import { LinearGradient } from 'expo-linear-gradient'

const sections = ['Featured', 'Events', 'Blogs', 'PYQs', 'Placements', 'Research', 'Internships'];

const GradientLine = () => (
  <LinearGradient style={styles.gradientLine} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} colors={["#ffffff00", "#ffffff", "#ffffff00"]} />
)

const HomeScreen = ({ navigation }) => {
  const [currentSection, setCurrentSection] = useState('Featured');

  const changeCurrentSection = (section) => {
    setCurrentSection(section)
    // console.log(currentSection)
  }

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

      <GradientLine />

      <View style={styles.mainSectionWrapper}>
        {
          currentSection === "Featured" ?
            <Featured /> :
          currentSection === "Events" ?
            <Events navigation={navigation} /> :
          currentSection === "Blogs" ?
            <Blogs /> : 
          null
        }
      </View>
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  homeScreenWrapper: {
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
  sectionNavigatorWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 6,
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
    fontFamily: 'Montserrat-Regular'
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
    // paddingHorizontal: 16,
    // paddingTop: 10,
  },
  gradientLine: {
    width: '100%',
    height: 1,
  }
})