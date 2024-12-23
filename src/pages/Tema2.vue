<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas de ensamblado de modelos de inteligencia artificial
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        p.mb-0 Los métodos de ensamblado representan un enfoque poderoso en el campo del #[em machine learning] para mejorar el rendimiento de los modelos predictivos. Al combinar múltiples modelos base, es posible superar las limitaciones individuales y obtener predicciones más precisas y robustas. Este capítulo introduce los fundamentos de las técnicas de ensamblado, explorando cómo algoritmos como #[em Bagging, Random forest y Boosting] pueden utilizarse para reducir la variabilidad, disminuir el sesgo y manejar datos complejos. A través de esta exploración, proporcionaremos una comprensión profunda de cómo y cuándo aplicar estos métodos para optimizar modelos de inteligencia artificial en diversas aplicaciones.
      .col-sm-12.col-lg-4.d-none.d-lg-block: img(src='@/assets/curso/temas/t2/1.png', alt='')
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1	Fundamentos de los métodos de ensamblado
    p.mb-5 Los métodos de ensamblado, o #[em ensemble methods], son técnicas que combinan múltiples modelos de aprendizaje automático para mejorar el rendimiento predictivo en comparación con modelos individuales. la idea central es que al combinar varios modelos, se puede reducir la variancia, el sesgo o mejorar las predicciones generales.
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-11
        .row.justify-content-center.align-items-center.mb-5
          .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/2.png')

          .col-sm-12.col-lg-7
            .tarjeta.bg-color-5.p-3
              p.mb-3 Algunas ventajas de los métodos de ensamblado son:
              ul.lista-ul--color.color-primario.mb-0
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 #[b Mejora de la precisión:] al combinar modelos, se suelen obtener predicciones más precisas.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 #[b Reducción de la variabilidad:] se mitiga el efecto de modelos que podrían haber sobreajustado los datos.
                li.d-flex.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 #[b Robustez:] los ensamblados son generalmente más resistentes al ruido y a los datos atípicos.

        .row.justify-content-center.align-items-center.mb-5
          .col-sm-12.col-lg-7
            .tarjeta.bg-color-6.p-3
              p.mb-3 Tipos principales de métodos de ensamblado:
              ul.lista-ul--color.color-primario.mb-0
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 #[b Promediación (#[i averaging]):] los modelos se combinan promediando sus predicciones. ejemplos incluyen #[i Bagging] y #[i Random forest].
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 #[b.fst-italic Boosting:] los modelos se construyen secuencialmente, y cada modelo intenta corregir los errores del anterior.
                li.d-flex.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 #[b.fst-italic Stacking:] combina predicciones de múltiples modelos a través de un modelo meta.

          .col-sm-12.col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/3.png', alt='Persona señalando gráfico ascendente')
    
    
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 #[i Bagging] (<i>bootstrap aggregating</i>)
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/4.png')
      .col-sm-12.col-lg-7
        p.mb-4 El #[i Bagging] es una técnica que mejora la estabilidad y precisión de los algoritmos de machine #[i learning] al reducir la variancia y ayudar a evitar el sobreajuste consiste en:
        .bg-color-2.p-3
          ul.lista-ul--color.color-primario.mb-0
            li.d-flex.bg-color-7.p-1.px-2
              i.fas.fa-check-circle
              p.mb-0 Muestreo aleatorio con reemplazo: se crean múltiples subconjuntos de datos a partir del conjunto de entrenamiento original.
            li.d-flex.bg-color-7.p-1.px-2
              i.fas.fa-check-circle
              p.mb-0 Entrenamiento de modelos independientes: se entrena un modelo separado en cada subconjunto.
            li.d-flex.bg-color-7.p-1.mb-0.px-2
              i.fas.fa-check-circle
              p.mb-0 Agregación de predicciones: las predicciones se combinan promediando (para regresión) o mediante votación mayoritaria (para clasificación).
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-7
        p.mb-4 Ventajas del #[i Bagging]:
        .bg-color-8.p-4
          ul.lista-ul--color.color-primario.mb-0
            li.d-flex.bg-color-7.p-1.px-2
              i.fas.fa-check-circle
              p.mb-0 Reducción de variancia: al promediar múltiples modelos, se reduce la variabilidad de las predicciones.
            li.d-flex.bg-color-7.p-1.px-2.mb-0
              i.fas.fa-check-circle
              p.mb-0 Simplicidad: fácil de implementar y aplicar a diversos algoritmos.
      .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/5.png')
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 #[i Random forest]
    p.mb-5 El #[i random forest] es una extensión del #[i Bagging] que utiliza árboles de decisión como modelos base y agrega aleatoriedad adicional.
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1.
          span  Arquitectura #[i Random forest]
        img(src='@/assets/curso/temas/t2/6.svg', alt='')
        figcaption Fuente: OIT, 2024.
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        .p-5.bg-color-2.mb-0
          p.mb-3 El método Random forest se caracteriza por lo siguiente:
          ul.lista-ul--color.color-primario.mb-0
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 #[b Selección aleatoria de características:] en cada división del árbol, se considera un subconjunto aleatorio de características en lugar de todas.
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 #[b Construcción de múltiples árboles:] se construyen numerosos árboles utilizando diferentes subconjuntos de datos y características.
            li.d-flex.mb-0
              i.fas.fa-check-circle
              p.mb-0 #[b Agregación de resultados:] las predicciones de los árboles se combinan por promedio (regresión) o votación mayoritaria (clasificación).
      .col-sm-12.col-lg-4.d-none.d-lg-block.mb-lg-0.mb-3: img(src='@/assets/curso/temas/t2/7.svg', alt='')
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-12
        .p-4.bg-color-9.mb-0
          p.mb-4 Ventajas del #[i Random forest]:
         
          ul.lista-ul--color.color-primario.mb-0
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 #[b Mejora de la precisión:] suele superar a los árboles de decisión individuales.
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 #[b Reducción de la correlación entre modelos:] la selección aleatoria de características disminuye la correlación entre los árboles.
            li.d-flex.mb-0
              i.fas.fa-check-circle
              p.mb-0 #[b Manejo de datos de alta dimensionalidad:] funciona bien con muchos atributos y puede estimar variables importantes.
    
    
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Métodos de #[i Boosting]
    p.mb-5 El #[i Boosting] es otra familia de métodos de ensamblado que construye modelos secuencialmente, enfocándose en corregir los errores de los modelos anteriores. a diferencia del #[i Bagging], que construye modelos independientes, el #[i Boosting] da más peso a las observaciones que fueron mal predichas en iteraciones anteriores. Los principales algoritmos de #[i Boosting] son los siguientes:
    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="<i>Adaboost</i>")
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-5.d-none.d-lg-block.mb-lg-0.mb-3: img(src='@/assets/curso/temas/t2/8.png', alt='')
          .col-sm-12.col-lg-7
            h4.mb-4 #[i Adaboost] (#[i adaptive Boosting]):
            p.mb-3 #[b Funcionamiento:] inicializa pesos iguales para todas las observaciones. en cada iteración, se ajusta un modelo y se actualizan los pesos aumentando aquellos de las observaciones mal clasificadas.
            p.mb-0 #[b Agregación:] los modelos se combinan en una suma ponderada donde los pesos se determinan según la precisión de cada modelo.

      .py-4.py-md-5(titulo="<i>Gradient Boosting</i>")
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-5.d-none.d-lg-block.mb-lg-0.mb-3: img(src='@/assets/curso/temas/t2/9.png', alt='')
          .col-sm-12.col-lg-7
            h4.mb-4 #[i Gradient Boosting]:
            p.mb-3 #[b Funcionamiento:] los modelos se construyen secuencialmente, y cada uno intenta minimizar el error residual del modelo anterior.
            p.mb-0 #[b Agregación:] se suman las predicciones de todos los modelos anteriores para mejorar gradualmente el rendimiento.

      .py-4.py-md-5(titulo="<i>XGBoost</i>")
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-5.d-none.d-lg-block.mb-lg-0.mb-3: img(src='@/assets/curso/temas/t2/10.png', alt='')
          .col-sm-12.col-lg-7
            h4.mb-4 #[i XGBoost] (#[i extreme gradient Boosting]):
            p.mb-3 #[b Mejoras sobre #[em gradient Boosting]:] optimización de velocidad y rendimiento mediante técnicas como paralelización, regularización y manejo eficiente de memoria.
            p.mb-0 #[b Uso común:] muy popular en competiciones de machine #[i learning] por su alta precisión y eficiencia.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-7
        .tarjeta.bg-color-5.p-3.mb-3
          p.mb-3.fw-bold Ventajas del #[em Boosting:]
          ul.lista-ul--color.color-primario.mb-0
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Alta precisión: tiende a producir modelos con alto rendimiento predictivo.

            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Flexibilidad: puede utilizarse con diferentes tipos de modelos base.

            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Manejo de datos desbalanceados: al enfocarse en observaciones difíciles, puede mejorar la predicción de clases minoritarias.
        p.mb-3.fw-bold Consideraciones al usar #[em Boosting:]
        ul.lista-ul--color.color-primario.mb-0
          li.d-flex
            i.fas.fa-check-circle
            p.mb-0 Propensión al sobreajuste: debido a su naturaleza, es importante regularizar y ajustar correctamente los hiperparámetros.
          li.d-flex
            i.fas.fa-check-circle
            p.mb-0 Mayor tiempo de entrenamiento: los modelos se construyen secuencialmente, lo que puede aumentar el tiempo de cómputo.
      .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/11.svg')
    
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.5 Evaluación de modelos ensamblados
    p.mb-5 la evaluación de modelos ensamblados sigue los mismos principios que la de modelos individuales, pero con algunas consideraciones adicionales.
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-3.d-none.d-lg-block: img(src='@/assets/curso/temas/t2/12.png', alt='')
      .col-sm-12.col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Validación cruzada")
            p.mb-3 Es fundamental utilizar técnicas de validación cruzada para evaluar el rendimiento real del modelo y evitar el sobreajuste.
            ul.lista-ul--color.color-primario.mb-0
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b.fst-italic k-fold cross-validation:] se divide el conjunto de datos en k pliegues y se realiza entrenamiento y validación k veces, cambiando el pliegue de validación cada vez.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b.fst-italic stratified k-fold:] similar al anterior, pero mantiene la proporción de clases en cada pliegue, útil en problemas de clasificación desbalanceados.

          div(titulo="Importancia de variables")
            p.mb-3 Los métodos de ensamblado como #[em random forest] permiten evaluar la importancia de las variables, lo cual es útil para:
            ul.lista-ul--color.color-primario.mb-0
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b Interpretación del modelo:] identificar qué variables contribuyen más a las predicciones.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b Reducción de dimensionalidad:] eliminar variables irrelevantes para simplificar el modelo.

          div(titulo="Métricas específicas")
            p.mb-3 Además de las métricas comunes, es posible que desee evaluar:
            ul.lista-ul--color.color-primario.mb-0
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b #[i Out-of-bag error (oob error):]] en #[i Bagging] y #[i Random forest] es una estimación del error de generalización calculado utilizando las muestras no incluidas en cada #[em bootstrap].
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b Curvas de aprendizaje:] gráficas que muestran cómo cambia el rendimiento del modelo con respecto al número de árboles o iteraciones, útil para determinar cuándo se alcanza un rendimiento óptimo.
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 2.
          span Comparación de métodos de ensamblado
        .tabla-a.color-acento-botones.mb-5
          table(alt=' La Tabla 2 se denomina «Comparación de métodos de ensamblado». Se comparan tres técnicas principales de ensamblado: Bagging, Random forest y Boosting. Se analizan aspectos como la construcción de modelos, el tipo de base learner, la capacidad de reducir varianza y sesgo, la selección aleatoria de características y la propensión al sobreajuste. Cada método presenta características distintivas que lo hacen adecuado para diferentes escenarios.')
            caption Fuente: OIT, 2024.
            thead.border-0
              tr(style="background-color: #13DE61")
                th Características
                th #[i Bagging]
                th #[i Random forest]
                th #[i Boosting]
            tbody
              tr
                td.text-center Construcción de modelos
                td.text-center Paralelo
                td.text-center Paralelo
                td.text-center Secuencial
              tr
                td.text-center Base #[i learner]
                td.text-center Cualquier modelo
                td.text-center Árboles de decisión
                td.text-center Cualquier modelo
              tr
                td.text-center Reducción de variancia
                td.text-center Sí
                td.text-center Sí
                td.text-center Sí
              tr
                td.text-center Reducción de sesgo
                td.text-center No
                td.text-center No
                td.text-center Sí
              tr
                td.text-center Selección aleatoria de #[i features]
                td.text-center No
                td.text-center Sí
                td.text-center No
              tr
                td.text-center Propenso al sobreajuste
                td.text-center Menos
                td.text-center Menos
                td.text-center Más si no se regula
    
    Separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.6 Casos prácticos y aplicaciones
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-7
        p.mb-4 Finalmente, es útil discutir casos prácticos donde los métodos de ensamblado han demostrado ser efectivos:
        .bg-color-5.p-3
          ul.lista-ul--color.color-primario.mb-0
            li.d-flex.bg-color-7.p-1.px-2
              i.fas.fa-check-circle
              p.mb-0 #[b Detección de fraude:] #[em Boosting] es utilizado para mejorar la detección de transacciones fraudulentas.
            li.d-flex.bg-color-7.p-1.px-2
              i.fas.fa-check-circle
              p.mb-0 #[b Predicción en medicina:] #[i random forest] ha sido aplicado en la predicción de enfermedades debido a su capacidad para manejar datos complejos y variables.
            li.d-flex.bg-color-7.p-1.px-2
              i.fas.fa-check-circle
              p.mb-0 #[b Sistemas de recomendación:] los ensamblados pueden mejorar la precisión de recomendaciones al combinar diferentes modelos.
      .col-sm-12.col-lg-5.d-none.d-lg-block: img(src='@/assets/curso/temas/t2/13.png')
    .titulo-tres: h3.mb-0 Conclusiones
    p.mb-0 Los métodos de ensamblado son herramientas poderosas en el arsenal de#[em machine learning] que permiten mejorar la precisión y robustez de los modelos, al combinar múltiples modelos, es posible superar las limitaciones de modelos individuales y obtener mejores resultados en una amplia gama de aplicaciones, sin embargo, es importante comprender las diferencias entre las distintas técnicas de ensamblado y saber cuándo aplicarlas adecuadamente. En el próximo capítulo, profundizaremos en las métricas avanzadas de evaluación y en cómo ajustar los modelos para optimizar su rendimiento

</template>

<script>
export default {
  name: 'Tema2',
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
