import * as react from "react"

export enum PageType {
  Home = "Home",
  Blog = "Blog",
  Career = "Career",
  Art = "Art",
}

export const PAGE_TO_COLOR = {
  Home: "#d8e2ff",
  Blog: "#000000",
  Career: "#f2b5a7",
  Art: "#000000",
};

export interface Post {
  path: string;
  title: string;
  subtitle?: string;
  date: string;
}