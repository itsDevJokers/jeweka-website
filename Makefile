# Makefile untuk Next.js development

# Jalankan container
up:
	docker-compose up

# Jalankan di background
upd:
	docker-compose up -d

# Hentikan container
down:
	docker-compose down

# Build Docker image
build:
	docker-compose build

# Rebuild dan restart ulang
restart:
	docker-compose down && docker-compose up --build

# Lihat log container
logs:
	docker-compose logs -f

# Linting kode dengan ESLint
lint:
	docker-compose exec web npm run lint

# Format kode dengan Prettier
format:
	docker-compose exec web npm run format

# Jalankan unit test (jika menggunakan Jest atau lainnya)
test:
	docker-compose exec web npm run test

# Jalankan Tailwind CLI jika pakai standalone Tailwind (opsional)
tailwind:
	docker-compose exec web npm run tailwind

# Install dependency baru (npm install)
install:
	docker-compose exec web npm install

# Update dependency (npm update)
update:
	docker-compose exec web npm update

# Bersihkan container dan node_modules
clean:
	sudo rm -rf node_modules
	docker-compose down -v --remove-orphans
