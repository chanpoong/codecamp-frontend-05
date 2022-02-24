// Kakao Map appKey: b01d65e21d48e9aeaf9d190e4949e5e0

import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    //맵에 관련한 데이터를 이 부분에서 직접 다운로드하고 다운로드 완료 전에는 실행되지 않게 설정
    const script = document.createElement("script"); //스크립트 태그를 직접 생성
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=b01d65e21d48e9aeaf9d190e4949e5e0&autoload=false&libraries=services"; //직접 만든 스크립트 태그의 src설정
    document.head.appendChild(script); // HTML문서의 헤드 태그에 자식노드로 직접 생성한 스크립트를 푸쉬

    //스크립트 로드가 완료되면 중괄호 내부의 코드를 실행
    script.onload = () => {
      window.kakao.maps.load(function () {
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            // var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
            // message += '경도는 ' + latlng.getLng() + ' 입니다';

            // var resultDiv = document.getElementById('clickLatlng');
            // resultDiv.innerHTML = message;
          }
        );
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          "제주특별자치도 제주시 첨단로 242",
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  });

  return (
    <div>
      {/* <Head>
               <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b01d65e21d48e9aeaf9d190e4949e5e0"></script>
            </Head> */}
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </div>
  );
}
