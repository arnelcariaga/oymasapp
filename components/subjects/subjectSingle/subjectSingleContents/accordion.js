import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  LayoutAnimation,
  Platform,
  UIManager,
  Dimensions
} from "react-native";
import { ListItem, Icon } from "react-native-elements";

import HTML from "react-native-render-html";

var contentWidth = Dimensions.get('window').width;

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false
    };
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <ListItem bottomDivider>
        <ListItem.Content>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "90%",
            }}
          >
            <TouchableOpacity onPress={() => this.toggleExpand()}>
              <ListItem.Title style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{this.props.title}</ListItem.Title>
                {
                this.props.descripcion !== "" ?
                <HTML 
                  source={{ 
                    html: this.props.descripcion
                  }} 
                  contentWidth={this.contentWidth} 
                  tagsStyles = {{
                     p: {color: 'gray', marginLeft: 8, textTransform: 'capitalize'}
                  }}
                /> :
                  <Text>Sin descripci&oacute;n</Text>
                }
            </TouchableOpacity>
          </View>

          {this.state.expanded && (
            <View style={{
             marginTop: 20
           }}>
              {this.props.data.map((res, i) => {
                return (
                  <TouchableOpacity
                    key={i.toString()}
                    style={{ 
                      marginBottom: 30,
                      marginLeft: 5
                    }}
                    onPress={() =>
                      this.props.navigation.navigation.push(
                        "ContentsSingle",
                        {
                          subjectTitle: this.props.subjectTitle,
                          subjectContentTitle: res.Titulo,
                          Descripcion: res.Descripcion,
                          linkTo: res.linkTo,
                          Tipo: res.Tipo,
                          subjectItem: this.props.subjectItem,
                          contentId: res.pin
                        }
                      )
                    }
                  >
                  <View>
                  <Icon
                        name={res.iconName}
                        type="font-awesome"
                        color="#164b6b"
                        style={{
                          marginRight: 10,
                        }}
                        containerStyle={{
                          position: 'absolute',
                          margin: 10
                        }}
                      />
                    <Text
                      style={{
                        textAlign: "justify",
                        marginLeft: 40,
                        color: "#164b6b"
                      }}
                    >
                      {res.Titulo}
                    </Text>
                    </View>

                    <Text
                      style={{
                        textAlign: "justify",
                        marginLeft: 40,
                        color: "gray",
                        borderBottomWidth: 0.3,
                        borderBottomColor: 'gray'
                      }}
                    >
                      <HTML 
                        source={{ 
                          html: `
                                <!DOCTYPE html>
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
                                      <p>${res.Tipo}</p>
                                  </body>
                                </html>
                                `
                        }} 
                        contentWidth={this.contentWidth} 
                        tagsStyles = {{
                           p: {color: 'gray', textAlign: "justify"}
                        }}
                      />
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </ListItem.Content>
        <TouchableOpacity onPress={() => this.toggleExpand()}>
          <Icon
            type="font-awesome-5"
            name={this.state.expanded ? "chevron-down" : "chevron-up"}
            size={10}
            color="gray"
          />
        </TouchableOpacity>
      </ListItem>
    );
  }

  onClick = (index) => {
    const temp = this.state.data.slice();
    temp[index].value = !temp[index].value;
    this.setState({ data: temp });
  };

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };
}