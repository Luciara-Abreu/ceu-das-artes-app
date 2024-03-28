// api.js
import { useEffect, useState } from "react";
import moment from "moment";
import { Dados } from "../../interface/interface";
import { torneioFetch } from "../config";

export const useGetTourney = (): Dados[] => {
  const [tourney, setTourney] = useState<Dados[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resTourney = await torneioFetch.get('/tourney/');
        const data = resTourney.data.map((t: Dados) => ({
          ...t,
          dataInicio: moment(t.dataInicio).format("DD/MM/YY"),
          dataFim: moment(t.dataFim).format("DD/MM/YY"),

          times: t.team_list.map((team: any) => team.name).join(', ')
        }));
       setTourney(data);
      } catch (error) {
        throw new Error('Não encontrei a api!!');
      }
    };

    fetchData();
  }, []);

  return tourney;
};

export const generateMatchups = (teams: string[]): string[][] => {
  const matchups: string[][] = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      matchups.push([teams[i], teams[j]]);
    }
  }
  return matchups;
};



