import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { EventsData } from '../data/data'
import colors from '../assets/colors/colors'
import { LinearGradient } from 'expo-linear-gradient'

const CreateEventsCard = ({ item }) => (
  <LinearGradient colors={["#ffffff10", "#ffffff01"]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.eventCardWrapper}>
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
    <TouchableOpacity style={styles.registerNow}>
      <Text style={styles.registerNowText}>Register Now!</Text>
    </TouchableOpacity>
  </LinearGradient>
)

const Events = () => {
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={styles.eventWrapper}>
      <Text style={styles.eventsTitle}>Upcoming Events</Text>
      {EventsData.map((item, index) => (
        <CreateEventsCard item={item} key={index} />
      ))}
    </ScrollView>
  )
}

export default Events

const styles = StyleSheet.create({
  eventWrapper: {
    width: "100%",
    flexDirection: 'column',
    gap: 20,
    marginBottom: 20,
  },
  eventsTitle: {
    color: colors.white,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 12,
    fontFamily: 'Montserrat-Light'
  },
  eventCardWrapper: {
    backgroundColor: "#ffffff10",
    color: colors.white,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    gap: 10,
  },
  eventPoster: {
    height: 122,
    borderRadius: 15,
  },
  eventInfoWrapper: {
    flexDirection: 'row',
  },
  eventDateWrapper: {
    flex: 1,
  },
  eventDate: {
    flexDirection: 'column',
    backgroundColor: "#00000044",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 10,
  },
  eventDesc: {
    flex: 4,
    flexDirection: 'column',
    paddingLeft: 10,
    gap: 6
  },
  eventDateDate: {
    color: colors.white,
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
  },
  eventDateMonth: {
    color: colors.white,
    fontSize: 16
  },
  eventDateYear: {
    color: colors.white,
    fontSize: 14,
  },
  eventName: {
    color: colors.white,
    fontSize: 32,
    fontFamily: 'Montserrat-Bold'
  },
  eventVenue: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular'
  },
  eventTeam: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular'
  },
  eventDescription: {
    color: colors.white,
    fontSize: 12,
    fontFamily: 'Montserrat-Light'
  },
  registerNow: {
    backgroundColor: colors.gradientLightBlue1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 10,
    marginTop: 10,
  },
  registerNowText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Montserrat-SemiBold'
  }
});