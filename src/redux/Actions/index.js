import { toast } from "react-toastify";
import { BASE_URL, endpoints } from '../constants';
import axios from 'axios';
const httpClient = axios.create({ timeout: 2 * 60 * 1000 });


// -----------------------------------------------Actions Create------------------------------------------------


export const languageSelect = (data) => {
  return {
    type: 'LANGUAGE_SELECT',
    payload: data,
  }
}

export const changeTheme = (data) => {
  return {
    type: 'THEME_CHANGE',
    payload: data,
  }
}







