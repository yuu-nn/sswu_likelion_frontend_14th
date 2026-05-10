import React, { useEffect, useState } from "react";

function CrimeStats() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const serviceKey = "8333b070f9b8c8c483c1be880949bd4743e940cd0acfb228c47c9c11c7b7eda5";
    const url = `https://apis.data.go.kr/6480000/gnPolcCntVsCrmnlOccrrncRtNdArrstRtDataService/getgnPolcCntVsCrmnlOccrrncRtNdArrstRtData?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&resultType=json`;

  fetch(url)
    .then(res => res.json())
    .then(json => {
      const items = json.getgnPolcCntVsCrmnlOccrrncRtNdArrstRtData?.body?.items?.item;
      if (items) setData(items);
      else console.warn("데이터가 비어있음");
    })
    .catch(err => console.error(err));
}, []);

  return (
    <div>
      <h1>경상남도 경찰서별 범죄 현황</h1>
      <table border="1">
        <thead>
          <tr>
            <th>경찰서</th>
            <th>총 인구</th>
            <th>경찰 인원</th>
            <th>살인 발생</th>
            <th>살인 검거</th>
            <th>강도 발생</th>
            <th>강도 검거</th>
            <th>강간 발생</th>
            <th>강간 검거</th>
            <th>절도 발생</th>
            <th>절도 검거</th>
            <th>폭력 발생</th>
            <th>폭력 검거</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{item.polcsttn_nm}</td>
              <td>{item.tot_popltn}</td>
              <td>{item.polc_nmpr}</td>
              <td>{item.murder_occrrnc_cnt}</td>
              <td>{item.murder_arrest_cnt}</td>
              <td>{item.brglr_occrrnc_cnt}</td>
              <td>{item.brglr_arrest_cnt}</td>
              <td>{item.rape_occrrnc_cnt}</td>
              <td>{item.rape_arrest_cnt}</td>
              <td>{item.theft_occrrnc_cnt}</td>
              <td>{item.theft_arrest_cnt}</td>
              <td>{item.violnc_occrrnc_cnt}</td>
              <td>{item.violnc_arrest_cnt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CrimeStats;