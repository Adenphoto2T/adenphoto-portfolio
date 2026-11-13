# Adenphoto — 2T Studio Lab

Portfolio Astro + Tailwind CSS 4, giao diện Dark Editorial — Fire Orange, tiếng Việt.

## Chạy trên máy

Yêu cầu Node.js 20.19+ hoặc 22.12+ (khuyến nghị Node.js 22 mới).

```bash
npm install
npm run dev
```

Mở http://localhost:4321/adenphoto-portfolio/

## Xuất bản miễn phí trên GitHub Pages

1. Tạo tài khoản GitHub miễn phí.
2. Tạo **public repository** tên `adenphoto-portfolio`.
3. Sửa `astro.config.mjs`: thay `YOUR_USERNAME` bằng tên tài khoản GitHub. Nếu đổi tên repository, sửa `base` tương ứng.
4. Đưa toàn bộ nội dung thư mục này lên repository. Workflow tự cài dependencies bằng `npm install`; bạn có thể tạo `package-lock.json` khi chạy lần đầu.
5. Trong GitHub repo → **Settings → Pages → Build and deployment → Source**, chọn **GitHub Actions**.
6. Push vào nhánh `main`. Workflow `.github/workflows/deploy.yml` sẽ tự build và deploy.
7. Website ở `https://YOUR_USERNAME.github.io/adenphoto-portfolio/`.

Nếu dùng repository đặc biệt `YOUR_USERNAME.github.io`, hãy đặt `base: '/'` trong astro.config.mjs, URL sẽ là `https://YOUR_USERNAME.github.io/`.

## Cá nhân hóa

- Tên, giới thiệu, headline: `src/pages/index.astro` và `src/layouts/Base.astro`.
- Danh sách dự án: `src/data/site.js`.
- Ảnh: đặt `.webp` trong `public/images/`, đổi `image` thành `/images/ten-anh.webp`.
- Ảnh hero: thay biến `hero` trong `src/pages/index.astro`.
- Email: thay `hello@example.com` trong `src/pages/index.astro`.
- Màu sắc, font, hiệu ứng: `src/styles/global.css`.

Ảnh demo hiện tải từ Unsplash, không phải dự án thật của Adenphoto. Thay bằng ảnh bạn có quyền sử dụng trước khi xuất bản. Không đăng thông tin dự án khách hàng khi chưa được phép.

## Chi phí

Astro, Tailwind, GitHub public repository và GitHub Pages có thể dùng ở gói miễn phí trong giới hạn nhà cung cấp. Không cần tên miền riêng; địa chỉ github.io miễn phí. Không có form backend; liên hệ qua mailto.

## Bộ màu Fire Orange (bản cập nhật)

- Nền chủ đạo: `#080808` (đen sâu)
- Tiêu đề và điểm nhấn: `#FF7417` (cam rực)
- Chữ nội dung, đường viền ảnh và nút: `#FFFFFF` (trắng)
- Sửa màu trong `src/styles/global.css` (`@theme`, `body`, `.outline-cta`).
- Tất cả các trang sử dụng cùng hệ thống màu; mục Dịch vụ không còn nền trắng ngà.

## Kiểm tra trước khi push

```bash
npm install
npm run build
npm run preview
```

Lưu ý: môi trường tạo gói không truy cập được npm registry nên chưa chạy được build thực tế. GitHub Actions sẽ cài và build khi push; kiểm tra tab Actions để xác nhận. Đã sửa đường dẫn base để tránh lỗi link/ảnh trên GitHub Pages.
