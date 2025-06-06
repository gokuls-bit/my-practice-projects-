import random 
n = random.randint(1, 100)
a = -1
guesses = 0
while (a !=n):
    guesses += 1
    a = int(input("Enter your guess: "))
    if a < n:
        print("Too low!")
    elif a > n:
        print("Too high!")
    else:
        print(f"Congratulations! You've guessed the number {n} in {guesses} attempts.")