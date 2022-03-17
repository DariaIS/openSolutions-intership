# Boilerplate info

### Define environment variables

.env – for default (fallback) values, tracked by VCS
.env.development – for development environment, tracked by VCS
.env.test – for test environment, tracked by VCS
.env.production – for production environment, tracked by VCS
.env.local – for individual default values, ignored by VCS
.env.development.local – for individual development environment values, ignored by VCS
.env.test.local – for individual test environment values, ignored by VCS
.env.production.local – for production environment values (DB passwords, API keys, etc.), ignored by VCS


The .env.local file has a priority over the .env. Create it if you want to overwrite the default values for your own environment-specific needs;

### Boilerplate structure

```
.
├── config                    # webpack config
├── build/                    # webpack build output
└── src/                      # source code
    ├── index.tsx             # app entry file
    ├── index.css             # global styles
    ├── variables.scss        # global native css variables
    ├── utils/                # global shared utils
    ├── UIElements/           # global shared tiny UI elements
    ├── components/           # global shared components
    ├── config/               # global shared constants/enums etc.
    ├── hooks/                # global shared hooks
    ├── models/               # for organization stores (redux etc.)
    ├── Api/                  # common api entities
    ├── assets/               # for common things, like favicon or fonts, but not components images
    ├── pages/                # every page have their own components etc.
    │   └── page/
    │       ├── components/
    │       ├── hooks/
    │       ├── icons/
    │       ├── pageComponent.tsx
    │       ├── index.ts
    │       └── styles.module.scss
    └── index.html            # all meta info in webpack plugin
```
