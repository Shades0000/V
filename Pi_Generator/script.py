# Chudnovsky algorithm for figuring out pi

from math import factorial
from decimal import Decimal, getcontext


def pi_to_n(n):
    getcontext().prec = 1000
    A = Decimal(545140134)
    B = Decimal(13591409)
    C = Decimal(640320)
    X = Decimal(0)
    Y = Decimal(0)
    pi_chud = Decimal(0)
    for i in range(100):

        X = (-1**i) * factorial(6*i) * (A*i+B)
        Y = factorial(3*i) * (factorial(i)**3) * C**(3*i+Decimal(3/2))
        pi_chud += Decimal(12) * (X/Y)

    pi_chud = abs(1/pi_chud)
    return round(pi_chud, n)