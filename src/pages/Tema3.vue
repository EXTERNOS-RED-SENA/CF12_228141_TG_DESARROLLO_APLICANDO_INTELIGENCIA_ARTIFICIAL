<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Métricas avanzadas de evaluación y ajuste de modelos
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Matriz de confusión y análisis de errores
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-7
        p.mb-3 La matriz de confusión es una herramienta esencial en la evaluación de modelos de clasificación. Permite visualizar el desempeño del modelo al mostrar las predicciones correctas e incorrectas en cada categoría. Esta matriz es fundamental para comprender no solo cuántas predicciones fueron acertadas, sino también para identificar dónde y por qué se producen los errores.
        p.mb-0 Imaginemos un modelo que clasifica imágenes de gatos y perros. La matriz de confusión nos indicaría cuántas imágenes de gatos fueron correctamente clasificadas como gatos (verdaderos positivos), cuántas fueron incorrectamente clasificadas como perros (falsos negativos), y lo mismo para las imágenes de perros. Este análisis detallado ayuda a identificar patrones en los errores, como si el modelo confunde más a menudo un tipo específico de perro con un gato, lo que podría indicar la necesidad de más datos de entrenamiento o ajustes en el preprocesamiento.
      .col-sm-12.col-lg-5.d-none.d-lg-block: img(src='@/assets/curso/temas/t3/1.png', alt='')
    
    .bg-color-2.p-4.mb-5
      p.mb-0 El análisis de errores va más allá de contar las predicciones incorrectas; implica entender las causas subyacentes. Por ejemplo, si el modelo confunde consistentemente gatos negros con perros, podría deberse a condiciones de iluminación en las imágenes o a características visuales similares. Al profundizar en estos errores, podemos realizar mejoras específicas, como ajustar el balance de clases en el conjunto de datos, aplicar técnicas de aumento de datos o refinar la arquitectura del modelo.
    
    
    
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Curvas ROC y área bajo la curva (AUC)
    .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/2.png')

        .col-sm-12.col-lg-9
          .tarjeta.bg-color-5.p-4
            p.mb-3 Las curvas ROC (Receiver Operating Characteristic) son una representación gráfica que permite evaluar el rendimiento de un modelo de clasificación binaria a diferentes umbrales de discriminación. En el eje vertical se representa la tasa de verdaderos positivos (sensibilidad) y en el eje horizontal la tasa de falsos positivos (1 - especificidad). Al trazar la curva ROC, podemos observar cómo varía el desempeño del modelo al modificar el umbral de decisión.
            p.mb-0 El área bajo la curva (AUC) es una medida que resume el rendimiento del modelo en una sola cifra. Un AUC cercano a 1 indica un modelo con excelente capacidad de discriminación entre las clases, mientras que un AUC de 0.5 sugiere que el modelo no es mejor que una decisión al azar. La ventaja del AUC es que es independiente del umbral elegido, proporcionando una evaluación general del modelo.
    p.mb-3 Por ejemplo, en el diagnóstico médico, donde es tan sensible detectar enfermedades graves, las curvas ROC y el AUC permiten seleccionar el umbral que equilibra adecuadamente la sensibilidad y la especificidad según las necesidades clínicas. Si priorizamos minimizar los falsos negativos, podríamos elegir un umbral que aumente la sensibilidad, aceptando un mayor número de falsos positivos.
    
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Manejo de datos desbalanceados
    p.mb-5 En muchos problemas reales, las clases en los datos no están equilibradas. Esto significa que una clase puede estar representada por una cantidad significativamente menor de ejemplos que la otra. Un ejemplo común es la detección de fraudes financieros, donde las transacciones fraudulentas son una fracción muy pequeña del total. Este desbalance puede causar que los modelos aprendan a predecir siempre la clase mayoritaria, ignorando la minoritaria.
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-3.d-none.d-lg-block: img(src='@/assets/curso/temas/t3/3.png', alt='')
      .col-sm-12.col-lg-5 
        .bg-color-10.p-3
          p.mb-0 Para abordar este desafío, es importante aplicar estrategias que compensen el desbalance. Una de ellas es el muestreo, que puede ser de dos tipos: submuestreo de la clase mayoritaria o sobremuestreo de la clase minoritaria. El submuestreo implica reducir el número de ejemplos de la clase dominante para equilibrar el conjunto de datos, mientras que el sobremuestreo consiste en aumentar el número de ejemplos de la clase minoritaria, ya sea replicando datos existentes o generando nuevos ejemplos sintéticos mediante técnicas como SMOTE (Synthetic Minority Over-sampling Technique).
      .col-sm-12.col-lg-4.d-none.d-lg-block: img(src='@/assets/curso/temas/t3/4.svg', alt='')
    p.mb-0 Otra estrategia es utilizar algoritmos que sean intrínsecamente robustos a los datos desbalanceados. Los métodos de ensamblado, como el Boosting, pueden dar mayor peso a las observaciones de la clase minoritaria, mejorando su detección. Además, es clave seleccionar métricas de evaluación adecuadas. En lugar de confiar únicamente en la precisión global, es preferible utilizar métricas como el recall, la precisión (Precision) y el F1-score, que ofrecen una visión más equilibrada del rendimiento en ambas clases.
    
    
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4 Probar y ajustar el modelo
    .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-lg-4.d-none.d-lg-block
            img.mb-0(src='@/assets/curso/temas/t3/5.png')

        .col-sm-12.col-lg-8
          .tarjeta.bg-color-2.py-3.px-4
            p.mb-0 El proceso de probar y ajustar el modelo es una etapa iterativa que busca optimizar su rendimiento. Después de entrenar el modelo inicial, es fundamental evaluarlo en un conjunto de validación para medir su capacidad de generalización. Esta evaluación permite identificar problemas como el sobreajuste, donde el modelo aprende demasiado bien los detalles del conjunto de entrenamiento y no generaliza bien a datos nuevos.
    p.mb-3 El ajuste del modelo puede involucrar varias acciones. Una de ellas es la optimización de hiperparámetros, que son parámetros del modelo que no se aprenden directamente durante el entrenamiento, como la profundidad máxima de un árbol de decisión o la tasa de aprendizaje en un algoritmo de Boosting. La búsqueda de los valores óptimos para estos hiperparámetros puede realizarse mediante métodos sistemáticos como la búsqueda en cuadrícula (grid search) o algoritmos más avanzados como la optimización bayesiana.
    .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-lg-9
          .tarjeta.bg-color-5.p-4
            p.mb-3 Además, es importante considerar la ingeniería de características. Esto implica seleccionar, transformar o crear nuevas variables que puedan mejorar el rendimiento del modelo. Por ejemplo, en un problema de predicción de ventas, podríamos crear una nueva característica que represente la estacionalidad, como el mes del año o si es un día festivo.
            p.mb-3 La validación cruzada es otra técnica clave en esta etapa. Al dividir el conjunto de datos en múltiples subconjuntos y entrenar el modelo varias veces, podemos obtener una estimación más confiable de su rendimiento y reducir la variabilidad asociada a una sola división de entrenamiento y prueba.
            p.mb-0 Finalmente, es esencial monitorear continuamente el desempeño del modelo una vez que se implementa en un entorno real. Los datos pueden cambiar con el tiempo, un fenómeno conocido como deriva de datos, lo que puede degradar el rendimiento del modelo. Establecer un proceso de reentrenamiento periódico y ajustar el modelo en función de nuevos datos garantiza que siga siendo preciso y robusto.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/6.png')

    .titulo-tres: h3.mb-0 Conclusión
    p.mb-5 En este capítulo, hemos profundizado en métricas avanzadas y técnicas esenciales para la evaluación y ajuste de modelos de aprendizaje automático. La matriz de confusión y el análisis de errores nos permiten entender detalladamente el desempeño del modelo y las razones detrás de sus errores. Las curvas ROC y el AUC ofrecen una perspectiva completa de la capacidad de discriminación del modelo, especialmente útil en situaciones donde los umbrales de decisión pueden variar.
    .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-lg-4.d-none.d-lg-block
            img.mb-0(src='@/assets/curso/temas/t3/7.svg')

        .col-sm-12.col-lg-8
          .tarjeta.bg-color-2.py-2.px-3
            p.mb-3.fw-bold Abordar el problema de los datos desbalanceados es determinante para asegurar que el modelo sea efectivo en todas las clases, especialmente en aquellas que son de mayor interés pero menos representadas. Las estrategias discutidas proporcionan herramientas prácticas para manejar este desafío.
            p.mb-0.fw-bold  El proceso de probar y ajustar el modelo es continuo y vital para garantizar su relevancia y eficacia. Al aplicar técnicas de optimización de hiperparámetros, ingeniería de características y validación adecuada, podemos mejorar significativamente el rendimiento del modelo. Además, al mantener un monitoreo constante y adaptativo, nos aseguramos de que el modelo siga siendo útil en un entorno cambiante.
    p.mb-0 Este enfoque integral en la evaluación y ajuste de modelos fortalece nuestra capacidad para desarrollar soluciones de aprendizaje automático precisas, robustas y adaptables a las necesidades reales, cumpliendo con los objetivos de precisión y robustez que son fundamentales en el campo de la inteligencia artificial.
</template>

<script>
export default {
  name: 'Tema3',
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
