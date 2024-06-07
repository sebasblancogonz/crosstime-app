import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Day from "./Day";
import { useState } from "react";

interface DaysProps {
  since: Date;
  until: Date;
}

const Days = ({ since, until }: DaysProps) => {
  const [dateSelected, setDateSelected] = useState(new Date());

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

  const calculateDateObjects = (since: Date, until: Date) => {
    const dateObjects = [];
    since.setHours(0, 0, 0, 0);
    until.setHours(0, 0, 0, 0);
    let currentDate = new Date(since);
    while (currentDate <= until) {
      dateObjects.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateObjects;
  };

  return (
    <ScrollView
      horizontal={true}
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.days}>
        {calculateDateObjects(since, until).map((date: Date, index: number) => (
          <>
            <TouchableOpacity onPress={() => setDateSelected(date)}>
              <Day
                key={index}
                date={date}
                passed={isDatePassed(date)}
                selected={isDateSelected(date)}
              />
            </TouchableOpacity>
          </>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row",
  },
  days: {
    display: "flex",
    height: 120,
    marginTop: 40,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});

export default Days;
