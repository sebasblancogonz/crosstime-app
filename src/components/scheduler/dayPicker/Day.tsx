import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../../../core/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DateTime } from "luxon";

interface DayProps {
  passed?: boolean;
  date: Date;
  selected?: boolean;
  setDateSelected: (date: Date) => void;
}

const Day = (props: DayProps) => {
  const { passed, date, selected, setDateSelected } = props;

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

  const dayName = (date: Date) => {
    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    return days[date.getDay()];
  };

  const dayNumber = (date: Date) => {
    return date.getDate();
  };

  return (
    <View style={styles.dayContainer}>
      <TouchableOpacity onPress={() => setDateSelected(date)}>
        {selected && (
          <View style={styles.selectedDate}>
            <View style={styles.selectedDateDot} />
          </View>
        )}
        <View style={styles.dayContent}>
          <Text style={dayNumberStyle}>{dayNumber(date)}</Text>
          <Text style={dayNameStyle}>{dayName(date)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    width: 50,
    display: "flex",
  },
  dayContent: {
    display: "flex",
  },
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
