import React, { memo, useState } from "react";
import Background from "../components/Background";
import { Navigation } from "../types";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import { theme } from "../core/theme";
import { ScrollView } from "react-native-gesture-handler";
import BackButton from "../components/BackButton";
import PlusIcon from "../components/icons/Plus";
import MinusIcon from "../components/icons/Minus";
import Day from "../components/scheduler/dayPicker/Day";
import Days from "../components/scheduler/dayPicker/Days";

type Props = {
  navigation: Navigation;
};

const Scheduler = ({ navigation }: Props) => {
  const [dateSelected, setDateSelected] = useState(new Date());

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  const dateObjects = [
    new Date("2024-06-01"),
    new Date("2024-06-02"),
    new Date("2024-06-03"),
    new Date("2024-06-04"),
    new Date("2024-06-05"),
    new Date("2024-06-06"),
    new Date("2024-06-07"),
    new Date("2024-06-08"),
    new Date("2024-06-09"),
    new Date("2024-06-10"),
    new Date("2024-06-11"),
    new Date("2024-06-12"),
    new Date("2024-06-13"),
    new Date("2024-06-14"),
    new Date("2024-06-15"),
    new Date("2024-06-16"),
    new Date("2024-06-17"),
    new Date("2024-06-18"),
    new Date("2024-06-19"),
    new Date("2024-06-20"),
    new Date("2024-06-21"),
    new Date("2024-06-22"),
    new Date("2024-06-23"),
    new Date("2024-06-24"),
    new Date("2024-06-25"),
    new Date("2024-06-26"),
    new Date("2024-06-27"),
    new Date("2024-06-28"),
    new Date("2024-06-29"),
    new Date("2024-06-30"),
    new Date("2024-07-01"),
  ];

  const isDatePassed = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isDateSelected = (date: Date) => {
    return (
      date.getDate() === dateSelected.getDate() &&
      date.getMonth() === dateSelected.getMonth() &&
      date.getFullYear() === dateSelected.getFullYear()
    );
  };

  return (
    <Background solid={true}>
      <View style={styles.container}>
        <BackButton goBack={() => navigation.navigate("Home")} />
        <View style={styles.scheduler}>
          <Days since={new Date("2024-06-01")} until={new Date("2024-07-01")} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.timeline}>
              <Text style={styles.timelineHeader}>Schedule Today</Text>
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <Text style={styles.hour}>12:00 PM</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "#94A3B8",
                      marginLeft: 10,
                    }}
                  />
                </View>
                <View style={styles.slot}>
                  <View style={styles.slotInfo}>
                    <View style={styles.slotDescriptionContainer}>
                      <Text style={styles.slotDescription}>WOD</Text>
                      <Text style={styles.availableSlots}>15/30</Text>
                    </View>

                    <View style={styles.avatarsContainer}>
                      <View style={styles.avatar}>
                        <ImageBackground
                          source={require("../assets/avatar.jpeg")}
                          style={styles.avatarImage}
                        />
                      </View>
                      <View style={styles.avatar}>
                        <ImageBackground
                          source={require("../assets/avatar.jpeg")}
                          style={styles.avatarImage}
                        />
                      </View>
                      <View style={styles.moreCircle}>
                        <Text style={styles.moreNumber}>+13</Text>
                      </View>
                    </View>
                    <View style={styles.bookButton}>
                      <PlusIcon color={theme.colors.lightBackground} />
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <Text style={styles.hour}>13:00 PM</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "#94A3B8",
                      marginLeft: 10,
                    }}
                  />
                </View>
                <View style={styles.slot}>
                  <View style={styles.slotInfo}>
                    <View style={styles.slotDescriptionContainer}>
                      <Text style={styles.slotDescription}>WOD</Text>
                      <Text style={styles.availableSlots}>20/30</Text>
                    </View>
                    <View style={styles.avatarsContainer}>
                      <View style={styles.avatar}>
                        <ImageBackground
                          source={require("../assets/avatar.jpeg")}
                          style={styles.avatarImage}
                        />
                      </View>
                      <View style={styles.avatar}>
                        <ImageBackground
                          source={require("../assets/avatar.jpeg")}
                          style={styles.avatarImage}
                        />
                      </View>
                      <View style={styles.moreCircle}>
                        <Text style={styles.moreNumber}>+20</Text>
                      </View>
                    </View>
                    <View style={styles.bookButton}>
                      <MinusIcon color={theme.colors.lightBackground} />
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <Text style={styles.hour}>14:00 PM</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "#94A3B8",
                      marginLeft: 10,
                    }}
                  />
                </View>
                <View style={styles.slot}>
                  <View style={styles.slotInfo}>
                    <View style={styles.slotDescriptionContainer}>
                      <Text style={styles.slotDescription}>WOD</Text>
                      <Text style={styles.availableSlots}>7/30</Text>
                    </View>
                    <View style={styles.avatarsContainer}>
                      <View style={styles.avatar}>
                        <ImageBackground
                          source={require("../assets/avatar.jpeg")}
                          style={styles.avatarImage}
                        />
                      </View>
                      <View style={styles.avatar}>
                        <ImageBackground
                          source={require("../assets/avatar.jpeg")}
                          style={styles.avatarImage}
                        />
                      </View>
                      <View style={styles.moreCircle}>
                        <Text style={styles.moreNumber}>+5</Text>
                      </View>
                    </View>
                    <View style={styles.bookButton}>
                      <PlusIcon color={theme.colors.lightBackground} />
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <Text style={styles.hour}>15:00 PM</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "#94A3B8",
                      marginLeft: 10,
                    }}
                  />
                </View>
                <View style={styles.slot}>
                  <View style={styles.slotDescriptionContainerB}>
                    <View>
                      <Text style={styles.slotDescription}>WOD</Text>
                      <Text style={styles.availableSlotsB}>0/30</Text>
                    </View>
                    <View style={styles.bookButton}>
                      <PlusIcon color={theme.colors.lightBackground} />
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <Text style={styles.hour}>16:00 PM</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "#94A3B8",
                      marginLeft: 10,
                    }}
                  />
                </View>
                <View style={styles.slot}>
                  <View style={styles.slotDescriptionContainerB}>
                    <View>
                      <Text style={styles.slotDescription}>WOD</Text>
                      <Text style={styles.availableSlotsB}>0/30</Text>
                    </View>
                    <View style={styles.bookButton}>
                      <PlusIcon color={theme.colors.lightBackground} />
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <Text style={styles.hour}>17:00 PM</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "#94A3B8",
                      marginLeft: 10,
                    }}
                  />
                </View>
                <View style={styles.slot}>
                  <View style={styles.slotDescriptionContainerB}>
                    <View>
                      <Text style={styles.slotDescription}>WOD</Text>
                      <Text style={styles.availableSlotsB}>0/30</Text>
                    </View>
                    <View style={styles.bookButton}>
                      <PlusIcon color={theme.colors.lightBackground} />
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <Text style={styles.hour}>18:00 PM</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "#94A3B8",
                      marginLeft: 10,
                    }}
                  />
                </View>
                <View style={styles.slot}>
                  <View style={styles.slotDescriptionContainerB}>
                    <View>
                      <Text style={styles.slotDescription}>WOD</Text>
                      <Text style={styles.availableSlotsB}>0/30</Text>
                    </View>
                    <View style={styles.bookButton}>
                      <PlusIcon color={theme.colors.lightBackground} />
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <Text style={styles.hour}>19:00 PM</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "#94A3B8",
                      marginLeft: 10,
                    }}
                  />
                </View>
                <View style={styles.slot}>
                  <View style={styles.slotDescriptionContainerB}>
                    <View>
                      <Text style={styles.slotDescription}>WOD</Text>
                      <Text style={styles.availableSlotsB}>0/30</Text>
                    </View>
                    <View style={styles.bookButton}>
                      <PlusIcon color={theme.colors.lightBackground} />
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <Text style={styles.hour}>20:00 PM</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "#94A3B8",
                      marginLeft: 10,
                    }}
                  />
                </View>
                <View style={styles.slot}>
                  <View style={styles.slotDescriptionContainerB}>
                    <View>
                      <Text style={styles.slotDescription}>WOD</Text>
                      <Text style={styles.availableSlotsB}>0/30</Text>
                    </View>
                    <View style={styles.bookButton}>
                      <PlusIcon color={theme.colors.lightBackground} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: theme.colors.lightBackground,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  scheduler: {
    backgroundColor: "white",
    height: "90%",
    width: "85%",
  },
  days: {
    display: "flex",
    height: 120,
    marginTop: 40,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  dayNumber: {
    letterSpacing: 0.3,
    lineHeight: 24,
    fontSize: 18,
    fontWeight: 600,
  },
  dayName: {
    marginHorizontal: "auto",
    letterSpacing: 0.3,
    lineHeight: 26,
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: "#94A3B8",
  },
  dayNumberPassed: {
    letterSpacing: 0.3,
    lineHeight: 24,
    fontSize: 18,
    fontWeight: 600,
    color: theme.colors.notActiveNavDark,
  },
  dayNamePassed: {
    marginHorizontal: "auto",
    letterSpacing: 0.3,
    lineHeight: 26,
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: theme.colors.notActiveNavDark,
  },
  dayNumberSelected: {
    letterSpacing: 0.3,
    lineHeight: 24,
    fontSize: 18,
    fontWeight: 600,
    color: theme.colors.selectedDateText,
  },
  dayNameSelected: {
    marginHorizontal: "auto",
    letterSpacing: 0.3,
    lineHeight: 26,
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: theme.colors.selectedDateText,
  },
  timeline: {
    marginTop: 18,
    flex: 1,
    overflow: "scroll",
  },
  timelineHeader: {
    letterSpacing: 0.3,
    lineHeight: 24,
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 8,
  },
  hour: {
    letterSpacing: 0.3,
    lineHeight: 26,
    fontSize: 13,
    fontWeight: 400,
    color: "#94A3B8",
  },
  slot: {
    height: 90,
    width: 275,
    alignSelf: "flex-end",
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
  },
  slotDescriptionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 12,
  },
  slotDescriptionContainerB: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: "auto",
    marginLeft: 12,
  },
  slotDescription: {
    letterSpacing: 0.3,
    marginVertical: "auto",
    lineHeight: 26,
    color: "white",
    fontSize: 18,
    fontWeight: 600,
  },
  availableSlots: {
    letterSpacing: 0.3,
    lineHeight: 24,
    color: "white",
    fontSize: 13,
    fontWeight: 400,
    alignSelf: "center",
  },
  availableSlotsB: {
    letterSpacing: 0.3,
    lineHeight: 24,
    color: "white",
    fontSize: 13,
    marginHorizontal: "auto",
    fontWeight: 400,
  },
  avatarsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "white",
    marginLeft: -20,
  },
  avatarImage: {
    margin: "auto",
    height: 35,
    width: 35,
    borderRadius: 20,
    overflow: "hidden",
  },
  slotInfo: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
  },
  moreCircle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#909090",
    lineHeight: 40,
    marginLeft: -20,
    textAlign: "center",
  },
  moreNumber: {
    color: "white",
    lineHeight: 40,
    fontSize: 18,
    margin: "auto",
    fontWeight: 600,
  },
  bookButton: {
    marginRight: 12,
  },
});

export default memo(Scheduler);
