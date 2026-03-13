import type { Content } from './content.types'
import logo from '../../public/Logo.png'
import logo_white from '../../public/logo-white.png'
import whatsapp_icon from '../../public/whatsapp.svg?raw'
import mail_icon from '../../public/mail.svg?raw'
import task_alt from '../../public/task_alt.svg?raw'
import hero from '../assets/videos/video.mp4'
import scrolldown from '../../public/scrolldown.svg'
export const content = {
  email: "info@thekid.com.co",
  email_send: "mailto:carlos.valbuena@thekidstudio.com.co",
  whatsapp_link: "https://wa.me/573165296938",
  icons: {
    whatsapp_icon: whatsapp_icon,
    mail_icon: mail_icon,
    task_icon: task_alt,
  },
  header: {
    logo_img: logo,
    logo_alt: "the kid",
    btn_text: "Contáctanos",
    icon: {
      scrolldown: scrolldown,
      icon_atl: 'scrolldown'
    }
  },
  main: {
    first_tags: {
      tag_1: "Strategy & Advertising",
      tag_2: "Account Management",
      tag_3: "Production & Craft",
      tag_4: "Digital Content & Development"
    },
    title: "Las mejores ideas empiezan jugando.",
    description: "Nos gustan las ideas inquietas, las marcas valientes y los proyectos que no se parecen a los demás. Estamos preparando algo nuevo, pero ya podemos empezar contigo.",
    btn_text: "Juguemos juntos",
    second_labels: {
      tag_1: "Producción integral",
      tag_2: "Medición de impacto",
      tag_3: "Retorno de Experiencia"
    },
    video: hero,
    logo: {
      logo_img: logo_white,
      logo_alt: 'the kid white',
    }

  },
  footer: {
    company: "The Kid Studio",
    copyright: "© 2026 Todos los derechos reservados.",
  }
} satisfies Content