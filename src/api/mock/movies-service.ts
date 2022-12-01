// import axios from "axios";
import { GetMoviesResponseModel } from "../../models/get-movies-response-model";
import movies from "../mock/movies.json";

export const getMovies = async (): Promise<GetMoviesResponseModel> => movies;
