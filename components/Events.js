import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { EventsData } from '../data/data';
import colors from '../assets/colors/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

const width = Dimensions.get('window').width;

const CreateEventsCard = ({ item, route, navigation }) => {
  const truncateDescription = (description) => {
    if (description.length < 200)
      return description;
    else
      return description.substring(0, 200);
  }

  return (
    <LinearGradient
      colors={["#ffffff10", "#ffffff01"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <TouchableOpacity
        style={[
          styles.eventCardWrapper,
          { marginBottom: item.id === EventsData.length - 1 ? 80 : 0 },
        ]}
        onPress={() => {
          navigation.navigate('EventDetails', {
            item: item,
          })
        }}
      >
        <Image source={item.image} style={styles.eventPoster} />
        <View style={styles.eventInfoWrapper}>
          <View style={styles.eventDateWrapper}>
            <View style={styles.eventDate}>
              <Text style={styles.eventDateDate}>{item.date}</Text>
              <Text style={styles.eventDateMonth}>{item.month.substring(0, 3)}</Text>
              <Text style={styles.eventDateYear}>{item.day.substring(0, 3)}</Text>
            </View>
          </View>
          <View style={styles.eventDesc}>
            <Text style={styles.eventName}>{item.name}</Text>
            <Text style={styles.eventVenue}>Venue - {item.venue}</Text>
            <Text style={styles.eventTeam}>Team - {item.team}</Text>
            <Text style={styles.eventDescription}>{truncateDescription(item.description)}</Text>
            {item.description.length > 200 &&
              <View style={styles.seeMoreWrapper}>
                <Text style={styles.seeMoreText}>...see more</Text>
                <Feather name="arrow-up-right" size={20} color={colors.white} />
              </View>
            }
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EventDetails', {
              item: item,
            })
          }}
        >
          <LinearGradient
            colors={[ colors.gradientLightBlue1, colors.gradientLightBlue2 ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.registerNow}
          >
            <Text style={styles.registerNowText}>Register Now!</Text>
          </LinearGradient>
        </TouchableOpacity>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const Events = ({ route, navigation }) => {
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={styles.eventWrapper}>
      <Text style={styles.eventsTitle}>Upcoming Events</Text>
      <View style={styles.eventCardsWrapper}>
        {EventsData.map((item, index) => (
          <CreateEventsCard navigation={navigation} item={item} key={index} />
        ))}
      </View>
    </ScrollView>
  );
}

export default Events;

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
  eventCardsWrapper: {
    flexDirection: 'column',
    paddingHorizontal: 16,
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventPoster: {
    height: 122,
    width: width * 0.85,
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
  seeMoreWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -4,
  },
  seeMoreText: {
    color: colors.white,
    fontFamily: 'Montserrat-SemiBold',
  },
  registerNow: {
    // backgroundColor: colors.gradientLightBlue1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 10,
    marginTop: 10,
    width: width * 0.85,
  },
  registerNowText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Montserrat-SemiBold'
  }
});