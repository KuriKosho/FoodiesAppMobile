// AnyScreen.js
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Layout from "../jsx/layouts/body/Layout"; // Import the Layout component
import DynamicIcon from "../jsx/components/Icon/DynamicIcon";

const AnyScreen = () => {
  return (
    <Layout>
      <Text>This content will be inside the layout.</Text>
      {/* <DynamicIcon 
        library={"FontAwesome6"} 
        name={"at"} 
        color={"#000"} 
        size={24}/> */}
    </Layout>
  );
};

export default AnyScreen;
