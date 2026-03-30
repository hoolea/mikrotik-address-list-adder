# 📌 MikroTik Address List Adder (Chrome Extension)

Расширение для Google Chrome, которое позволяет в один клик добавлять текущий сайт в `address-list` на MikroTik роутере.

---

## 🚀 Возможности

- Добавление текущего домена в MikroTik address-list
- Удаление протокола и пути (остаётся только `example.com`)
- Настраиваемый:
  - IP роутера
  - порт API
  - логин и пароль
  - имя address-list
  - комментарий
- Работает через MikroTik REST API
- Не требует сторонних серверов

---

## 🖥️ Требования

- :contentReference[oaicite:0]{index=0} (или Chromium)
- :contentReference[oaicite:1]{index=1} версии 7.x+
- Включён REST API (`/rest`)

---

## ⚙️ Настройка MikroTik

Включите API и проверьте доступ:

```bash
/ip service enable www
/ip service print
