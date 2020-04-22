import React from "react";
import {
  View,
  StyleSheet,
  Text
} from "react-native";
import Firebase from "./FirebaseConfig";
import {addToFirestore} from "./Firebase"
import { Input } from "./components/input";
import { Button } from "./components/Button";

class Signup extends React.Component {


  handleSignUp = () => {
    const { email, password} = this.state;
    
    
    const user={uuid: this.state.uuid, name: this.state.name, email: email, shippingAddress: this.state.shippingAddress,paymentMethod:this.state.paymentMethod}
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
       
  
      .catch(error => console.log(error));
      Firebase.firestore()
      .collection('SkateSpots')
      .add(user)
      .then((snapshot)=>{
        user.id = snapshot.id;
        snapshot.set(user);
      })

      this.props.navigation.navigate("ItemList")}
  state = {
    name: "",
    email: "",
    password: "",
    uuid:"",
    shippingAddress:"",
    paymentMethod:""
  };

  render() {
    return (
      <View>
        <Input
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
          placeholder="Name"
        />
        <Input
          style={styles.inputBox}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder="Email"
          autoCapitalize="none"
        />
        <Input
          style={styles.inputBox}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder="Password"
          secureTextEntry={true}
        />
         <Input
          style={styles.inputBox}
          value={this.state.shippingAddress}
          onChangeText={shippingAddress => this.setState({ shippingAddress })}
          placeholder="ShippingAddress"
        
        />
         <Input
          style={styles.inputBox}
          value={this.state.paymentMethod}
          onChangeText={paymentMethod => this.setState({ paymentMethod })}
          placeholder="paymentMethod"
          
        />
        <Button onPress={this.handleSignUp}>
          <Text>Signup</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  form: {
    flex: 1
  }
});

export default Signup;
