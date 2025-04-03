# 🎬 React Native Movie App

Aplicación móvil desarrollada con **React Native CLI** que simula una plataforma de películas tipo Netflix. Permite visualizar secciones de contenido, ver detalles de cada película y realizar búsquedas interactivas.

---

## 📐 Brief documentation of architecture decisions

- **Component-Based Design**: Toda la UI está separada en componentes reutilizables como `Banner`, `Card`, `MovieMetadata`, `SearchResultItem`, etc.
- **Flat JSON as Data Source**: La información de películas proviene de un solo archivo `moviesJson.json`, estructurado por secciones (`containers`).
- **React Navigation Stack**: Se usa `@react-navigation/native-stack` para controlar la navegación entre pantallas (`Home`, `Detail`, `Search`).
- **Movie Lookup Strategy**: La app identifica las películas por `id`, buscando en todos los `items` de cada `container`.
- **Responsive Layout**: Se usan dimensiones de pantalla con `Dimensions` para asegurar que las imágenes y tarjetas escalen correctamente en todos los dispositivos.

---

## ✅ Implemented Features (Home Screen only)

- **Banner principal** con imagen y sección destacada (`Banner.tsx`)
- **Botón estilizado para buscar películas** (`TouchableOpacity`)
- **Componente destacado `MovieMetadata`** que muestra la primera película de la sección `"trending"`
- **Secciones horizontales**:
  - `Trending Now` (2:3 cards)
  - `You Might Like` (4:3)
  - `My List` (16:9)
- **FlatList horizontal** por sección con `Card.tsx`
- **Navegación a pantalla de detalles** desde cada Card o Banner

---

## 📱 Características

- ✅ Navegación entre pantallas (`react-navigation`)
- ✅ Secciones de películas como "Trending", "You Might Like", "My List"
- ✅ Detalles completos de cada película
- ✅ Búsqueda en tiempo real por nombre
- ✅ Componente destacado (`MovieMetadata`) con imagen de fondo
- ✅ Estilos oscuros modernos con `TouchableOpacity`, `ImageBackground` y `FlatList`

---

## 🧱 Estructura del proyecto

```
/movies
├── assets/
├── components/
│   ├── Banner.tsx
│   ├── Card.tsx
│   ├── MovieMetadata.tsx
│   ├── SearchResultItem.tsx
├── navigation/
│   └── MainStack.tsx
├── screens/
│   ├── HomeScreen.tsx
│   ├── DetailScreen.tsx
│   └── SearchScreen.tsx
├── moviesJson.json
├── App.tsx
└── README.md
```

---

## 🚀 Instalación y uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/movies-app.git
cd movies-app
```

### 2. Instalar dependencias

```bash
yarn install
# o
npm install
```

### 3. Ejecutar la app

```bash
npx react-native run-android
# o
npx react-native run-ios
```

---

## 🧠 ¿Cómo funciona?

### 🎞 HomeScreen

Muestra:
- Un botón para buscar
- El banner principal
- Una película destacada (de la sección `trending`)
- Secciones horizontales con `FlatList`

### 🔍 SearchScreen

- Input de texto
- Filtrado de películas en tiempo real
- Muestra resultados con `SearchResultItem` (imagen + título)
- Cada resultado redirige a `DetailScreen`

### 📄 DetailScreen

- Imagen grande (`portrait`)
- Título, año, duración, clasificación
- Descripción completa
- Botón para volver

---

## 🧰 Tecnologías utilizadas

- React Native CLI
- TypeScript
- React Navigation
- FlatList / ScrollView
- Estilos en línea con `StyleSheet`

---

## ✨ Créditos

- App desarrollada por [Kevyn]
- JSON mock de películas con imágenes reales
- Inspirado en interfaces de streaming modernas

---

## 🗂 To-Do (opcional)

- [ ] Añadir sección de favoritos
- [ ] Crear backend para autenticación
- [ ] Modo claro/oscuro
- [ ] Animaciones con Reanimated

---

## 🧾 Licencia

MIT - Libre para modificar y compartir.
