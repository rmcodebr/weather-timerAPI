import { View, Text, Pressable, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import DataWeatherLight from "../data/DataWeatherLight";

import CivilLightCard from "../components/CivilLightCard";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DataWeatherLight);
  }, []);

  return (
    <ImageBackground
      className="flex-1"
      source={require("../../assets/img/weatherDay.png")}
    >
      <View className="mt-10 justify-center items-center">
        <CivilLightCard />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
