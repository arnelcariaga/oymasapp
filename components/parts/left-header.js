import React from "react";
import { View } from "react-native";
import { Icon, Button } from "react-native-elements";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const LeftHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginLeft: 10, marginTop: 2 }}>
      <Button
        icon={<Icon name="menu" size={25} color="white" />}
        title=""
        type="clear"
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      />
    </View>
  );
};

export default LeftHeader;