// MapComponent.js

import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const initMap = () => {
      const collegeCoordinates = { lat: 19.266943351121476, lng: 72.98157283483039 };

      const mapOptions = {
        center: collegeCoordinates,
        zoom: 15,
      };

      const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

    
      new window.google.maps.Marker({
        position: collegeCoordinates,
        map: map,
        title: 'Your College Location',
      });

    
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userCoordinates = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            
            new window.google.maps.Marker({
              position: userCoordinates,
              map: map,
              title: 'Your Location',
            });

          
            map.setCenter(userCoordinates);
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser');
      }
    };

    
    if (window.google && window.google.maps) {
      initMap();
    } else {
      
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDcKTtGZI4GW48ZQ1xsffSBjI0cB2RNFQg&libraries=places&callback=initMap`;
      script.defer = true;
      document.head.appendChild(script);

    
      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  return <div id="map" style={{ height: '400px' }}></div>;
};

export default MapComponent;

