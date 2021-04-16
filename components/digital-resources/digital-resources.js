import React from "react";
import { ScrollView, Text } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const list = [
  {
    name: "Base de datos",
    icon: require("../../assets/db.png"),
  },
  {
    name: "ELibro",
    icon: require("../../assets/logo-elibronet.feb96efdf3bc.png"),
  },
  {
    name: "Tirant Online",
    icon: require("../../assets/tiran.png"),
  },
  {
    name: "CLACSO",
    icon: require("../../assets/clacso-rvb02.gif"),
  },
  {
    name: "Google Apps",
    icon: require("../../assets/sd-integrations-logo-google-single-sign-on.png"),
  },
  {
    name: "Gmail",
    icon: require("../../assets/Gmail_Icon.png"),
  },
  {
    name: "Outlook",
    icon: require("../../assets/512px-Microsoft_Office_Outlook_(2018–present).svg.png"),
  },
  {
    name: "Office 365",
    icon: require("../../assets/Office_logos.jpg"),
  },
];

const DigitalResources = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
        padding: 10,
      }}
    >
      <Text
        style={{
          padding: 10,
        }}
      >
        Recursos digitales disponibles en la O&Mas.
      </Text>
      {list.map((l, i) => (
        <ListItem key={i} bottomDivider onPress={() => console.log("Works!")}>
          <Avatar
            source={l.icon}
            avatarStyle={{
              resizeMode: "center",
            }}
            titleStyle={{ color: "black" }}
            size="medium"
          />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron color="gray" />
        </ListItem>
      ))}
    </ScrollView>
  );
};

export default DigitalResources;