import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
export function Home() {
  const participants = ['Guilherme', 'Daniele', 'Clara'];

  function handleParticipantAdd() {

  }
  function handleParticipantRemove() {

  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Segunda-feira,16 de Janeiro de 2023.
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (

          <Participant
            name={item}
            key={item}
            onRemove={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda?Adicione participantes a sua lista de presença.
          </Text>
        )}
      />


    </View>
  )
}