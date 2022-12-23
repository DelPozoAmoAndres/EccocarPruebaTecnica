import { Text, View, StyleSheet, FlatList } from "react-native"
import React from "react"
import { Element } from "./Element"

import { useTheme } from "@react-navigation/native"

export const Section = ({ title, data, navigation, testID }) => {

    const {colors } = useTheme();

    const styles = StyleSheet.create({
        view: {
            height: 270,
            marginVertical: 10,
            marginHorizontal: 10,
            backgroundColor: colors.background
        },
        title: {
            color: colors.text,
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: 20,
            
        },
        list: {
            backgroundColor: colors.background,
            width: "100%"

        },
        separator: {
            paddingHorizontal: 10,
            backgroundColor: colors.background
        },
    })
    return (
        data?
        <View style={styles.view} testID={testID}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                data={data}
                horizontal={true}
                style={styles.list}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) =>
                    <Element
                        testID={"element" + index}
                        imageUrl={item.poster_path}
                        title={item.title}
                        onPress={() => { navigation.navigate("detail", { data: item }) }} />}
            />
        </View>:<></>
    )
}

