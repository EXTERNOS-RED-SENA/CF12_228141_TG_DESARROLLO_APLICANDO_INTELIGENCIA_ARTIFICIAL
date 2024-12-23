(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11d550ae"],{"0995":function(a,s,e){a.exports=e.p+"img/1.86dbf9d5.png"},"3f0c":function(a,s,e){a.exports=e.p+"img/3.e3401323.png"},"6cac":function(a,s,e){"use strict";e.r(s);var i=function(){var a=this,s=a._self._c;return s("div",{staticClass:"curso-main-container pb-3"},[s("BannerInterno"),s("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[a._m(0),a._m(1),s("Separador"),a._m(2),a._m(3),a._m(4),a._m(5),s("Separador"),a._m(6),a._m(7),a._m(8),s("Separador"),a._m(9),a._m(10),a._m(11),a._m(12),s("Separador"),a._m(13),a._m(14),s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-sm-12 col-lg-9"},[s("AcordionA",{staticClass:"mb-5",attrs:{tipo:"a","clase-tarjeta":"tarjeta tarjeta--azul"}},[s("div",{attrs:{titulo:"Datos desbalanceados"}},[s("p",{staticClass:"mb-3"},[a._v('Cuando una clase predomina significativamente sobre otras, algunas métricas pueden ser engañosas. Por ejemplo, en un problema de detección de fraude donde solo el 1 % de las transacciones son fraudulentas, un modelo que siempre predice "no fraude" tendría una precisión del 99 %, pero sería inútil para detectar fraudes reales.')]),s("p",{staticClass:"mb-3"},[s("b",[a._v("Soluciones:")])]),s("ul",{staticClass:"lista-ul--color color-primario mb-0"},[s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[a._v("Utilizar métricas como el "),s("i",[s("b",[a._v("Recall, Precisión (Precision) y F1-Score")])]),a._v(" que ofrecen una mejor perspectiva en conjuntos de datos desbalanceados.")])]),s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[a._v(" Aplicar técnicas de muestreo: como "),s("b",[a._v("submuestreo")]),a._v(" de la clase mayoritaria o sobremuestreo de la clase minoritaria.")])]),s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[a._v(" Emplear algoritmos diseñados para manejar desequilibrios de clases: como "),s("b",[s("i",[a._v("Balanced Random forest o Adaptive Boosting")])]),a._v(".")])])])]),s("div",{attrs:{titulo:"Sobreajuste y Subajuste"}},[s("p",{staticClass:"mb-2"},[s("b",[a._v("Sobreajuste ("),s("em",[a._v("Overfitting")]),a._v("):")]),a._v(" ocurre cuando el modelo se ajusta demasiado a los datos de entrenamiento, capturando ruido y patrones irrelevantes. Esto conduce a un pobre rendimiento en datos nuevos.")]),s("p",{staticClass:"mb-4"},[s("b",[a._v("Subajuste ("),s("em",[a._v("Underfitting")]),a._v("):")]),a._v(" Sucede cuando el modelo es demasiado simple para capturar la estructura subyacente de los datos, resultando en un rendimiento deficiente tanto en el conjunto de entrenamiento como en nuevos datos.")]),s("p",{staticClass:"mb-3"},[s("b",[a._v("Soluciones:")])]),s("ul",{staticClass:"lista-ul--color color-primario mb-0"},[s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[s("b",[a._v("Validación cruzada:")]),a._v(" dividir el conjunto de datos en múltiples subconjuntos para validar el rendimiento del modelo de manera más robusta.")])]),s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[s("b",[a._v("Regularización:")]),a._v(" aplicar técnicas como "),s("em",[a._v("Lasso")]),a._v(" o "),s("em",[a._v("Ridge")]),a._v(" para penalizar la complejidad del modelo.")])]),s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[s("b",[a._v("Ajuste de hiperparámetros:")]),a._v(" optimizar parámetros clave del modelo para encontrar el equilibrio adecuado entre sesgo y varianza.")])])])]),s("div",{attrs:{titulo:"Interpretabilidad vs. Complejidad"}},[s("p",{staticClass:"mb-3"},[a._v("Modelos más complejos, como las redes neuronales profundas, pueden ofrecer mayor precisión pero son menos interpretables. En ciertos dominios, como la medicina o las finanzas, la interpretabilidad es importante para cumplir con regulaciones y generar confianza en los usuarios.")]),s("p",{staticClass:"mb-3"},[s("b",[a._v("Soluciones:")])]),s("ul",{staticClass:"lista-ul--color color-primario mb-0"},[s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[a._v("Optar por modelos más interpretables como árboles de decisión o regresiones lineales cuando sea apropiado.")])]),s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[a._v("Utilizar técnicas de interpretabilidad como "),s("b",[a._v("LIME")]),a._v(" o "),s("b",[a._v("SHAP")]),a._v(" para explicar las predicciones de modelos complejos.")])]),s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[a._v("Equilibrar la necesidad de precisión con la interpretabilidad según los requisitos del proyecto.")])])])]),s("div",{attrs:{titulo:"Costos y consecuencias de los errores"}},[s("p",{staticClass:"mb-3"},[a._v("No todos los errores tienen el mismo impacto. Por ejemplo, en una aplicación médica, un falso negativo (no detectar una enfermedad cuando está presente) puede ser más grave que un falso positivo (diagnosticar una enfermedad cuando no existe).")]),s("p",{staticClass:"mb-3"},[s("b",[a._v("Soluciones:")])]),s("ul",{staticClass:"lista-ul--color color-primario mb-0"},[s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[a._v("Definir una "),s("b",[a._v("función de costo")]),a._v(" personalizada que refleje las consecuencias reales de los diferentes tipos de errores.")])]),s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[a._v("Ajustar los umbrales de decisión del modelo para minimizar los errores más críticos.")])]),s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[a._v("Priorizar métricas que capturen la gravedad de los errores, como el "),s("b",[a._v("Recall")]),a._v(" en casos donde los falsos negativos son más costosos.")])])])]),s("div",{attrs:{titulo:"Variabilidad en los datos"}},[s("p",{staticClass:"mb-3"},[a._v("Los datos pueden cambiar con el tiempo debido a tendencias, estacionalidades o cambios en el comportamiento. Esto puede causar que el rendimiento del modelo disminuya si no se actualiza regularmente.")]),s("p",{staticClass:"mb-3"},[s("b",[a._v("Soluciones:")])]),s("ul",{staticClass:"lista-ul--color color-primario mb-0"},[s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[a._v("Implementar un "),s("b",[a._v("sistema de monitoreo")]),a._v(" para detectar cambios en el rendimiento del modelo.")])]),s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[a._v("Programar "),s("b",[a._v("reentrenamientos periódicos")]),a._v(" del modelo con datos actualizados.")])]),s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[a._v("Utilizar técnicas de "),s("b",[a._v("aprendizaje en línea")]),a._v(" que permiten al modelo adaptarse continuamente a nuevos datos.")])])])]),s("div",{attrs:{titulo:"Limitaciones de las métricas"}},[s("p",{staticClass:"mb-3"},[a._v("Cada métrica tiene sus propias limitaciones y puede no reflejar completamente el rendimiento del modelo en todos los aspectos.")]),s("p",{staticClass:"mb-3"},[s("b",[a._v("Soluciones:")])]),s("ul",{staticClass:"lista-ul--color color-primario mb-0"},[s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[a._v("Utilizar múltiples métricas para obtener una visión más completa del rendimiento.")])]),s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[a._v("Analizar las "),s("b",[a._v("curvas ROC")]),a._v(" y "),s("i",[s("b",[a._v("Precision-Recall")])]),a._v(" para entender mejor el comportamiento del modelo en diferentes umbrales.")])]),s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[a._v("Realizar análisis cualitativos adicionales, como inspeccionar casos mal clasificados para identificar patrones o problemas subyacentes.")])])])])])],1),a._m(15)]),a._m(16),a._m(17)],1)],1)},t=[function(){var a=this,s=a._self._c;return s("div",{staticClass:"titulo-principal color-acento-contenido"},[s("div",{staticClass:"titulo-principal__numero"},[s("span",[a._v("1")])]),s("h1",[a._v("Introducción a la evaluación de modelos de "),s("em",[a._v("machine learning")])])])},function(){var a=this,s=a._self._c;return s("p",{staticClass:"p-4 mb-5 bg-color-1"},[a._v("Este capítulo proporciona una base para comprender la importancia y los conceptos clave de las métricas de evaluación en "),s("em",[a._v("machine learning")]),a._v(". Se explora cómo la precisión y la robustez son pilares fundamentales en la evaluación de modelos y se discuten los desafíos comunes que pueden surgir durante este proceso. Al abordar estos desafíos con estrategias y soluciones adecuadas, podemos garantizar que nuestros modelos sean más precisos, confiables y aplicables en situaciones del mundo real.")])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_1_1"}},[s("h2",[a._v("1.1 La importancia de las métricas de evaluación")])])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-sm-12 col-lg-4 d-none d-lg-block mb-lg-0 mb-3"},[s("img",{attrs:{src:e("0995"),alt:""}})]),s("div",{staticClass:"col-sm-12 col-lg-8"},[s("div",{staticClass:"p-4 bg-color-2 mb-3"},[s("p",{staticClass:"mb-0"},[a._v("En el mundo del "),s("em",[a._v("machine learning")]),a._v(", construir modelos capaces de realizar predicciones es solo una parte del proceso. Es esencial evaluar su rendimiento de manera objetiva y sistemática para garantizar que cumplan con los objetivos planteados y sean útiles en aplicaciones prácticas. Las métricas de evaluación son herramientas fundamentales que nos permiten cuantificar el desempeño de un modelo, identificar áreas de mejora y compararlo con otros modelos o enfoques.")])]),s("p",{staticClass:"mb-0"},[a._v("Sin una evaluación adecuada, es imposible determinar si un modelo es realmente efectivo o si simplemente parece funcionar bien debido a coincidencias en los datos de entrenamiento. Además, las métricas de evaluación facilitan la comunicación de resultados a equipos multidisciplinarios, permitiendo que todos comprendan el valor y las limitaciones del modelo desarrollado.")])])])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"titulo-tres"},[s("h3",{staticClass:"mb-0"},[a._v("Importancia en el ciclo de vida del modelo")])])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-8 mb-lg-0 mb-3"},[s("p",{staticClass:"mb-3"},[a._v("La evaluación es determinante en varias etapas del ciclo de vida de un modelo:")]),s("div",{staticClass:"p-3 bg-color-3"},[s("div",{staticClass:"ms-2"},[s("ul",{staticClass:"lista-ul--color color-primario mb-0"},[s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[s("b",[a._v("Durante el desarrollo: ")]),a._v(" para seleccionar el mejor modelo entre múltiples candidatos.")])]),s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[s("b",[a._v("Antes de la implementación: ")]),a._v(" para asegurar que el modelo cumple con los requisitos de precisión y robustez necesarios.")])]),s("li",{staticClass:"d-flex mb-0"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[s("b",[a._v("Después de la implementación: ")]),a._v(" para monitorear el rendimiento del modelo en producción y detectar degradaciones a lo largo del tiempo.")])])])])])]),s("div",{staticClass:"col-lg-4 col-7 d-none d-lg-block"},[s("img",{attrs:{src:e("b9d4"),alt:""}})])])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_1_2","data-aos":"fade-right"}},[s("h2",[a._v("1.2 Conceptos clave: precisión y robustez")])])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-5 col-7 d-none d-lg-block"},[s("img",{attrs:{src:e("3f0c"),alt:""}})]),s("div",{staticClass:"col-lg-7 mb-lg-0 mb-3"},[s("p",{staticClass:"mb-3"},[a._v("Antes de profundizar en las métricas específicas, es fundamental entender dos conceptos esenciales que guían la evaluación de modelos:")]),s("div",{staticClass:"p-3 bg-color-3"},[s("div",{staticClass:"ms-2"},[s("ul",{staticClass:"lista-ul--color color-primario mb-0"},[s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[s("b",[a._v("Precisión: ")]),a._v(" se refiere a la exactitud con la que el modelo realiza predicciones correctas. Un modelo preciso tiene un alto porcentaje de aciertos, lo que indica un buen desempeño en términos de exactitud. Sin embargo, la precisión por sí sola puede ser engañosa en conjuntos de datos desbalanceados.")])]),s("li",{staticClass:"d-flex mb-0"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[s("b",[a._v("Robustez:")]),a._v(" indica la capacidad del modelo para mantener un rendimiento consistente ante variaciones en los datos de entrada, como ruido, valores atípicos o cambios en la distribución de los datos ("),s("em",[a._v("concept drift")]),a._v("). Un modelo robusto es resistente a perturbaciones y generaliza bien a datos no vistos, lo cual es fundamental para aplicaciones en entornos dinámicos.")])])])])])])])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"p-5 bg-color-4 mb-5"},[s("div",{staticClass:"row justify-content-center mb-0"},[s("div",{staticClass:"col-sm-12 col-lg-8"},[s("div",{staticClass:"titulo-tres"},[s("h3",{staticClass:"mb-0"},[a._v("Relación entre precisión y robustez")])]),s("p",{staticClass:"mb-0"},[a._v("Aunque un modelo puede ser muy preciso en un conjunto de datos específico, si carece de robustez, su rendimiento puede degradarse significativamente cuando se enfrenta a datos nuevos o cambiantes. Por lo tanto, es esencial equilibrar ambos aspectos para desarrollar modelos confiables y duraderos.")])]),s("div",{staticClass:"col-sm-12 col-lg-4 d-none d-lg-block mb-0"},[s("img",{staticClass:"mb-0",attrs:{src:e("d6e0"),alt:""}})])])])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_1_3","data-aos":"fade-right"}},[s("h2",[a._v("1.3 Visión general de las métricas comunes")])])},function(){var a=this,s=a._self._c;return s("p",{staticClass:"mb-5"},[a._v("Existen diversas métricas para evaluar modelos de "),s("em",[a._v("Machine learning")]),a._v(", cada una adecuada para diferentes tipos de problemas y contextos. A continuación, se presenta una visión general de las métricas más utilizadas:")])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-sm-12 col-lg-8"},[s("div",{staticClass:"titulo-sexto color-acento-contenido",attrs:{"data-aos":"fade-right"}},[s("h5",[a._v("Tabla 1.")]),s("span",[a._v("Resumen de métricas de evaluación comunes")])]),s("div",{staticClass:"tabla-a color-acento-botones mb-5"},[s("table",[s("caption",[a._v("Fuente: OIT, 2024.")]),s("thead",{staticClass:"border-0"},[s("tr",{staticStyle:{"background-color":"#13DE61"}},[s("th",{staticClass:"w-25"},[a._v("Tipo de problema")]),s("th",{staticClass:"w-25"},[a._v("Métricas comunes")]),s("th",[a._v("Descripción")])])]),s("tbody",[s("tr",[s("td",[a._v("Clasificación")]),s("td",[a._v("Precisión ("),s("i",[a._v("Accuracy")]),a._v("), "),s("i",[a._v("Precision")]),a._v(", "),s("i",[a._v("Recall")]),a._v(", F1-Score")]),s("td",[a._v("Miden el desempeño en la clasificación de categorías discretas, evaluando verdaderos positivos, falsos positivos, etc.")])]),s("tr",[s("td",[a._v("Regresión")]),s("td",[a._v("MSE, RMSE, MAE, R²")]),s("td",[a._v("Evalúan la diferencia entre los valores predichos y los valores reales continuos, proporcionando una medida del error promedio y la calidad del ajuste.")])]),s("tr",[s("td",[a._v("Datos Desbalanceados")]),s("td",[a._v("AUC-ROC, Curva "),s("i",[a._v("Precision-Recall")])]),s("td",[a._v("Analizan el rendimiento en situaciones donde las clases están desbalanceadas, enfocándose en la capacidad del modelo para distinguir entre clases minoritarias y mayoritarias.")])]),s("tr",[s("td",[s("i",[a._v("Clustering")])]),s("td",[a._v("Índice de Silueta, SSE")]),s("td",[a._v("Miden la calidad de los grupos formados en problemas de agrupamiento sin supervisión, evaluando la cohesión interna y la separación entre "),s("i",[a._v("clusters")]),a._v(".")])])])])])])])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-4 col-7 d-none d-lg-block"},[s("img",{attrs:{src:e("9ff7"),alt:""}})]),s("div",{staticClass:"col-sm-12 col-lg-8 mb-lg-0 mb-3"},[s("div",{staticClass:"titulo-tres"},[s("h3",{staticClass:"mb-0"},[a._v("Ejemplos de Aplicación")])]),s("div",{staticClass:"p-3 bg-color-3"},[s("div",{staticClass:"ms-2"},[s("p",{staticClass:"mb-3"},[a._v("Ejemplo: diseñar un programa que verifique si un número es primo. El pensamiento algorítmico te guiará a:")]),s("ul",{staticClass:"lista-ul--color color-primario mb-0"},[s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[s("b",[a._v("Clasificación: ")]),a._v(" en la detección de spam, podríamos usar la precisión para saber qué porcentaje de correos electrónicos fueron clasificados correctamente. Sin embargo, también es importante considerar la "),s("b",[a._v("precisión ("),s("i",[a._v("Precision")]),a._v(") y el "),s("i",[a._v("Recall")])]),a._v(" para entender cuántos correos legítimos fueron marcados incorrectamente como spam y cuántos correos spam fueron pasados por alto.")])]),s("li",{staticClass:"d-flex"},[s("i",{staticClass:"fas fa-check-circle"}),s("p",{staticClass:"mb-0"},[s("b",[a._v("Regresión: ")]),a._v(" al predecir los precios de viviendas, métricas como el "),s("b",[a._v("RMSE")]),a._v(" proporcionan una idea de cuánto, en promedio, se desvían las predicciones del modelo respecto a los valores reales, lo que es muy importante para entender la fiabilidad de las estimaciones.")])])])])])])])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_1_4","data-aos":"fade-right"}},[s("h2",[a._v("1.4 Desafíos en la evaluación de modelos")])])},function(){var a=this,s=a._self._c;return s("p",{staticClass:"mb-5"},[a._v("La evaluación de modelos de "),s("em",[a._v("machine learning")]),a._v(" presenta varios desafíos que deben ser abordados para asegurar resultados confiables y útiles.")])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"col-sm-12 col-lg-3 d-none d-lg-block"},[s("img",{attrs:{src:e("8446"),alt:""}})])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"titulo-tres"},[s("h3",{staticClass:"mb-0"},[a._v("Conclusión")])])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-2 d-none d-lg-block"},[s("img",{attrs:{src:e("955f"),alt:""}})]),s("div",{staticClass:"col-sm-12 col-lg-10"},[s("p",{staticClass:"mb-0"},[a._v("Enfrentar estos desafíos requiere un enfoque crítico y cuidadoso en la selección y aplicación de las métricas de evaluación. Es esencial comprender no solo qué miden las métricas, sino también cómo interpretarlas en el contexto específico del problema que se está abordando.")]),s("p",{staticClass:"mb-0"},[a._v("En los siguientes capítulos, profundizaremos en técnicas avanzadas y metodologías específicas para validar y mejorar modelos, incluyendo el uso de técnicas de ensamblado y la comunicación efectiva de resultados a través de informes y "),s("em",[a._v("storytelling.")])])])])}],o={name:"Tema1",data:()=>({}),mounted(){this.$nextTick(()=>{this.$aosRefresh()})},updated(){this.$aosRefresh()}},c=o,l=e("2877"),n=Object(l["a"])(c,i,t,!1,null,null,null);s["default"]=n.exports},8446:function(a,s,e){a.exports=e.p+"img/6.8a2095bd.png"},"955f":function(a,s,e){a.exports=e.p+"img/7.15fe2bd2.png"},"9ff7":function(a,s,e){a.exports=e.p+"img/5.30293976.png"},b9d4:function(a,s,e){a.exports=e.p+"img/2.336fd96d.png"},d6e0:function(a,s,e){a.exports=e.p+"img/4.3164ddda.png"}}]);
//# sourceMappingURL=chunk-11d550ae.10c35166.js.map