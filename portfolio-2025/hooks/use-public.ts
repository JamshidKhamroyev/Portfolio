import { create } from "zustand"

export interface PublicProps {
    url: string
}

export const Public = create<PublicProps>((set) => ({
    url: "http://localhost:4040"
}))

export default Public