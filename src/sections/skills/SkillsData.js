import htmlIcon from '../../assets/img/html5.png'
import cssIcon from '../../assets/img/css.png'
import jsIcon from '../../assets/img/javascript.png'
import figmaIcon from '../../assets/img/figma.png'
import illustratorIcon from '../../assets/img/illustrator.png'
import reactIcon from '../../assets/img/react.png'
import wordpressIcon from '../../assets/img/wordpress.png'

export default {
   skills_title: [
      "FRONT-END",
      "OUTILS GRAPHIQUES",
      "FRAMEWORK",
      "GESTION DE CONTENU (CMS)"
   ],

   skills: {
      front_end: [
         {
            img: htmlIcon,
            name: 'HTML5'
         },
         {
            img: cssIcon,
            name: 'CSS3'
         },
         {
            img: jsIcon,
            name: 'JAVASCRIPT'
         }
      ],
      design: [
         {
            img: figmaIcon,
            name: 'FIGMA'
         },
         {
            img: illustratorIcon,
            name: 'ILLUSTRATOR'
         }
      ],
      framework: [
         {
            img: reactIcon,
            name: 'REACT'
         }
      ],
      cms: [
         {
            img: wordpressIcon,
            name: 'WORDPRESS'
         }
      ]
   }
}