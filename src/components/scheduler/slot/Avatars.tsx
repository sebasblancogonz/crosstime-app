import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { ImageBackground } from "react-native";

const Avatars = ({ users }: { users: number }) => {
  const avatarsToShow = Math.min(users, 2);
  const avatars = [];

  for (let i = 0; i < avatarsToShow; i++) {
    avatars.push(
      <View key={i} style={styles.avatar}>
        <ImageBackground
          source={require("../../../assets/avatar.jpeg")}
          style={styles.avatarImage}
        />
      </View>
    );
  }

  return (
    <>
      <View style={styles.avatarsContainer}>
        {avatars}
        {users > 2 && (
          <View style={styles.moreCircle}>
            <Text style={styles.moreNumber}>+{users - 2}</Text>
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
});

export default Avatars;
