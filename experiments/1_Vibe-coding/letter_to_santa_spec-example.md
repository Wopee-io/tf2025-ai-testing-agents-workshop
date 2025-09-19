# 🎅 Letter to Santa -- Prototype Spec (MD)

## 1) Vision & Scope

-   **Goal:** Simple family app where kids write letters to Santa.
    Parents can see all family submissions; kids only see theirs.
-   **Prototype constraints:** 100% local (no backend), persistent via
    `localStorage`. Works offline. Quick festive UI + postcard
    generation on each submit.

## 2) Roles & Access

-   **kid:** create/read/update/delete *own* letters; can download
    postcards of their letters.
-   **parent:** read all letters from all users; download postcards of
    any letter; no editing of others' letters.

## 3) Functional Requirements

-   **Auth**
    -   Register: `username`, `password`, `role`.
    -   Login/Logout, session persisted in LS.
    -   Passwords hashed client-side (`SHA-256` + per-user salt).
-   **Letters**
    -   Create letter: `title`, `message` (required).
    -   Edit/Delete own letters (kid only).
    -   List view: role-filtered (kid → own; parent → all).
    -   Timestamp on each letter.
-   **Postcards**
    -   On submit, generate a **festive PNG** postcard in-browser
        (Canvas):
        -   Background gradient, snow, tree + ornaments, gold frame.
        -   Content: "Dear Santa,", title, wrapped message, author,
            timestamp.
        -   Download link after submit and from list ("Postcard"
            button).
-   **Storage**
    -   `localStorage` keys:
        -   `santa_users`:
            `[ {id, username, role, salt, hash, createdAt} ]`
        -   `santa_letters`:
            `[ {id, userId, title, message, createdAt} ]`
        -   `santa_session`: `{ id, username, role }`
    -   Export JSON + "Reset all" utilities.

## 4) Non-Functional

-   **Offline:** Full functionality offline (no external APIs).
-   **Perf:** App load \< 2s; postcard generation \< 300ms for typical
    text.
-   **Security (prototype-level):** Client-only hashing; LS is
    user-visible (acceptable for prototype). No PII beyond username.
-   **UX Aesthetic:** Cozy Xmas theme (snow, green/red accents, golden
    borders), playful yet clean.

## 5) UI/Flows

-   **Header:** App title + user chip + Logout.
-   **Hero:** Feature highlights + live postcard preview.
-   **Auth Panel:** Login/Register toggle; role select on register.
-   **Dashboard (kid):** "Write new letter" form + "My letters" list.
-   **Dashboard (parent):** "Write new letter" form + "All family
    letters" list.
-   **Cards:** Festive glassmorphism, rounded corners, subtle glow;
    buttons with sparkle effect.
-   **Utilities:** Stats (total letters by user), Export/Reset panel.

## 6) Data Model (JSON)

``` json
// users
{ "id":"u_x", "username":"alice", "role":"kid", "salt":"salt_...", "hash":"<sha256>", "createdAt":"2025-09-19T10:00:00Z" }
// letters
{ "id":"l_x", "userId":"u_x", "title":"Lego", "message":"Rocket set", "createdAt":"2025-09-19T10:05:00Z" }
```

## 7) Acceptance Criteria

-   [ ] Register/login/logout works; session persists across refresh.
-   [ ] Kid sees only own letters; Parent sees all letters.
-   [ ] Kid can create/edit/delete own letters; Parent read-only.
-   [ ] Postcard PNG generated on each new letter; downloadable.
-   [ ] Export JSON and Reset all function as expected.
-   [ ] Works offline after first load; no network calls needed.

## 8) Nice-to-Have (later)

-   PWA installable icon & splash; service worker cache.
-   Family grouping (household code) if you want to separate families
    later.
-   "Santa AI" optional responses (kept local with small rules or added
    API).
-   Theming toggle (Classic, Minimal, Elf-mode 🎅🧝).
-   Switch to IndexedDB for larger storage / attachments.
