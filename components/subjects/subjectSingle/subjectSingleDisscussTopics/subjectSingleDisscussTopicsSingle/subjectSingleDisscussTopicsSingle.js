import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  LayoutAnimation,
} from "react-native";
import {
  Avatar,
  Badge,
  Card,
  Icon,
  Button
} from "react-native-elements";
import Quill from "../../../../parts/quilljs";

const SubjectSingleDisscussTopicsSingle = (props) => {
  const [
    teacherTextAreaReplyExpanded,
    setTeacherTextAreaReplyExpanded,
  ] = useState(false);

  function replyTeacher() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setTeacherTextAreaReplyExpanded(!teacherTextAreaReplyExpanded);
  }

  const onChange = (html: string) => {
    console.log(html);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.disscussContainer}>
        <Avatar
          rounded
          source={require("../../../../../assets/l-11.jpg")}
          size="medium"
        />
        <View style={styles.disscussInfoContainer}>
          <Text style={styles.disscussAuthor}>Luis Manuel Medina Moreta</Text>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Badge
              value="Pregunta"
              status="error"
              containerStyle={{ flex: -1, alignSelf: "flex-start" }}
            />
            <Text style={styles.disscussDate}> | Hace 5 meses</Text>
          </View>
          <Text
            style={{ textAlign: "justify", marginTop: 5, fontWeight: "bold" }}
          >
            {props.route.params.discussTopicTitle}
          </Text>

          <Text style={{ textAlign: "justify", marginTop: 5 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </View>

      <View
        style={{
          borderWidth: 0.5,
          borderColor: "#909090",
          marginTop: 5,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button
          type="clear"
          buttonStyle={{
            width: "100%",
          }}
          titleStyle={{
            color: "#164b6b",
          }}
          icon={
            <Icon
              name="thumbs-o-up"
              type="font-awesome"
              size={20}
              color="#164b6b"
              style={{
                marginRight: 8,
              }}
            />
          }
          title="26"
        />

        <Button
          type="clear"
          buttonStyle={{
            width: "100%",
          }}
          titleStyle={{
            color: "#164b6b",
          }}
          icon={
            <Icon
              name="reply"
              type="font-awesome-5"
              size={20}
              color="#164b6b"
              style={{
                marginRight: 8,
              }}
            />
          }
          title="Responder"
          onPress={() => replyTeacher()}
        />
      </View>
      {teacherTextAreaReplyExpanded && (
        <View>
          <Quill
            style={{ height: 300 }}
            options={{
              placeholder: "",
            }}
            defaultValue=""
            onChange={onChange}
          />
        </View>
      )}

      <View style={styles.disscussContainer}>
        <Avatar
          rounded
          source={require("../../../../../assets/l-8.jpg")}
          size="medium"
        />
        <View style={styles.disscussInfoContainer}>
          <Text style={styles.disscussAuthor}>Arnel Cariaga Hiciano</Text>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={styles.disscussDate}>15-EISN-1-080</Text>
            <Text style={styles.disscussDate}> | Hace 5 meses</Text>
          </View>

          <Card
            containerStyle={{
              marginTop: 5,
              marginLeft: 0,
              backgroundColor: "#ebedf0",
              borderRadius: 5,
            }}
          >
            <Text style={{ textAlign: "justify", fontWeight: "bold" }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </Text>

            <Text style={{ textAlign: "justify" }}>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </Text>

            <View
              style={{
                alignItems: "flex-start",
                marginTop: 5,
              }}
            >
              <Button
                type="clear"
                titleStyle={{
                  color: "#164b6b",
                  fontSize: 13,
                }}
                icon={
                  <Icon
                    name="comment-o"
                    type="font-awesome"
                    size={15}
                    color="#164b6b"
                    style={{
                      marginRight: 8,
                    }}
                  />
                }
                title="Responder"
              />
            </View>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  disscussContainer: {
    flex: -1,
    flexDirection: "row",
    margin: 10,
  },
  disscussInfoContainer: {
    marginLeft: "3%",
    marginRight: "3%",
    flex: 1,
  },
  disscussAuthor: {
    fontWeight: "bold",
  },
  disscussDate: {
    color: "gray",
    fontSize: 13,
  }
});

export default SubjectSingleDisscussTopicsSingle;