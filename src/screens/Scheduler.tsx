import React, { memo, useState } from "react";
import Background from "../components/Background";
import { Navigation } from "../types";
import { StyleSheet, View } from "react-native";
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

  const startingHour = 6;
  const endingHour = 22;

  const slots = [];
  for (let i = startingHour; i < endingHour; i++) {
    slots.push(
      <SlotCard
        users={0}
        maxUsers={30}
        sessionName="WOD"
        key={i}
        hour={i.toString()}
        minutes={"00"}
      />
    );
  }

  function since() {
    const today = new Date();
    today.setDate(today.getDate() - 3);
    return today;
  }

  return (
    <Background solid={true}>
      <View style={styles.container}>
        <BackButton goBack={() => navigation.navigate("Home")} />
        <View style={styles.scheduler}>
          <DatePicker
            since={since()}
            until={new Date("2024-08-02")}
            dateSelected={dateSelected}
            setDateSelected={setDateSelected}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.timeline}>{slots}</View>
          </ScrollView>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
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
});

export default memo(Scheduler);
