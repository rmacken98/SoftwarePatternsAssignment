import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
// import { Input } from "../components/input";
import { Button } from "./components/Button";
import {getFromFirestore} from './Firebase';
import { ListItem, Divider } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';

class ItemList extends Component {
  static navigationOptions = ({ navigation }) => {
let s = 15
   

    return {
      
    //  title: 'Shopping',
    //         headerRight: (
    //             <Button
    //             title= {s.toString()}
    //             onPress={handleSignout = () => {
    //                 Firebase.auth().signOut()
    //                 .then(() => navigation.navigate("Login"))
    //             }}
    //             />)
    }
  };

  state = {
    ItemList: [],
    selectedIndex: 0,
    counter:0
  }

 
  incrementCount() {
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {counter: state.counter + 1}
    });
  }
  onReceived = (list,x) => {
    this.setState(prevState => ({
      ItemList: prevState.ItemList = list
    }));
  }

  componentDidMount() {
    getFromFirestore('Items',this.onReceived);
  }

 

  render() {

    return this.state.ItemList.length > 0 ?

      <SafeAreaView style={styles.container}>
      <TouchableHighlight>
      <Text> {this.state.counter} </Text>
      </TouchableHighlight>
        <FlatList
          data={this.state.ItemList}
          ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
          keyExtractor={(item, index) => index.toString()}
          
          renderItem={({ item, index }) => {
            return (
              
 
              <ListItem
                containerStyle={styles.listItem}
                title={item.name}
               
                titleStyle={styles.titleStyle}
                subtitle={item.details}
                subtitleStyle={styles.subtitleStyle}
                rightSubtitle={item.price}
              
                onPress={() => {
                 this.incrementCount()
                  this.setState(prevState => ({ selectedIndex: prevState.selectedIndex = index }))
                  // this.props.navigation.navigate("checkoutScreen", {userto: item})
                }
                }

              />
            );
          }
          }
        />
      
      </SafeAreaView> :
      <View style={styles.textContainer}>
        <Text style={styles.emptyTitle}>No Items found</Text>
       
       
      </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listItem: {
    marginTop: 8,
    marginBottom: 8
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 30
  },
  subtitleStyle: {
    fontSize: 18
  },
  emptyTitle: {
    fontSize: 32,
    marginBottom: 16
  },
  emptySubtitle: {
    fontSize: 18,
    fontStyle: 'italic'
  }
});

export default ItemList;