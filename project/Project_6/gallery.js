
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
    document.getElementById('image').innerHTML = previewPic.alt;
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
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}

function addTabIndex() {
    // 1. Console log để biết hàm đã chạy
    console.log("Hàm addTabIndex đã được kích hoạt!");

    // 2. Lấy tất cả các thẻ img trong khung gallery
    // Sử dụng querySelectorAll để lấy danh sách các ảnh
    var images = document.querySelectorAll(".gallery-container img");

    // 3. Dùng vòng lặp FOR để duyệt qua từng ảnh
    for (var i = 0; i < images.length; i++) {
        // In ra để kiểm tra đang xử lý ảnh nào
        console.log("Đang thêm tabindex cho ảnh số: " + i);

        // 4. Thêm thuộc tính tabindex="0" cho ảnh
        // setAttribute(tên_thuộc_tính, giá_trị)
        images[i].setAttribute("tabindex", "0");
    }
}