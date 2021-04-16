import React from "react";
import { View, Text } from "react-native";
import { ListItem, Avatar, Badge } from "react-native-elements";

const list = [
  {
    name: "Calculo integral",
    avatarTitle: "MB",
    subtitle: "Carlos Morban",
    code: 455854,
    credits: 4,
    section: 4620,
    status: true,
  },
  {
    name: "Logistica de investigaciones en el campo",
    avatarTitle: "LI",
    subtitle: "Vidal Rodriguez",
    code: 653456,
    credits: 3,
    section: 6486,
    status: false,
  },
  {
    name: "Lengua española",
    avatarTitle: "LE",
    subtitle: "Pablo hernandez",
    code: 787565,
    credits: 6,
    section: 2379,
    status: true,
  },
];

const Forum = () => {

  return (
    <View>
      {list.map((l, i) => (
        <ListItem key={i} bottomDivider onPress={() => console.log("Works!")}>
          <View>
            <Avatar
              title={l.avatarTitle}
              titleStyle={{ color: "black" }}
              size="small"
            />

            <Badge
              status={l.status ? "success" : "error"}
              containerStyle={{
                position: "absolute",
                top: -55,
                right: -55,
                padding: 50,
              }}
              value="."
              textStyle={{ fontSize: 50 }}
            />
          </View>
          <ListItem.Content>
            <ListItem.Title>
              {l.name} ({l.code})
            </ListItem.Title>
            <ListItem.Subtitle>
              <Text>Secci&oacute;n: </Text>
              {l.section}
            </ListItem.Subtitle>
            <ListItem.Subtitle>Tema (5) | Respuesta (16) </ListItem.Subtitle>
            <ListItem.Subtitle>
              <Text>Creado: 6/12/21 | </Text>
              {l.subtitle}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron color="gray" />
        </ListItem>
      ))}
    </View>
  );
};

export default Forum;