// fetch("https://api.example.com/data")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Fetch error:", error));

// fetch("https://api.example.com/data")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) =>
//     console.error("There has been a problem with your fetch operation:", error)
//   );

// fetch("https://api.example.com/data")
//   .then((response) => {
//     if (response.ok) {
//       return response.json(); // or response.text(), response.blob(), etc.
//     } else {
//       throw new Error("Network response was not ok");
//     }
//   })
//   .then((data) => {
//     // Process the data
//     console.log(data);
//   })
//   .catch((error) => {
//     // Handle errors
//     console.error("Fetch error:", error);
//   });
