# University of Allahabad · Arts Campus Freshers Guide

Official Freshers Handbook and Admissions Portal for B.A. (Bachelor of Arts) students at the University of Allahabad (Est. 1887).

## 🚀 Live GitHub Pages Deployment Guide

This repository is pre-configured for automated **GitHub Pages** deployment with all interactive features intact (Score Calculator, 81 Subject Combinations, 12-Document Checklist, 250+ Electives Directory, 15 Hostels & 67-Rule Ordinance, History Handbook, and Helpdesk).

### How to Enable GitHub Pages:

1. **Push your code to GitHub** (to branch `main` or `master`).
2. Go to your repository **Settings** on GitHub.
3. In the left sidebar, click on **Pages** (under the *Code and automation* section).
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**.
5. The automated workflow in `.github/workflows/deploy.yml` will automatically build the static bundle (`npm run build`) and deploy it to `https://<your-username>.github.io/<repo-name>/`.

---

## 🛠️ Local Development & Build

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Compile production build for deployment
npm run build

# Preview production build locally
npm run preview
```

---

## 📦 Features Included

- **CUET Merit Calculator**: Composite score calculator with slot assignments.
- **81 Subject Combinations Explorer**: Searchable directory for Codes 101 to 183.
- **12 Mandatory Documents Checklist**: Interactive verification checklist with printable binder layouts.
- **4-Year FYUGP Curriculum**: Dual Major, Minor, and credit progression matrix.
- **250+ Electives Directory**: Categorized by AEC, SEC, MDC, and VAC with fee structures.
- **15 Hostels & 67-Rule Ordinance**: Complete residential hall database, 60:30:10 formula, and official conduct rules.
- **Heritage & Historical Handbook**: Archival chronology (1869–Present), founders gallery, and hostel legacy records.
- **Freshers FAQs & Helpdesk**: DigiLocker guidelines, contact numbers, and Pravesh Bhawan details.
