import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Dimensions, Text, Animated } from "react-native";
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
  const scrollX = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(50)).current; // Start off-screen
  const opacity = useRef(new Animated.Value(0)).current; // Start invisible
  const previousScrollX = useRef(0).current;
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
    if (viewableItems.length > 0) {
      const firstVisibleItem = viewableItems[0].item;
      const firstVisibleMonth = monthName(firstVisibleItem);
      const lastVisibleItem = viewableItems[viewableItems.length - 1].item;
      const lastVisibleMonth = monthName(lastVisibleItem);

      if (firstVisibleMonth === lastVisibleMonth) {
        setCurrentMonth(firstVisibleMonth);
      } else {
        // If multiple months are visible, show both months in the header
        setCurrentMonth(`${firstVisibleMonth} - ${lastVisibleMonth}`);
      }
    }
  };

  const animateHeader = (direction) => {
    const startValue = direction === "right" ? 50 : -50;
    translateX.setValue(startValue); // Start off-screen based on direction
    opacity.setValue(0); // Start invisible
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: 0, // Move to its original position
        duration: 300, // Duration of the animation
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1, // Fade in
        duration: 300, // Duration of the animation
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <>
      <Animated.View style={styles.stickyHeader}>
        <Text style={styles.stickyHeaderText}>{currentMonth}</Text>
      </Animated.View>
      <Animated.FlatList
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
