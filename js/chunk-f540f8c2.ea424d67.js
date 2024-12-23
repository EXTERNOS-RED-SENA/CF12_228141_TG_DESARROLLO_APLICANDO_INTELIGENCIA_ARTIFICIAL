(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f540f8c2"],{"0df7":function(s,a,e){s.exports=e.p+"img/5.3dccc0f4.png"},"31ef":function(s,a,e){s.exports=e.p+"img/9.846bcf3a.png"},5500:function(s,a,e){s.exports=e.p+"img/13.deac2a2c.png"},"5d3a":function(s,a,e){s.exports=e.p+"img/3.c42e1cf5.png"},"6ad6":function(s,a,e){s.exports=e.p+"img/7.73411ebf.svg"},7709:function(s,a,e){s.exports=e.p+"img/8.3dddf9cb.png"},"8a95":function(s,a,e){s.exports=e.p+"img/4.a4c6e299.png"},9461:function(s,a,e){"use strict";e.r(a);var t=function(){var s=this,a=s._self._c;return a("div",{staticClass:"curso-main-container pb-3"},[a("BannerInterno"),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[s._m(0),s._m(1),a("Separador"),s._m(2),s._m(3),s._m(4),a("Separador"),s._m(5),s._m(6),s._m(7),a("Separador"),s._m(8),s._m(9),s._m(10),s._m(11),s._m(12),a("Separador"),s._m(13),s._m(14),a("TabsC",{staticClass:"color-acento-contenido mb-5"},[a("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"<i>Adaboost</i>"}},[a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-sm-12 col-lg-5 d-none d-lg-block mb-lg-0 mb-3"},[a("img",{attrs:{src:e("7709"),alt:""}})]),a("div",{staticClass:"col-sm-12 col-lg-7"},[a("h4",{staticClass:"mb-4"},[a("i",[s._v("Adaboost")]),s._v(" ("),a("i",[s._v("adaptive Boosting")]),s._v("):")]),a("p",{staticClass:"mb-3"},[a("b",[s._v("Funcionamiento:")]),s._v(" inicializa pesos iguales para todas las observaciones. en cada iteración, se ajusta un modelo y se actualizan los pesos aumentando aquellos de las observaciones mal clasificadas.")]),a("p",{staticClass:"mb-0"},[a("b",[s._v("Agregación:")]),s._v(" los modelos se combinan en una suma ponderada donde los pesos se determinan según la precisión de cada modelo.")])])])]),a("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"<i>Gradient Boosting</i>"}},[a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-sm-12 col-lg-5 d-none d-lg-block mb-lg-0 mb-3"},[a("img",{attrs:{src:e("31ef"),alt:""}})]),a("div",{staticClass:"col-sm-12 col-lg-7"},[a("h4",{staticClass:"mb-4"},[a("i",[s._v("Gradient Boosting")]),s._v(":")]),a("p",{staticClass:"mb-3"},[a("b",[s._v("Funcionamiento:")]),s._v(" los modelos se construyen secuencialmente, y cada uno intenta minimizar el error residual del modelo anterior.")]),a("p",{staticClass:"mb-0"},[a("b",[s._v("Agregación:")]),s._v(" se suman las predicciones de todos los modelos anteriores para mejorar gradualmente el rendimiento.")])])])]),a("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"<i>XGBoost</i>"}},[a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-sm-12 col-lg-5 d-none d-lg-block mb-lg-0 mb-3"},[a("img",{attrs:{src:e("ef4d"),alt:""}})]),a("div",{staticClass:"col-sm-12 col-lg-7"},[a("h4",{staticClass:"mb-4"},[a("i",[s._v("XGBoost")]),s._v(" ("),a("i",[s._v("extreme gradient Boosting")]),s._v("):")]),a("p",{staticClass:"mb-3"},[a("b",[s._v("Mejoras sobre "),a("em",[s._v("gradient Boosting")]),s._v(":")]),s._v(" optimización de velocidad y rendimiento mediante técnicas como paralelización, regularización y manejo eficiente de memoria.")]),a("p",{staticClass:"mb-0"},[a("b",[s._v("Uso común:")]),s._v(" muy popular en competiciones de machine "),a("i",[s._v("learning")]),s._v(" por su alta precisión y eficiencia.")])])])])]),s._m(15),a("Separador"),s._m(16),a("p",{staticClass:"mb-5"},[s._v("la evaluación de modelos ensamblados sigue los mismos principios que la de modelos individuales, pero con algunas consideraciones adicionales.")]),a("div",{staticClass:"row justify-content-center mb-5"},[s._m(17),a("div",{staticClass:"col-sm-12 col-lg-9"},[a("AcordionA",{staticClass:"mb-5",attrs:{tipo:"a","clase-tarjeta":"tarjeta tarjeta--azul"}},[a("div",{attrs:{titulo:"Validación cruzada"}},[a("p",{staticClass:"mb-3"},[s._v("Es fundamental utilizar técnicas de validación cruzada para evaluar el rendimiento real del modelo y evitar el sobreajuste.")]),a("ul",{staticClass:"lista-ul--color color-primario mb-0"},[a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",{staticClass:"fst-italic"},[s._v("k-fold cross-validation:")]),s._v(" se divide el conjunto de datos en k pliegues y se realiza entrenamiento y validación k veces, cambiando el pliegue de validación cada vez.")])]),a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",{staticClass:"fst-italic"},[s._v("stratified k-fold:")]),s._v(" similar al anterior, pero mantiene la proporción de clases en cada pliegue, útil en problemas de clasificación desbalanceados.")])])])]),a("div",{attrs:{titulo:"Importancia de variables"}},[a("p",{staticClass:"mb-3"},[s._v("Los métodos de ensamblado como "),a("em",[s._v("random forest")]),s._v(" permiten evaluar la importancia de las variables, lo cual es útil para:")]),a("ul",{staticClass:"lista-ul--color color-primario mb-0"},[a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",[s._v("Interpretación del modelo:")]),s._v(" identificar qué variables contribuyen más a las predicciones.")])]),a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",[s._v("Reducción de dimensionalidad:")]),s._v(" eliminar variables irrelevantes para simplificar el modelo.")])])])]),a("div",{attrs:{titulo:"Métricas específicas"}},[a("p",{staticClass:"mb-3"},[s._v("Además de las métricas comunes, es posible que desee evaluar:")]),a("ul",{staticClass:"lista-ul--color color-primario mb-0"},[a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",[a("i",[s._v("Out-of-bag error (oob error):")])]),s._v(" en "),a("i",[s._v("Bagging")]),s._v(" y "),a("i",[s._v("Random forest")]),s._v(" es una estimación del error de generalización calculado utilizando las muestras no incluidas en cada "),a("em",[s._v("bootstrap")]),s._v(".")])]),a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",[s._v("Curvas de aprendizaje:")]),s._v(" gráficas que muestran cómo cambia el rendimiento del modelo con respecto al número de árboles o iteraciones, útil para determinar cuándo se alcanza un rendimiento óptimo.")])])])])])],1)]),s._m(18),a("Separador"),s._m(19),s._m(20),s._m(21),s._m(22)],1)],1)},i=[function(){var s=this,a=s._self._c;return a("div",{staticClass:"titulo-principal color-acento-contenido"},[a("div",{staticClass:"titulo-principal__numero"},[a("span",[s._v("2")])]),a("h1",[s._v("Técnicas de ensamblado de modelos de inteligencia artificial")])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-sm-12 col-lg-8"},[a("p",{staticClass:"mb-0"},[s._v("Los métodos de ensamblado representan un enfoque poderoso en el campo del "),a("em",[s._v("machine learning")]),s._v(" para mejorar el rendimiento de los modelos predictivos. Al combinar múltiples modelos base, es posible superar las limitaciones individuales y obtener predicciones más precisas y robustas. Este capítulo introduce los fundamentos de las técnicas de ensamblado, explorando cómo algoritmos como "),a("em",[s._v("Bagging, Random forest y Boosting")]),s._v(" pueden utilizarse para reducir la variabilidad, disminuir el sesgo y manejar datos complejos. A través de esta exploración, proporcionaremos una comprensión profunda de cómo y cuándo aplicar estos métodos para optimizar modelos de inteligencia artificial en diversas aplicaciones.")])]),a("div",{staticClass:"col-sm-12 col-lg-4 d-none d-lg-block"},[a("img",{attrs:{src:e("af19"),alt:""}})])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_1","data-aos":"fade-right"}},[a("h2",[s._v("2.1 Fundamentos de los métodos de ensamblado")])])},function(){var s=this,a=s._self._c;return a("p",{staticClass:"mb-5"},[s._v("Los métodos de ensamblado, o "),a("em",[s._v("ensemble methods")]),s._v(", son técnicas que combinan múltiples modelos de aprendizaje automático para mejorar el rendimiento predictivo en comparación con modelos individuales. la idea central es que al combinar varios modelos, se puede reducir la variancia, el sesgo o mejorar las predicciones generales.")])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-sm-12 col-lg-11"},[a("div",{staticClass:"row justify-content-center align-items-center mb-5"},[a("div",{staticClass:"col-sm-12 col-lg-3 d-none d-lg-block"},[a("img",{attrs:{src:e("a01d")}})]),a("div",{staticClass:"col-sm-12 col-lg-7"},[a("div",{staticClass:"tarjeta bg-color-5 p-3"},[a("p",{staticClass:"mb-3"},[s._v("Algunas ventajas de los métodos de ensamblado son:")]),a("ul",{staticClass:"lista-ul--color color-primario mb-0"},[a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",[s._v("Mejora de la precisión:")]),s._v(" al combinar modelos, se suelen obtener predicciones más precisas.")])]),a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",[s._v("Reducción de la variabilidad:")]),s._v(" se mitiga el efecto de modelos que podrían haber sobreajustado los datos.")])]),a("li",{staticClass:"d-flex mb-0"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",[s._v("Robustez:")]),s._v(" los ensamblados son generalmente más resistentes al ruido y a los datos atípicos.")])])])])])]),a("div",{staticClass:"row justify-content-center align-items-center mb-5"},[a("div",{staticClass:"col-sm-12 col-lg-7"},[a("div",{staticClass:"tarjeta bg-color-6 p-3"},[a("p",{staticClass:"mb-3"},[s._v("Tipos principales de métodos de ensamblado:")]),a("ul",{staticClass:"lista-ul--color color-primario mb-0"},[a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",[s._v("Promediación ("),a("i",[s._v("averaging")]),s._v("):")]),s._v(" los modelos se combinan promediando sus predicciones. ejemplos incluyen "),a("i",[s._v("Bagging")]),s._v(" y "),a("i",[s._v("Random forest")]),s._v(".")])]),a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",{staticClass:"fst-italic"},[s._v("Boosting:")]),s._v(" los modelos se construyen secuencialmente, y cada modelo intenta corregir los errores del anterior.")])]),a("li",{staticClass:"d-flex mb-0"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",{staticClass:"fst-italic"},[s._v("Stacking:")]),s._v(" combina predicciones de múltiples modelos a través de un modelo meta.")])])])])]),a("div",{staticClass:"col-sm-12 col-lg-3 d-none d-lg-block"},[a("img",{attrs:{src:e("5d3a"),alt:"Persona señalando gráfico ascendente"}})])])])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_2","data-aos":"fade-right"}},[a("h2",[s._v("2.2 "),a("i",[s._v("Bagging")]),s._v(" ("),a("i",[s._v("bootstrap aggregating")]),s._v(")")])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-center align-items-center mb-5"},[a("div",{staticClass:"col-sm-12 col-lg-5 d-none d-lg-block"},[a("img",{attrs:{src:e("8a95")}})]),a("div",{staticClass:"col-sm-12 col-lg-7"},[a("p",{staticClass:"mb-4"},[s._v("El "),a("i",[s._v("Bagging")]),s._v(" es una técnica que mejora la estabilidad y precisión de los algoritmos de machine "),a("i",[s._v("learning")]),s._v(" al reducir la variancia y ayudar a evitar el sobreajuste consiste en:")]),a("div",{staticClass:"bg-color-2 p-3"},[a("ul",{staticClass:"lista-ul--color color-primario mb-0"},[a("li",{staticClass:"d-flex bg-color-7 p-1 px-2"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[s._v("Muestreo aleatorio con reemplazo: se crean múltiples subconjuntos de datos a partir del conjunto de entrenamiento original.")])]),a("li",{staticClass:"d-flex bg-color-7 p-1 px-2"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[s._v("Entrenamiento de modelos independientes: se entrena un modelo separado en cada subconjunto.")])]),a("li",{staticClass:"d-flex bg-color-7 p-1 mb-0 px-2"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[s._v("Agregación de predicciones: las predicciones se combinan promediando (para regresión) o mediante votación mayoritaria (para clasificación).")])])])])])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-center align-items-center mb-5"},[a("div",{staticClass:"col-sm-12 col-lg-7"},[a("p",{staticClass:"mb-4"},[s._v("Ventajas del "),a("i",[s._v("Bagging")]),s._v(":")]),a("div",{staticClass:"bg-color-8 p-4"},[a("ul",{staticClass:"lista-ul--color color-primario mb-0"},[a("li",{staticClass:"d-flex bg-color-7 p-1 px-2"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[s._v("Reducción de variancia: al promediar múltiples modelos, se reduce la variabilidad de las predicciones.")])]),a("li",{staticClass:"d-flex bg-color-7 p-1 px-2 mb-0"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[s._v("Simplicidad: fácil de implementar y aplicar a diversos algoritmos.")])])])])]),a("div",{staticClass:"col-sm-12 col-lg-5 d-none d-lg-block"},[a("img",{attrs:{src:e("0df7")}})])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_3","data-aos":"fade-right"}},[a("h2",[s._v("2.3 "),a("i",[s._v("Random forest")])])])},function(){var s=this,a=s._self._c;return a("p",{staticClass:"mb-5"},[s._v("El "),a("i",[s._v("random forest")]),s._v(" es una extensión del "),a("i",[s._v("Bagging")]),s._v(" que utiliza árboles de decisión como modelos base y agrega aleatoriedad adicional.")])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-sm-12 col-lg-8"},[a("div",{staticClass:"titulo-sexto color-acento-contenido",attrs:{"data-aos":"fade-right"}},[a("h5",[s._v("Figura 1.")]),a("span",[s._v(" Arquitectura "),a("i",[s._v("Random forest")])])]),a("img",{attrs:{src:e("c5b9"),alt:""}}),a("figcaption",[s._v("Fuente: OIT, 2024.")])])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-sm-12 col-lg-8"},[a("div",{staticClass:"p-5 bg-color-2 mb-0"},[a("p",{staticClass:"mb-3"},[s._v("El método Random forest se caracteriza por lo siguiente:")]),a("ul",{staticClass:"lista-ul--color color-primario mb-0"},[a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",[s._v("Selección aleatoria de características:")]),s._v(" en cada división del árbol, se considera un subconjunto aleatorio de características en lugar de todas.")])]),a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",[s._v("Construcción de múltiples árboles:")]),s._v(" se construyen numerosos árboles utilizando diferentes subconjuntos de datos y características.")])]),a("li",{staticClass:"d-flex mb-0"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",[s._v("Agregación de resultados:")]),s._v(" las predicciones de los árboles se combinan por promedio (regresión) o votación mayoritaria (clasificación).")])])])])]),a("div",{staticClass:"col-sm-12 col-lg-4 d-none d-lg-block mb-lg-0 mb-3"},[a("img",{attrs:{src:e("6ad6"),alt:""}})])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-sm-12 col-lg-12"},[a("div",{staticClass:"p-4 bg-color-9 mb-0"},[a("p",{staticClass:"mb-4"},[s._v("Ventajas del "),a("i",[s._v("Random forest")]),s._v(":")]),a("ul",{staticClass:"lista-ul--color color-primario mb-0"},[a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",[s._v("Mejora de la precisión:")]),s._v(" suele superar a los árboles de decisión individuales.")])]),a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",[s._v("Reducción de la correlación entre modelos:")]),s._v(" la selección aleatoria de características disminuye la correlación entre los árboles.")])]),a("li",{staticClass:"d-flex mb-0"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",[s._v("Manejo de datos de alta dimensionalidad:")]),s._v(" funciona bien con muchos atributos y puede estimar variables importantes.")])])])])])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_4","data-aos":"fade-right"}},[a("h2",[s._v("2.4 Métodos de "),a("i",[s._v("Boosting")])])])},function(){var s=this,a=s._self._c;return a("p",{staticClass:"mb-5"},[s._v("El "),a("i",[s._v("Boosting")]),s._v(" es otra familia de métodos de ensamblado que construye modelos secuencialmente, enfocándose en corregir los errores de los modelos anteriores. a diferencia del "),a("i",[s._v("Bagging")]),s._v(", que construye modelos independientes, el "),a("i",[s._v("Boosting")]),s._v(" da más peso a las observaciones que fueron mal predichas en iteraciones anteriores. Los principales algoritmos de "),a("i",[s._v("Boosting")]),s._v(" son los siguientes:")])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-center align-items-center mb-5"},[a("div",{staticClass:"col-sm-12 col-lg-7"},[a("div",{staticClass:"tarjeta bg-color-5 p-3 mb-3"},[a("p",{staticClass:"mb-3 fw-bold"},[s._v("Ventajas del "),a("em",[s._v("Boosting:")])]),a("ul",{staticClass:"lista-ul--color color-primario mb-0"},[a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[s._v("Alta precisión: tiende a producir modelos con alto rendimiento predictivo.")])]),a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[s._v("Flexibilidad: puede utilizarse con diferentes tipos de modelos base.")])]),a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[s._v("Manejo de datos desbalanceados: al enfocarse en observaciones difíciles, puede mejorar la predicción de clases minoritarias.")])])])]),a("p",{staticClass:"mb-3 fw-bold"},[s._v("Consideraciones al usar "),a("em",[s._v("Boosting:")])]),a("ul",{staticClass:"lista-ul--color color-primario mb-0"},[a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[s._v("Propensión al sobreajuste: debido a su naturaleza, es importante regularizar y ajustar correctamente los hiperparámetros.")])]),a("li",{staticClass:"d-flex"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[s._v("Mayor tiempo de entrenamiento: los modelos se construyen secuencialmente, lo que puede aumentar el tiempo de cómputo.")])])])]),a("div",{staticClass:"col-sm-12 col-lg-5 d-none d-lg-block"},[a("img",{attrs:{src:e("e958")}})])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_5","data-aos":"fade-right"}},[a("h2",[s._v("2.5 Evaluación de modelos ensamblados")])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"col-sm-12 col-lg-3 d-none d-lg-block"},[a("img",{attrs:{src:e("9681"),alt:""}})])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-sm-12 col-lg-8"},[a("div",{staticClass:"titulo-sexto color-acento-contenido",attrs:{"data-aos":"fade-right"}},[a("h5",[s._v("Tabla 2.")]),a("span",[s._v("Comparación de métodos de ensamblado")])]),a("div",{staticClass:"tabla-a color-acento-botones mb-5"},[a("table",{attrs:{alt:" La Tabla 2 se denomina «Comparación de métodos de ensamblado». Se comparan tres técnicas principales de ensamblado: Bagging, Random forest y Boosting. Se analizan aspectos como la construcción de modelos, el tipo de base learner, la capacidad de reducir varianza y sesgo, la selección aleatoria de características y la propensión al sobreajuste. Cada método presenta características distintivas que lo hacen adecuado para diferentes escenarios."}},[a("caption",[s._v("Fuente: OIT, 2024.")]),a("thead",{staticClass:"border-0"},[a("tr",{staticStyle:{"background-color":"#13DE61"}},[a("th",[s._v("Características")]),a("th",[a("i",[s._v("Bagging")])]),a("th",[a("i",[s._v("Random forest")])]),a("th",[a("i",[s._v("Boosting")])])])]),a("tbody",[a("tr",[a("td",{staticClass:"text-center"},[s._v("Construcción de modelos")]),a("td",{staticClass:"text-center"},[s._v("Paralelo")]),a("td",{staticClass:"text-center"},[s._v("Paralelo")]),a("td",{staticClass:"text-center"},[s._v("Secuencial")])]),a("tr",[a("td",{staticClass:"text-center"},[s._v("Base "),a("i",[s._v("learner")])]),a("td",{staticClass:"text-center"},[s._v("Cualquier modelo")]),a("td",{staticClass:"text-center"},[s._v("Árboles de decisión")]),a("td",{staticClass:"text-center"},[s._v("Cualquier modelo")])]),a("tr",[a("td",{staticClass:"text-center"},[s._v("Reducción de variancia")]),a("td",{staticClass:"text-center"},[s._v("Sí")]),a("td",{staticClass:"text-center"},[s._v("Sí")]),a("td",{staticClass:"text-center"},[s._v("Sí")])]),a("tr",[a("td",{staticClass:"text-center"},[s._v("Reducción de sesgo")]),a("td",{staticClass:"text-center"},[s._v("No")]),a("td",{staticClass:"text-center"},[s._v("No")]),a("td",{staticClass:"text-center"},[s._v("Sí")])]),a("tr",[a("td",{staticClass:"text-center"},[s._v("Selección aleatoria de "),a("i",[s._v("features")])]),a("td",{staticClass:"text-center"},[s._v("No")]),a("td",{staticClass:"text-center"},[s._v("Sí")]),a("td",{staticClass:"text-center"},[s._v("No")])]),a("tr",[a("td",{staticClass:"text-center"},[s._v("Propenso al sobreajuste")]),a("td",{staticClass:"text-center"},[s._v("Menos")]),a("td",{staticClass:"text-center"},[s._v("Menos")]),a("td",{staticClass:"text-center"},[s._v("Más si no se regula")])])])])])])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_6","data-aos":"fade-right"}},[a("h2",[s._v("2.6 Casos prácticos y aplicaciones")])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-center align-items-center mb-5"},[a("div",{staticClass:"col-sm-12 col-lg-7"},[a("p",{staticClass:"mb-4"},[s._v("Finalmente, es útil discutir casos prácticos donde los métodos de ensamblado han demostrado ser efectivos:")]),a("div",{staticClass:"bg-color-5 p-3"},[a("ul",{staticClass:"lista-ul--color color-primario mb-0"},[a("li",{staticClass:"d-flex bg-color-7 p-1 px-2"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",[s._v("Detección de fraude:")]),s._v(" "),a("em",[s._v("Boosting")]),s._v(" es utilizado para mejorar la detección de transacciones fraudulentas.")])]),a("li",{staticClass:"d-flex bg-color-7 p-1 px-2"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",[s._v("Predicción en medicina:")]),s._v(" "),a("i",[s._v("random forest")]),s._v(" ha sido aplicado en la predicción de enfermedades debido a su capacidad para manejar datos complejos y variables.")])]),a("li",{staticClass:"d-flex bg-color-7 p-1 px-2"},[a("i",{staticClass:"fas fa-check-circle"}),a("p",{staticClass:"mb-0"},[a("b",[s._v("Sistemas de recomendación:")]),s._v(" los ensamblados pueden mejorar la precisión de recomendaciones al combinar diferentes modelos.")])])])])]),a("div",{staticClass:"col-sm-12 col-lg-5 d-none d-lg-block"},[a("img",{attrs:{src:e("5500")}})])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"titulo-tres"},[a("h3",{staticClass:"mb-0"},[s._v("Conclusiones")])])},function(){var s=this,a=s._self._c;return a("p",{staticClass:"mb-0"},[s._v("Los métodos de ensamblado son herramientas poderosas en el arsenal de"),a("em",[s._v("machine learning")]),s._v(" que permiten mejorar la precisión y robustez de los modelos, al combinar múltiples modelos, es posible superar las limitaciones de modelos individuales y obtener mejores resultados en una amplia gama de aplicaciones, sin embargo, es importante comprender las diferencias entre las distintas técnicas de ensamblado y saber cuándo aplicarlas adecuadamente. En el próximo capítulo, profundizaremos en las métricas avanzadas de evaluación y en cómo ajustar los modelos para optimizar su rendimiento")])}],c={name:"Tema2",data:()=>({}),mounted(){this.$nextTick(()=>{this.$aosRefresh()})},updated(){this.$aosRefresh()}},o=c,l=e("2877"),n=Object(l["a"])(o,t,i,!1,null,null,null);a["default"]=n.exports},9681:function(s,a,e){s.exports=e.p+"img/12.0eec1923.png"},a01d:function(s,a,e){s.exports=e.p+"img/2.dfe48a60.png"},af19:function(s,a,e){s.exports=e.p+"img/1.2d2e82ac.png"},c5b9:function(s,a,e){s.exports=e.p+"img/6.a815b168.svg"},e958:function(s,a,e){s.exports=e.p+"img/11.4728f17b.svg"},ef4d:function(s,a,e){s.exports=e.p+"img/10.4fa6029d.png"}}]);
//# sourceMappingURL=chunk-f540f8c2.ea424d67.js.map