import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import React from "react";
import { Text, ScrollView, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignupPress = async () => {
    console.log(form);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-[Jakarta-SemiBold] bottom-5 left-5 absolute">
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(text) => setForm({ ...form, name: text })}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(text) => setForm({ ...form, password: text })}
          />
          <CustomButton
            title="Sign Up"
            className="mt-6"
            onPress={onSignupPress}
          />
          <Link
            href={"/sign-in"}
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text className="">Already have an account? </Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>

        {/* Verification modal */}
      </View>
    </ScrollView>
  );
};

export default SignUp;
