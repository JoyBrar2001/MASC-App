import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { EventsData } from '../data/data'
import colors from '../assets/colors/colors'

const CreateEventsCard = ({ item }) => (
  <View style={styles.eventCardWrapper}>
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
  </View>
)

const Events = () => {
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={styles.eventWrapper}>
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
  },
  eventVenue: {
    color: colors.white,
    fontSize: 16,
  },
  eventTeam: {
    color: colors.white,
    fontSize: 16,
  },
  eventDescription: {
    color: colors.white,
    fontSize: 12,
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
  }
});