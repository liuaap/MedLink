const doctors = [
  {
    name: "林采潔 醫師",
    specialty: "牙科｜植牙專長",
    rating: "⭐ 4.7",
    room: "診間 A",
    status: "看診中"
  },
  {
    name: "許承恩 醫師",
    specialty: "牙科｜牙周植牙",
    rating: "⭐ 4.9",
    room: "診間 B",
    status: "可預約"
  }
];

const doctorList = document.getElementById("clinicDoctorList");

doctorList.innerHTML = doctors.map(doctor => `
  <div class="doctor-card">

    <div class="doctor-main">

      <div class="doctor-avatar">
        醫
      </div>

      <div>
        <h3>${doctor.name}</h3>
        <p>${doctor.specialty}</p>
      </div>

    </div>

    <div class="doctor-meta">
      <span>${doctor.rating}</span>
      <span>${doctor.room}</span>
      <span>${doctor.status}</span>
    </div>

  </div>
`).join("");
