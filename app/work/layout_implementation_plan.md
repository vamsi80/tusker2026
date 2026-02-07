# Portfolio Layout Implementation Plan

## Objective
Implement dynamic support for layout variations based on `galleryImages` count.

## 1. Analysis of Layouts

### Layout A: Standard (Narrative + Gallery)
**Used for:** Projects with Gallery Images (e.g., Collins Aerospace, TBZ).
**Structure:**
1.  **Top Section (Split View):**
    *   **Left (1/3):** Title, Category, Description.
    *   **Right (2/3):** Large Main Image.
2.  **Bottom Section (Gallery Row):**
    *   **Conditionally Rendered:**
        *   **2 Images:** Grid columns = 2.
        *   **3 Images:** Grid columns = 3.

### Layout B: Stacked (Single Image)
**Used for:** Projects with ONLY a Main Image (e.g., Logo Identity Design).
**Structure:**
1.  **Top Section:**
    *   Title & Category.
    *   **Description:** Occupies **75% of the screen width** (3/4 cols) for better readability.
2.  **Bottom Section:**
    *   **Main Image:** Displayed below the text, large/full width.

## 2. Data Structure Updates
We will extend the `Project` interface in `app/work/data.ts`.

```typescript
export interface Project {
    id: string;
    title: string;
    category: string;
    service: string;
    description: string;
    mainImage: string;
    galleryImages: string[];
}
```

## 3. Component Implementation (`portfolio.tsx`)

### Logic Flow for each Project:
1.  **Check `project.galleryImages.length === 0` (Single Image)**:
    *   **Render Stacked Layout:**
        *   Text Container: `w-full lg:w-3/4` (75% width).
        *   Image Container: Full width, below text.
2.  **Else (Standard Flow)**:
    *   **Render Split Layout:**
        *   Top: Split (Text 1/3, Main Img 2/3).
        *   Bottom: Gallery Row.
        *   **Dynamic Gallery:**
            *   2 Images: `grid-cols-2`.
            *   3 Images: `grid-cols-3`.

## 4. Execution Steps
1.  **Update `app/work/data.ts`**:
    *   Add "TBZ" data (2 gallery images).
    *   Add "Logo Identity Design" project (0 gallery images, 1 main image).
2.  **Update `app/work/_components/portfolio.tsx`**:
    *   Implement logical branching based on `galleryImages.length`.

## 5. Visual Reference Rendering

| Content Count | Render Strategy |
| :--- | :--- |
| **0 Gallery Imgs** | Stacked Mode: Text (75% width) + Main Image below. |
| **2 Gallery Imgs** | Standard Mode: Split Top + 2-col Gallery. |
| **3 Gallery Imgs** | Standard Mode: Split Top + 3-col Gallery. |

---
*Verified plan.*
