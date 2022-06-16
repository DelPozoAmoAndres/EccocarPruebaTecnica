import { ScrollView, Text, View, StyleSheet } from "react-native"
import React from "react"
import { Element } from "./Element"

import { useTheme } from "@react-navigation/native"

export const Section = ({ title, data, navigation, testID }) => {

    const { dark, colors } = useTheme();

    const styles = StyleSheet.create({
        view: {
            height: 270,
            marginTop: "5%",
            backgroundColor: colors.background
        },
        title: {
            marginLeft: "5%",
            color: colors.text,
            fontWeight: "bold",
            fontSize:20,
            marginBottom:"5%"
        },
        scrollView: {
            backgroundColor: colors.background
        },
        firstElement: {
            height: "100%",
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: colors.background
        },
        restElement: {
            height: "100%",
            marginRight: 20,
            backgroundColor: colors.background
        }
    })

    return (
        <View style={styles.view} testID={testID}>
            <Text style={styles.title}>{title}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
                style={styles.scrollView}>
                {data?.map((item, index) => (
                    <View style={index === 0 ? styles.firstElement : styles.restElement} key={item.id}>
                        <Element testID={"element"+index} imageUrl={item.poster_path} title={item.title} onPress={() => { navigation.navigate("detail", { data: item }) }} />
                    </View>
                ))}
            </ScrollView>
        </View>)
}

