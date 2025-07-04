import { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode
}

export interface IBlog {
    _id: string
    title: string
    image?: string
    description: string
    link?: string
    createdAt: Date
}

export interface IProject {
    _id: string
    title: string
    description: string
    image: string
    createdAt: Date
    githubLink?: string
    demoLink?: string
}  