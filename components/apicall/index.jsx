import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";

export default function ApiCall() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    setLoading(true);

    async function getDataFromApi() {
      const apiResponse = await fetch("https://dummyjson.com/users");
      const finalData = await apiResponse.json();

      if (finalData) {
        setApiData(
          finalData.users.map(
            (userItem) =>
              `${userItem.firstName} ${userItem.lastName} ${userItem.age}`
          )
        );
        setLoading(false);
      }
    }

    getDataFromApi();
  }, []);

  if (loading) {
    return <ActivityIndicator color={"red"} size="large" />;
  }

  return (
    <View>
      <Text>API data</Text>

      <View>
        <FlatList
          data={apiData}
          renderItem={(itemData) => <Text>{itemData.item}</Text>}
        />
      </View>
    </View>
  );
}
