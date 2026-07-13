tasks = []

def show_menu():
    print("\n========== TO-DO LIST =========")
    print("1. Task Dekho")
    print("2. Naya Task Add Karo")
    print("3. Task Complete Karo")
    print("4. Task Delete Karo")
    print("5. Exit")
    print("============================")

    def show_tasks():
        if len(tasks) == 0:
            print("\nKoi task nahi hai. pahla karo!")
        else:
            print("\nTumhare Tasks:")
            for i, task in enumerate(tasks, 1):  
               print(f"{i}. {task}")

    def add_task():
        task = input("Naya task likho:")
        tasks.append(task)
        print(f"Shabash! Task add ho ghaya: {task}")

    def complete_task():
        show_tasks()
        try:
            num = int(input("Kaunsa task complete karna hai? Number likho: "))
            if 1 <= num <= len(tasks):
                completed_task = tasks.pop(num - 1)
                print(f"Shabash! Task complete: {completed_task}")
            else:
                print("Ghalat number hai jani")
        except ValueError:
            print("Sirf number likho.")

    def delete_task():
        show_tasks()
        try:
            num = int(input("Kaunsa task delete karna hai? Number likho: "))
            if 1 <= num <= len(tasks):
                deleted_task = tasks.pop(num - 1)
                print(f"Shabash! Task delete ho ghaya: {deleted_task}")
            else:
                print("Ghalat number hai jani")
        except ValueError:
            print("Sirf number likho.")

  #Main loop
    while True:
        show_menu()
        choice = input("Apna choice likho (1-5): ")

        if choice == '1':
            show_tasks()
        elif choice == '2':
            add_task()
        elif choice == '3':
            complete_task()
        elif choice == '4':
            delete_task()
        elif choice == '5':
            print("Bye! Tumhara din shubh ho.")
            break
        else:
            print("Ghalat choice hai jani. 1 se 5 tak ka number likho.")