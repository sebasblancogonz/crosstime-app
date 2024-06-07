import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../../../core/theme";

interface DayProps {
  passed?: boolean;
  date: Date;
  selected?: boolean;
}

const Day = (props: DayProps) => {
  const { passed, date, selected } = props;

  const isFirstDayOfMonth = date.getDate() === 1;

  const dayNumberStyle = selected
    ? styles.dayNumberSelected
    : passed
    ? styles.dayNumberPassed
    : styles.dayNumber;

  const dayNameStyle = selected
    ? styles.dayNameSelected
    : passed
    ? styles.dayNamePassed
    : styles.dayName;

  const monthName = (date: Date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[date.getMonth()];
  };

  const dayName = (date: Date) => {
    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    return days[date.getDay()];
  };

  const dayNumber = (date: Date) => {
    return date.getDate();
  };

  return (
    <>
      {selected && (
        <View style={styles.selectedDate}>
          <View style={styles.selectedDateDot} />
        </View>
      )}
      {isFirstDayOfMonth && (
        <Text style={styles.monthName}>{monthName(date)}</Text>
      )}
      <View style={{ width: 50, display: "flex" }}>
        <Text style={dayNumberStyle}>{dayNumber(date)}</Text>
        <Text style={dayNameStyle}>{dayName(date)}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  dayNumber: {
    letterSpacing: 0.3,
    marginHorizontal: "auto",
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
    marginHorizontal: "auto",
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
    marginHorizontal: "auto",
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
  monthName: {
    textAlign: "center",
    position: "absolute",
    fontSize: 16,
    color: theme.colors.secondaryGray,
    marginVertical: 10,
    width: 50,
    top: -40,
  },
  selectedDate: {
    backgroundColor: theme.colors.selectedDate,
    borderRadius: 16,
    position: "absolute",
    width: 50,
    height: 87,
    left: "50%",
    top: 10,
    transform: [{ translateX: -25 }, { translateY: -25 }],
    zIndex: -1,
  },
  selectedDateDot: {
    backgroundColor: theme.colors.selectedDateText,
    borderRadius: 4,
    height: 6,
    width: 6,
    position: "absolute",
    bottom: 12,
    left: "50%",
    transform: [{ translateX: -4 }],
  },
});

export default Day;
