## WEB tư vấn khám bệnh
- Tạo hồ sơ khám bệnh bằng thẻ bảo hiểm y tế(trích xuất thông tin từ mã QR code)
- Chatbot tư vấn bằng giọng nói (Rasa Chatbot)

Bước 1: Cài đặt môi trường
    - Mở terminal ở thư mục Code python
        venv\Scripts\activate
        pip install -r requirements.txt

Bước 2: Tạo project bằng django
    - Mở terminal, đưa con trỏ dòng lệnh về thư mục rasaChatbot
        cd rasaChatbot
    - Tạo tài khoản admin
        python manage.py createsuperuser
    - Chạy project:
        python manage.py runserver

Bước 3: Chạy chatbot Rasa
    - Mở một terminal khác với con trỏ dòng lệnh ở thư mục botRasa
        rasa run actions
        rasa run --enable-api --cors "*"