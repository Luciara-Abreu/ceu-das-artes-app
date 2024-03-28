// axios/submit.api.ts
import axios, { AxiosResponse } from 'axios';
import { TeamFormData } from '../../interface/interface';



export const submitTeamForAPI = async (formData: TeamFormData) => {
  console.log('submitTeamForAPI ===> ',formData)
    try {
      const response: AxiosResponse = await axios.post('http://localhost:3001/team/', formData);
      return response.data;
    } catch (error: any) {
        throw new Error(error.response.data.message);
     }
  };
  

