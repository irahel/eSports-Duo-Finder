import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

import { DuoInfo } from '../DuoInfo';
import { THEME } from '../../theme';

import { GameController } from 'phosphor-react-native';

export interface DuoCardProps{
  id: string;
  name: string;
  hoursEnd: string;
  hoursStart: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearPlaying: number;
}

interface Props{
  data: DuoCardProps
  onConnect: () => void;
}

export function DuoCard({data, onConnect}: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value={data.name}
        />
      <DuoInfo
        label="Tempo de jogo"
        value={`${data.yearPlaying} anos`}
        />
      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hoursStart} - ${data.hoursEnd}`}
        />
      <DuoInfo
        label="Chamada de áudio?"
        value={data.useVoiceChannel? "Sim" : "Não"}
        colorValue={data.useVoiceChannel? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={onConnect}
        >
          <GameController 
            color={THEME.COLORS.TEXT}
            size={20}
          />
          <Text style={styles.buttonTitle}>
            Conectar
          </Text>

        </TouchableOpacity>
    </View>
  );
}