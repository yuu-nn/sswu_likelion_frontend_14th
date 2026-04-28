import React, { useEffect, useRef } from "react";


export const Map = () => {
  const container = useRef(null);

  useEffect(() => {
    const { kakao } = window;

    if (!kakao) {
      console.error("카카오맵 SDK가 로드되지 않았습니다.");
      return;
    }

    const position = new kakao.maps.LatLng(37.591310, 127.022131);

    const options = {
      center: position,
      level: 3,
    };

    const map = new kakao.maps.Map(container.current, options);

    
    const places = [
      { lat: 37.5912246, lng: 127.0205596 },
      { lat: 37.592253, lng: 127.0180602 },
      { lat: 37.5932322, lng: 127.0148937 }
    ];

    
    const markerImage = new kakao.maps.MarkerImage(
      "/Vector.png", 
      new kakao.maps.Size(40, 52)
    );

    
    places.forEach((place) => {
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(place.lat, place.lng),
        image: markerImage
      });

      marker.setMap(map);
    });
  }, []);
  

  return (
    <div
      ref={container}
      id="map"
      style={{ width: "100%", height: "100vh" }}
    ></div>
  );
};