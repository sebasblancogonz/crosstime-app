import { View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import PlusIcon from "../../icons/Plus";
import MinusIcon from "../../icons/Minus";
import { theme } from "../../../core/theme";
import { useAuth } from "../../../context/AuthContext";
import axios from "axios";

interface BookButtonProps {
  currentUserEnrolled: boolean;
  setUsersEnrolled: (users: number) => void;
  setCurrentUserEnrolled: (currentUserEnrolled: boolean) => void;
  usersEnrolled: number;
  maxUsers: number;
  slotId: string
}

const BookButton = (props: BookButtonProps) => {
  const { authState } = useAuth()

  const {
    currentUserEnrolled,
    setUsersEnrolled,
    setCurrentUserEnrolled,
    usersEnrolled,
    maxUsers,
    slotId
  } = props;

  const handleEnroll = () => {
    if (usersEnrolled < maxUsers) {
      axios.post("http://192.168.100.20:8080/api/reservations/create", {
        slotId,
        userId: authState.userId
      }).then((response) => {
        if (response.status === 200) {
          setUsersEnrolled(usersEnrolled + 1);
          setCurrentUserEnrolled(true);
        }
      }).catch((reason) => {
        if (reason.response.data.message === "Slot cannot be reserved twice by the same user."){
          Alert.alert(
            "Oopsie!",
            "You have already booked this slot!"
          )
        }
      })
    }
  };

  const handleUnenroll = () => {
    if (usersEnrolled > 0) {
      setUsersEnrolled(usersEnrolled - 1);
      setCurrentUserEnrolled(false);
    }
  };

  return (
    <View style={styles.bookButton}>
      {currentUserEnrolled ? (
        <TouchableOpacity onPress={() => handleUnenroll()}>
          <MinusIcon color={theme.colors.lightBackground} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => handleEnroll()}>
          <PlusIcon color={theme.colors.lightBackground} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bookButton: {
    marginRight: 12,
  },
});

export default BookButton;
