function hitungGaji(event) {
    event.preventDefault();
  
    const jamKerja = document.getElementById("jamKerja").value;
    const tarifPerJam = document.getElementById("tarifPerJam").value;
  
    let gaji = 0;
    if (jamKerja <= 40) {
      gaji = jamKerja * tarifPerJam;
    } else {
      const jamLembur = jamKerja - 40;
      const gajiReguler = 40 * tarifPerJam;
      const gajiLembur = jamLembur * tarifPerJam * 1.5;
      gaji = gajiReguler + gajiLembur;
    }
  
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Gaji karyawan adalah: Rp ${gaji.toFixed(2)}`;
  }

  const form = document.getElementById("gajiForm");
  form.addEventListener("submit", hitungGaji);
  