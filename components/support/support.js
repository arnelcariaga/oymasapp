import React from "react";
import { Text, ScrollView } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const Support = () => {
  return (
      <ScrollView>
        <Card>
          <Card.Title>Aprendiendo a usar O&M@S</Card.Title>
          <Card.Divider />
          <Card.Image
            source={require("../../assets/portada_tutorialN.jpg")}
            resizeMode="stretch"
          />
          <Text style={{ margin: 10 }}>Acceso y uso de la plataforma</Text>
          <Button
            icon={
              <Icon
                name="play-circle-o"
                type="font-awesome"
                style={{ marginRight: 5 }}
                color="#ffffff"
              />
            }
            buttonStyle={{ borderRadius: 0, backgroundColor: "#3d8b40" }}
            title="Ver video"
          />
        </Card>
      </ScrollView>
  );
};

export default Support;