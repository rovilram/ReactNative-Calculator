import React, { useRef, useState } from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculator = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  let ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
  };

  const armarNumero = (numeroTexto: string) => {
    if ((numero === '0' || numero === '-0') && numeroTexto === '.')
      setNumero(numero + numeroTexto);
    else if (numero === '0') setNumero(numeroTexto);
    else if (numero === '-0') setNumero('-' + numeroTexto);
    else if (numeroTexto == '.' && numero.includes('.')) return;
    else setNumero(numero + numeroTexto);
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) setNumero(numero.replace('-', ''));
    else setNumero('-' + numero);
  };

  const btnDelete = () => {
    if (numero === 'Infinity') setNumero('0');
    else if (
      numero.length === 1 ||
      (numero.length === 2 && numero.includes('-'))
    ) {
      setNumero('0');
    } else setNumero(numero.substring(0, numero.length - 1));
  };

  const btnSumar = () => {
    setNumeroAnterior(numero);
    ultimaOperacion.current = Operadores.sumar;
    setNumero('0');
  };
  const btnRestar = () => {
    setNumeroAnterior(numero);
    ultimaOperacion.current = Operadores.restar;
    setNumero('0');
  };
  const btnMultiplicar = () => {
    setNumeroAnterior(numero);
    ultimaOperacion.current = Operadores.multiplicar;
    setNumero('0');
  };
  const btnDividir = () => {
    setNumeroAnterior(numero);
    ultimaOperacion.current = Operadores.dividir;
    setNumero('0');
  };

  const btnEq = () => {
    if (ultimaOperacion.current === undefined) return;
    if (ultimaOperacion.current === Operadores.sumar)
      setNumero(String(Number(numeroAnterior) + Number(numero)));
    else if (ultimaOperacion.current === Operadores.restar)
      setNumero(String(Number(numeroAnterior) - Number(numero)));
    else if (ultimaOperacion.current === Operadores.multiplicar)
      setNumero(String(Number(numeroAnterior) * Number(numero)));
    else if (ultimaOperacion.current === Operadores.dividir)
      setNumero(String(Number(numeroAnterior) / Number(numero)));
    setNumeroAnterior('0');
    ultimaOperacion.current = undefined;
  };

  return {
    numeroAnterior,
    numero,
    limpiar,
    armarNumero,
    positivoNegativo,
    btnDelete,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    btnDividir,
    btnEq,
  };
};
