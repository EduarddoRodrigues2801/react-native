import { VStack, Divider, ScrollView } from "native-base"
import { CardConsulta } from '../componentes/CardConsulta'
import { Titulo } from "../componentes/Titulo";
import { Botao } from "../componentes/Botao";

export default function Consultas() {
    return
        <ScrollView p="5">
            <Titulo color='blue.500' mb="5">Minhas consultas</Titulo>
            <Botao mt={5} mb="5">Agendar uma nova consulta</Botao>

            <Titulo color='blue.500' fontSize="lg" alignSelf="flex-start" mb={2}>próximas consultas</Titulo>
            <CardConsulta 
                nome='Dr. Eduardo Rodrigues'
                especialidade='Dentista'
                foto='https://github.com/EduarddoRodrigues2801.png'
                data="15/03/24"
                foiAgendado
            />

            <Divider />

            <Titulo color='blue.500' fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>
            <CardConsulta 
                nome='Dr. Eduardo Rodrigues'
                especialidade='Dentista'
                foto='https://github.com/EduarddoRodrigues2801.png'
                data="15/03/24"
                foiAtendido
            />
            <CardConsulta 
                nome='Dr. Eduardo Rodrigues'
                especialidade='Dentista'
                foto='https://github.com/EduarddoRodrigues2801.png'
                data="15/03/24"
                foiAgendado
            />
            <CardConsulta 
                nome='Dr. Eduardo Rodrigues'
                especialidade='Dentista'
                foto='https://github.com/EduarddoRodrigues2801.png'
                data="15/03/24"
                foiAgendado
            />

        </ScrollView>
}
