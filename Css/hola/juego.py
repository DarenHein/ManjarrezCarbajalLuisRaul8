
import os
import random

def main():
    bandera = True
    while bandera:
        try:
            print("Inicia el juego")
            numero_pelotas = int(input("Ingresa el número de pelotas con las que vas a jugar -> "))
            if numero_pelotas == 0 or numero_pelotas == 1 or numero_pelotas < 0:
                print("Solo se puede jugar con dos o más pelotas.")
            elif numero_pelotas >= 2:
                print("Nivel fácil")
                facil(numero_pelotas)
            elif numero_pelotas >= 10:
                print("Límite de pelotas excedido.")
        except ValueError:
            print("Ingresa un número, perro.")

def facil(numero):
    lista = []
    i = 0
    while i < numero:
        try:
            color = input("Ingresa el color de la pelota -> ")
            color = color.lower()
            color = color.strip()
            if color.isnumeric():
                print("No puedes ingresar números en los nombres.")
            else:
                lista.append(color)
            i += 1
        except ValueError:
            print("Solo caracteres, perro.")

    print("De los colores que escogiste, ingresa el nombre del que quieras y vamos a ver si es el mismo que tengo en mente. Ganas un punto si aciertas, pierdes dos veces y es game over.")

    ganados = 0
    perdidos = 0
    bandera2 = True

    while bandera2:
        try:
            random.shuffle(lista)
            longitud = len(lista)
            numero_aleatorio = random.randint(0, longitud - 1)
            color_pc = lista[numero_aleatorio]
            print("Colores previamente ingresados:")
            for elementos in lista:
                print("$", elementos)
            color2 = input("Ingresa un color de los que hayas ingresado: ")
            color2 = color2.lower()
            color2 = color2.strip()
            if color2 == color_pc:
                print("Es correcto.")
                ganados += 1
                if ganados == 3:
                    ganador()
                    break
            else:
                print("Incorrecto.")
                perdidos += 1
                if perdidos == 3:
                    perdiste()
                    break
        except ValueError:
            print("Error.")

def ganador():
    print("¡Ganaste!")

def perdiste():
    print("Pinche perdedor.")

main()


