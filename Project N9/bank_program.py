# Creat a Bank Program

def show_balance(balance):
    print(f"Your Balance is ${balance:.2f}")

def deposite(balance):
    money = float(input("Enter your deposite: "))

    if money < 0:
        print("Enter the valid amount.")
    else:
        return money

def withdraw(balance):
    money = float(input("Enter Withdraw amount: "))

    if money > balance:
        print("Enter valid amount.")
        return 0
    elif money < 0:
        print("amount must be greater than 0.")
        return 0
    else:
        return money





def main():
    balance = 0
    running = True

    
    while running:
        print("How Can I Help?")
        print("1) Show Balance.")
        print("2) Deposit.")
        print("3) Withdraw.")
        print("4) Exit.")

        help = input("Enter your choise (1/4): ")

        if help == "1":
            show_balance(balance)
        elif help == "2":
            balance += deposite(balance)
        elif help == "3":
            balance -= withdraw(balance)
        elif help == "4":
            print("Thx for use our service")
            running = False
        else:
            print("Enter the valid choice")





if __name__ == '__main__':
    main()