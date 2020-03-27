import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import styles from './style';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1); //controla a exibição das páginas
    const [loading, setLoading] = useState(false); //controla qd estamos buscando dados no backend pra carregar scroll infinito

    const navigation = useNavigation(); // parecido com o useHistory() no web

    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident }); // tem q ser o mesmo nome que definimos nas rotas
    }

    async function loadIncidents() {
        if(loading) {
            return;
        }

        if(total > 0 && incidents.length == total) { // se o numero de incidentes na lista for igual ao total de casos busca mais informações
            return;
        }

        setLoading(true);

        const response = await api.get('/incidents', { params: { page } });
        setIncidents([...incidents, ...response.data]); // pega o conteúdo atual de incidents (começa vazio) e soma com o conteudo do response.data - anexa dois vetores dentro de um vetor
        setTotal(response.headers['x-total-count']);
        
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
    }, []); // usada para carregar os dados do backend

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo!!!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>

            <FlatList 
                data={incidents}
                style={styles.incidentList}
                keyExtractor={incident => String(incident.id)}
                //showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents} //propriedade disparada qd faz scroll no final da tela
                onEndReachedThreshold={0.2} // qts % do final da lista chegou pra disparar
                renderItem={({ item: incident }) => ( //troca o nome da variavel item por incident
                    <View style={styles.incident} >
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR',
                            { style: 'currency', currency: 'BRL' })
                            .format(incident.value)}
                        </Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(incident)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />


            
            

        </View>
    );
}