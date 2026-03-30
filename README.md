This was developed by Geemkuu...the owner of this repo and account 
### 🛠️ How to use:
1.  In VS Code, create a file named `README.md` in your main folder.
2.  Delete everything inside and paste the code below.
3.  Save and run: `git add README.md`, `git commit -m "Add professional readme"`, and `git push origin main`.

---

```markdown
# 🪴 Agitech Seedlings Digital Catalog

A high-performance, real-time inventory management system and digital storefront built for **Agitech**. This platform allows farmers to browse high-quality seedlings, check live stock status, and place orders directly via WhatsApp.

---

## 🚀 Key Features

* **Real-Time Sync:** Powered by **Supabase SQL**, ensuring prices and stock levels update instantly across all devices.
* **Dynamic Inventory:** Automated "In Stock" (Green) and "Out of Stock" (Red) status banners for clear user guidance.
* **WhatsApp Integration:** "Order Now" buttons that pre-fill a professional message for the Agitech sales team.
* **Optimized Performance:** Built with **Next.js 14** for lightning-fast catalog loading and SEO-friendly plant descriptions.
* **Cloud-Ready Images:** Integrated with Unsplash and Google-sourced imagery for a professional, high-definition look.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 14** | Full-stack React framework for the UI |
| **Tailwind CSS** | Custom branding and responsive agricultural theme |
| **Supabase** | PostgreSQL Database & Authentication |
| **Lucide React** | High-definition iconography |
| **Vercel** | Edge hosting and CI/CD deployment |

---

## 📂 Project Structure

```text
├── src/
│   ├── app/            # Next.js App Router (Catalogue, About, Contact)
│   ├── components/     # UI Components (ProductCards, Banners, Badges)
│   └── lib/            # Supabase Client & Database Config
├── public/             # Static Assets & Icons
└── supabase/           # SQL migration scripts for Seedlings Table
```

---

## ⚙️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Geemkuu/Agitech-web.git](https://github.com/Geemkuu/Agitech-web.git)
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

---

## 📊 Database Schema (Supabase)

The `seedlings` table is structured for scalability:
- `id`: Unique identifier (UUID)
- `name`: Seedling variety (e.g., Anna F1 Tomato)
- `price_kes`: Integer value for local currency
- `stock_status`: Dynamic string (In Stock, Out of Stock, In Propagation)
- `image_url`: Direct link to high-res imagery

---

## 👨‍💻 Developed By
**Geemkuu** *Building Digital Solutions for Modern Agriculture.*
```

---

### 🚀 Final Step:
Once you've pushed this, go to your GitHub page. It will transform from a list of files into a professional-looking project landing page.

**Would you like me to help you deploy this to Vercel now so you can have a live link to send to people?**
