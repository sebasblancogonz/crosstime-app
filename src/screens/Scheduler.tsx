import React, { memo, useState } from "react";
import Background from "../components/Background";
import { Navigation } from "../types";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import { theme } from "../core/theme";
import { ScrollView } from "react-native-gesture-handler";
import BackButton from "../components/BackButton";
import DatePicker from "../components/scheduler/dayPicker/DatePicker";
import SlotCard from "../components/scheduler/slot/SlotCard";

type Props = {
  navigation: Navigation;
};

const Scheduler = ({ navigation }: Props) => {
  const [dateSelected, setDateSelected] = useState(new Date());

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  const usersObjects = [
    {
      id: 1,
      avatar: "avatar.jpeg",
      name: "John Doe",
    },
    {
      id: 2,
      avatar: "avatar.jpeg",
      name: "Jane Doe",
    },
  ];

  return (
    <Background solid={true}>
      <View style={styles.container}>
        <BackButton goBack={() => navigation.navigate("Home")} />
        <View style={styles.scheduler}>
          <DatePicker
            since={new Date("2024-06-01")}
            until={new Date("2024-07-01")}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.timeline}>
              <Text style={styles.timelineHeader}>Schedule Today</Text>
              <SlotCard users={10} maxUsers={30} sessionName="WOD" />
              <SlotCard users={2} maxUsers={20} sessionName="WOD" />
              <SlotCard users={0} maxUsers={30} sessionName="WOD" />
              <SlotCard users={0} maxUsers={30} sessionName="WOD" />
              <SlotCard users={0} maxUsers={30} sessionName="WOD" />
              <SlotCard users={0} maxUsers={30} sessionName="WOD" />
              <SlotCard users={0} maxUsers={30} sessionName="WOD" />
              <SlotCard users={0} maxUsers={30} sessionName="WOD" />
              <SlotCard users={0} maxUsers={30} sessionName="WOD" />
              <SlotCard users={0} maxUsers={30} sessionName="WOD" />
              <SlotCard users={0} maxUsers={30} sessionName="WOD" />
              <SlotCard users={0} maxUsers={30} sessionName="WOD" />
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
