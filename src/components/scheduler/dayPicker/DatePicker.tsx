import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import Day from "./Day";
import {
  calculateDateObjects,
  isDatePassed,
  isDateSelected,
  monthName,
} from "../../../core/dates";
import { FlatList } from "react-native-gesture-handler";

interface DaysProps {
  since: Date;
  until: Date;
  dateSelected: Date;
  setDateSelected: (date: Date) => void;
}

const DatePicker = (props: DaysProps) => {
  const [currentMonth, setCurrentMonth] = useState<string>("");
  const { since, until, dateSelected, setDateSelected } = props;
  const scrollViewRef = useRef<FlatList>(null);

  const dates = calculateDateObjects(since, until);

  const todayIndex = dates.findIndex((date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  });

  const timelineHeaderTitle = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (dateSelected.getDate() === today.getDate()) {
      return "Schedule for today";
    } else if (dateSelected.getDate() === today.getDate() + 1) {
      return "Schedule for tomorrow";
    } else if (dateSelected < today) {
      return "Can't travel back in time!";
    } else {
      return `Schedule for ${dateSelected.getDate()} ${monthName(
        dateSelected
      )}`;
    }
  };

  useEffect(() => {
    if (scrollViewRef.current && todayIndex !== -1) {
      const screenWidth = Dimensions.get("window").width;
      const ITEM_WIDTH = screenWidth / 6; // Adjust this to match the width of each Day component
      const scrollPosition =
        todayIndex * ITEM_WIDTH - (screenWidth / 2 - ITEM_WIDTH / 2);
      scrollViewRef.current.scrollToOffset({
        offset: scrollPosition,
        animated: true,
      });
    }
  }, [todayIndex]);

  const renderItem = ({ item, index }: { item: Date; index: number }) => (
    <Day
      key={index}
      date={item}
      isFirstDayOfMonth={index === 0 || item.getDate() === 1}
      passed={isDatePassed(item)}
      selected={isDateSelected(item, dateSelected)}
      setDateSelected={setDateSelected}
    />
  );

  const getItemLayout = (data, index) => ({
    length: 50,
    offset: 50 * index,
    index,
  });

  const keyExtractor = (item, index) => item.toString() + index;

  const handleViewableItemsChanged = ({ viewableItems }) => {
    const firstVisibleItem = viewableItems[0]?.item;
    if (firstVisibleItem) {
      setCurrentMonth(monthName(firstVisibleItem));
    }
  };

  return (
    <>
      <View style={styles.stickyHeader}>
        <Text style={styles.stickyHeaderText}>{currentMonth}</Text>
      </View>
      <FlatList
        data={dates}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        getItemLayout={getItemLayout}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />

      <Text style={styles.timelineHeader}>{timelineHeaderTitle()}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  timelineHeader: {
    letterSpacing: 0.3,
    lineHeight: 24,
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 8,
  },
  flatListContent: {
    paddingHorizontal: 10,
    marginTop: 60,
    marginBottom: 40,
    height: 120,
  },
  stickyHeader: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: "white",
    paddingVertical: 10,
  },
  stickyHeaderText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default DatePicker;
