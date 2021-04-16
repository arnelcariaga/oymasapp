import React from "react";
import { Icon } from "react-native-elements";

import { createDrawerNavigator } from "@react-navigation/drawer";

//SCREENS
import IndexTabs from "../Index/";
import AnnoucementTabs from "../annoucement/annoucementTabs";
import SubjectsTabs from "../subjects/subjectsTabs";
import ForumTabs from "../forum/forumTabs";
import AssignmentTabs from "../assignment/assignmentTabs";
import ConferencesTabs from "../conferences/conferencesTabs";
import DigitalResources from "../digital-resources/digital-resourcesTabs";
import FaqsTabs from "../faqs/faqsTabs";

const drawerOptions = (iconName, iconType) => {
  return {
    drawerIcon: ({ focused, color, size }) => (
      <Icon name={iconName} size={size} type={iconType} color={color} />
    ),
  };
};

//DRAWER
const AppDrawerNavigator = createDrawerNavigator();

function Drawer() {
  return (
    <AppDrawerNavigator.Navigator drawerType="back">
      <AppDrawerNavigator.Screen
        name="Inicio"
        component={IndexTabs}
        options={drawerOptions("house-user", "font-awesome-5")}
      />
      <AppDrawerNavigator.Screen
        name="Anuncios"
        component={AnnoucementTabs}
        options={drawerOptions("bell", "font-awesome")}
      />
      <AppDrawerNavigator.Screen
        name="Asignaturas"
        component={SubjectsTabs}
        options={drawerOptions("book", "font-awesome-5")}
      />
      <AppDrawerNavigator.Screen
        name="Foro de discusi&oacute;n"
        component={ForumTabs}
        options={drawerOptions("comments", "font-awesome")}
      />
      <AppDrawerNavigator.Screen
        name="Asignaci&oacute;n"
        component={AssignmentTabs}
        options={drawerOptions("receipt", "font-awesome-5")}
      />
      <AppDrawerNavigator.Screen
        name="Videoconferencias"
        component={ConferencesTabs}
        options={drawerOptions("users", "font-awesome-5")}
      />
      <AppDrawerNavigator.Screen
        name="Recursos digitales"
        component={DigitalResources}
        options={drawerOptions("swatchbook", "font-awesome-5")}
      />
      <AppDrawerNavigator.Screen
        name="Preguntas frecuentes"
        component={FaqsTabs}
        options={drawerOptions("question-circle", "font-awesome")}
      />
    </AppDrawerNavigator.Navigator>
  );
}
export default Drawer;