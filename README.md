# 🎸 instruments-chords

Base de datos de acordes de guitarra para desarrolladores, con generación
automática de diagramas SVG.

Pensada para ser **framework agnostic**, escrita en **TypeScript**, sin
dependencias externas y fácil de integrar en cualquier proyecto web o backend.

---

## ✨ Características

- 🎼 Acordes estructurados por tónica y tipo
- 🎨 Generación automática de diagramas SVG
- 🧠 Tipos fuertes en TypeScript
- 🚫 Sin dependencias externas
- ⚛️ Compatible con React, Vue, Astro, Svelte, Node.js

---

## 📦 Instalación

```bash
npm install instruments-chords
```

---

## Uso básico

### Obtener un acorde

```typescript
import { getChord } from 'instruments-chords'

const dMajor = getChord('D')
const dMinor = getChord('D', 'minor')

console.log(dMajor)
```

### Salida

```typescript
{
  "6": "x",
  "5": "x",
  "4": 0,
  "3": 2,
  "2": 3,
  "1": 2
}
```

---

## Generar diagrama SVG

```typescript
import { getChordSvg } from 'instruments-chords'

const svg = getChordSvg('D')

// En el navegador
document.body.innerHTML = svg!
```

---

## Estructura de los acordes

```typescript
{
  "6": "x", // cuerda muteada
  "5": "x",
  "4": 0,   // cuerda al aire
  "3": 2,   // traste 2
  "2": 3,
  "1": 2
}
```

---

## Tipos disponibles

```typescript
type StringNumber = '1' | '2' | '3' | '4' | '5' | '6'
type Fret = number | 'x'

type ChordShape = Record<StringNumber, Fret>

type ChordQuality =
  | 'major'
  | 'minor'
  | '7'
  | 'maj7'
  | 'm7'
  | 'sus2'
  | 'sus4'
  | 'aug'
  | 'dim'
```

---

## Ejemplos

```typescript
getChord('D') // D mayor
getChord('D', 'minor') // D menor
getChord('D', '7') // D7
getChord('D', 'sus4') // Dsus4
```
