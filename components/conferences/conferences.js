import React from "react";
import { Text, ScrollView } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const Conferences = () => {
  return (
    <ScrollView>
      <Text
        style={{
          padding: 20,
        }}
      >
        Lista de videoconferencias disponibles.
      </Text>

      <Card
        containerStyle={{
          marginTop: 0,
          padding: 20,
        }}
      >
        <Card.Title>
          Historia y revolucion de la republica dominicana y el mundo
        </Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
          Introduccion a la asignatura y como evaluaremos las calificaciones
        </Text>

        <Text style={{ fontWeight: "bold" }}>
          Fecha: <Text style={{ fontWeight: "normal" }}>12/02/20</Text>
        </Text>

        <Text style={{ fontWeight: "bold" }}>
          Horario:{" "}
          <Text style={{ fontWeight: "normal" }}>6:30 PM - 9:00 PM</Text>
        </Text>

        <Button
          icon={
            <Icon
              name="sign-in-alt"
              type="font-awesome-5"
              style={{ marginLeft: 5 }}
              color="#ffffff"
            />
          }
          buttonStyle={{
            marginTop: 10,
            backgroundColor: "#3d8b40",
            padding: 1,
          }}
          title="Entrar"
          iconRight
        />
      </Card>

      <Card
        containerStyle={{
          padding: 20,
        }}
      >
        <Card.Title>Calculo integral</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
          Introduccion a la asignatura y como evaluaremos las calificaciones
        </Text>

        <Text style={{ fontWeight: "bold" }}>
          Fecha: <Text style={{ fontWeight: "normal" }}>12/02/20</Text>
        </Text>

        <Text style={{ fontWeight: "bold" }}>
          Horario:{" "}
          <Text style={{ fontWeight: "normal" }}>6:30 PM - 9:00 PM</Text>
        </Text>

        <Button
          icon={
            <Icon
              name="sign-in-alt"
              type="font-awesome-5"
              style={{ marginLeft: 5 }}
              color="#ffffff"
            />
          }
          buttonStyle={{
            marginTop: 10,
            backgroundColor: "#3d8b40",
            padding: 1,
          }}
          title="Entrar"
          iconRight
        />
      </Card>

      <Card
        containerStyle={{
          padding: 20,
        }}
      >
        <Card.Title>Lengua española</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
          Introduccion a la asignatura y como evaluaremos las calificaciones
        </Text>

        <Text style={{ fontWeight: "bold" }}>
          Fecha: <Text style={{ fontWeight: "normal" }}>12/02/20</Text>
        </Text>

        <Text style={{ fontWeight: "bold" }}>
          Horario:{" "}
          <Text style={{ fontWeight: "normal" }}>6:30 PM - 9:00 PM</Text>
        </Text>

        <Button
          icon={
            <Icon
              name="sign-in-alt"
              type="font-awesome-5"
              style={{ marginLeft: 5 }}
              color="#ffffff"
            />
          }
          buttonStyle={{
            marginTop: 10,
            backgroundColor: "#3d8b40",
            padding: 1,
          }}
          title="Entrar"
          iconRight
        />
      </Card>
    </ScrollView>
  );
};

export default Conferences;