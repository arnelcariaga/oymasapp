import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { ListItem, Icon } from "react-native-elements";

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
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
            <Icon
              name={this.props.icon}
              type={this.props.iconType}
              color="#008ee1"
              size={25}
              style={{
                marginRight: 10,
              }}
            />
            <TouchableOpacity onPress={() => this.toggleExpand()}>
              <ListItem.Title>{this.props.title}</ListItem.Title>
              <ListItem.Subtitle style={{ fontWeight: "bold" }}>
                {this.props.subtitle} ({this.props.code})
              </ListItem.Subtitle>
              <ListItem.Subtitle>{this.props.credits}</ListItem.Subtitle>
              {this.props.description === undefined ? null : (
                <ListItem.Subtitle>{this.props.date}</ListItem.Subtitle>
              )}
            </TouchableOpacity>
          </View>

          {this.state.expanded && (
            <View style={{ padding: 10 }}>
              {this.props.description !== undefined ? (
                <Text
                  style={{
                    marginBottom: 25,
                  }}
                >
                  {this.props.description}
                </Text>
              ) : null}

              <Text
                style={{
                  textAlign: "justify",
                  marginLeft: 40,
                }}
              >
                {this.props.data}
              </Text>
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