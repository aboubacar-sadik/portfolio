import twitterIcon from '../../assets/svg/twitter.svg'
import githunIcon from '../../assets/svg/github.svg'
import linkedinIcon from '../../assets/svg/linkedin.svg'

export default {
   form_detail: `Pourquoi se contenter d'un site web ordinaire quand vous pouvez avoir une application web incroyablement dynamique et interactive ? N'attendez plus pour offrir à vos utilisateurs une expérience de navigation fluide et agréable.`,
   inputs: [
      {
         type: 'text',
         placeholder: "Prénom"
      },
      {
         type: 'email',
         placeholder: "Email"
      }
   ],
   socials: [
      {
         img: twitterIcon,
         name: 'Twitter',
         link: 'https://twitter.com/Aboubac54564487'
      },
      {
         img: githunIcon,
         name: 'Github',
         link: 'https://github.com/tomess00'
      },
      {
         img: linkedinIcon,
         name: 'LinkedIn',
         link: 'https://www.linkedin.com/in/aboubacar-sadik/'
      }
   ]
}
