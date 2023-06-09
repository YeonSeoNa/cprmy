import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
//import MapContainer from "../components/MapContainer";
import MapContainer from '../components/MapContainer'



const ComunitySection = styled.div`
  border-top: 87px solid pink;
  .row {
    padding: 50px 0;
  }
  ul {
    max-height: 300px;
    overflow-y: auto;
    border: 1px solid #000;
  }
  .maps{ padding: 50px 50px;}
`;

const Community = () => {
  const [place, setPlace] = useState([]);
  const [city, setCity] = useState("서울특별시");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");

  const getData = async (city) => {
    try {
      const response = await axios.get(
        `https://apis.data.go.kr/B552657/AEDInfoInqireService/getAedLcinfoInqire?serviceKey=vDb2EVp9Q%2BES37mSsmcEHxZ%2Bydtef5ex9X9Zw2OYTPcRZxdRJalPPZSuMGBzagcEZbG8B%2FRl4cEl33c19P74Ug%3D%3D&Q0=${city}&pageNo=1&numOfRows=1000`
      );
      console.log(response.data.response.body.items.item);
      const placeData = response.data.response.body.items.item;
      setPlace(placeData);

      // Extract unique districts from placeData
      const uniqueDistricts = [...new Set(placeData.map((data) => data.buildAddress.split(" ")[1]))];
      setDistricts(uniqueDistricts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setCity(selectedCity);
    setSelectedDistrict(""); // Reset the selected district
    getData(selectedCity);
  };

  const MapMarker = ({ selectedAddress }) => {
    // ...
  };
  

  const handleDistrictChange = (event) => {
    const selectedAddress = event.target.value;
    setSelectedDistrict(selectedAddress);
  };

  useEffect(() => {
    getData(city);
  }, [city]);

  return (
    <ComunitySection>
      <div className="row">
        <h2>전국 위치</h2>
        <div>
          <label htmlFor="citySelect">시/도:</label>
          <select id="citySelect" value={city} onChange={handleCityChange}>
            <option value="서울특별시">서울특별시</option>
            <option value="경기도">경기도</option>
            <option value="부산광역시">부산광역시</option>
            <option value="대구광역시">대구광역시</option>
            <option value="인천광역시">인천광역시</option>
            <option value="울산광역시">울산광역시</option>
            <option value="광주광역시">광주광역시</option>
            <option value="대전광역시">대전광역시</option>
            <option value="세종특별자치시">세종특별자치시</option>
            <option value="제주특별자치도">제주특별자치도</option>
          </select>
        </div>

        {districts.length > 0 && (
          <div>
            <label htmlFor="districtSelect">구:</label>
            <select id="districtSelect" value={selectedAddress} onChange={handleDistrictChange}>
              <option value="">전체</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
        )}

        <ul>
          {place.map((data, index) => {
            if (selectedDistrict === "" || data.buildAddress.includes(selectedDistrict)) {
              return <li key={index}>{data.buildAddress}</li>;
            }
            return null;
          })}
        </ul>
      </div>
      <div className="maps">
       <MapContainer/>
      </div>
    </ComunitySection>
  );
};


export default Community;