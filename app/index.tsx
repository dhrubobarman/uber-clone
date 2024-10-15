import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

export default function Index() {
  return (
    <SafeAreaView>
      <View className="items-center justify-center flex h-full">
        <Text className="font-semibold">Uber clone</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
