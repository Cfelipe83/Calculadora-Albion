# 🗡️ Albion Tools Hub - Suite de Calculadoras y Mercado en Vivo

Suite web interactiva y completa para **Albion Online**, conectada directamente a los servidores del **Albion Online Data Project (AODP)** con renderizado oficial de iconos y separada modularmente por páginas.

Repositorio: [https://github.com/Cfelipe83/Calculadora-Albion](https://github.com/Cfelipe83/Calculadora-Albion)

---

## 📂 Estructura de Páginas

1. **`index.html` (Refinación):**
   - Soporte para Tela, Cuero, Lingotes, Tablas y Bloques (Tier 4 a Tier 8 + encantamientos .1, .2, .3, .4).
   - Tasas RRR reales por ciudad de bioma (15.2%, 36.7%, 53.9% con Foco) e impuestos de taller.
2. **`islas.html` (Islas, Granjas, Huertos y Pasturas):**
   - **Granjas:** Zanahorias, Frijoles, Repollos, Patatas, Maíz, Calabazas.
   - **Huertos de Hierbas:** Arcano Agaric, Consuelda, Bardana, Cardencha, Digitalis, Flor de Fuego.
   - **Pasturas & Ganado:** Gallinas, Cabras, Gansos, Ovejas, Cerdos, Vacas (Carne y Leche).
   - **Crianza de Monturas:** Caballos, Bueyes y Lobos Huargos.
   - Cálculo de retorno con riego de Foco (>100%), semillas sobrantes y ganancia neta diaria.
3. **`crafteo.html` (Crafteo y Ciudades de Especialización):**
   - Bonificación de bioma por arma/armadura (Espadas, Arcos, Bastones, Placa, Cuero, Tela, Bolsas, Capas).
   - Análisis comparativo automático de todas las ciudades para recomendar **dónde craftear** y **en qué ciudad vender más caro**.
4. **`mercado.html` (Buscador y Comparador Multi-Ciudad en Vivo):**
   - Buscador universal de cualquier Item ID con órdenes de venta y compra.
   - Comparador de precios entre **Bridgewatch, Fort Sterling, Lymhurst, Martlock, Thetford, Caerleon, Brecilien y Black Market**.
   - Detector de márgenes de **Arbitraje** (comprar en la ciudad más barata y transportar a la más cara).

---

## 🚀 Despliegue en GitHub Pages

1. Sube todos los archivos (`index.html`, `islas.html`, `crafteo.html`, `mercado.html`, `README.md`) a tu repositorio.
2. Ve a **Settings** > **Pages** en tu repositorio de GitHub.
3. En **Branch**, selecciona `main` y la carpeta `/(root)`.
4. Tu web estará lista en:
   👉 **`https://cfelipe83.github.io/Calculadora-Albion/`**
