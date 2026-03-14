import { icons } from '../assets/icons/icons.config'
import type { Content } from '../content/content.types'

const video = 'https://arfysxoyvqpdrobvrwlw.supabase.co/storage/v1/object/public/videos/video.mp4'

export const content = {
  email: "info@thekid.com.co",
  email_send: "mailto:carlos.valbuena@thekidstudio.com.co",
  whatsapp_link: "https://wa.me/message/OXFGIN2HR5ZXD1",
  icons: {
    whatsapp_icon: icons.whatsapp,
    mail_icon: icons.mail,
    task_icon: icons.task_alt
  },
  header: {
    logo_img: icons.logo,
    logo_alt: "the kid",
    btn_text: "Contáctanos",
  },
  main: {
    first_tags: {
      tag_1: "Strategy & Advertising",
      tag_2: "Account Management",
      tag_3: "Production & Craft",
      tag_4: "Digital Content & Development"
    },
    title: "Las mejores ideas empiezan jugando...",
    description: "Porque nos gustan las ideas inquietas, las marcas valientes y los proyectos que no se parecen a los demás. Estamos preparando algo nuevo, pero ya podemos empezar contigo.",
    btn_text: "Juguemos juntos",
    second_labels: {
      tag_1: "Producción integral",
      tag_2: "Medición de impacto",
      tag_3: "Retorno de Experiencia"
    },
    video: video,
    logo: {
      logo_img: icons.logo_white,
      logo_alt: 'the kid white',
    }

  },
  footer: {
    company: "The Kid Studio",
    copyright: "© 2026 Todos los derechos reservados.",
  },
  arrow_down: {
    container: {
      class: 'container_arrow_down'
    },
    icon: {
      src: icons.arrow_down,
      alt: 'arrow_down',
      class: 'icon_arrow_down'
    }
  }
} satisfies Content