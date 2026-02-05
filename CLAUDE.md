# CLAUDE.md - Portfolio Rayan Zouch

## 📋 Contexte du Projet

Portfolio personnel pour **Rayan Zouch**, ingénieur Cloud & Production Engineer, destiné à impressionner les recruteurs et démontrer des compétences techniques avancées.

### Objectifs
- Créer un portfolio moderne et impressionnant
- Démontrer la maîtrise d'AWS et des technologies cloud
- Rester gratuit (AWS Free Tier)
- Le portfolio lui-même est une démonstration technique

### Profil du propriétaire
- **Nom**: Rayan Zouch
- **Titre**: Cloud & Production Engineer
- **Formation**: ECE Paris - Master Systèmes d'Information et Cybersécurité
- **Expérience clé**: Amazon (IT Support Engineer), PwC (Cyber Threat Analyst)
- **Certifications**: AWS Cloud Practitioner, AWS Academy Cloud Architecting
- **Contact**: rayan.zouch12@gmail.com | +33 6 47 07 46 42
- **LinkedIn**: linkedin.com/in/rayan-zouch

---

## 🛠️ Stack Technique

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Infrastructure AWS (à déployer)
- **Hosting**: S3 (static website)
- **CDN**: CloudFront
- **SSL**: ACM (Certificate Manager)
- **DNS**: Route 53 (ou Cloudflare gratuit)
- **IaC**: Terraform

### CI/CD
- **Pipeline**: GitHub Actions
- **Déploiement**: Auto-deploy sur push to main

### Bonus (optionnel)
- **Contact Form**: Lambda + API Gateway + DynamoDB
- **Monitoring**: CloudWatch

---

## 📁 Structure du Projet

```
portfolio-rayan-zouch/
├── src/
│   ├── app/
│   │   ├── globals.css          # Styles globaux + animations
│   │   ├── layout.tsx           # Layout principal + SEO
│   │   └── page.tsx             # Page principale (À CRÉER)
│   └── components/
│       ├── Navigation.tsx       # ✅ Nav avec scroll effect
│       ├── Hero.tsx             # ✅ Section hero animée
│       ├── About.tsx            # ✅ Section à propos
│       ├── Experience.tsx       # ✅ Timeline expériences
│       ├── Projects.tsx         # ✅ Cards projets + modal
│       ├── Skills.tsx           # ✅ Visualisation skills
│       ├── Contact.tsx          # 🔄 EN COURS (incomplet)
│       └── Footer.tsx           # ❌ À CRÉER
├── infrastructure/
│   └── terraform/               # ❌ À CRÉER
│       ├── main.tf
│       ├── variables.tf
│       ├── outputs.tf
│       └── s3-cloudfront.tf
├── .github/
│   └── workflows/               # ❌ À CRÉER
│       └── deploy.yml
├── public/                      # ❌ À CRÉER (favicon, images)
├── package.json                 # ✅ Créé
├── tsconfig.json                # ✅ Créé
├── tailwind.config.ts           # ✅ Créé
├── postcss.config.js            # ✅ Créé
├── next.config.js               # ✅ Créé (export statique)
└── README.md                    # ❌ À CRÉER
```

---

## ✅ Fichiers Créés

1. `package.json` - Dépendances Next.js, Framer Motion, Tailwind
2. `tsconfig.json` - Config TypeScript
3. `tailwind.config.ts` - Thème custom (couleurs AWS orange/cyan)
4. `postcss.config.js` - PostCSS pour Tailwind
5. `next.config.js` - Export statique pour S3
6. `src/app/globals.css` - Styles globaux, animations, effets
7. `src/app/layout.tsx` - Layout + métadonnées SEO
8. `src/components/Navigation.tsx` - Navigation sticky avec scroll
9. `src/components/Hero.tsx` - Hero section animée
10. `src/components/About.tsx` - Section à propos
11. `src/components/Experience.tsx` - Timeline interactive
12. `src/components/Projects.tsx` - Grille projets avec modals
13. `src/components/Skills.tsx` - Visualisation compétences

---

## 🚧 Fichiers À Créer

### Priorité Haute
1. **`src/app/page.tsx`** - Page principale assemblant tous les composants
2. **`src/components/Contact.tsx`** - Finir le formulaire de contact (coupé à la moitié)
3. **`src/components/Footer.tsx`** - Footer du site

### Priorité Moyenne
4. **`infrastructure/terraform/main.tf`** - Provider AWS + backend
5. **`infrastructure/terraform/s3-cloudfront.tf`** - Bucket S3 + distribution CloudFront
6. **`infrastructure/terraform/variables.tf`** - Variables Terraform
7. **`infrastructure/terraform/outputs.tf`** - Outputs (URL CloudFront, etc.)
8. **`.github/workflows/deploy.yml`** - Pipeline CI/CD GitHub Actions

### Priorité Basse
9. **`public/favicon.ico`** - Favicon
10. **`README.md`** - Documentation du projet
11. **Lambda Contact Form** - Backend serverless pour le formulaire

---

## 🎨 Design Guidelines

### Couleurs (définies dans tailwind.config.ts)
```
aws-orange: #FF9900      (accent principal - style Amazon)
aws-cyan: #00D9FF        (accent secondaire)
aws-dark: #0D1117        (background principal)
aws-gray: #161B22        (cards, sections)
aws-border: #30363D      (bordures)
```

### Typographie
- **Display**: Space Grotesk (titres)
- **Body**: Inter (texte)
- **Mono**: JetBrains Mono (code, accents tech)

### Animations
- Scroll reveal avec Framer Motion
- Hover effects sur les cards
- Gradient animé sur le texte hero
- Floating icons en background

---

## 🔧 Commandes Utiles

```bash
# Installation
npm install

# Développement
npm run dev

# Build pour production (génère /out)
npm run build

# Le dossier /out est prêt pour S3
```

---

## 📝 Notes pour Claude Code

### Ce qui reste à faire immédiatement:
1. Créer `src/app/page.tsx` qui importe et assemble tous les composants
2. Terminer `Contact.tsx` (le fichier a été coupé pendant la création)
3. Créer `Footer.tsx`
4. Tester le build avec `npm run build`

### Pour le déploiement AWS:
1. Créer les fichiers Terraform dans `infrastructure/terraform/`
2. Créer le workflow GitHub Actions
3. Configurer les secrets GitHub (AWS credentials)

### Architecture AWS cible:
```
User → CloudFront (HTTPS) → S3 (static files)
                ↓
         ACM Certificate
                ↓
         Route 53 (DNS) ou domaine externe
```

### Contact Form Serverless (bonus):
```
Form → API Gateway → Lambda → DynamoDB
                        ↓
                   SES (email notification)
```

---

## 🎯 Critères de Succès

- [ ] Site responsive (mobile-first)
- [ ] Animations fluides
- [ ] Score Lighthouse > 90
- [ ] Déploiement automatisé
- [ ] HTTPS via CloudFront
- [ ] Infrastructure as Code (Terraform)
- [ ] Coût = $0 (Free Tier)

---

## 📚 Ressources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [AWS Free Tier](https://aws.amazon.com/free/)
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
