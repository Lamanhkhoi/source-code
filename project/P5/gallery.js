
function upDate(previewPic) {
    // 1. Kiểm tra xem hàm đã chạy chưa
    console.log("Hàm upDate đang chạy!");
    
    // 2. In ra thông tin ảnh để kiểm tra
    console.log("Alt: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    // 3. Thay đổi chữ của div id="image"
    // Lấy nội dung từ thuộc tính alt của ảnh nhỏ
    document.getElementById('image').innerHTML = previewPic.alt;

    // 4. Thay đổi hình nền của div id="image"
    // Cú pháp: url('link_anh')
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

/*
    Hàm undo()
    - Chạy khi chuột rời khỏi ảnh
*/
function undo() {
    // 1. Reset ảnh nền về rỗng
    document.getElementById('image').style.backgroundImage = "url('')";

    // 2. Reset chữ về mặc định
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}