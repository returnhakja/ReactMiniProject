import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import XMLParser from "react-xml-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const travelData = {
  UC_SEQ: 259,
  MAIN_TITLE: "죽성성당",
  GUGUN_NM: "기장군",
  LAT: 35.241013,
  LNG: 129.24864,
  PLACE: "죽성성당",
  TITLE: "기장바다의 색다른 풍경 죽성성당",
  SUBTITLE: "드라마 세트장의 놀라운 변화",
  ADDR1: "부산광역시 기장군 기장읍 죽성리 134-7",
  CNTCT_TEL: "",
  HOMEPAGE_URL: "",
  TRFC_INFO:
    "버스 해운대온천사거리 정류장 급행 1003 버스 → 기장성당 하차 → 마을버스 6 환승 → 두호마을 하차\n마을버스 기장군청 정류장 마을버스 6 → 두호마을 하차\n주차 죽성성당 인근 주차장 (유료)",
  USAGE_DAY: "",
  HLDY_INFO: "",
  USAGE_DAY_WEEK_AND_TIME: "상시",
  USAGE_AMOUNT: "무료",
  MIDDLE_SIZE_RM1: "휠체어 접근 가능",
  MAIN_IMG_NORMAL:
    "https://www.visitbusan.net/uploadImgs/files/cntnts/20191222181829937_ttiel",
  MAIN_IMG_THUMB:
    "https://www.visitbusan.net/uploadImgs/files/cntnts/20191222181829937_thumbL",
  ITEMCNTNTS:
    "동해바다의 에메랄드빛을 고스란히 담고 있는 기장 앞바다는 이제 많은 이들이 찾는 곳이 됐다. 날이 좋으면 좋은 대로, 날이 흐리면 흐린 대로 드라이브하기 더없이 좋은 코스에 경치 좋은 낭만카페를 찾아 기장으로 오는 사람들. 이들이 빼놓지 않고 찾는 곳, 기장의 죽성성당이다.\n부산 기장군 죽성리에 위치한 죽성성당은 작은 어촌마을에 위치한 지리적 특성 덕분인지 남다른 분위기를 간직하고 있다. 중세시대의 어느 바닷가 마을을 그대로 옮겨 놓은 것 같은 풍경은 마치 한 폭의 그림 같다. 바위 위로 부서지는 하얀 포말은 성당의 붉은 지붕과 대비되어 이곳을 찾는 이들의 시선을 한눈에 사로잡는다.\n금방이라도 미사시간을 알리는 종이 울릴 것만 같지만, 이 공간은 2009년 SBS 드라마 ‘드림’을 촬영하기 위해 지어진 드라마 세트장이다. 오래 전 방영된 드라마는 잊혀졌지만 잘 만들어진 이 공간만큼은 기장을 찾는 여행객의 필수 코스라고 할 정도로 명소가 되었다.\n죽성성당에서 가장 많은 이들이 줄을 서서 기다리는 곳은 마치 액자의 프레임을 그대로 옮겨 놓은 듯한 포토존이다. 액자 속으로 들어간 푸른 바다와 하늘이 더없이 아름다운 배경을 만들어 준다. 탁 트인 바다를 바라보며 혼자만의 시간을 가져도 좋고 사랑하는 이와 알콩달콩 영화를 찍어도 예뻐만 보인다. 성당을 둘러싼 주변 경치가 어느 것 하나 놓칠 수 없다. 성당 옆 울퉁불퉁 기묘한 너럭바위는 탁 트인 바다를 온몸으로 만끽할 수 있는 천혜의 장소다. 해운대나 광안리 해변의 모습과는 달리 작은 바닷가 마을의 한적한 정취를 느끼고 싶다면 이만한 곳도 없다. 성당 내부는 갤러리로 운영되고 있어서 운 좋게 전시일정과 겹친다면 뜻하지 않은 볼거리를 경험할 수 있다.\n성당에서 도보로 10분 정도의 거리에 위치한 죽성리 해송도 특이한 풍경 중 하나다. 이 해송은 5그루의 나무가 모여 마치 한 그루의 큰 나무처럼 보이는 노거수로 수령은 약 250년∼300년으로 추정된다. 예로부터 동네 사람들이 풍어제를 지내던 곳으로, 서낭신을 모신 국수당이 있어 민속적 가치가 높은 곳이다. 아래로 축축 늘어진 노송 가지가 마치 여행자를 부르는 것만 같다.\n죽성성당은 푸른 하늘, 끝없는 바다와 어우러져 한층 그 매력을 더한다. 시원한 바람과 철썩이는 파도소리가 상쾌한 기운을 만든다. 붉은 뾰족 지붕의 성당과 대자연의 만남은 바쁜 일상을 살아가는 현대인의 작은 낙원일지도 모른다.\n\n\n",
};
function DetailPage() {
  function switchImo(word) {
    const val = word.split(" ");
    console.log(val);
    for (let i = 0; i < word.length; i++) {
      console.log(val[i].includes("버스"));
      if (val[i].includes("버스")) {
        return word.replace(val[i], "🚌");
      }
    }
  }
  const [count, setCount] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "/getAttractionKr?serviceKey=jIOntE9gO%2FGbEdIL68gTGVa05rWl0dDOGukYYzSZEqaHI7NfYbrgdx1tDFhu%2FcLwvyS4I7CdONwdO2w6EwJvnA%3D%3D&pageNo=1&numOfRows=100&resultType=json"
        );
        const data = JSON.stringify(response);
        const dataJson = JSON.parse(data);
        console.log(dataJson.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="contents">
          <div className="imgContent">
            <img src={travelData.MAIN_IMG_NORMAL} alt="" />
            <p>죽성성당</p>
            <div>
              <button>👍 1</button>
              <button>👎 0</button>
            </div>
          </div>

          <div className="detailInfo">
            <div className="detailTitle">
              <h2>{travelData.MAIN_TITLE}</h2>
              <p>{travelData.TITLE}</p>
            </div>
            <div className="detailContent">
              <p>휠체어 가능: {travelData.MIDDLE_SIZE_RM1}</p>
              <p>입장료: {travelData.USAGE_AMOUNT}</p>
              <p>오시는 길 : {switchImo(travelData.TRFC_INFO)}</p>
              <p>이용 가능 시간: {travelData.USAGE_DAY_WEEK_AND_TIME}</p>
              <p onClick={() => {}}>
                <FontAwesomeIcon icon={faCaretDown} />
                {travelData.ITEMCNTNTS}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div> */}
    </div>
  );
}

export default DetailPage;
