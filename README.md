# МедТьютор — сайт Эльмана Исламова

Готовый одностраничный сайт на Next.js для размещения на Railway.

## Локальный запуск

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.

## Развёртывание на Railway

1. Создайте новый репозиторий GitHub и загрузите содержимое папки.
2. В Railway нажмите **New Project → Deploy from GitHub repo**.
3. Railway автоматически обнаружит `Dockerfile`.
4. После сборки откройте **Settings → Networking → Generate Domain**.
5. Позже подключите собственный домен через **Custom Domain**.

## Что менять

- Telegram: переменная `tg` в `app/page.jsx`.
- Канал отзывов: переменная `feedback`.
- Тексты, предметы и цены: `app/page.jsx`.
- Цвета: переменные в начале `app/globals.css`.
- Фото и отзывы: папка `public/`.
