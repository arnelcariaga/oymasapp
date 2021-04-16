import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions, Linking } from "react-native";
import { Card, Icon } from "react-native-elements";

import HTML from "react-native-render-html";

const Image = (props) => {
  const content = props.content;
  const subjectContentTitle = props.subjectContentTitle
  const contentWidth = useWindowDimensions().width;

  const downloadFile = async () => {
    Linking.openURL(content[0].UrlDownload);
  }
  return (
    <ScrollView>
      <Card>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            padding: 4,
          }}
        >
          <Icon name="receipt" type="font-awesome-5" color="#164b6b" />
          <Card.Title> {subjectContentTitle} | Archivo de imagen</Card.Title>
        </View>

        <Card.Divider />
        <View>
          {
            content.length === 0 ? null : content[0].Descripcion_archivo !== "" ? <HTML 
            source={{ 
            html: `
                      <!DOCTYPE html>\n
                      <html>
                        <head>
                          <title>Web View</title>
                          <meta http-equiv="content-type" content="text/html; charset=utf-8">
                          <meta name="viewport" content="width=320, user-scalable=yes">
                          <style type="text/css">
                            body {
                              margin: 0;
                              padding: 0;
                            }
                          </style>
                        </head>
                        <body>
                            <span>${content[0].Descripcion_archivo}</span>
                        </body>
                      </html>
                      `
          }} 
          contentWidth={contentWidth}
           /> : null
          }
        </View>
        <Text style={{ fontSize: 18, marginTop: 10 }}>
          Archivo(s)
        </Text>
        <TouchableOpacity
        style={{
            flex: 1,
            flexDirection: "row",
            marginLeft: 10,
          }}
          onPress={downloadFile}
        >
        <Text style={{ 
          color: "#003473",
          fontWeight: "bold",
          fontSize: 12
        }}>
          <Icon
            name="file-image-o"
            type="font-awesome"
            color="#164b6b"
            size={15}
          />{" "}
          {
            content.length === 0 ? null : content[0].Archivo
          }
        </Text>
        </TouchableOpacity>

      </Card>
    </ScrollView>
  );
};

export default Image;