import {
  View,
  Text,
  Modal,
  ScrollView,
  Pressable,
  Linking,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Getdel, update } from "../utils/Data";

const Link = ({ t }) => (
  <>
    <View className="flex-row-reverse mt-3 w-2/4 justify-between">
      <Pressable
        onPress={() => {
          setwebviewshow(true);
          seturi(t.url);
        }}
      >
        <Text className="text-base">{t.title}</Text>
      </Pressable>
      <BouncyCheckbox
        fillColor="black"
        isChecked={t.state}
        onPress={async (isChecked) => {
          await update(country, title, "Beginers", i, isChecked, setbadges);
          settitle("");
          setdelcardshow(false);
        }}
      />
    </View>
  </>
);

export default function Details({
  country,
  title,
  delcardshow,
  setdelcardshow,
  setwebviewshow,
  seturi,
  settitle,
  setbadges,
  openpage,
  setopenpage,
}) {
  const [blist, setblist] = useState([]);
  const [ilist, setilist] = useState([]);
  const [alist, setalist] = useState([]);

  useEffect(() => {
    const fun = async () => {
      setblist(await Getdel(country, title, "Beginers"));
      setilist(await Getdel(country, title, "Intermediate"));
      setalist(await Getdel(country, title, "Advanced"));
    };
    fun();
  }, [title, country]);

  return (
    <Modal
      animationType="slide"
      visible={delcardshow}
      transparent={true}
      onRequestClose={() => {
        setdelcardshow(false);
      }}
    >
      <View
        style={{ marginTop: "40%" }}
        className="bg-gray-500 h-1/2 mx-auto w-11/12 items-center rounded-lg pt-4"
      >
        <Text className="text-3xl">{title}</Text>

        <ScrollView className="w-full" style={{ maxHeight: "70%" }}>
          <View className="w-full mt-5">
            <Text className="text-xl px-2">beginners</Text>
            <View className="items-end px-2">
              <View className="flex-row-reverse mt-3 w-full justify-between">
                <Pressable
                  onPress={() => {
                    setopenpage(true);
                    setdelcardshow(false);
                  }}
                  className="flex-1"
                >
                  <Text className="text-base">
                    Operational Crop Classification Roadmap using Optical and
                    SAR Imagery
                  </Text>
                </Pressable>
                <BouncyCheckbox
                  fillColor="black"
                  isChecked={false}
                  onPress={async (isChecked) => {}}
                />
              </View>
              {blist.map((t, i) => (
                <View
                  key={i}
                  className="flex-row-reverse mt-3 w-full justify-between"
                >
                  <Pressable
                    onPress={() => {
                      setwebviewshow(true);
                      seturi(t.url);
                    }}
                    className="flex-1"
                  >
                    <Text className="text-base">{t.title}</Text>
                  </Pressable>
                  <BouncyCheckbox
                    fillColor="black"
                    isChecked={t.state}
                    onPress={async (isChecked) => {
                      await update(
                        country,
                        title,
                        "Beginers",
                        i,
                        isChecked,
                        setbadges
                      );
                      settitle("");
                      setdelcardshow(false);
                    }}
                  />
                </View>
              ))}
            </View>
          </View>

          <View className="w-full mt-5">
            <Text className="text-xl px-2">intermediate</Text>
            <View className="items-end px-2">
              {ilist.map((t, i) => (
                <View
                  key={i}
                  className="flex-row-reverse mt-3 w-full justify-between"
                >
                  <Pressable
                    onPress={() => {
                      setwebviewshow(true);
                      seturi(t.url);
                    }}
                    className="flex-1"
                  >
                    <Text className="text-base">{t.title}</Text>
                  </Pressable>
                  <BouncyCheckbox
                    fillColor="black"
                    isChecked={t.state}
                    onPress={async (isChecked) => {
                      await update(
                        country,
                        title,
                        "Intermediate",
                        i,
                        isChecked,
                        setbadges
                      );
                      settitle("");
                      setdelcardshow(false);
                    }}
                  />
                </View>
              ))}
            </View>
          </View>

          <View className="w-full mt-5">
            <Text className="text-xl px-2">advanced</Text>
            <View className="items-end px-2">
              {alist.map((t, i) => (
                <View
                  key={i}
                  className="flex-row-reverse mt-3 w-full justify-between"
                >
                  <Pressable
                    onPress={() => {
                      setwebviewshow(true);
                      seturi(t.url);
                    }}
                    className="flex-1"
                  >
                    <Text className="text-base">{t.title}</Text>
                  </Pressable>
                  <BouncyCheckbox
                    fillColor="black"
                    isChecked={t.state}
                    onPress={async (isChecked) => {
                      await update(
                        country,
                        title,
                        "Advanced",
                        i,
                        isChecked,
                        setbadges
                      );
                      settitle("");
                      setdelcardshow(false);
                    }}
                  />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>

        <View>
          <Pressable
            className="bg-gray-600 p-1 rounded-md mt-6"
            onPress={() => {
              Linking.openURL(
                title == "Agriculture"
                  ? "https://res.cloudinary.com/dc1fhdtwe/image/upload/v1664477836/EarthSavers/AGRICULTURE_iewhcw.pdf"
                  : title == "Land"
                  ? "https://res.cloudinary.com/dc1fhdtwe/image/upload/v1664477833/EarthSavers/land_pnp3hl.pdf"
                  : title == "Disaster"
                  ? "https://res.cloudinary.com/dc1fhdtwe/image/upload/v1664477825/EarthSavers/Disaster_z1sstv.pdf"
                  : title == "Climate"
                  ? "https://res.cloudinary.com/dc1fhdtwe/image/upload/v1664477829/EarthSavers/Climate_ijlx9o.pdf"
                  : title == "Air Quality"
                  ? "https://res.cloudinary.com/dc1fhdtwe/image/upload/v1664477829/EarthSavers/air_quaility_and_health_s4or83.pdf"
                  : ""
              );
            }}
          >
            <Text className="text-lg">download the full data</Text>
          </Pressable>
          <Pressable
            className="bg-gray-600 p-1 rounded-md mt-6"
            onPress={() => {
              Linking.openURL("mailto:support@example.com");
            }}
          >
            <Text className="text-lg">Send Us feedback</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
