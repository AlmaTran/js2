document.getElementById("btnTinhTienThue").addEventListener("click", function () {
    // Lấy giá trị nhập vào từ các ô input
    const tongThuNhapNam = parseFloat(document.getElementById("inpTongThuNhapNam").value);
    const soNguoiPhuThuoc = parseInt(document.getElementById("inpSoNguoiPhuThuoc").value);

    // Tính tiền thuế
    const tienThue = tinhTienThue(tongThuNhapNam, soNguoiPhuThuoc);

    // Hiển thị kết quả vào phần txtTienThue
    document.getElementById("txtTienThue").innerText = "Tiền thuế: " + tienThue + " VND";
});

// Hàm tính tiền thuế
function tinhTienThue(tongThuNhapNam, soNguoiPhuThuoc) {
    const MUC_THUE = 0.1; // Mức thuế 10%

    // Tính tiền thuế dựa trên tổng thu nhập và số người phụ thuộc
    const tienThue = tongThuNhapNam * MUC_THUE - 4 * soNguoiPhuThuoc;

    // Giá trị tiền thuế tối thiểu là 0
    return Math.max(tienThue, 0); }