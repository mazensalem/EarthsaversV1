import { View, Text, Modal, Pressable, ScrollView } from "react-native";
import React from "react";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory-native";

export default function OnePage({
  openpage,
  setopenpage,
  data,
  setwebviewshow,
  seturi,
}) {
  return (
    <Modal
      animationType="slide"
      visible={openpage}
      transparent={true}
      onRequestClose={() => {
        setopenpage(false);
      }}
    >
      <View
        style={{ marginTop: "40%" }}
        className="bg-gray-500 h-1/2 mx-auto w-11/12 items-center rounded-lg pt-4"
      >
        <ScrollView className="px-5 mt-3" style={{ maxHeight: "85%" }}>
          <Text className="text-3xl mx-auto">{data.name}</Text>
          <Text className="mt-9">{data.summary}</Text>
          <View className="mt-4">
            {data.labels.map((item, index) => (
              <Pressable
                onPress={() => {
                  setwebviewshow(true);
                  seturi(data.urls[index]);
                }}
              >
                <Text className="text-base mt-2">{item}</Text>
              </Pressable>
            ))}
          </View>
          <ScrollView horizontal>
            <VictoryChart
              // domainPadding will add space to each side of VictoryBar to
              // prevent it from overlapping the axis
              domainPadding={40}
            >
              <VictoryAxis
                // tickValues specifies both the number of ticks and where
                // they are placed on the axis
                tickValues={[1, 2, 3]}
                tickFormat={["NO Yield", "Yield"]}
              />
              <VictoryAxis
                dependentAxis
                // tickFormat specifies how ticks should be displayed
                tickFormat={(x) => `${x}`}
              />
              <VictoryBar
                data={[
                  { quarter: 1, earnings: 6000 },
                  { quarter: 2, earnings: 4000 },
                ]}
                x="quarter"
                y="earnings"
              />
            </VictoryChart>
          </ScrollView>
        </ScrollView>
      </View>
    </Modal>
  );
}
