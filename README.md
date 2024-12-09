[![Github license](https://img.shields.io/github/license/CTU-LinguTechies/VN-Law-Advisor.svg 'Github license')](https://github.com/HIT-OS/SOS-CONNECT-BE/blob/main/LICENSE)
[![Open issues](https://img.shields.io/github/issues/CTU-LinguTechies/VN-Law-Advisor.svg 'Open issues')](https://github.com/HIT-OS/SOS-CONNECT-BE/issues)
[![Open Pull Requests](https://img.shields.io/github/issues-pr/CTU-LinguTechies/VN-Law-Advisor.svg 'Open Pull Requests')](https://github.com/HIT-OS/SOS-CONNECT-BE/pulls)
[![Commit activity](https://img.shields.io/github/commit-activity/m/CTU-LinguTechies/VN-Law-Advisor.svg 'Commit activity')](https://github.com/HIT-OS/SOS-CONNECT-BE/graphs/commit-activity)
[![GitHub contributors](https://img.shields.io/github/contributors/CTU-LinguTechies/VN-Law-Advisor.svg 'Github contributors')](https://github.com/HIT-OS/SOS-CONNECT-BE/graphs/contributors)
# SOS Connect - Backend

<a href="https://github.com/HIT-OS/SOS-CONNECT-BE/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=">Bug Report ⚠️
</a>

<a href="https://github.com/HIT-OS/SOS-CONNECT-BE/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=">Request Feature 👩‍💻</a>


🎉 Chào mừng bạn đến với kho mã nguồn backend của **SOS Connect**, một ứng dụng được thiết kế để cung cấp hỗ trợ khẩn cấp theo thời gian thực và các dịch vụ liên lạc. Backend này xử lý quản lý người dùng, báo cáo sự cố, thông báo theo thời gian thực, và lưu trữ dữ liệu.

---

## **Mục lục**

1. 🛠️ [Tính năng](#tính-nang)
2. 💻 [Công nghệ sử dụng](#cong-nghe-su-dung)
3. 📥 [Cài đặt](#cai-dat)
4. ⚙️ [Cấu hình](#cau-hinh)
5. 📊 [API Endpoints](#api-endpoints)
6. 🚀 [Cách sử dụng](#cach-su-dung)
7. 🤝 [Đóng góp](#dong-gop)
8. 📜 [Giấy phép](#giay-phep)

---

## **Tính năng**

✨ **Quản lý người dùng:**
  - Đăng ký, xác thực và kiểm soát truy cập dựa trên vai trò.

📍 **Báo cáo sự cố:**
  - API để báo cáo các trường hợp khẩn cấp cùng dữ liệu vị trí.

🔔 **Thông báo theo thời gian thực:**
  - Gửi thông báo đến người phản hồi gần nhất theo thời gian thực.

💾 **Lưu trữ dữ liệu:**
  - Lưu trữ an toàn dữ liệu người dùng và thông tin sự cố.

📊 **Bảng điều khiển Admin:**
  - Quản lý người dùng, sự cố và cài đặt ứng dụng.

---

## **Công nghệ sử dụng**

- **Ngôn ngữ lập trình:** 🐍 Python, JavaScript
- **Framework:** 🚀 FastAPI, TypeScript
- **Cơ sở dữ liệu:** 🐘 PostgreSQL
- **Giao tiếp thời gian thực:** 📡 WebSocket (vd: Socket.IO)
- **Thông báo đẩy:** 🔥 Firebase Cloud Messaging (FCM)
- **Xác thực:** 🔑 JWT (JSON Web Tokens)
- **Triển khai:** 🐳 Docker, Docker-Compose

---

## **Cài đặt**

### Yêu cầu

- 🐍 Python 3.11.10
- 🐘 PostgreSQL
- 🛠️ Redis
- 🐳 Docker và Docker-Compose(tùy chọn để triển khai container hóa)

### Khởi chạy

1. Sao chép kho mã nguồn:
   ```bash
   git clone https://github.com/HIT-OS/SOS-CONNECT-BE.git
   cd SOS-CONNECT-BE
   ```

2. Tạo môi trường ảo và kích hoạt:
- Chuyển directory đến module AI:
    ```bash
    cd AI
    ```
- Tạo môi trường ảo bằng file environment.yml:
    ```bash
    conda env create -f environment.yml
    conda activate health-care
    ```

3. Cài đặt các thư viện phụ thuộc:
   ```bash
   pip install -r requirements.txt
   ```

4. Chạy ứng dụng cục bộ:
   ```bash
   python main.py
   ```

6. Truy cập API tại:
   ```
   http://127.0.0.1:8000
   ```

---

## **Cấu hình**

Tạo file `.env` trong thư mục gốc của dự án và thêm các biến sau:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/sos_connect
SECRET_KEY=your_secret_key
REDIS_URL=redis://localhost:6379/0
FCM_SERVER_KEY=your_firebase_server_key
```

Đối với triển khai bằng Docker, đảm bảo file `.env` được bao gồm trong `docker-compose.yml`.


## **Cách sử dụng**

### Chạy với Docker

1. Xây dựng và chạy các container:
   ```bash
   docker-compose up --build
   ```

2. Truy cập ứng dụng tại `http://127.0.0.1:8000`.

### Chạy kiểm tra

Chạy bộ kiểm tra với `pytest`:
```bash
pytest
```

---

## **Đóng góp**

Chúng tôi hoan nghênh các đóng góp! Thực hiện các bước sau:

1. 🍴 Fork kho mã nguồn.
2. 🌿 Tạo nhánh tính năng:
   ```bash
   git checkout -b feature-name
   ```
3. 💾 Commit các thay đổi:
   ```bash
   git commit -m "Add your message"
   ```
4. 📤 Đẩy nhánh lên:
   ```bash
   git push origin feature-name
   ```
5. 🔃 Gửi pull request.

---

## **Giấy phép**

Dự án này được cấp phép theo giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

