<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Comunicación y documentación de resultados
    .bg-color-9.p-4.mb-5
      p.mb-0 En el ámbito de la inteligencia artificial y el machine learning, no es suficiente con desarrollar modelos precisos y robustos; es también clave comunicar eficazmente los hallazgos y resultados obtenidos. La capacidad para presentar información técnica de manera clara y accesible es esencial para que las partes interesadas comprendan el valor y las implicaciones de los modelos desarrollados. En este capítulo, exploraremos las mejores prácticas para la comunicación y documentación de resultados, incluyendo el arte del storytelling en ciencia de datos, la elaboración de informes técnicos, el desarrollo de manuales técnicos y la socialización y presentación de resultados.
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 El arte del #[i storytelling] en ciencia de datos
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
          p.mb-3 El #[i storytelling], o narración de historias, es una técnica poderosa que permite transmitir información compleja de manera comprensible y atractiva. En ciencia de datos, el storytelling ayuda a contextualizar los análisis y resultados, conectándolos con las necesidades y objetivos del negocio o proyecto.
          .tarjeta.bg-color-6.p-3
              p.mb-3 Una buena historia en ciencia de datos debe tener una estructura clara, que generalmente incluye:
              ul.lista-ul--color.color-primario.mb-0
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 #[b Introducción:] presentación del problema o pregunta de investigación.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 #[b Desarrollo:] descripción del enfoque metodológico y los análisis realizados.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 #[b Clímax:] presentación de los hallazgos más significativos.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 #[b Desenlace:] interpretación de los resultados y sus implicaciones.
                li.d-flex.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 #[b Conclusión:] recomendaciones y pasos a seguir.
      .col-sm-12.col-lg-4.d-none.d-lg-block: img(src='@/assets/curso/temas/t4/1.svg')
    p.mb-3 Por ejemplo, al presentar un modelo de predicción de abandono de clientes, podríamos comenzar describiendo el impacto que el abandono tiene en la empresa, cómo se abordó el problema mediante el análisis de datos y qué resultados clave se obtuvieron. Al final, se ofrecerían recomendaciones basadas en los hallazgos para retener a los clientes.
    p.mb-5 El uso de visualizaciones es fundamental en el storytelling, ya que facilita la comprensión de datos complejos. Gráficos, diagramas y tablas ayudan a ilustrar tendencias, patrones y relaciones que respaldan la narrativa.
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2.
          span  El arte de storytelling
        img(src='@/assets/curso/temas/t4/2.svg', alt='La Figura 2 se denomina «El arte del storytelling». Ilustra el proceso de storytelling con datos en cuatro etapas conectadas secuencialmente: comienza con los Datos (análisis inicial), seguido del Contexto (negocio/audiencia), continúa con la Narrativa (historia coherente) y culmina en el Impacto (acción/decisión). En la parte inferior se muestran los elementos de soporte: visualizaciones, métricas clave y hallazgos principales.')
        figcaption Fuente: OIT, 2024.
    
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2 Elaboración de informes técnicos
    p.mb-3 Los informes técnicos son documentos que detallan de manera exhaustiva los procesos, análisis y resultados de un proyecto técnico. Su objetivo es proporcionar información precisa y detallada que permita a otros profesionales comprender y reproducir el trabajo realizado. Al elaborar un informe técnico, es importante considerar los siguientes elementos:
    .mn.p-5.bg-slyder.mb-5
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6.mb-0.mb-lg-0
              h5 Resumen ejecutivo
              p Visión general concisa del proyecto, sus objetivos, métodos y conclusiones principales.
            .col-sm-12.col-lg-6.mb-0.mb-lg-0: img(src='@/assets/curso/temas/t4/5.png', alt='')
          
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6.mb-0.mb-lg-0
              h5 Introducción
              p Contextualización del problema y objetivos específicos del proyecto.
            .col-sm-12.col-lg-6.mb-0.mb-lg-0: img(src='@/assets/curso/temas/t4/6.png', alt='Persona mostrando diagrama')

          
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6.mb-0.mb-lg-0
              h5 Metodología
              p Descripción detallada de los métodos y técnicas utilizadas, incluyendo la selección y preparación de datos, algoritmos implementados y parámetros configurados.
            .col-sm-12.col-lg-6.mb-0.mb-lg-0: img(src='@/assets/curso/temas/t4/7.png', alt='Persona trabajando en diagrama')

          
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6.mb-0.mb-lg-0
              h5 Resultados
              p Presentación de los hallazgos, acompañados de tablas, gráficos y análisis estadísticos.
            .col-sm-12.col-lg-6.mb-0.mb-lg-0: img(src='@/assets/curso/temas/t4/8.png', alt='Personas analizando documentos')

         
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6.mb-0.mb-lg-0
              h5 Discusión
              p Interpretación de los resultados, análisis de limitaciones y consideraciones sobre la validez y confiabilidad de los hallazgos.
            .col-sm-12.col-lg-6.mb-0.mb-lg-0: img(src='@/assets/curso/temas/t4/9.png', alt='Grupo de personas en reunión de discusión')

          
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6.mb-0.mb-lg-0
              h5 Conclusiones y recomendaciones
              p Síntesis de las principales conclusiones y sugerencias para futuras acciones o investigaciones.
            .col-sm-12.col-lg-6.mb-0.mb-lg-0: img(src='@/assets/curso/temas/t4/10.png', alt='Personas trabajando en tablero')

         
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6.mb-0.mb-lg-0
              h5 Anexos
              p Información adicional, como código fuente, detalles técnicos específicos o datos complementarios.
            .col-sm-12.col-lg-6.mb-0.mb-lg-0: img(src='@/assets/curso/temas/t4/11.png', alt='Código fuente en pantalla')

    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-10
        .tarjeta.bg-color-11.p-4
          p.mb-0 Es esencial que el informe sea claro y esté bien estructurado, facilitando su lectura y comprensión. El uso adecuado del lenguaje técnico y la precisión en la terminología son determinantes para mantener la rigurosidad del documento.
    
    
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3 Desarrollo de manuales técnicos
    p.mb-5  Un manual técnico es un documento que proporciona instrucciones detalladas sobre cómo utilizar, mantener o desarrollar un sistema o producto. En el contexto de modelos de inteligencia artificial, un manual técnico puede incluir instrucciones para la implementación, configuración y mantenimiento del modelo. Al desarrollar un manual técnico, se deben considerar los siguientes aspectos:
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Claridad y precisión")
            p.mb-0 Las instrucciones deben ser claras, concisas y libres de ambigüedades.
          
          div(titulo="Estructura lógica")
            p.mb-0 Organizar el contenido de manera que siga un flujo lógico, facilitando al usuario encontrar la información que necesita.
          
          div(titulo="Instrucciones paso a paso")
            p.mb-0 Proporcionar guías detalladas para tareas específicas, apoyadas por capturas de pantalla o diagramas cuando sea pertinente.
          
          div(titulo="Glosario de términos")
            p.mb-0 Incluir definiciones de términos técnicos para ayudar a los usuarios menos familiarizados con el tema.
          
          div(titulo="Soporte y mantenimiento")
            p.mb-0 Instrucciones sobre cómo actualizar el modelo, resolver problemas comunes y contactar al equipo de soporte.
      
      .col-sm-12.col-lg-3.d-none.d-lg-block: img(src='@/assets/curso/temas/t4/3.png', alt='')

    p.mb-0 Por ejemplo, un manual técnico para un modelo de clasificación de imágenes podría incluir instrucciones sobre cómo instalar las dependencias necesarias, cómo preparar los datos de entrada, cómo ejecutar el modelo y cómo interpretar los resultados.
    
    
    
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.4 Socialización y presentación de resultados
    p.mb-5 La socialización de los resultados implica compartir los hallazgos con diferentes audiencias, que pueden incluir equipos técnicos, gerentes, clientes o el público en general. Es importante adaptar la presentación según el público objetivo, ajustando el nivel de detalle y el lenguaje utilizado. Al preparar una presentación de resultados, se deben considerar los siguientes puntos:
    .mn.p-5.bg-slyder.mb-5
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6.mb-0.mb-lg-0
              h5 Conocer a la audiencia
              p Comprender el nivel de conocimiento técnico y los intereses de la audiencia para ajustar el contenido y la terminología.
            .col-sm-12.col-lg-6.mb-0.mb-lg-0: img(src='@/assets/curso/temas/t4/12.png', alt='')
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6.mb-0.mb-lg-0
              h5 Estructurar la presentación
              p Organizar la información de manera lógica, comenzando con una introducción clara y avanzando hacia los detalles más específicos.
            .col-sm-12.col-lg-6.mb-0.mb-lg-0: img(src='@/assets/curso/temas/t4/13.png', alt='Personas organizando información con notas adhesivas')

          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6.mb-0.mb-lg-0
              h5 Utilizar recursos visuales
              p Incorporar gráficos, diagramas y tablas que apoyen la narrativa y faciliten la comprensión.
            .col-sm-12.col-lg-6.mb-0.mb-lg-0: img(src='@/assets/curso/temas/t4/14.png', alt='Gráficos y diagramas estadísticos')
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6.mb-0.mb-lg-0
              h5 Destacar los puntos clave
              p Enfatizar los hallazgos más importantes y sus implicaciones prácticas.
            .col-sm-12.col-lg-6.mb-0.mb-lg-0: img(src='@/assets/curso/temas/t4/15.png', alt='Lupa sobre piezas de rompecabezas')

          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6.mb-0.mb-lg-0
              h5 Fomentar la interacción
              p Incluir espacios para preguntas y discusiones, lo que permite aclarar dudas y obtener retroalimentación.
            .col-sm-12.col-lg-6.mb-0.mb-lg-0: img(src='@/assets/curso/temas/t4/16.png', alt='Personas interactuando con iconos de comunicación digital')
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/4.svg')
      .col-sm-12.col-lg-8
        p.mb-4 Algunas viñetas para tener en cuenta al presentar resultados:
        .bg-color-8.p-4
          ul.lista-ul--color.color-primario.mb-0
            li.d-flex.bg-color-7.p-1.px-2
              i.fas.fa-check-circle
              p.mb-0 #[b Sé conciso:] evita sobrecargar a la audiencia con información excesiva.
            li.d-flex.bg-color-7.p-1.px-2
              i.fas.fa-check-circle
              p.mb-0 #[b Usa ejemplos prácticos:] ilustra los conceptos con casos reales o simulaciones.
            li.d-flex.bg-color-7.p-1.px-2
              i.fas.fa-check-circle
              p.mb-0 #[b Anticipa preguntas:] prepárate para abordar inquietudes comunes o puntos de confusión.
            li.d-flex.bg-color-7.p-1.px-2.mb-0
              i.fas.fa-check-circle
              p.mb-0 Además, es recomendable practicar la presentación con anticipación y considerar el uso de herramientas interactivas o demostraciones en vivo para hacer la sesión más dinámica.
    
    .titulo-tres: h3.mb-0 Conclusiones
    p.mb-0 La comunicación y documentación de resultados son componentes esenciales en cualquier proyecto de inteligencia artificial y machine learning. A través del storytelling, podemos conectar los hallazgos técnicos con narrativas que resuenen con las necesidades y objetivos de las partes interesadas. Los informes técnicos y manuales proporcionan documentación detallada y estructurada que respalda la reproducibilidad y el mantenimiento del trabajo realizado. Finalmente, la socialización efectiva de los resultados asegura que el valor generado por los modelos desarrollados sea comprendido y aprovechado al máximo por todos los involucrados.
</template>

<script>
export default {
  name: 'Tema4',
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
