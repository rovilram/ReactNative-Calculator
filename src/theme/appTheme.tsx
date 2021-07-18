import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    paddingHorizontal: 20,
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'flex-end',
  },
  resultado: {
    fontSize: 60,
    color: 'white',
    textAlign: 'right',
    marginBottom: 10,
  },
  resultadoPequeno: {
    fontSize: 30,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
