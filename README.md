# SOS Connect - Backend

[![Github license](https://img.shields.io/github/license/CTU-LinguTechies/VN-Law-Advisor.svg 'Github license')](https://github.com/HIT-OS/SOS-CONNECT-BE/blob/main/LICENSE)
[![Open issues](https://img.shields.io/github/issues/CTU-LinguTechies/VN-Law-Advisor.svg 'Open issues')](https://github.com/HIT-OS/SOS-CONNECT-BE/issues)
[![Open Pull Requests](https://img.shields.io/github/issues-pr/CTU-LinguTechies/VN-Law-Advisor.svg 'Open Pull Requests')](https://github.com/HIT-OS/SOS-CONNECT-BE/pulls)
[![Commit activity](https://img.shields.io/github/commit-activity/m/CTU-LinguTechies/VN-Law-Advisor.svg 'Commit activity')](https://github.com/HIT-OS/SOS-CONNECT-BE/graphs/commit-activity)
[![GitHub contributors](https://img.shields.io/github/contributors/CTU-LinguTechies/VN-Law-Advisor.svg 'Github contributors')](https://github.com/HIT-OS/SOS-CONNECT-BE/graphs/contributors)

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

✨ **Heatmap cho sự cố báo cáo**:
   -  Tính năng heatmap sẽ giúp hiển thị các sự cố khẩn cấp trên bản đồ, với các vùng có sự cố nhiều hơn được làm nổi bật bằng màu sắc. 

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

- **Grafana**: Công cụ giám sát và trực quan hóa dữ liệu với bảng điều khiển động từ nhiều nguồn dữ liệu.
- **LangFlow**: Công cụ trực quan hóa giúp thiết kế luồng công việc và kết nối các thành phần của LangChain.
- **FastAPI**: Framework Python nhanh chóng và hiệu quả, hỗ trợ WebSocket và sinh tài liệu API tự động.
- **TypeScript**: Ngôn ngữ phát triển trên JavaScript với kiểm tra kiểu tĩnh giúp tăng tính chính xác và bảo trì.
- **LangChain**: Thư viện Python hỗ trợ xây dựng ứng dụng ngôn ngữ tự nhiên phức tạp.
- **ChromaDB**: Cơ sở dữ liệu vector để lưu trữ và truy vấn embeddings từ mô hình học sâu.
- **Redis**: Hệ thống lưu trữ dữ liệu trong bộ nhớ cho quản lý phiên và cache.
- **Budibase**: Nền tảng low-code phát triển ứng dụng web tích hợp cơ sở dữ liệu và giao diện trực quan.
- **FlutterFlow**: Nền tảng low-code phát triển ứng dụng di động với giao diện đẹp mắt.
- **Google AI Studio**: Công cụ phát triển ứng dụng AI của Google hỗ trợ xây dựng các ứng dụng thông minh.
- **Docker**: Nền tảng container hóa phần mềm cho phép chạy ứng dụng mọi nơi.
- **Docker-Compose**: Công cụ giúp quản lý các ứng dụng Docker đa container dễ dàng.

---

## **Cài đặt**

### 🔨 Cài Đặt

- Trước hết, hãy clone dự án về máy tính của bạn:

```bash
git clone https://github.com/HIT-OS/SOS-CONNECT-BE.git
```

- Di chuyển vào thư mục vnlawadvisor:

```bash
cd sos-connect-be
```

- Di chuyển vào thư mục AI để chạy service chatbot:
```bash
cd AI
```

Và tiếp tục theo hướng dẫn trong thư mục law-crawler [README.md](./AI/README.md).


## **Cách sử dụng**

### Chạy với Docker-Compose

1. Xây dựng và chạy các container:
   ```bash
   docker-compose up --build
   ```

---

## 🙌 Đóng góp cho dự án

<a href="https://github.com/HIT-OS/SOS-CONNECT-BE/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=">Bug Report ⚠️
</a>

<a href="https://github.com/HIT-OS/SOS-CONNECT-BE/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=">Request Feature 👩‍💻</a>

Mọi đóng góp của các bạn đều được trân trọng, đừng ngần ngại gửi pull request cho dự án.

## Liên hệ

- Phạm Đình Tiến: phamdt203@gmail.com
- Đặng Hoàng Phương: hoangphuong270703@gmail.com
- Nguyễn Tiến Kiên: tienkiennropro@gmail.com

## 📝 License

This project is licensed under the terms of the [GPL V3](LICENSE) license.
