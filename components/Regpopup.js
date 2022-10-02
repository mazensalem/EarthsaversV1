import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Regpopup({
  regshow,
  setregshow,
  name,
  setname,
  country,
  setcountry,
}) {
  const NameRef = useRef();
  useEffect(() => {
    const keyboardDidHideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        NameRef.current && NameRef.current.blur?.();
      }
    );
    return () => {
      keyboardDidHideSubscription?.remove();
    };
  }, []);
  const setintrodata = async () => {
    if (name && country) {
      try {
        await AsyncStorage.setItem("name", name);
        await AsyncStorage.setItem("country", country);
      } catch (error) {
        alert(error);
      }
      setregshow(false);
    } else {
      alert("Please Enter Your Name and Country");
    }
  };
  return (
    <Modal
      animationType="slide"
      visible={regshow}
      transparent={true}
      onRequestClose={() => {
        setregshow(false);
      }}
    >
      <View
        style={{ marginTop: "40%", alignItems: "center" }}
        className="bg-gray-500 h-1/2 mx-auto w-11/12 items-center rounded-lg pt-4"
      >
        <View className="w-full items-center">
          <Text className="text-white text-2xl">Your Name</Text>
          <TextInput
            ref={NameRef}
            autoComplete="name"
            textAlign="center"
            className="border border-solid text-black border-white mt-1 w-2/3 text-lg h-9 rounded-full"
            value={name}
            onChangeText={setname}
          />
        </View>
        <View className=" mt-9 w-full items-center">
          <Text className="text-white text-2xl">Your Country</Text>
          <Dropdown
            className="w-1/2 px-1 justify-center border border-solid text-black border-white rounded-full"
            data={[{ label: "Global", value: "Global" }]}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={"Global"}
            value={country}
            onChange={(item) => {
              setcountry(item.value);
            }}
          />
        </View>

        <Pressable
          onPress={async () => {
            await setintrodata();
          }}
          className="mt-auto bg-black mb-4 px-5 py-1 rounded-md"
        >
          <Text className="text-4xl text-white">Save</Text>
        </Pressable>
      </View>
    </Modal>
  );
}
