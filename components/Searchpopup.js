import {
  View,
  Text,
  Modal,
  ScrollView,
  TextInput,
  Keyboard,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { search } from "../utils/Data";
import { Dropdown } from "react-native-element-dropdown";

export default function Searchpopup({
  country,
  part,
  seturi,
  sershow,
  setsershow,
  setwebviewshow,
}) {
  const NameRef = useRef();
  const [text, settext] = useState("");
  const [results, setresults] = useState([]);
  const [sort, setsort] = useState("NO");
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
  return (
    <Modal
      animationType="slide"
      visible={sershow}
      transparent={true}
      onRequestClose={() => {
        setsershow(false);
        setresults([]);
      }}
    >
      <View
        style={{ marginTop: "40%", alignItems: "center" }}
        className="bg-gray-500 h-1/2 mx-auto w-11/12 items-center rounded-lg pt-4"
      >
        <Text className="text-white text-2xl">Search {part}</Text>
        <View className="w-full items-center flex-row px-2 mt-3">
          <TextInput
            ref={NameRef}
            textAlign="center"
            className="border border-solid flex-1 ml-3 text-black border-white mt-1 text-lg h-9 rounded-md"
            value={text}
            onChangeText={settext}
          />
          <View className="flex-row-reverse  w-5/12 justify-between space-x-1">
            <Pressable
              onPress={async () => {
                setresults(await search(country, part, text, sort));
              }}
              className="border border-solid bg-gray-800 border-white mt-1 h-9 rounded-md"
            >
              <Text className="text-xl text-white">Search</Text>
            </Pressable>
            <Dropdown
              className="justify-center border w-16 border-solid text-black border-white rounded-md"
              data={[
                { label: "NO", value: "NO" },
                { label: "AZ", value: "AZ" },
                { label: "ZA", value: "ZA" },
                { label: "BA", value: "BA" },
                { label: "AB", value: "AB" },
              ]}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={"NO"}
              value={sort}
              onChange={(item) => {
                setsort(item.value);
              }}
            />
          </View>
        </View>
        <View className="mt-4 w-full items-center">
          <ScrollView className="w-full h-48 px-6 mt-3">
            {results.map((r, i) => (
              <Pressable
                key={i}
                onPress={() => {
                  seturi(r.url);
                  setwebviewshow(true);
                }}
                className="w-full mt-5 flex-row-reverse justify-between px-3 py-1 rounded-md border border-white"
              >
                <Text className="w-3/4">{r.title}</Text>
                <Text className="w-max mr-1">{r.section}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
