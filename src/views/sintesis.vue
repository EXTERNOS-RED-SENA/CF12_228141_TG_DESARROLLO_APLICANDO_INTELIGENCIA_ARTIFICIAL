<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-9
        p.mb-3 El diagrama representa la estructura integral del componente sobre métricas de evaluación para machine learning, centrado en la precisión y robustez de los modelos. Partiendo del concepto central de las métricas de evaluación, se ramifica en cuatro áreas esenciales: introducción a la evaluación de modelos, técnicas de ensamblado de modelos, métricas avanzadas y ajuste de modelos, y comunicación y documentación de resultados. Cada una de estas áreas incorpora subtemas específicos que conforman los elementos fundamentales para comprender y aplicar eficazmente las métricas en el desarrollo y mejora de modelos de inteligencia artificial.
        .tarjeta.color-primario--borde.p-3.border-2.bg-white
          p.mb-0 Esta organización ilustra el flujo lógico del proceso de evaluación y optimización de modelos de machine learning. Comienza con la comprensión de la importancia de las métricas y los conceptos clave de precisión y robustez, proporcionando una base sólida. Luego, profundiza en las técnicas de ensamblado como Bagging, Random forest y Boosting, que son esenciales para mejorar el rendimiento y reducir la variabilidad de los modelos. A continuación, aborda las métricas avanzadas y estrategias de ajuste, incluyendo el uso de la matriz de confusión, las curvas ROC y el manejo de datos desbalanceados, herramientas estratégicas para una evaluación detallada y ajuste fino de los modelos. Finalmente, se enfoca en la comunicación y documentación de resultados, destacando el papel del storytelling, la elaboración de informes técnicos y la socialización efectiva de los hallazgos.
      .col-sm-12.col-lg-3.d-none.d-lg-block.mb-0: img(src='@/assets/curso/temas/sintesis/1.png', alt='')
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-3.d-none.d-lg-block.mb-0: img(src='@/assets/curso/temas/sintesis/2.svg', alt='')
      .col-sm-12.col-lg-9
        .p-4(style="background-color: #E6FBEE")
          p.my-2 El diagrama funciona como una hoja de ruta visual para comprender la estructura y el alcance del componente, permitiendo al lector visualizar rápidamente la progresión del aprendizaje y las conexiones entre los diferentes temas. Se sugiere utilizarlo como referencia para organizar el estudio y entender cómo se integran los diversos aspectos en la evaluación y mejora de modelos de machine learning, garantizando tanto su precisión como su robustez en aplicaciones prácticas.
    .row.justify-content-center.mb-5
      .col-lg-8: img(src='@/assets/curso/temas/sintesis/3.svg', alt='')
    .row.justify-content-center.mb-5
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
