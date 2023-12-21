#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist

# инициализация нового репозитория git
git init

# добавление всех файлов в индекс git
git add -A

# создание коммита
git commit -m 'deploy'

# пуш в ветку gh-pages репозитория https://github.com/Denny32191/VueVueVue.git
git push -f git@github.com:Denny32191/VueVueVue.git master:gh-pages

# переход обратно в исходную директорию
cd -