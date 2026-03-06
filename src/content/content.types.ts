export interface Content {
  email: string
  email_send: string
  whatsapp_link: string
  icons: {
    whatsapp_icon: string
    mail_icon: string
    task_icon: string
  }
  header: {
    logo_img: string,
    logo_alt: string,
    btn_text: string
  }
  main: {
    first_tags: {
      tag_1: string
      tag_2: string
      tag_3: string
      tag_4: string
    }
    title: string,
    description: string,
    btn_text: string
    second_labels: {
      tag_1: string,
      tag_2: string,
      tag_3: string
    }
    video: string
    logo: {
      logo_img: string
      logo_alt: string
    }
  }
  footer: {
    company: string
    copyright: string,
  }
}