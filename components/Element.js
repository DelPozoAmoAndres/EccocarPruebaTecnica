import { TouchableOpacity, Image, StyleSheet, Text } from "react-native"
import React from "react"

import { useLinkProps, useTheme } from "@react-navigation/native"



export const Element = ({ imageUrl, title, onPress,testID }) => {

    const {dark,colors}=useTheme();

    const styles = StyleSheet.create({
        view: {
            width: 140, 
            height: "100%",
            backgroundColor:colors.background
        },
        image: {
            width: 140,
            height: 200
        },
        title: {
            fontSize: 10,
            textAlign: "center",
            textAlignVertical: "center",
            color:colors.text,
            fontWeight:"bold"
        }
    })

    return (
        <TouchableOpacity
            onPress={onPress}
            testID={testID}
            activeOpacity={1}
            style={styles.view}>
            <Image source={{ uri: "https://image.tmdb.org/t/p/w500/" + imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>)
}

