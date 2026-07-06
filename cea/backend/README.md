# Backend — Cuidar el Alma

**Equipo:** API
**Scrum Master:** Hugo
**Sprint:** 1
**Documentación:** Ernesto

## 📋 Descripción

Este repositorio contiene el Backend de la plataforma **Cuidar el Alma**, desarrollado con
Django y Django REST Framework. El Backend es el corazón de la aplicación: expone la API que
consultarán el resto de equipos (BOREA, CODEX, DEXUS, EVO, FLUX, GRID, HEXA) para leer códigos
QR, mostrar recursos y gestionar perfiles de usuario.

En este Sprint 1 el objetivo **no** es construir toda la API, sino dejar preparada la
arquitectura sobre la que crecerá en los próximos Sprints.

## 🏗 Estructura del proyecto

```
backend/
│
├── config/
│   ├── settings.py
│   └── urls.py
│
├── apps/
│   ├── accounts/      # Gestión de usuarios
│   ├── core/           # Lógica y utilidades compartidas
│   ├── library/        # Gestión de recursos
│   └── qr/              # Gestión de códigos QR
│
├── media/
├── static/
├── requirements.txt
└── manage.py
```

Cada aplicación (`app`) tiene una única responsabilidad, siguiendo la filosofía de Django de
dividir un proyecto grande en piezas pequeñas y fáciles de mantener.

## ⚙️ Requisitos previos

- Python 3.x
- pip
- Git

## 🔧 Instalación

1. Clonar el repositorio:

   ```bash
   git clone <URL-DEL-REPOSITORIO>
   cd backend
   ```

2. Crear el entorno virtual:

   ```bash
   python -m venv venv
   ```

3. Activar el entorno virtual:

   - **Windows:**
     ```bash
     venv\Scripts\activate
     ```
   - **macOS / Linux:**
     ```bash
     source venv/bin/activate
     ```

4. Instalar las dependencias:

   ```bash
   pip install -r requirements.txt
   ```

## 📦 Dependencias principales

- **Django** — framework principal del Backend
- **djangorestframework** — construcción de la API REST

*(Actualizar esta lista si el equipo añade nuevas dependencias durante el Sprint)*

## ▶️ Cómo ejecutar el proyecto

1. Aplicar las migraciones:

   ```bash
   python manage.py migrate
   ```

2. Levantar el servidor de desarrollo:

   ```bash
   python manage.py runserver
   ```

3. Comprobar que todo funciona visitando:

   ```
   http://localhost:8000/api/health
   ```

## ✅ Endpoint de comprobación

| Método | Endpoint      | Descripción                          |
|--------|---------------|---------------------------------------|
| GET    | `/api/health` | Verifica que el Backend está operativo |

## 🎯 Objetivos del Sprint 1

- [x] Proyecto Django funcionando
- [x] Django REST Framework instalado
- [x] Estructura del Backend organizada
- [x] Aplicación `accounts` creada
- [x] Aplicación `core` creada
- [x] Aplicación `qr` creada
- [x] Aplicación `sundays` creada
- [x] Aplicación `premium` creada
- [x] Primer endpoint funcionando (`/api/health`)
- [x] Documentación inicial (este README)

## 👥 Equipo API

| Nombre | Rol en el Sprint 1                     |
|--------|-----------------------------------------|
| Hugo   | Scrum Master · Arquitectura principal   |
| Darwin | Instalación de Django REST Framework    |
| David  | Integrante          |
| Ernesto | Documentación                          |
| Jaime | Creación de la app `accounts`                          |


## 📝 Criterios de aceptación (Product Owner)

El Sprint 1 se considera completado cuando:

- El proyecto Django arranca sin errores.
- La estructura de carpetas es la acordada.
- Las aplicaciones iniciales están creadas y registradas.
- Existe un endpoint de comprobación (`/api/health`) que responde correctamente.
- La documentación permite a cualquier compañero instalar y ejecutar el backend sin ayuda.
- Todas las tareas han sido revisadas mediante Pull Request y aprobadas por el Scrum Master.