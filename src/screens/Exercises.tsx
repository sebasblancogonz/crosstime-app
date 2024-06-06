import React, { useState } from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import { useAuth } from "../context/AuthContext";
import { Exercise } from "../types";
import Background from "../components/Background";

const Exercises = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [showExercises, setShowExercises] = useState(false);
  const { authState } = useAuth();

  const _showExercises = () => {
    exercises.length === 0
      ? fetch("http://192.168.100.3:8080/api/exercises?page=1&size=10", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + authState?.token,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setExercises(data.content);
            setShowExercises(true);
          })
          .catch((error) => {
            console.error("Error:", error);
          })
      : setShowExercises(true);
  };
  return (
    <Background>
      <Button mode="contained" onPress={_showExercises}>
        Show Exercises
      </Button>
      {showExercises &&
        exercises.map((exercise) => (
          <Text key={exercise.id}>{exercise.name}</Text>
        ))}
    </Background>
  );
};

export default Exercises;
