import React, { useState } from "react";
import { styles } from "./styles";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";

import { Participant } from "../../components/Participant";

export default function Home() {
  const [participant, setParticipant] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participant.includes(participantName)) {
      return Alert.alert(
        "Participante existente",
        "Já existe um participante na lista com esse nome."
      );
    }
    setParticipant((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipant((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }
// - Big O Dérik (sucos)
// - Lucas 
// - Madu (sei lá mas alguma coisa eu levo)
// - Cleitin do rasta
// - Pedrão 
// - Nattt (pipoquinhaaa)
// - Xu (ainda tenho que pensar no chelengolengo)
// - Guigo (o que eu vou levar é uma surpresa pra mim tbm) 
// -

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento:</Text>
      <Text style={styles.eventDate}>
        Data: Quarta, 9 de novembro de 2022. {"\n"}Local: A definir.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#c6c6c6"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        data={participant}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Ninguém chegou ainda 🙁. Adicione convidados à sua lista
          </Text>
        )}
      />
    </View>
  );
}
