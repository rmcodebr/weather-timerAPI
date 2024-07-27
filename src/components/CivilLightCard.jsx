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
import { getDateCivilLight } from "../data/DataHelper";
import { IMAGESCIVILLIGHT } from "../services/ImageHelper";
import { useNavigation } from "@react-navigation/native";

const CivilLightCard = () => {
  const navigation = useNavigation();
  const [dataCivilLight, setDataCivilLight] = useState([]);
  const [dataCivil, setDataCivil] = useState([]);

  useEffect(() => {
    setDataCivilLight(DataWeatherLight);
    setDataCivil("");
  }, []);

  return (
    <>
      {dataCivilLight ? (
        <View className="w-11/12">
          <ScrollView showsVerticalScrollIndicator={false} className="">
            {dataCivilLight?.dataseries?.map((d, index) => (
              <View key={index}>
                <Text>{d.date}</Text>
                <Text>{getDateCivilLight(d.date).day}</Text>
                <Pressable
                  onPress={() =>
                    navigation.navigate("Detail", {
                      dateCivil: d.date,
                    })
                  }
                >
                  <View className="rounded-xl my-1 bg-white/40 border border-slate-300 shadow-md">
                    <View className="flex-row px-4 justify-between items-center rounded-md bg-white/50 shadow-xl shadow-slate-500">
                      <Text className="text-3xl font-semibold">
                        {getDateCivilLight(d.date).dayOfWeek}
                      </Text>
                      <View className="items-center">
                        <Text className="text-4xl font-semibold">
                          {getDateCivilLight(d.date).day}
                        </Text>
                        <Text className="text-2xl">
                          de {getDateCivilLight(d.date).month}
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
