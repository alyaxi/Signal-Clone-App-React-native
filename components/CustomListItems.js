import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { db } from "../firebase";
const CustomListItems = ({ id, chatName, enterChat }) => {
  const [chatMessage, setChangeMessage] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(id)
      .collection("message")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChangeMessage(snapshot.docs.map((doc) => doc.data()))
      );
      return unsubscribe
  },[]);
  return ( 
    <ListItem bottomDivider onPress={() => enterChat(id, chatName)} key={id}>
      <Avatar
        rounded
        source={{
          uri: chatMessage?.[0]?.photoURL ||
           "https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg",
        }}
      />
      <ListItem.Content>
        <ListItem.Title>{chatName}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessage?.[0]?.displayName} : {chatMessage?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};
export default CustomListItems;

const styles = StyleSheet.create({});
