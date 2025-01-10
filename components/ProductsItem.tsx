import { View, Text } from "react-native";

export default function ProductsItem ({item}) {
    return (
        <View>
            <Text style={{fontSize:20}}>{item.name}</Text>
            {/* <Text>{item.price}</Text> */}
        </View>
    )
}