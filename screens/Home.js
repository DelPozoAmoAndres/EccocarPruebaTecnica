import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Image, Text } from 'react-native';
import { Section } from '../components/Section';

import { useTheme } from '@react-navigation/native';
import { useSeries } from '../hooks/useSeries';
import { useMovies } from '../hooks/useMovies';

export const Home = ({ navigation }) => {

    const { dark, colors } = useTheme();

    const styles = StyleSheet.create({
        scrollView: {
            width: "100%",
            height: "100%",
            backgroundColor: colors.background
        },
        title: {
            fontSize: 20,
            alignSelf: "center",
            color: 'white',
            position: "absolute",
            top: 45,
            left: 20,
            width: 200,
            zIndex:2,

        },
        subtitle: {
            fontSize: 15,
            alignSelf: "center",
            color: 'white',
            position: "absolute",
            top: 115,
            left: 22,
            width: 200,
            zIndex:2,

        },
        imageView: {
            height: 170,
        },
        image: {
            height: 170,
            zIndex:0
        },
        hover: {
            height: 170,
            width:200,
            tintColor: 'rgba(0, 0, 0, 0.6)',
            position:'absolute',
            zIndex:1,
            top:0,
            left:0
        }
    });

    const { popularMovies } = useMovies()
    const { popularSeries } = useSeries()
    // const index=Math.floor(Math.random() * (popularMovies.length - 0 + 1) + 0)
    const selected = popularMovies[10];
    return (
        <SafeAreaView >
            <StatusBar backgroundColor={colors.background} barStyle={dark ? "light-content" : "dark-content"} />
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.imageView}>
                    <Image testID='image' source={{ uri: "https://image.tmdb.org/t/p/w500/" + (selected?.backdrop_path) }} style={styles.image} />
                    <Image testID='image' source={{ uri: "https://image.tmdb.org/t/p/w500/" + (selected?.backdrop_path) }} style={styles.hover} />
                    <Text style={styles.title}>{selected?.title}</Text>
                    <Text style={styles.subtitle}>{selected && selected.vote_average + " ⭐"}</Text>

                </View>
                <Section testID="section1" key="Popular - Movies" title="Popular - Movies" data={popularMovies} navigation={navigation} />
                <Section testID="section2" key="Popular - Series" title="Popular - Series" data={popularSeries} navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    );
};


