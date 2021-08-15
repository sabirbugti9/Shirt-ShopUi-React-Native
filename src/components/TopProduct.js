import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TopProuct = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => {
            navigation.navigate("Details", { item: item })
        }}>
            <View style={{ marginLeft: 12.0, marginBottom: 12.0 }}>
                <Image style={{ height: 200, width: 160, borderRadius: 6.0, alignSelf: "center" }} source={item.productImage} />
                <View style={styles.row}>
                    <Text style={[styles.selectedText, { color: "grey", }]}>{item.productName}</Text>
                    <Text style={[styles.selectedText, { color: "#000000", fontWeight: "normal" }]}>${item.productPrice}</Text>
                </View>
            </View>
        </TouchableOpacity>


    );
}
const styles = StyleSheet.create({

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    selectedText: {
        fontSize: 13,
        fontWeight: "700",
    }

});
export default TopProuct;