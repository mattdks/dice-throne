import random
import math

def roll_dice(n, hand):
    output = hand
    for die in range(n):
        output.append(random.randint(1,6))
    return sorted(output)

