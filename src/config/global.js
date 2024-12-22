export default {
  global: {
    componenteFormativo:
      'Métricas de evaluación para machine learning: precisión y robustez',
    descripcionCurso:
      'Este componente ofrece una guía práctica sobre las métricas de evaluación en machine learning, enfocándose en la precisión y robustez de los modelos. Cubre desde conceptos fundamentales y técnicas de ensamblado como Bagging y Boosting, hasta métricas avanzadas y estrategias de ajuste, incluyendo comunicación efectiva de resultados para garantizar modelos confiables y aplicables.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
  complementario: [
    {
      tema: '1. Introducción a la evaluación de modelos de machine learning',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, septiembre 15). Introducción al Machine learning.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wafh7O-vSQoI',
    },
    {
      tema: '1. Introducción a la evaluación de modelos de machine learning',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020, 13 septiembre). ¿Qué es Machine learning?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BweKKn_PKbE',
    },
    {
      tema: '2. Técnicas de ensamblado de modelos de inteligencia artificial',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023c, agosto 18). Aprendizaje no supervisado K-means.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Vlff4MlN_4-6',
    },
    {
      tema: '2. Técnicas de ensamblado de modelos de inteligencia artificial',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023a, marzo 27). Algoritmos usados en aprendizaje no supervisado.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZsscG3_Nx9M',
    },
    {
      tema: '3. Métricas avanzadas de evaluación y ajuste de modelos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, octubre 10). Machine learning con Python.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wafh7O-elPSIA',
    },
    {
      tema: '3. Métricas avanzadas de evaluación y ajuste de modelos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, marzo 17). Optimización de datos previo a la creación de modelos de machine learning.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tKeCxw_PCVU',
    },
    {
      tema: '4. Comunicación y documentación de resultados',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, 26 diciembre). Introducción a la visualización de datos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7nn2bm07Dw',
    },
  ],
  glosario: [
    {
      termino: 'Área bajo la curva (AUC)',
      significado:
        'Valor numérico que resume el desempeño de un modelo de clasificación binaria, calculado como el área bajo la curva ROC; un AUC más alto indica mejor discriminación.',
    },
    {
      termino: '<i>Bagging</i> (<i>Bootstrap Aggregating</i>)',
      significado:
        'Técnica de ensamblado que mejora la precisión y estabilidad de los modelos al entrenar múltiples modelos en subconjuntos aleatorios y promediar sus predicciones.',
    },
    {
      termino: '<i>Boosting</i>',
      significado:
        'Técnica de ensamblado que combina secuencialmente modelos débiles, enfocándose en corregir los errores de los modelos anteriores para crear un modelo final más preciso.',
    },
    {
      termino: 'Curva ROC',
      significado:
        'Gráfico que representa la relación entre la tasa de verdaderos positivos (sensibilidad) y la tasa de falsos positivos a diferentes umbrales de decisión.',
    },
    {
      termino: 'Datos desbalanceados',
      significado:
        'Conjuntos de datos donde las clases no están representadas de manera equitativa, lo que puede conducir a modelos que ignoran las clases minoritarias.',
    },
    {
      termino: 'F1-Score',
      significado:
        'Medida que combina la precisión y el recall en una sola métrica armonizada, proporcionando una evaluación equilibrada del rendimiento del modelo.',
    },
    {
      termino: 'Matriz de confusión',
      significado:
        'Tabla que permite visualizar el desempeño de un modelo de clasificación, mostrando las predicciones correctas e incorrectas y distinguiendo entre verdaderos y falsos.',
    },
    {
      termino: 'Precisión (<i>Accuracy</i>)',
      significado:
        'Medida que indica el porcentaje de predicciones correctas realizadas por un modelo en comparación con el total de predicciones realizadas.',
    },
    {
      termino: 'Precisión (<i>Precision</i>)',
      significado:
        'Métrica que indica la proporción de verdaderos positivos entre todos los casos que el modelo ha predicho como positivos.',
    },
    {
      termino: '<i>Random forest</i>',
      significado:
        'Algoritmo de ensamblado que construye múltiples árboles de decisión utilizando muestras aleatorias y combina sus predicciones para mejorar el rendimiento.',
    },
    {
      termino: '<i>Recall</i> (Sensibilidad)',
      significado:
        'Métrica que mide la proporción de verdaderos positivos identificados correctamente por el modelo en relación con el total de casos reales positivos.',
    },
    {
      termino: 'Robustez',
      significado:
        'Capacidad de un modelo para mantener un rendimiento consistente ante variaciones en los datos de entrada, como ruido, valores atípicos o cambios en la distribución.',
    },
    {
      termino: 'Sobreajuste (<i>Overfitting</i>)',
      significado:
        'Situación en la que un modelo aprende demasiado bien los detalles y el ruido del conjunto de entrenamiento, resultando en un rendimiento deficiente en nuevos datos.',
    },
    {
      termino: '<i>Storytelling</i> en ciencia de datos',
      significado:
        'Técnica de comunicación que utiliza narrativas y visualizaciones para presentar resultados y hallazgos de manera comprensible y atractiva.',
    },
    {
      termino: 'Subajuste (<i>Underfitting</i>)',
      significado:
        'Ocurre cuando un modelo es demasiado simple para capturar la estructura subyacente de los datos, resultando en un rendimiento deficiente en entrenamiento y prueba.',
    },
  ],
  referencias: [
    {
      referencia:
        'AI Planet. (n.d.). Evaluación de Modelos de Aprendizaje No Supervisado.',
      link:
        'https://aiplanet.com/learn/machine-learning-es/analisis-y-ciencia-de-datos/clustering/1624/evaluacion-de-modelos-de-aprendizaje-no-supervisado',
    },
    {
      referencia: 'AWS. (n.d.). ¿Qué es el machine learning?',
      link: 'https://aws.amazon.com/es/what-is/machine-learning/',
    },
    {
      referencia:
        'Barbara, J. (2023). Practical C++ Backend Programming: Crafting Databases, APIs, and Web Servers for High-Performance Backend. GitforGiu.',
      link: '',
    },
    {
      referencia:
        'Brandão, M., Iago, & da Costa, C. (2022). Fault diagnosis of rotary machines using machine learning. Eletrônica de Potência, 27(03), 1-8.',
      link: 'http://dx.doi.org/10.18618/rep.2022.3.0113',
    },
    {
      referencia:
        'García, S., Luengo, J., & Herrera, F. (2021). Data Preprocessing in Data Mining and Machine learning: New Frameworks, Algorithms and Applications. Springer.',
      link: '',
    },
    {
      referencia:
        "Géron, A. (2022). Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow: Concepts, tools, and techniques to build intelligent systems (3rd ed.). O'Reilly Media.",
      link: '',
    },
    {
      referencia:
        'Knaflic, C. N. (2023). Storytelling with Data: A Data Visualization Guide for Business Professionals (3rd ed.). Wiley.',
      link: '',
    },
    {
      referencia:
        'Molnar, C. (2022). Interpretable Machine learning: A Guide for Making Black Box Models Explainable (2nd ed.). Leanpub.',
      link: 'https://christophm.github.io/interpretable-ml-book/',
    },
    {
      referencia:
        'Moreno-Jiménez, J. M., & Escobar Urmeneta, M. T. (2020). El proceso analítico jerárquico (AHP). Fundamentos, metodología y aplicaciones. RECTA Monográficos, 1, 21-53.',
      link: '',
    },
    {
      referencia:
        'Neill, F. (2023). Python Data Analytics: With Pandas, NumPy, and Matplotlib (3rd ed.). Apress.',
      link: '',
    },
    {
      referencia:
        'Parra, A. (2021). Evaluación de modelos de Machine learning para Sistemas de Detección de Intrusos en Redes IoT. Universidad de los Andes.',
      link:
        'https://repositorio.uniandes.edu.co/bitstream/handle/1992/51983/1-s2.0-S1474034620544content',
    },
    {
      referencia:
        'Raschka, S., Patterson, J., & Nolet, C. (2022). Machine learning with PyTorch and Scikit-Learn: Develop machine learning and deep learning models with Python. Packt Publishing.',
      link: '',
    },
    {
      referencia:
        'Rudin, C., Chen, C., Chen, Z., Huang, H., Semenova, L., & Zhong, C. (2022). Interpretable machine learning: Fundamental principles and 10 grand challenges. Statistics Surveys, 16, 1-85.',
      link: 'https://doi.org/10.1214/21-SS133',
    },
    {
      referencia:
        'Sarker, I. H. (2021, May 1). Machine learning: Algorithms, Real-World Applications and Research Directions. Springer Science.',
      link: 'https://doi.org/10.1007/s42979-021-00592-x',
    },
    {
      referencia:
        'Topuz, K., Baiqi, A., & Abdulrashid, I. (2023). Interpretable Machine learning. In Proceedings of the Annual Hawaii International Conference on System Sciences (Vol. 2023-January, pp. 1226-1237). IEEE Computer Society.',
      link: 'https://doi.org/10.24251/HICSS.2023.146',
    },
    {
      referencia:
        'Zechech, F., & Heinrich, K. (2021). Machine learning and deep learning. Electronic Markets, 31(3), 685-695.',
      link: 'https://doi.org/10.1007/s12525-021-00475-2',
    },
    {
      referencia:
        'Vesselinov, V. V. (2019). Machine learning. Office of Scientific and Technical Information (OSTI).',
      link: 'http://dx.doi.org/10.2172/1492563',
    },
  ],
}
