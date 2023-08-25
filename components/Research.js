import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import colors from '../assets/colors/colors';
import { ResearchData } from '../data/data';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

Feather.loadFont();

const width = Dimensions.get('window').width;
const ResearchRows = [];
for (let i = 0; i < ResearchData.length; i += 2) {
  const row = [];
  row.push(ResearchData[i]);
  if (i + 1 < ResearchData.length) {
    row.push(ResearchData[i + 1]);
  }
  ResearchRows.push(row);
}

const CreateResearchCard = ({ item }) => (
  <LinearGradient
    colors={["#ffffff01", "#ffffff10"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.researchCardWrapper}
  >
    <Image source={item.image} style={styles.researchCardImage} />
    <View style={styles.researchCardInfoWrapper}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.researchCardTagWrapper}
      >
        {item.tags.map((tag, index) => (
          <LinearGradient
            colors={["#ffffff01", "#ffffff10"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.tagWrapper}
            key={index}
          >
            <Text style={styles.tagTitle}>{tag}</Text>
          </LinearGradient>
        ))}
      </ScrollView>
      <Text style={styles.researchCardTitle}>{item.title}</Text>
    </View>

    <TouchableOpacity style={styles.iconWrapper}>
      <Feather name="arrow-up-right" size={24} color="white" />
    </TouchableOpacity>
  </LinearGradient>
)

const Research = () => {
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <Text style={styles.researchTitle}>Research Topics for you</Text>
      <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={styles.researchWrapper} >
        {ResearchRows.map((row, index) => (
          <View key={index} style={styles.researchRowWrapper}>
            {row.map((item, index) => (
              <CreateResearchCard key={index} item={item} />
            ))}
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

export default Research;

const styles = StyleSheet.create({
  researchWrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
    paddingBottom: 64,
  },
  researchRowWrapper: {
    flexDirection: 'row',
    gap: 20,
  },
  researchTitle: {
    color: colors.white,
    fontSize: 30,
    fontFamily: 'Montserrat-Light',
    textAlign: 'center',
    marginVertical: 12,
  },
  researchCardWrapper: {
    width: width * 0.42,
    borderRadius: 15,
    backgroundColor: "#ffffff01",
  },
  researchCardImage: {
    height: 100,
    width: width * 0.42,
    borderRadius: 15,
  },
  researchCardInfoWrapper: {
    paddingHorizontal: 6,
    paddingVertical: 10,
  },
  researchCardTagWrapper: {
    flexDirection: 'row',
    paddingVertical: 4,
    gap: 6,
  },
  tagWrapper: {
    backgroundColor: "#ffffff10",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 30,
  },
  tagTitle: {
    color: colors.white,
  },
  researchCardTitle: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.white,
    fontSize: 18,
    paddingLeft: 6,
    marginTop: 6,
  },
  iconWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: Platform.OS == "ios" ? 6 : -12,
    right: Platform.OS == "ios" ? 6: 12,
    height: 32,
    width: 32,
    paddingTop: 2,
    backgroundColor: colors.gradientLightBlue1,
    borderRadius: 16,
  },
});