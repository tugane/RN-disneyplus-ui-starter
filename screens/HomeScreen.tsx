import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import { movies, studios, trendingMovies } from "../data";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import Movie from "../components/Movie";
import MoviesList from "../components/MoviesList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

const studioHeight = 70;
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { width } = Dimensions.get("window");
  const TrendingMovieWidth = width - Spacing * 4;
  const TrendingMovieHeight = 200;

  return (
    <LinearGradient colors={[Colors.dark, Colors.black]} style={{ flex: 1 }}>
      <SafeAreaView></SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
