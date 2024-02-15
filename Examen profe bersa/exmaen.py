
from perceptron import Perceptron

# Datos de hábitats y tamaños de animales

# Primer perceptron
input_data_habitat = [
    [80, 12, 0, 1],  
    [50, 10, 0, 1],  
    [40, 11, 0, 1],  
    [55, -1, 1, 1],
    [10, 20, 0, 0],  
    [20, 30, 1, 0],  
    [35, 22, 1, 0],  
    [15, 35, 1, 0]   
]

# Segundo perceptron
input_data_size = [
    [100, 90, 809, 1],  
    [80, 60, 60, 1],  
    [50, 55, 45, 1],  
    [55, 70, 50, 1],
    [10, 11, 11, 0],  
    [20, 30, 10, 0],  
    [30, 22, 20, 0],  
    [15, 10, 19, 0]  
]

# Tercer perceptron
input_data_aggression = [
    [1, 1, 0, 1],  
    [1, 0, 1, 1],  
    [0, 1, 1, 1],
    [1, 0, 0, 0],  
    [0, 1, 0, 0],  
    [0, 0, 1, 0]   
]

input_data_animal = [
    [1, 1, 0, 1],  
    [1, 0, 1, 1],  
    [0, 1, 1, 1],
    [1, 0, 0, 0],  
    [0, 1, 0, 0],  
    [0, 0, 1, 0]   
]

# Crear perceptrones
num_iter = int(input("¿Cuántas veces quieres realizar la prueba?\n"))
iter_count = 1

while iter_count > 0:
    # Primer perceptron
    pr_habitat = Perceptron(4, 0.1)
    weights_habitat = []
    errors_habitat = []

    for _ in range(100):
        for habitat_data in input_data_habitat:
            output_habitat = habitat_data[-1]
            input_habitat = [1] + habitat_data[0:-1]
            weights_habitat.append(pr_habitat._w)
            error_habitat = pr_habitat.train(input_habitat, output_habitat)
            errors_habitat.append(error_habitat)

    humidity = float(input("¿Cuánta humedad hay? (Solo valor numérico): "))
    temperature = float(input("¿De qué temperatura se rodea? (Solo valor numérico en grados Celsius): "))
    has_house = float(input("¿Hay casas? (0-NO o 1-SI): "))

    inputs_habitat = [humidity, temperature, has_house]

    if pr_habitat.predict([1] + inputs_habitat) == 1: 
        print("El resultado es 1 (Bosque)\n")
    else: 
        print("El resultado es 0 (Ciudad o Campo)\n")

    # Segundo perceptron
    pr_size = Perceptron(4, 0.1)
    weights_size = []
    errors_size = []

    for _ in range(100):
        for size_data in input_data_size:
            output_size = size_data[-1]
            input_size = [1] + size_data[0:-1]
            weights_size.append(pr_size._w)
            error_size = pr_size.train(input_size, output_size)
            errors_size.append(error_size)

    length = float(input("¿Cuál es el largo? (Solo valor numérico): "))
    height = float(input("¿Cuál es la altura? (Solo valor numérico): "))
    weight = float(input("¿Cuál es el peso? (Solo valor numérico): "))

    inputs_size = [length, height, weight]

    if pr_size.predict([1] + inputs_size) == 1: 
        print("El resultado es 1 (Grande)\n")
    else: 
        print("El resultado es 0 (Pequeño)\n")

    # Tercer perceptron
    pr_aggression = Perceptron(4, 0.1)
    weights_aggression = []
    errors_aggression = []

    for _ in range(100):
        for aggression_data in input_data_aggression:
            output_aggression = aggression_data[-1]
            input_aggression = [1] + aggression_data[0:-1]
            weights_aggression.append(pr_aggression._w)
            error_aggression = pr_aggression.train(input_aggression, output_aggression)
            errors_aggression.append(error_aggression)

    has_scars = float(input("¿Tiene cicatrices? (0-NO o 1-SI): "))
    is_temperamental = float(input("¿Es temperamental? (0-NO o 1-SI): "))
    growls = float(input("¿Gruñe? (0-NO o 1-SI): "))

    inputs_aggression = [has_scars, is_temperamental, growls]

    if pr_aggression.predict([1] + inputs_aggression) == 1: 
        print("El resultado es 1 (Muy agresivo)\n")
    else: 
        print("El resultado es 0 (Poco agresivo)\n")

    # Cuarto perceptron
    pr_animal = Perceptron(4, 0.1)
    weights_animal = []
    errors_animal = []

    for _ in range(100):
        for animal_data in input_data_animal:
            output_animal = animal_data[-1]
            input_animal = [1] + animal_data[0:-1]
            weights_animal.append(pr_animal._w)
            error_animal = pr_animal.train(input_animal, output_animal)
            errors_animal.append(error_animal)

    habitat_prediction = pr_habitat.predict([1] + inputs_habitat)
    size_prediction = pr_size.predict([1] + inputs_size)
    aggression_prediction = pr_aggression.predict([1] + inputs_aggression)

    inputs_animal = [habitat_prediction, size_prediction, aggression_prediction]

    if pr_animal.predict([1] + inputs_animal) == 1: 
        print("El resultado es 1 (Lobo)\n")
    else: 
        print("El resultado es 0")