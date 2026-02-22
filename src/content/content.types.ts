export interface Content {
  email: string
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
      tag_1: string,
      tag_2: string,
      tag_3: string
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
  }
  footer: {
    company: string
    copyright: string,
  }
}