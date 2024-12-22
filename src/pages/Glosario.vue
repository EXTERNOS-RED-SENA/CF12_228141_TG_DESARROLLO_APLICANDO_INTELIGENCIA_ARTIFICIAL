<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
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
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
