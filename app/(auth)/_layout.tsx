import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";

SplashScreen.preventAutoHideAsync();

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
    </Stack>
  );
}
