import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const HourSeparator = ({ hour, minutes }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View>
        <Text style={styles.hour}>
          {hour}:{minutes} PM
        </Text>
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
  );
};

const styles = StyleSheet.create({
  hour: {
    letterSpacing: 0.3,
    lineHeight: 26,
    fontSize: 13,
    fontWeight: 400,
    color: "#94A3B8",
  },
});

export default HourSeparator;
