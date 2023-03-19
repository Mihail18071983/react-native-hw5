import React from "react";
import { useState, useEffect } from "react";

import { Text, View, FlatList, Image, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";

const PostScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.photo }}
              style={{ width: 350, height: 200 }}
            />
            <View>
              <Text>{item.formValues.title}</Text>
            </View>
            <View style={styles.locationWrapper}>
              <Feather
                name="map-pin"
                size={18}
                color="#BDBDBD"
                style={styles.mapIcon}
              />
              <Text  style={styles.locationText}>{item.formValues.location}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  locationWrapper: {
    flex:1,
    flexDirection: 'row',
    width:300,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 16,
    lineHeight:19
  }
});
