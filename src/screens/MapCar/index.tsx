import React, {useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import MapView, {LatLng, Marker} from 'react-native-maps';
import {Dimensions} from 'react-native';
import {useRoute} from '@react-navigation/native';
import MapPark from '../../component/MapPark';

const windowWidth = Dimensions.get('window').width;

function MapCar() {
  const route = useRoute();
  const parkInit = route.params?.park as any;

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const requestLocationPermission = async (): Promise<void> => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // getOneTimeLocation();
        }
      } catch (err) {
        //
      }
    };
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.root}>
      <MapView
        showsUserLocation
        showsMyLocationButton
        style={{
          width: windowWidth,
          height: 200,
        }}
        region={{
          latitude: parkInit.latitude,
          longitude: parkInit.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={parkInit as unknown as LatLng} />
      </MapView>
      <Text style={styles.name}>Bãi đỗ: {parkInit.name}</Text>

      <View style={styles.svgWrap}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MapPark width={windowWidth - 55} status={{}} />
        </ScrollView>
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textButton}>Đặt chỗ</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Hello World!</Text>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.6}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textButton}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 16,
    marginVertical: 20,
  },
  svgWrap: {
    flex: 1,
    marginHorizontal: 16,
    borderWidth: 2,
    padding: 10,
    borderColor: '#60a5fa',
    borderRadius: 20,
  },
  button: {
    width: windowWidth - 32,
    borderRadius: 50,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#0ea5e9',
    marginHorizontal: 16,
    marginVertical: 20,
  },
  textButton: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  modalView: {
    backgroundColor: '#dbeafe',
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
});

export default MapCar;
