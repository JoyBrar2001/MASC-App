import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../assets/colors/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { InternshipsData } from '../data/data';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const CreateInternshipCard = ({ item }) => (
  <LinearGradient
    colors={["#ffffff10", "#ffffff01"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.internshipCardWrapper}
  >
    <View style={styles.internshipCardTopWrapper}>
      <View>
        <Text style={styles.internshipTitle}>{item.title}</Text>
        <Text style={styles.internshipCompany}>{item.company}</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.internshipImage} />
      </View>
    </View>

    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.technologiesRequired}>
      {item.technologiesRequired.map((item, index) => (
        <View key={index} style={styles.technologiesRequiredWrapper}>
          <Text style={styles.technologiesText}>{item}</Text>
        </View>
      ))}
    </ScrollView>

    <View style={styles.internshipDetailsWrapper}>
      <View style={styles.internshipDetailWrapper}>
        {item.location === "Work From Home" ?
          <Ionicons name="md-home-outline" size={22} color="white" /> :
          <FontAwesome name="building-o" size={22} color="white" />
        }
        <Text style={styles.intershipDetailTitle}>{item.location}</Text>
      </View>
      <View style={styles.internshipDetailWrapper}>
        <AntDesign name="clockcircleo" size={22} color="white" />
        <Text style={styles.intershipDetailTitle}>Start in - {item.startDate}</Text>
      </View>
      <View style={styles.internshipDetailWrapper}>
        <Feather name="calendar" size={22} color="white" />
        <Text style={styles.intershipDetailTitle}>{item.duration}</Text>
      </View>
    </View>

    <View>
      <Text>Stipend</Text>
      <View style={styles.stipendWrapper}>
        <Text style={styles.stipendAmount}>{item.stipend}</Text>
      </View>
    </View>

    <TouchableOpacity style={styles.arrowWrapper}>
      <Text style={styles.applyNowText}>Apply Now</Text>
      <Feather name="arrow-up-right" size={44} color="white" />
    </TouchableOpacity>
  </LinearGradient>
)

const Internships = () => {
  return (
    <ScrollView vertical={true} showsVerticalScrollIndicator={false} contentContainerStyle={styles.internshipWrapper}>
      <Text style={styles.internshipsTitle}>Internships</Text>
      <View style={styles.internshipCardsWrapper}>
        {InternshipsData.map((item, index) => (
          <CreateInternshipCard key={index} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}

export default Internships;

const styles = StyleSheet.create({
  internshipWrapper: {
    width: "100%",
    flexDirection: 'column',
    gap: 20,
    marginBottom: 20,
    paddingBottom: 100,
  },
  internshipsTitle: {
    color: colors.white,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 12,
    fontFamily: 'Montserrat-Light'
  },
  internshipCardsWrapper: {
    flexDirection: 'column',
    paddingHorizontal: 16,
    gap: 20,
  },
  internshipCardWrapper: {
    padding: 12,
    borderRadius: 15,
  },
  internshipCardTopWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  internshipTitle: {
    color: colors.white,
    fontSize: 24,
    fontFamily: 'Montserrat-SemiBold',
  },
  internshipCompany: {
    color: colors.white,
    opacity: 0.7,
    fontFamily: 'Montserrat-Light',
  },
  imageWrapper: {
    height: 75,
    width: 75,
    borderRadius: 20,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  internshipImage: {
    height: 75,
    width: 75,
  },
  technologiesRequired: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 6,
  },
  technologiesRequiredWrapper: {
    backgroundColor: '#ffffff10',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  technologiesText: {
    fontFamily: 'Montserrat-Light',
    color: colors.white,
  },
  internshipDetailsWrapper: {
    flexDirection: 'column',
    marginTop: 16,
    gap: 16,
  },
  internshipDetailWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    marginLeft: 8,
  },
  intershipDetailTitle: {
    color: colors.white,
  },
  stipendWrapper: {
    backgroundColor: colors.gradientLightBlue1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  stipendAmount: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: colors.white,
  },
  arrowWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    height: 50,
    bottom: 0,
    right: 0,
    backgroundColor: colors.gradientLightBlue1,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingLeft: 12,
  },
  applyNowText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: colors.white,
  },
});