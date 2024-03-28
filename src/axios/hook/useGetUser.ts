import { useEffect, useState } from "react";
import { Dados } from "../../interface/interface";
import { torneioFetch } from "../config";

export const useGetUser = (): Dados[] | null => {
  const [users, setUsers] = useState<Dados[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await torneioFetch.get('/user/');
        setUsers(response.data); // Define os usuários recuperados da API
      } catch (error) {
        console.error('Erro ao buscar dados de usuário:', error);
        // Se ocorrer um erro ao buscar os dados do usuário, defina users como null ou retorne um array vazio
        setUsers(null); // Ou setUsers([])
      }
    };

    fetchData();
  }, []);

  return users;
};
