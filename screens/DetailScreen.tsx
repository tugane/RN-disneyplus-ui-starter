import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import DotSeparator from "../components/DotSeparator";
import DetailFooter from "../components/DetailFooter";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

const CoverHeight = 300;

const DetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const movie = route.params.movie;
  return (
    <LinearGradient
      colors={[Colors.dark, Colors.black]}
      style={{
        flex: 1,
      }}
    ></LinearGradient>
  );
};

export default DetailScreen;
