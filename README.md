# Backend API Service

## Yêu cầu hệ thống
- Node.js (phiên bản >= 14.x)
- npm (Node Package Manager)
- PostgreSQL

## Hướng dẫn cài đặt và chạy

1. Clone mã nguồn:
```bash
git clone https://github.com/cminh91/backend.git
cd backend
```

2. Cài đặt thư viện:
```bash
npm install
```

3. Cấu hình biến môi trường:
- Tạo file `.env` trong thư mục gốc
- Thêm các biến môi trường cần thiết:
```env
PORT=5000
DATABASE_URL=postgresql://username:password@localhost:5432/dbname
JWT_SECRET=your_jwt_secret
```

4. Khởi động server phát triển:
```bash
npm run start:dev
```

Server sẽ chạy tại địa chỉ http://localhost:5000
Tài liệu API có thể truy cập tại http://localhost:5000/api/docs

## Các lệnh có sẵn

- `npm run start:dev` - Khởi động ứng dụng ở chế độ phát triển với tự động tải lại
- `npm run build` - Build ứng dụng
- `npm run start` - Khởi động ứng dụng ở chế độ production
- `npm run start:debug` - Khởi động ứng dụng ở chế độ debug

## Tài liệu API
Tài liệu Swagger có sẵn tại đường dẫn `/api/docs` khi server đang chạy.

## Công nghệ sử dụng
- NestJS
- TypeORM
- PostgreSQL
- JWT Authentication
- Swagger/OpenAPI
# backend
