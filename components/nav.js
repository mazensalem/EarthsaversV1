import { View, Text, Pressable } from "react-native";

export default function Nav({
  setdelshow,
  setregshow,
  name,
  country,
  badges,
  progress,
}) {
  return (
    <View className="pt-1 px-4 flex-row justify-between">
      <Pressable onPress={() => setregshow(true)}>
        <View>
          <Text>Wellcome, {name}</Text>
          <Text>you are viewing: {country}</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => setdelshow(true)}>
        <View>
          <Text>badges: {badges}</Text>
          <Text>progress: {progress}</Text>
        </View>
      </Pressable>
    </View>
  );
}
