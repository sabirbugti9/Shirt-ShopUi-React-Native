import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

const DetailsScreen = (props) => {
    const item = props.route.params.item;
    const [image, setImage] = useState(item.productImage);
    return (
        <View style={styles.container} >
            <Image style={styles.mainImage} source={image} />
            <View style={styles.bottomContainer}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        setImage(item.productSecondImage)
                    }}>
                        <Image style={styles.bottomImage} source={item.productSecondImage} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        setImage(item.productThirdImage)
                    }}>
                        <Image style={styles.bottomImage} source={item.productThirdImage} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        setImage(item.productFourImage)
                    }}>
                        <Image style={styles.bottomImage} source={item.productFourImage} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        setImage(item.productImage)
                    }}>
                        <Image style={styles.bottomImage} source={item.productImage} />
                    </TouchableOpacity>

                </View>
                <Text style={{ fontSize: 30, }}>{item.productName}</Text>
                <Text style={{ fontSize: 16, color: "black", marginTop: 26 }}>Description</Text>
                <Text style={[styles.typeContainerTop, { fontSize: 13, marginTop: 13 }]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                <TouchableNativeFeedback>
                    <View style={styles.btn}>
                        <Text style={[styles.typeContainerTop, { color: "white" }]}>ADD TO CART   |</Text>
                        <Text style={[styles.typeContainerTop, { color: "white" }]}>      ${item.productPrice}</Text>

                    </View>
                </TouchableNativeFeedback>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    bottomContainer: {
        backgroundColor: "white",
        flex: 2,
        padding: 20,
    },
    mainImage: {
        height: 350,
        width: "90%",
        marginTop: 36,
        alignSelf: "center",
    },
    bottomImage: {
        height: 70,
        width: 70,
        marginTop: 0.0,
        borderRadius: 12.0,
        marginRight: 14.0,
    },
    typeContainer: {
        height: 115,
        width: 100,
        marginTop: 24.0,
        marginRight: 10.0,
        justifyContent: "space-evenly",
        alignSelf: "center",
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "#F3F2F7",
    },
    typeContainerTop: {
        fontSize: 12.0,
        color: "#BCBEBF",
        fontWeight: "bold",
    },
    btn: {
        flexDirection: "row",
        bottom: 80,
        marginTop: 12.0,
        height: 45,
        width: "100%",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#434954"
    }

});

export default DetailsScreen;