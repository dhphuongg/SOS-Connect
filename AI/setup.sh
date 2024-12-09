#!/bin/bash

pip install -q --upgrade google-generativeai langchain-google-genai chromadb

DATA_LINK=$(python -c "import config.config as cfg; print(cfg['data']['data_link'])")
DATA_DIR=$(python -c "import config.config as cfg; print(cfg['data']['data_root'])")
ENV_FILE=$(python -c "import config.config as cfg; print(cfg['environment']['conda'])")
PIP_FILE=$(python -c "import config.config as cfg; print(cfg['environment']['pip'])")

# Kiểm tra nếu Conda đã được cài đặt
if ! command -v conda &> /dev/null
then
    echo "Conda chưa được cài đặt. Đang tiến hành cài đặt Annaconda..."

    exit
fi

if ! command -v docker &> /dev/null
then 
    echo "Docker chưa được cài đặt. Hãy càu đặt Docker trước."
    exit
fi

if ! command -v docker-compose &> /dev/null
then 
    echo "Docker-compose chưa được cài đặt. Đang tiến hành cài đặt docker-compose..."

# Tạo môi trường Conda từ file environment.yml
echo "Tạo môi trường Conda từ environment.yml..."
conda env create -f environment.yml

# Kích hoạt môi trường
echo "Kích hoạt môi trường..."
conda activate health-care

# Cài đặt các gói từ requirements.txt
echo "Cài đặt các gói từ requirements.txt bằng pip..."
pip install -r requirements.txt

# Tải dữ liệu từ đường dẫn trong config
DATA_LINK="https://drive.google.com/uc?id=1tYKEDR-d-uMVvgAWztgEg4qtx18-pr8V&export=download"
DATA_DIR="data"

echo "Tải dữ liệu từ $DATA_LINK..."
mkdir -p $DATA_DIR
wget --output-document=$DATA_DIR/dataset.zip $DATA_LINK

# Giải nén dữ liệu
echo "Giải nén dữ liệu..."
unzip -o $DATA_DIR/dataset.zip -d $DATA_DIR
rm $DATA_DIR/dataset.zip

echo "Quá trình thiết lập môi trường hoàn tất!"
