import React from 'react';
import { TextInput, StyleSheet, Text, Modal, View, Alert, TouchableOpacity, TouchableHighlight, Button, Image, FlatList, ScrollView } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as FaceDetector from 'expo-face-detector';
import Navigation from './config/navigaion'
import { Camera } from 'expo-camera';

export default class App extends React.Component {
  state = {
    hasCameraPermission: null,
    list: [],
    type: Camera.Constants.Type.back,
    modalVisible: false,
    screen: false
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  renderModal() {
    return <Modal
      animationType="slide"
      presentationStyle="pageSheet"
      transparent={true}
      visible={this.state.modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={{ margin: 50, borderWidth: 2, backgroundColor: 'white' }}>
        <View>
          <Text>Hello World!</Text>

          <TouchableHighlight
            onPress={() => {
              this.setState({ modalVisible: false })
            }}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  }

  async capture() {
    const photo = await this.camera.takePictureAsync();
    console.log('photo *********', photo);
    const options = { mode: FaceDetector.Constants.Mode.fast };
    const detect = await FaceDetector.detectFacesAsync(photo.uri, options);
    console.log("detect===>", detect)
    this.setState({ photo: photo.uri, screen: true })
  }
  openCamera() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        this.state.photo ? <Image
          source={{ uri: this.state.photo }}
          style={{ flex: 1 }}
        /> : <View style={{ flex: 1 }}>
            <Camera
              ref={ref => {
                this.camera = ref;
              }}
              style={{ flex: 1 }}
              type={this.state.type}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({
                      type:
                        this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back,
                    });
                  }}>
                  <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignSelf: 'flex-end',
                    alignItems: 'flex-end',
                  }}
                  onPress={() => this.capture()}>
                  <Image
                    source={{ uri: 'https://icon2.kisspng.com/20180409/gve/kisspng-photography-computer-icons-camera-encapsulated-pos-camera-icon-5acb0a389c10d6.8659591015232558646393.jpg' }}
                    style={{ width: 100, height: 100 }}
                  />
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
      );
    }
  }
  // renderScreen() {
  //   return (
  //     <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

  //     </View>
  //   )
  // }
  render() {
    return (
      this.state.screen ? <Navigation /> : this.openCamera()
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});