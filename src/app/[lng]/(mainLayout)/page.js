import ActiveTheme from "@/Components/ActiveTheme"

export default function Home({ params }) {
  return (
    <ActiveTheme />
  )
}

// you can use a **`page.js`** file inside a **route group** in Next.js, but it has a very specific behavior.

// The **`page.js`** file inside a route group will behave like any other route. It will serve content as a regular page, and its URL will be based on the directory structure **outside of the group**. If you place a `page.js` file directly inside the group (i.e., `app/(group)/page.js`), it will render at the root of the routes defined outside the group structure, **but the folder name won't be reflected in the URL**.

// Let's say your folder structure is like this:
// app/
//  ├── (admin)/
//  │    ├── layout.tsx
//  │    └── page.tsx        # This will render at '/' not '/admin'. this page.tsx will run inside the upper page.tsx
//  ├── dashboard/
//  │    └── page.tsx        # This will render at '/dashboard'
//  └── page.tsx             # This will render at '/'. 
