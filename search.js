const data = [
  {
    doctor: "林采潔 醫師",
    clinic: "晴森牙醫診所",
    distance: "2.4 km",
    rating: "4.7",
    booking: "今天 16:00"
  },
  {
    doctor: "許承恩 醫師",
    clinic: "悅白牙醫診所",
    distance: "3.0 km",
    rating: "4.9",
    booking: "明天 10:30"
  }
];

const container = document.getElementById("resultList");

container.innerHTML = data.map(item => `
<div class="result-card">

  <h3>${item.doctor}</h3>

  <p>${item.clinic}</p>

  <p>
    距離 ${item.distance}
    ｜⭐ ${item.rating}
  </p>

  <p>
    最快可約 ${item.booking}
  </p>

</div>
`).join("");
