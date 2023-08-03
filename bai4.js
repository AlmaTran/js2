function onLoaiKhachHangChange() {
    const loaiKhachHang = document.getElementById("loaiKhachHang").value;
    const soKetNoiGroup = document.getElementById("soKetNoiGroup");

    // Nếu loại khách hàng là "Nhà dân" thì ẩn hoặc disable ô nhập số kết nối
    if (loaiKhachHang === "nhaDan") {
        soKetNoiGroup.style.display = "none";
    } else {
        soKetNoiGroup.style.display = "block";
    }
}

// Xử lý sự kiện click của nút "Tính hóa đơn"
document.getElementById("btnTinhHoaDon").addEventListener("click", function () {
    const loaiKhachHang = document.getElementById("loaiKhachHang").value;
    const soKetNoi = loaiKhachHang === "doanhNghiep" ? parseInt(document.getElementById("soKetNoi").value) : 0;
    const soKenhCaoCap = parseInt(document.getElementById("soKenhCaoCap").value);

    // Tính hóa đơn dựa trên loại khách hàng và số kết nối/ số kênh cao cấp
    const hoaDon = tinhHoaDon(loaiKhachHang, soKetNoi, soKenhCaoCap);

    // Hiển thị kết quả vào phần txtTinhTienCap
    document.getElementById("txtTinhTienCap").innerText = "Hóa đơn: " + hoaDon + " $";
});

// Hàm tính hóa đơn
function tinhHoaDon(loaiKhachHang, soKetNoi, soKenhCaoCap) {
    const PHI_XU_LY_HOA_DON_NHA_DAN = 4.5;
    const PHI_XU_LY_HOA_DON_DOANH_NGHIEP = 15;
    const PHI_DICH_VU_CO_BAN_NHA_DAN = 20.5;
    const PHI_DICH_VU_CO_BAN_DOANH_NGHIEP = 75;
    const PHI_THEM_MOI_KET_NOI_DOANH_NGHIEP = 5;
    const PHI_THUE_KENH_CAO_CAP_NHA_DAN = 7.5;
    const PHI_THUE_KENH_CAO_CAP_DOANH_NGHIEP = 50;

    let hoaDon = 0;

    if (loaiKhachHang === "nhaDan") {
        hoaDon = PHI_XU_LY_HOA_DON_NHA_DAN + PHI_DICH_VU_CO_BAN_NHA_DAN + PHI_THUE_KENH_CAO_CAP_NHA_DAN * soKenhCaoCap;
    } else if (loaiKhachHang === "doanhNghiep") {
        hoaDon = PHI_XU_LY_HOA_DON_DOANH_NGHIEP + PHI_DICH_VU_CO_BAN_DOANH_NGHIEP;
        if (soKetNoi > 10) {
            hoaDon += (soKetNoi - 10) * PHI_THEM_MOI_KET_NOI_DOANH_NGHIEP;
        }
        hoaDon += PHI_THUE_KENH_CAO_CAP_DOANH_NGHIEP * soKenhCaoCap;
    }

    return hoaDon;
}