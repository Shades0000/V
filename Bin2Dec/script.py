def BinaryCon():
  is_ok=[]
  num= str(input())

  if len(num) < 9:

    for i in num:

      if i == '0' or i == '1':
        is_ok.append(True)

      else:
        is_ok.append(False)

    if False not in is_ok:
      print(int(num, 2))

    else:
      print("Enter only 0 or 1")

  else:
    print('Enter max eight digits')

BinaryCon()