const modal = document.getElementById("modal");

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  }
});

function createCard(person) {
  const foto =
    person.foto && person.foto !== ""
      ? person.foto
      : "https://ui-avatars.com/api/?name=" +
        encodeURIComponent(person.nama) +
        "&background=ccfbf1&color=0f766e";

  return `
  <div
      class="snap-center w-[240px] sm:w-[260px] lg:w-[280px]
min-w-[240px] sm:min-w-[260px] lg:min-w-[280px]
h-[320px] sm:h-[340px]
             bg-white rounded-3xl overflow-hidden
             border border-slate-200
             shadow-sm hover:shadow-xl
             hover:-translate-y-1
             transition-all duration-300
             cursor-pointer flex flex-col"
      onclick='showDetail(${JSON.stringify(person)})'>

      <div class="h-2 bg-gradient-to-r from-teal-500 to-emerald-500"></div>

      <div class="flex flex-col flex-1 p-6">

          <img
  src="${foto}"
  class="w-32 h-40
         object-cover object-top
         rounded-2xl
         mx-auto border">

          <div class="flex-1 flex flex-col justify-center">

              <h3 class="font-bold text-center mt-4 text-slate-800 line-clamp-2 text-base sm:text-lg
       text-slate-800 line-clamp-2">
                  ${person.nama}
              </h3>

              <p class="text-center text-xs sm:text-sm mt-3 text-teal-600 font-medium line-clamp-3">
                  ${person.jabatan}
              </p>

          </div>

      </div>

  </div>
  `;
}

function render() {
  document.getElementById("direktur").innerHTML = data.direktur
    .map(createCard)
    .join("");

  document.getElementById("wakilDirektur").innerHTML = data.wakil_direktur
    .map(createCard)
    .join("");

  document.getElementById("kepalaBidang").innerHTML = data.kepala_bidang_bagian
    .map(createCard)
    .join("");

  document.getElementById("kepalaSeksi").innerHTML = data.kepala_seksi_subbagian
    .map(createCard)
    .join("");
}

function showDetail(person) {
  const foto =
    person.foto && person.foto !== ""
      ? person.foto
      : "https://ui-avatars.com/api/?name=" + encodeURIComponent(person.nama);

  document.getElementById("modalFoto").src = foto;

  document.getElementById("modalNama").textContent = person.nama;

  document.getElementById("modalJabatan").textContent = person.jabatan;

  document.getElementById("modalTTL").textContent = person.tempat_tanggal_lahir;

  document.getElementById("modalPangkat").textContent = person.pangkat_golongan;

  document.getElementById("modalPendidikan").innerHTML = person.pendidikan
    .map(
      (item) => `
<li class="flex gap-3">
  <span class="text-teal-600">•</span>
  <span>${item}</span>
</li>
`,
    )
    .join("");

  document.getElementById("modal").classList.remove("hidden");

  document.getElementById("modal").classList.add("flex");
}

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("modal").classList.remove("flex");

  document.getElementById("modal").classList.add("hidden");
});

render();
