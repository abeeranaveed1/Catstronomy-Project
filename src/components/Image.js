import React, {useState, useCallback} from 'react';
import { Button, Image, View} from 'react-native';

import * as ImagePicker from 'expo-image-picker';


const TomarFoto = () => {
  const [photo, setPhotoURI] = useState(null);
  const tomarFoto = useCallback(() => {
    ImagePicker.launchCamera({}, (response) => {
      console.log('Respuesta =', response);
      setPhotoURI(response.uri); // update the local state, this will rerender your TomarFoto component with the photo uri path.
      if (response.didCancel) {
        alert('Subida cancelada');
      } else if (response.error) {
        alert('Error encontrado: ', error);
      } else {
        const source = {uri:response.uri};
      }
    });
  }, [setPhotoURI]);

 return (

  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    {photo && (
      <Image
        source={{ uri: photo }}
        style={ { width: 300, height: 300 } }
      />
    )}
  <Button title="Adjuntar foto" onPress={tomarFoto} />
</View>
 ); 
};


export default TomarFoto;


