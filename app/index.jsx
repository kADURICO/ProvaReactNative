import { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { Timer } from "../components/Timer";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25 * 60,
    image: require('./foco.png'),
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 5 * 60,
    image: require('./curto.png'),
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 15 * 60,
    image: require('./longo.png'),
    display: "Pausa longa",
  },
];

export default function Index() {

  const [timeType, setTimeType] = useState(pomodoro[0]);
  const [seconds, setSeconds] = useState(timeType.initialValue);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRunning(false);
  }

  const handleChangeTimeType = (newType) => {
    clearTimer();
    setTimeType(newType);
    setSeconds(newType.initialValue);
  }

  const togglerTimer = () => {
    if (timerRef.current) {
      clearTimer();
      return;
    }

    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds <= 1) {
          clearTimer();
          return timeType.initialValue;
        }
        return prevSeconds - 1;
      });
    }, 1000);
  }

  useEffect(() => {
    return () => clearTimer();
  }, []);


  return (
    <View style={styles.container}>
      <Image source={timeType.image} />

      <View style={styles.actions}>

        <View style={styles.context}>
          {pomodoro.map(p =>
            <ActionButton
              key={p.id}
              active={timeType.id === p.id}
              onPress={() => handleChangeTimeType(p)}
              display={p.display}
            />
          )}
        </View>

        <Timer totalSeconds={seconds} />
        <FokusButton
          press={togglerTimer}
          title={isRunning ? "Pausar" : "Começar"}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Carlos Eduardo.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#021123',
      gap: 40,
    },
    actions: {
      padding: 24,
      backgroundColor: '#14448080',
      width: '80%',
      borderRadius: 32,
      borderWidth: 2,
      borderColor: '#144480',
      gap: 32,

    },
    context: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",

    },
    contextButtonActive: {
      backgroundColor: '#144480',
      borderRadius: 8,
    },
    contextButtonText: {
      fontSize: 12.5,
      color: '#FFF',
      padding: 8,
    },
    timer: {
      fontSize: 54,
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: "center",
    },
    button: {
      backgroundColor: '#B872FF',
      borderRadius: 32,
      padding: 8,
    },
    buttonText: {
      fontSize: 18,
      color: '#021123',
      textAlign: "center",
      fontWeight: 'bold',
    },
    footer: {
      width: '80%',
    },
    footerText: {
      color: '#98A0A8',
      fontSize: 12.5,
      textAlign: "center",
    }

  }
);