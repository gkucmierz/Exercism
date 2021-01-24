def convert(number):
    res = [];
    if number % 3 == 0:
        res.append('Pling')
    if number % 5 == 0:
        res.append('Plang')
    if number % 7 == 0:
        res.append('Plong')
    if len(res) == 0:
        return str(number)
    return ''.join(res)
