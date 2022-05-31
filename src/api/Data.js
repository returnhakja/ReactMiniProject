// function parseStr(dataSet) {
//     const dataArr = new XMLParser().parseFromString(dataSet).children;
//     console.log(dataArr);
//   }

import axios from "axios";
import { useEffect } from "react/cjs/react.production.min";

//   const [travelsite, setTravelSite] = useState([]);
//   useEffect(() => {
//     axios
//       .get(
//         "/getAttractionKr?serviceKey=jIOntE9gO%2FGbEdIL68gTGVa05rWl0dDOGukYYzSZEqaHI7NfYbrgdx1tDFhu%2FcLwvyS4I7CdONwdO2w6EwJvnA%3D%3D&pageNo=1&numOfRows=10&resultType=json",
//         {
//           headers: new Headers({
//             "content-type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "GET, POST, PUT",
//             "Access-Control-Allow-Headers": "Content-Type",
//           }),
//           mode: "no-cors",
//         }
//       )
//       .then((res) => console.log(res.data))
//       .catch((err) => console.log(err));
//     // .then((d) => {
//     //   var xml = new XMLParser().parseFromString(d.data);
//     //   console.log(xml.children[0].children);
//     // });

//     // async function getAPI() {
//     //   await axios({
//     //     method: "get",
//     //     url: "/getAttractionKr?serviceKey=jIOntE9gO%2FGbEdIL68gTGVa05rWl0dDOGukYYzSZEqaHI7NfYbrgdx1tDFhu%2FcLwvyS4I7CdONwdO2w6EwJvnA%3D%3D&pageNo=1&numOfRows=10",
//     //     headers: new Headers({
//     //       // Accept: "xml",
//     //       // Accept: "xml",
//     //       // "content-type": "application/x-www-form-urlencoded",
//     //       "content-type": "application/json",
//     //       "Access-Control-Allow-Origin": "*",
//     //       "Access-Control-Allow-Methods": "GET, POST, PUT",
//     //       // "Access-Control-Allow-Headers": "Content-Type",
//     //     }),
//     //   }).then(function (response) {
//     //     const dataSet = response.data;
//     //     console.log(dataSet);
//     //     // parseStr(dataSet);
//     //   });
//     // }
//     // getAPI();
//   }, []);
//   return <div></div>;
// }

// useEffect(()=> {
//     const getData = async() => {
//         try{
//             const response = await axios.get("https://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=jIOntE9gO%2FGbEdIL68gTGVa05rWl0dDOGukYYzSZEqaHI7NfYbrgdx1tDFhu%2FcLwvyS4I7CdONwdO2w6EwJvnA%3D%3D&pageNo=1&numOfRows=10&resultType=json")
//             const data = response.data
//             console.log(data)
//         } catch(error){
//             console.log(error)
//         }
//     }
//     getData();
// })
