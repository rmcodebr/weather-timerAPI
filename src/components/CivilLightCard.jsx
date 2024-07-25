import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import DataWeatherLight from "../data/DataWeatherLight";
import { getDateDetailsWeatherCivil } from "../data/DataHelper";
import { IMAGESCIVILLIGHT } from "../services/ImageHelper";

const CivilLightCard = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DataWeatherLight);
  }, []);
  console.log(data);

  return (
    <>
      {data ? (
        <View className="w-11/12">
          <ScrollView showsVerticalScrollIndicator={false} className="">
            {data?.dataseries?.map((d, index) => (
              <View key={index}>
                <Pressable
                  onPress={() => navigation.navigate("Details", { data })}
                >
                  <View className="rounded-xl my-1 bg-white/40 border border-slate-300 shadow-md">
                    <View className="flex-row px-4 justify-between items-center rounded-md bg-white/50 shadow-xl shadow-slate-500">
                      <Text className="text-3xl font-semibold">
                        {getDateDetailsWeatherCivil(d.date).weekday}
                      </Text>
                      <View className="items-center">
                        <Text className="text-4xl font-semibold">
                          {getDateDetailsWeatherCivil(d.date).day}
                        </Text>
                        <Text className="text-2xl">
                          de {getDateDetailsWeatherCivil(d.date).month}
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row justify-between">
                      <ImageBackground
                        className="w-48 h-36"
                        source={IMAGESCIVILLIGHT[d.weather]}
                      ></ImageBackground>

                      <View className="flex-row px-2 justify-between items-center">
                        <Image
                          className="w-12 h-12 mr-2 right-6"
                          resizeMode="cover"
                          source={require("../../assets/img/maxMinTemp.png")}
                        />
                        <View className="right-5">
                          <Text className="text-5xl font-bold text-red-500">
                            {d.temp2m.max}
                          </Text>
                          <Text className="text-5xl font-bold text-blue-700">
                            {d.temp2m.min}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View className="flex-1 flex-row justify-end mx-4 items-center mb-1">
                        <Image
                          className="h-8 w-8 mr-2"
                          source={require("../../assets/img/windy.png")}
                        />
                        <Text className="text-2xl font-semibold">
                          {d.wind10m_max * 3.6}{" "}
                          <Text className="text-lg">km/h</Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              </View>
            ))}
          </ScrollView>
        </View>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </>
  );
};

export default CivilLightCard;
