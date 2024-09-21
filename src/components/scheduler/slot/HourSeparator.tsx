import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const HourSeparator = ({ time }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View>
        <Text style={styles.time}>
          {time}
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
  time: {
    letterSpacing: 0.3,
    lineHeight: 26,
    fontSize: 13,
    fontWeight: 400,
    color: "#94A3B8",
  },
});

export default HourSeparator;
