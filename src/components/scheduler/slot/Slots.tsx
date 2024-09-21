import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import SlotCard from "./SlotCard";
import { Navigation, Slot } from "../../../types";
import { useAuth } from "../../../context/AuthContext";
import { View } from "react-native";

const Slots = ({
  dateSelected,
  navigation,
}: {
  dateSelected: Date;
  navigation: Navigation;
}) => {
  const [slots, setSlots] = useState<Slot[]>([]);
  const { authState } = useAuth();
  const { onLogout } = useAuth();

  const _logout = async () => {
    await onLogout();

    navigation.navigate("Home");
  };

  useEffect(() => {
    fetch("http://192.168.100.20:8080/api/slots", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authState?.token,
      },
    })
      .then((response) => response.json())
      .then((data: Slot[]) => {
        setSlots(data);
      })
      .catch((response) => {
        alert(response)
        if (response.data.message === "Token expired, please log in again.") {
          alert(response);
          _logout();
        }
      });
  }, []);

  return (
    <View>
      {slots.map((slot) => (
        <SlotCard
          users={0}
          maxUsers={slot.capacity}
          sessionName={slot.trainingType}
          key={slot.id}
          time={DateTime.fromISO(slot.dateTime).toFormat("hh:mm a")}
          slotId={slot.id}
        />
      ))}
    </View>
  );
};

export default Slots;
