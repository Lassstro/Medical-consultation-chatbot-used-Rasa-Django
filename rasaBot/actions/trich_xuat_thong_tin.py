import serial
import codecs

def get_data_from_serial(port):
    ser = serial.Serial(
        port = port,
        baudrate = 9600,
        parity = serial.PARITY_NONE,
        stopbits = serial.STOPBITS_ONE,
        bytesize = serial.EIGHTBITS,
        timeout = 1
    )
    try:
        while True:
            if ser.inWaiting() > 0:
                text = ser.readline()
                return text
    except KeyboardInterrupt:
        ser.close()

def xu_li_cccd(text):
    info_list = text.split("|")
    info = {
            'ID_CCCD': '042200001844',
            'ID_CMND': '184370185',
            'ho_ten': "Đặng Văn Hiệu",
            'dia_chi': "Thôn 4, Cổ Nhuế, Bắc Từ Liêm, Hà Nội",
            'ngay_cap': '02022023'
        }

def xu_li_the_bhyt(text):
    text = text.decode('utf-8')
    info_list = text.split("|")
    data = {
        'ma_so_BHYT': info_list[0],
        'ho_ten': codecs.decode(info_list[1], "hex").decode('utf-8'),
        'ngay_sinh': info_list[2],
        'gioi_tinh': 'Nam' if info_list[3] == '1' else 'Nữ',
        'dia_chi': codecs.decode(info_list[4], "hex").decode('utf-8')
    }
    return data

if __name__ == "__main__":
    text = get_data_from_serial('COM7')
    print(text)
    info = xu_li_the_bhyt(text)
    print(info)


