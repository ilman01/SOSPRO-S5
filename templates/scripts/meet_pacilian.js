document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".pacilians-btn");
  const content = document.getElementById("paciliansContent");

  const data = {
    dosen: [
      {
        name: "Ambatron",
        desc: "Kalkulus 1 - Z",
        img: "/static/images/ambatron.png"
      }
    ],
    asdos: [
      {
        name: "Budi",
        desc: "Pemrograman Lanjut",
        img: "/static/images/asdos1.png"
      },
      {
        name: "Sari",
        desc: "Basis Data",
        img: "/static/images/asdos2.png"
      }
    ],
    kebersihan: [
      {
        name: "Pak Ujang",
        desc: "Pembersih Gedung A",
        img: "/static/images/kebersihan1.png"
      }
    ],
    kantin: [
      {
        name: "Bu Reni",
        desc: "Nasi Goreng Juara",
        img: "/static/images/kantin1.png"
      }
    ],
    keamanan: [
      {
        name: "Pak Joko",
        desc: "Security Utama",
        img: "/static/images/keamanan1.png"
      }
    ],
    "tukang-kebun": [
      {
        name: "Bang Wawan",
        desc: "Rawat Taman Fasilkom",
        img: "/static/images/kebun1.png"
      }
    ]
  };

  function renderCards(category) {
    const items = data[category] || [];
    content.innerHTML = items
      .map(
        (item) => `
      <div class="pacilian-card">
        <img src="${item.img}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </div>
    `
      )
      .join("");
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active class
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Ganti konten
      const category = btn.getAttribute("data-category");
      renderCards(category);
    });
  });

  // Load default
  renderCards("dosen");
});
