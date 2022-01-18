import { ReactNode } from "react"
import { Layout } from "../layout"

export interface LayoutProps  { 
  children?: ReactNode,
}

export type ContentDetailType = {
  title:string;
  mediaLink:string;
  poster: string;
}
export interface OwnerProps extends LayoutProps {
  datas: {
    userName: string;
    totalCount: number;
    contents: ContentDetailType[]
  }[]
}