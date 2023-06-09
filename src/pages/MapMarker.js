// import React, { useEffect, useRef } from "react";

// const MapMarker = ({ address }) => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     const mapOptions = {
//       center: new window.kakao.maps.LatLng(37.5665, 126.9780), // Default center point (Seoul)
//       level: 7, // Default zoom level
//     };

//     const map = new window.kakao.maps.Map(mapRef.current, mapOptions);

//     // Geocode the selected address
//     window.kakao.maps.services.Geocoder.addressSearch(selectedAddress, (result, status) => {
//         if (status === window.kakao.maps.services.Status.OK) {
//           const markerPosition = new window.kakao.maps.LatLng(result[0].y, result[0].x);
//           const marker = new window.kakao.maps.Marker({ position: markerPosition });
//           marker.setMap(map);
//           map.setCenter(markerPosition);
//         }
//       });
//     }, [selectedAddress]);

//   return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
// };

// export default MapMarker;