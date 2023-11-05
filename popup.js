// document.addEventListener('DOMContentLoaded', function () {
//     // Accessing an element by its ID
//     var videoIdInp = document.getElementById('videoId');

//     // Getting the active tab
//     chrome.tabs.query({ active: true }, function (tabs) {
//         var url = tabs[0].url;
//         url = url.split("=")[1]
//         if (url.includes("&")) {
//             url = url.split("&")[0]
//         }
//         var videoId = url
//         videoIdInp.value = videoId


//         url = "https://youtubefetch.onrender.com/url";

//         fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ userUrl: videoId }),
//         })
//             .then((response) => response.json())
//             .then((data) => console.log(data))
//             .catch((error) => console.error(error));
//     });
// });



// // const myInterval = setInterval(checkUrl, 1000)

// // function checkUrl() {
// //     console.log("CHECKING")
// //     if (document.getElementById("videoId").value != null) {
// //         var videoId = document.getElementById("videoId").value
// //         console.log(videoId)
// //         clearInterval(myInterval)
// //     }
// // }

