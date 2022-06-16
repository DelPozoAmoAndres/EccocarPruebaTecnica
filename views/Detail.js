import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";

import { CommonActions, useTheme } from '@react-navigation/native';

export const Detail = ({navigation,route}) => {
    const { dark, colors } = useTheme();

    const styles = StyleSheet.create({
        imageView: {
            width: "100%",
            height: 500,
        },
        image: {
            width: "100%",
            height: "100%",
        },
        linearGradient: {
            position: "absolute",
            zIndex: 0.5,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            opacity: 0.7,
        },
        section: {
            fontWeight: "bold",
            fontSize: 20,
            color: colors.text
        },
        title: {
            position: "absolute",
            bottom: "5%",
            fontSize: 30,
            left: "5%",
            fontWeight: "bold",
            color: "white",
            zIndex: 1
        },
        backArrow: {
            position: "absolute",
            top: "5%",
            left: "5%",
            zIndex:1
        },
        infoView: {
            width: "90%",
            alignSelf: "center",
            marginTop: "4%",
            backgroundColor: colors.background
        },
        synopsis: {
            marginBottom: "5%",
        },
        boldType: {
            fontWeight: "bold",
            color: colors.text
        },
        normalType: {
            color: colors.text
        },

    })

    const data = route.params.data
    return (
        <SafeAreaView >
            <StatusBar backgroundColor={colors.background} barStyle={dark ? "light-content" : "dark-content"} />
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.imageView}>
                    <Image testID='image' source={{ uri: "https://image.tmdb.org/t/p/w500/" + data.poster_path }} style={styles.image} />
                    <LinearGradient
                        colors={["#6c6c6c", "#000000"]}
                        style={styles.linearGradient} />
                    <Text testID='title' style={styles.title}>{data.title}</Text>
                    <Icon
                        testID='arrow-back'
                        name="arrow-back"
                        color="white"
                        size={35}
                        style={styles.backArrow}
                        onPress={() => navigation.dispatch(CommonActions.goBack())}
                    />
                </View>
                <View style={styles.infoView}>
                    <View style={styles.synopsis}>
                        <Text style={styles.section}>Synopsis:</Text>
                        <Text testID='synopsis' style={styles.normalType}>{data.overview}</Text >
                    </View>
                    <View>
                        <Text style={styles.normalType}>⭐ Score <Text testID='vote_average' style={styles.boldType}>{data.vote_average}</Text>/10 with <Text testID='vote_count' style={styles.boldType}>{data.vote_count}</Text> votes</Text>
                        <Text style={styles.normalType}>📅 Release Date: <Text testID='release_date' style={styles.boldType}>{data.release_date}</Text></Text>

                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};


