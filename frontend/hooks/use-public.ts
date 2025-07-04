import { create } from "zustand"

export interface PublicProps {
    url: string
}

export const Public = create<PublicProps>((set) => ({
    url: "https://portfolio-backend-64di.onrender.com"
}))

export default Public