my_array = [7, 12, 9, 4, 11]

min_value = my_array[0]

for value in my_array:
    if value < min_value:
        min_value = value
    
print(min_value)