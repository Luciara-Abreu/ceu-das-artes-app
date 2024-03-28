// axios/submit.api.ts
import axios, { AxiosResponse } from 'axios';
import { PlayerFormData } from '../../interface/interface';



export const submitUserForAPI = async (formData: PlayerFormData) => {
    console.log('submitUserForAPI ===> ',formData)
    try {
      const response: AxiosResponse = await axios.post('http://localhost:3001/user/', formData);
      return response.data;
    } catch (error: any) {
        throw new Error(error.response.data.message);
     }
  };
  

