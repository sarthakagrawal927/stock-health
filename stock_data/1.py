import json

filename = '1.txt'
dict1 = {}

with open(filename) as fh:

    for line in fh:
        arr = line.split('|')
        try:
            if(arr[1].index("Common Stock")):
                dict1[arr[0]] = arr[1][0:arr[1].index("-")-1]
        except ValueError:
            pass

stock_list = {}
stock_list = [
    {
        'value': stock,
        'label': stock + " - " + dict1[stock],
        'instanceID': stock + " - " + dict1[stock]
    } for stock in dict1
]

out_file = open("test.json", "w")
json.dump(stock_list, out_file, indent=4, sort_keys=True)
out_file.close()
