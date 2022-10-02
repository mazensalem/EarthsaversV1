import { View, Text, Pressable, Image } from "react-native";
import React from "react";

export default function Body({
  setpart,
  setsershow,
  setdelcardshow,
  setdelcardtitle,
  setobjshow,
  setobjtitle,
}) {
  return (
    <View className="flex-1">
      {/* Right */}
      <View className="absolute w-full mt-11">
        <View className="relative bg-gray-400 px-3 py-2 w-5/12 mx-3 rounded-md">
          <View className="flex-row justify-between">
            <Text className="text-lg">Agriculture</Text>
            <Pressable
              onPress={() => {
                setpart("Agriculture");
                setsershow(true);
              }}
            >
              <Image
                source={require("../assets/search.png")}
                className="w-7 h-7"
              />
            </Pressable>
          </View>

          <View className="flex-row mt-4">
            <Pressable
              onPress={() => {
                setdelcardshow(true);
                setdelcardtitle("Agriculture");
              }}
              className="bg-black rounded-xl flex-1"
            >
              <Text className="text-white mx-auto">Start</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setobjshow(true);
                setobjtitle("Agriculture");
              }}
              className="bg-black rounded-xl flex-1"
            >
              <Text className="text-white mx-auto">Details</Text>
            </Pressable>
          </View>
        </View>

        <View
          style={{ top: 510 }}
          className="relative bg-gray-400 px-3 py-2 w-5/12 mx-3 rounded-md"
        >
          <View className="flex-row justify-between">
            <Text className="text-lg">Land</Text>
            <Pressable
              onPress={() => {
                setpart("Agriculture");
                setsershow(true);
              }}
            >
              <Image
                source={require("../assets/search.png")}
                className="w-7 h-7"
              />
            </Pressable>
          </View>
          <View className="flex-row mt-4">
            <Pressable
              onPress={() => {
                setdelcardshow(true);
                setdelcardtitle("Land");
              }}
              className="bg-black rounded-xl flex-1"
            >
              <Text className="text-white mx-auto">Start</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setobjshow(true);
                setobjtitle("Land");
              }}
              className="bg-black rounded-xl flex-1"
            >
              <Text className="text-white mx-auto">Details</Text>
            </Pressable>
          </View>
        </View>

        <View
          style={{ top: 120 }}
          className="relative bg-gray-400 px-3 py-2 w-5/12 ml-2 rounded-md"
        >
          <View className="flex-row justify-between">
            <Text className="text-lg">Disaster</Text>
            <Pressable
              onPress={() => {
                setpart("Disaster");
                setsershow(true);
              }}
            >
              <Image
                source={require("../assets/search.png")}
                className="w-7 h-7"
              />
            </Pressable>
          </View>
          <View className="flex-row mt-4">
            <Pressable
              onPress={() => {
                setdelcardshow(true);
                setdelcardtitle("Disaster");
              }}
              className="bg-black rounded-xl flex-1"
            >
              <Text className="text-white mx-auto">Start</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setobjshow(true);
                setobjtitle("Disaster");
              }}
              className="bg-black rounded-xl flex-1"
            >
              <Text className="text-white mx-auto">Details</Text>
            </Pressable>
          </View>
        </View>
      </View>
      {/* Middle */}
      <View className="relative flex-1">
        {/* Line */}
        <View>
          <View className="absolute w-1 h-96 mt-10 right-1/2 bg-black opacity-50"></View>
          <View
            style={{ marginTop: 424 }}
            className="absolute w-1 h-64 right-1/2 bg-black opacity-50"
          ></View>
        </View>
        {/* Dots */}
        <View className="mx-auto">
          <View
            style={{ top: 40 }}
            className="w-10 h-10 rounded-full bg-black"
          ></View>
          <View
            style={{ top: 155 }}
            className="w-10 h-10 rounded-full bg-black"
          ></View>
          <View
            style={{ top: 270 }}
            className="w-10 h-10 rounded-full bg-black"
          ></View>
          <View
            style={{ top: 385 }}
            className="w-10 h-10 rounded-full bg-black"
          ></View>
          <View
            style={{ top: 500 }}
            className="w-10 h-10 rounded-full bg-black"
          ></View>
        </View>
      </View>
      {/* Left */}
      <View className="absolute w-1/2 mt-11 right-0">
        <View
          style={{ top: 150 }}
          className="relative bg-gray-400 px-3 w-10/12 mx-6 py-2 rounded-md"
        >
          <View className="flex-row justify-between">
            <Text className="text-lg">Climate</Text>
            <Pressable
              onPress={() => {
                setpart("Climate");
                setsershow(true);
              }}
            >
              <Image
                source={require("../assets/search.png")}
                className="w-7 h-7"
              />
            </Pressable>
          </View>
          <View className="flex-row mt-4">
            <Pressable
              onPress={() => {
                setdelcardshow(true);
                setdelcardtitle("Climate");
              }}
              className="bg-black rounded-xl flex-1"
            >
              <Text className="text-white mx-auto">Start</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setobjshow(true);
                setobjtitle("Climate");
              }}
              className="bg-black rounded-xl flex-1"
            >
              <Text className="text-white mx-auto">Details</Text>
            </Pressable>
          </View>
        </View>

        <View
          style={{ top: 360 }}
          className="relative bg-gray-400 px-3 py-2 mx-6 w-10/12 rounded-md"
        >
          <View className="flex-row justify-between">
            <Text className="text-lg">Air Quality</Text>
            <Pressable
              onPress={() => {
                setpart("Air Quality");
                setsershow(true);
              }}
            >
              <Image
                source={require("../assets/search.png")}
                className="w-7 h-7"
              />
            </Pressable>
          </View>
          <View className="flex-row mt-4">
            <Pressable
              onPress={() => {
                setdelcardshow(true);
                setdelcardtitle("Air Quality");
              }}
              className="bg-black rounded-xl flex-1"
            >
              <Text className="text-white mx-auto">Start</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setobjshow(true);
                setobjtitle("Air Quality");
              }}
              className="bg-black rounded-xl flex-1"
            >
              <Text className="text-white mx-auto">Details</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
