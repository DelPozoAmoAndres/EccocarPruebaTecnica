import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet,Text } from 'react-native';
import { Section } from '../components/Section';

import { NavigationContainerRefContext, useTheme } from '@react-navigation/native';

export const Home = ({ navigation }) => {

    const { dark,colors } = useTheme();

    const styles = StyleSheet.create({
        scrollView: {
            width: "100%",
            height: "100%",
            backgroundColor:colors.background
        }
    });

    const [popularMovies, changePopularMovies] = useState([])
    const [popularSeries, changePopularSeries] = useState([])
    const [featuredMovies, changeFeaturedMovies] = useState([])
    const [featuredSeries, changeFeaturedSeries] = useState([])

    const apiKey = "12bb2b69299bc5534ff3f0ef888cb2c7"

    async function fetchData() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&page=1")
            .then(async response => (await response.json()).results)
            .then(data => {
                changePopularMovies(data.slice(0, 10))
                changePopularSeries(data.slice(3, 13))
                changeFeaturedMovies(data.slice(6, 16))
                changeFeaturedSeries(data.slice(8, 18))
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <SafeAreaView >
            <StatusBar backgroundColor={colors.background} barStyle={dark?"light-content":"dark-content"} />
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <Section testID="section1" key="Popular - Movies" title="Popular - Movies" data={popularMovies} navigation={navigation} />
                <Section testID="section2" key="Popular - Series" title="Popular - Series" data={popularSeries} navigation={navigation} />
                <Section testID="section3" key="Featured - Movies" title="Featured - Movies" data={featuredMovies} navigation={navigation} />
                <Section testID="section4" key="Featured - Series" title="Featured - Series" data={featuredSeries} navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    );
};


