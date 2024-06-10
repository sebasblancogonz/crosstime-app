import { ImageBackground, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import PlusIcon from "../../icons/Plus";
import { theme } from "../../../core/theme";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import MinusIcon from "../../icons/Minus";
import HourSeparator from "./HourSeparator";
import Avatars from "./Avatars";
import BookButton from "./BookButton";

interface SlotCardProps {
  users: number;
  maxUsers: number;
  sessionName: string;
  hour: string;
  minutes: string;
}

const SlotCard = (props: SlotCardProps) => {
  const { users, maxUsers, sessionName, hour, minutes } = props;
  const [usersEnrolled, setUsersEnrolled] = useState(users);
  const [currentUserEnrolled, setCurrentUserEnrolled] = useState(false);

  useEffect(() => {
    setUsersEnrolled(users);
  }, [users]);

  return (
    <>
      {usersEnrolled === 0 ? (
        <View>
          <HourSeparator hour={hour} minutes={minutes} key={Math.random()} />
          <View style={styles.slot}>
            <View style={styles.slotDescriptionContainerB}>
              <View>
                <Text style={styles.slotDescription}>{sessionName}</Text>
                <Text style={styles.availableSlotsB}>0/{maxUsers}</Text>
              </View>

              <BookButton
                currentUserEnrolled={currentUserEnrolled}
                setUsersEnrolled={setUsersEnrolled}
                setCurrentUserEnrolled={setCurrentUserEnrolled}
                usersEnrolled={usersEnrolled}
                maxUsers={maxUsers}
              />
            </View>
          </View>
        </View>
      ) : (
        <View>
          <HourSeparator hour={hour} minutes={minutes} />
          <View style={styles.slot}>
            <View style={styles.slotInfo}>
              <View style={styles.slotDescriptionContainer}>
                <Text style={styles.slotDescription}>{sessionName}</Text>
                <Text style={styles.availableSlots}>
                  {usersEnrolled}/{maxUsers}
                </Text>
              </View>

              <Avatars users={usersEnrolled} />

              <BookButton
                currentUserEnrolled={currentUserEnrolled}
                setUsersEnrolled={setUsersEnrolled}
                setCurrentUserEnrolled={setCurrentUserEnrolled}
                usersEnrolled={usersEnrolled}
                maxUsers={maxUsers}
              />
            </View>
          </View>
        </View>
      )}
    </>
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
  slot: {
    height: 90,
    width: 275,
    alignSelf: "flex-end",
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
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
  slotInfo: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
  },
});

export default SlotCard;
