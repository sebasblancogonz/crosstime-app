import React, { memo } from "react";
import Background from "../components/Background";
import { Navigation } from "../types";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import { theme } from "../core/theme";
import { ScrollView } from "react-native-gesture-handler";
import BackButton from "../components/BackButton";

type Props = {
  navigation: Navigation;
};

const Scheduler = ({ navigation }: Props) => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  return (
    <Background solid={true}>
      <View style={styles.container}>
        <BackButton goBack={() => navigation.navigate("Home")} />
        <View style={styles.scheduler}>
          <View style={styles.days}>
            <View>
              <Text style={styles.dayNumber}>18</Text>
              <Text style={styles.dayName}>Mo</Text>
            </View>
            <View>
              <View style={styles.selectedDate}>
                <View style={styles.selectedDateDot} />
              </View>
              <Text style={styles.dayNumberSelected}>19</Text>
              <Text style={styles.dayNameSelected}>Tu</Text>
            </View>
            <View>
              <Text style={styles.dayNumber}>20</Text>
              <Text style={styles.dayName}>Wed</Text>
            </View>
            <View>
              <Text style={styles.dayNumber}>21</Text>
              <Text style={styles.dayName}>Thu</Text>
            </View>
            <View>
              <Text style={styles.dayNumber}>22</Text>
              <Text style={styles.dayName}>Fri</Text>
            </View>
            <View>
              <Text style={styles.dayNumber}>23</Text>
              <Text style={styles.dayName}>Sa</Text>
            </View>
            <View>
              <Text style={styles.dayNumber}>24</Text>
              <Text style={styles.dayName}>Su</Text>
            </View>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.timeline}>
              <Text style={styles.timelineHeader}>Schedule Today</Text>
              <View>
                <Text style={styles.hour}>12:00 PM</Text>
                <View style={styles.slot}>
                  <Text style={styles.slotDescription}>WOD</Text>
                </View>
              </View>
              <View>
                <Text style={styles.hour}>12:00 PM</Text>
                <View style={styles.slot}>
                  <Text style={styles.slotDescription}>WOD</Text>
                </View>
              </View>
              <View>
                <Text style={styles.hour}>12:00 PM</Text>
                <View style={styles.slot}>
                  <Text style={styles.slotDescription}>WOD</Text>
                </View>
              </View>
              <View>
                <Text style={styles.hour}>12:00 PM</Text>
                <View style={styles.slot}>
                  <Text style={styles.slotDescription}>WOD</Text>
                </View>
              </View>
              <View>
                <Text style={styles.hour}>12:00 PM</Text>
                <View style={styles.slot}>
                  <Text style={styles.slotDescription}>WOD</Text>
                </View>
              </View>
              <View>
                <Text style={styles.hour}>12:00 PM</Text>
                <View style={styles.slot}>
                  <Text style={styles.slotDescription}>WOD</Text>
                </View>
              </View>
              <View>
                <Text style={styles.hour}>12:00 PM</Text>
                <View style={styles.slot}>
                  <Text style={styles.slotDescription}>WOD</Text>
                </View>
              </View>
              <View>
                <Text style={styles.hour}>12:00 PM</Text>
                <View style={styles.slot}>
                  <Text style={styles.slotDescription}>WOD</Text>
                </View>
              </View>
              <View>
                <Text style={styles.hour}>12:00 PM</Text>
                <View style={styles.slot}>
                  <Text style={styles.slotDescription}>WOD</Text>
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
  container: {
    backgroundColor: theme.colors.lightBackground,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  scheduler: {
    display: "flex",
    backgroundColor: "white",
    height: 637,
    width: "85%",
  },
  days: {
    display: "flex",
    height: 80,
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
    height: 60,
    width: 275,
    alignSelf: "flex-end",
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
  },
  slotDescription: {
    letterSpacing: 0.3,
    marginVertical: "auto",
    marginLeft: 12,
    lineHeight: 26,
    color: "white",
    fontSize: 12,
    fontWeight: 600,
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

export default memo(Scheduler);
