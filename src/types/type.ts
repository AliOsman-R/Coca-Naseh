import { VariantProps } from "class-variance-authority"
import { buttonVariants } from "../components/button"
import { IconType } from "react-icons";

export type NavbarType = {
    name:string,
    to:string,
}


export type SelectingType = {
    name:string,
    label:string,
    Icon: IconType,
    list?: string[];
}

export type legalFeaturesType = {
    title:string,
    description:string,
    Icon: IconType,
}

export type ComponentHeaderOneProps = {
    title:string,
    label:string,
    buttonText: string,
}

export type ComponentHeaderTwoProps = {
    title:string,
    label:string,
}

export type legalServicesType = {
    title:string,
    description:string,
    buttonText: string,
    iconColor:string,
    Icon: IconType,
}

export type legalBlogsType = {
    title:string,
    description:string,
    type: string,
    date:string,
    image: string,
}

export type FaqItemsType = {
    question:string,
    answer:string,
}

export type LawyerProfileType = {
    id: number
    name: string
    image: string
    description: string
    yearsExperience: string
    languages: string[]
}

export type FeatureCardType = {
    title: string
    description: string
    image: string
}

export type LawyerFeaturesType = {
    title: string
}

export type ContactsType = {
    Icon: IconType
    label: string
    value: string
}

export type SocialLinksType = {
    Icon: IconType
    label: string
    color: string
    href:string
}

export type PaymentMethodsType = {
    Icon: IconType
    label: string
    color: string
    href:string
}

export type FooterColumnType = {
    title: string
    links: {
      label: string
      href: string
    }[]
  }

export type GlobalStatesType = {
    activeLink:string,
    setActiveLink:React.Dispatch<React.SetStateAction<string>>
}


export type ContextProps = {
    children: React.ReactNode
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants> & {}