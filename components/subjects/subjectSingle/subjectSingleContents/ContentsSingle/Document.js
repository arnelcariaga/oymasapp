import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions, Linking } from "react-native";
import { Card, Icon, Image, Avatar } from "react-native-elements";

import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';

import HTML from "react-native-render-html";

import urlFetch from '../../../../parts/urls-fetch'

const pdfIcon = require('../../../../../assets/pdf.png')
const docIcon = require('../../../../../assets/doc.png')
const pptxIcon = require('../../../../../assets/ppt.png')

var fd = new FormData();

const Document = (props) => {
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
          <Card.Title> {subjectContentTitle} | Documento</Card.Title>
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

        <Text style={{ fontSize: 18, marginBottom: 5 }}>
          Archivo(s)
        </Text>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            marginLeft: 5,
          }}
          onPress={downloadFile}
        >
        {
          content.length === 0 ? null : content[0].Extension === "pdf" ? <Image
            source={pdfIcon}
            style={{ width: 18, height: 18 }}
          /> : content[0].Extension === "docx" || content[0].Extension === "doc" ? <Image
            source={docIcon}
            style={{ width: 18, height: 18 }}
          /> : content[0].Extension === "pptx" ? <Image
            source={pptxIcon}
            style={{ width: 18, height: 18 }}
          /> : content[0].Extension === "csv" ? <Avatar 
          title="csv"
          titleStyle={{
            color: "#10bb10"
          }} 
          containerStyle={{
            borderWidth: 0.5,
            borderColor: "lightgray",
            marginTop: 5,
            marginRight: 5
          }}
          /> : null
        }
          
          <Text
            style={{
              color: "#003473",
              fontWeight: "bold",
              fontSize: 12,
              marginLeft: 5,
            }}
          >
            {content.length !== 0 ? content[0].Archivo : null}
          </Text>
        </TouchableOpacity>
      </Card>
    </ScrollView>
  );
};

export default Document;