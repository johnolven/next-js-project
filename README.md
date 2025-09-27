# 🚀 JohnOlven Next.js Template

Una plantilla base profesional para proyectos Next.js creada por **JohnOlven**.

## ✨ Características

- ⚡ **Next.js 15** con App Router
- 🔷 **TypeScript** configurado
- 🎨 **Tailwind CSS** para estilos
- 📝 **ESLint** para código limpio
- 🌍 **Variables de entorno** configuradas
- 📱 **Responsive Design**
- 🌙 **Soporte para modo oscuro**
- 🎯 **Estructura de carpetas optimizada**

## 🛠️ Tecnologías incluidas

- [Next.js](https://nextjs.org/) - Framework de React
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [ESLint](https://eslint.org/) - Linter para JavaScript/TypeScript

## 🚀 Inicio rápido

### Prerrequisitos

- Node.js 18+ 
- npm, yarn, pnpm o bun

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd next-js-project
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   Edita `.env.local` con tus valores específicos.

4. **Ejecutar el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

5. **Abrir en el navegador**
   Visita [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del proyecto

```
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
├── public/
├── .env.example
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 📝 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint

## 🌍 Variables de entorno

Revisa el archivo `.env.example` para ver todas las variables disponibles:

- Variables públicas (prefijo `NEXT_PUBLIC_`)
- Configuración de base de datos
- APIs externas
- Configuración de autenticación
- Y más...

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Configura las variables de entorno en el dashboard
3. Deploy automático en cada push

### Otras plataformas

- **Netlify**: Compatible con builds estáticos
- **Railway**: Para aplicaciones full-stack
- **DigitalOcean**: App Platform

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**JohnOlven**

- Creador de esta plantilla Next.js
- Enfocado en mejores prácticas y desarrollo eficiente

---

⭐ ¡No olvides dar una estrella al proyecto si te ha sido útil!

## 🔗 Enlaces útiles

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs/)