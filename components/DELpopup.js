import { View, Text, Modal, ScrollView, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { getprogressdetails } from "../utils/Data";

export default function Delpopup({
  country,
  badges,
  delshow,
  setdelshow,
  setdelcardshow,
  setdelcardtitle,
  delcardtitle,
}) {
  const [list, setlist] = useState([]);
  useEffect(() => {
    const fun = async () => {
      setlist(await getprogressdetails(country));
    };
    fun();
  }, [country, delcardtitle]);
  return (
    <Modal
      animationType="slide"
      visible={delshow}
      transparent={true}
      onRequestClose={() => {
        setdelshow(false);
      }}
    >
      <View
        style={{ marginTop: "40%", alignItems: "center" }}
        className="bg-gray-500 h-1/2 mx-auto w-11/12 items-center rounded-lg pt-4"
      >
        <View className="w-full items-center">
          <Text className="text-white text-2xl">Your Badges</Text>
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 15,
              paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            // ref={(ref) => {
            //   this.scrollView = ref;
            // }}
            // onContentSizeChange={() => this.scrollView.scrollTo({ x: 0, y: 0 })}
          >
            <View className="flex-row space-x-6 mt-2">
              {badges.map((badge, i) => (
                <View key={i} className="justify-center items-center">
                  <View className="w-10 h-10 justify-center items-center">
                    <Image
                      source={require("../assets/achievement.png")}
                      className="w-12 h-12"
                    />
                  </View>
                  <Text className="text-white opacity-60">{badge.title}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View className="mt-9 w-full items-center">
          <Text className="text-white text-2xl">Your Progress</Text>
          <ScrollView className="w-full h-48 px-6 mt-4">
            {list.map((t, i) => (
              <Pressable
                key={i}
                onPress={() => {
                  setdelcardshow(true);
                  setdelcardtitle(t.title);
                  setdelshow(false);
                }}
                className="w-full mt-5 flex-row-reverse justify-between px-3 py-1 rounded-md border border-white"
              >
                <Text>{t.title}</Text>
                <Text>{t.pres}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
