<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-4.d-none.d-lg-block.mb-0: img.m-0(src='@/assets/curso/temas/intro/1.png', alt='')
          .col-lg-8
            .p-4(style="background-color: #E6F0FC ")
              p.mb-0 La evaluación de modelos de machine learning es esencial para garantizar su efectividad y aplicabilidad en escenarios reales. Medir la precisión y la robustez de un modelo valida su desempeño y asegura su capacidad para generalizar ante datos nuevos y variados. 
        p.mb-0 Este componente aborda de manera sistemática las métricas de evaluación fundamentales para machine learning, enfocándose en la precisión y la robustez. Se exploran desde conceptos básicos y técnicas de ensamblado como Bagging, Random forest y Boosting, hasta métricas avanzadas como la matriz de confusión, las curvas ROC y el manejo de datos desbalanceados. Además, se incluyen estrategias para ajustar y optimizar modelos, así como métodos efectivos para comunicar y documentar los resultados obtenidos.
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/2.png', alt='')
    
    
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/intro/3.png', alt='')
      .col-lg-7
        .tarjeta.border-2.p-2.color-primario--borde.bg-white.mb-3
          p.mb-0 A lo largo de este componente, se combinan conceptos teóricos con ejemplos prácticos, proporcionando las herramientas necesarias para que los lectores puedan aplicar las métricas de evaluación de manera efectiva en sus propios proyectos. Se enfatiza la importancia de una evaluación exhaustiva para desarrollar modelos confiables y robustos, capaces de enfrentar los desafíos del mundo real.
    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0.mb-3
        .p-4(style="background-color: #EDE9EC")
          p.mb-0 La integración de técnicas de evaluación con prácticas de comunicación y documentación garantiza que los resultados no solo sean precisos, sino también comprensibles y utilizables por diferentes audiencias. Como dice un principio fundamental en machine learning: "Un modelo es tan bueno como su evaluación".
      .col-lg-2.col-5: img(src='@/assets/curso/temas/intro/4.png', alt='')
    p.mb-5 ¡Te invitamos a descubrir las métricas y metodologías clave para evaluar y mejorar tus modelos de machine learning, asegurando su precisión y robustez en cada aplicación!
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/RxhHTriDAac?si=O7UoLvE03BLD1S02" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. 










</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
