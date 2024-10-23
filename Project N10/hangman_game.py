# now we creat the hang man game for fun

# import random libary beacouse we want to guess random word
from word_list import words
import random

#creat the list of word that we can gusee word from thi list
list_word = ["apple", "orange", "pinapple", "banana"]

hangman_art = {  0: ("  ",
                    "  ", 
                    "  "),

                1: (" o ",
                    "   ", 
                    "   "),

                2: (" O ",
                    " | ",
                    "   "),

                3: (" O ",
                    "/| ",
                    "   "),
                    
                4: (" O ",
                    "/|\\",
                    "   "),
                5: (" O ",
                    "/|\\ ",
                    "/ "),
                6: (" O ",
                    "/|\\",
                    "/ \\")
            }

def display_hangman(hangman):
    
    for i in hangman_art[hangman]:
        print(i)

def display_answer(answer):
    print(" ".join(answer))

def display_hint(hint):
    print(" ".join(hint))

def main():

    answer = random.choice(words)
    hint = ["_"] * len(answer)
    wrong_gueesed = 0
    guess_letter = set()
    run = True

    while run:
        display_hangman(wrong_gueesed)
        display_hint(hint)
        guess = input("guess the letter: ").lower()

        if guess in answer:
            for i in range(len(answer)):
                if answer[i] == guess:
                    hint[i] = guess
        else:
            wrong_gueesed += 1

            if wrong_gueesed == 6:
                display_hangman(6)
                print("you lose!")
                run = False

        if len(guess) != 1 or not guess.isalpha:
            print("invalid letter!")


        if "_" not in hint:
            print("************************")
            display_answer(answer)
            print("you guess word.")
            run = False
            print("*************************")

        if guess in guess_letter:
            print(f"{guess} is alredy used")

            guess_letter.add(guess)


if __name__ == "__main__":
    main()

