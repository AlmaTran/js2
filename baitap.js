document.getElementById("btnKiemTraKetQua").addEventListener("click", function () {
    const diemChuan = parseFloat(document.getElementById("diemChuan").value);
    const diemMon1 = parseFloat(document.getElementById("diemMon1").value);
    const diemMon2 = parseFloat(document.getElementById("diemMon2").value);
    const diemMon3 = parseFloat(document.getElementById("diemMon3").value);
    const khuVuc = document.getElementById("khuVuc").value.trim();
    const doiTuong = parseInt(document.getElementById("doiTuong").value);

    if (isNaN(diemChuan) || isNaN(diemMon1) || isNaN(diemMon2) || isNaN(diemMon3)) {
        document.getElementById("txtKetQua").innerText = "Vui lòng nhập điểm hợp lệ.";
        document.getElementById("txtTongDiem").innerText = "";
        return;
    }

    let tongDiem = diemMon1 + diemMon2 + diemMon3;

    if (khuVuc === "X" || doiTuong === 0) {
        // Không thuộc khu vực ưu tiên hoặc đối tượng ưu tiên
        if (tongDiem >= diemChuan) {
            document.getElementById("txtKetQua").innerText = "Chúc mừng! Bạn đã đậu!";
        } else {
            document.getElementById("txtKetQua").innerText = "Rất tiếc! Bạn đã trượt!";
        }
    } else {
        // Thuộc khu vực ưu tiên hoặc đối tượng ưu tiên
        const diemUuTien = 1.5; // Số điểm được cộng thêm cho khu vực ưu tiên hoặc đối tượng ưu tiên
        tongDiem += diemUuTien;
        if (tongDiem >= diemChuan) {
            document.getElementById("txtKetQua").innerText = "Chúc mừng! Bạn đã đậu ";
        } else {
            document.getElementById("txtKetQua").innerText = "Rất tiếc! Bạn đã trượt ";
        }
    }

    document.getElementById("txtTongDiem").innerText = "Tổng điểm của bạn là: " + tongDiem.toFixed(2);
});

 
      if (tongDiem >= diemChuan) {
        document.getElementById("txtKetQua").textContent = "Chúc mừng, bạn đã đậu";
      } else {
        document.getElementById("txtKetQua").textContent = "Rất tiếc, bạn không đậu ";
      }

      // Display the total score
      document.getElementById("txtTongDiem").textContent = "Tổng điểm của bạn: " + tongDiem;







// 
      document.getElementById("btnTinhTienDien").addEventListener("click", function () {
        const soKw = parseFloat(document.getElementById("inpNhapSoKw").value);

        if (isNaN(soKw)) {
            document.getElementById("txtTienPhat").innerText = "Vui lòng nhập số KW hợp lệ.";
            return;
        }

        const giaDien = 3500; // Giá tiền điện tính theo VNĐ/KW

        const tienDien = soKw * giaDien;
        document.getElementById("txtTienPhat").innerText = "Tiền điện cần thanh toán là: " + tienDien.toFixed(2) + " VNĐ.";
    });

    