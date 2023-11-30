import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  PermissionsAndroid,
  Image,
} from 'react-native';
import MapView, {Callout, LatLng, Marker} from 'react-native-maps';

const DATA = [
  {
    id: 1,
    name: 'First Item',
    address: 'sdsd sd sd ',
    latitude: 20.9796503,
    longitude: 105.79309915,
  },
  {
    id: 2,
    name: 'Firsds7d6s7d6sst Item',
    address: 'sdsd sd sd ',
    latitude: 20.996503,
    longitude: 105.73909915,
  },
  {
    id: 3,
    name: 'Fidsdsdsds dsrst Item',
    address: 'sdsd sd sd ',
    latitude: 20.97936503,
    longitude: 105.7909915,
  },
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ListParking() {
  const navigation = useNavigation();

  const [typeList, setTypeList] = useState('list');

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
      <TouchableOpacity
        style={styles.buttonType}
        onPress={() => setTypeList(typeList === 'list' ? 'map' : 'list')}>
        <Text style={{color: '#fff', fontWeight: '600'}}>
          {typeList === 'list' ? 'Bản đồ' : 'Danh sách'}
        </Text>
      </TouchableOpacity>

      {typeList === 'list' ? (
        <FlatList
          contentContainerStyle={styles.list}
          data={DATA}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('CarDetail', {park: item})}
              style={styles.item}>
              <Image
                source={require('../../assets/images/icon_location.png')}
                style={styles.icon}
                resizeMode="cover"
              />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text>Địa chỉ: {item.address}</Text>
                <Text>Trạng thái: 5/12</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <MapView
          showsUserLocation
          showsMyLocationButton
          style={{
            width: windowWidth,
            height: windowHeight,
          }}
          region={{
            latitude: 20.9803105,
            longitude: 105.783827,
            latitudeDelta: 0.02,
            longitudeDelta: 0.022,
          }}>
          {DATA.map((park, index) => (
            <Marker key={index} coordinate={park as unknown as LatLng}>
              <Callout
                tooltip
                onPress={() => navigation.navigate('CarDetail', {park: park})}>
                <View style={styles.callout}>
                  <Text style={styles.nameCallout}>{park.name}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: 'relative',
  },
  item: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#eff6ff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#93c5fd',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
  },
  callout: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#60a5fa',
    borderRadius: 10,
  },
  nameCallout: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  buttonType: {
    position: 'absolute',
    zIndex: 100,
    top: 20,
    right: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#60a5fa',
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 70,
  },
  icon: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
});

export default ListParking;
