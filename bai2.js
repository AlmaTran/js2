document.getElementById("btnTinhTienDien").addEventListener("click", function () {
    const hoVaTen = document.getElementById("hoVaTen").value.trim();
    const soKw = parseFloat(document.getElementById("inpNhapSoKw").value);

    if (hoVaTen === "" || isNaN(soKw) || soKw < 0) {
        document.getElementById("txtTinhTienDien").innerText = "Vui lòng nhập thông tin hợp lệ.";
        return;
    }

    let tienDien = 0;
    if (soKw <= 50) {
        tienDien = soKw * 500;
    } else if (soKw <= 100) {
        tienDien = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw <= 150) {
        tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else {
        tienDien = 50 * 500 + 50 * 650 + 50 * 850 + (soKw - 150) * 1100;
    }

    document.getElementById("txtTinhTienDien").innerText = "Tiền điện cần thanh toán cho " + hoVaTen + " là: " + tienDien.toFixed() + " VNĐ.";
});