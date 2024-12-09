### 🩺 Chatbot AI Chăm Sóc Sức Khỏe

---

#### **🌟 Tổng Quan**  
**Chatbot AI Chăm Sóc Sức Khỏe** là một trợ lý trò chuyện được thiết kế để cung cấp các phản hồi nhanh chóng, chính xác và đầy cảm thông cho các câu hỏi liên quan đến sức khỏe. Sản phẩm kết hợp công nghệ AI với giao diện thân thiện giúp người dùng đưa ra các quyết định thông minh về sức khỏe.

---

#### **✨ Tính Năng**  
- 🧑‍⚕️ **Tương Tác Cá Nhân**: Phản hồi được tùy chỉnh theo thông tin nhập từ người dùng.  
- ⚕️ **Hướng Dẫn Y Tế**: Đưa ra lời khuyên về triệu chứng, phòng ngừa và cách điều trị tạm thời.  
- 🖥️ **Thiết Kế Thân Thiện**: Giao diện đơn giản, trực quan giúp việc sử dụng trở nên dễ dàng.  
- 🔒 **Bảo Mật & Riêng Tư**: Tuân thủ các quy định dữ liệu sức khỏe như **HIPAA**/**GDPR**.  
- 📢 **Hỗ Trợ Chuyển Hướng**: Khuyến nghị liên hệ chuyên gia y tế khi cần thiết.  

---

#### **🚀 Hướng Dẫn Cài Đặt**  
1. **Thiết lập môi trường ảo**:  
- Chuyển directory đến module AI:
    ```bash
    cd AI
    ```
- Tạo môi trường ảo bằng file environment.yml:
    ```bash
    conda env create -f environment.yml
    conda activate health-care
    ```

3. **Cài đặt thư viện phụ thuộc**:  
   ```bash
   pip install -r requirements.txt
   ```  

4. **Cấu hình biến môi trường**:
   ```env
   GOOGLE_API_KEY=your_api_key
     ```  

5. **Chạy chatbot**:  
   ```bash
   python3 -m executor.main
   ```  

---

#### **💡 Sử Dụng**  
- Chatbot trả lời các câu hỏi liên quan đến sức khỏe, bao gồm:  
  - 🔍 Triệu chứng và nguyên nhân của bệnh.
  - 🩹 Hướng dẫn sơ cứu cơ bản.
  - 🌱 Lời khuyên chăm sóc sức khỏe phòng ngừa.  
- Ví dụ prompt:  
  ```text
  "Các triệu chứng của cúm là gì và tôi có thể xử lý tại nhà như thế nào?"
  ```  

---

#### **🛠️ Công Nghệ Sử Dụng**  
- 🐍 **Python, FastAPI**: Phát triển backend.  
- 🤖 **Generative AI**: Sử dụng mô hình ngôn ngữ lớn từ Google Gemini.
- **LangChain**: một thư viện Python mã nguồn mở giúp xây dựng các ứng dụng dựa trên mô hình ngôn ngữ (LLMs) như GPT, BERT, hay các mô hình học sâu khác.
- **ChromaDB**: cơ sở dữ liệu vector hỗ trợ các ứng dụng AI, đặc biệt là trong việc xử lý và tìm kiếm thông tin từ các vector embeddings.
- 🐳 **Docker, Docker-Compose**: Triển khai container hóa.  
- 🎨 **Rich**: Cải tiến giao diện dòng lệnh.  

---

#### **🤝 Đóng Góp**  
Chúng tôi hoan nghênh các đóng góp! Làm theo các bước sau:  
1. 🍴 **Fork** kho mã nguồn.  
2. 🌱 Tạo nhánh tính năng:  
   ```bash
   git checkout -b feature-name
   ```  
3. 💾 **Commit thay đổi**:  
   ```bash
   git commit -m "Add feature"
   ```  
4. 📤 **Đẩy nhánh lên**:  
   ```bash
   git push origin feature-name
   ```  
5. 🔁 **Gửi Pull Request**.  

---

#### **📜 Giấy Phép**  
Dự án này được cấp phép theo giấy phép **GNU GENERAL PUBLIC LICENSE**. Xem file `LICENSE` để biết thêm chi tiết.  

---

#### **📬 Liên Hệ**  
- ✉️ **Email**: phamdt203@gmail.com
- 🐙 **GitHub Issues**: [Mở issue](https://github.com/HIT-OS/SOS-CONNECT-BE/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=)
