# 🎨 Design System Guide (방문객 출입시스템)

이 문서는 프로젝트의 유일한 디자인 시스템 가이드입니다. UI를 구현할 때 반드시 아래에 정의된 디자인 토큰(Token)을 최우선으로 적용하여 Tailwind CSS 클래스로 변환하여 사용하세요.

**토큰 계층**
1. **Primitive** — 팔레트 원색 (`color/primary/*`, `color/secondary/*` 등)
2. **Semantic (Component)** — 용도별 토큰 (`color/text/basic`, `color/button/primary-fill` 등). Figma `component` 컬렉션 기준.
3. **프로젝트 CSS** — `src/app/globals.css`의 `@theme` 변수

---

## 1. Colors — Primitive (프로젝트 팔레트)

프로젝트 전반에 사용되는 Primitive Color 팔레트입니다. Tailwind / `globals.css`에 매핑되어 있습니다.

### Brand Blue (Primary)
| 변수명 | 값 |
|--------|-----|
| `blue-50` | #EFF4FF |
| `blue-60` | #E4EEFA |
| `blue-70` | #D3E7FE |
| `blue-100` | #C3D7FF |
| `blue-200` | #97BAFF |
| `blue-300` | #719BFC |
| `blue-400` | #447CFC |
| `blue-500` | #105AFF (추천 메인 컬러) |
| `blue-600` | #124CEB |
| `blue-700` | #0943C6 |
| `blue-800` | #002D93 |
| `blue-900` | #001B65 |

### Grayscale (Secondary)
| 변수명 | 값 |
|--------|-----|
| `gray-0` (White) | #FFFFFF |
| `gray-30` | #FCFCFC |
| `gray-40` | #FAFAFA |
| `gray-50` | #F4F4F4 |
| `gray-60` | #EDEDED |
| `gray-100` | #E1E1E1 |
| `gray-200` | #D3D3D3 |
| `gray-300` | #C6C6C6 |
| `gray-400` | #B4B4B4 |
| `gray-500` | #989898 |
| `gray-600` | #777777 |
| `gray-700` | #4A4A4A |
| `gray-800` | #333333 |
| `gray-900` | #222222 |
| `gray-1000` (Black) | #000000 |

### Semantic (프로젝트 전용)
| 변수명 | 값 | 용도 |
|--------|-----|------|
| `negative-400` | #F04438 | 에러 텍스트·보더 |
| `negative-50` | #FEF3F2 | 에러 배경 |
| `pending-bg` | #E4EEFA | 승인 대기 배경 |
| `pending-text` | #105AFF | 승인 대기 텍스트 |

---

## 2. Colors — Figma Component Tokens (`component.json`)

> **출처**: Figma Variable Collection `component` (Mode 1) · 총 **88개** 시맨틱 컬러 토큰  
> **규칙**: UI 구현 시 Primitive를 직접 쓰기보다, 아래 시맨틱 토큰을 우선 사용합니다. 모든 시맨틱 토큰은 Primitive Alias에 1:1 연결됩니다.

### 적용 규칙

| 규칙 | 설명 |
|------|------|
| 2단계 구조 | `color/{role}/{variant}` → `color/{palette}/{step}` 또는 `alpha/*` |
| 모드 | 단일 모드 `Mode 1` (Light) |
| 스코프 | 모든 토큰 `ALL_SCOPES` |
| 텍스트 | `color/text/*` — 본문·상태·강조 계층 (`bolder` > `basic` > `subtle` > `subtler`) |
| 배경·표면 | `color/background/*`, `color/surface/*` — 페이지·카드·상태 배경 |
| 인터랙션 | `color/action/*`, `color/button/*` — 클릭·선택·비활성 상태 |
| 입력 | `color/input/*` — 필드 배경·보더 (focus: `border-active` = `secondary/700` = #4A4A4A) |
| 상태 색 | `success` → positive, `warning` → pending, `point` → negative |

### Primitive Alias 참조 (component.json에서 참조되는 원색)

| Primitive Alias | 해상 값 | 프로젝트 매핑 (참고) |
|-----------------|--------|----------------------|
| `alpha/alpha1` | rgba(0, 0, 0, 0.06) | - |
| `alpha/alpha4` | rgba(0, 0, 0, 0.24) | - |
| `alpha/alpha5` | rgba(0, 0, 0, 0.4) | - |
| `alpha/alpha7` | rgba(0, 0, 0, 0.8) | - |
| `color/negative/400` | #FA4553 | `negative-400` |
| `color/negative/50` | #FDF5F5 | `negative-50` |
| `color/neutral/30` | #F7F8FA | (미정의 — `gray-30` 유사) |
| `color/neutral/400` | #BFC7D8 | (미정의) |
| `color/neutral/50` | #F5F6FA | (미정의) |
| `color/neutral/600` | #949DAF | (미정의) |
| `color/pending/100` | #FFF2DC | (미정의 — 추가 필요) |
| `color/pending/400` | #FFA000 | (미정의 — 추가 필요) |
| `color/positive/50` | #F2FFFA | - |
| `color/positive/500` | #27C36F | (미정의 — 추가 필요) |
| `color/primary/200` | #97BAFF | `blue-200` |
| `color/primary/300` | #719BFC | `blue-300` |
| `color/primary/50` | #EFF4FF | `blue-50` |
| `color/primary/500` | #105AFF | `blue-500` |
| `color/primary/700` | #0943C6 | `blue-700` |
| `color/secondary/0` | #FFFFFF | `gray-0` |
| `color/secondary/100` | #E1E1E1 | `gray-100` |
| `color/secondary/200` | #D3D3D3 | `gray-200` |
| `color/secondary/40` | #FAFAFA | `gray-40` |
| `color/secondary/400` | #B4B4B4 | `gray-400` |
| `color/secondary/50` | #F4F4F4 | `gray-50` |
| `color/secondary/500` | #989898 | `gray-500` |
| `color/secondary/60` | #EDEDED | `gray-60` |
| `color/secondary/600` | #777777 | `gray-600` |
| `color/secondary/700` | #4A4A4A | `gray-700` |
| `color/secondary/800` | #333333 | `gray-800` |
| `color/secondary/900` | #222222 | `gray-900` |


### 시맨틱 토큰 — Background & Surface

### Background

| 변수명 | Primitive Alias | 해상 값 |
|--------|-----------------|--------|
| `color/background/basic` | `color/neutral/50` | #F5F6FA |
| `color/background/coach-mark` | `alpha/alpha7` | rgba(0, 0, 0, 0.8) |
| `color/background/dim` | `alpha/alpha5` | rgba(0, 0, 0, 0.4) |
| `color/background/inverse` | `color/secondary/800` | #333333 |
| `color/background/white` | `color/secondary/0` | #FFFFFF |

### Surface

| 변수명 | Primitive Alias | 해상 값 |
|--------|-----------------|--------|
| `color/surface/basic` | `color/neutral/50` | #F5F6FA |
| `color/surface/error-subtler` | `color/negative/50` | #FDF5F5 |
| `color/surface/info-subtler` | `color/primary/50` | #EFF4FF |
| `color/surface/inverse` | `color/secondary/800` | #333333 |
| `color/surface/snackbar` | `alpha/alpha7` | rgba(0, 0, 0, 0.8) |
| `color/surface/subtle` | `color/neutral/30` | #F7F8FA |
| `color/surface/success-subtler` | `color/positive/50` | #F2FFFA |
| `color/surface/warning-subtler` | `color/pending/100` | #FFF2DC |
| `color/surface/white` | `color/secondary/0` | #FFFFFF |



### 시맨틱 토큰 — Text & Icon

### Text

| 변수명 | Primitive Alias | 해상 값 |
|--------|-----------------|--------|
| `color/text/basic` | `color/secondary/800` | #333333 |
| `color/text/basic-inverse` | `color/secondary/0` | #FFFFFF |
| `color/text/bolder` | `color/secondary/900` | #222222 |
| `color/text/disabled` | `color/secondary/400` | #B4B4B4 |
| `color/text/point` | `color/negative/400` | #FA4553 |
| `color/text/primary` | `color/primary/500` | #105AFF |
| `color/text/primary-light` | `color/primary/300` | #719BFC |
| `color/text/secondary` | `color/neutral/600` | #949DAF |
| `color/text/subtle` | `color/secondary/600` | #777777 |
| `color/text/subtler` | `color/secondary/500` | #989898 |
| `color/text/success` | `color/positive/500` | #27C36F |
| `color/text/warning` | `color/pending/400` | #FFA000 |

### Icon

| 변수명 | Primitive Alias | 해상 값 |
|--------|-----------------|--------|
| `color/icon/basic` | `color/secondary/700` | #4A4A4A |
| `color/icon/basic-inverse` | `color/secondary/0` | #FFFFFF |
| `color/icon/disabled` | `color/secondary/400` | #B4B4B4 |
| `color/icon/point` | `color/negative/400` | #FA4553 |
| `color/icon/primary` | `color/primary/500` | #105AFF |
| `color/icon/primary-light` | `color/primary/300` | #719BFC |
| `color/icon/secondary` | `color/neutral/600` | #949DAF |
| `color/icon/static` | `color/neutral/400` | #BFC7D8 |
| `color/icon/subtle` | `color/secondary/600` | #777777 |
| `color/icon/subtler` | `color/secondary/500` | #989898 |
| `color/icon/success` | `color/positive/500` | #27C36F |
| `color/icon/warning` | `color/pending/400` | #FFA000 |



### 시맨틱 토큰 — Border

### Border

| 변수명 | Primitive Alias | 해상 값 |
|--------|-----------------|--------|
| `color/border/basic` | `color/secondary/200` | #D3D3D3 |
| `color/border/bolder` | `color/secondary/700` | #4A4A4A |
| `color/border/outline` | `alpha/alpha1` | rgba(0, 0, 0, 0.06) |
| `color/border/point` | `color/negative/400` | #FA4553 |
| `color/border/subtle` | `color/secondary/100` | #E1E1E1 |
| `color/border/subtler` | `color/secondary/60` | #EDEDED |
| `color/border/success` | `color/positive/500` | #27C36F |
| `color/border/warning` | `color/pending/400` | #FFA000 |



### Action

| 변수명 | Primitive Alias | 해상 값 |
|--------|-----------------|--------|
| `color/action/basic` | `color/neutral/30` | #F7F8FA |
| `color/action/basic-disabled` | `color/secondary/50` | #F4F4F4 |
| `color/action/basic-pressed` | `color/neutral/30` | #F7F8FA |
| `color/action/basic-selected` | `color/secondary/800` | #333333 |
| `color/action/point` | `color/negative/400` | #FA4553 |
| `color/action/primary` | `color/primary/500` | #105AFF |
| `color/action/primary-light` | `color/primary/300` | #719BFC |
| `color/action/primary-lighter` | `color/primary/200` | #97BAFF |
| `color/action/primary-lightest` | `color/primary/50` | #EFF4FF |
| `color/action/success` | `color/positive/500` | #27C36F |
| `color/action/warning` | `color/pending/400` | #FFA000 |
| `color/action/white` | `color/secondary/0` | #FFFFFF |

### Input

| 변수명 | Primitive Alias | 해상 값 |
|--------|-----------------|--------|
| `color/input/border` | `color/secondary/200` | #D3D3D3 |
| `color/input/border-active` | `color/secondary/700` | #4A4A4A |
| `color/input/border-error` | `color/negative/400` | #FA4553 |
| `color/input/border-success` | `color/positive/500` | #27C36F |
| `color/input/border-warning` | `color/pending/400` | #FFA000 |
| `color/input/field` | `color/secondary/0` | #FFFFFF |
| `color/input/field-readonly` | `color/secondary/40` | #FAFAFA |
| `color/input/field-search` | `color/neutral/30` | #F7F8FA |

### Button

| 변수명 | Primitive Alias | 해상 값 |
|--------|-----------------|--------|
| `color/button/disabled` | `color/secondary/50` | #F4F4F4 |
| `color/button/fill` | `color/secondary/0` | #FFFFFF |
| `color/button/primary-fill` | `color/primary/500` | #105AFF |
| `color/button/primary-pressed` | `color/primary/700` | #0943C6 |
| `color/button/secondary-border` | `color/primary/500` | #105AFF |
| `color/button/secondary-pressed` | `color/primary/50` | #EFF4FF |
| `color/button/tertiary-border` | `color/secondary/100` | #E1E1E1 |
| `color/button/tertiary-pressed` | `color/neutral/30` | #F7F8FA |
| `color/button/trans-fill` | `alpha/alpha4` | rgba(0, 0, 0, 0.24) |
| `color/button/trans-pressed` | `alpha/alpha5` | rgba(0, 0, 0, 0.4) |

### Element

| 변수명 | Primitive Alias | 해상 값 |
|--------|-----------------|--------|
| `color/element/basic` | `color/secondary/200` | #D3D3D3 |
| `color/element/point` | `color/negative/400` | #FA4553 |
| `color/element/primary` | `color/primary/500` | #105AFF |
| `color/element/primary-light` | `color/primary/300` | #719BFC |
| `color/element/primary-lighter` | `color/primary/50` | #EFF4FF |
| `color/element/secondary` | `color/neutral/600` | #949DAF |
| `color/element/static` | `color/secondary/0` | #FFFFFF |
| `color/element/static-inverse` | `color/secondary/100` | #E1E1E1 |
| `color/element/subtle` | `color/secondary/60` | #EDEDED |
| `color/element/subtler` | `color/secondary/50` | #F4F4F4 |
| `color/element/success` | `color/positive/500` | #27C36F |
| `color/element/warning` | `color/pending/400` | #FFA000 |



---

## 3. Typography (폰트 및 텍스트)

| 규칙 | 값 |
|------|-----|
| 기본 폰트 | `Noto Sans CJK KR` (`--font-sans`) |
| 글꼴 두께 | Regular (400), Medium (500), Bold (700) |
| 자간 | `-0.5px` (body 전역) |

| 토큰 | Font Size | Line Height |
|------|-----------|-------------|
| Heading 1 | 20px | 30px (1.5) |
| Heading 2 | 18px | 27px (1.5) |
| Body 1 | 16px | 24px (1.5) |
| Body 2 | 15px | 22.5px (1.5) |
| Body 3 | 14px | 21px (1.5) |
| Body 4 | 13px | 19.5px (1.5) |
| Body 5 | 12px | 18px (1.5) |
| Body 6 | 11px | 16.5px (1.5) |
| Body 7 | 10px | 15px (1.5) |
| Body 8 | 9px | 13.5px (1.5, Bold 전용) |

**CSS 변수**: `--text-heading-1`, `--text-body-1` 등 (`globals.css` `@theme`)

---

## 4. Radius (모서리)

| 변수명 | 값 | 용도 |
|--------|-----|------|
| `--radius-button` | 10px | 기본 버튼 (신청 조회, 완료, 홈 CTA 등) |
| `--radius-button-compact` | 6px | 카드 내 보조 버튼 (수정, 방문정보 취소) |
| `--radius-input` | 8px | Input, Textarea |

---

## 5. Effects (그림자 / Box Shadow)

| 토큰 | 값 |
|------|-----|
| Shadow Level 1 | Y: 2px, Blur: 4px, `rgba(0, 0, 0, 0.1)` |
| Shadow Level 2 | Y: 4px, Blur: 12px, `rgba(0, 0, 0, 0.1)` |
| Shadow Level 3 | X: 4px, Y: 8px, Blur: 20px, `rgba(0, 0, 0, 0.1)` |

**CSS 변수**: `--shadow-level-1` ~ `--shadow-level-3`

---

## 6. 구현 매핑 가이드 (Tailwind)

| Figma 시맨틱 | 권장 Tailwind (현재 프로젝트) |
|--------------|------------------------------|
| `color/text/basic` | `text-gray-800` |
| `color/text/subtle` | `text-gray-600` |
| `color/text/primary` | `text-blue-500` |
| `color/input/border-active` | `focus:border-gray-700` |
| `color/button/primary-fill` | `bg-blue-500` |
| `color/button/disabled` | `bg-gray-200` + `text-gray-0` |
| `color/surface/info-subtler` | `bg-blue-50` |
