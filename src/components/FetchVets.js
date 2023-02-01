import React, { useState } from 'react';
import { View, Text, WebView } from 'react-native';
import { WebViewBridge } from 'react-native-webview-bridge';
import cheerio from 'cheerio-without-node-native';

const App = () => {
  const [coordinates, setCoordinates] = useState([]);

  return (
    <View>
      <WebView
        source={{ uri: 'https://www.google.com/search?rlz=1C1GCEJ_enPK1040PK1040&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzVUjUjOZj5z6ItM8jrzhALvEY-hpg:1675049187014&q=all+vets+in+karachi&rflfq=1&num=10&sa=X&ved=2ahUKEwimvZe-rO78AhUZALcAHQIQAasQjGp6BAgWEAE&biw=1536&bih=754&dpr=1.25#rlfi=hd:;si:;mv:[[24.970585099999997,67.37115039999999],[24.7824206,67.0079629]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14' }}
        onMessage={(event) => {
          const { data } = event.nativeEvent;
          const $ = cheerio.load(data);
          
          const scrapedCoordinates = $('div.section-result-location').map((i, el) => {
            return $(el).text();
          }).get();
          
          setCoordinates(scrapedCoordinates);
        }}
      >
        <WebViewBridge
          onBridgeMessage={(message) => {
            if (message === 'getSource') {
              this.webview.injectJavaScript('document.body.innerHTML');
            }
          }}
        />
      </WebView>
      <Text>{coordinates.join(', ')}</Text>
    </View>
  );
}

export default App;
