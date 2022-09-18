import {Heading} from '../../components/Heading';
import {Background} from '../../components/Background';
import {GameCard, GameCardProps} from '../../components/GameCard';
import logoImg from '../../assets/logo-nlw-esports.png';
import {useEffect, useState} from 'react';
import { Image, FlatList } from 'react-native';
import { styles } from './styles';
import {SafeAreaView} from 'react-native-safe-area-context'
import {useNavigation} from '@react-navigation/native';

export function Home() {

  const [games, setGames] = useState<GameCardProps[]>([]);
  const navigation = useNavigation();

  function handleOpenGame({id, title, banner}: GameCardProps) {
    navigation.navigate('game', {id, title, banner});

  }

  useEffect(() => {
    fetch('http://192.168.0.5:3333/games')
    .then(res => res.json())
    .then(data => setGames(data));
  }, [])

  return (

    <Background>
      <SafeAreaView style={styles.container}>
        <Image 
        source={logoImg}
        style = {styles.logo}
        />

        <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList 
          data = {games}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={styles.contentlist}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (      
            <GameCard
              onPress={() => handleOpenGame(item)}
              data={
                item
              }
              />)}
        />
      </SafeAreaView>
    </Background>
  );
}