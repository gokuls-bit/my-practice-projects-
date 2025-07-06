import random

# Randomly set computer's move
# 1 = Snake, -1 = Water, 0 = Gun
computer = random.choice([1, -1, 0])

# Map string choices to numeric values
yourDict = {"s": 1, "w": -1, "g": 0}

# Get user input
youstr = input("Enter your choice (s for Snake, w for Water, g for Gun): ").lower()

# Validate user input
if youstr not in yourDict: 
    print("Invalid input! Please enter 's', 'w', or 'g'.")
else:
    you = yourDict[youstr]

    # Determine result
    if computer == you:
        print("It's a tie!")
    elif (computer == 1 and you == -1) or (computer == -1 and you == 0) or (computer == 0 and you == 1):
        print("You lose!")
    else:
        print("You win!")

    # Show computer's choice for clarity
    reverseDict = {1: "Snake", -1: "Water", 0: "Gun"}
    print(f"Computer chose: {reverseDict[computer]}")
