import { View, TouchableOpacity, StyleSheet } from "react-native";
import PlusIcon from "../../icons/Plus";
import MinusIcon from "../../icons/Minus";
import { theme } from "../../../core/theme";

interface BookButtonProps {
  currentUserEnrolled: boolean;
  setUsersEnrolled: (users: number) => void;
  setCurrentUserEnrolled: (currentUserEnrolled: boolean) => void;
  usersEnrolled: number;
  maxUsers: number;
}

const BookButton = (props: BookButtonProps) => {
  const {
    currentUserEnrolled,
    setUsersEnrolled,
    setCurrentUserEnrolled,
    usersEnrolled,
    maxUsers,
  } = props;

  const handleEnroll = () => {
    if (usersEnrolled < maxUsers) {
      setUsersEnrolled(usersEnrolled + 1);
      setCurrentUserEnrolled(true);
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
