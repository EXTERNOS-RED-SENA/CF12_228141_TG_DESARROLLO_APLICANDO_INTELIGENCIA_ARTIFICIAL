<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'AI Planet. (n.d.). <em>Evaluación de Modelos de Aprendizaje No Supervisado.</em>',
        link:
          'https://aiplanet.com/learn/machine-learning-es/analisis-y-ciencia-de-datos/clustering/1624/evaluacion-de-modelos-de-aprendizaje-no-supervisado',
      },
      {
        referencia: 'AWS. (n.d.). <em>¿Qué es el machine learning</em>?',
        link: 'https://aws.amazon.com/es/what-is/machine-learning/',
      },
      {
        referencia:
          'Barbara, J. (2023). <em>Practical C++ Backend Programming: Crafting Databases, APIs, and Web Servers for High-Performance Backend.</em> GitforGiu.',
        link: '',
      },
      {
        referencia:
          'Brandão, M., Iago, & da Costa, C. (2022). <em>Fault diagnosis of rotary machines using machine learning. Eletrônica de Potência</em>, 27(03), 1-8.',
        link: '',
      },
      {
        referencia:
          'García, S., Luengo, J., & Herrera, F. (2021). <em>Data Preprocessing in Data Mining and Machine learning:</em> New Frameworks, Algorithms and Applications. Springer.',
        link: '',
      },
      {
        referencia:
          "Géron, A. (2022). <em> Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow: Concepts, tools, and techniques to build intelligent systems (3rd ed.)<em>. O'Reilly Media.",
        link: '',
      },
      {
        referencia:
          'Knaflic, C. N. (2023). <em> Storytelling with Data: A Data Visualization Guide for Business Professionals (3rd ed.).</em> Wiley.',
        link: '',
      },
      {
        referencia:
          'Molnar, C. (2022). <em> Interpretable Machine learning: A Guide for Making Black Box Models Explainable (2nd ed.).</em> Leanpub.',
        link: 'https://christophm.github.io/interpretable-ml-book/',
      },
      {
        referencia:
          'Moreno-Jiménez, J. M., & Escobar Urmeneta, M. T. (2020). <em> El proceso analítico jerárquico (AHP). Fundamentos, metodología y aplicaciones.</em> RECTA Monográficos, 1, 21-53.',
        link: '',
      },
      {
        referencia:
          'Neill, F. (2023). <em> Python Data Analytics: With Pandas, NumPy, and Matplotlib </em>(3rd ed.). Apress.',
        link: '',
      },
      {
        referencia:
          'Parra, A. (2021). <em> Evaluación de modelos de Machine learning para Sistemas de Detección de Intrusos en Redes IoT.</em> Universidad de los Andes.',
        link: '',
      },
      {
        referencia:
          'Raschka, S., Patterson, J., & Nolet, C. (2022). <em> Machine learning with PyTorch and Scikit-Learn: Develop machine learning and deep learning models with Python.</em> Packt Publishing.',
        link: '',
      },
      {
        referencia:
          'Rudin, C., Chen, C., Chen, Z., Huang, H., Semenova, L., & Zhong, C. (2022). <em> Interpretable machine learning: Fundamental principles and 10 grand challenges.</em> Statistics Surveys, 16, 1-85.',
        link: 'https://doi.org/10.1214/21-SS133',
      },
      {
        referencia:
          'Sarker, I. H. (2021, May 1). <em> Machine learning: Algorithms, Real-World Applications and Research Directions.</em> Springer Science.',
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
          'Vesselinov, V. V. (2019). <em> Machine learning. Office of Scientific and Technical Information</em> (OSTI).',
        link: 'http://dx.doi.org/10.2172/1492563',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
