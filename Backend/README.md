# HR Management Backend API

This is the backend for the HR Management System built with Python, FastAPI, and SQLite.

## Tính năng (Features)
- **Quản lý phòng ban**: Tạo danh sách các phòng ban.
- **Quản lý nhân viên**: Thêm mới, cập nhật thông tin (địa chỉ, số điện thoại, phòng ban), cho nghỉ việc.
- **Quản lý hợp đồng**: Lưu trữ hợp đồng với ngày ký và ngày hết hạn, xem các hợp đồng sắp hết hạn.

## Cài đặt và Chạy Server (Setup & Run)

**1. Yêu cầu hệ thống:**
- Python 3.8+ 

**2. Cài đặt thư viện:**
Mở terminal trong thư mục `Backend` và chạy lệnh sau để cài đặt các thư viện cần thiết:
```bash
pip install -r requirements.txt
```

**3. Khởi chạy Server:**
Chạy lệnh sau trong thư mục `Backend`:
```bash
uvicorn main:app --reload
```

Server sẽ chạy tại địa chỉ: `http://127.0.0.1:8000`

**4. Xem tài liệu API (Swagger UI):**
Mở trình duyệt và truy cập: `http://127.0.0.1:8000/docs`
Tại đây, bạn có thể xem tất cả các API, thử tạo phòng ban, thêm nhân viên, sửa thông tin, và tạo hợp đồng trực tiếp trên giao diện của Swagger.

## Cấu trúc thư mục
- `main.py`: Chứa các API endpoints.
- `models.py`: Định nghĩa các bảng trong cơ sở dữ liệu (Database Schema).
- `schemas.py`: Định nghĩa các cấu trúc dữ liệu đầu vào/ra (Pydantic models) cho API.
- `database.py`: Cấu hình kết nối tới SQLite (`hrm.db`).
- `requirements.txt`: Các thư viện Python cần thiết.
