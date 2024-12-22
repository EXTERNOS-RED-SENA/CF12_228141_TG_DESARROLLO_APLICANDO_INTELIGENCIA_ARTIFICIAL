<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a la evaluación de modelos de machine learning
    p.p-4.mb-5.bg-color-1 Este capítulo proporciona una base para comprender la importancia y los conceptos clave de las métricas de evaluación en machine learning. Se explora cómo la precisión y la robustez son pilares fundamentales en la evaluación de modelos y se discuten los desafíos comunes que pueden surgir durante este proceso. Al abordar estos desafíos con estrategias y soluciones adecuadas, podemos garantizar que nuestros modelos sean más precisos, confiables y aplicables en situaciones del mundo real.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1	La importancia de las métricas de evaluación
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block.mb-lg-0.mb-3: img(src='@/assets/curso/temas/t1/1.png', alt='')
      .col-sm-12.col-lg-8
        .p-4.bg-color-2.mb-3
          p.mb-0 En el mundo del machine learning, construir modelos capaces de realizar predicciones es solo una parte del proceso. Es esencial evaluar su rendimiento de manera objetiva y sistemática para garantizar que cumplan con los objetivos planteados y sean útiles en aplicaciones prácticas. Las métricas de evaluación son herramientas fundamentales que nos permiten cuantificar el desempeño de un modelo, identificar áreas de mejora y compararlo con otros modelos o enfoques.
        p.mb-0 Sin una evaluación adecuada, es imposible determinar si un modelo es realmente efectivo o si simplemente parece funcionar bien debido a coincidencias en los datos de entrenamiento. Además, las métricas de evaluación facilitan la comunicación de resultados a equipos multidisciplinarios, permitiendo que todos comprendan el valor y las limitaciones del modelo desarrollado.

    
    .titulo-tres: h3.mb-0 Importancia en el ciclo de vida del modelo
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-3 La evaluación es determinante en varias etapas del ciclo de vida de un modelo:
        .p-3.bg-color-3
          .ms-2
            ul.lista-ul--color.color-primario.mb-0
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b Durante el desarrollo: ] para seleccionar el mejor modelo entre múltiples candidatos.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b Antes de la implementación: ] para asegurar que el modelo cumple con los requisitos de precisión y robustez necesarios.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 #[b Después de la implementación: ] para monitorear el rendimiento del modelo en producción y detectar degradaciones a lo largo del tiempo.
      .col-lg-4.col-7.d-none.d-lg-block: img(src='@/assets/curso/temas/t1/2.png', alt='')
    
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2	Conceptos clave: precisión y robustez
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.d-none.d-lg-block: img(src='@/assets/curso/temas/t1/3.png', alt='')
      .col-lg-7.mb-lg-0.mb-3
        p.mb-3 Antes de profundizar en las métricas específicas, es fundamental entender dos conceptos esenciales que guían la evaluación de modelos:
        .p-3.bg-color-3
          .ms-2
            ul.lista-ul--color.color-primario.mb-0
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b Precisión: ] Se refiere a la exactitud con la que el modelo realiza predicciones correctas. Un modelo preciso tiene un alto porcentaje de aciertos, lo que indica un buen desempeño en términos de exactitud. Sin embargo, la precisión por sí sola puede ser engañosa en conjuntos de datos desbalanceados.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 #[b Robustez:] Indica la capacidad del modelo para mantener un rendimiento consistente ante variaciones en los datos de entrada, como ruido, valores atípicos o cambios en la distribución de los datos (concept drift). Un modelo robusto es resistente a perturbaciones y generaliza bien a datos no vistos, lo cual es fundamental para aplicaciones en entornos dinámicos.


    .p-5.bg-color-4.mb-5
      .row.justify-content-center.mb-0
        .col-sm-12.col-lg-8 
          .titulo-tres: h3.mb-0 Relación entre precisión y robustez
          p.mb-0 Aunque un modelo puede ser muy preciso en un conjunto de datos específico, si carece de robustez, su rendimiento puede degradarse significativamente cuando se enfrenta a datos nuevos o cambiantes. Por lo tanto, es esencial equilibrar ambos aspectos para desarrollar modelos confiables y duraderos.
        .col-sm-12.col-lg-4.d-none.d-lg-block.mb-0: img.mb-0(src='@/assets/curso/temas/t1/4.png', alt='')
     
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3	Visión general de las métricas comunes
    p.mb-5 Existen diversas métricas para evaluar modelos de Machine learning, cada una adecuada para diferentes tipos de problemas y contextos. A continuación, se presenta una visión general de las métricas más utilizadas:
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1.
          span Resumen de métricas de evaluación comunes
        .tabla-a.color-acento-botones.mb-5
          table
            caption Fuente: OIT, 2024.
            thead.border-0
              tr(style="background-color: #13DE61")
                th.w-25 Tipo de problema
                th.w-25 Métricas comunes
                th Descripción
            tbody
              tr
                td Clasificación
                td Precisión (#[i Accuracy]), #[i Precision], #[i Recall], F1-Score
                td Miden el desempeño en la clasificación de categorías discretas, evaluando verdaderos positivos, falsos positivos, etc.
              tr
                td Regresión
                td MSE, RMSE, MAE, R²
                td Evalúan la diferencia entre los valores predichos y los valores reales continuos, proporcionando una medida del error promedio y la calidad del ajuste.
              tr
                td Datos Desbalanceados
                td AUC-ROC, Curva #[i Precision-Recall]
                td Analizan el rendimiento en situaciones donde las clases están desbalanceadas, enfocándose en la capacidad del modelo para distinguir entre clases minoritarias y mayoritarias.
              tr
                td #[i Clustering]
                td Índice de Silueta, SSE
                td Miden la calidad de los grupos formados en problemas de agrupamiento sin supervisión, evaluando la cohesión interna y la separación entre #[i clusters].
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.d-none.d-lg-block: img(src='@/assets/curso/temas/t1/5.png', alt='')
      .col-sm-12.col-lg-8.mb-lg-0.mb-3
        .titulo-tres: h3.mb-0 Ejemplos de Aplicación
        .p-3.bg-color-3
          .ms-2
            p.mb-3 Ejemplo:  diseñar un programa que verifique si un número es primo. El pensamiento algorítmico te guiará a:
            ul.lista-ul--color.color-primario.mb-0
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b Clasificación: ] En la detección de spam, podríamos usar la precisión para saber qué porcentaje de correos electrónicos fueron clasificados correctamente. Sin embargo, también es importante considerar la #[b precisión (#[i Precision]) y el #[i Recall] ] para entender cuántos correos legítimos fueron marcados incorrectamente como spam y cuántos correos spam fueron pasados por alto.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b Regresión: ] Al predecir los precios de viviendas, métricas como el #[b RMSE] proporcionan una idea de cuánto, en promedio, se desvían las predicciones del modelo respecto a los valores reales, lo que es muy importante para entender la fiabilidad de las estimaciones.
    
    
    
    
    
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4	Desafíos en la evaluación de modelos
    p.mb-5 La evaluación de modelos de machine learning presenta varios desafíos que deben ser abordados para asegurar resultados confiables y útiles.
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Datos desbalanceados")
            p.mb-3 Cuando una clase predomina significativamente sobre otras, algunas métricas pueden ser engañosas. Por ejemplo, en un problema de detección de fraude donde solo el 1% de las transacciones son fraudulentas, un modelo que siempre predice "no fraude" tendría una precisión del 99%, pero sería inútil para detectar fraudes reales.
            p.mb-3 #[b Soluciones:]
            ul.lista-ul--color.color-primario.mb-0
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Utilizar métricas como el #[i #[b Recall, Precisión (Precision) y F1-Score]] que ofrecen una mejor perspectiva en conjuntos de datos desbalanceados.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0  Aplicar técnicas de muestreo: como #[b submuestreo] de la clase mayoritaria o sobremuestreo de la clase minoritaria.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0  Emplear algoritmos diseñados para manejar desequilibrios de clases: como #[b #[i Balanced Random forest o Adaptive Boosting]].
          div(titulo="Sobreajuste y Subajuste")
            p.mb-2 #[b Sobreajuste (Overfitting):] ocurre cuando el modelo se ajusta demasiado a los datos de entrenamiento, capturando ruido y patrones irrelevantes. Esto conduce a un pobre rendimiento en datos nuevos.
            p.mb-4 #[b Subajuste (Underfitting):] Sucede cuando el modelo es demasiado simple para capturar la estructura subyacente de los datos, resultando en un rendimiento deficiente tanto en el conjunto de entrenamiento como en nuevos datos.
            p.mb-3 #[b Soluciones:]
            ul.lista-ul--color.color-primario.mb-0
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b Validación cruzada:] dividir el conjunto de datos en múltiples subconjuntos para validar el rendimiento del modelo de manera más robusta.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b Regularización:] aplicar técnicas como Lasso o Ridge para penalizar la complejidad del modelo.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b Ajuste de hiperparámetros:] optimizar parámetros clave del modelo para encontrar el equilibrio adecuado entre sesgo y varianza.
          div(titulo="Interpretabilidad vs. Complejidad")
            p.mb-3 Modelos más complejos, como las redes neuronales profundas, pueden ofrecer mayor precisión pero son menos interpretables. En ciertos dominios, como la medicina o las finanzas, la interpretabilidad es importante para cumplir con regulaciones y generar confianza en los usuarios.
            p.mb-3 #[b Soluciones:]
            ul.lista-ul--color.color-primario.mb-0
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Optar por modelos más interpretables como árboles de decisión o regresiones lineales cuando sea apropiado.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Utilizar técnicas de interpretabilidad como #[b LIME] o #[b SHAP] para explicar las predicciones de modelos complejos.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Equilibrar la necesidad de precisión con la interpretabilidad según los requisitos del proyecto.
          div(titulo="Costos y consecuencias de los errores")
            p.mb-3 No todos los errores tienen el mismo impacto. Por ejemplo, en una aplicación médica, un falso negativo (no detectar una enfermedad cuando está presente) puede ser más grave que un falso positivo (diagnosticar una enfermedad cuando no existe).
            p.mb-3 #[b Soluciones:]
            ul.lista-ul--color.color-primario.mb-0
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Definir una #[b función de costo] personalizada que refleje las consecuencias reales de los diferentes tipos de errores.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Ajustar los umbrales de decisión del modelo para minimizar los errores más críticos.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Priorizar métricas que capturen la gravedad de los errores, como el #[b Recall] en casos donde los falsos negativos son más costosos.

          div(titulo="Variabilidad en los datos")
            p.mb-3 Los datos pueden cambiar con el tiempo debido a tendencias, estacionalidades o cambios en el comportamiento. Esto puede causar que el rendimiento del modelo disminuya si no se actualiza regularmente.
            p.mb-3 #[b Soluciones:]
            ul.lista-ul--color.color-primario.mb-0
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Implementar un #[b sistema de monitoreo] para detectar cambios en el rendimiento del modelo.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Programar #[b reentrenamientos periódicos] del modelo con datos actualizados.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Utilizar técnicas de #[b aprendizaje en línea] que permiten al modelo adaptarse continuamente a nuevos datos.
          div(titulo="Limitaciones de las métricas")
            p.mb-3 Cada métrica tiene sus propias limitaciones y puede no reflejar completamente el rendimiento del modelo en todos los aspectos.
            p.mb-3 #[b Soluciones:]
            ul.lista-ul--color.color-primario.mb-0
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Utilizar múltiples métricas para obtener una visión más completa del rendimiento.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Analizar las #[b curvas ROC] y #[i #[b Precision-Recall]] para entender mejor el comportamiento del modelo en diferentes umbrales.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Realizar análisis cualitativos adicionales, como inspeccionar casos mal clasificados para identificar patrones o problemas subyacentes.
      .col-sm-12.col-lg-3.d-none.d-lg-block: img(src='@/assets/curso/temas/t1/6.png', alt='')
    .titulo-tres: h3.mb-0 Conclusión
    .row.justify-content-center.mb-5
      .col-lg-2.d-none.d-lg-block: img(src='@/assets/curso/temas/t1/7.png', alt='')
      .col-sm-12.col-lg-10
        p.mb-0 Enfrentar estos desafíos requiere un enfoque crítico y cuidadoso en la selección y aplicación de las métricas de evaluación. Es esencial comprender no solo qué miden las métricas, sino también cómo interpretarlas en el contexto específico del problema que se está abordando.
        p.mb-0 En los siguientes capítulos, profundizaremos en técnicas avanzadas y metodologías específicas para validar y mejorar modelos, incluyendo el uso de técnicas de ensamblado y la comunicación efectiva de resultados a través de informes y storytelling.
</template>

<script>
import TabsC from '../bootstrap/TabsC.vue'
export default {
  name: 'Tema1',
  components: {
    TabsC,
  },
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
