import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Image,
    Text,
    View,
    Button
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

import { CommonActions, useTheme } from '@react-navigation/native';
import { Section } from '../components/Section';
import { useSimilar } from '../hooks/useSimilar';

export const Detail = ({ navigation, route }) => {
    const { dark, colors } = useTheme();

    const styles = StyleSheet.create({
        imageView: {
            width: "100%",
            height: 200
        },
        imageBack: {
            width: "100%",
            height: "100%",
        },
        imagePoster: {
            position: "absolute",
            top: 90,
            right: 10,
            width: "20%",
            height: "60%",
            zIndex: 1,
        },
        section: {
            fontWeight: "bold",
            fontSize: 20,
            color: colors.text
        },
        title: {
            fontSize: 30,
            fontWeight: "bold",
            color: colors.text,
            marginBottom: 20
        },
        backArrow: {
            position: "absolute",
            top: 20,
            left: 20,
            zIndex: 1,
            backgroundColor: colors.background,
            borderRadius: 20
        },
        infoView: {
            width: "90%",
            alignSelf: "center",
            marginTop: "4%",
            backgroundColor: colors.background
        },
        synopsis: {
            marginBottom: 20,
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
    const { similar} = useSimilar(data.id,data.type);
    return (
        <SafeAreaView >
            <StatusBar backgroundColor={colors.background} barStyle={dark ? "light-content" : "dark-content"} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.imageView}>
                    <Image testID='image' source={{ uri: "https://image.tmdb.org/t/p/w500/" + (data.backdrop_path ||data.poster_path) }} style={styles.imageBack} />
                    <Image testID='imagePoster' source={{ uri: "https://image.tmdb.org/t/p/w500/" + data.poster_path }} style={styles.imagePoster} />
                    <Icon
                        testID='arrow-back'
                        name="arrow-back"
                        color={colors.text}
                        size={35}
                        style={styles.backArrow}
                        onPress={() => navigation.dispatch(CommonActions.goBack())}
                    />
                </View>
                <View style={styles.infoView}>
                    <Text testID='title' style={styles.title}>{data.title || data.name}</Text>
                    <View style={styles.synopsis}>
                        <Text style={styles.section}>Synopsis:</Text>
                        <Text testID='synopsis' style={styles.normalType}>{data.overview}</Text >
                    </View>
                    <View style={styles.synopsis}>
                        <Text style={styles.normalType}>⭐ Score <Text testID='vote_average' style={styles.boldType}>{data.vote_average}</Text>/10 with <Text testID='vote_count' style={styles.boldType}>{data.vote_count}</Text> votes</Text>
                        <Text style={styles.normalType}>📅 Release Date: <Text testID='release_date' style={styles.boldType}>{data.release_date}</Text></Text>
                    </View>
                </View>
                <View>
                    <Section data={similar} navigation={navigation} title={"Similiar"} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


