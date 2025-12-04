// Đây là nội dung file script.js
function nangCap() {
    // 1. Lấy thẻ ảnh và đổi src
    var anh = document.getElementById('anh-san-pham');
    anh.src = "images/belle-03.png";

    // 2. Lấy thẻ p và đổi nội dung chữ
    var chu = document.getElementById('mo-ta');
    chu.innerHTML = "Đã nâng cấp thành công!";

    // 3. Đổi màu chữ sang màu đỏ
    chu.style.color = "red";
}