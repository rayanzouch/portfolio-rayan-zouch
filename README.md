# 🚀 Portfolio Rayan Zouch

Portfolio personnel moderne déployé sur AWS, démontrant des compétences en Cloud Engineering et Infrastructure.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)
![AWS](https://img.shields.io/badge/AWS-S3%20%2B%20CloudFront-orange?style=flat-square&logo=amazon-aws)
![Terraform](https://img.shields.io/badge/Terraform-IaC-purple?style=flat-square&logo=terraform)

## ✨ Features

- **Design moderne** : Dark theme avec accents AWS orange/cyan
- **Animations fluides** : Framer Motion pour des transitions élégantes
- **100% Responsive** : Mobile-first design
- **SEO optimisé** : Métadonnées complètes
- **Infrastructure as Code** : Déploiement Terraform
- **CI/CD** : GitHub Actions pour déploiement automatique
- **Coût : $0** : Utilisation du AWS Free Tier

## 🛠️ Stack Technique

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

### Infrastructure
- AWS S3 (Static Hosting)
- AWS CloudFront (CDN + HTTPS)
- AWS ACM (SSL Certificate)
- Terraform (IaC)

### CI/CD
- GitHub Actions

## 🚀 Quick Start

### Prérequis
- Node.js 18+
- npm ou yarn
- AWS CLI (pour le déploiement)
- Terraform (pour l'infrastructure)

### Installation

```bash
# Cloner le repo
git clone https://github.com/rayanzouch/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

### Build pour production

```bash
npm run build
```

Le site statique est généré dans le dossier `/out`

## ☁️ Déploiement AWS

### 1. Configurer Terraform

```bash
cd infrastructure/terraform

# Initialiser Terraform
terraform init

# Prévisualiser les changements
terraform plan

# Appliquer l'infrastructure
terraform apply
```

### 2. Variables à configurer

Créer un fichier `terraform.tfvars` :

```hcl
domain_name     = "rayanzouch.com"  # Optionnel
aws_region      = "eu-west-1"
environment     = "production"
```

### 3. GitHub Actions

Configurer les secrets GitHub :
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`

Le déploiement se fait automatiquement sur push vers `main`.

## 📁 Structure du Projet

```
portfolio-rayan-zouch/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── infrastructure/
│   └── terraform/
│       ├── main.tf
│       ├── s3-cloudfront.tf
│       ├── variables.tf
│       └── outputs.tf
├── .github/
│   └── workflows/
│       └── deploy.yml
└── public/
```

## 🎨 Personnalisation

### Couleurs
Modifier `tailwind.config.ts` :

```typescript
colors: {
  'aws-orange': '#FF9900',
  'aws-cyan': '#00D9FF',
  // ...
}
```

### Contenu
Modifier les données dans chaque composant :
- `Hero.tsx` : Titre, description
- `About.tsx` : Bio, highlights
- `Experience.tsx` : Expériences professionnelles
- `Projects.tsx` : Projets et réalisations
- `Skills.tsx` : Compétences techniques
- `Contact.tsx` : Informations de contact

## 📊 Architecture AWS

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Route 53  │────▶│  CloudFront │────▶│     S3      │
│    (DNS)    │     │    (CDN)    │     │  (Static)   │
└─────────────┘     └──────┬──────┘     └─────────────┘
                          │
                   ┌──────▼──────┐
                   │     ACM     │
                   │   (HTTPS)   │
                   └─────────────┘
```

## 📝 License

MIT License - voir [LICENSE](LICENSE)

## 👤 Contact

**Rayan Zouch**
- Email: rayan.zouch12@gmail.com
- LinkedIn: [linkedin.com/in/rayan-zouch](https://linkedin.com/in/rayan-zouch)
- GitHub: [github.com/rayanzouch](https://github.com/rayanzouch)

---

⭐ Si ce projet t'a été utile, n'hésite pas à lui donner une étoile !
