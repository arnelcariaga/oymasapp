import React from "react";
import { ScrollView } from "react-native";
import { CheckBox, Image } from "react-native-elements";

const Settings = () => {
  return (
      <ScrollView>
        <CheckBox title="Click Here" checked={true} />

        <CheckBox center title="Click Here" checked={false} />

        <CheckBox
          center
          title="Click Here"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={true}
        />

        <CheckBox
          center
          title="Click Here to Remove This Item"
          iconRight
          iconType="material"
          checkedIcon="clear"
          uncheckedIcon="add"
          checkedColor="red"
          checked={false}
        />

        <CheckBox
          checkedIcon={<Image source={require("../../assets/l-11.jpg")} />}
          uncheckedIcon={
            <Image source={require("../../assets/iconLogo.png")} />
          }
          checked={true}
          onPress={() => {}}
        />
      </ScrollView>
  );
};

export default Settings;