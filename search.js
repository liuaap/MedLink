const results = [
  {
    type: "doctor",
    doctor: "林采潔 醫師",
    specialty: "牙科｜植牙專長",
    rating: "4.7",
    reviews: "96",
    clinic: "晴森牙醫診所",
    distance: "2.4 km",
    status: "今日營業 09:30-20:30",
    booking: "今天 16:00"
  },
  {
    type: "doctor",
    doctor: "許承恩 醫師",
    specialty: "牙科｜牙周植牙",
    rating: "4.9",
    reviews: "142",
    clinic: "悅白牙醫診所",
    distance: "3.0 km",
    status: "今日營業 10:00-21:00",
    booking: "明天 10:30"
  },
  {
    type: "clinic",
    clinic: "晴森牙醫診所",
    rating: "4.8",
    reviews: "128",
    doctors: "4位植牙醫師",
    distance: "2.4 km",
    booking: "今天 14:30"
  }
];

const resultList = document.getElementById("resultList");

resultList.innerHTML = results.map(item => {

  if(item.type === "doctor") {

    return `
      <div class="result-card">

        <div class="doctor-header">

          <div class="avatar">
            醫
          </div>

          <div class="doctor-info">

            <h3>${item.doctor}</h3>

            <p>${item.specialty}</p>

            <div class="rating">
              ⭐ ${item.rating} (${item.reviews})
            </div>

          </div>

        </div>

        <div class="clinic-info">
          ${item.clinic}
        </div>

        <div class="card-row">
          📍 ${item.distance}
        </div>

        <div class="card-row">
          🟢 ${item.status}
        </div>

        <div class="booking-row">
          🟠 最快可約 ${item.booking}
        </div>

        <button class="cta-btn">
          查看詳情
        </button>

      </div>
    `;
  }

  return `
    <div class="result-card clinic-card">

      <h3>${item.clinic}</h3>

      <div class="rating">
        ⭐ ${item.rating} (${item.reviews})
      </div>

      <div class="card-row">
        📍 ${item.distance}
      </div>

      <div class="card-row">
        👨‍⚕️ ${item.doctors}
      </div>

      <div class="booking-row">
        🟠 最快可約 ${item.booking}
      </div>

      <button class="cta-btn">
        查看診所
      </button>

    </div>
  `;

}).join("");
