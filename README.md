## WEB tư vấn khám bệnh
- Tạo hồ sơ khám bệnh bằng thẻ bảo hiểm y tế(trích xuất thông tin từ mã QR code)
- Chatbot tư vấn bằng giọng nói (Rasa Chatbot)

Bước 1: Cài đặt môi trường

    - Với window

        python -m venv venv==3.8

        venv\Scripts\activate

        pip install -r requirements.txt

    - Với ubutu

        sudo apt-get update

        sudo apt-get install python3.8

        virtualenv -p python3.8 venv

        source ./venv/bin/activate

        pip install -r requirements.txt


Bước 2: Chạy django project

    - Mở terminal, đưa con trỏ dòng lệnh về thư mục rasaChatbot

        cd rasaChatbot

    - Tạo tài khoản admin

        python manage.py createsuperuser

    - Chạy project:

        python manage.py runserver

Bước 3: Chạy chatbot Rasa

    - Mở 2 terminal khác với con trỏ dòng lệnh ở thư mục botRasa:

        rasa run actions

        rasa run --enable-api --cors "*"