import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Slider } from 'react-native';


export default class App extends React.Component{
  
  constructor (props){
    super(props)
    this.state = {textValue: ""};
    this.state = {bestCaptain: 1}
    this.state = {meaningOfLife: ""}
  }
 
  // const {value} = React.useState('Useless Placeholder')
  render(){
    return (
      
      
      <View style={styles.container}>
        <Text>Olá, esse é meu segundo app</Text>

      <TextInput
        value={this.state.textValue}
        style={{width:"50%", height: 40, borderColor: "green", borderWidth: 2}}
        onChangeText={ (inText) => this.setState({textValue: inText}) }
        maxLength={5}
      ></TextInput>

      <Picker selectedValue={this.state.bestCaptain} style= {{height:200, width: 150}} 
        onValueChange={(inValue, inIndex)=>this.setState({bestCaptain: inValue})}>
          <Picker.Item label="James Kirk" value="james_kirk">
          </Picker.Item>
          <Picker.Item label="John Sheridan" value="jhon_sheridan">
          </Picker.Item>
          <Picker.Item label="Han Solo" value="han_solo">
          </Picker.Item>
          <Picker.Item label="Ahab" value="ahab">
          </Picker.Item>
      </Picker>

      <Slider style={{width: "75%"}}
       step={1} minimumValue={0} maximumValue={84} value={this.state.meaningOfLif} onValueChange={inValue => this.setState({meaningOfLif: inValue})}></Slider>

       <TextInput valu={"Testet"}></TextInput>
  
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    // height: 400,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
