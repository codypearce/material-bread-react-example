import React, { Component } from "react";
import { View, Image } from "react-native";
import { Appbar, Fab, Heading, Badge, IconButton } from "material-bread";

class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar
          barType={"normal"}
          title={"Page Title"}
          navigationType={"menu"}
          onNavigation={() => console.log("onNavigation!")}
          actionItems={[
            <Badge
              key={3}
              containerStyle={{ marginRight: 16, flex: 1 }}
              color={"#e10050"}
              textColor={"white"}
              size={14}
              content={77}
            >
              <IconButton name="favorite" size={24} color={"white"} />
            </Badge>,
            { name: "search", onPress: () => console.log("onSearch") },
            { name: "more-vert" }
          ]}
        />
        <Image
          source={require("../assets/material-bread.png")}
          style={styles.logo}
        />
        <Heading style={styles.title}>Material Bread</Heading>
        <View style={styles.content}>
          <Fab style={styles.fab} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    position: "relative",
    width: "100%",
    height: "100%",
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  logo: {
    width: 300,
    height: 250,
    alignSelf: "center",
    marginTop: 20
  },
  title: {
    fontSize: 48,
    textAlign: "center",
    marginTop: 40
  },
  fab: {
    position: "absolute",
    right: 24,
    bottom: 24
  }
};

export default Index;
