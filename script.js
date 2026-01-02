function showRole(role) {
    const box = document.getElementById("result");

    if (role === "student") {
        box.innerHTML = `
        <b>Sinh viên</b>
        <ul>
            <li>Xem dự án</li>
            <li>Nhận task</li>
            <li>Nộp báo cáo</li>
            <li>Theo dõi thu nhập (70%)</li>
        </ul>`;
    }

    if (role === "leader") {
        box.innerHTML = `
        <b>Trưởng nhóm</b>
        <ul>
            <li>Phân công công việc</li>
            <li>Quản lý thành viên</li>
            <li>Báo cáo tiến độ</li>
            <li>Quản lý quỹ nhóm (20%)</li>
        </ul>`;
    }

    if (role === "mentor") {
        box.innerHTML = `
        <b>Mentor</b>
        <ul>
            <li>Duyệt dự án</li>
            <li>Đánh giá sinh viên</li>
            <li>Giám sát chất lượng</li>
            <li>Nhận phân bổ (10%)</li>
        </ul>`;
    }

    if (role === "enterprise") {
        box.innerHTML = `
        <b>Doanh nghiệp</b>
        <ul>
            <li>Gửi đề xuất dự án</li>
            <li>Theo dõi tiến độ</li>
            <li>Duyệt thanh toán</li>
        </ul>`;
    }
}
