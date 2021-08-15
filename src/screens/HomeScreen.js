import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity, TextInput } from 'react-native';
import ShirtData from '../assets/shirts';
import TopProduct from '../components/TopProduct';
const primaryColor = "#000000";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'

const HomeScreen = () => {
    const [selectCategory, setSelectCategory] = useState("Shirt");
    const recipies = [
        {
            name: "Shirt",
            id: "1",
        },
        {
            name: "T-Shirt",
            id: "2",
        },
        {
            name: "Popularity",
            id: "3",
        },
    ];

    return (
        <FlatList
            data={ShirtData}
            ListHeaderComponent={
                <View>
                    <View style={[styles.row, { marginTop: 12.0, marginHorizontal: 12.0 }]}>
                        <Ionicons name="md-filter-outline" color="black" size={25} />
                        <Ionicons name="ios-search-outline" color="black" size={25} />
                    </View>
                    <Text style={styles.textDiscover}>Get Your <Text style={[styles.textDiscover, { color: "#434954", fontWeight: "bold" }]}>Best</Text></Text>

                    <Text style={[styles.BottomDiscoverText, { color: "#434954", fontWeight: "bold" }]}>Shirt <Text style={styles.BottomDiscoverText}>Around You </Text></Text>
                    <View style={{ justifyContent: "space-between", alignItems: "center", paddingHorizontal: 24.0, flexDirection: "row", marginLeft: 12.0, marginTop: 12.0, marginBottom: 12.0, height: 40, width: 320, borderRadius: 25, backgroundColor: "#F5F5F5" }}>
                        <View style={styles.row}>
                            <Ionicons name="ios-search-outline" color="black" size={20} style={{ marginTop: 8.0 }} />
                            <TextInput placeholder="Search your favourite shirt" style={{ flex: 1, color: "#434954" }} />
                        </View>
                        <Octicons name="settings" color="black" size={20} />
                    </View>
                    <View style={[styles.row, { marginBottom: 12.0, paddingHorizontal: 12.0 }]}>
                        {recipies.map((e) => {
                            return (
                                <TouchableOpacity key={e.id} activeOpacity={0.5} onPress={() => {
                                    setSelectCategory(e.name);
                                }}>
                                    <View style={{ height: 40, width: 90, backgroundColor: selectCategory == e.name ? "#434954" : "white", borderRadius: 13, justifyContent: "center" }}>
                                        <Text style={{ color: selectCategory == e.name ? "white" : "#434954", alignSelf: "center" }}>{e.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                </View>
            }
            numColumns={2}
            style={{ backgroundColor: "white" }}
            keyExtractor={(item, index) => item._id}
            showsVerticalScrollIndicator={false}
            renderItem={(item) => {
                return (
                    <TopProduct item={item.item} />
                );
            }}

        />

    );
}

const styles = StyleSheet.create({

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textDiscover: {
        color: "#59616A",
        fontSize: 30,
        marginLeft: 17.0,
        marginTop: 30.0,
        // marginBottom: 16.0,
    },
    BottomDiscoverText: {
        color: "#59616A",
        fontSize: 30,
        marginLeft: 17.0,
        // marginTop: 30.0,
        // marginBottom: 16.0,
    },
    shortprice: {
        color: primaryColor,
        fontSize: 14,
        marginLeft: 17.0,
        marginTop: 12.0,
    }


});

export default HomeScreen;
