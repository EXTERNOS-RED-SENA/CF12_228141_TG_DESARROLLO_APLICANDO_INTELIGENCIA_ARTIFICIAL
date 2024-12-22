export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción a la evaluación de modelos de machine learning',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'La importancia de las métricas de evaluación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Conceptos clave: precisión y robustez',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Visión general de las métricas comunes',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Desafíos en la evaluación de modelos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de ensamblado de modelos de inteligencia artificial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fundamentos de los métodos de ensamblado',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '<i>Bagging</i> (<i>bootstrap aggregating</i>)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: '<i>Random forest</i>',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Métodos de <i>Boosting</i>',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Evaluación de modelos ensamblados',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Casos prácticos y aplicaciones',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Métricas avanzadas de evaluación y ajuste de modelos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Matriz de confusión y análisis de errores',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Curvas ROC y área bajo la curva (AUC)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Manejo de datos desbalanceados',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Probar y ajustar el modelo',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Comunicación y documentación de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'El arte del storytelling en ciencia de datos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Elaboración de informes técnicos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Desarrollo de manuales técnicos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Socialización y presentación de resultados',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228141_CF12_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: 'Métricas de evaluación para machine learning: precisión y robustez',
    Description:
      'Este componente ofrece una guía práctica sobre las métricas de evaluación en machine learning, enfocándose en la precisión y robustez de los modelos. Cubre desde conceptos fundamentales y técnicas de ensamblado como Bagging y Boosting, hasta métricas avanzadas y estrategias de ajuste, incluyendo comunicación efectiva de resultados para garantizar modelos confiables y aplicables.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
    ],
  },
}
