import { Article } from "@/types/news";
import axios from "axios";

const BASE_URL =
  "https://newsapi.org/v2/everything?q=%ED%95%9C%EA%B5%AD&language=ko&sortBy=publishedAt&apiKey=dc45285b3843436984b0dc7ecb0215db";

export const fetchNews = async (): Promise<Article[]> => {
  const response = await axios.get(BASE_URL);
  console.log(response.data.articles);
  return response.data.articles;
};
