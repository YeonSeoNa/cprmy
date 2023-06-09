import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { ImSpinner } from 'react-icons/im';

const ComunitySection = styled.div`
border-top:87px solid pink;
    .row {padding:50px 0}
    .load { color:#000; font-size:100px; 
        display:flex; justify-content:center; align-items:center;
        .loadIcon { animation:loadSpin 5s linear infinite }
        @keyframes loadSpin {
            0% { transform:rotate(0deg) }
            100% { transform:rotate(3turn) }
        }
    }
    //ul {max-height:300px; overflow-y:auto; border:1px solid #000}

`

const Community = () => {
    const [loading, setLoading] = useState(false);
    const [place, setPlace] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://apis.data.go.kr/B552657/AEDInfoInqireService/getAedLcinfoInqire?serviceKey=vDb2EVp9Q%2BES37mSsmcEHxZ%2Bydtef5ex9X9Zw2OYTPcRZxdRJalPPZSuMGBzagcEZbG8B%2FRl4cEl33c19P74Ug%3D%3D&pageNo=1&numOfRows=300'
        );
        console.log(response.data.response.body.items.item);
        setLoading(true);
        setPlace(response.data.response.body.items.item);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    useEffect(() => {
      if (searchValue.trim() !== '') {
        const filteredResults = place.filter((data) =>
          data.buildAddress.includes(searchValue)
        );
        setSearchResults(filteredResults);
      } else {
        setSearchResults([]);
      }
    }, [searchValue, place]);
  
    const handleSearchChange = (event) => {
      setSearchValue(event.target.value);
    };
  
    if (!loading) {
      return (
        <ComunitySection>
          <div className="row">
            <div className="load">
              <ImSpinner className="loadIcon" />
            </div>
          </div>
        </ComunitySection>
      );
    } else {
      return (
        <ComunitySection>
          <div className="row">
            <h2>전국 위치</h2>
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchChange}
              />

            <ul>
              {searchResults.length > 0 ? (
                searchResults.map((data, index) => (
                  <li key={index}>
                    <p>{data.buildAddress}</p>
                    <p>{data.buildPlace}</p>
                  </li>
                ))
              ) : (
                <li></li>
              )}
            </ul>
            </div>
      </ComunitySection>
    );
  }
};

export default Community;