import React from "react";
import {
  FontAwesome6,
  Ionicons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import Layout from "./layout";
import AnyScreen from "./anyscreen";

const icon = () => {
  const icons = '<FontAwesome6 name="newspaper" size={28} color="#FF3535" />';
  return (
    <Layout>
      <AnyScreen icon={icons} />
    </Layout>
  );
};

export default icon;
