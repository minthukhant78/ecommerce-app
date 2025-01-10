import { View, Text, FlatList } from "react-native";
import produts from "../assets/products.json"
import ProductsItem from "../components/ProductsItem";
import { Button, ButtonText } from "@/components/ui/button";


export default function HomeScreen() {
    return (
      <FlatList
        data={produts
        }
        renderItem={({ item }) => (
          <ProductsItem item={item} />      
        
        )}
      
      />
    );

// return (
//   <Button>
//     <ButtonText>clike Me</ButtonText>
//   </Button>
// )
}
